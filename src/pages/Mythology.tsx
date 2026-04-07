export default function Mythology() {
  return (
    <div className="min-h-screen flex flex-col pt-16">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-secondary/10 to-background">
        <div className="container max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-cinzel font-bold text-foreground">
            Mythology
          </h1>
          <p className="text-lg text-foreground/70 font-inter leading-relaxed">
            The story of Lunacy Media—how it began, what it stands for, and where it's going.
          </p>
        </div>
      </section>

      {/* Origin Story */}
      <section className="section-padding">
        <div className="container max-w-3xl mx-auto space-y-8">
          <div>
            <h2 className="text-4xl font-cinzel font-bold text-accent mb-6">The Origin</h2>
            <p className="text-lg text-foreground/70 font-inter leading-relaxed mb-4">
              Lunacy Media was founded as both a creative studio and a long-term archive of evolution. It emerged from a simple belief: that the act of creation reshapes both the creator and the world around them.
            </p>
            <p className="text-lg text-foreground/70 font-inter leading-relaxed">
              What began as a personal practice of world-building—writing, music, visual design—evolved into a multidisciplinary studio dedicated to helping others construct their own universes. Lunacy exists at the intersection of art and strategy, mythology and commerce, personal expression and collective impact.
            </p>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="section-padding bg-card/30 border-t border-border">
        <div className="container max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="bg-gradient-to-br from-secondary/20 to-accent/10 border border-border rounded-sm aspect-square flex items-center justify-center">
              <p className="text-foreground/40 font-cinzel">[Founder Portrait]</p>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-cinzel font-bold text-foreground mb-2">Kailash (Klash)</h3>
                <p className="text-sm text-accent font-inter">Founder & Creative Director</p>
              </div>
              <p className="text-foreground/70 font-inter leading-relaxed">
                Kailash is a multidisciplinary artist and worldbuilder who grew up between multiple cultural and emotional worlds. His work draws from Hindu philosophy, Caribbean heritage, and Western media, creating a perspective rooted in duality—logic and intuition, structure and chaos, realism and mythology.
              </p>
              <p className="text-foreground/70 font-inter leading-relaxed">
                For Kailash, creation is both instinct and necessity. Writing, music, and visual symbolism became tools not just for expression, but for understanding identity, memory, and transformation. He approaches creation as architecture: building systems, worlds, and mythology designed to outlast their origin.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Beliefs */}
      <section className="section-padding">
        <div className="container max-w-3xl mx-auto">
          <h2 className="text-4xl font-cinzel font-bold text-accent mb-12 text-center">Core Beliefs</h2>
          <div className="space-y-8">
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
              <div key={i} className="border-l-2 border-accent pl-6 space-y-2">
                <h3 className="text-xl font-cinzel font-bold text-foreground">{belief.title}</h3>
                <p className="text-foreground/70 font-inter leading-relaxed">{belief.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="section-padding bg-card/30 border-t border-border">
        <div className="container max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-4xl font-cinzel font-bold text-foreground">Our Vision</h2>
          <p className="text-lg text-foreground/70 font-inter leading-relaxed">
            Lunacy Media is building toward a future where creative practice is recognized as essential infrastructure. Where brands are understood as mythologies. Where artists and entrepreneurs collaborate to build universes that matter.
          </p>
          <p className="text-lg text-foreground/70 font-inter leading-relaxed">
            We envision a world where the work we do today—the stories we tell, the identities we construct, the worlds we build—becomes the foundation for generations to come.
          </p>
        </div>
      </section>
    </div>
  );
}
