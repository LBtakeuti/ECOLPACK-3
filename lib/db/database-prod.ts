// Production database stub for Vercel deployment
// In production, you should use a proper database like PostgreSQL or MySQL

export async function getDB() {
  // Return a mock database object for build time
  return {
    get: async () => null,
    all: async () => [],
    run: async () => ({ lastID: 1, changes: 1 }),
    exec: async () => null
  }
}

export async function validateUser(username: string, password: string) {
  // In production, implement proper authentication
  // For now, return false to prevent access
  return false
}