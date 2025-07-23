import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'

export async function POST() {
  try {
    // 直接Supabaseに接続
    const { createClient } = await import('@supabase/supabase-js')
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY
    
    if (!supabaseUrl || !supabaseServiceKey) {
      return NextResponse.json({
        error: 'Missing Supabase configuration'
      }, { status: 500 })
    }
    
    const supabase = createClient(supabaseUrl, supabaseServiceKey)
    
    // パスワードをハッシュ化
    const hashedPassword = await bcrypt.hash('admin123', 10)
    
    // 既存のadminユーザーを確認
    const { data: existingUser } = await supabase
      .from('users')
      .select('id')
      .eq('username', 'admin')
      .single()
    
    if (existingUser) {
      // 既存の場合は更新
      const { error } = await supabase
        .from('users')
        .update({ password_hash: hashedPassword })
        .eq('username', 'admin')
      
      if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
      }
      
      return NextResponse.json({ 
        message: 'Admin user updated successfully',
        username: 'admin',
        password: 'admin123'
      })
    } else {
      // 新規作成
      const { error } = await supabase
        .from('users')
        .insert([
          { username: 'admin', password_hash: hashedPassword }
        ])
      
      if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
      }
      
      return NextResponse.json({ 
        message: 'Admin user created successfully',
        username: 'admin',
        password: 'admin123'
      })
    }
  } catch (error) {
    return NextResponse.json({
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}