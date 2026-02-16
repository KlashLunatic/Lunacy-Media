import { useState, useEffect, useRef } from 'react';
import { use3DRotation } from '@/hooks/use3DRotation';
import { useScrollEasing } from '@/hooks/useScrollEasing';
import { useAudioTransition } from '@/hooks/useAudioTransition';
import { useAuth } from '@/_core/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { MoonAnimation } from '@/components/MoonAnimation';

const ORBITAL_SECTIONS = [
  {
    title: 'Build Culture',
    subtitle: 'Experiential Brand Activations',
    description: 'Create immersive brand experiences that resonate emotionally and drive engagement.',
    color: 'from-gray-900 to-black',
    link: '/services',
    audio: 'ambient-1',
  },
  {
    title: 'Design Experiences',
    subtitle: 'Visual Storytelling Systems',
    description: 'Craft cohesive visual identities that communicate across all mediums.',
    color: 'from-gray-800 to-gray-900',
    link: '/services',
    audio: 'ambient-2',
  },
  {
    title: 'Move People',
    subtitle: 'Emotional Impact',
    description: 'Create work that moves audiences and builds lasting cultural relevance.',
    color: 'from-gray-900 to-black',
    link: '/portfolio',
    audio: 'ambient-3',
  },
  {
    title: 'Our Services',
    subtitle: 'What We Offer',
    description: 'From events to digital media, audio branding to social strategy.',
    color: 'from-gray-800 to-gray-900',
    link: '/services',
    audio: 'ambient-4',
  },
  {
    title: 'Portfolio',
    subtitle: 'Our Work',
    description: 'Explore our latest projects and creative campaigns.',
    color: 'from-gray-900 to-black',
    link: '/portfolio',
    audio: 'ambient-5',
  },
  {
    title: 'Creative Process',
    subtitle: 'How We Work',
    description: 'Strategic thinking meets artistic execution.',
    color: 'from-gray-800 to-gray-900',
    link: '/about',
    audio: 'ambient-6',
  },
  {
    title: 'About Lunacy',
    subtitle: 'Our Story',
    description: 'A creative studio built on mythology, transformation, and impact.',
    color: 'from-gray-900 to-black',
    link: '/about',
    audio: 'ambient-7',
  },
  {
    title: 'Get In Touch',
    subtitle: 'Let\'s Create Together',
    description: 'Ready to build something extraordinary?',
    color: 'from-gray-800 to-gray-900',
    link: '/contact',
    audio: 'ambient-8',
  },
];

export default function HomeOrbital() {
  const { user, loading, isAuthenticated, logout } = useAuth();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(typeof window !== 'undefined' ? window.innerHeight : 0);
  const [activeAudio, setActiveAudio] = useState<string | null>(null);
  const { transitionToTrack } = useAudioTransition({
    fadeInDuration: 1500,
    fadeOutDuration: 800,
    volume: 0.25,
  });
  
  const { progress: easedProgress } = useScrollEasing({
    easing: 'easeOutCubic',
    momentum: true,
    momentumDamping: 0.92,
  });
  
  const { getTransformForSection } = use3DRotation({
    totalSections: ORBITAL_SECTIONS.length,
    radius: 1000,
    perspective: 1200,
  });

  // Initialize and track viewport height
  useEffect(() => {
    const updateHeight = () => {
      setViewportHeight(window.innerHeight);
    };
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  // Track scroll progress safely
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) {
        setScrollProgress(0);
        return;
      }
      const scrolled = window.scrollY / scrollHeight;
      setScrollProgress(Math.max(0, Math.min(1, scrolled)));
      
      // Determine active section for audio
      const sectionIndex = Math.floor(scrolled * ORBITAL_SECTIONS.length);
      const section = ORBITAL_SECTIONS[Math.min(sectionIndex, ORBITAL_SECTIONS.length - 1)];
      if (section && section.audio !== activeAudio) {
        setActiveAudio(section.audio);
        // Transition to ambient audio (using placeholder URLs)
        const audioUrl = `/audio/${section.audio}.mp3`;
        transitionToTrack(audioUrl);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeAudio]);

  // Calculate total scroll height
  const totalHeight = viewportHeight > 0 ? ORBITAL_SECTIONS.length * viewportHeight * 3 : 'auto';

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Fixed Navigation */}
      <header className="fixed top-0 z-50 w-full border-b border-gray-800 bg-black/80 backdrop-blur-md">
        <nav className="mx-auto max-w-7xl px-4 sm:px-8 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 font-semibold text-base tracking-tight">
            <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
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
      <div style={{ height: typeof totalHeight === 'number' ? `${totalHeight}px` : totalHeight }}>
        {/* Fixed 3D viewport */}
        <div
          className="fixed inset-0 top-16 overflow-hidden"
          style={{
            perspective: '1200px',
            height: 'calc(100vh - 4rem)',
          }}
        >
          {/* Rotating viewport */}
          <div
            style={{
              width: '100%',
              height: '100%',
              transformStyle: 'preserve-3d',
              transform: `rotateY(${easedProgress * 360}deg)`,
              transition: 'transform 0.05s cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}
          >
            {/* Moon at center */}
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{
                transformStyle: 'preserve-3d',
                zIndex: 10,
              }}
            >
              <div className="w-80 h-80 cursor-pointer hover:opacity-80 transition-opacity">
                <MoonAnimation scrollProgress={easedProgress} />
              </div>
            </div>

            {/* Orbital sections */}
            {ORBITAL_SECTIONS.map((section, idx) => {
              const sectionAngle = (360 / ORBITAL_SECTIONS.length) * idx;
              const transform = getTransformForSection(idx);

              return (
                <div
                  key={idx}
                  onClick={() => window.location.href = section.link}
                  className={`absolute inset-0 flex items-center justify-center bg-gradient-to-b ${section.color} cursor-pointer hover:brightness-110 transition-all duration-300`}
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: `
                      rotateY(${sectionAngle}deg)
                      translateZ(1200px)
                      rotateY(${transform.rotationY}deg)
                      rotateX(${transform.rotationX}deg)
                      skewY(${transform.skewY}deg)
                      scale(${transform.scale})
                    `,
                    opacity: transform.opacity,
                    transition: 'opacity 0.1s ease-out',
                    pointerEvents: transform.opacity > 0.5 ? 'auto' : 'none',
                  }}
                >
                  <div className="text-center max-w-2xl px-8">
                    <p className="text-sm font-light tracking-widest text-gray-400 mb-4 uppercase">
                      {section.subtitle}
                    </p>
                    <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-6 leading-tight">
                      {section.title}
                    </h2>
                    <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                      {section.description}
                    </p>
                    {idx === ORBITAL_SECTIONS.length - 1 && (
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                          onClick={(e) => {
                            e.stopPropagation();
                            window.location.href = section.link;
                          }}
                          className="bg-white text-black hover:bg-gray-200 px-8 py-3 text-base font-semibold"
                        >
                          Start a Project
                        </Button>
                      </div>
                    )}
                    {idx !== ORBITAL_SECTIONS.length - 1 && transform.opacity > 0.5 && (
                      <p className="text-xs text-gray-500 mt-4 animate-pulse">Click to explore →</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scroll progress indicator */}
      <div className="fixed bottom-8 right-8 z-40 text-right">
        <p className="text-sm text-gray-500 mb-2">
          {Math.round(scrollProgress * 100)}%
        </p>
        <div className="w-32 h-1 bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-white transition-all duration-100"
            style={{ width: `${scrollProgress * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}
