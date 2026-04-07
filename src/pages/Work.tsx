import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

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
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-accent/5 to-background">
        <div className="container max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-cinzel font-bold text-foreground">
            Selected Work
          </h1>
          <p className="text-lg text-foreground/70 font-inter leading-relaxed">
            A collection of projects spanning brand identity, digital experiences, and original intellectual property.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="section-padding border-b border-border">
        <div className="container">
          <div className="flex flex-wrap gap-4 justify-center">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-4 py-2 rounded-sm font-inter text-sm transition-all ${
                  activeFilter === filter.value
                    ? 'bg-accent text-accent-foreground'
                    : 'border border-border text-foreground/70 hover:border-accent'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <div
                key={i}
                className="group bg-card border border-border rounded-sm overflow-hidden hover:border-accent transition-all duration-300 cursor-pointer"
              >
                <div className="aspect-video bg-gradient-to-br from-secondary/20 to-accent/10 flex items-center justify-center group-hover:from-secondary/30 group-hover:to-accent/20 transition-all">
                  <p className="text-foreground/40 font-cinzel">[Project Image]</p>
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-cinzel font-bold text-foreground group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-foreground/60 font-inter">{project.desc}</p>
                  <div className="flex items-center gap-2 text-accent text-sm font-inter pt-2">
                    View Case Study <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-card/30 border-t border-border">
        <div className="container max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-cinzel font-bold">Interested in Working Together?</h2>
          <p className="text-lg text-foreground/70 font-inter">
            Let's discuss your project and explore how we can create something remarkable.
          </p>
          <a href="/contact" className="btn-primary inline-flex items-center gap-2">
            Start a Conversation <ChevronRight size={20} />
          </a>
        </div>
      </section>
    </div>
  );
}
