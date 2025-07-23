import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { LoadingProvider } from '@/providers/LoadingProvider'

export const metadata: Metadata = {
  title: '株式会社エコロパック - 環境に優しいパッケージソリューション',
  description: 'エコロパックは環境に配慮した緩衝材・包装材を提供し、持続可能なビジネスを支援します。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className="font-serif">
        <LoadingProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow pt-20">
              {children}
            </main>
            <Footer />
          </div>
        </LoadingProvider>
      </body>
    </html>
  )
}