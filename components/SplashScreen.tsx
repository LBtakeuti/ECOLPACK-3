'use client'

import { useEffect, useState } from 'react'
import EcoLoader from './EcoLoader'

export default function SplashScreen() {
  const [showSplash, setShowSplash] = useState(true)
  const [isFirstLoad, setIsFirstLoad] = useState(false)

  useEffect(() => {
    // 初回訪問かチェック
    const hasVisited = sessionStorage.getItem('hasVisitedEcolopack')
    
    if (!hasVisited) {
      setIsFirstLoad(true)
      sessionStorage.setItem('hasVisitedEcolopack', 'true')
      
      // 初回は3秒表示
      const timer = setTimeout(() => {
        setShowSplash(false)
      }, 3000)
      
      return () => clearTimeout(timer)
    } else {
      // 2回目以降は表示しない
      setShowSplash(false)
    }
  }, [])

  if (!showSplash || !isFirstLoad) return null

  return (
    <div className="fixed inset-0 z-[100]">
      <EcoLoader 
        duration={3000}
        onComplete={() => setShowSplash(false)}
      />
    </div>
  )
}