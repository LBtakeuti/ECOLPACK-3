import { getDB } from '@/lib/db/database'
import { format } from 'date-fns'
import { ja } from 'date-fns/locale'

interface NewsItem {
  id: number
  title: string
  content: string
  status: string
  published_at: string | null
  created_at: string
}

export default async function NewsList({ limit = 5 }: { limit?: number }) {
  const db = await getDB()
  const news = await db.all(
    `SELECT * FROM news 
     WHERE status = 'published' AND published_at <= datetime('now')
     ORDER BY published_at DESC 
     LIMIT ?`,
    limit
  )

  if (news.length === 0) {
    return (
      <div className="text-center text-eco-gray py-8">
        ニュースはまだありません。
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {news.map((item: NewsItem) => (
        <article key={item.id} className="bg-white rounded-lg shadow p-6">
          <time className="text-sm text-eco-gray">
            {item.published_at
              ? format(new Date(item.published_at), 'yyyy年MM月dd日', { locale: ja })
              : format(new Date(item.created_at), 'yyyy年MM月dd日', { locale: ja })}
          </time>
          <h3 className="text-xl font-bold text-eco-dark mt-2 mb-3">
            {item.title}
          </h3>
          <p className="text-eco-gray">
            {item.content}
          </p>
        </article>
      ))}
    </div>
  )
}