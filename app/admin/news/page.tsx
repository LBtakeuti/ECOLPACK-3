'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { format } from 'date-fns'
import { ja } from 'date-fns/locale'

interface NewsItem {
  id: number
  title: string
  content: string
  status: string
  published_at: string | null
  created_at: string
  updated_at: string
}

export default function NewsListPage() {
  const [news, setNews] = useState<NewsItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchNews()
  }, [])

  const fetchNews = async () => {
    try {
      const response = await fetch('/api/news')
      const data = await response.json()
      setNews(data)
    } catch (error) {
      console.error('Error fetching news:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: number) => {
    if (!confirm('この記事を削除してもよろしいですか？')) return

    try {
      await fetch(`/api/news/${id}`, { method: 'DELETE' })
      fetchNews()
    } catch (error) {
      console.error('Error deleting news:', error)
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-eco-gray">読み込み中...</div>
      </div>
    )
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-eco-dark">ニュース管理</h2>
        <Link
          href="/admin/news/new"
          className="bg-eco-primary text-white px-6 py-2 rounded hover:bg-green-600 transition-colors font-semibold"
        >
          新規作成
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-eco-bg">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-eco-dark uppercase tracking-wider">
                タイトル
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-eco-dark uppercase tracking-wider">
                ステータス
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-eco-dark uppercase tracking-wider">
                公開日
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-eco-dark uppercase tracking-wider">
                作成日
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-eco-dark uppercase tracking-wider">
                操作
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-eco-border">
            {news.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-6 py-4 text-center text-eco-gray">
                  ニュース記事がありません
                </td>
              </tr>
            ) : (
              news.map((item) => (
                <tr key={item.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-eco-dark">
                      {item.title}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        item.status === 'published'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {item.status === 'published' ? '公開中' : '下書き'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-eco-gray">
                    {item.published_at
                      ? format(new Date(item.published_at), 'yyyy年MM月dd日', { locale: ja })
                      : '-'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-eco-gray">
                    {format(new Date(item.created_at), 'yyyy年MM月dd日', { locale: ja })}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Link
                      href={`/admin/news/${item.id}`}
                      className="text-eco-primary hover:text-green-600 mr-4"
                    >
                      編集
                    </Link>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      削除
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}