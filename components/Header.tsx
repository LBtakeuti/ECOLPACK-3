'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '/', label: 'HOME' },
    { href: '/company', label: 'ABOUT' },
    { href: '/products', label: 'PRODUCTS' },
    { href: '/policy', label: 'POLICY' },
  ]

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white/90 backdrop-blur-sm border-b border-eco-gray-100' : 'bg-transparent'
    }`}>
      <div className="container-eco">
        <div className="flex items-center justify-between h-24">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-eco-primary flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" />
                <path d="M2 17L12 22L22 17" opacity="0.6"/>
                <path d="M2 12L12 17L22 12" opacity="0.8"/>
              </svg>
            </div>
            <span className="text-lg font-light tracking-[0.2em] text-eco-dark uppercase">Ecolopack</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-light tracking-wider transition-all duration-300 ${
                  pathname === item.href
                    ? 'text-eco-primary border-b border-eco-primary'
                    : 'text-eco-gray-600 hover:text-eco-dark'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link 
              href="/contact" 
              className={`text-sm font-light tracking-wider transition-all duration-300 ${
                pathname === '/contact'
                  ? 'text-eco-primary border-b border-eco-primary'
                  : 'text-eco-gray-600 hover:text-eco-dark'
              }`}
            >
              CONTACT
            </Link>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative w-8 h-8 focus:outline-none"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className={`transform transition-all duration-300 ${isMenuOpen ? 'rotate-45' : ''}`}>
                <span className={`block h-[1px] w-5 bg-eco-dark transform transition-all duration-300 ${isMenuOpen ? 'translate-y-0' : '-translate-y-1.5'}`}></span>
                <span className={`block h-[1px] w-5 bg-eco-dark transform transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`block h-[1px] w-5 bg-eco-dark transform transition-all duration-300 ${isMenuOpen ? '-rotate-90 -translate-y-[0.5px]' : 'translate-y-1.5'}`}></span>
              </div>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 bg-white ${
          isMenuOpen ? 'max-h-96' : 'max-h-0'
        }`}>
          <nav className="py-8 space-y-4 border-t border-eco-gray-100">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-6 py-2 text-sm font-light tracking-wider transition-all duration-300 ${
                  pathname === item.href
                    ? 'text-eco-primary'
                    : 'text-eco-gray-600 hover:text-eco-dark'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link 
              href="/contact" 
              className={`block px-6 py-2 text-sm font-light tracking-wider transition-all duration-300 ${
                pathname === '/contact'
                  ? 'text-eco-primary'
                  : 'text-eco-gray-600 hover:text-eco-dark'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              CONTACT
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}