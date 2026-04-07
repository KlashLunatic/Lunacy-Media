import { Link } from 'wouter';
import { ChevronRight } from 'lucide-react';

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
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-secondary/10 to-background">
        <div className="container max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-cinzel font-bold text-foreground">
            Original Worlds
          </h1>
          <p className="text-lg text-foreground/70 font-inter leading-relaxed">
            Lunacy develops original intellectual property—complete universes that exist across multiple mediums and continue to evolve.
          </p>
        </div>
      </section>

      {/* Worlds Showcase */}
      <section className="section-padding">
        <div className="container space-y-12">
          {worlds.map((world, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center border-b border-border pb-12 last:border-b-0">
              <div className={`space-y-6 ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                <div>
                  <p className="text-sm font-inter text-accent mb-2">{world.type}</p>
                  <h2 className="text-4xl font-cinzel font-bold text-foreground">{world.title}</h2>
                </div>
                <p className="text-lg text-foreground/70 font-inter leading-relaxed">{world.description}</p>
                <div className="flex items-center gap-4">
                  <div className="px-3 py-1 bg-secondary/20 border border-secondary rounded-sm">
                    <span className="text-sm font-inter text-secondary">{world.status}</span>
                  </div>
                </div>
                <button className="btn-primary inline-flex items-center gap-2">
                  {world.cta} <ChevronRight size={20} />
                </button>
              </div>
              <div className={`bg-gradient-to-br from-secondary/20 to-accent/10 border border-border rounded-sm aspect-video flex items-center justify-center ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                <div className="text-center">
                  <p className="text-foreground/40 font-cinzel text-lg">[Visual Coming Soon]</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Investment & Partnership */}
      <section className="section-padding bg-card/30 border-t border-border">
        <div className="container max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-cinzel font-bold">Investment & Partnership</h2>
          <p className="text-lg text-foreground/70 font-inter leading-relaxed">
            We're seeking collaborators, investors, and partners who believe in the power of world-building. Whether you're interested in funding development, co-creating content, or bringing these universes to new audiences, let's explore possibilities together.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
            {[
              { title: 'Creative Partnership', desc: 'Collaborate on content creation, world expansion, and multimedia development' },
              { title: 'Investment', desc: 'Fund development of original IP with potential for significant returns' },
              { title: 'Distribution', desc: 'Bring Lunacy worlds to new platforms, audiences, and markets' },
            ].map((opp, i) => (
              <div key={i} className="bg-background border border-border rounded-sm p-6 space-y-3">
                <h3 className="font-cinzel font-bold text-foreground">{opp.title}</h3>
                <p className="text-sm text-foreground/70 font-inter">{opp.desc}</p>
              </div>
            ))}
          </div>
          <Link href="/contact" className="btn-primary inline-flex items-center gap-2 mt-8">
            Discuss Opportunities <ChevronRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
