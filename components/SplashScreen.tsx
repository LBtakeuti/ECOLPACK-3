'use client'

import { useEffect, useState } from 'react'
import EcoLoader from './EcoLoader'

export default function SplashScreen() {
  const [showSplash, setShowSplash] = useState(true)
  const [isFirstLoad, setIsFirstLoad] = useState(false)
  const [showReloadEffect, setShowReloadEffect] = useState(false)

  useEffect(() => {
    // 初回訪問かチェック
    const hasVisited = sessionStorage.getItem('hasVisitedEcolopack')
    
    if (!hasVisited) {
      setIsFirstLoad(true)
      sessionStorage.setItem('hasVisitedEcolopack', 'true')
      
      // リロード演出を0.3秒後に開始
      setTimeout(() => {
        setShowReloadEffect(true)
      }, 300)
      
      // リロード演出後、ローディング画面へ
      setTimeout(() => {
        setShowReloadEffect(false)
      }, 800)
      
      // 全体を3.5秒後に終了
      const timer = setTimeout(() => {
        setShowSplash(false)
      }, 3500)
      
      return () => clearTimeout(timer)
    } else {
      // 2回目以降は表示しない
      setShowSplash(false)
    }
  }, [])

  if (!showSplash || !isFirstLoad) return null

  return (
    <>
      {/* リロード演出 */}
      {showReloadEffect && (
        <div className="fixed inset-0 z-[101] bg-white">
          <div className="absolute top-4 left-1/2 -translate-x-1/2">
            <div className="flex items-center space-x-2">
              {/* リロードアイコン */}
              <svg 
                className="w-5 h-5 text-gray-600 animate-spin" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" 
                />
              </svg>
              <span className="text-gray-600 text-sm">更新中...</span>
            </div>
          </div>
          
          {/* プログレスバー */}
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gray-200">
            <div className="h-full bg-eco-primary animate-reload-progress" />
          </div>
        </div>
      )}
      
      {/* ローディング画面 */}
      <div className={`fixed inset-0 z-[100] transition-opacity duration-300 ${showReloadEffect ? 'opacity-0' : 'opacity-100'}`}>
        <EcoLoader 
          duration={2700}
          onComplete={() => setShowSplash(false)}
        />
      </div>
    </>
  )
}