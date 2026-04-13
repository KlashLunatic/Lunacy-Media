import { Link } from 'wouter';
import { ChevronRight, Sparkles } from 'lucide-react';
import HeroSection from '../components/HeroSection';

export default function Home() {

  return (
    <div className="min-h-screen flex flex-col">
      <HeroSection />

      {/* WHAT WE CREATE SECTION - Editorial minimalism */}
      <section className="section-padding-lg bg-void border-b border-subtle relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-glow rounded-full blur-3xl opacity-15 animate-float-down"></div>
        <div className="container">
          <div className="text-center mb-section">
            <h2 className="text-accent glow-text-gold mb-8">WHAT WE CREATE</h2>
            <p className="text-xl text-muted font-inter max-w-3xl mx-auto leading-relaxed">
              We architect experiences that transcend traditional creative services, building emotional ecosystems where brands and audiences connect.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-section">
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
              <div key={idx} className="space-y-12 text-center group">
                <div className="h-64 bg-gradient-to-br from-purple-glow/20 to-accent-glow/10 rounded-sm flex items-center justify-center border border-subtle group-hover:border-accent transition-all duration-700 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <Sparkles className="text-accent/30 group-hover:text-accent/70 transition-colors duration-700 relative z-10" size={64} />
                </div>
                <div className="space-y-8">
                  <h3 className="text-3xl font-cinzel font-bold text-off-white group-hover:text-accent transition-colors duration-700">{service.title}</h3>
                  <p className="text-lg text-muted font-inter leading-relaxed font-light">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS SECTION - Editorial showcase */}
      <section className="section-padding-lg bg-charcoal/30 border-b border-subtle relative overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-purple-glow rounded-full blur-3xl opacity-15 animate-float-up"></div>
        <div className="container">
          <div className="text-center mb-section">
            <h2 className="text-accent glow-text-gold mb-8">FEATURED PROJECTS</h2>
            <p className="text-xl text-muted font-inter max-w-3xl mx-auto leading-relaxed">
              Immersive worlds and transformative brand experiences that define our creative practice.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-section">
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
                <div className="aspect-video bg-gradient-to-br from-purple-glow/30 to-accent-glow/15 rounded-sm mb-16 flex items-center justify-center border border-subtle group-hover:border-accent transition-all duration-700 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/8 to-purple/8 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="relative w-full h-full flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
                    <Sparkles className="text-accent/40 group-hover:text-accent/90 transition-colors duration-700" size={80} />
                  </div>
                </div>
                <div className="space-y-10">
                  <div>
                    <h3 className="text-4xl font-cinzel font-bold text-off-white group-hover:text-accent transition-colors duration-700 mb-8">{project.title}</h3>
                    <p className="text-lg text-muted font-inter leading-relaxed font-light">{project.description}</p>
                  </div>
                  <button className="inline-flex items-center gap-4 text-accent font-inter font-semibold hover:gap-6 transition-all duration-700 group-hover:text-off-white text-lg">
                    Explore Project <ChevronRight size={22} className="group-hover:translate-x-2 transition-transform duration-500" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MANIFESTO SECTION - Editorial philosophy */}
      <section className="section-padding-xl bg-gradient-dark relative overflow-hidden border-t border-subtle">
        <div className="absolute inset-0 opacity-12">
          <div className="absolute top-1/3 right-0 w-96 h-96 bg-accent-glow rounded-full blur-3xl animate-glow-shift"></div>
          <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-purple-glow rounded-full blur-3xl animate-float-down" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="container max-w-4xl mx-auto text-center space-y-16 relative z-10">
          <h2 className="text-5xl md:text-6xl font-cinzel font-bold leading-tight">
            We don't just market ideas.
            <br />
            <span className="text-accent glow-text-gold">We build mythologies.</span>
          </h2>
          <div className="space-y-10 text-lg text-muted font-inter leading-relaxed font-light">
            <p>At Lunacy Media, strategy meets imagination. We create brands, campaigns, and immersive experiences that feel alive.</p>
            <p>Our work lives at the intersection of culture, storytelling, design, and commerce — helping artists, founders, and organizations turn vision into impact.</p>
            <p>From brand worlds to investor decks, from websites to original media properties, every project is built with intention, emotion, and unforgettable presence.</p>
          </div>
        </div>
      </section>

      {/* WHY CLIENTS WORK WITH US - Credibility section */}
      <section className="section-padding-lg bg-void border-b border-subtle relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-glow rounded-full blur-3xl opacity-12 animate-float-up"></div>
        <div className="container">
          <div className="text-center mb-section">
            <h2 className="text-accent glow-text-gold mb-8">WHY CLIENTS WORK WITH US</h2>
            <p className="text-xl text-muted font-inter max-w-3xl mx-auto leading-relaxed">
              We combine strategic thinking, creative excellence, and proven execution across every project.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-section">
            {[
              {
                title: 'Narrative-Driven Strategy',
                description: 'We combine artistic storytelling with strategic business thinking.'
              },
              {
                title: 'Multi-Disciplinary Execution',
                description: 'From music and media to websites and investor materials, we build across mediums.'
              },
              {
                title: 'Culture-First Design',
                description: 'Our work is designed to resonate emotionally and create lasting audience connection.'
              }
            ].map((reason, idx) => (
              <div key={idx} className="space-y-12 text-center group">
                <div className="h-64 bg-gradient-to-br from-accent-glow/20 to-purple-glow/10 rounded-sm flex items-center justify-center border border-subtle group-hover:border-accent transition-all duration-700 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <Sparkles className="text-accent/30 group-hover:text-accent/70 transition-colors duration-700 relative z-10" size={64} />
                </div>
                <div className="space-y-8">
                  <h3 className="text-3xl font-cinzel font-bold text-off-white group-hover:text-accent transition-colors duration-700">{reason.title}</h3>
                  <p className="text-lg text-muted font-inter leading-relaxed font-light">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR PROCESS - Strategic framework */}
      <section className="section-padding-lg bg-charcoal/30 border-b border-subtle relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent-glow rounded-full blur-3xl opacity-12 animate-float-down"></div>
        <div className="container max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-section">
            <h2 className="text-accent glow-text-gold mb-8">OUR PROCESS</h2>
            <p className="text-xl text-muted font-inter max-w-3xl mx-auto leading-relaxed">
              A proven framework for transforming vision into reality through discovery, strategy, execution, and refinement.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-12">
            {[
              {
                step: '01',
                title: 'Discover',
                description: 'We listen deeply to understand your vision, values, and goals. This phase establishes the foundation for all creative work.'
              },
              {
                step: '02',
                title: 'Strategize',
                description: 'We develop a strategic framework that guides all creative decisions, ensuring alignment with your objectives.'
              },
              {
                step: '03',
                title: 'Build',
                description: 'Our team executes the vision with precision and artistry, bringing the strategy to life through multiple disciplines.'
              },
              {
                step: '04',
                title: 'Launch',
                description: 'We iterate based on feedback, ensuring the final deliverables exceed expectations and serve your goals.'
              }
            ].map((process, idx) => (
              <div key={idx} className="space-y-10 group">
                <div className="space-y-6">
                  <div className="text-6xl font-cinzel font-bold text-accent/35 group-hover:text-accent/70 transition-colors duration-700">{process.step}</div>
                  <h3 className="text-2xl font-cinzel font-bold text-off-white group-hover:text-accent transition-colors duration-700">{process.title}</h3>
                </div>
                <p className="text-base text-muted font-inter font-light leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY LUNACY SECTION - Brand philosophy */}
      <section className="section-padding-xl bg-gradient-dark relative overflow-hidden border-t border-subtle">
        <div className="absolute inset-0 opacity-12">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-glow rounded-full blur-3xl animate-glow-shift"></div>
          <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-accent-glow rounded-full blur-3xl animate-float-up" style={{ animationDelay: '3s' }}></div>
        </div>
        <div className="container max-w-4xl mx-auto text-center space-y-16 relative z-10">
          <h2 className="text-5xl md:text-6xl font-cinzel font-bold leading-tight">
            Built for brands that want
            <br />
            <span className="text-accent glow-text-gold">impact, not noise.</span>
          </h2>
          <div className="space-y-10 text-lg text-muted font-inter leading-relaxed font-light">
            <p>We combine strategic thinking with artistic instinct.</p>
            <p>Lunacy exists for visionaries who need more than content — they need presence, identity, and resonance.</p>
            <p>We create work that moves people emotionally while delivering real business outcomes.</p>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION - Conversion focus */}
      <section className="section-padding-lg bg-void border-t border-subtle relative overflow-hidden">
        <div className="absolute inset-0 opacity-12">
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent-glow rounded-full blur-3xl animate-glow-shift"></div>
        </div>
        <div className="container max-w-4xl mx-auto text-center space-y-16 relative z-10">
          <h2 className="text-5xl md:text-6xl font-cinzel font-bold leading-tight">
            Let's build something
            <br />
            <span className="text-accent glow-text-gold">unforgettable.</span>
          </h2>
          <p className="text-xl text-muted font-inter leading-relaxed font-light">
            Whether you're launching a brand, scaling a business, or building a creative world from the ground up, Lunacy is ready to help bring it to life.
          </p>
          <div className="flex flex-col md:flex-row gap-10 justify-center pt-12">
            <Link href="/contact" className="btn-primary">
              Start a Project <ChevronRight size={24} />
            </Link>
            <Link href="/contact" className="btn-secondary">
              Book a Consultation <ChevronRight size={24} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
