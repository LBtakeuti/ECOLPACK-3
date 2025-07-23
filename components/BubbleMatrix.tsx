'use client'

export default function BubbleMatrix() {
  return (
    <div className="bubble-matrix fixed top-0 left-0 w-full h-full z-0 perspective-1000">
      {[...Array(7)].map((_, index) => (
        <div key={index} className={`bubble-3d bubble-${index + 1}`} />
      ))}
      
      <style jsx>{`
        .bubble-matrix {
          perspective: 1000px;
        }

        .bubble-3d {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle at 30% 30%, 
              rgba(255, 255, 255, 0.9) 0%, 
              rgba(250, 255, 250, 0.6) 30%, 
              rgba(245, 255, 245, 0.3) 60%, 
              transparent 100%);
          box-shadow: 
              inset -10px -10px 20px rgba(0, 0, 0, 0.05),
              inset 5px 5px 10px rgba(255, 255, 255, 0.8),
              0 10px 30px rgba(0, 0, 0, 0.1);
          transform-style: preserve-3d;
        }

        .bubble-3d::before {
          content: '';
          position: absolute;
          width: 60%;
          height: 60%;
          top: 10%;
          left: 10%;
          border-radius: 50%;
          background: radial-gradient(circle at 50% 50%, 
              rgba(255, 255, 255, 0.8) 0%, 
              transparent 70%);
          filter: blur(2px);
        }

        .bubble-1 {
          width: 150px;
          height: 150px;
          top: 10%;
          left: 5%;
          animation: bubble3D1 30s ease-in-out infinite;
        }

        .bubble-2 {
          width: 100px;
          height: 100px;
          top: 20%;
          right: 10%;
          animation: bubble3D2 25s ease-in-out infinite;
          animation-delay: -5s;
        }

        .bubble-3 {
          width: 120px;
          height: 120px;
          bottom: 25%;
          left: 20%;
          animation: bubble3D3 35s ease-in-out infinite;
          animation-delay: -10s;
        }

        .bubble-4 {
          width: 80px;
          height: 80px;
          top: 45%;
          right: 25%;
          animation: bubble3D4 28s ease-in-out infinite;
          animation-delay: -15s;
        }

        .bubble-5 {
          width: 110px;
          height: 110px;
          bottom: 15%;
          right: 5%;
          animation: bubble3D5 32s ease-in-out infinite;
          animation-delay: -7s;
        }

        .bubble-6 {
          width: 90px;
          height: 90px;
          top: 35%;
          left: 40%;
          animation: bubble3D6 26s ease-in-out infinite;
          animation-delay: -12s;
        }

        .bubble-7 {
          width: 130px;
          height: 130px;
          bottom: 40%;
          right: 35%;
          animation: bubble3D7 33s ease-in-out infinite;
          animation-delay: -18s;
        }

        @keyframes bubble3D1 {
          0%, 100% {
              transform: translate3d(0, 0, 0) rotateX(0deg) rotateY(0deg) scale(1);
              opacity: 0.7;
          }
          25% {
              transform: translate3d(100px, -80px, 100px) rotateX(180deg) rotateY(90deg) scale(1.2);
              opacity: 0.5;
          }
          50% {
              transform: translate3d(-50px, 50px, -50px) rotateX(360deg) rotateY(180deg) scale(0.9);
              opacity: 0.8;
          }
          75% {
              transform: translate3d(50px, -30px, 80px) rotateX(180deg) rotateY(270deg) scale(1.1);
              opacity: 0.6;
          }
        }

        @keyframes bubble3D2 {
          0%, 100% {
              transform: translate3d(0, 0, 0) rotateX(0deg) rotateY(0deg) scale(1);
              opacity: 0.6;
          }
          50% {
              transform: translate3d(-120px, 100px, 150px) rotateX(360deg) rotateY(360deg) scale(1.3);
              opacity: 0.4;
          }
        }

        @keyframes bubble3D3 {
          0%, 100% {
              transform: translate3d(0, 0, 0) rotateX(0deg) rotateY(0deg) scale(1);
              opacity: 0.7;
          }
          33% {
              transform: translate3d(80px, -60px, -100px) rotateX(120deg) rotateY(240deg) scale(1.15);
              opacity: 0.5;
          }
          66% {
              transform: translate3d(-60px, -100px, 120px) rotateX(240deg) rotateY(120deg) scale(0.85);
              opacity: 0.8;
          }
        }

        @keyframes bubble3D4 {
          0%, 100% {
              transform: translate3d(0, 0, 0) rotateX(0deg) rotateY(0deg) scale(1);
              opacity: 0.6;
          }
          50% {
              transform: translate3d(60px, 120px, -80px) rotateX(180deg) rotateY(180deg) scale(1.4);
              opacity: 0.3;
          }
        }

        @keyframes bubble3D5 {
          0%, 100% {
              transform: translate3d(0, 0, 0) rotateX(0deg) rotateY(0deg) scale(1);
              opacity: 0.7;
          }
          40% {
              transform: translate3d(-100px, -80px, 100px) rotateX(144deg) rotateY(288deg) scale(1.2);
              opacity: 0.5;
          }
          80% {
              transform: translate3d(70px, 40px, -60px) rotateX(288deg) rotateY(144deg) scale(0.9);
              opacity: 0.8;
          }
        }

        @keyframes bubble3D6 {
          0%, 100% {
              transform: translate3d(0, 0, 0) rotateX(0deg) rotateY(0deg) scale(1);
              opacity: 0.6;
          }
          60% {
              transform: translate3d(90px, -110px, 140px) rotateX(216deg) rotateY(432deg) scale(1.25);
              opacity: 0.4;
          }
        }

        @keyframes bubble3D7 {
          0%, 100% {
              transform: translate3d(0, 0, 0) rotateX(0deg) rotateY(0deg) scale(1);
              opacity: 0.5;
          }
          50% {
              transform: translate3d(-80px, 90px, -120px) rotateX(180deg) rotateY(360deg) scale(1.35);
              opacity: 0.3;
          }
        }

        @media (max-width: 768px) {
          .bubble-1 { width: 100px; height: 100px; }
          .bubble-2 { width: 70px; height: 70px; }
          .bubble-3 { width: 80px; height: 80px; }
          .bubble-4 { width: 60px; height: 60px; }
          .bubble-5 { width: 75px; height: 75px; }
          .bubble-6 { width: 65px; height: 65px; }
          .bubble-7 { width: 90px; height: 90px; }
        }
      `}</style>
    </div>
  )
}