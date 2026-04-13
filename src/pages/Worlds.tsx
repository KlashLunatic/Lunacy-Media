import { Link } from 'wouter';
import { ChevronRight, Sparkles } from 'lucide-react';

export default function Worlds() {
  const worlds = [
    {
      title: 'Tammy',
      type: 'Interactive Narrative Experience',
      description: 'A psychological journey through identity, memory, and transformation. Tammy explores the nature of self through an immersive digital experience.',
      status: 'In Development',
      cta: 'Learn More',
    },
    {
      title: 'Obeah',
      type: 'Graphic Novel Series',
      description: 'A contemporary exploration of Caribbean mythology, spiritual power, and cultural identity. Obeah weaves traditional wisdom with modern storytelling.',
      status: 'Book 1 Complete',
      cta: 'Explore the Universe',
    },
    {
      title: 'Sonic Architecture',
      type: 'Album Universe',
      description: 'A multimedia project combining original music with visual art, narrative, and interactive elements. Each album is a complete world unto itself.',
      status: 'Series Ongoing',
      cta: 'Listen & Explore',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col pt-16">
      {/* Hero - Enhanced */}
      <section className="section-padding-lg bg-gradient-to-b from-accent/5 to-void border-b border-subtle">
        <div className="container max-w-3xl mx-auto text-center space-y-8">
          <h1 className="text-7xl md:text-8xl font-cinzel font-bold text-off-white glow-text-gold">
            Original Worlds
          </h1>
          <p className="text-xl text-muted font-inter font-light leading-relaxed">
            Lunacy develops original intellectual property—complete universes that exist across multiple mediums and continue to evolve.
          </p>
        </div>
      </section>

      {/* Worlds Showcase - Premium presentation */}
      <section className="section-padding-lg bg-void">
        <div className="container space-y-20">
          {worlds.map((world, i) => (
            <div key={i} className="group">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center border-b border-subtle pb-20 last:border-b-0">
                <div className={`space-y-10 ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div>
                    <p className="text-sm font-inter text-accent mb-4 tracking-widest uppercase font-semibold">{world.type}</p>
                    <h2 className="text-5xl font-cinzel font-bold text-off-white group-hover:text-accent transition-colors duration-500">{world.title}</h2>
                  </div>
                  <p className="text-xl text-muted font-inter font-light leading-relaxed">{world.description}</p>
                  <div className="flex items-center gap-4">
                    <div className="px-4 py-2 bg-accent/10 border border-accent/50 rounded-sm group-hover:bg-accent/20 transition-all duration-500">
                      <span className="text-sm font-inter text-accent font-semibold tracking-wide">{world.status}</span>
                    </div>
                  </div>
                  <button className="btn-primary inline-flex items-center gap-3">
                    {world.cta} <ChevronRight size={22} />
                  </button>
                </div>
                <div className={`bg-gradient-to-br from-purple-glow/30 to-accent-glow/20 border border-subtle rounded-sm aspect-video flex items-center justify-center group-hover:border-accent transition-all duration-500 overflow-hidden relative ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="text-center relative z-10">
                    <Sparkles className="text-accent/50 group-hover:text-accent/100 transition-colors duration-500 mx-auto mb-4" size={64} />
                    <p className="text-muted font-cinzel text-lg">[Visual Coming Soon]</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Investment & Partnership - Premium CTA */}
      <section className="section-padding-lg bg-gradient-dark border-t border-subtle relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent-glow rounded-full blur-3xl animate-glow-shift"></div>
          <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-purple-glow rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="container max-w-3xl mx-auto text-center space-y-12 relative z-10">
          <h2 className="text-6xl md:text-7xl font-cinzel font-bold text-accent glow-text-gold">Investment & Partnership</h2>
          <p className="text-xl text-muted font-inter font-light leading-relaxed">
            We're seeking collaborators, investors, and partners who believe in the power of world-building. Whether you're interested in funding development, co-creating content, or bringing these universes to new audiences, let's explore possibilities together.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
            {[
              { title: 'Creative Partnership', desc: 'Collaborate on content creation, world expansion, and multimedia development' },
              { title: 'Investment', desc: 'Fund development of original IP with potential for significant returns' },
              { title: 'Distribution', desc: 'Bring Lunacy worlds to new platforms, audiences, and markets' },
            ].map((opp, i) => (
              <div key={i} className="bg-charcoal/50 border border-subtle rounded-sm p-8 space-y-4 hover:border-accent transition-all duration-500 group hover:shadow-lg hover:shadow-accent/10">
                <h3 className="font-cinzel font-bold text-off-white text-xl group-hover:text-accent transition-colors duration-500">{opp.title}</h3>
                <p className="text-base text-muted font-inter font-light leading-relaxed">{opp.desc}</p>
              </div>
            ))}
          </div>
          <Link href="/contact" className="btn-primary inline-flex items-center gap-3 mt-12">
            Discuss Opportunities <ChevronRight size={22} />
          </Link>
        </div>
      </section>
    </div>
  );
}
