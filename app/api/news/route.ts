import { NextRequest, NextResponse } from 'next/server'
import { getDB } from '@/lib/db/database'

export async function GET() {
  try {
    const db = await getDB()
    const news = await db.all('SELECT * FROM news ORDER BY created_at DESC')
    
    return NextResponse.json(news)
  } catch (error) {
    console.error('Error fetching news:', error)
    return NextResponse.json(
      { error: 'Failed to fetch news' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const { title, content, status, published_at } = await request.json()
    
    const db = await getDB()
    const result = await db.run(
      `INSERT INTO news (title, content, status, published_at) 
       VALUES (?, ?, ?, ?)`,
      title,
      content,
      status || 'draft',
      published_at || null
    )
    
    const newItem = await db.get('SELECT * FROM news WHERE id = ?', result.lastID)
    
    return NextResponse.json(newItem)
  } catch (error) {
    console.error('Error creating news:', error)
    return NextResponse.json(
      { error: 'Failed to create news' },
      { status: 500 }
    )
  }
}