import Link from 'next/link'

export default function AdminDashboard() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-eco-dark mb-8">ダッシュボード</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        <Link href="/admin/news" className="block">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-eco-primary rounded-full flex items-center justify-center text-white">
                <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-eco-dark ml-4">ニュース管理</h3>
            </div>
            <p className="text-eco-gray">
              ニュース記事の作成、編集、削除、公開管理を行います。
            </p>
          </div>
        </Link>

        <Link href="/admin/images" className="block">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-eco-primary rounded-full flex items-center justify-center text-white">
                <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-eco-dark ml-4">画像管理</h3>
            </div>
            <p className="text-eco-gray">
              各ページの画像をアップロード、プレビュー、削除します。
            </p>
          </div>
        </Link>
      </div>

      <div className="mt-12 bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold text-eco-dark mb-4">クイックガイド</h3>
        <ul className="space-y-2 text-eco-gray">
          <li>• ニュース記事を追加するには「ニュース管理」をクリックしてください</li>
          <li>• 各ページの画像を変更するには「画像管理」をクリックしてください</li>
          <li>• 変更はすぐにウェブサイトに反映されます</li>
        </ul>
      </div>
    </div>
  )
}