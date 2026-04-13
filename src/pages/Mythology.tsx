import { Sparkles } from 'lucide-react';

export default function Mythology() {
  return (
    <div className="min-h-screen flex flex-col pt-16">
      {/* Hero - Enhanced */}
      <section className="section-padding-lg bg-gradient-to-b from-accent/5 to-void border-b border-subtle">
        <div className="container max-w-3xl mx-auto text-center space-y-8">
          <h1 className="text-7xl md:text-8xl font-cinzel font-bold text-off-white glow-text-gold">
            Mythology
          </h1>
          <p className="text-xl text-muted font-inter font-light leading-relaxed">
            The story of Lunacy Media—how it began, what it stands for, and where it's going.
          </p>
        </div>
      </section>

      {/* Origin Story - Enhanced */}
      <section className="section-padding-lg bg-void border-b border-subtle">
        <div className="container max-w-3xl mx-auto space-y-12">
          <div>
            <h2 className="text-6xl font-cinzel font-bold text-accent mb-12 glow-text-gold">The Origin</h2>
            <div className="space-y-8">
              <p className="text-xl text-muted font-inter font-light leading-relaxed">
                Lunacy Media was founded as both a creative studio and a long-term archive of evolution. It emerged from a simple belief: that the act of creation reshapes both the creator and the world around them.
              </p>
              <p className="text-xl text-muted font-inter font-light leading-relaxed">
                What began as a personal practice of world-building—writing, music, visual design—evolved into a multidisciplinary studio dedicated to helping others construct their own universes. Lunacy exists at the intersection of art and strategy, mythology and commerce, personal expression and collective impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder - Premium presentation */}
      <section className="section-padding-lg bg-gradient-dark border-t border-subtle relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-glow rounded-full blur-3xl animate-glow-shift"></div>
        </div>
        <div className="container max-w-3xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-purple-glow/30 to-accent-glow/20 border border-subtle rounded-sm aspect-square flex items-center justify-center group hover:border-accent transition-all duration-500 overflow-hidden">
              <div className="flex flex-col items-center gap-4">
                <Sparkles className="text-accent/50" size={64} />
                <p className="text-muted font-cinzel text-lg">[Founder Portrait]</p>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-4xl font-cinzel font-bold text-off-white mb-3">Kailash (Klash)</h3>
                <p className="text-base text-accent font-inter tracking-wide uppercase font-semibold">Founder & Creative Director</p>
              </div>
              <div className="space-y-6">
                <p className="text-lg text-muted font-inter font-light leading-relaxed">
                  Kailash is a multidisciplinary artist and worldbuilder who grew up between multiple cultural and emotional worlds. His work draws from Hindu philosophy, Caribbean heritage, and Western media, creating a perspective rooted in duality—logic and intuition, structure and chaos, realism and mythology.
                </p>
                <p className="text-lg text-muted font-inter font-light leading-relaxed">
                  For Kailash, creation is both instinct and necessity. Writing, music, and visual symbolism became tools not just for expression, but for understanding identity, memory, and transformation. He approaches creation as architecture: building systems, worlds, and mythology designed to outlast their origin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Beliefs - Editorial layout */}
      <section className="section-padding-lg bg-void border-t border-subtle">
        <div className="container max-w-3xl mx-auto">
          <h2 className="text-6xl font-cinzel font-bold text-accent mb-20 text-center glow-text-gold">Core Beliefs</h2>
          <div className="space-y-16">
            {[
              {
                title: 'Emotional Truth Has Structural Power',
                desc: 'The deepest truths about human experience can be encoded into systems, brands, and worlds. Emotion isn\'t separate from strategy—it\'s the foundation of it.',
              },
              {
                title: 'Mythology Is Functional, Not Fiction',
                desc: 'Myths are frameworks for understanding reality. Every brand, every identity, every world operates according to mythological principles. We make this explicit.',
              },
              {
                title: 'Identity Is Continuously Constructed',
                desc: 'Identity is not fixed. It\'s built through experience, reflection, and intentional creation. Every project is an opportunity to reshape identity.',
              },
              {
                title: 'Creativity Is Evolutionary',
                desc: 'Creativity isn\'t a talent—it\'s a survival mechanism and evolutionary force. It\'s how we adapt, grow, and transcend our current limitations.',
              },
            ].map((belief, i) => (
              <div key={i} className="border-l-4 border-accent pl-10 space-y-4 group hover:border-accent/80 transition-colors duration-500">
                <h3 className="text-2xl font-cinzel font-bold text-off-white group-hover:text-accent transition-colors duration-500">{belief.title}</h3>
                <p className="text-lg text-muted font-inter font-light leading-relaxed">{belief.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision - Cinematic finale */}
      <section className="section-padding-lg bg-gradient-dark border-t border-subtle relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-glow rounded-full blur-3xl animate-glow-shift"></div>
          <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-purple-glow rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="container max-w-3xl mx-auto text-center space-y-12 relative z-10">
          <h2 className="text-6xl md:text-7xl font-cinzel font-bold text-off-white">Our Vision</h2>
          <div className="space-y-8">
            <p className="text-xl text-muted font-inter font-light leading-relaxed">
              Lunacy Media is building toward a future where creative practice is recognized as essential infrastructure. Where brands are understood as mythologies. Where artists and entrepreneurs collaborate to build universes that matter.
            </p>
            <p className="text-xl text-muted font-inter font-light leading-relaxed">
              We envision a world where the work we do today—the stories we tell, the identities we construct, the worlds we build—becomes the foundation for generations to come.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
