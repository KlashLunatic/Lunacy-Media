import { useState, useEffect, useCallback } from 'react';
import { useAuth } from '@/_core/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Moon3D } from '@/components/Moon3D';

const ORBITAL_SECTIONS = [
  {
    title: 'Build Culture',
    subtitle: 'Experiential Brand Activations',
    description: 'Create immersive brand experiences that resonate emotionally and drive engagement.',
    link: '/services',
  },
  {
    title: 'Design Experiences',
    subtitle: 'Visual Storytelling Systems',
    description: 'Craft cohesive visual identities that communicate across all mediums.',
    link: '/services',
  },
  {
    title: 'Move People',
    subtitle: 'Emotional Impact',
    description: 'Create work that moves audiences and builds lasting cultural relevance.',
    link: '/portfolio',
  },
  {
    title: 'Our Services',
    subtitle: 'What We Offer',
    description: 'From events to digital media, audio branding to social strategy.',
    link: '/services',
  },
  {
    title: 'Portfolio',
    subtitle: 'Our Work',
    description: 'Explore our latest projects and creative campaigns.',
    link: '/portfolio',
  },
  {
    title: 'Creative Process',
    subtitle: 'How We Work',
    description: 'Strategic thinking meets artistic execution.',
    link: '/about',
  },
  {
    title: 'About Lunacy',
    subtitle: 'Our Story',
    description: 'A creative studio built on mythology, transformation, and impact.',
    link: '/about',
  },
  {
    title: 'Get In Touch',
    subtitle: "Let's Create Together",
    description: 'Ready to build something extraordinary?',
    link: '/contact',
  },
];

export default function HomeOrbital() {
  const { user, loading, isAuthenticated, logout } = useAuth();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(800);

  // Track viewport height
  useEffect(() => {
    const updateHeight = () => setViewportHeight(window.innerHeight);
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  // Track scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) {
        setScrollProgress(0);
        return;
      }
      const scrolled = window.scrollY / scrollHeight;
      setScrollProgress(Math.max(0, Math.min(1, scrolled)));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate which section is active
  const activeSectionIndex = Math.min(
    Math.floor(scrollProgress * ORBITAL_SECTIONS.length),
    ORBITAL_SECTIONS.length - 1
  );
  const sectionProgress = (scrollProgress * ORBITAL_SECTIONS.length) % 1;

  // Moon phase visibility: peaks in center of each section
  const phaseVisibility = Math.sin(sectionProgress * Math.PI) * 0.7 + 0.3;

  // Total scroll height: each section gets 3 viewport heights
  const totalHeight = ORBITAL_SECTIONS.length * viewportHeight * 3;

  // Get section transform based on its relation to active section
  const getSectionTransform = useCallback(
    (idx: number) => {
      const totalSections = ORBITAL_SECTIONS.length;
      const currentFloat = scrollProgress * totalSections;

      // Distance from active position (wrapping)
      let dist = idx - currentFloat;
      if (dist > totalSections / 2) dist -= totalSections;
      if (dist < -totalSections / 2) dist += totalSections;

      // Rotation around Y axis
      const rotateY = dist * 45;

      // Push sections away from center
      const translateZ = -Math.abs(dist) * 300 - 200;

      // Opacity: fade out distant sections
      const opacity = Math.max(0, 1 - Math.abs(dist) * 0.5);

      // Scale: shrink distant sections
      const scale = Math.max(0.6, 1 - Math.abs(dist) * 0.15);

      // Tilt for 3D depth
      const rotateX = dist * 5;

      return { rotateY, translateZ, opacity, scale, rotateX };
    },
    [scrollProgress]
  );

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Fixed Navigation */}
      <header className="fixed top-0 z-50 w-full border-b border-gray-800/50 bg-black/60 backdrop-blur-xl">
        <nav className="mx-auto max-w-7xl px-4 sm:px-8 py-4 flex items-center justify-between">
          <a
            href="/"
            className="flex items-center gap-2 font-semibold text-base tracking-tight"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-white" />
            <span>Lunacy</span>
          </a>
          <div className="flex gap-8 items-center text-sm">
            <a href="/services" className="hover:text-gray-400 transition duration-200">Services</a>
            <a href="/portfolio" className="hover:text-gray-400 transition duration-200">Portfolio</a>
            <a href="/" className="hover:text-gray-400 transition duration-200">Projects</a>
            <a href="/about" className="hover:text-gray-400 transition duration-200">About</a>
            <a href="/contact" className="hover:text-gray-400 transition duration-200">Contact</a>
          </div>
        </nav>
      </header>

      {/* Scroll container */}
      <div style={{ height: `${totalHeight}px` }}>
        {/* Fixed 3D viewport */}
        <div
          className="fixed inset-0 top-16 overflow-hidden"
          style={{ perspective: '1800px', height: 'calc(100vh - 4rem)' }}
        >
          {/* 3D Moon at center */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              width: '340px',
              height: '340px',
              zIndex: 5,
              pointerEvents: phaseVisibility > 0.5 ? 'auto' : 'none',
            }}
          >
            <Moon3D
              scrollProgress={scrollProgress}
              phaseVisibility={phaseVisibility}
            />
          </div>

          {/* Orbital sections - curved panels in 3D space */}
          <div
            className="absolute inset-0"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {ORBITAL_SECTIONS.map((section, idx) => {
              const t = getSectionTransform(idx);
              const isActive = idx === activeSectionIndex;

              return (
                <div
                  key={idx}
                  onClick={() => (window.location.href = section.link)}
                  className="absolute inset-0 flex items-center cursor-pointer"
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: `
                      rotateY(${t.rotateY}deg)
                      translateZ(${t.translateZ}px)
                      rotateX(${t.rotateX}deg)
                      scale(${t.scale})
                    `,
                    opacity: t.opacity,
                    transition: 'transform 0.15s ease-out, opacity 0.15s ease-out',
                    pointerEvents: t.opacity > 0.3 ? 'auto' : 'none',
                  }}
                >
                  {/* Curved panel shape */}
                  <div
                    className={`
                      relative mx-auto w-full max-w-3xl
                      rounded-[2rem] overflow-hidden
                      border border-white/[0.06]
                      backdrop-blur-sm
                      transition-all duration-300
                      ${isActive ? 'shadow-[0_0_80px_rgba(255,255,255,0.08)]' : ''}
                    `}
                    style={{
                      background: isActive
                        ? 'linear-gradient(135deg, rgba(30,30,30,0.95), rgba(10,10,10,0.98))'
                        : 'linear-gradient(135deg, rgba(20,20,20,0.7), rgba(5,5,5,0.8))',
                      padding: '4rem 3rem',
                      transformStyle: 'preserve-3d',
                      // Subtle curve effect via perspective on the panel itself
                      transform: `perspective(800px) rotateY(${isActive ? 0 : t.rotateY * 0.05}deg)`,
                    }}
                  >
                    {/* Subtle glow accent */}
                    <div
                      className="absolute top-0 left-0 w-full h-1 rounded-t-[2rem]"
                      style={{
                        background: isActive
                          ? 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)'
                          : 'transparent',
                        transition: 'background 0.5s ease',
                      }}
                    />

                    {/* Content */}
                    <div className="relative z-10 text-center">
                      <p className="text-xs font-light tracking-[0.3em] text-gray-500 mb-6 uppercase">
                        {section.subtitle}
                      </p>
                      <h2
                        className="text-5xl sm:text-6xl lg:text-8xl font-black tracking-tight mb-8 leading-[0.9]"
                        style={{
                          opacity: isActive ? 1 : 0.4,
                          transition: 'opacity 0.5s ease',
                        }}
                      >
                        {section.title}
                      </h2>
                      <p
                        className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed max-w-xl mx-auto"
                        style={{
                          opacity: isActive ? 1 : 0,
                          transform: isActive ? 'translateY(0)' : 'translateY(20px)',
                          transition: 'opacity 0.5s ease 0.1s, transform 0.5s ease 0.1s',
                        }}
                      >
                        {section.description}
                      </p>

                      {/* CTA for last section */}
                      {idx === ORBITAL_SECTIONS.length - 1 && isActive && (
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                          <Button
                            onClick={(e) => {
                              e.stopPropagation();
                              window.location.href = section.link;
                            }}
                            className="bg-white text-black hover:bg-gray-200 px-8 py-3 text-base font-semibold rounded-full"
                          >
                            Start a Project
                          </Button>
                        </div>
                      )}

                      {/* Explore prompt */}
                      {idx !== ORBITAL_SECTIONS.length - 1 && isActive && (
                        <p className="text-xs text-gray-600 mt-6 animate-pulse tracking-widest">
                          SCROLL TO EXPLORE
                        </p>
                      )}
                    </div>

                    {/* Decorative corner accents */}
                    <div className="absolute top-4 left-4 w-8 h-8 border-l border-t border-white/10 rounded-tl-lg" />
                    <div className="absolute top-4 right-4 w-8 h-8 border-r border-t border-white/10 rounded-tr-lg" />
                    <div className="absolute bottom-4 left-4 w-8 h-8 border-l border-b border-white/10 rounded-bl-lg" />
                    <div className="absolute bottom-4 right-4 w-8 h-8 border-r border-b border-white/10 rounded-br-lg" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scroll progress indicator */}
      <div className="fixed bottom-8 right-8 z-40 text-right">
        <p className="text-xs text-gray-600 mb-2 tracking-widest font-light">
          {String(activeSectionIndex + 1).padStart(2, '0')} / {String(ORBITAL_SECTIONS.length).padStart(2, '0')}
        </p>
        <div className="w-24 h-[2px] bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-white/60 transition-all duration-100"
            style={{ width: `${scrollProgress * 100}%` }}
          />
        </div>
      </div>

      {/* Phase indicator dots */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3">
        {ORBITAL_SECTIONS.map((_, idx) => (
          <div
            key={idx}
            className="w-2 h-2 rounded-full transition-all duration-300"
            style={{
              backgroundColor: idx === activeSectionIndex ? '#ffffff' : 'rgba(255,255,255,0.15)',
              transform: idx === activeSectionIndex ? 'scale(1.5)' : 'scale(1)',
            }}
          />
        ))}
      </div>
    </div>
  );
}
