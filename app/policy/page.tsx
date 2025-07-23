import Image from 'next/image'

export default function PolicyPage() {
  return (
    <div className="py-12">
      <div className="container-eco">
        <h1 className="text-4xl font-bold text-eco-dark mb-12 text-center">エコロパック経営指針</h1>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <Image
              src="/images/policy.png"
              alt="エコロパック経営指針"
              width={600}
              height={400}
              className="rounded-lg w-full h-auto mb-6"
            />
          </div>
          
          <div className="bg-eco-bg rounded-lg p-8">
            <h2 className="text-2xl font-bold text-eco-dark mb-6">私たちの約束</h2>
            <p className="text-lg mb-4">
              エコロパックは、環境問題が全地球的な課題である今、
              持続可能な社会の実現に向けて、私たちができることを
              真摯に追求し続けています。
            </p>
            <p className="text-lg">
              緩衝材の製造とサービスを通じて、
              環境負荷の低減と資源の有効活用に貢献し、
              お客様と共に未来を創造してまいります。
            </p>
          </div>
        </div>

        <div className="space-y-12">
          <section className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-eco-dark mb-6 flex items-center">
              <span className="text-eco-yellow text-3xl mr-3">I.</span>
              事業認識
            </h2>
            <p className="text-lg leading-relaxed">
              環境問題は全地球的要求であり、人類生存の課題である。<br />
              エコロパックは地球にやさしい緩衝材の製造とサービスを事業としてこの課題に取り組み、社会に貢献する。
            </p>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-eco-dark mb-6 flex items-center">
              <span className="text-eco-yellow text-3xl mr-3">II.</span>
              環境方針
            </h2>
            <p className="text-lg mb-4">
              エコロパックは取り扱う全ての商品に関する開発、設計、生産、販売などの事業活動において、
              以下の環境方針を尊守し行動します。
            </p>
            
            <div className="space-y-6">
              <div className="pl-8">
                <h3 className="text-xl font-semibold text-eco-dark mb-3">
                  ①環境保全の取り組みを経営の重要な課題と位置づけ、継続的改善および環境汚染の予防に努めます。
                </h3>
              </div>
              
              <div className="pl-8">
                <h3 className="text-xl font-semibold text-eco-dark mb-3">
                  ②環境関連の法令その他の要求事項等を尊守し、技術的、経済的にできる環境保全に取り組みます。
                </h3>
              </div>
              
              <div className="pl-8">
                <h3 className="text-xl font-semibold text-eco-dark mb-3">
                  ③本方針に基づき
                </h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>有害化学物質による環境汚染を防止するため使用禁止物質を明らかにし原材料、製造工程での管理をおこないます。</li>
                  <li>環境に負担を与える物質は可能な限り代替転換を図ります。</li>
                  <li>事業活動に伴う廃棄物の削減と分別・リサイクルに努めます。</li>
                  <li>省資源、省エネルギーに努めます。</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-eco-dark mb-6 flex items-center">
              <span className="text-eco-yellow text-3xl mr-3">III.</span>
              事業取組
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-eco-yellow mr-2">•</span>
                <span className="text-lg">化石原料の使用量を減らした商品の提供。</span>
              </li>
              <li className="flex items-start">
                <span className="text-eco-yellow mr-2">•</span>
                <span className="text-lg">再生産性の高い原料の利用につとめる。</span>
              </li>
              <li className="flex items-start">
                <span className="text-eco-yellow mr-2">•</span>
                <span className="text-lg">リサイクル、リデュース、リユース、資源の有効利用に取り組む。</span>
              </li>
              <li className="flex items-start">
                <span className="text-eco-yellow mr-2">•</span>
                <span className="text-lg">カーボンニュートラルを狙い、CO2削減につながる商品の提供。</span>
              </li>
            </ul>
          </section>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-eco-yellow rounded-lg p-8 inline-block">
            <h3 className="text-2xl font-bold text-eco-dark mb-4">
              持続可能な未来のために
            </h3>
            <p className="text-lg text-eco-dark">
              私たちは、これからも環境に配慮した製品開発と<br />
              サービスの提供を通じて、地球環境の保全に貢献してまいります。
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}