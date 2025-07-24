import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-eco-primary text-white mt-20">
      <div className="container-eco py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-white mb-4">株式会社エコロパック</h3>
            <p className="text-sm text-eco-light">
              環境に配慮した緩衝材・包装材で<br />
              持続可能なビジネスを支援します
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-3">製品情報</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products#branfoam" className="text-eco-light hover:text-white transition-colors">ブランフォーム</Link></li>
              <li><Link href="/products#branfoam-big" className="text-eco-light hover:text-white transition-colors">ブランフォームBIG</Link></li>
              <li><Link href="/products#ecopat" className="text-eco-light hover:text-white transition-colors">エコロパット</Link></li>
              <li><Link href="/products#branfoam-green" className="text-eco-light hover:text-white transition-colors">ブランフォームグリーン</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-3">企業情報</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/company" className="text-eco-light hover:text-white transition-colors">会社概要</Link></li>
              <li><Link href="/policy" className="text-eco-light hover:text-white transition-colors">経営指針</Link></li>
              <li><Link href="/contact" className="text-eco-light hover:text-white transition-colors">お問い合わせ</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-2 sm:mb-3 text-sm sm:text-base">お問い合わせ</h4>
            <div className="text-xs sm:text-sm space-y-1 sm:space-y-2 text-eco-light">
              <p>本社</p>
              <p>〒211-8530<br />川崎市中原区苅宿45-1</p>
              <p>TEL: 044-433-2065<br />FAX: 044-433-8706</p>
              <p>
                <a href="mailto:ecolopack@ho.noble-j.co.jp" className="hover:text-white transition-colors">
                  ecolopack@ho.noble-j.co.jp
                </a>
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-6 sm:mt-8 pt-4 sm:pt-6 text-center text-xs sm:text-sm text-eco-light">
          <p>&copy; 2024 株式会社エコロパック All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}