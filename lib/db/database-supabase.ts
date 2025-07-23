import { createClient } from '@supabase/supabase-js'
import bcrypt from 'bcryptjs'

// Supabaseクライアントを遅延初期化
let supabase: ReturnType<typeof createClient> | null = null

function getSupabaseClient() {
  if (!supabase) {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY
    
    console.log('Initializing Supabase client:', {
      hasUrl: !!supabaseUrl,
      urlStart: supabaseUrl?.substring(0, 20),
      hasServiceKey: !!supabaseServiceKey,
      keyStart: supabaseServiceKey?.substring(0, 10)
    })
    
    if (supabaseUrl && supabaseServiceKey) {
      supabase = createClient(supabaseUrl, supabaseServiceKey)
      console.log('Supabase client created successfully')
    } else {
      console.error('Cannot create Supabase client - missing credentials')
    }
  }
  return supabase
}

export async function getDB() {
  const client = getSupabaseClient()
  if (!client) {
    throw new Error('Supabase is not configured. Please set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY')
  }
  
  // SQLiteのインターフェースに合わせたラッパー
  return {
    async get(query: string, ...params: any[]) {
      const tableName = extractTableName(query)
      const { data, error } = await client
        .from(tableName)
        .select('*')
        .single()
      
      if (error && error.code !== 'PGRST116') throw error
      return data
    },
    
    async all(query: string, ...params: any[]) {
      const tableName = extractTableName(query)
      const { data, error } = await client
        .from(tableName)
        .select('*')
      
      if (error) throw error
      return data || []
    },
    
    async run(query: string, ...params: any[]) {
      // INSERT/UPDATE/DELETE操作をSupabaseに変換
      if (query.toLowerCase().includes('insert')) {
        return handleInsert(query, params)
      } else if (query.toLowerCase().includes('update')) {
        return handleUpdate(query, params)
      } else if (query.toLowerCase().includes('delete')) {
        return handleDelete(query, params)
      }
      
      return { lastID: 1, changes: 1 }
    },
    
    async exec(query: string) {
      // テーブル作成は事前にSupabaseで行う
      return null
    }
  }
}

export async function validateUser(username: string, password: string) {
  console.log('validateUser called for:', username)
  
  const client = getSupabaseClient()
  if (!client) {
    console.error('Supabase client is null')
    return false
  }
  
  try {
    console.log('Querying users table...')
    const { data: user, error } = await client
      .from('users')
      .select('*')
      .eq('username', username)
      .single()
    
    if (error) {
      console.error('Supabase query error:', error.message, error.code)
      return false
    }
    
    if (!user) {
      console.error('No user found with username:', username)
      return false
    }
    
    console.log('User found:', { id: user.id, username: user.username })
    
    // 型安全性のチェック
    if (!user.password_hash || typeof user.password_hash !== 'string') {
      console.error('Invalid password hash in database:', typeof user.password_hash)
      return false
    }
    
    console.log('Comparing passwords...')
    const isValid = await bcrypt.compare(password, user.password_hash)
    console.log('Password comparison result:', isValid)
    
    return isValid
  } catch (error) {
    console.error('Validation error:', error)
    return false
  }
}

// ヘルパー関数
function extractTableName(query: string): string {
  const match = query.match(/FROM\s+(\w+)/i)
  return match ? match[1] : ''
}

async function handleInsert(query: string, params: any[]) {
  const client = getSupabaseClient()
  if (!client) throw new Error('Supabase client not initialized')
  
  const tableName = query.match(/INSERT INTO\s+(\w+)/i)?.[1] || ''
  const columns = query.match(/\((.*?)\)/)?.[1].split(',').map(c => c.trim()) || []
  
  const data: any = {}
  columns.forEach((col, i) => {
    data[col] = params[i]
  })
  
  const { data: result, error } = await client
    .from(tableName)
    .insert(data)
    .select()
  
  if (error) throw error
  return { lastID: result?.[0]?.id || 1, changes: 1 }
}

async function handleUpdate(query: string, params: any[]) {
  const client = getSupabaseClient()
  if (!client) throw new Error('Supabase client not initialized')
  
  const tableName = query.match(/UPDATE\s+(\w+)/i)?.[1] || ''
  // 簡易的な実装 - 実際の使用ケースに応じて拡張が必要
  const { error } = await client
    .from(tableName)
    .update({})
    .eq('id', params[params.length - 1])
  
  if (error) throw error
  return { lastID: 1, changes: 1 }
}

async function handleDelete(query: string, params: any[]) {
  const client = getSupabaseClient()
  if (!client) throw new Error('Supabase client not initialized')
  
  const tableName = query.match(/DELETE FROM\s+(\w+)/i)?.[1] || ''
  // 簡易的な実装 - 実際の使用ケースに応じて拡張が必要
  const { error } = await client
    .from(tableName)
    .delete()
    .eq('id', params[0])
  
  if (error) throw error
  return { lastID: 1, changes: 1 }
}