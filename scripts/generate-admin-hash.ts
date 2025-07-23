import bcrypt from 'bcryptjs'

async function generateHash() {
  const password = 'admin123' // 変更してください
  const hash = await bcrypt.hash(password, 10)
  console.log('Password hash for admin user:')
  console.log(hash)
  console.log('\nUse this SQL to create admin user:')
  console.log(`INSERT INTO users (username, password_hash) VALUES ('admin', '${hash}');`)
}

generateHash()