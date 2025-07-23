'use client'

import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { useState } from 'react'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const pathname = usePathname()
  const [loading, setLoading] = useState(false)

  // Don't show layout on login page
  if (pathname === '/admin/login') {
    return <>{children}</>
  }

  const handleLogout = async () => {
    setLoading(true)
    try {
      await fetch('/api/auth/logout', { method: 'POST' })
      router.push('/admin/login')
    } catch (error) {
      console.error('Logout error:', error)
    } finally {
      setLoading(false)
    }
  }

  const isActive = (path: string) => pathname === path

  return (
    <div className="min-h-screen bg-eco-light">
      <header className="bg-eco-primary text-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">エコロパック CMS</h1>
            <button
              onClick={handleLogout}
              disabled={loading}
              className="bg-white text-eco-primary px-4 py-2 rounded hover:bg-eco-light transition-colors font-semibold disabled:opacity-50"
            >
              {loading ? 'ログアウト中...' : 'ログアウト'}
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        <aside className="w-64 bg-white shadow-lg min-h-[calc(100vh-4rem)]">
          <nav className="p-4">
            <ul className="space-y-2">
              <li>
                <Link
                  href="/admin"
                  className={`block px-4 py-2 rounded transition-colors ${
                    isActive('/admin')
                      ? 'bg-eco-primary text-white'
                      : 'hover:bg-eco-bg text-eco-dark'
                  }`}
                >
                  ダッシュボード
                </Link>
              </li>
              <li>
                <Link
                  href="/admin/news"
                  className={`block px-4 py-2 rounded transition-colors ${
                    pathname.startsWith('/admin/news')
                      ? 'bg-eco-primary text-white'
                      : 'hover:bg-eco-bg text-eco-dark'
                  }`}
                >
                  ニュース管理
                </Link>
              </li>
              <li>
                <Link
                  href="/admin/images"
                  className={`block px-4 py-2 rounded transition-colors ${
                    pathname.startsWith('/admin/images')
                      ? 'bg-eco-primary text-white'
                      : 'hover:bg-eco-bg text-eco-dark'
                  }`}
                >
                  画像管理
                </Link>
              </li>
            </ul>
          </nav>
        </aside>

        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  )
}