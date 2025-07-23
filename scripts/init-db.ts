import { getDB } from '../lib/db/database'

async function initDB() {
  console.log('Initializing database...')
  
  try {
    const db = await getDB()
    console.log('✓ Database initialized successfully')
    
    // Check if admin exists
    const admin = await db.get('SELECT * FROM users WHERE username = ?', 'admin')
    if (admin) {
      console.log('✓ Admin user already exists')
    } else {
      console.log('✓ Admin user created (username: admin, password: admin123)')
    }
    
    console.log('\nDatabase is ready!')
    process.exit(0)
  } catch (error) {
    console.error('Error initializing database:', error)
    process.exit(1)
  }
}

initDB()