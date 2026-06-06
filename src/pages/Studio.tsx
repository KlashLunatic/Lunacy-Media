import { ChevronRight, Calendar } from 'lucide-react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

export default function Studio() {
  const services = [
    {
      title: 'The Signal',
      subtitle: 'Foundational Identity',
      description: 'We build core visual systems for artists and creators. This package provides the essential "signal" needed to begin your public journey.',
      includes: ['Logo / Wordmark', 'Moodboard + Visual Direction', 'Typography & Color Palette', 'Social Media Branding', 'Mini Brand Guide'],
      pricing: '$1,500 – $4,000 CAD',
      ideal: 'Independent artists, musicians, and creative entrepreneurs.',
    },
    {
      title: 'The Orbit',
      subtitle: 'Narrative Brand System',
      description: 'Where Lunacy differentiates. We build not just logos, but mythologies, symbolism, and immersive identity systems.',
      includes: ['Full Visual Identity', 'Narrative / Worldbuilding Consultation', 'Brand Voice & Creative Direction', 'Pitch Deck Design', 'Website Concept & Layout'],
      pricing: '$5,000 – $12,000 CAD',
      ideal: 'Established creatives, collectives, and indie media projects.',
    },
    {
      title: 'The Universe',
      subtitle: 'Full Creative Ecosystem',
      description: 'A comprehensive multimedia rollout for funded projects and organizations looking to build a lasting creative world.',
      includes: ['Full Campaign Direction', 'Multimedia Rollout', 'Interactive Concepts', 'Video/Photo Creative Direction', 'Custom Web Experience'],
      pricing: '$15,000 – $35,000+ CAD',
      ideal: 'Funded startups, arts organizations, and IP developers.',
    },
    {
      title: 'Consulting',
      subtitle: 'Creative Direction Retainers',
      description: 'Ongoing strategic guidance and creative direction to help your brand or project maintain thematic cohesion and vision.',
      includes: ['Ongoing Creative Direction', 'Strategy Sessions ($150-300)', 'Brand Workshops', 'Thematic Maintenance'],
      pricing: '$750 – $3,000 / mo',
      ideal: 'Artists and brands needing consistent direction.',
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <div className="min-h-screen flex flex-col pt-16">
      <SEO
        title="Studio | Creative Mythology & Narrative Design Studio | Toronto"
        description="Lunacy Media is a Toronto-based creative mythology and narrative design studio. We build foundational identities, narrative brand systems, and full creative ecosystems."
        path="/studio"
      />

      {/* Hero - Enhanced */}
      <section className="section-padding-lg bg-gradient-to-b from-accent/5 to-void border-b border-subtle">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container max-w-3xl mx-auto text-center space-y-8"
        >
          <h1 className="text-7xl md:text-8xl font-cinzel font-bold text-off-white glow-text-gold">
            Studio Services
          </h1>
          <p className="text-xl text-muted font-inter leading-relaxed font-light">
            We are a creative mythology and narrative design studio. We invite you into our orbit to build undeniable work and lasting reputation.
          </p>
        </motion.div>
      </section>

      {/* Quick Entry - The First Signal Audit */}
      <section className="py-12 bg-charcoal/30 border-b border-subtle">
        <div className="container">
          <motion.div 
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between gap-8 p-8 border border-accent/20 rounded-sm bg-accent/5"
          >
            <div className="space-y-4 text-center md:text-left">
              <h2 className="text-2xl font-cinzel font-bold text-off-white flex items-center gap-3 justify-center md:justify-start">
                <Calendar className="text-accent" size={24} />
                Book a Strategy Audit
              </h2>
              <p className="text-muted font-inter font-light">
                Not sure where to start? Book a 30-minute session to audit your current vision and find your first signal.
              </p>
            </div>
            <Link href="/contact" className="btn-primary whitespace-nowrap">
              Schedule Session ($150) <ChevronRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Grid - Premium presentation */}
      <section className="section-padding-lg bg-void">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="bg-charcoal/50 border border-subtle rounded-sm p-10 space-y-8 hover:border-accent transition-all duration-500 group hover:shadow-lg hover:shadow-accent/10"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-3xl font-cinzel font-bold text-off-white group-hover:text-accent transition-colors duration-500">{service.title}</h3>
                      <p className="text-sm text-accent font-inter tracking-widest uppercase font-semibold mt-1">{service.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-lg text-muted font-inter font-light leading-relaxed">{service.description}</p>
                </div>
                
                <div>
                  <p className="text-sm font-inter text-subtle mb-4 tracking-widest uppercase font-semibold">Includes:</p>
                  <ul className="space-y-3">
                    {service.includes.map((item, j) => (
                      <li key={j} className="flex items-center gap-3 text-muted font-inter text-base">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full group-hover:animate-glow-pulse" aria-hidden="true"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-subtle flex flex-col gap-2">
                  <p className="text-accent font-cinzel font-bold text-2xl">{service.pricing}</p>
                  <p className="text-sm text-subtle font-inter italic">Ideal for: {service.ideal}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Process - Enhanced */}
      <section className="section-padding-lg bg-gradient-dark border-t border-subtle relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent-glow rounded-full blur-3xl animate-glow-shift"></div>
        </div>
        <div className="container max-w-3xl mx-auto relative z-10">
          <motion.h2 
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="text-7xl md:text-8xl font-cinzel font-bold mb-20 text-center text-accent glow-text-gold"
          >
            The Process
          </motion.h2>
          <div className="space-y-12">
            {[
              { step: '01', title: 'Discovery', desc: 'We listen deeply to understand your vision, values, and goals. This phase establishes the foundation for all creative work.' },
              { step: '02', title: 'Strategy', desc: 'We develop a strategic framework that guides all creative decisions, ensuring alignment with your objectives.' },
              { step: '03', title: 'Creation', desc: 'Our team executes the vision with precision and artistry, bringing the strategy to life through multiple disciplines.' },
              { step: '04', title: 'Refinement', desc: 'We iterate based on feedback, ensuring the final deliverables exceed expectations and serve your goals.' },
            ].map((item, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="flex gap-8 group"
              >
                <div className="text-5xl font-cinzel font-bold text-accent/40 flex-shrink-0 group-hover:text-accent/80 transition-colors duration-500">{item.step}</div>
                <div className="space-y-3 flex-grow border-l border-subtle/50 pl-8 group-hover:border-accent/30 transition-colors duration-500">
                  <h3 className="text-2xl font-cinzel font-bold text-off-white group-hover:text-accent transition-colors duration-500">{item.title}</h3>
                  <p className="text-lg text-muted font-inter font-light leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Maximum conversion */}
      <section className="section-padding-lg bg-charcoal border-t border-subtle relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-glow rounded-full blur-3xl animate-glow-shift"></div>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container max-w-3xl mx-auto text-center space-y-12 relative z-10"
        >
          <h2 className="text-6xl md:text-7xl font-cinzel font-bold text-off-white">Ready to Begin?</h2>
          <p className="text-xl text-muted font-inter font-light leading-relaxed">
            Let's discuss your project and explore how Lunacy can help you build something extraordinary.
          </p>
          <Link href="/contact" className="btn-primary inline-flex items-center gap-3" aria-label="Initiate a project with Lunacy Media">
            Initiate a Project <ChevronRight size={22} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
