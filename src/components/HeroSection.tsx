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
    const newParticles: Particle[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.5 + 0.1,
      duration: Math.random() * 20 + 15,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-void">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-void to-charcoal"></div>

      {/* Atmospheric glow orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-glow rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-accent-glow rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-purple-glow rounded-full blur-3xl opacity-15 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-silver animate-fade-in"
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

      {/* Mist/fog effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-void opacity-40 pointer-events-none"></div>

      {/* Content */}
      <div className="container max-w-5xl mx-auto text-center space-y-12 relative z-10 px-6">
        {/* Main headline */}
        <div className="space-y-8">
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-cinzel font-black leading-tight tracking-tighter">
            WHERE
            <br />
            <span className="text-accent glow-text-gold">STORIES</span>
            <br />
            BECOME
            <br />
            <span className="text-accent glow-text-gold">WORLDS</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-moon-glow font-inter max-w-2xl mx-auto leading-relaxed font-light tracking-wide">
            Lunacy Media builds brands, campaigns, digital experiences, and original creative universes.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-6 justify-center pt-12">
          <Link href="/studio" className="btn-primary group">
            <span className="relative">
              WORK WITH US
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-off-white group-hover:w-full transition-all duration-500"></span>
            </span>
            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
          <Link href="/work" className="btn-secondary group">
            <span className="relative">
              VIEW PROJECTS
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-500"></span>
            </span>
            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="pt-16 animate-bounce">
          <div className="text-xs text-subtle font-inter tracking-widest uppercase">Scroll to explore</div>
        </div>
      </div>

      {/* Subtle light rays */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 w-1 h-96 bg-gradient-to-b from-gold/20 to-transparent opacity-30 blur-xl transform -translate-x-1/2"></div>
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
