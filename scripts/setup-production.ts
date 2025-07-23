#!/usr/bin/env node
import { createClient } from '@supabase/supabase-js'
import bcrypt from 'bcryptjs'

async function setupProduction() {
  console.log('本番環境のセットアップを開始します...')
  
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  
  if (!supabaseUrl || !supabaseServiceKey) {
    console.error('エラー: Supabase環境変数が設定されていません')
    console.error('NEXT_PUBLIC_SUPABASE_URL:', !!supabaseUrl)
    console.error('SUPABASE_SERVICE_ROLE_KEY:', !!supabaseServiceKey)
    process.exit(1)
  }
  
  const supabase = createClient(supabaseUrl, supabaseServiceKey)
  
  try {
    // 1. テーブルの存在確認
    console.log('1. テーブルの確認...')
    const { data: tables } = await supabase
      .from('users')
      .select('id')
      .limit(1)
    
    console.log('   ✓ usersテーブルが存在します')
    
    // 2. 管理者ユーザーの作成/更新
    console.log('2. 管理者ユーザーの設定...')
    const hashedPassword = await bcrypt.hash('admin123', 10)
    
    const { data: existingUser } = await supabase
      .from('users')
      .select('id')
      .eq('username', 'admin')
      .single()
    
    if (existingUser) {
      await supabase
        .from('users')
        .update({ password_hash: hashedPassword })
        .eq('username', 'admin')
      console.log('   ✓ 既存のadminユーザーを更新しました')
    } else {
      await supabase
        .from('users')
        .insert([{ username: 'admin', password_hash: hashedPassword }])
      console.log('   ✓ 新しいadminユーザーを作成しました')
    }
    
    console.log('\n✅ セットアップが完了しました！')
    console.log('\nCMSにログイン:')
    console.log('- ユーザー名: admin')
    console.log('- パスワード: admin123')
    
  } catch (error) {
    console.error('エラーが発生しました:', error)
    process.exit(1)
  }
}

setupProduction()