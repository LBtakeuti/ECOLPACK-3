import Image from 'next/image'
import Link from 'next/link'
import { getPageImages } from '@/lib/cms-images'
import NewsList from '@/components/NewsList'

export default async function Home() {
  const cmsImages = await getPageImages('home')
  
  const heroImage = cmsImages.hero?.file_path || '/images/bfTOP1.png'
  const gallery1Image = cmsImages.gallery1?.file_path || '/images/bf1.png'
  const gallery2Image = cmsImages.gallery2?.file_path || '/images/bfBIG1.png'
  const gallery3Image = cmsImages.gallery3?.file_path || '/images/ecolopat1.png'

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] sm:min-h-[80vh] lg:min-h-screen flex items-center overflow-hidden bg-eco-light py-20">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt={cmsImages.hero?.alt_text || "エコロパックのメインビジュアル"}
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-eco-light/50" />
        </div>

        {/* Content */}
        <div className="relative z-10 container-eco">
          <div className="max-w-4xl">
            <p className="text-eco-gold font-light tracking-[0.2em] sm:tracking-[0.3em] uppercase text-xs sm:text-sm mb-6 sm:mb-8 animate-fade-in">
              Sustainable Packaging Solutions
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-eco-dark mb-4 sm:mb-6 leading-tight animate-fade-in" style={{ animationDelay: '0.2s' }}>
              環境と共に歩む
              <span className="block text-eco-primary mt-2">未来のパッケージング</span>
            </h1>
            <p className="text-base sm:text-lg text-eco-gray-600 mb-8 sm:mb-12 max-w-2xl font-light leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
              エコロパックは、革新的な技術と環境への深い配慮を融合させ、
              持続可能な社会の実現に貢献します。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <Link href="/products" className="btn-primary">
                製品を見る
              </Link>
              <Link href="/company" className="btn-secondary">
                企業理念
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-white">
        <div className="container-eco">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <p className="text-eco-gold font-light tracking-[0.2em] sm:tracking-[0.3em] uppercase text-xs sm:text-sm mb-3 sm:mb-4">
              Our Values
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-eco-dark mb-4 sm:mb-6">
              エコロパックの価値
            </h2>
            <div className="w-16 sm:w-20 h-[1px] bg-eco-gold mx-auto"></div>
          </div>


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
            {[
              {
                image: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?q=80&w=2340&auto=format&fit=crop",
                title: "省エネルギー",
                description: "製造から廃棄まで、全工程でエネルギー消費を最小限に抑えた設計"
              },
              {
                image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2340&auto=format&fit=crop",
                title: "循環型社会",
                description: "リサイクル可能な素材を使用し、廃棄物ゼロを目指した製品開発"
              },
              {
                image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2340&auto=format&fit=crop",
                title: "生分解性素材",
                description: "自然に還る素材を使用し、環境負荷を最小限に抑えた製品設計"
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="group"
              >
                <div className="relative h-48 sm:h-56 md:h-64 mb-6 sm:mb-8 overflow-hidden rounded-lg">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-eco-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <h3 className="text-lg sm:text-xl font-light text-eco-dark mb-3 sm:mb-4 tracking-wider">{feature.title}</h3>
                <p className="text-sm sm:text-base text-eco-gray-500 leading-relaxed font-light">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Banner Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-eco-beige relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-32 -left-32 w-64 h-64 bg-eco-accent rounded-full blur-3xl"></div>
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-eco-secondary rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-eco relative z-10">
          <div className="max-w-3xl mx-auto text-center px-4">
            <p className="text-eco-gold font-light tracking-[0.2em] sm:tracking-[0.3em] uppercase text-xs sm:text-sm mb-3 sm:mb-4">
              Products
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-eco-dark mb-4 sm:mb-8">
              革新的な製品ラインナップ
            </h2>
            <p className="text-base sm:text-lg text-eco-gray-600 mb-6 sm:mb-10 font-light leading-relaxed">
              植物由来の素材を中心に、環境に配慮した5つの製品シリーズをご用意しています。
            </p>
            
            <Link 
              href="/products" 
              className="group inline-flex items-center justify-center bg-eco-primary text-white px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 text-sm sm:text-base font-light tracking-wider hover:bg-eco-secondary transition-all duration-500 relative overflow-hidden"
            >
              <span className="relative z-10">製品ラインナップを見る</span>
              <svg className="w-5 h-5 ml-3 relative z-10 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              <div className="absolute inset-0 bg-eco-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </Link>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-white">
        <div className="container-eco">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <p className="text-eco-gold font-light tracking-[0.2em] sm:tracking-[0.3em] uppercase text-xs sm:text-sm mb-3 sm:mb-4">
              News
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-eco-dark mb-4 sm:mb-6">
              最新情報
            </h2>
            <div className="w-16 sm:w-20 h-[1px] bg-eco-gold mx-auto"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <NewsList limit={3} />
          </div>
          
          <div className="text-center mt-16">
            <Link href="/news" className="inline-flex items-center text-eco-dark hover:text-eco-primary font-light tracking-wider transition-colors duration-300">
              すべてのニュースを見る
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-eco-dark">
        <div className="container-eco text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white mb-4 sm:mb-8 px-4">
            持続可能な未来を、共に
          </h2>
          <p className="text-base sm:text-lg text-white/70 mb-8 sm:mb-12 max-w-2xl mx-auto font-light leading-relaxed px-4">
            エコロパックは、お客様と共に環境に配慮したビジネスソリューションを創造します。
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 text-sm font-light tracking-wider text-eco-dark bg-white hover:bg-eco-light transition-colors duration-300">
            お問い合わせ
          </Link>
        </div>
      </section>
    </>
  )
}