import { NextResponse } from 'next/server'

export async function GET() {
  // 環境変数の存在確認（値は表示しない）
  const config = {
    hasSupabaseUrl: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
    hasSupabaseAnon: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    hasSupabaseService: !!process.env.SUPABASE_SERVICE_ROLE_KEY,
    hasSessionSecret: !!process.env.SESSION_SECRET,
    isVercel: !!process.env.VERCEL,
    nodeEnv: process.env.NODE_ENV
  }
  
  return NextResponse.json(config)
}