import { NextRequest, NextResponse } from 'next/server'
import { validateUser } from '@/lib/db/database'
import { getSession } from '@/lib/session'

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json()
    
    const isValid = await validateUser(username, password)
    
    if (!isValid) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      )
    }
    
    const session = await getSession()
    session.isLoggedIn = true
    session.username = username
    await session.save()
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}