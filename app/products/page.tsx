import Image from 'next/image'

export default function ProductsPage() {
  return (
    <div className="py-12">
      <div className="container-eco">
        <h1 className="text-4xl font-bold text-eco-dark mb-12 text-center">製品情報</h1>
        
        {/* ブランフォームトップ */}
        <section id="branfoam-top" className="mb-20">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-eco-dark mb-6">ブランフォームトップ</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <Image
                  src="/images/bfTOP1.png"
                  alt="ブランフォームトップ"
                  width={500}
                  height={400}
                  className="rounded-lg w-full h-auto"
                />
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <Image
                    src="/images/bfTOP2.png"
                    alt="ブランフォームトップ 小袋"
                    width={240}
                    height={180}
                    className="rounded-lg w-full h-auto"
                  />
                  <Image
                    src="/images/bfTOP3.png"
                    alt="ブランフォームトップ 外装形態"
                    width={240}
                    height={180}
                    className="rounded-lg w-full h-auto"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-eco-dark mb-4">特徴</h3>
                <ul className="list-disc list-inside space-y-2 mb-6">
                  <li>ブランフォームトップは生分解性の緩衝材です。</li>
                  <li>主成分は植物デンプンです。微生物により分解されます。</li>
                  <li>一般ゴミとして廃棄できます。</li>
                  <li>生ゴミとして堆肥化も可能。充填から取り出しまで可能ゴミとして処理できます。</li>
                  <li>焼却しても有毒なガスが発生せず、可燃ゴミとして処理出来ます。</li>
                  <li>加減により植物肥料収率を高められるため、保管場所は劣配慮下さい。</li>
                  <li>質量の変化は、温度40℃湿度90～95％の環境にて、24H保過後で8％、72H保過後で9％といった低い値になっています。</li>
                  <li>本品は食べられません。</li>
                </ul>
                
                <h3 className="text-xl font-semibold text-eco-dark mb-4">製品仕様</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-eco-bg">
                        <th className="border border-eco-border p-2 text-left">パラ詰め</th>
                        <th className="border border-eco-border p-2 text-left">緩衝材</th>
                        <th className="border border-eco-border p-2 text-left">包装袋仕様</th>
                        <th className="border border-eco-border p-2 text-left">外装袋</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-eco-border p-2">150ヶ小袋入り</td>
                        <td className="border border-eco-border p-2">BFT3(150)3025</td>
                        <td className="border border-eco-border p-2">30cm×25cm</td>
                        <td className="border border-eco-border p-2">直径60cm×高さ140cm<br />容量0.4㎥</td>
                      </tr>
                      <tr>
                        <td className="border border-eco-border p-2">200ヶ小袋入り</td>
                        <td className="border border-eco-border p-2">BFT3(200)3020</td>
                        <td className="border border-eco-border p-2">30cm×20cm</td>
                        <td className="border border-eco-border p-2">直径60cm×高さ140cm<br />容量0.4㎥</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div className="mt-6 p-4 bg-eco-bg rounded">
                  <h4 className="font-semibold mb-2">原材料仕様</h4>
                  <p>BFT3シリーズ</p>
                  <p>緩衝材：植物デンプン80％以上、PVA20％未満</p>
                  <p>小袋：PE</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ブランフォーム */}
        <section id="branfoam" className="mb-20">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-eco-dark mb-6">ブランフォーム</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <Image
                  src="/images/bf1.png"
                  alt="ブランフォーム"
                  width={500}
                  height={400}
                  className="rounded-lg w-full h-auto"
                />
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <Image
                    src="/images/bf2.png"
                    alt="ブランフォーム 小袋"
                    width={240}
                    height={180}
                    className="rounded-lg w-full h-auto"
                  />
                  <Image
                    src="/images/bf3.png"
                    alt="ブランフォーム 外装形態"
                    width={240}
                    height={180}
                    className="rounded-lg w-full h-auto"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-eco-dark mb-4">特徴</h3>
                <ul className="list-disc list-inside space-y-2 mb-6">
                  <li>ブランフォームは生物資性の緩衝材です。</li>
                  <li>主成分は植物デンプンです。</li>
                  <li>焼却しても有毒なガスが発生せず、可燃ゴミとして処理出来ます。</li>
                  <li>耐熱性（80℃-1000H）、耐湿性（40℃95％-1000H）に優れています。</li>
                  <li>防虫性（シバン虫、ヒメマキムシ）に優れています。</li>
                  <li>有機物特有の臭気は軽微です。</li>
                  <li>本品は食べられません。</li>
                </ul>
                
                <h3 className="text-xl font-semibold text-eco-dark mb-4">製品仕様</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-eco-bg">
                        <th className="border border-eco-border p-2 text-left" colSpan={2}>緩衝材</th>
                        <th className="border border-eco-border p-2 text-left" colSpan={3}>包装袋仕様</th>
                        <th className="border border-eco-border p-2 text-left">外装袋</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-eco-border p-2">パラ詰め</td>
                        <td className="border border-eco-border p-2">BFP3</td>
                        <td className="border border-eco-border p-2">BFP5</td>
                        <td className="border border-eco-border p-2">BF75</td>
                        <td className="border border-eco-border p-2">小袋サイズ</td>
                        <td className="border border-eco-border p-2">直径60cm×高さ140cm<br />容量0.4㎥</td>
                      </tr>
                      <tr>
                        <td className="border border-eco-border p-2">150ヶ小袋入り</td>
                        <td className="border border-eco-border p-2">BF3(150)3025</td>
                        <td className="border border-eco-border p-2">-</td>
                        <td className="border border-eco-border p-2">BF75(150)3025</td>
                        <td className="border border-eco-border p-2">30cm×25cm</td>
                        <td className="border border-eco-border p-2">直径60cm×高さ140cm<br />容量0.4㎥</td>
                      </tr>
                      <tr>
                        <td className="border border-eco-border p-2">200ヶ小袋入り</td>
                        <td className="border border-eco-border p-2">BF3(200)3020</td>
                        <td className="border border-eco-border p-2">-</td>
                        <td className="border border-eco-border p-2">BF75(200)3020</td>
                        <td className="border border-eco-border p-2">30cm×20cm</td>
                        <td className="border border-eco-border p-2">直径60cm×高さ140cm<br />容量0.4㎥</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div className="mt-6 space-y-4">
                  <div className="p-4 bg-eco-bg rounded">
                    <h4 className="font-semibold mb-2">BFP3シリーズ</h4>
                    <p>緩衝材：植物デンプン70％以上、PP・PE30％未満</p>
                    <p>小袋：PE</p>
                  </div>
                  <div className="p-4 bg-eco-bg rounded">
                    <h4 className="font-semibold mb-2">BFP5シリーズ</h4>
                    <p>緩衝材：植物デンプン70％以上、PP・PE30％未満</p>
                    <p>小袋：PE</p>
                  </div>
                  <div className="p-4 bg-eco-bg rounded">
                    <h4 className="font-semibold mb-2">BF75シリーズ</h4>
                    <p>緩衝材：植物デンプン70％以上、PP・PE30％未満</p>
                    <p>小袋：PE</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ブランフォームBIG */}
        <section id="branfoam-big" className="mb-20">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-eco-dark mb-6">ブランフォームBIG</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <Image
                  src="/images/bfBIG1.png"
                  alt="ブランフォームBIG"
                  width={500}
                  height={400}
                  className="rounded-lg w-full h-auto"
                />
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <Image
                    src="/images/bfBIG2.png"
                    alt="ブランフォームBIG 小袋"
                    width={240}
                    height={180}
                    className="rounded-lg w-full h-auto"
                  />
                  <Image
                    src="/images/bfBIG3.png"
                    alt="ブランフォームBIG 使用例"
                    width={240}
                    height={180}
                    className="rounded-lg w-full h-auto"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-eco-dark mb-4">特徴</h3>
                <ul className="list-disc list-inside space-y-2 mb-6">
                  <li>今までにない大型（70mm）のパラ状緩衝材です。</li>
                  <li>大型製品の下敷き、単独使用での周囲緩衝材として最適です。</li>
                  <li>小袋仕様に対して、フィルムレスの為、プラスチック削減に寄与します。</li>
                  <li>取扱い性に優れ、箱品や車のコストダウンに役立ちます。</li>
                  <li>長さ65mm～150mmの範囲で対応できます。ご相談ください。</li>
                </ul>
                
                <h3 className="text-xl font-semibold text-eco-dark mb-4">製品仕様</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-eco-bg">
                        <th className="border border-eco-border p-2 text-left">商品名</th>
                        <th className="border border-eco-border p-2 text-left">直径</th>
                        <th className="border border-eco-border p-2 text-left">長さ</th>
                        <th className="border border-eco-border p-2 text-left">入り数</th>
                        <th className="border border-eco-border p-2 text-left">梱包形態</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-eco-border p-2">BF-BIG 65</td>
                        <td className="border border-eco-border p-2">約70mm</td>
                        <td className="border border-eco-border p-2">65mm</td>
                        <td className="border border-eco-border p-2">約1300個</td>
                        <td className="border border-eco-border p-2">0.4㎥</td>
                      </tr>
                      <tr>
                        <td className="border border-eco-border p-2">BF-BIG 150</td>
                        <td className="border border-eco-border p-2">約70mm</td>
                        <td className="border border-eco-border p-2">150mm</td>
                        <td className="border border-eco-border p-2">約600個</td>
                        <td className="border border-eco-border p-2">0.4㎥</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div className="mt-6 p-4 bg-eco-bg rounded">
                  <h4 className="font-semibold mb-2">原材料仕様</h4>
                  <p>BF-BIGシリーズ</p>
                  <p>緩衝材：植物デンプン、天然無機物が50％以上</p>
                  <p>PP、PEが50％未満</p>
                  <p>外装袋：PE</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* エコロパット */}
        <section id="ecopat" className="mb-20">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-eco-dark mb-6">エコロパット</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <Image
                  src="/images/ecolopat1.png"
                  alt="エコロパット"
                  width={500}
                  height={400}
                  className="rounded-lg w-full h-auto"
                />
                <div className="mt-4">
                  <Image
                    src="/images/eclpat2.png"
                    alt="エコロパット 使用例"
                    width={500}
                    height={300}
                    className="rounded-lg w-full h-auto"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-eco-dark mb-4">特徴</h3>
                <ul className="list-disc list-inside space-y-2 mb-6">
                  <li>梨、桃、リンゴ、その他果物用緩衝シートに最適。</li>
                  <li>表面はエンボス加工、裏面はフラット加工です。</li>
                  <li>エンボスにより柔らかな緩衝性をたもちます。</li>
                  <li>ご要望の寸法に対応します。</li>
                </ul>
                
                <h3 className="text-xl font-semibold text-eco-dark mb-4">製品仕様</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-eco-bg">
                        <th className="border border-eco-border p-2 text-left">商品名</th>
                        <th className="border border-eco-border p-2 text-left">板厚</th>
                        <th className="border border-eco-border p-2 text-left">幅</th>
                        <th className="border border-eco-border p-2 text-left">長さ（230mm～560mm）</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-eco-border p-2">エコロパットS（300×○○○）</td>
                        <td className="border border-eco-border p-2">8mm</td>
                        <td className="border border-eco-border p-2">300mm</td>
                        <td className="border border-eco-border p-2">受注生産の為、ご相談ください</td>
                      </tr>
                      <tr>
                        <td className="border border-eco-border p-2">エコロパットS（320×○○○）</td>
                        <td className="border border-eco-border p-2">8mm</td>
                        <td className="border border-eco-border p-2">320mm</td>
                        <td className="border border-eco-border p-2">受注生産の為、ご相談ください</td>
                      </tr>
                      <tr>
                        <td className="border border-eco-border p-2">エコロパットS（350×○○○）</td>
                        <td className="border border-eco-border p-2">8mm</td>
                        <td className="border border-eco-border p-2">350mm</td>
                        <td className="border border-eco-border p-2">受注生産の為、ご相談ください</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div className="mt-6 p-4 bg-eco-bg rounded">
                  <h4 className="font-semibold mb-2">原材料仕様</h4>
                  <p>BFSシリーズ</p>
                  <p>緩衝材：植物デンプン、天然無機物が50％以上</p>
                  <p>PP、PEが50％未満</p>
                  <p>外装袋：PE</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ブランフォームグリーン */}
        <section id="branfoam-green" className="mb-20">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-eco-dark mb-6">ブランフォームグリーン</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <Image
                  src="/images/bfg1.png"
                  alt="ブランフォームグリーン"
                  width={500}
                  height={400}
                  className="rounded-lg w-full h-auto"
                />
                <div className="mt-4">
                  <Image
                    src="/images/bfg2.png"
                    alt="ブランフォームグリーン 使用例"
                    width={500}
                    height={300}
                    className="rounded-lg w-full h-auto"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-eco-dark mb-4">特徴</h3>
                <ul className="list-disc list-inside space-y-2 mb-6">
                  <li>梱包の下敷き、角当て緩衝材として最適です。</li>
                  <li>小袋仕様に対して、フィルムレスの為、プラスチック削減に寄与します。</li>
                </ul>
                
                <h3 className="text-xl font-semibold text-eco-dark mb-4">製品仕様</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-eco-bg">
                        <th className="border border-eco-border p-2 text-left">商品名</th>
                        <th className="border border-eco-border p-2 text-left">厚み</th>
                        <th className="border border-eco-border p-2 text-left">幅</th>
                        <th className="border border-eco-border p-2 text-left">長さ</th>
                        <th className="border border-eco-border p-2 text-left">入り数</th>
                        <th className="border border-eco-border p-2 text-left">包装形態</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-eco-border p-2">BFG(3×10×20)</td>
                        <td className="border border-eco-border p-2">30mm</td>
                        <td className="border border-eco-border p-2">100mm</td>
                        <td className="border border-eco-border p-2">200mm</td>
                        <td className="border border-eco-border p-2">500個</td>
                        <td className="border border-eco-border p-2">0.4㎥</td>
                      </tr>
                      <tr>
                        <td className="border border-eco-border p-2">BFG(3×10×24)</td>
                        <td className="border border-eco-border p-2">30mm</td>
                        <td className="border border-eco-border p-2">100mm</td>
                        <td className="border border-eco-border p-2">240mm</td>
                        <td className="border border-eco-border p-2">400個</td>
                        <td className="border border-eco-border p-2">0.4㎥</td>
                      </tr>
                      <tr>
                        <td className="border border-eco-border p-2">BFG(2.5×25×58)</td>
                        <td className="border border-eco-border p-2">25mm</td>
                        <td className="border border-eco-border p-2">250mm</td>
                        <td className="border border-eco-border p-2">580mm</td>
                        <td className="border border-eco-border p-2">20枚/束</td>
                        <td className="border border-eco-border p-2">-</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div className="mt-6 p-4 bg-eco-bg rounded">
                  <h4 className="font-semibold mb-2">原材料仕様</h4>
                  <p>BFGシリーズ</p>
                  <p>緩衝材：植物デンプン、天然無機物が60％以上</p>
                  <p>PP、PEが40％未満</p>
                  <p>外装袋：PE</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 生分解性プラマーク */}
        <section className="mb-20">
          <div className="bg-eco-bg rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-eco-dark mb-4">生分解性プラマーク</h2>
            <div className="max-w-md mx-auto">
              <p className="mb-4">ブランフォームトップは微生物により土中で分解いたします。</p>
              <p className="mb-4">主成分は植物デンプン・ポリビニルアルコールです。</p>
              <p className="font-semibold">生分解性プラマークを取得しました。登録番号　No.911</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}