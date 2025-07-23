'use client'

import { useEffect, useState } from 'react'

interface EcoLoaderProps {
  onComplete?: () => void
  duration?: number
}

export default function EcoLoader({ onComplete, duration = 3000 }: EcoLoaderProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(() => {
        onComplete?.()
      }, 800)
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, onComplete])

  if (!isVisible && !onComplete) return null

  return (
    <div className={`fixed inset-0 z-50 transition-opacity duration-[800ms] ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="w-full h-full bg-[#5B984D] flex items-center justify-center overflow-hidden">
        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="particle absolute w-1 h-1 bg-green-500 rounded-full opacity-60"
              style={{
                left: `${10 + i * 10}%`,
                animation: `float 4s ease-in-out infinite`,
                animationDelay: `${i * 0.5}s`
              }}
            />
          ))}
        </div>

        <div className="text-center relative">
          {/* Eco loader */}
          <div className="w-[120px] h-[120px] relative mx-auto mb-[30px]">
            {/* Leaves */}
            {[
              { bg: 'from-[#4CAF50] to-[#81C784]', top: '0', left: '40px', delay: '0s' },
              { bg: 'from-[#66BB6A] to-[#A5D6A7]', top: '20px', right: '20px', delay: '0.3s' },
              { bg: 'from-[#388E3C] to-[#4CAF50]', bottom: '20px', right: '0', delay: '0.6s' },
              { bg: 'from-[#2E7D32] to-[#43A047]', bottom: '0', left: '20px', delay: '0.9s' },
              { bg: 'from-[#689F38] to-[#8BC34A]', top: '30px', left: '0', delay: '1.2s' }
            ].map((leaf, i) => (
              <div
                key={i}
                className={`leaf absolute w-10 h-10 rounded-tl-none rounded-tr-full rounded-br-none rounded-bl-full origin-bottom-left bg-gradient-to-br ${leaf.bg}`}
                style={{
                  ...Object.fromEntries(
                    Object.entries(leaf).filter(([k]) => ['top', 'bottom', 'left', 'right'].includes(k))
                  ),
                  animation: 'growLeaf 2s ease-in-out infinite',
                  animationDelay: leaf.delay
                }}
              />
            ))}

            {/* Center circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30px] h-[30px] rounded-full animate-pulse-custom bg-gradient-radial from-[#FFC107] to-[#FF9800]" />
          </div>

          {/* Progress bar */}
          <div className="w-[200px] h-1 bg-white/20 rounded-sm overflow-hidden mx-auto my-5">
            <div className="h-full bg-gradient-to-r from-[#4CAF50] via-[#8BC34A] to-[#CDDC39] rounded-sm animate-fill-progress" />
          </div>

          {/* Text */}
          <div className="loading-text text-white text-lg font-light tracking-[2px] mt-5 animate-fade-text">
            LOADING
          </div>
          <div className="text-white/70 text-xs mt-2.5 font-light">
            自然と共に成長する
          </div>
        </div>

        <style jsx>{`
          @keyframes growLeaf {
            0%, 100% {
              transform: scale(0.8) rotate(0deg);
              opacity: 0.7;
            }
            50% {
              transform: scale(1.2) rotate(10deg);
              opacity: 1;
            }
          }

          @keyframes float {
            0%, 100% {
              transform: translateY(100vh) rotate(0deg);
              opacity: 0;
            }
            10%, 90% {
              opacity: 0.6;
            }
            50% {
              transform: translateY(-10px) rotate(180deg);
              opacity: 0.8;
            }
          }

          @keyframes fillProgress {
            0% {
              width: 0%;
              transform: translateX(-100%);
            }
            50% {
              width: 100%;
              transform: translateX(0%);
            }
            100% {
              width: 100%;
              transform: translateX(100%);
            }
          }

          @keyframes fadeText {
            0%, 100% {
              opacity: 0.6;
            }
            50% {
              opacity: 1;
            }
          }
        `}</style>
      </div>
    </div>
  )
}