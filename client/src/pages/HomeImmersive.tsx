import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { getLoginUrl } from "@/const";
import { MoonAnimation } from "@/components/MoonAnimation";
import { SectionTransitionOverlay } from "@/components/SectionTransitionOverlay";
import { AnimatedHeading } from "@/components/AnimatedHeading";
import { AnimatedText } from "@/components/AnimatedText";
import { useState, useEffect } from "react";

/**
 * Immersive Home Page with Canvas Moon Animation
 * 
 * Design Philosophy: Character-driven experience with smooth scroll narrative
 * - Moon as the hero character, transforming through phases
 * - Each phase represents different creative mediums (CD, vinyl, headphones, book, etc.)
 * - Monochromatic palette (black, white, grey) for timeless, premium aesthetic
 * - Smooth scroll-triggered animations and seamless section transitions
 */

export default function HomeImmersive() {
  const { user, loading, isAuthenticated, logout } = useAuth();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY / scrollHeight;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <SectionTransitionOverlay />
      {/* Navigation */}
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

      {/* Hero Section with Moon Animation */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Canvas Moon Background */}
        <div className="absolute inset-0 w-full h-full">
          <MoonAnimation scrollProgress={scrollProgress} />
        </div>

        {/* Hero Content Overlay */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-8">
          <div className="animate-fadeIn">
            <p className="text-sm font-light tracking-widest text-gray-400 mb-8 uppercase">
              Creative Studio
            </p>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight mb-8 leading-tight">
              Build Culture.<br />
              Design Experiences.<br />
              Move People.
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed">
              We create experiential campaigns and visual systems that increase engagement, cultural relevance, and audience retention. We work with artists, brands, and cultural institutions to craft experiences that resonate emotionally and live beyond their initial release.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => window.location.href = '/services'}
                className="bg-white text-black hover:bg-gray-200 px-8 py-3 text-base font-semibold"
              >
                Explore Services
              </Button>
              <Button
                onClick={() => window.location.href = '/portfolio'}
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 py-3 text-base font-semibold"
              >
                View Portfolio
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="flex flex-col items-center gap-2">
            <p className="text-xs text-gray-500 uppercase tracking-widest">Scroll to explore</p>
            <svg className="w-5 h-5 text-gray-500 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section 
        className="relative py-24 sm:py-40 px-4 sm:px-8 bg-black border-t border-gray-800"
        data-transition="what-we-do"
        data-from-color="rgb(0, 0, 0)"
        data-to-color="rgb(15, 15, 15)"
        data-blur="2"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-20">
            <p className="text-sm font-light tracking-widest text-gray-500 mb-6 uppercase">Our Approach</p>
            <AnimatedHeading level="h2" className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-8 leading-tight" type="slideUp" delay={0}>
              What We Do
            </AnimatedHeading>
            <AnimatedText className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed" type="fade" delay={200} as="p">
              We create experiential campaigns and visual systems that increase engagement, cultural relevance, and audience retention. Our work moves people and builds lasting cultural impact.
            </AnimatedText>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-8 border border-gray-800 rounded-lg hover:border-gray-600 transition-all duration-300">
              <h3 className="text-3xl md:text-4xl font-black mb-4 text-white">Services</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-white mt-1">•</span>
                  <span>Experiential brand activations & events</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white mt-1">•</span>
                  <span>Guerilla marketing campaigns</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white mt-1">•</span>
                  <span>Digital media & visual storytelling</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white mt-1">•</span>
                  <span>Audio branding & sonic identity</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white mt-1">•</span>
                  <span>Social media strategy & management</span>
                </li>
              </ul>
            </div>

            <div className="p-8 border border-gray-800 rounded-lg hover:border-gray-600 transition-all duration-300">
              <h3 className="text-3xl md:text-4xl font-black mb-4 text-white">Outcomes</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Increased engagement. Cultural relevance. Audience retention. We work with artists, brands, and cultural institutions to create experiences that move people and drive measurable results.
              </p>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-semibold text-white mb-1">Engagement Growth</p>
                  <p className="text-gray-400 text-sm">Average 250-400% increase across platforms</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white mb-1">Cultural Impact</p>
                  <p className="text-gray-400 text-sm">Campaigns that resonate beyond initial release</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white mb-1">Audience Loyalty</p>
                  <p className="text-gray-400 text-sm">Memorable experiences that drive retention</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 flex gap-4">
            <Button
              onClick={() => window.location.href = '/services'}
              className="bg-white text-black hover:bg-gray-200 px-8 py-3 text-base font-semibold"
            >
              View Services
            </Button>
            <Button
              onClick={() => window.location.href = '/portfolio'}
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8 py-3 text-base font-semibold"
            >
              View Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* Creative Projects Section */}
      <section 
        className="relative py-24 sm:py-40 px-4 sm:px-8 bg-black border-t border-gray-800"
        data-transition="creative-projects"
        data-from-color="rgb(15, 15, 15)"
        data-to-color="rgb(10, 10, 10)"
        data-blur="1"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-20">
            <p className="text-sm font-light tracking-widest text-gray-500 mb-6 uppercase">Creative Universe</p>
            <AnimatedHeading level="h2" className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-8 leading-tight" type="slideUp" delay={0}>
              Creative Projects
            </AnimatedHeading>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'OBEAH',
                description: 'A graphic novel exploring Caribbean mythology and spiritual systems',
                link: '/',
              },
              {
                title: 'Lunacy Releases',
                description: 'Original music and audio projects pushing narrative boundaries',
                link: '/',
              },
              {
                title: 'Interactive Worlds',
                description: 'Immersive digital experiences and interactive storytelling',
                link: '/',
              },
            ].map((project, idx) => (
              <a
                key={idx}
                href={project.link}
                className="group p-8 border border-gray-800 rounded-lg hover:border-gray-600 transition-all duration-300 hover:bg-gray-900/50"
              >
                <h3 className="text-2xl md:text-3xl font-black mb-3 text-white group-hover:text-gray-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>
                <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors">
                  Explore →
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section 
        className="relative py-24 sm:py-40 px-4 sm:px-8 bg-black border-t border-gray-800"
        data-transition="newsletter"
        data-from-color="rgb(10, 10, 10)"
        data-to-color="rgb(0, 0, 0)"
        data-blur="0"
      >
        <div className="mx-auto max-w-2xl text-center">
          <AnimatedHeading level="h2" className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight" type="slideUp" delay={0}>
            Join the Orbit
          </AnimatedHeading>
          <p className="text-lg md:text-xl text-gray-300 mb-16 leading-relaxed">
            Get updates on new projects, campaigns, and creative collaborations.
          </p>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-6 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-600 transition-colors"
            />
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full px-6 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-600 transition-colors"
            />
            <Button
              type="submit"
              className="w-full bg-white text-black hover:bg-gray-200 px-8 py-3 text-base font-semibold"
            >
              Join the Orbit
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer 
        className="relative py-16 px-4 sm:px-8 bg-black border-t border-gray-800"
        data-transition="footer"
        data-from-color="rgb(0, 0, 0)"
        data-to-color="rgb(0, 0, 0)"
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-widest">Navigation</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="/services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="/portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
                <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-widest">Projects</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="/" className="hover:text-white transition-colors">OBEAH</a></li>
                <li><a href="/" className="hover:text-white transition-colors">Releases</a></li>
                <li><a href="/" className="hover:text-white transition-colors">Interactive Worlds</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-widest">Social</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="/" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="/" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="/" className="hover:text-white transition-colors">LinkedIn</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-widest">Contact</h4>
              <p className="text-gray-400 text-sm mb-4">hello@lunacymedia.com</p>
              <a href="/contact" className="text-white hover:text-gray-300 transition-colors text-sm font-semibold">
                Get in Touch →
              </a>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between text-gray-500 text-sm">
            <p>&copy; 2026 Lunacy Media. All rights reserved.</p>
            <div className="flex gap-6 mt-4 sm:mt-0">
              <a href="/" className="hover:text-white transition-colors">Privacy</a>
              <a href="/" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll Progress Bar */}
      <div
        className="fixed bottom-0 left-0 h-1 bg-white z-50 transition-all duration-300"
        style={{ width: `${scrollProgress * 100}%` }}
      />
    </div>
  );
}
