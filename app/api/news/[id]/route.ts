import { NextRequest, NextResponse } from 'next/server'
import { getDB } from '@/lib/db/database'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const db = await getDB()
    const newsItem = await db.get('SELECT * FROM news WHERE id = ?', params.id)
    
    if (!newsItem) {
      return NextResponse.json(
        { error: 'News not found' },
        { status: 404 }
      )
    }
    
    return NextResponse.json(newsItem)
  } catch (error) {
    console.error('Error fetching news:', error)
    return NextResponse.json(
      { error: 'Failed to fetch news' },
      { status: 500 }
    )
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { title, content, status, published_at } = await request.json()
    
    const db = await getDB()
    await db.run(
      `UPDATE news 
       SET title = ?, content = ?, status = ?, published_at = ?, updated_at = CURRENT_TIMESTAMP
       WHERE id = ?`,
      title,
      content,
      status,
      published_at,
      params.id
    )
    
    const updatedItem = await db.get('SELECT * FROM news WHERE id = ?', params.id)
    
    return NextResponse.json(updatedItem)
  } catch (error) {
    console.error('Error updating news:', error)
    return NextResponse.json(
      { error: 'Failed to update news' },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const db = await getDB()
    await db.run('DELETE FROM news WHERE id = ?', params.id)
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting news:', error)
    return NextResponse.json(
      { error: 'Failed to delete news' },
      { status: 500 }
    )
  }
}