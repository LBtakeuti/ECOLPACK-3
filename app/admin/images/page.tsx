'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface PageImage {
  id: number
  page_name: string
  image_name: string
  file_path: string
  alt_text: string
  created_at: string
}

const pages = [
  { id: 'home', name: 'トップページ', images: ['hero', 'banner', 'gallery1', 'gallery2', 'gallery3'] },
  { id: 'about', name: '会社概要', images: ['hero', 'banner', 'gallery1', 'gallery2', 'gallery3'] },
  { id: 'service', name: 'サービス紹介', images: ['hero', 'banner', 'gallery1', 'gallery2', 'gallery3'] },
  { id: 'contact', name: 'お問い合わせ', images: ['hero', 'banner'] },
]

export default function ImagesPage() {
  const [selectedPage, setSelectedPage] = useState('home')
  const [images, setImages] = useState<Record<string, PageImage>>({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchImages()
  }, [selectedPage])

  const fetchImages = async () => {
    try {
      const response = await fetch(`/api/images?page_name=${selectedPage}`)
      const data = await response.json()
      
      const imageMap: Record<string, PageImage> = {}
      data.forEach((img: PageImage) => {
        imageMap[img.image_name] = img
      })
      setImages(imageMap)
    } catch (error) {
      console.error('Error fetching images:', error)
    }
  }

  const handleUpload = async (imageName: string, file: File) => {
    const formData = new FormData()
    formData.append('file', file)
    formData.append('page_name', selectedPage)
    formData.append('image_name', imageName)
    formData.append('alt_text', `${selectedPage} ${imageName} image`)

    setLoading(true)
    try {
      const response = await fetch('/api/images', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        throw new Error('Failed to upload image')
      }

      fetchImages()
    } catch (error) {
      console.error('Error uploading image:', error)
      alert('画像のアップロードに失敗しました')
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (imageName: string) => {
    if (!confirm('この画像を削除してもよろしいですか？')) return

    try {
      const response = await fetch('/api/images', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          page_name: selectedPage,
          image_name: imageName,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to delete image')
      }

      fetchImages()
    } catch (error) {
      console.error('Error deleting image:', error)
      alert('画像の削除に失敗しました')
    }
  }

  const currentPage = pages.find(p => p.id === selectedPage)

  return (
    <div>
      <h2 className="text-3xl font-bold text-eco-dark mb-8">画像管理</h2>

      <div className="mb-8">
        <label htmlFor="page" className="block text-sm font-medium text-eco-dark mb-2">
          ページ選択
        </label>
        <select
          id="page"
          value={selectedPage}
          onChange={(e) => setSelectedPage(e.target.value)}
          className="w-full max-w-md px-4 py-2 border border-eco-border rounded-lg focus:ring-2 focus:ring-eco-primary focus:border-transparent"
        >
          {pages.map((page) => (
            <option key={page.id} value={page.id}>
              {page.name}
            </option>
          ))}
        </select>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentPage?.images.map((imageName) => {
          const image = images[imageName]
          
          return (
            <div key={imageName} className="bg-white rounded-lg shadow p-4">
              <h3 className="text-lg font-semibold text-eco-dark mb-4 capitalize">
                {imageName.replace(/-/g, ' ')}
              </h3>
              
              {image ? (
                <div>
                  <div className="relative aspect-video mb-4 bg-eco-bg rounded overflow-hidden">
                    <Image
                      src={image.file_path}
                      alt={image.alt_text}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <button
                    onClick={() => handleDelete(imageName)}
                    className="w-full bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors font-semibold"
                  >
                    削除
                  </button>
                </div>
              ) : (
                <div>
                  <div className="aspect-video mb-4 bg-eco-bg rounded flex items-center justify-center">
                    <span className="text-eco-gray">画像未設定</span>
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0]
                      if (file) handleUpload(imageName, file)
                    }}
                    className="hidden"
                    id={`upload-${imageName}`}
                    disabled={loading}
                  />
                  <label
                    htmlFor={`upload-${imageName}`}
                    className="block w-full bg-eco-primary text-white px-4 py-2 rounded hover:bg-green-600 transition-colors font-semibold text-center cursor-pointer"
                  >
                    {loading ? 'アップロード中...' : 'アップロード'}
                  </label>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}