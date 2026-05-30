import { Link } from 'wouter';
import { ChevronRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import SEO from '../components/SEO';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] }
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { staggerChildren: 0.2 }
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Lunacy Media | Creative Mythology & Narrative Design Studio | Toronto"
        description="Lunacy Media is a Toronto-based creative mythology and narrative design studio. We build foundational identities, narrative brand systems, and full creative ecosystems."
        path="/"
      />

      <HeroSection />

      {/* OUR PRACTICE SECTION - Editorial minimalism */}
      <section className="section-padding-lg bg-void border-b border-subtle relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-glow rounded-full blur-3xl opacity-15 animate-float-down"></div>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-section"
          >
            <h2 className="text-accent glow-text-gold mb-8">OUR PRACTICE</h2>
            <p className="text-xl text-muted font-inter max-w-3xl mx-auto leading-relaxed">
              We are a creative mythology and narrative design studio. We build undeniable work, cultivate relationships, and establish reputations through vision, symbolism, and conceptual depth.
            </p>
          </motion.div>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-section"
          >
            {[
              {
                title: 'Foundational Identity',
                description: 'We build core visual systems that provide the essential signal needed for artists and creators to begin their journey.',
                image: '/assets/IMG_0086.JPG'
              },
              {
                title: 'Narrative Brand Systems',
                description: 'We build mythologies, symbolism, and thematic cohesion into immersive identity systems that resonate emotionally.',
                image: '/assets/IMG_0087.JPG'
              },
              {
                title: 'Creative Ecosystems',
                description: 'We design full-scale multimedia rollouts, worldbuilding systems, and custom web experiences for funded projects.',
                image: '/assets/IMG_0088.JPG'
              }
            ].map((service, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="space-y-12 text-center group">
                <div className="h-64 rounded-sm overflow-hidden border border-subtle group-hover:border-accent transition-all duration-700 relative">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent opacity-60"></div>
                </div>
                <div className="space-y-8">
                  <h3 className="text-3xl font-cinzel font-bold text-off-white group-hover:text-accent transition-colors duration-700">{service.title}</h3>
                  <p className="text-lg text-muted font-inter leading-relaxed font-light">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SELECTED CONSTELLATIONS SECTION - Editorial showcase */}
      <section className="section-padding-lg bg-charcoal/30 border-b border-subtle relative overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-purple-glow rounded-full blur-3xl opacity-15 animate-float-up"></div>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-section"
          >
            <h2 className="text-accent glow-text-gold mb-8">SELECTED CONSTELLATIONS</h2>
            <p className="text-xl text-muted font-inter max-w-3xl mx-auto leading-relaxed">
              Undeniable work that explores psychological truth, contemporary mythology, and interactive storytelling.
            </p>
          </motion.div>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-section"
          >
            {[
              {
                title: 'Mulligan: The Couch',
                description: 'Concept album exploring trauma and identity through symbolic visual storytelling.',
                image: '/assets/KaaluRam-CoverArt.jpg'
              },
              {
                title: 'Obeah',
                description: 'Contemporary spiritual mythology reinterpreting Caribbean and African traditions.',
                image: '/assets/Kali_Tattoo.png'
              },
              {
                title: 'Tammy',
                description: 'Interactive narrative personifying propaganda as a living, self-aware character.',
                image: '/assets/IMG_0487.PNG'
              }
            ].map((project, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="group cursor-pointer">
                <div className="aspect-video rounded-sm mb-16 overflow-hidden border border-subtle group-hover:border-accent transition-all duration-700 relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent opacity-60"></div>
                </div>
                <div className="space-y-10">
                  <div>
                    <h3 className="text-4xl font-cinzel font-bold text-off-white group-hover:text-accent transition-colors duration-700 mb-8">{project.title}</h3>
                    <p className="text-lg text-muted font-inter leading-relaxed font-light line-clamp-2">{project.description}</p>
                  </div>
                  <Link href="/work" className="inline-flex items-center gap-4 text-accent font-inter font-semibold hover:gap-6 transition-all duration-700 group-hover:text-off-white text-lg" aria-label={`Explore ${project.title} project`}>
                    Explore Project <ChevronRight size={22} className="group-hover:translate-x-2 transition-transform duration-500" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* MANIFESTO SECTION - Editorial philosophy */}
      <section className="section-padding-xl bg-gradient-dark relative overflow-hidden border-t border-subtle">
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover opacity-15 grayscale"
          >
            <source src="/assets/hero-bg-3.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-void/40 via-void/80 to-void"></div>
        </div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
          className="container max-w-4xl mx-auto text-center space-y-16 relative z-10"
        >
          <h2 className="text-5xl md:text-6xl font-cinzel font-bold leading-tight">
            We don't just market ideas.
            <br />
            <span className="text-accent glow-text-gold">We build mythologies.</span>
          </h2>
          <div className="space-y-10 text-lg text-muted font-inter leading-relaxed font-light">
            <p>At Lunacy Media, strategy meets imagination. We are an emerging cultural brand and narrative design studio.</p>
            <p>Our work lives at the intersection of culture, storytelling, design, and commerce — helping artists, founders, and organizations turn vision into impact.</p>
            <p>From brand worlds to creative direction, from websites to original media properties, every project is built with intention, emotion, and conceptual depth.</p>
          </div>
        </motion.div>
      </section>

      {/* WHY CLIENTS WORK WITH US - Credibility section */}
      <section className="section-padding-lg bg-void border-b border-subtle relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-glow rounded-full blur-3xl opacity-12 animate-float-up"></div>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-section"
          >
            <h2 className="text-accent glow-text-gold mb-8">WHY CLIENTS ENTER OUR ORBIT</h2>
            <p className="text-xl text-muted font-inter max-w-3xl mx-auto leading-relaxed">
              We offer vision, symbolism, and emotional intelligence that corporate agencies can't replicate.
            </p>
          </motion.div>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-section"
          >
            {[
              {
                title: 'Mythic Storytelling',
                description: 'We combine artistic instinct with symbolic depth to build identities that resonate.',
                image: '/assets/IMG_0234.JPG'
              },
              {
                title: 'Conceptual Depth',
                description: 'Our work is rooted in psychological truth and cultural resonance, not just aesthetics.',
                image: '/assets/IMG_0236.JPG'
              },
              {
                title: 'Emerging Cultural Brand',
                description: 'We are building a reputation for undeniable work and original creative systems.',
                image: '/assets/IMG_0460.JPG'
              }
            ].map((reason, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="space-y-12 text-center group">
                <div className="h-64 rounded-sm overflow-hidden border border-subtle group-hover:border-accent transition-all duration-700 relative">
                  <img 
                    src={reason.image} 
                    alt={reason.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent opacity-60"></div>
                </div>
                <div className="space-y-8">
                  <h3 className="text-3xl font-cinzel font-bold text-off-white group-hover:text-accent transition-colors duration-700">{reason.title}</h3>
                  <p className="text-lg text-muted font-inter leading-relaxed font-light">{reason.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA SECTION - Conversion focus */}
      <section className="section-padding-lg bg-void border-t border-subtle relative overflow-hidden">
        <div className="absolute inset-0 opacity-12">
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent-glow rounded-full blur-3xl animate-glow-shift"></div>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container max-w-4xl mx-auto text-center space-y-16 relative z-10"
        >
          <h2 className="text-5xl md:text-6xl font-cinzel font-bold leading-tight">
            Let's build something
            <br />
            <span className="text-accent glow-text-gold">undeniable.</span>
          </h2>
          <p className="text-xl text-muted font-inter leading-relaxed font-light">
            Whether you're an artist launching a project or a brand seeking a new mythology, we're ready to help you build it.
          </p>
          <div className="flex flex-col md:flex-row gap-10 justify-center pt-12">
            <Link href="/contact" className="btn-primary" aria-label="Start a project with Lunacy Media">
              Start a Project <ChevronRight size={24} />
            </Link>
            <Link href="/contact" className="btn-secondary" aria-label="Book a strategy session with Lunacy Media">
              Book a Strategy Session <ChevronRight size={24} />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
