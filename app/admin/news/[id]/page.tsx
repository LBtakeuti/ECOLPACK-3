import { notFound } from 'next/navigation'
import EditForm from './edit-form'

async function getNews(id: string) {
  // 直接データベースから取得（ビルド時のfetchエラーを回避）
  const { getDB } = await import('@/lib/db/database')
  
  try {
    const db = await getDB()
    const newsItem = await db.get('SELECT * FROM news WHERE id = ?', id)
    return newsItem
  } catch (error) {
    console.error('Error fetching news:', error)
    return null
  }
}

export default async function EditNewsPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const news = await getNews(id)

  if (!news) {
    notFound()
  }

  const initialData = {
    title: news.title,
    content: news.content,
    status: news.status as 'draft' | 'published',
    published_at: news.published_at ? news.published_at.split('T')[0] : new Date().toISOString().split('T')[0]
  }

  return (
    <div>
      <h2 className="text-3xl font-bold text-eco-dark mb-8">ニュース編集</h2>
      <EditForm id={id} initialData={initialData} />
    </div>
  )
}