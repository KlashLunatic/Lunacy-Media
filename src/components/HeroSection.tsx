import { ChevronRight } from 'lucide-react';
import { Link } from 'wouter';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
}

export default function HeroSection() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate cosmic particles with more variation
    const newParticles: Particle[] = Array.from({ length: 80 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 120,
      size: Math.random() * 4 + 0.5,
      opacity: Math.random() * 0.7 + 0.1,
      duration: Math.random() * 35 + 25,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-void pt-24 pb-32">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover opacity-40 grayscale"
        >
          <source src="/assets/hero-bg-1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-void via-void/80 to-void"></div>
      </div>

      {/* Atmospheric glow orbs - Organic, floating */}
      <div className="absolute inset-0 overflow-hidden z-1">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-glow rounded-full blur-3xl opacity-30 animate-float-up" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-accent-glow rounded-full blur-3xl opacity-25 animate-float-down" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Floating cosmic particles */}
      <div className="absolute inset-0 overflow-hidden z-2">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-silver"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              opacity: particle.opacity,
              animation: `float ${particle.duration}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 8}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Content - Editorial centered layout */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="container max-w-5xl mx-auto text-center space-y-20 relative z-10 px-6"
      >
        {/* Main headline - Editorial scale and elegance */}
        <div className="space-y-16">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
            className="space-y-8"
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-cinzel font-black leading-none tracking-tighter">
              WHERE
              <br />
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="text-accent glow-text-gold animate-moon-glow inline-block"
              >STORIES</motion.span>
              <br />
              BECOME
              <br />
              <motion.span 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1 }}
                className="text-accent glow-text-gold animate-moon-glow inline-block"
              >WORLDS</motion.span>
            </h1>
          </motion.div>

          {/* Subheadline - Editorial weight and spacing */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="text-lg md:text-xl text-muted font-inter max-w-3xl mx-auto leading-relaxed font-light tracking-wide"
          >
            Lunacy Media architects immersive brand universes, transformative campaigns, and original creative experiences that resonate emotionally and drive real impact.
          </motion.p>
        </div>

        {/* CTA Buttons - Editorial prominence */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="flex flex-col md:flex-row gap-10 justify-center pt-12"
        >
          <Link href="/studio" className="btn-primary group">
            <span className="relative">
              WORK WITH US
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-off-white group-hover:w-full transition-all duration-500"></span>
            </span>
            <ChevronRight size={24} className="group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
          <Link href="/work" className="btn-secondary group">
            <span className="relative">
              VIEW PROJECTS
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-500"></span>
            </span>
            <ChevronRight size={24} className="group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </motion.div>

        {/* Scroll indicator - Subtle, editorial */}
        <div className="pt-24 animate-bounce">
          <div className="text-xs text-subtle font-inter tracking-widest uppercase">Scroll to explore</div>
        </div>
      </motion.div>

      {/* Orbital paths illustration - Subtle accent */}
      <div className="absolute top-1/4 right-0 w-96 h-96 opacity-15 pointer-events-none animate-orbit z-1">
        <img 
          src="https://d2xsxph8kpxj0f.cloudfront.net/310419663032200270/4xMWgJ9hUWH8ZnV46MUsJf/orbital-paths-7VDu6Ur8jjLmhmKgWNpxAq.webp" 
          alt="" 
          loading="lazy"
          className="w-full h-full"
        />
      </div>

      {/* Constellation pattern - Top left accent */}
      <div className="absolute top-0 left-0 w-48 h-48 opacity-20 pointer-events-none z-1">
        <img 
          src="https://d2xsxph8kpxj0f.cloudfront.net/310419663032200270/4xMWgJ9hUWH8ZnV46MUsJf/constellation-pattern-5CcQs78ufeVD6JVFF4JTfP.webp" 
          alt="" 
          loading="lazy"
          className="w-full h-full"
        />
      </div>

      {/* Subtle light rays - Editorial minimalism */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-1">
        <div className="absolute top-0 left-1/2 w-1 h-80 bg-gradient-to-b from-gold/20 to-transparent opacity-30 blur-xl transform -translate-x-1/2"></div>
      </div>

      {/* CSS for floating animation */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0;
          }
          10% {
            opacity: var(--particle-opacity, 0.5);
          }
          90% {
            opacity: var(--particle-opacity, 0.5);
          }
          100% {
            transform: translateY(-120vh) translateX(${Math.random() * 150 - 75}px);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}
