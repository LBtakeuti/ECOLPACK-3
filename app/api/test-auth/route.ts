import { NextResponse } from 'next/server'
import { validateUser } from '@/lib/db/database'

export async function POST() {
  try {
    // テスト用の認証確認
    const result = await validateUser('admin', 'admin123')
    
    return NextResponse.json({
      authResult: result,
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