import { Link } from 'wouter';
import { ChevronRight, Sparkles } from 'lucide-react';
import HeroSection from '../components/HeroSection';

export default function Home() {
  const projects = [
    {
      title: 'Tammy',
      description: 'Interactive narrative exploring identity and transformation.',
      category: 'Original IP'
    },
    {
      title: 'Obeah',
      description: 'Graphic novel blending Caribbean mythology with contemporary storytelling.',
      category: 'Original IP'
    },
    {
      title: 'Mulligan',
      description: 'Complete brand identity and campaign for creative collective.',
      category: 'Branding'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <HeroSection />

      {/* BRAND STRIP */}
      <section className="bg-charcoal border-y border-subtle py-8 mt-0">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-center">
            {['Creative Studio', 'Media House', 'Brand Strategy', 'Storytelling', 'Digital Experiences', 'Culture Building'].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 md:gap-8">
                <span className="text-xs font-inter text-subtle uppercase tracking-widest">{item}</span>
                {idx < 5 && <span className="text-subtle opacity-30">·</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MANIFESTO SECTION */}
      <section className="section-padding bg-gradient-dark relative overflow-hidden mt-0">
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

      {/* SERVICES SECTION */}
      <section className="section-padding mt-0">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-cinzel font-bold mb-6">What we build</h2>
            <p className="text-lg text-muted font-inter">Six core services designed for ambitious creators and forward-thinking brands.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Brand Strategy', desc: 'Positioning, messaging, identity systems, and long-term growth direction.' },
              { title: 'Creative Direction', desc: 'Campaign concepts, visual storytelling, artistic world-building, and execution.' },
              { title: 'Marketing & Campaigns', desc: 'Launch strategy, social storytelling, audience development, and conversion.' },
              { title: 'Web & Digital', desc: 'Beautiful, responsive websites and immersive digital storytelling platforms.' },
              { title: 'Pitch Decks & Materials', desc: 'Professional decks, grant applications, sponsorship materials, and presentations.' },
              { title: 'Artist & Media Dev', desc: 'Creative support for music, storytelling IP, and culture-led brands.' }
            ].map((service, idx) => (
              <div key={idx} className="card group">
                <div className="space-y-4">
                  <h3 className="text-xl font-cinzel font-bold text-accent group-hover:text-off-white transition-colors duration-300">{service.title}</h3>
                  <p className="text-muted font-inter text-sm leading-relaxed">{service.desc}</p>
                  <div className="flex items-center gap-2 text-accent text-sm font-inter pt-2 group-hover:gap-3 transition-all duration-300">
                    Learn more <ChevronRight size={16} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED WORK SECTION */}
      <section className="section-padding bg-charcoal/50 border-y border-subtle mt-0">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-cinzel font-bold mb-6">Selected Worlds</h2>
            <p className="text-lg text-muted font-inter">A glimpse into the stories, brands, and experiences we've brought to life.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <Link key={idx} href="/work" className="group card overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-purple-glow to-accent-glow flex items-center justify-center mb-6 rounded-sm">
                  <Sparkles className="text-accent/40 group-hover:text-accent/60 transition-colors duration-300" size={48} />
                </div>
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-cinzel font-bold text-off-white group-hover:text-accent transition-colors duration-300">{project.title}</h3>
                    <span className="text-xs font-inter text-accent bg-accent/10 px-2 py-1 rounded-sm whitespace-nowrap">{project.category}</span>
                  </div>
                  <p className="text-muted font-inter text-sm leading-relaxed">{project.description}</p>
                  <div className="flex items-center gap-2 text-accent text-sm font-inter pt-2 group-hover:gap-3 transition-all duration-300">
                    View Case Study <ChevronRight size={16} />
                  </div>
                </div>
              </Link>
            ))}
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
