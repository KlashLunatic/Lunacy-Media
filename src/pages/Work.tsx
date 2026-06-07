import { useState } from 'react';
import { Link } from 'wouter';
import { ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/SEO';

export default function Work() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    { 
      title: 'Mulligan: The Couch', 
      category: 'original-ip', 
      desc: 'Concept Album / Multimedia Art Project exploring trauma and identity through symbolic storytelling.',
      image: '/assets/KaaluRam-CoverArt.jpg'
    },
    { 
      title: 'Obeah', 
      category: 'original-ip', 
      desc: 'Contemporary Spiritual Mythology reinterpreting Caribbean and African traditions through fantasy.',
      image: '/assets/Kali_Tattoo.png'
    },
    { 
      title: 'Tammy', 
      category: 'original-ip', 
      desc: 'Interactive Narrative personifying propaganda as a living, self-aware character.',
      image: '/assets/IMG_0487.PNG'
    },
    { 
      title: 'Aurora Campaign', 
      category: 'digital', 
      desc: 'Multi-channel digital experience and immersive brand storytelling.',
      image: '/assets/IMG_0085.PNG'
    },
    { 
      title: 'Brand Refresh', 
      category: 'branding', 
      desc: 'Strategic identity evolution for visionaries needing more than just a logo.',
      image: '/assets/IMG_0093.PNG'
    },
    { 
      title: 'Web Platform', 
      category: 'digital', 
      desc: 'Custom web application designed as a living, breathing digital world.',
      image: '/assets/553ECC20-FDF7-430A-9CAF-06DC6644EDEA.png'
    },
  ];

  const filters = [
    { label: 'All Work', value: 'all' },
    { label: 'Original IP', value: 'original-ip' },
    { label: 'Branding', value: 'branding' },
    { label: 'Digital', value: 'digital' },
  ];

  const filtered = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen flex flex-col pt-16">
      <SEO
        title="Selected Work | Lunacy Media Portfolio | Creative Projects & Case Studies"
        description="Explore the Lunacy Media portfolio — brand identity systems, digital experiences, and original IP projects including Tammy, Obeah, and Mulligan. Creative work from Toronto, Canada."
        path="/work"
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
            Selected Work
          </h1>
          <p className="text-xl text-muted font-inter font-light leading-relaxed">
            A collection of projects spanning brand identity, digital experiences, and original intellectual property.
          </p>
        </motion.div>
      </section>

      {/* Filter - Premium styling */}
      <section className="section-padding-sm bg-void border-b border-subtle">
        <div className="container">
          <div className="flex flex-wrap gap-6 justify-center" role="group" aria-label="Filter projects by category">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                aria-pressed={activeFilter === filter.value}
                aria-label={`Filter by ${filter.label}`}
                className={`px-6 py-3 rounded-sm font-inter text-sm font-semibold tracking-wide transition-all duration-500 uppercase ${
                  activeFilter === filter.value
                    ? 'bg-gradient-to-r from-gold to-gold-dark text-void shadow-lg shadow-accent/40'
                    : 'border border-subtle text-muted hover:border-accent hover:text-accent'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid - Cinematic presentation */}
      <section className="section-padding-lg bg-void">
        <div className="container">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group bg-charcoal/50 border border-subtle rounded-sm overflow-hidden hover:border-accent transition-all duration-500 cursor-pointer hover:shadow-lg hover:shadow-accent/20"
                >
                  <div className="aspect-video relative overflow-hidden bg-void">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent opacity-60"></div>
                  </div>
                  <div className="p-8 space-y-6">
                    <h3 className="text-2xl font-cinzel font-bold text-off-white group-hover:text-accent transition-colors duration-500">
                      {project.title}
                    </h3>
                    <p className="text-base text-muted font-inter font-light leading-relaxed line-clamp-2">{project.desc}</p>
                    <div className="flex items-center gap-3 text-accent text-base font-inter font-semibold pt-4 group-hover:gap-4 transition-all duration-300">
                      View Case Study <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA - Maximum conversion */}
      <section className="section-padding-lg bg-gradient-dark border-t border-subtle relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent-glow rounded-full blur-3xl animate-glow-shift"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-glow rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container max-w-3xl mx-auto text-center space-y-12 relative z-10"
        >
          <h2 className="text-6xl md:text-7xl font-cinzel font-bold text-off-white">Interested in Working Together?</h2>
          <p className="text-xl text-muted font-inter font-light leading-relaxed">
            Let's discuss your project and explore how we can create something remarkable.
          </p>
          <Link href="/contact" className="btn-primary inline-flex items-center gap-3" aria-label="Start a conversation with Lunacy Media">
            Start a Conversation <ChevronRight size={22} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
