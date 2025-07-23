import { NextRequest, NextResponse } from 'next/server'
import { validateUser } from '@/lib/db/database'
import { getSession } from '@/lib/session'

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json()
    
    console.log('Login attempt for:', username)
    
    // 環境変数の確認（デバッグ用）
    const envCheck = {
      hasUrl: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
      hasServiceKey: !!process.env.SUPABASE_SERVICE_ROLE_KEY,
      hasSessionSecret: !!process.env.SESSION_SECRET,
      isVercel: !!process.env.VERCEL
    }
    
    console.log('Environment check:', envCheck)
    
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
      console.error('Missing critical environment variables')
      return NextResponse.json(
        { 
          error: 'Server configuration error',
          debug: envCheck
        },
        { status: 500 }
      )
    }
    
    const isValid = await validateUser(username, password)
    console.log('Validation result:', isValid)
    
    if (!isValid) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      )
    }
    
    // セッション処理をtry-catchで囲む
    try {
      const session = await getSession()
      session.isLoggedIn = true
      session.username = username
      await session.save()
    } catch (sessionError) {
      console.error('Session error:', sessionError)
      // セッションエラーでも一時的に成功を返す（デバッグ用）
      return NextResponse.json({ 
        success: true, 
        warning: 'Session save failed but login validated',
        debug: {
          sessionError: sessionError instanceof Error ? sessionError.message : 'Unknown session error',
          hasSessionSecret: !!process.env.SESSION_SECRET
        }
      })
    }
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json(
      { 
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error',
        stack: process.env.NODE_ENV === 'development' ? (error instanceof Error ? error.stack : undefined) : undefined
      },
      { status: 500 }
    )
  }
}