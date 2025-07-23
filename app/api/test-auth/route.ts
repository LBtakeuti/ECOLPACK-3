import { NextResponse } from 'next/server'
import { validateUser } from '@/lib/db/database'

export async function POST() {
  try {
    // 直接Supabaseに接続してテスト
    const { createClient } = await import('@supabase/supabase-js')
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY
    
    if (!supabaseUrl || !supabaseServiceKey) {
      return NextResponse.json({
        error: 'Missing Supabase configuration',
        env: {
          hasUrl: !!supabaseUrl,
          hasServiceKey: !!supabaseServiceKey
        }
      }, { status: 500 })
    }
    
    const supabase = createClient(supabaseUrl, supabaseServiceKey)
    
    // usersテーブルの内容を確認
    const { data: users, error: usersError } = await supabase
      .from('users')
      .select('id, username')
    
    // テスト用の認証確認
    const result = await validateUser('admin', 'admin123')
    
    return NextResponse.json({
      authResult: result,
      usersTable: {
        error: usersError?.message,
        count: users?.length || 0,
        users: users?.map(u => ({ id: u.id, username: u.username })) || []
      },
      env: {
        hasSupabaseUrl: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
        hasSupabaseService: !!process.env.SUPABASE_SERVICE_ROLE_KEY,
        isVercel: !!process.env.VERCEL,
        // 部分的な値を表示（セキュリティのため最初の10文字のみ）
        urlPrefix: process.env.NEXT_PUBLIC_SUPABASE_URL?.substring(0, 10) || 'not-set',
        serviceKeyPrefix: process.env.SUPABASE_SERVICE_ROLE_KEY?.substring(0, 10) || 'not-set'
      }
    })
  } catch (error) {
    return NextResponse.json({
      error: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined
    }, { status: 500 })
  }
}