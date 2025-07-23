import { NextRequest, NextResponse } from 'next/server'
import { getDB } from '@/lib/db/database'
import { writeFile, unlink } from 'fs/promises'
import path from 'path'
import { uploadImageToSupabase, deleteImageFromSupabase, isSupabaseConfigured } from '@/lib/supabase'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const page_name = searchParams.get('page_name')
    
    const db = await getDB()
    let query = 'SELECT * FROM page_images'
    const params = []
    
    if (page_name) {
      query += ' WHERE page_name = ?'
      params.push(page_name)
    }
    
    const images = await db.all(query, ...params)
    
    return NextResponse.json(images)
  } catch (error) {
    console.error('Error fetching images:', error)
    return NextResponse.json(
      { error: 'Failed to fetch images' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File
    const page_name = formData.get('page_name') as string
    const image_name = formData.get('image_name') as string
    const alt_text = formData.get('alt_text') as string

    if (!file || !page_name || !image_name) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // File type validation
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp']
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { error: 'Invalid file type. Only JPEG, PNG, GIF, and WebP are allowed.' },
        { status: 400 }
      )
    }

    // File size validation (5MB max)
    const maxSize = 5 * 1024 * 1024 // 5MB
    if (file.size > maxSize) {
      return NextResponse.json(
        { error: 'File size too large. Maximum size is 5MB.' },
        { status: 400 }
      )
    }

    let filePath: string

    // Supabaseが設定されている場合はSupabaseを使用、そうでない場合はローカル保存
    if (isSupabaseConfigured()) {
      try {
        filePath = await uploadImageToSupabase(file, `${page_name}/${image_name}`)
      } catch (error) {
        console.error('Error uploading to Supabase:', error)
        return NextResponse.json(
          { error: 'Failed to upload image to storage' },
          { status: 500 }
        )
      }
    } else {
      // ローカル保存（開発環境用）
      const bytes = await file.arrayBuffer()
      const buffer = Buffer.from(bytes)

      // Create unique filename
      const timestamp = Date.now()
      const extension = path.extname(file.name)
      const filename = `${page_name}_${image_name}_${timestamp}${extension}`
      const filepath = path.join(process.cwd(), 'public/uploads', filename)

      // Save file
      await writeFile(filepath, buffer)
      filePath = `/uploads/${filename}`
    }

    const db = await getDB()
    
    // Check if image already exists for this page/slot
    const existing = await db.get(
      'SELECT * FROM page_images WHERE page_name = ? AND image_name = ?',
      page_name,
      image_name
    )

    if (existing) {
      // Delete old file
      if (isSupabaseConfigured() && existing.file_path.includes('supabase')) {
        try {
          await deleteImageFromSupabase(existing.file_path)
        } catch (error) {
          console.error('Error deleting old file from Supabase:', error)
        }
      } else {
        try {
          await unlink(path.join(process.cwd(), 'public', existing.file_path))
        } catch (error) {
          console.error('Error deleting old file:', error)
        }
      }
      
      // Update record
      await db.run(
        `UPDATE page_images 
         SET file_path = ?, alt_text = ?, created_at = CURRENT_TIMESTAMP
         WHERE page_name = ? AND image_name = ?`,
        filePath,
        alt_text,
        page_name,
        image_name
      )
    } else {
      // Insert new record
      await db.run(
        `INSERT INTO page_images (page_name, image_name, file_path, alt_text) 
         VALUES (?, ?, ?, ?)`,
        page_name,
        image_name,
        filePath,
        alt_text
      )
    }

    return NextResponse.json({ 
      success: true,
      file_path: filePath
    })
  } catch (error) {
    console.error('Error uploading image:', error)
    return NextResponse.json(
      { error: 'Failed to upload image' },
      { status: 500 }
    )
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { page_name, image_name } = await request.json()
    
    const db = await getDB()
    const image = await db.get(
      'SELECT * FROM page_images WHERE page_name = ? AND image_name = ?',
      page_name,
      image_name
    )
    
    if (!image) {
      return NextResponse.json(
        { error: 'Image not found' },
        { status: 404 }
      )
    }
    
    // Delete file
    if (isSupabaseConfigured() && image.file_path.includes('supabase')) {
      try {
        await deleteImageFromSupabase(image.file_path)
      } catch (error) {
        console.error('Error deleting file from Supabase:', error)
      }
    } else {
      try {
        await unlink(path.join(process.cwd(), 'public', image.file_path))
      } catch (error) {
        console.error('Error deleting file:', error)
      }
    }
    
    // Delete record
    await db.run(
      'DELETE FROM page_images WHERE page_name = ? AND image_name = ?',
      page_name,
      image_name
    )
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting image:', error)
    return NextResponse.json(
      { error: 'Failed to delete image' },
      { status: 500 }
    )
  }
}