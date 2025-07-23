import { createClient } from '@supabase/supabase-js'
import bcrypt from 'bcryptjs'

// Supabase設定
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || ''

// サービスロールキーを使用（サーバーサイドのみ）
const supabase = supabaseServiceKey ? createClient(supabaseUrl, supabaseServiceKey) : null

export async function getDB() {
  if (!supabase) {
    throw new Error('Supabase is not configured. Please set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY')
  }
  
  // SQLiteのインターフェースに合わせたラッパー
  return {
    async get(query: string, ...params: any[]) {
      const tableName = extractTableName(query)
      const { data, error } = await supabase
        .from(tableName)
        .select('*')
        .single()
      
      if (error && error.code !== 'PGRST116') throw error
      return data
    },
    
    async all(query: string, ...params: any[]) {
      const tableName = extractTableName(query)
      const { data, error } = await supabase
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
  if (!supabase) return false
  
  try {
    const { data: user, error } = await supabase
      .from('users')
      .select('*')
      .eq('username', username)
      .single()
    
    if (error || !user) {
      console.error('User lookup error:', error)
      return false
    }
    
    const isValid = await bcrypt.compare(password, user.password_hash)
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
  if (!supabase) throw new Error('Supabase client not initialized')
  
  const tableName = query.match(/INSERT INTO\s+(\w+)/i)?.[1] || ''
  const columns = query.match(/\((.*?)\)/)?.[1].split(',').map(c => c.trim()) || []
  
  const data: any = {}
  columns.forEach((col, i) => {
    data[col] = params[i]
  })
  
  const { data: result, error } = await supabase
    .from(tableName)
    .insert(data)
    .select()
  
  if (error) throw error
  return { lastID: result?.[0]?.id || 1, changes: 1 }
}

async function handleUpdate(query: string, params: any[]) {
  if (!supabase) throw new Error('Supabase client not initialized')
  
  const tableName = query.match(/UPDATE\s+(\w+)/i)?.[1] || ''
  // 簡易的な実装 - 実際の使用ケースに応じて拡張が必要
  const { error } = await supabase
    .from(tableName)
    .update({})
    .eq('id', params[params.length - 1])
  
  if (error) throw error
  return { lastID: 1, changes: 1 }
}

async function handleDelete(query: string, params: any[]) {
  if (!supabase) throw new Error('Supabase client not initialized')
  
  const tableName = query.match(/DELETE FROM\s+(\w+)/i)?.[1] || ''
  // 簡易的な実装 - 実際の使用ケースに応じて拡張が必要
  const { error } = await supabase
    .from(tableName)
    .delete()
    .eq('id', params[0])
  
  if (error) throw error
  return { lastID: 1, changes: 1 }
}