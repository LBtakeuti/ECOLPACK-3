import { NextResponse } from 'next/server'

export async function GET() {
  // 環境変数の直接確認
  const env = {
    NODE_ENV: process.env.NODE_ENV,
    VERCEL: !!process.env.VERCEL,
    SESSION_SECRET: !!process.env.SESSION_SECRET,
    SUPABASE_URL: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
    SUPABASE_ANON: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    SUPABASE_SERVICE: !!process.env.SUPABASE_SERVICE_ROLE_KEY,
  }
  
  // Supabase接続テスト
  let supabaseTest = 'not tested'
  try {
    if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY) {
      const { createClient } = await import('@supabase/supabase-js')
      const client = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.SUPABASE_SERVICE_ROLE_KEY
      )
      
      const { count, error } = await client
        .from('users')
        .select('*', { count: 'exact', head: true })
      
      if (error) {
        supabaseTest = `Error: ${error.message}`
      } else {
        supabaseTest = `Success: ${count} users found`
      }
    } else {
      supabaseTest = 'Missing credentials'
    }
  } catch (e) {
    supabaseTest = `Exception: ${e instanceof Error ? e.message : 'Unknown'}`
  }
  
  return NextResponse.json({
    environment: env,
    supabaseConnection: supabaseTest,
    timestamp: new Date().toISOString()
  })
}