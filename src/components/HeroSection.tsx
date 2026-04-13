import { ChevronRight } from 'lucide-react';
import { Link } from 'wouter';
import { useEffect, useState } from 'react';

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
    // Generate particles
    const newParticles: Particle[] = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.6 + 0.15,
      duration: Math.random() * 25 + 20,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-void">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-void to-charcoal"></div>

      {/* Enhanced atmospheric glow orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-glow rounded-full blur-3xl opacity-40 animate-glow-shift"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-accent-glow rounded-full blur-3xl opacity-30 animate-glow-shift" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-purple-glow rounded-full blur-3xl opacity-25 animate-pulse" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-accent-glow rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
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
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Enhanced mist/fog effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-void opacity-50 pointer-events-none"></div>

      {/* Content */}
      <div className="container max-w-5xl mx-auto text-center space-y-16 relative z-10 px-6">
        {/* Main headline - Dramatically enhanced */}
        <div className="space-y-12">
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-cinzel font-black leading-none tracking-tighter">
            WHERE
            <br />
            <span className="text-accent glow-text-gold animate-glow-shift inline-block">STORIES</span>
            <br />
            BECOME
            <br />
            <span className="text-accent glow-text-gold animate-glow-shift inline-block">WORLDS</span>
          </h1>

          {/* Subheadline - Enhanced */}
          <p className="text-xl md:text-2xl text-moon-glow font-inter max-w-2xl mx-auto leading-relaxed font-light tracking-wide">
            Lunacy Media builds brands, campaigns, digital experiences, and original creative universes.
          </p>
        </div>

        {/* CTA Buttons - More prominent */}
        <div className="flex flex-col md:flex-row gap-8 justify-center pt-8">
          <Link href="/studio" className="btn-primary group">
            <span className="relative">
              WORK WITH US
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-off-white group-hover:w-full transition-all duration-500"></span>
            </span>
            <ChevronRight size={22} className="group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
          <Link href="/work" className="btn-secondary group">
            <span className="relative">
              VIEW PROJECTS
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-500"></span>
            </span>
            <ChevronRight size={22} className="group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </div>

        {/* Scroll indicator - Enhanced */}
        <div className="pt-20 animate-bounce">
          <div className="text-xs text-subtle font-inter tracking-widest uppercase">Scroll to explore</div>
        </div>
      </div>

      {/* Enhanced subtle light rays */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 w-1 h-96 bg-gradient-to-b from-gold/30 to-transparent opacity-40 blur-xl transform -translate-x-1/2"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-purple/20 to-transparent opacity-30 blur-3xl"></div>
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
            transform: translateY(-100vh) translateX(${Math.random() * 100 - 50}px);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}
