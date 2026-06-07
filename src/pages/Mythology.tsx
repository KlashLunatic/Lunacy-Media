import SEO from '../components/SEO';
import { motion } from 'framer-motion';

export default function Mythology() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <div className="min-h-screen flex flex-col pt-16">
      <SEO
        title="Our Story | The Mythology of Lunacy Media"
        description="Discover the origin story, core beliefs, and creative philosophy behind Lunacy Media. Founded by Kailash Nehru in Toronto, Canada — a studio where mythology meets strategy."
        path="/mythology"
      />

      {/* Hero - Enhanced */}
      <section className="section-padding-lg bg-gradient-to-b from-accent/5 to-void border-b border-subtle relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/IMG_0497.GIF" 
            alt="" 
            className="w-full h-full object-cover opacity-20 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-void/40 via-void/80 to-void"></div>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container max-w-3xl mx-auto text-center space-y-8 relative z-10"
        >
          <h1 className="text-7xl md:text-8xl font-cinzel font-bold text-off-white glow-text-gold">
            Mythology
          </h1>
          <p className="text-xl text-muted font-inter font-light leading-relaxed">
            The story of Lunacy Media—how it began, what it stands for, and where it's going.
          </p>
        </motion.div>
      </section>

      {/* Origin Story - Enhanced */}
      <section className="section-padding-lg bg-void border-b border-subtle">
        <div className="container max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="space-y-12"
            >
              <h2 className="text-6xl font-cinzel font-bold text-accent mb-12 glow-text-gold">The Origin</h2>
              <div className="space-y-8">
                <p className="text-xl text-muted font-inter font-light leading-relaxed">
                  Lunacy Media was founded as both a creative studio and a long-term archive of evolution. It emerged from a simple belief: that the act of creation reshapes both the creator and the world around them.
                </p>
                <p className="text-xl text-muted font-inter font-light leading-relaxed">
                  What began as a personal practice of world-building—writing, music, visual design—evolved into a multidisciplinary studio dedicated to helping others construct their own universes. Lunacy exists at the intersection of art and strategy, mythology and commerce, personal expression and collective impact.
                </p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-[4/5] rounded-sm overflow-hidden border border-subtle group hover:border-accent transition-all duration-700"
            >
              <img 
                src="/assets/A00F6157-C5ED-4CE8-91AC-BE8F2DE5F923.png" 
                alt="Symbolic Art"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent opacity-60"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder - Premium presentation */}
      <section className="section-padding-lg bg-gradient-dark border-t border-subtle relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-glow rounded-full blur-3xl animate-glow-shift"></div>
        </div>
        <div className="container max-w-5xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-square rounded-sm overflow-hidden border border-subtle group hover:border-accent transition-all duration-700"
            >
              <img 
                src="/assets/IMG_0235.JPG" 
                alt="Kailash Nehru"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent opacity-40"></div>
            </motion.div>
            <motion.div 
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="space-y-8"
            >
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Beliefs - Editorial layout */}
      <section className="section-padding-lg bg-void border-t border-subtle">
        <div className="container max-w-3xl mx-auto">
          <motion.h2 
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="text-6xl font-cinzel font-bold text-accent mb-20 text-center glow-text-gold"
          >
            Core Beliefs
          </motion.h2>
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
              <motion.div 
                key={i} 
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="border-l-4 border-accent pl-10 space-y-4 group hover:border-accent/80 transition-colors duration-500"
              >
                <h3 className="text-2xl font-cinzel font-bold text-off-white group-hover:text-accent transition-colors duration-500">{belief.title}</h3>
                <p className="text-lg text-muted font-inter font-light leading-relaxed">{belief.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision - Cinematic finale */}
      <section className="section-padding-lg bg-gradient-dark border-t border-subtle relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover opacity-20 grayscale"
          >
            <source src="/assets/hero-bg-2.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-void via-void/80 to-void"></div>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container max-w-3xl mx-auto text-center space-y-12 relative z-10"
        >
          <h2 className="text-6xl md:text-7xl font-cinzel font-bold text-off-white">Our Vision</h2>
          <div className="space-y-8">
            <p className="text-xl text-muted font-inter font-light leading-relaxed">
              Lunacy Media is building toward a future where creative practice is recognized as essential infrastructure. Where brands are understood as mythologies. Where artists and entrepreneurs collaborate to build universes that matter.
            </p>
            <p className="text-xl text-muted font-inter font-light leading-relaxed">
              We envision a world where the work we do today—the stories we tell, the identities we construct, the worlds we build—becomes the foundation for generations to come.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
