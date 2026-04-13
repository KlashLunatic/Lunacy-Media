import { Link } from 'wouter';
import { ChevronRight, Sparkles } from 'lucide-react';
import HeroSection from '../components/HeroSection';

export default function Home() {

  return (
    <div className="min-h-screen flex flex-col">
      <HeroSection />

      {/* WHAT WE CREATE SECTION */}
      <section className="section-padding bg-void border-b border-subtle">
        <div className="container">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-cinzel font-bold text-accent glow-text-gold">WHAT WE CREATE</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
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
              <div key={idx} className="space-y-8 text-center group">
                <div className="h-48 bg-gradient-to-br from-purple-glow/20 to-accent-glow/10 rounded-sm flex items-center justify-center border border-subtle group-hover:border-accent transition-all duration-300">
                  <Sparkles className="text-accent/30 group-hover:text-accent/60 transition-colors duration-300" size={48} />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-cinzel font-bold text-off-white group-hover:text-accent transition-colors duration-300">{service.title}</h3>
                  <p className="text-lg text-muted font-inter leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS SECTION */}
      <section className="section-padding bg-charcoal/50 border-b border-subtle">
        <div className="container">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-cinzel font-bold text-accent glow-text-gold">FEATURED PROJECTS</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
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
                <div className="aspect-video bg-gradient-to-br from-purple-glow/30 to-accent-glow/20 rounded-sm mb-8 flex items-center justify-center border border-subtle group-hover:border-accent transition-all duration-300 overflow-hidden">
                  <div className="relative w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <Sparkles className="text-accent/40 group-hover:text-accent/80 transition-colors duration-300" size={64} />
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl font-cinzel font-bold text-off-white group-hover:text-accent transition-colors duration-300 mb-4">{project.title}</h3>
                    <p className="text-lg text-muted font-inter leading-relaxed">{project.description}</p>
                  </div>
                  <button className="inline-flex items-center gap-3 text-accent font-inter font-semibold hover:gap-4 transition-all duration-300 group-hover:text-off-white">
                    Explore Project <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MANIFESTO SECTION */}
      <section className="section-padding bg-gradient-dark relative overflow-hidden mt-0 border-t border-subtle">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-glow rounded-full blur-3xl"></div>
        </div>
        <div className="container max-w-3xl mx-auto text-center space-y-8 relative z-10">
          <h2 className="text-5xl md:text-6xl font-cinzel font-bold leading-tight">
            We don't just market ideas.
            <br />
            <span className="text-accent">We build mythologies.</span>
          </h2>
          <div className="space-y-6 text-lg text-muted font-inter leading-relaxed">
            <p>At Lunacy Media, strategy meets imagination. We create brands, campaigns, and immersive experiences that feel alive.</p>
            <p>Our work lives at the intersection of culture, storytelling, design, and commerce — helping artists, founders, and organizations turn vision into impact.</p>
            <p>From brand worlds to investor decks, from websites to original media properties, every project is built with intention, emotion, and unforgettable presence.</p>
          </div>
        </div>
      </section>



      {/* WHY LUNACY SECTION */}
      <section className="section-padding bg-gradient-dark relative overflow-hidden mt-0">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-glow rounded-full blur-3xl"></div>
        </div>
        <div className="container max-w-3xl mx-auto text-center space-y-8 relative z-10">
          <h2 className="text-5xl md:text-6xl font-cinzel font-bold leading-tight">
            Built for brands that want
            <br />
            <span className="text-accent">impact, not noise.</span>
          </h2>
          <div className="space-y-6 text-lg text-muted font-inter leading-relaxed">
            <p>We combine strategic thinking with artistic instinct.</p>
            <p>Lunacy exists for visionaries who need more than content — they need presence, identity, and resonance.</p>
            <p>We create work that moves people emotionally while delivering real business outcomes.</p>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="section-padding bg-charcoal border-t border-subtle mt-0">
        <div className="container max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-5xl md:text-6xl font-cinzel font-bold leading-tight">
            Let's build something
            <br />
            <span className="text-accent">unforgettable.</span>
          </h2>
          <p className="text-lg text-muted font-inter leading-relaxed">
            Whether you're launching a brand, scaling a business, or building a creative world from the ground up, Lunacy is ready to help bring it to life.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center pt-8">
            <Link href="/contact" className="btn-primary">
              Start a Project <ChevronRight size={20} />
            </Link>
            <Link href="/contact" className="btn-secondary">
              Book a Consultation <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
