'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import EcoLoader from '@/components/EcoLoader'

interface LoadingContextType {
  isLoading: boolean
  startLoading: () => void
  stopLoading: () => void
}

const LoadingContext = createContext<LoadingContextType>({
  isLoading: false,
  startLoading: () => {},
  stopLoading: () => {},
})

export function useLoading() {
  return useContext(LoadingContext)
}

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    // ページ遷移時にローディングを開始
    setIsLoading(true)
    
    // 短い遅延後にローディングを終了（実際のデータ読み込みに合わせて調整）
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [pathname])

  const startLoading = () => setIsLoading(true)
  const stopLoading = () => setIsLoading(false)

  return (
    <LoadingContext.Provider value={{ isLoading, startLoading, stopLoading }}>
      {isLoading && <EcoLoader duration={1500} />}
      {children}
    </LoadingContext.Provider>
  )
}