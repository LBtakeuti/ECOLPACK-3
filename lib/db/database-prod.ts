// Production database for Vercel deployment
// Uses Supabase if configured, otherwise returns mock

export async function getDB() {
  // Supabaseが設定されている場合は使用
  if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY) {
    const { getDB: getSupabaseDB } = await import('./database-supabase')
    return getSupabaseDB()
  }
  
  // Return a mock database object for build time
  return {
    get: async () => null,
    all: async () => [],
    run: async () => ({ lastID: 1, changes: 1 }),
    exec: async () => null
  }
}

export async function validateUser(username: string, password: string) {
  try {
    // Supabaseが設定されている場合は使用
    if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY) {
      const { validateUser: validateSupabaseUser } = await import('./database-supabase')
      return validateSupabaseUser(username, password)
    }
    
    // 環境変数が設定されていない場合のデバッグ情報
    console.error('Supabase not configured:', {
      hasUrl: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
      hasServiceKey: !!process.env.SUPABASE_SERVICE_ROLE_KEY
    })
    
    // For now, return false to prevent access
    return false
  } catch (error) {
    console.error('validateUser error:', error)
    return false
  }
}