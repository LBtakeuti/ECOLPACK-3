'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import Link from 'next/link'

interface NewsForm {
  title: string
  content: string
  status: 'draft' | 'published'
  published_at: string
}

export default function NewNewsPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm<NewsForm>({
    defaultValues: {
      status: 'draft',
      published_at: new Date().toISOString().split('T')[0]
    }
  })

  const onSubmit = async (data: NewsForm) => {
    setLoading(true)
    try {
      const response = await fetch('/api/news', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Failed to create news')
      }

      router.push('/admin/news')
    } catch (error) {
      console.error('Error creating news:', error)
      alert('ニュースの作成に失敗しました')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <h2 className="text-3xl font-bold text-eco-dark mb-8">ニュース新規作成</h2>

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
            {loading ? '作成中...' : '作成'}
          </button>
        </div>
      </form>
    </div>
  )
}