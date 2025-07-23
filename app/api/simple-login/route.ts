import { NextRequest, NextResponse } from 'next/server'
import { validateUser } from '@/lib/db/database'

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json()
    
    // 認証のみ実行（セッション保存はスキップ）
    const isValid = await validateUser(username, password)
    
    if (!isValid) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      )
    }
    
    // 成功レスポンスを返す（セッション保存なし）
    const response = NextResponse.json({ 
      success: true,
      message: 'Authentication successful (session disabled for debugging)'
    })
    
    // 簡易的なクッキーを設定（デバッグ用）
    response.cookies.set('cms-debug-auth', 'true', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 // 1時間
    })
    
    return response
  } catch (error) {
    console.error('Simple login error:', error)
    return NextResponse.json(
      { 
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}