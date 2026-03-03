import { useState, useEffect, useCallback } from 'react';
import { useAuth } from '@/_core/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Moon3D } from '@/components/Moon3D';
import { LoadingScreen } from '@/components/LoadingScreen';
import { useAudioTransition } from '@/hooks/useAudioTransition';

// Icons as simple SVG components for section visual depth
function IconEvents() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10 text-white/20">
      <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="1.5" />
      <path d="M16 20h16M16 28h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="24" cy="14" r="3" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
function IconVisual() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10 text-white/20">
      <rect x="8" y="10" width="32" height="28" rx="3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="18" cy="22" r="4" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 32l10-8 6 4 8-10 8 6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}
function IconImpact() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10 text-white/20">
      <path d="M24 6v36M6 24h36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="24" cy="24" r="10" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
    </svg>
  );
}
function IconServices() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10 text-white/20">
      <rect x="6" y="6" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.5" />
      <rect x="26" y="6" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.5" />
      <rect x="6" y="26" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.5" />
      <rect x="26" y="26" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
function IconPortfolio() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10 text-white/20">
      <rect x="4" y="12" width="40" height="28" rx="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M16 12V10a6 6 0 0112 0v2" stroke="currentColor" strokeWidth="1.5" />
      <line x1="4" y1="22" x2="44" y2="22" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
function IconProcess() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10 text-white/20">
      <circle cx="12" cy="24" r="6" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="36" cy="24" r="6" stroke="currentColor" strokeWidth="1.5" />
      <path d="M18 24h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M24 10v8M24 30v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 3" />
    </svg>
  );
}
function IconAbout() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10 text-white/20">
      <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="1.5" />
      <path d="M24 14a4 4 0 110 8 4 4 0 010-8z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M16 34c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
function IconContact() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10 text-white/20">
      <rect x="4" y="10" width="40" height="28" rx="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4 14l20 14 20-14" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

const SECTION_ICONS = [IconEvents, IconVisual, IconImpact, IconServices, IconPortfolio, IconProcess, IconAbout, IconContact];

// Ambient audio track - plays across all sections
const AMBIENT_TRACK = 'https://files.manuscdn.com/user_upload_by_module/session_file/310419663032200270/dRqGVUuMpRpPIowT.mp3';

const ORBITAL_SECTIONS = [
  {
    title: 'Build Culture',
    subtitle: 'Experiential Brand Activations',
    description: 'Create immersive brand experiences that resonate emotionally and drive engagement.',
    link: '/services',
    tags: ['Events', 'Activations', 'Live Experiences'],
    stat: '300%',
    statLabel: 'Avg. Engagement Increase',
  },
  {
    title: 'Design Experiences',
    subtitle: 'Visual Storytelling Systems',
    description: 'Craft cohesive visual identities that communicate across all mediums.',
    link: '/services',
    tags: ['Branding', 'Identity', 'Visual Systems'],
    stat: '50+',
    statLabel: 'Projects Delivered',
  },
  {
    title: 'Move People',
    subtitle: 'Emotional Impact',
    description: 'Create work that moves audiences and builds lasting cultural relevance.',
    link: '/portfolio',
    tags: ['Campaigns', 'Content', 'Strategy'],
    stat: '1M+',
    statLabel: 'Audience Reached',
  },
  {
    title: 'Our Services',
    subtitle: 'What We Offer',
    description: 'From events to digital media, audio branding to social strategy.',
    link: '/services',
    tags: ['Events', 'Digital', 'Audio', 'Social'],
    stat: '5',
    statLabel: 'Core Disciplines',
  },
  {
    title: 'Portfolio',
    subtitle: 'Our Work',
    description: 'Explore our latest projects and creative campaigns.',
    link: '/portfolio',
    tags: ['Case Studies', 'Campaigns', 'Results'],
    stat: '12',
    statLabel: 'Featured Projects',
  },
  {
    title: 'Creative Process',
    subtitle: 'How We Work',
    description: 'Strategic thinking meets artistic execution.',
    link: '/about',
    tags: ['Strategy', 'Execution', 'Iteration'],
    stat: '4',
    statLabel: 'Phase Process',
  },
  {
    title: 'About Lunacy',
    subtitle: 'Our Story',
    description: 'A creative studio built on mythology, transformation, and impact.',
    link: '/about',
    tags: ['Founded 2020', 'Toronto', 'Independent'],
    stat: '∞',
    statLabel: 'Creative Vision',
  },
  {
    title: 'Get In Touch',
    subtitle: "Let's Create Together",
    description: 'Ready to build something extraordinary?',
    link: '/contact',
    tags: ['Consultation', 'Collaboration', 'Partnership'],
    stat: '24h',
    statLabel: 'Response Time',
  },
];

export default function HomeOrbital() {
  const { user, loading: authLoading, isAuthenticated, logout } = useAuth();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(800);
  const [sceneReady, setSceneReady] = useState(false);
  const [showLoading, setShowLoading] = useState(true);
  const [audioEnabled, setAudioEnabled] = useState(false);

  // Audio transition hook
  const { transitionToTrack, stopAudio } = useAudioTransition({
    fadeInDuration: 2000,
    fadeOutDuration: 1500,
    volume: 0.15,
  });

  // Track viewport height
  useEffect(() => {
    const updateHeight = () => setViewportHeight(window.innerHeight);
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  // Track scroll progress with snap behavior
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

  // Keyboard navigation: arrow keys to rotate between sections
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is typing in an input
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) return;

      let targetSection = activeSectionIndex;

      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault();
        targetSection = Math.min(activeSectionIndex + 1, ORBITAL_SECTIONS.length - 1);
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        targetSection = Math.max(activeSectionIndex - 1, 0);
      } else {
        return; // Not an arrow key
      }

      // Smooth scroll to target section
      const targetScroll = (targetSection / ORBITAL_SECTIONS.length) * scrollHeight;
      window.scrollTo({ top: targetScroll, behavior: 'smooth' });
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeSectionIndex]);

  // Moon phase visibility: peaks in center of each section
  const phaseVisibility = Math.sin(sectionProgress * Math.PI) * 0.7 + 0.3;

  // Total scroll height: each section gets 2.5 viewport heights for snappier feel
  const totalHeight = ORBITAL_SECTIONS.length * viewportHeight * 2.5;

  // Get section transform based on its relation to active section
  const getSectionTransform = useCallback(
    (idx: number) => {
      const totalSections = ORBITAL_SECTIONS.length;
      const currentFloat = scrollProgress * totalSections;

      let dist = idx - currentFloat;
      if (dist > totalSections / 2) dist -= totalSections;
      if (dist < -totalSections / 2) dist += totalSections;

      const rotateY = dist * 45;
      const translateZ = -Math.abs(dist) * 300 - 200;
      const opacity = Math.max(0, 1 - Math.abs(dist) * 0.5);
      const scale = Math.max(0.6, 1 - Math.abs(dist) * 0.15);
      const rotateX = dist * 5;

      return { rotateY, translateZ, opacity, scale, rotateX };
    },
    [scrollProgress]
  );

  const handleMoonReady = useCallback(() => {
    setSceneReady(true);
  }, []);

  const handleLoadingComplete = useCallback(() => {
    setShowLoading(false);
  }, []);

  // Play ambient track when audio is enabled
  useEffect(() => {
    if (audioEnabled) {
      transitionToTrack(AMBIENT_TRACK);
    }
  }, [audioEnabled, transitionToTrack]);

  // Enable audio on first user interaction
  useEffect(() => {
    const enableAudio = () => {
      setAudioEnabled(true);
      document.removeEventListener('click', enableAudio);
      document.removeEventListener('keydown', enableAudio);
      document.removeEventListener('scroll', enableAudio);
    };

    document.addEventListener('click', enableAudio, { once: true });
    document.addEventListener('keydown', enableAudio, { once: true });
    document.addEventListener('scroll', enableAudio, { once: true });

    return () => {
      document.removeEventListener('click', enableAudio);
      document.removeEventListener('keydown', enableAudio);
      document.removeEventListener('scroll', enableAudio);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Loading Screen */}
      {showLoading && (
        <LoadingScreen
          isLoading={!sceneReady}
          onComplete={handleLoadingComplete}
        />
      )}

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

      {/* Scroll container with snap */}
      <div
        style={{
          height: `${totalHeight}px`,
          scrollSnapType: 'y proximity',
        }}
      >
        {/* Fixed 3D viewport */}
        <div
          className="fixed inset-0 top-16 overflow-hidden"
          style={{ perspective: '1800px', height: 'calc(100vh - 4rem)' }}
        >
          {/* 3D Moon at center - behind panel text but visible through panel bg */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              width: '280px',
              height: '280px',
              zIndex: 2,
              pointerEvents: phaseVisibility > 0.5 ? 'auto' : 'none',
              filter: `brightness(${0.6 + phaseVisibility * 0.4})`,
              transition: 'filter 0.3s ease',
            }}
          >
            <Moon3D
              scrollProgress={scrollProgress}
              phaseVisibility={phaseVisibility}
              onReady={handleMoonReady}
            />
          </div>

          {/* Orbital sections - curved panels in 3D space */}
          <div
            className="absolute inset-0"
            style={{ transformStyle: 'preserve-3d', zIndex: 3 }}
          >
            {ORBITAL_SECTIONS.map((section, idx) => {
              const t = getSectionTransform(idx);
              const isActive = idx === activeSectionIndex;
              const SectionIcon = SECTION_ICONS[idx];

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
                        ? 'linear-gradient(135deg, rgba(20,20,20,0.85), rgba(8,8,8,0.9))'
                        : 'linear-gradient(135deg, rgba(15,15,15,0.6), rgba(5,5,5,0.7))',
                      padding: '4rem 3rem',
                      transformStyle: 'preserve-3d',
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

                    {/* Content with visual depth */}
                    <div className="relative z-10">
                      {/* Top row: icon + tags */}
                      <div
                        className="flex items-center justify-between mb-8"
                        style={{
                          opacity: isActive ? 1 : 0,
                          transform: isActive ? 'translateY(0)' : 'translateY(-10px)',
                          transition: 'opacity 0.4s ease 0.05s, transform 0.4s ease 0.05s',
                        }}
                      >
                        <SectionIcon />
                        <div className="flex gap-2">
                          {section.tags.map((tag, tagIdx) => (
                            <span
                              key={tagIdx}
                              className="text-[10px] tracking-[0.15em] uppercase text-gray-500 border border-white/[0.08] rounded-full px-3 py-1"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Subtitle */}
                      <p className="text-xs font-light tracking-[0.3em] text-gray-500 mb-4 uppercase text-center">
                        {section.subtitle}
                      </p>

                      {/* Main heading */}
                      <h2
                        className="text-5xl sm:text-6xl lg:text-8xl font-black tracking-tight mb-6 leading-[0.9] text-center"
                        style={{
                          opacity: isActive ? 1 : 0.4,
                          transition: 'opacity 0.5s ease',
                        }}
                      >
                        {section.title}
                      </h2>

                      {/* Description */}
                      <p
                        className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed max-w-xl mx-auto text-center"
                        style={{
                          opacity: isActive ? 1 : 0,
                          transform: isActive ? 'translateY(0)' : 'translateY(20px)',
                          transition: 'opacity 0.5s ease 0.1s, transform 0.5s ease 0.1s',
                        }}
                      >
                        {section.description}
                      </p>

                      {/* Stat highlight */}
                      <div
                        className="flex items-center justify-center gap-4 mb-8"
                        style={{
                          opacity: isActive ? 1 : 0,
                          transform: isActive ? 'translateY(0)' : 'translateY(15px)',
                          transition: 'opacity 0.5s ease 0.15s, transform 0.5s ease 0.15s',
                        }}
                      >
                        <div className="text-center">
                          <p className="text-3xl sm:text-4xl font-black text-white/90 tracking-tight">
                            {section.stat}
                          </p>
                          <p className="text-[10px] tracking-[0.2em] uppercase text-gray-600 mt-1">
                            {section.statLabel}
                          </p>
                        </div>
                      </div>

                      {/* CTA for last section */}
                      {idx === ORBITAL_SECTIONS.length - 1 && isActive && (
                        <div
                          className="flex flex-col sm:flex-row gap-4 justify-center"
                          style={{
                            opacity: isActive ? 1 : 0,
                            transition: 'opacity 0.5s ease 0.2s',
                          }}
                        >
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
                        <p className="text-xs text-gray-600 mt-4 animate-pulse tracking-widest text-center">
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

      {/* Phase indicator dots - clickable for scroll snap */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3">
        {ORBITAL_SECTIONS.map((section, idx) => (
          <button
            key={idx}
            onClick={() => {
              const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
              const targetScroll = (idx / ORBITAL_SECTIONS.length) * scrollHeight;
              window.scrollTo({ top: targetScroll, behavior: 'smooth' });
            }}
            className="group relative flex items-center"
            title={section.title}
          >
            <div
              className="w-2 h-2 rounded-full transition-all duration-300"
              style={{
                backgroundColor: idx === activeSectionIndex ? '#ffffff' : 'rgba(255,255,255,0.15)',
                transform: idx === activeSectionIndex ? 'scale(1.5)' : 'scale(1)',
              }}
            />
            {/* Tooltip on hover */}
            <span className="absolute left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-[10px] tracking-[0.15em] uppercase text-gray-400 whitespace-nowrap pointer-events-none">
              {section.title}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
