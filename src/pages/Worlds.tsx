import { Link } from 'wouter';
import { ChevronRight, Sparkles } from 'lucide-react';
import SEO from '../components/SEO';

export default function Worlds() {
  const worlds = [
    {
      title: 'The Trisomy',
      type: 'Album Universe · Trilogy',
      tagline: 'A three-part musical odyssey exploring identity, memory, and legacy.',
      description:
        'Mulligan. Between the Last Letters. Kalu Ram. Three albums. One mythic autobiography told through hip-hop, poetry, and worldbuilding. Each chapter explores a different dimension of the same story: who we become, what we carry, and who we were before the world told us otherwise.',
      status: 'Chapter I Released',
      theme: 'Evolution',
      cta: 'Explore the Universe',
      href: '/work',
    },
    {
      title: 'Obeah',
      type: 'Graphic Novel Series',
      tagline: 'Magic was never the mystery. History was.',
      description:
        'A contemporary spiritual mythology reclaiming Caribbean and African tradition through graphic novel form. Obeah follows the suppressed history of a practice that was never about darkness — it was about power, memory, and who gets to control the story of a people.',
      status: 'Book 1 Complete',
      theme: 'Reclamation',
      cta: 'Explore the Universe',
      href: '/work',
    },
    {
      title: 'Tammy',
      type: 'AR / VR Experience',
      tagline: 'Tammy is not a lesson. She\'s an encounter.',
      description:
        'An immersive psychological experience built around misinformation, identity, and the systems that shape what we believe. Tammy doesn\'t explain the problem. She puts you inside it.',
      status: 'In Development',
      theme: 'Misinformation',
      cta: 'Learn More',
      href: '/contact',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col pt-16">
      <SEO
        title="The Lunacy Universe | Original IP & World-Building"
        description="Explore the original worlds of Lunacy Media — The Trisomy, Obeah, and Tammy. Immersive narratives, graphic novels, and multimedia universes built from Toronto, Canada."
        path="/worlds"
      />

      <section className="section-padding-lg bg-gradient-to-b from-accent/5 to-void border-b border-subtle">
        <div className="container max-w-3xl mx-auto text-center space-y-8">
          <h1 className="text-7xl md:text-8xl font-cinzel font-bold text-off-white glow-text-gold">
            Original Worlds
          </h1>
          <p className="text-xl text-muted font-inter font-light leading-relaxed">
            Lunacy develops original intellectual property — complete universes that exist across multiple mediums and continue to evolve.
          </p>
        </div>
      </section>

      <section className="section-padding-lg bg-void">
        <div className="container space-y-20">
          {worlds.map((world, i) => (
            <div key={world.title} className="group">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center border-b border-subtle pb-20 last:border-b-0">
                <div className={`space-y-10 ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div>
                    <p className="text-sm font-inter text-accent mb-4 tracking-widest uppercase font-semibold">{world.type}</p>
                    <h2 className="text-5xl font-cinzel font-bold text-off-white group-hover:text-accent transition-colors duration-500">{world.title}</h2>
                  </div>
                  <p className="text-2xl text-off-white font-inter font-light leading-relaxed">{world.tagline}</p>
                  <p className="text-xl text-muted font-inter font-light leading-relaxed">{world.description}</p>
                  <div className="flex items-center gap-4 flex-wrap">
                    <div className="px-4 py-2 bg-accent/10 border border-accent/50 rounded-sm group-hover:bg-accent/20 transition-all duration-500">
                      <span className="text-sm font-inter text-accent font-semibold tracking-wide">{world.status}</span>
                    </div>
                    <div className="px-4 py-2 bg-charcoal/60 border border-subtle rounded-sm">
                      <span className="text-sm font-inter text-off-white font-semibold tracking-wide">{world.theme}</span>
                    </div>
                  </div>
                  <Link href={world.href} className="btn-primary inline-flex items-center gap-3" aria-label={`${world.cta} — ${world.title}`}>
                    {world.cta} <ChevronRight size={22} />
                  </Link>
                </div>
                <div className={`bg-gradient-to-br from-purple-glow/30 to-accent-glow/20 border border-subtle rounded-sm aspect-video flex items-center justify-center group-hover:border-accent transition-all duration-500 overflow-hidden relative ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="text-center relative z-10">
                    <Sparkles className="text-accent/50 group-hover:text-accent/100 transition-colors duration-500 mx-auto mb-4" size={64} />
                    <p className="text-muted font-cinzel text-lg">{world.theme}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <p className="text-center text-xl text-muted font-inter font-light italic">
            One Sister remains unrevealed. The universe is still expanding.
          </p>
        </div>
      </section>

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
          <Link href="/contact" className="btn-primary inline-flex items-center gap-3 mt-12" aria-label="Discuss partnership opportunities">
            Discuss Opportunities <ChevronRight size={22} />
          </Link>
        </div>
      </section>
    </div>
  );
}
