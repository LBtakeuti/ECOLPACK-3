import { NextRequest, NextResponse } from 'next/server'
import { validateUser } from '@/lib/db/database'
import { getSession } from '@/lib/session'

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json()
    
    // 環境変数の確認（デバッグ用）
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
      console.error('Missing environment variables:', {
        hasUrl: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
        hasServiceKey: !!process.env.SUPABASE_SERVICE_ROLE_KEY
      })
    }
    
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