import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

// Supabaseが設定されているかチェック
export const isSupabaseConfigured = () => {
  return supabaseUrl && supabaseAnonKey
}

// Supabaseクライアントの作成
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// 画像アップロード用の関数
export async function uploadImageToSupabase(file: File, folder: string = 'uploads') {
  if (!isSupabaseConfigured()) {
    throw new Error('Supabase is not configured')
  }

  const fileExt = file.name.split('.').pop()
  const fileName = `${folder}/${Date.now()}.${fileExt}`

  const { data, error } = await supabase.storage
    .from('images')
    .upload(fileName, file)

  if (error) {
    throw error
  }

  // 公開URLを取得
  const { data: { publicUrl } } = supabase.storage
    .from('images')
    .getPublicUrl(fileName)

  return publicUrl
}

// 画像削除用の関数
export async function deleteImageFromSupabase(filePath: string) {
  if (!isSupabaseConfigured()) {
    throw new Error('Supabase is not configured')
  }

  // URLからファイルパスを抽出
  const url = new URL(filePath)
  const pathParts = url.pathname.split('/storage/v1/object/public/images/')
  if (pathParts.length < 2) {
    throw new Error('Invalid Supabase image URL')
  }
  
  const fileName = pathParts[1]

  const { error } = await supabase.storage
    .from('images')
    .remove([fileName])

  if (error) {
    throw error
  }
}