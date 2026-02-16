import { Orbital3DContainer, Orbital3DSection } from '@/components/Orbital3DContainer';
import { MoonAnimation } from '@/components/MoonAnimation';
import { useState, useEffect } from 'react';
import { use3DRotation } from '@/hooks/use3DRotation';
import { useAuth } from '@/_core/hooks/useAuth';
import { Button } from '@/components/ui/button';

/**
 * Orbital Home Page - 360° Immersive Experience
 * 
 * Design Philosophy: Viewer orbits around moon at center
 * - 8 content sections positioned around invisible center
 * - Each section rotates in dramatic 3D space
 * - Full 360° rotation as user scrolls through page
 * - Moon animation at center of orbital experience
 */

const ORBITAL_SECTIONS = [
  {
    title: 'Build Culture',
    subtitle: 'Experiential Brand Activations',
    description: 'Create immersive brand experiences that resonate emotionally and drive engagement.',
    color: 'from-gray-900 to-black',
  },
  {
    title: 'Design Experiences',
    subtitle: 'Visual Storytelling Systems',
    description: 'Craft cohesive visual identities that communicate across all mediums.',
    color: 'from-gray-800 to-gray-900',
  },
  {
    title: 'Move People',
    subtitle: 'Emotional Impact',
    description: 'Create work that moves audiences and builds lasting cultural relevance.',
    color: 'from-gray-900 to-black',
  },
  {
    title: 'Our Services',
    subtitle: 'What We Offer',
    description: 'From events to digital media, audio branding to social strategy.',
    color: 'from-gray-800 to-gray-900',
  },
  {
    title: 'Portfolio',
    subtitle: 'Our Work',
    description: 'Explore our latest projects and creative campaigns.',
    color: 'from-gray-900 to-black',
  },
  {
    title: 'Creative Process',
    subtitle: 'How We Work',
    description: 'Strategic thinking meets artistic execution.',
    color: 'from-gray-800 to-gray-900',
  },
  {
    title: 'About Lunacy',
    subtitle: 'Our Story',
    description: 'A creative studio built on mythology, transformation, and impact.',
    color: 'from-gray-900 to-black',
  },
  {
    title: 'Get In Touch',
    subtitle: 'Let\'s Create Together',
    description: 'Ready to build something extraordinary?',
    color: 'from-gray-800 to-gray-900',
  },
];

export default function HomeOrbital() {
  const { user, loading, isAuthenticated, logout } = useAuth();
  const [scrollProgress, setScrollProgress] = useState(0);
  const { getTransformForSection } = use3DRotation({
    totalSections: ORBITAL_SECTIONS.length,
    radius: 1000,
    perspective: 1200,
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY / scrollHeight;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate total scroll height needed for full 360° rotation
  const totalHeight = ORBITAL_SECTIONS.length * window.innerHeight * 3;

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

      {/* Orbital Container */}
      <div
        style={{
          height: `${totalHeight}px`,
          perspective: '1200px',
        }}
      >
        {/* Fixed viewport for 3D orbital experience */}
        <div
          className="fixed inset-0 top-16 overflow-hidden"
          style={{
            perspective: '1200px',
          }}
        >
          {/* Rotating viewport */}
          <div
            style={{
              width: '100%',
              height: '100%',
              transformStyle: 'preserve-3d',
              transform: `rotateY(${scrollProgress * 360}deg)`,
              transition: 'transform 0.05s linear',
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
              <div className="w-96 h-96">
                <MoonAnimation scrollProgress={scrollProgress} />
              </div>
            </div>

            {/* Orbital sections */}
            {ORBITAL_SECTIONS.map((section, idx) => {
              const sectionAngle = (360 / ORBITAL_SECTIONS.length) * idx;
              const transform = getTransformForSection(idx);

              return (
                <div
                  key={idx}
                  className={`absolute inset-0 flex items-center justify-center bg-gradient-to-b ${section.color}`}
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
                          onClick={() => window.location.href = '/contact'}
                          className="bg-white text-black hover:bg-gray-200 px-8 py-3 text-base font-semibold"
                        >
                          Start a Project
                        </Button>
                      </div>
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
