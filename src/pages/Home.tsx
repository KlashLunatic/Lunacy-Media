import { Link } from 'wouter';
import { ChevronRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col pt-16">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-secondary/10 to-background relative overflow-hidden">
        <div className="container max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-cinzel font-bold leading-tight">
            Where Stories
            <br />
            <span className="text-accent">Become Worlds</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 font-inter max-w-2xl mx-auto leading-relaxed">
            Lunacy Media is a multidisciplinary creative studio building brands, campaigns, digital experiences, and original artistic universes that leave a lasting imprint.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center pt-4">
            <Link href="/studio" className="btn-primary inline-flex items-center justify-center gap-2">
              Explore Services <ChevronRight size={20} />
            </Link>
            <Link href="/contact" className="btn-secondary inline-flex items-center justify-center gap-2">
              Start a Project <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Strip */}
      <section className="bg-card border-y border-border py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-8 text-center md:text-left">
            <div className="flex-1">
              <p className="text-sm font-inter text-foreground/60 mb-2">OUR APPROACH</p>
              <p className="font-cinzel text-lg text-accent">We don't just market ideas. We build mythologies.</p>
            </div>
            <div className="flex-1">
              <p className="text-sm font-inter text-foreground/60 mb-2">OUR BELIEF</p>
              <p className="font-cinzel text-lg text-accent">Emotional truth has structural power.</p>
            </div>
            <div className="flex-1">
              <p className="text-sm font-inter text-foreground/60 mb-2">OUR MISSION</p>
              <p className="font-cinzel text-lg text-accent">Build universes that outlast their origin.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="section-padding">
        <div className="container max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-cinzel font-bold">The Lunacy Manifesto</h2>
          <p className="text-lg text-foreground/70 font-inter leading-relaxed">
            We believe that identity is not fixed—it is continuously constructed through experience, reflection, and intentional creation. Creativity is not a talent; it's a survival mechanism and evolutionary force. Every project we undertake is an act of world-building, a deliberate construction of meaning that reshapes both creator and audience.
          </p>
          <p className="text-lg text-foreground/70 font-inter leading-relaxed">
            We don't just create content. We architect experiences. We don't just build brands. We construct mythologies. We don't just make art. We build universes designed to outlast their origin.
          </p>
        </div>
      </section>

      {/* Featured Work */}
      <section className="section-padding bg-card/30 border-t border-border">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-cinzel font-bold mb-12 text-center">Selected Worlds</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Tammy', subtitle: 'Interactive Narrative', desc: 'A psychological journey through identity and transformation' },
              { title: 'Obeah', subtitle: 'Graphic Novel', desc: 'Exploring Caribbean mythology and spiritual power' },
              { title: 'Mulligan', subtitle: 'Brand Universe', desc: 'A complete identity system for a forward-thinking brand' },
            ].map((project, i) => (
              <div key={i} className="group bg-background border border-border rounded-sm p-8 hover:border-accent transition-all duration-300 cursor-pointer">
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-inter text-accent mb-2">{project.subtitle}</p>
                    <h3 className="text-2xl font-cinzel font-bold text-foreground group-hover:text-accent transition-colors">{project.title}</h3>
                  </div>
                  <p className="text-foreground/60 font-inter text-sm">{project.desc}</p>
                  <div className="flex items-center gap-2 text-accent text-sm font-inter pt-4">
                    View Project <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Lunacy */}
      <section className="section-padding">
        <div className="container max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-cinzel font-bold mb-12 text-center">Why Lunacy</h2>
          <div className="space-y-8">
            {[
              { title: 'Worldbuilding First', desc: 'We approach every project as an opportunity to construct a complete universe—not just a logo, campaign, or product, but a cohesive mythology.' },
              { title: 'Strategic Depth', desc: 'We combine artistic vision with strategic thinking, ensuring every creative decision serves both emotional resonance and business objectives.' },
              { title: 'Multidisciplinary Expertise', desc: 'From visual identity to narrative design, from digital experiences to original IP, we bring integrated thinking to every challenge.' },
            ].map((item, i) => (
              <div key={i} className="border-l-2 border-accent pl-6 space-y-2">
                <h3 className="text-xl font-cinzel font-bold text-foreground">{item.title}</h3>
                <p className="text-foreground/70 font-inter">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary/10 border-t border-border">
        <div className="container max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-cinzel font-bold">Ready to Build Something Unforgettable?</h2>
          <p className="text-lg text-foreground/70 font-inter">
            Whether you're seeking strategic creative services or exploring partnership opportunities in original IP, let's talk about your vision.
          </p>
          <Link href="/contact" className="btn-primary inline-block">
            Initiate a Conversation
          </Link>
        </div>
      </section>
    </div>
  );
}
