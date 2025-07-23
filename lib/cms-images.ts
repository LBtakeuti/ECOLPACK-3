import { getDB } from './db/database'

export interface PageImage {
  id: number
  page_name: string
  image_name: string
  file_path: string
  alt_text: string
  created_at: string
}

export async function getPageImages(pageName: string): Promise<Record<string, PageImage>> {
  try {
    const db = await getDB()
    const images = await db.all(
      'SELECT * FROM page_images WHERE page_name = ?',
      pageName
    )
    
    const imageMap: Record<string, PageImage> = {}
    images.forEach((img: PageImage) => {
      imageMap[img.image_name] = img
    })
    
    return imageMap
  } catch (error) {
    console.error('Error fetching page images:', error)
    return {}
  }
}

export async function getPageImage(pageName: string, imageName: string): Promise<string | null> {
  try {
    const db = await getDB()
    const image = await db.get(
      'SELECT file_path FROM page_images WHERE page_name = ? AND image_name = ?',
      pageName,
      imageName
    )
    
    return image?.file_path || null
  } catch (error) {
    console.error('Error fetching page image:', error)
    return null
  }
}