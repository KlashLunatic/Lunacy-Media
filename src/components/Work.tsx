import type { FC } from 'react';

const Work: FC = () => {
  const portfolio = [
    {
      span: 7,
      category: 'Album Art · Visual Identity · World-Building',
      title: 'Mulligan / Between the Last Letters / Kaalu Ram',
      description: 'A three-album multimedia universe spanning music, visual identity, and narrative world-building — an interconnected mythology tracing the artist\'s arc across gold, cosmic, and mortal planes. A complete creative ecosystem.'
    },
    {
      span: 5,
      category: 'Original IP · Graphic Novel',
      title: 'Paraphernalia',
      description: 'An original narrative universe rooted in Obeah mythology — a richly hand-crafted visual language merging manga aesthetics with West African folklore. Characters, cosmology, and cultural depth built to endure.'
    },
    {
      span: 4,
      category: 'Art Direction · Composite',
      title: 'The Triplet Sisters',
      description: 'A cinematic triptych embodying three psychological archetypes — Paranoia, Propaganda, and Paraphernalia — visualized as a unified narrative force. Symbolic depth meets visual impact.'
    },
    {
      span: 4,
      category: 'Character Design · Illustration',
      title: 'Character Universe',
      description: 'A comprehensive character system spanning manga-influenced character sheets to vector iconography across multiple cultural mythologies. Design language built for narrative expansion.'
    },
    {
      span: 4,
      category: 'Visual Identity · Design',
      title: 'Brand & Graphic Work',
      description: 'A visual identity system spanning logos, tattoo design, and editorial illustration — from sacred geometry to character art. Cohesive design language across mediums.'
    }
  ];

  return (
    <section id="work" className="bg-deep border-t border-border">
      <div className="container">
        {/* Header */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <div className="section-eyebrow">Portfolio</div>
            <h2 className="text-white">Selected Work</h2>
          </div>
          <p className="text-muted italic max-w-xs">
            A body of work unified by a singular creative voice.
          </p>
        </div>

        {/* Portfolio grid */}
        <div className="grid-12">
          {portfolio.map((item, idx) => (
            <div
              key={idx}
              style={{ gridColumn: `span ${item.span}` }}
              className="card-portfolio fade-up group"
            >
              <p className="text-gold uppercase text-xs tracking-widest mb-3">{item.category}</p>
              <h3 className="text-white text-2xl font-cormorant font-semibold mb-3 group-hover:text-gold-pale transition-colors duration-300">{item.title}</h3>
              <p className="text-off-white text-sm mb-4 group-hover:text-white transition-colors duration-300">{item.description}</p>
              <div className="flex justify-end">
                <span className="text-gold-dim group-hover:text-gold transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1 text-lg">↗</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
