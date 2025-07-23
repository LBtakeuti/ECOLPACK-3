import { getDB } from '../lib/db/database'
import bcrypt from 'bcryptjs'
import * as readline from 'readline'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const question = (query: string): Promise<string> => {
  return new Promise((resolve) => {
    rl.question(query, resolve)
  })
}

async function setup() {
  console.log('=== エコロパックCMS セットアップ ===\n')
  
  try {
    // データベースを初期化
    console.log('データベースを初期化しています...')
    const db = await getDB()
    console.log('✓ データベースが初期化されました\n')
    
    // 管理者アカウントの作成
    console.log('管理者アカウントを作成します')
    
    const username = await question('ユーザー名 (デフォルト: admin): ') || 'admin'
    const password = await question('パスワード (デフォルト: admin123): ') || 'admin123'
    
    // 既存の管理者を確認
    const existingAdmin = await db.get('SELECT * FROM users WHERE username = ?', username)
    
    if (existingAdmin) {
      const overwrite = await question('既存のユーザーが存在します。上書きしますか？ (y/N): ')
      if (overwrite.toLowerCase() !== 'y') {
        console.log('セットアップをキャンセルしました')
        process.exit(0)
      }
      
      // 既存ユーザーを削除
      await db.run('DELETE FROM users WHERE username = ?', username)
    }
    
    // 新しい管理者を作成
    const hashedPassword = await bcrypt.hash(password, 10)
    await db.run(
      'INSERT INTO users (username, password_hash) VALUES (?, ?)',
      username,
      hashedPassword
    )
    
    console.log('✓ 管理者アカウントが作成されました\n')
    
    // サンプルデータの作成
    const createSample = await question('サンプルニュースを作成しますか？ (y/N): ')
    
    if (createSample.toLowerCase() === 'y') {
      await db.run(
        `INSERT INTO news (title, content, status, published_at) 
         VALUES (?, ?, ?, ?)`,
        'エコロパックCMSへようこそ',
        'このサンプル記事は、CMSの動作確認用です。自由に編集・削除してください。',
        'published',
        new Date().toISOString()
      )
      console.log('✓ サンプルニュースが作成されました\n')
    }
    
    console.log('=== セットアップ完了 ===')
    console.log('\n以下の情報でログインできます:')
    console.log(`URL: http://localhost:3000/admin`)
    console.log(`ユーザー名: ${username}`)
    console.log(`パスワード: ${password}`)
    console.log('\n注意: 本番環境では必ずパスワードを変更してください')
    
  } catch (error) {
    console.error('セットアップ中にエラーが発生しました:', error)
    rl.close()
    process.exit(1)
  }
  
  rl.close()
  process.exit(0)
}

// スクリプトを実行
setup()