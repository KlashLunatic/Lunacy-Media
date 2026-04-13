import { Link } from 'wouter';
import { ChevronRight, Sparkles } from 'lucide-react';
import HeroSection from '../components/HeroSection';

export default function Home() {

  return (
    <div className="min-h-screen flex flex-col">
      <HeroSection />

      {/* WHAT WE CREATE SECTION - Premium spacing and typography */}
      <section className="section-padding-lg bg-void border-b border-subtle">
        <div className="container">
          <div className="text-center mb-32">
            <h2 className="text-7xl md:text-8xl font-cinzel font-bold text-accent glow-text-gold mb-8">WHAT WE CREATE</h2>
            <p className="text-xl text-muted font-inter max-w-2xl mx-auto leading-relaxed">
              We architect experiences that transcend traditional creative services
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-16">
            {[
              {
                title: 'Brand Worlds',
                description: 'We build mythologies, identities, and emotional ecosystems for brands and artists.'
              },
              {
                title: 'Campaign Systems',
                description: 'We design launch campaigns, visual storytelling, and audience-building experiences.'
              },
              {
                title: 'Digital Presence',
                description: 'We create premium websites, pitch decks, and conversion-focused brand assets.'
              }
            ].map((service, idx) => (
              <div key={idx} className="space-y-10 text-center group">
                <div className="h-56 bg-gradient-to-br from-purple-glow/30 to-accent-glow/15 rounded-sm flex items-center justify-center border border-subtle group-hover:border-accent transition-all duration-500 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <Sparkles className="text-accent/40 group-hover:text-accent/80 transition-colors duration-500 relative z-10" size={56} />
                </div>
                <div className="space-y-6">
                  <h3 className="text-3xl font-cinzel font-bold text-off-white group-hover:text-accent transition-colors duration-500">{service.title}</h3>
                  <p className="text-lg text-muted font-inter leading-relaxed font-light">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS SECTION - Cinematic presentation */}
      <section className="section-padding-lg bg-charcoal/50 border-b border-subtle">
        <div className="container">
          <div className="text-center mb-32">
            <h2 className="text-7xl md:text-8xl font-cinzel font-bold text-accent glow-text-gold mb-8">FEATURED PROJECTS</h2>
            <p className="text-xl text-muted font-inter max-w-2xl mx-auto leading-relaxed">
              Immersive worlds and transformative brand experiences
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-16">
            {[
              {
                title: 'Tammy',
                description: 'Interactive narrative exploring identity and transformation.'
              },
              {
                title: 'Obeah',
                description: 'Graphic novel blending Caribbean mythology with contemporary storytelling.'
              },
              {
                title: 'Mulligan',
                description: 'Complete brand identity and campaign for creative collective.'
              }
            ].map((project, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="aspect-video bg-gradient-to-br from-purple-glow/40 to-accent-glow/25 rounded-sm mb-12 flex items-center justify-center border border-subtle group-hover:border-accent transition-all duration-500 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative w-full h-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Sparkles className="text-accent/50 group-hover:text-accent/100 transition-colors duration-500" size={72} />
                  </div>
                </div>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-4xl font-cinzel font-bold text-off-white group-hover:text-accent transition-colors duration-500 mb-6">{project.title}</h3>
                    <p className="text-lg text-muted font-inter leading-relaxed font-light">{project.description}</p>
                  </div>
                  <button className="inline-flex items-center gap-4 text-accent font-inter font-semibold hover:gap-6 transition-all duration-500 group-hover:text-off-white text-lg">
                    Explore Project <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MANIFESTO SECTION - Cinematic atmosphere */}
      <section className="section-padding-lg bg-gradient-dark relative overflow-hidden border-t border-subtle">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-glow rounded-full blur-3xl animate-glow-shift"></div>
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-purple-glow rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="container max-w-3xl mx-auto text-center space-y-12 relative z-10">
          <h2 className="text-6xl md:text-7xl font-cinzel font-bold leading-tight">
            We don't just market ideas.
            <br />
            <span className="text-accent glow-text-gold">We build mythologies.</span>
          </h2>
          <div className="space-y-8 text-lg text-muted font-inter leading-relaxed font-light">
            <p>At Lunacy Media, strategy meets imagination. We create brands, campaigns, and immersive experiences that feel alive.</p>
            <p>Our work lives at the intersection of culture, storytelling, design, and commerce — helping artists, founders, and organizations turn vision into impact.</p>
            <p>From brand worlds to investor decks, from websites to original media properties, every project is built with intention, emotion, and unforgettable presence.</p>
          </div>
        </div>
      </section>

      {/* WHY LUNACY SECTION - Emotional resonance */}
      <section className="section-padding-lg bg-gradient-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-glow rounded-full blur-3xl animate-glow-shift"></div>
          <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-accent-glow rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
        </div>
        <div className="container max-w-3xl mx-auto text-center space-y-12 relative z-10">
          <h2 className="text-6xl md:text-7xl font-cinzel font-bold leading-tight">
            Built for brands that want
            <br />
            <span className="text-accent glow-text-gold">impact, not noise.</span>
          </h2>
          <div className="space-y-8 text-lg text-muted font-inter leading-relaxed font-light">
            <p>We combine strategic thinking with artistic instinct.</p>
            <p>Lunacy exists for visionaries who need more than content — they need presence, identity, and resonance.</p>
            <p>We create work that moves people emotionally while delivering real business outcomes.</p>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION - Maximum conversion focus */}
      <section className="section-padding-lg bg-charcoal border-t border-subtle relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent-glow rounded-full blur-3xl animate-glow-shift"></div>
        </div>
        <div className="container max-w-3xl mx-auto text-center space-y-12 relative z-10">
          <h2 className="text-6xl md:text-7xl font-cinzel font-bold leading-tight">
            Let's build something
            <br />
            <span className="text-accent glow-text-gold">unforgettable.</span>
          </h2>
          <p className="text-xl text-muted font-inter leading-relaxed font-light">
            Whether you're launching a brand, scaling a business, or building a creative world from the ground up, Lunacy is ready to help bring it to life.
          </p>
          <div className="flex flex-col md:flex-row gap-8 justify-center pt-12">
            <Link href="/contact" className="btn-primary">
              Start a Project <ChevronRight size={22} />
            </Link>
            <Link href="/contact" className="btn-secondary">
              Book a Consultation <ChevronRight size={22} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
