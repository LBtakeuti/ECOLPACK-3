/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'eco-primary': '#2D4A2B',
        'eco-secondary': '#4A6741',
        'eco-accent': '#8B9F86',
        'eco-dark': '#1A1F1A',
        'eco-light': '#F7F9F6',
        'eco-beige': '#F5F2ED',
        'eco-gold': '#B8A88A',
        'eco-gray': {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
      },
      fontFamily: {
        'serif': [
          '"Hiragino Mincho ProN"',
          '"Hiragino Mincho Pro"',
          '"Yu Mincho"',
          'YuMincho',
          '"BIZ UDMincho"',
          '"Noto Serif JP"',
          'serif'
        ],
        'sans': [
          '"Hiragino Kaku Gothic ProN"',
          '"Hiragino Sans"',
          '"Yu Gothic"',
          'YuGothic',
          '"BIZ UDGothic"',
          '"Noto Sans JP"',
          'sans-serif'
        ],
      },
      animation: {
        'fade-in': 'fadeIn 1.2s ease-out',
        'slide-up': 'slideUp 1s ease-out',
        'slide-down': 'slideDown 1s ease-out',
        'scale': 'scale 0.5s ease-out',
        'subtle-float': 'subtleFloat 8s ease-in-out infinite',
        'pulse-custom': 'pulseCustom 2s ease-in-out infinite',
        'fill-progress': 'fillProgress 3s ease-in-out infinite',
        'fade-text': 'fadeText 2s ease-in-out infinite',
        'reload-progress': 'reloadProgress 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scale: {
          '0%': { transform: 'scale(0.95)' },
          '100%': { transform: 'scale(1)' },
        },
        subtleFloat: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseCustom: {
          '0%, 100%': { 
            transform: 'translate(-50%, -50%) scale(1)',
            boxShadow: '0 0 20px rgba(255, 193, 7, 0.5)'
          },
          '50%': { 
            transform: 'translate(-50%, -50%) scale(1.1)',
            boxShadow: '0 0 40px rgba(255, 193, 7, 0.8)'
          },
        },
        fillProgress: {
          '0%': { width: '0%', transform: 'translateX(-100%)' },
          '50%': { width: '100%', transform: 'translateX(0%)' },
          '100%': { width: '100%', transform: 'translateX(100%)' },
        },
        fadeText: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        reloadProgress: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}