export default function CompanyPage() {
  return (
    <div className="py-12">
      <div className="container-eco">
        <h1 className="text-4xl font-bold text-eco-dark mb-12 text-center">会社概況</h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-eco-dark mb-4">会社概要</h2>
              <dl className="space-y-3">
                <div className="flex">
                  <dt className="font-semibold text-eco-dark w-32">社名</dt>
                  <dd>株式会社エコロパック</dd>
                </div>
                <div className="flex">
                  <dt className="font-semibold text-eco-dark w-32">所在地</dt>
                  <dd>
                    <div className="space-y-2">
                      <div>
                        <strong>本社</strong><br />
                        〒211-8530<br />
                        川崎市中原区苅宿45-1<br />
                        TEL: 044-433-2065　FAX: 044-433-8706
                      </div>
                      <div className="mt-4">
                        <strong>さいたま工場</strong><br />
                        〒339-0073<br />
                        埼玉県さいたま市岩槻区上野4-6-10<br />
                        TEL: 048-792-0958　FAX: 048-792-0959
                      </div>
                    </div>
                  </dd>
                </div>
                <div className="flex">
                  <dt className="font-semibold text-eco-dark w-32">設立</dt>
                  <dd>1996年6月11日</dd>
                </div>
                <div className="flex">
                  <dt className="font-semibold text-eco-dark w-32">資本金</dt>
                  <dd>36,000,000円</dd>
                </div>
                <div className="flex">
                  <dt className="font-semibold text-eco-dark w-32">代表者</dt>
                  <dd>代表取締役　丸山　睦雄</dd>
                </div>
                <div className="flex">
                  <dt className="font-semibold text-eco-dark w-32">金融機関</dt>
                  <dd>みずほ銀行川崎支店</dd>
                </div>
              </dl>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-eco-dark mb-4">関連企業・本社</h2>
              <p className="mb-2">帝国通信工業株式会社（東証プライム上場）全額出資の会社</p>
              <p className="font-semibold">帝国通信工業株式会社</p>
              <p>本社：神奈川県川崎市中原区苅宿45-1</p>
              <p>国内拠点：大阪・長野（駒ヶ根・飯田・須坂・木曽）・福井</p>
              <p>国外拠点：アメリカ・中国・韓国・台湾・タイ・シンガポール・ベトナム</p>
              
              <div className="mt-4">
                <p className="font-semibold">帝通エンジニアリング株式会社</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-eco-dark mb-6">事業内容</h2>
          <div className="bg-eco-bg rounded-lg p-8">
            <ol className="list-decimal list-inside space-y-4">
              <li>
                <strong>天然有機物と熱可塑性樹脂との複合材の開発、製造</strong>
              </li>
              <li>
                <strong>製造、販売商品</strong>
                <ul className="list-disc list-inside ml-8 mt-2 space-y-2">
                  <li>パラ状緩衝材（ブランフォームトップ・ブランフォーム・ブランフォームBIG）</li>
                  <li>シート状緩衝材（エコロパット）</li>
                  <li>バット状発泡緩衝材（ブランフォームグリーン）</li>
                </ul>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}