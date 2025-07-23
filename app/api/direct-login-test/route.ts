import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'

export async function POST() {
  try {
    // 直接Supabaseに接続してテスト
    const { createClient } = await import('@supabase/supabase-js')
    
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY
    
    if (!url || !key) {
      return NextResponse.json({ 
        success: false, 
        error: 'Missing Supabase configuration',
        hasUrl: !!url,
        hasKey: !!key
      })
    }
    
    const supabase = createClient(url, key)
    
    // adminユーザーを検索
    const { data: user, error } = await supabase
      .from('users')
      .select('*')
      .eq('username', 'admin')
      .single()
    
    if (error) {
      return NextResponse.json({ 
        success: false, 
        error: `Database error: ${error.message}`,
        code: error.code
      })
    }
    
    if (!user) {
      return NextResponse.json({ 
        success: false, 
        error: 'Admin user not found' 
      })
    }
    
    // パスワードを確認
    const passwordValid = await bcrypt.compare('admin123', user.password_hash)
    
    return NextResponse.json({
      success: true,
      user: {
        id: user.id,
        username: user.username,
        hasPasswordHash: !!user.password_hash,
        passwordHashLength: user.password_hash?.length || 0,
        passwordValid: passwordValid
      }
    })
    
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined
    })
  }
}