'use client'

import { useState } from 'react'
import EcoLoader from '@/components/EcoLoader'
import LoadingLink from '@/components/LoadingLink'

export default function LoadingTestPage() {
  const [showLoader, setShowLoader] = useState(false)

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">ローディング画面テスト</h1>
      
      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold mb-2">1. 直接表示テスト</h2>
          <button
            onClick={() => setShowLoader(true)}
            className="bg-eco-primary text-white px-6 py-3 rounded hover:bg-eco-secondary transition-colors"
          >
            ローディング画面を表示
          </button>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">2. ページ遷移テスト</h2>
          <div className="space-x-4">
            <LoadingLink href="/" className="text-eco-primary hover:underline">
              ホームへ（ローディングあり）
            </LoadingLink>
            <LoadingLink href="/products" className="text-eco-primary hover:underline">
              製品ページへ（ローディングあり）
            </LoadingLink>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">3. カスタム時間テスト</h2>
          <button
            onClick={() => {
              setShowLoader(true)
              setTimeout(() => setShowLoader(false), 5000)
            }}
            className="bg-eco-secondary text-white px-6 py-3 rounded hover:bg-eco-primary transition-colors"
          >
            5秒間表示
          </button>
        </div>
      </div>

      {showLoader && (
        <EcoLoader 
          onComplete={() => setShowLoader(false)}
          duration={3000}
        />
      )}
    </div>
  )
}