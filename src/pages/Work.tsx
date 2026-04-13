import { useState } from 'react';
import { Link } from 'wouter';
import { ChevronRight, Sparkles } from 'lucide-react';

export default function Work() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    { title: 'Mulligan', category: 'branding', desc: 'Complete brand identity system' },
    { title: 'Aurora Campaign', category: 'digital', desc: 'Multi-channel digital experience' },
    { title: 'Tammy Prototype', category: 'original-ip', desc: 'Interactive narrative prototype' },
    { title: 'Obeah Vol. 1', category: 'original-ip', desc: 'Graphic novel publication' },
    { title: 'Brand Refresh', category: 'branding', desc: 'Strategic identity evolution' },
    { title: 'Web Platform', category: 'digital', desc: 'Custom web application' },
  ];

  const filters = [
    { label: 'All Work', value: 'all' },
    { label: 'Branding', value: 'branding' },
    { label: 'Digital', value: 'digital' },
    { label: 'Original IP', value: 'original-ip' },
  ];

  const filtered = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen flex flex-col pt-16">
      {/* Hero - Enhanced */}
      <section className="section-padding-lg bg-gradient-to-b from-accent/5 to-void border-b border-subtle">
        <div className="container max-w-3xl mx-auto text-center space-y-8">
          <h1 className="text-7xl md:text-8xl font-cinzel font-bold text-off-white glow-text-gold">
            Selected Work
          </h1>
          <p className="text-xl text-muted font-inter font-light leading-relaxed">
            A collection of projects spanning brand identity, digital experiences, and original intellectual property.
          </p>
        </div>
      </section>

      {/* Filter - Premium styling */}
      <section className="section-padding-sm bg-void border-b border-subtle">
        <div className="container">
          <div className="flex flex-wrap gap-6 justify-center">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filtered.map((project, i) => (
              <div
                key={i}
                className="group bg-charcoal/50 border border-subtle rounded-sm overflow-hidden hover:border-accent transition-all duration-500 cursor-pointer hover:shadow-lg hover:shadow-accent/20"
              >
                <div className="aspect-video bg-gradient-to-br from-purple-glow/30 to-accent-glow/20 flex items-center justify-center group-hover:from-purple-glow/50 group-hover:to-accent-glow/40 transition-all duration-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10 flex flex-col items-center gap-4">
                    <Sparkles className="text-accent/50 group-hover:text-accent/100 transition-colors duration-500" size={56} />
                    <p className="text-muted font-cinzel text-sm">[Project Image]</p>
                  </div>
                </div>
                <div className="p-8 space-y-6">
                  <h3 className="text-2xl font-cinzel font-bold text-off-white group-hover:text-accent transition-colors duration-500">
                    {project.title}
                  </h3>
                  <p className="text-base text-muted font-inter font-light leading-relaxed">{project.desc}</p>
                  <div className="flex items-center gap-3 text-accent text-base font-inter font-semibold pt-4 group-hover:gap-4 transition-all duration-300">
                    View Case Study <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Maximum conversion */}
      <section className="section-padding-lg bg-gradient-dark border-t border-subtle relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent-glow rounded-full blur-3xl animate-glow-shift"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-glow rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="container max-w-3xl mx-auto text-center space-y-12 relative z-10">
          <h2 className="text-6xl md:text-7xl font-cinzel font-bold text-off-white">Interested in Working Together?</h2>
          <p className="text-xl text-muted font-inter font-light leading-relaxed">
            Let's discuss your project and explore how we can create something remarkable.
          </p>
          <Link href="/contact" className="btn-primary inline-flex items-center gap-3">
            Start a Conversation <ChevronRight size={22} />
          </Link>
        </div>
      </section>
    </div>
  );
}
