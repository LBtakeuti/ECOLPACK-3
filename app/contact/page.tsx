export default function ContactPage() {
  return (
    <div className="relative">
      {/* Hero Section with Parallax */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-eco-dark to-eco-secondary">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-eco-dark/50"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-20 w-96 h-96 bg-eco-gold/10 rounded-full blur-3xl animate-subtle-float"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-eco-primary/10 rounded-full blur-3xl animate-subtle-float" style={{ animationDelay: '3s' }}></div>
          </div>
        </div>
        
        <div className="relative z-10 text-center">
          <p className="text-eco-gold font-light tracking-[0.5em] uppercase text-xs mb-6 animate-fade-in">
            Contact Us
          </p>
          <h1 className="text-5xl md:text-7xl font-light text-white mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            お問い合わせ
          </h1>
          <p className="text-xl text-white/70 font-light animate-fade-in" style={{ animationDelay: '0.4s' }}>
            私たちとつながる
          </p>
        </div>
        
        {/* Decorative Lines */}
        <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-eco-gold to-transparent"></div>
          <div className="absolute bottom-8 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-eco-gold/50 to-transparent"></div>
          <div className="absolute bottom-16 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-eco-gold/25 to-transparent"></div>
        </div>
      </section>
      
      <div className="py-20 bg-eco-light">
        <div className="container-eco">
          <div className="max-w-6xl mx-auto">
          {/* Contact Cards with 3D Effect */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-eco-primary to-eco-secondary rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500 opacity-10"></div>
              <div className="relative bg-white p-12 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="absolute top-0 right-0 w-32 h-32 bg-eco-gold/5 rounded-full -mr-16 -mt-16"></div>
                <h2 className="text-3xl font-light text-eco-dark mb-8 tracking-wider flex items-center">
                  <span className="w-12 h-12 bg-eco-primary/10 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-eco-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </span>
                  本社
                </h2>
                
                <div className="space-y-8">
                  <div>
                    <p className="text-eco-gray-600 font-light leading-relaxed text-lg">
                      〒211-8530<br />
                      川崎市中原区苅宿45-1
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <a href="tel:044-433-2065" className="flex items-center group/tel hover:bg-eco-light p-4 -m-4 rounded-lg transition-all duration-300">
                      <div className="w-12 h-12 bg-eco-primary rounded-full flex items-center justify-center mr-4 group-hover/tel:scale-110 transition-transform duration-300">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <span className="text-eco-gray-500 text-xs uppercase tracking-wider block">Tel</span>
                        <span className="text-2xl text-eco-dark group-hover/tel:text-eco-primary transition-colors">044-433-2065</span>
                      </div>
                    </a>
                    
                    <div className="flex items-center p-4 -m-4">
                      <div className="w-12 h-12 bg-eco-gray-100 rounded-full flex items-center justify-center mr-4">
                        <svg className="w-5 h-5 text-eco-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                        </svg>
                      </div>
                      <div>
                        <span className="text-eco-gray-500 text-xs uppercase tracking-wider block">Fax</span>
                        <span className="text-2xl text-eco-dark">044-433-8706</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-eco-secondary to-eco-accent rounded-2xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500 opacity-10"></div>
              <div className="relative bg-white p-12 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="absolute top-0 right-0 w-32 h-32 bg-eco-secondary/5 rounded-full -mr-16 -mt-16"></div>
                <h2 className="text-3xl font-light text-eco-dark mb-8 tracking-wider flex items-center">
                  <span className="w-12 h-12 bg-eco-secondary/10 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-eco-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </span>
                  さいたま工場
                </h2>
                
                <div className="space-y-8">
                  <div>
                    <p className="text-eco-gray-600 font-light leading-relaxed text-lg">
                      〒339-0073<br />
                      埼玉県さいたま市岩槻区上野4-6-10
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <a href="tel:048-792-0958" className="flex items-center group/tel hover:bg-eco-light p-4 -m-4 rounded-lg transition-all duration-300">
                      <div className="w-12 h-12 bg-eco-secondary rounded-full flex items-center justify-center mr-4 group-hover/tel:scale-110 transition-transform duration-300">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <span className="text-eco-gray-500 text-xs uppercase tracking-wider block">Tel</span>
                        <span className="text-2xl text-eco-dark group-hover/tel:text-eco-secondary transition-colors">048-792-0958</span>
                      </div>
                    </a>
                    
                    <div className="flex items-center p-4 -m-4">
                      <div className="w-12 h-12 bg-eco-gray-100 rounded-full flex items-center justify-center mr-4">
                        <svg className="w-5 h-5 text-eco-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                        </svg>
                      </div>
                      <div>
                        <span className="text-eco-gray-500 text-xs uppercase tracking-wider block">Fax</span>
                        <span className="text-2xl text-eco-dark">048-792-0959</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Email Section with Gradient Background */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-eco-dark via-eco-secondary to-eco-primary p-16 text-center shadow-2xl">
            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48"></div>
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full -ml-40 -mb-40"></div>
            </div>
            
            <div className="relative z-10">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-8">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              
              <h2 className="text-3xl font-light text-white mb-6 tracking-wider">メールでのお問い合わせ</h2>
              <p className="mb-12">
                <a href="mailto:ecolopack@ho.noble-j.co.jp" className="text-3xl text-white hover:text-eco-gold transition-colors font-light inline-flex items-center group">
                  <span className="border-b-2 border-white/30 group-hover:border-eco-gold pb-2 transition-colors">ecolopack@ho.noble-j.co.jp</span>
                </a>
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                  <svg className="w-8 h-8 text-eco-gold mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-xl font-light text-white mb-3 tracking-wider">営業時間</h3>
                  <p className="text-white/80 font-light">
                    平日 9:00 - 17:30<br />
                    土日祝日 休業
                  </p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                  <svg className="w-8 h-8 text-eco-gold mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  <h3 className="text-xl font-light text-white mb-3 tracking-wider">対応内容</h3>
                  <p className="text-white/80 font-light text-sm leading-relaxed">
                    製品のお問い合わせ<br />
                    見積もり・サンプル請求<br />
                    その他ご相談
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="mt-16 grid md:grid-cols-4 gap-6">
            {[
              { 
                icon: (
                  <svg className="w-8 h-8 text-eco-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ), 
                title: "アクセス", 
                desc: "各拠点への行き方" 
              },
              { 
                icon: (
                  <svg className="w-8 h-8 text-eco-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                ), 
                title: "お電話", 
                desc: "直接お話しください" 
              },
              { 
                icon: (
                  <svg className="w-8 h-8 text-eco-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ), 
                title: "メール", 
                desc: "24時間受付中" 
              },
              { 
                icon: (
                  <svg className="w-8 h-8 text-eco-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                ), 
                title: "資料請求", 
                desc: "詳細資料をお送りします" 
              }
            ].map((item, index) => (
              <div key={index} className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 text-center cursor-pointer hover:-translate-y-1">
                <div className="flex justify-center mb-3 transform group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <h3 className="text-lg font-medium text-eco-dark mb-1">{item.title}</h3>
                <p className="text-sm text-eco-gray-500 font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}