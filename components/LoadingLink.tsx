'use client'

import Link from 'next/link'
import { useLoading } from '@/providers/LoadingProvider'
import { MouseEvent } from 'react'

interface LoadingLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  showLoader?: boolean
}

export default function LoadingLink({ 
  href, 
  children, 
  className,
  showLoader = false // デフォルトでローディングを表示しない
}: LoadingLinkProps) {
  const { startLoading } = useLoading()

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (showLoader && !e.ctrlKey && !e.metaKey) {
      startLoading()
    }
  }

  return (
    <Link 
      href={href} 
      className={className}
      onClick={handleClick}
    >
      {children}
    </Link>
  )
}