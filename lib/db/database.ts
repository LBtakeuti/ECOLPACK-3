import sqlite3 from 'sqlite3'
import { open } from 'sqlite'
import path from 'path'
import bcrypt from 'bcryptjs'

let db: any = null

export async function getDB() {
  // 本番環境（Vercel）でSupabaseが設定されている場合
  if (process.env.VERCEL && process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY) {
    const { getDB: getProdDB } = await import('./database-prod')
    return getProdDB()
  }
  
  // Vercelビルド時のみモックを返す
  if (process.env.VERCEL && !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return {
      get: async () => null,
      all: async () => [],
      run: async () => ({ lastID: 1, changes: 1 }),
      exec: async () => null
    }
  }
  if (!db) {
    db = await open({
      filename: path.join(process.cwd(), 'cms.db'),
      driver: sqlite3.Database
    })
    
    // Initialize tables
    await db.exec(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE NOT NULL,
        password_hash TEXT NOT NULL
      );
      
      CREATE TABLE IF NOT EXISTS news (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        content TEXT NOT NULL,
        status TEXT DEFAULT 'draft',
        published_at DATETIME,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );
      
      CREATE TABLE IF NOT EXISTS page_images (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        page_name TEXT NOT NULL,
        image_name TEXT NOT NULL,
        file_path TEXT NOT NULL,
        alt_text TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        UNIQUE(page_name, image_name)
      );
    `)
    
    // Create default admin user if not exists
    const admin = await db.get('SELECT * FROM users WHERE username = ?', 'admin')
    if (!admin) {
      const hashedPassword = await bcrypt.hash('admin123', 10)
      await db.run(
        'INSERT INTO users (username, password_hash) VALUES (?, ?)',
        'admin',
        hashedPassword
      )
    }
  }
  
  return db
}

export async function validateUser(username: string, password: string) {
  // 本番環境（Vercel）でSupabaseが設定されている場合
  if (process.env.VERCEL && process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY) {
    const { validateUser: validateProdUser } = await import('./database-prod')
    return validateProdUser(username, password)
  }
  
  // Vercelビルド時のみfalseを返す
  if (process.env.VERCEL && !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return false
  }
  
  const db = await getDB()
  const user = await db.get('SELECT * FROM users WHERE username = ?', username)
  
  if (!user) return false
  
  return bcrypt.compare(password, user.password_hash)
}