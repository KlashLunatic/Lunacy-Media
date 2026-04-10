import { Link } from 'wouter';
import { ChevronRight, Sparkles } from 'lucide-react';

export default function Home() {
  const projects = [
    {
      title: 'Tammy',
      description: 'Interactive narrative experience exploring identity and transformation.',
      category: 'Original IP'
    },
    {
      title: 'Obeah',
      description: 'Graphic novel series blending Caribbean mythology with contemporary storytelling.',
      category: 'Original IP'
    },
    {
      title: 'Mulligan',
      description: 'Brand identity and campaign for creative collective.',
      category: 'Brand Development'
    },
    {
      title: 'Lunacy Campaign Concepts',
      description: 'Strategic campaign frameworks for culture-led brands.',
      category: 'Strategy'
    },
    {
      title: 'Client Brand Development',
      description: 'End-to-end brand building for emerging artists and founders.',
      category: 'Branding'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col pt-16">
      {/* SECTION 1: HERO */}
      <section className="section-padding bg-gradient-to-b from-secondary/10 to-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        </div>
        <div className="container max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-cinzel font-bold leading-tight">
            Where stories become
            <br />
            <span className="text-accent">worlds.</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 font-inter max-w-2xl mx-auto leading-relaxed">
            Lunacy Media is a multidisciplinary creative studio building brands, campaigns, digital experiences, and original artistic universes that leave a lasting imprint.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center pt-4">
            <Link href="/studio" className="btn-primary inline-flex items-center justify-center gap-2">
              Work With Us <ChevronRight size={20} />
            </Link>
            <Link href="/work" className="btn-secondary inline-flex items-center justify-center gap-2">
              View Projects <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 2: BRAND STRIP */}
      <section className="bg-card border-y border-border py-6">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-center">
            <span className="text-sm font-inter text-foreground/60">Creative Studio</span>
            <span className="text-foreground/30">·</span>
            <span className="text-sm font-inter text-foreground/60">Media House</span>
            <span className="text-foreground/30">·</span>
            <span className="text-sm font-inter text-foreground/60">Brand Strategy</span>
            <span className="text-foreground/30">·</span>
            <span className="text-sm font-inter text-foreground/60">Storytelling</span>
            <span className="text-foreground/30">·</span>
            <span className="text-sm font-inter text-foreground/60">Digital Experiences</span>
            <span className="text-foreground/30">·</span>
            <span className="text-sm font-inter text-foreground/60">Culture Building</span>
          </div>
        </div>
      </section>

      {/* SECTION 3: MANIFESTO */}
      <section className="section-padding">
        <div className="container max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-6">
            <h2 className="text-5xl md:text-6xl font-cinzel font-bold">
              We don't just market ideas.
              <br />
              <span className="text-accent">We build mythologies.</span>
            </h2>
            <div className="space-y-4 text-lg text-foreground/70 font-inter leading-relaxed">
              <p>At Lunacy Media, strategy meets imagination. We create brands, campaigns, and immersive experiences that feel alive.</p>
              <p>Our work lives at the intersection of culture, storytelling, design, and commerce — helping artists, founders, and organizations turn vision into impact.</p>
              <p>From brand worlds to investor decks, from websites to original media properties, every project is built with intention, emotion, and unforgettable presence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: SERVICES */}
      <section className="section-padding bg-card/50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-cinzel font-bold mb-4">What we build</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Brand Strategy',
                description: 'Positioning, messaging, identity systems, and long-term growth direction.'
              },
              {
                title: 'Creative Direction',
                description: 'Campaign concepts, visual storytelling, artistic world-building, and execution.'
              },
              {
                title: 'Marketing & Campaigns',
                description: 'Launch strategy, social storytelling, audience development, and conversion-focused campaigns.'
              },
              {
                title: 'Web & Digital Experiences',
                description: 'Beautiful, responsive websites and immersive digital storytelling platforms.'
              },
              {
                title: 'Pitch Decks & Investor Materials',
                description: 'Professional decks, grant applications, sponsorship materials, and presentations.'
              },
              {
                title: 'Artist & Media Development',
                description: 'Creative support for music, storytelling IP, and culture-led brands.'
              }
            ].map((service, idx) => (
              <div key={idx} className="bg-background border border-border p-8 rounded-sm hover:border-accent transition-colors duration-300">
                <h3 className="text-xl font-cinzel font-bold mb-3 text-accent">{service.title}</h3>
                <p className="text-foreground/70 font-inter leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: FEATURED WORK */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-cinzel font-bold mb-4">Selected Worlds</h2>
            <p className="text-lg text-foreground/70 font-inter">A glimpse into the stories, brands, and experiences we've brought to life.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="group bg-card border border-border overflow-hidden hover:border-accent transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-secondary/20 to-accent/10 flex items-center justify-center">
                  <Sparkles className="text-accent/50" size={48} />
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-cinzel font-bold">{project.title}</h3>
                    <span className="text-xs font-inter text-accent bg-accent/10 px-2 py-1 rounded-sm">{project.category}</span>
                  </div>
                  <p className="text-foreground/70 font-inter text-sm leading-relaxed">{project.description}</p>
                  <Link href="/work" className="inline-flex items-center gap-2 text-accent font-inter text-sm hover:gap-3 transition-all duration-300">
                    View Case Study <ChevronRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: WHY LUNACY */}
      <section className="section-padding bg-gradient-to-b from-secondary/5 to-background">
        <div className="container max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-5xl md:text-6xl font-cinzel font-bold">
            Built for brands that want
            <br />
            <span className="text-accent">impact, not noise.</span>
          </h2>
          <div className="space-y-4 text-lg text-foreground/70 font-inter leading-relaxed">
            <p>We combine strategic thinking with artistic instinct.</p>
            <p>Lunacy exists for visionaries who need more than content — they need presence, identity, and resonance.</p>
            <p>We create work that moves people emotionally while delivering real business outcomes.</p>
          </div>
        </div>
      </section>

      {/* SECTION 7: FINAL CTA */}
      <section className="section-padding bg-card border-t border-border">
        <div className="container max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-5xl md:text-6xl font-cinzel font-bold">
            Let's build something
            <br />
            <span className="text-accent">unforgettable.</span>
          </h2>
          <p className="text-lg text-foreground/70 font-inter leading-relaxed">
            Whether you're launching a brand, scaling a business, or building a creative world from the ground up, Lunacy is ready to help bring it to life.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center pt-4">
            <Link href="/contact" className="btn-primary inline-flex items-center justify-center gap-2">
              Start a Project <ChevronRight size={20} />
            </Link>
            <Link href="/contact" className="btn-secondary inline-flex items-center justify-center gap-2">
              Book a Consultation <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
