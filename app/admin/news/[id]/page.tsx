'use client'

import { useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { useForm } from 'react-hook-form'
import Link from 'next/link'

interface NewsForm {
  title: string
  content: string
  status: 'draft' | 'published'
  published_at: string
}

export default function EditNewsPage() {
  const router = useRouter()
  const params = useParams()
  const id = params.id as string
  const [loading, setLoading] = useState(false)
  const [fetching, setFetching] = useState(true)
  const { register, handleSubmit, reset, formState: { errors } } = useForm<NewsForm>()

  useEffect(() => {
    fetchNews()
  }, [])

  const fetchNews = async () => {
    try {
      const response = await fetch(`/api/news/${id}`)
      const data = await response.json()
      
      reset({
        title: data.title,
        content: data.content,
        status: data.status,
        published_at: data.published_at ? data.published_at.split('T')[0] : new Date().toISOString().split('T')[0]
      })
    } catch (error) {
      console.error('Error fetching news:', error)
    } finally {
      setFetching(false)
    }
  }

  const onSubmit = async (data: NewsForm) => {
    setLoading(true)
    try {
      const response = await fetch(`/api/news/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Failed to update news')
      }

      router.push('/admin/news')
    } catch (error) {
      console.error('Error updating news:', error)
      alert('ニュースの更新に失敗しました')
    } finally {
      setLoading(false)
    }
  }

  if (fetching) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-eco-gray">読み込み中...</div>
      </div>
    )
  }

  return (
    <div>
      <h2 className="text-3xl font-bold text-eco-dark mb-8">ニュース編集</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-lg shadow p-6">
        <div className="mb-6">
          <label htmlFor="title" className="block text-sm font-medium text-eco-dark mb-2">
            タイトル <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="title"
            {...register('title', { required: 'タイトルは必須です' })}
            className="w-full px-4 py-2 border border-eco-border rounded-lg focus:ring-2 focus:ring-eco-primary focus:border-transparent"
          />
          {errors.title && (
            <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>
          )}
        </div>

        <div className="mb-6">
          <label htmlFor="content" className="block text-sm font-medium text-eco-dark mb-2">
            本文 <span className="text-red-500">*</span>
          </label>
          <textarea
            id="content"
            rows={10}
            {...register('content', { required: '本文は必須です' })}
            className="w-full px-4 py-2 border border-eco-border rounded-lg focus:ring-2 focus:ring-eco-primary focus:border-transparent"
          />
          {errors.content && (
            <p className="mt-1 text-sm text-red-600">{errors.content.message}</p>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="status" className="block text-sm font-medium text-eco-dark mb-2">
              ステータス
            </label>
            <select
              id="status"
              {...register('status')}
              className="w-full px-4 py-2 border border-eco-border rounded-lg focus:ring-2 focus:ring-eco-primary focus:border-transparent"
            >
              <option value="draft">下書き</option>
              <option value="published">公開</option>
            </select>
          </div>

          <div>
            <label htmlFor="published_at" className="block text-sm font-medium text-eco-dark mb-2">
              公開日
            </label>
            <input
              type="date"
              id="published_at"
              {...register('published_at')}
              className="w-full px-4 py-2 border border-eco-border rounded-lg focus:ring-2 focus:ring-eco-primary focus:border-transparent"
            />
          </div>
        </div>

        <div className="flex justify-end space-x-4">
          <Link
            href="/admin/news"
            className="px-6 py-2 border border-eco-border rounded-lg hover:bg-eco-bg transition-colors font-semibold"
          >
            キャンセル
          </Link>
          <button
            type="submit"
            disabled={loading}
            className="bg-eco-primary text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors font-semibold disabled:opacity-50"
          >
            {loading ? '更新中...' : '更新'}
          </button>
        </div>
      </form>
    </div>
  )
}