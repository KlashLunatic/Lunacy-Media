import type { FC } from 'react';

const Work: FC = () => {
  const portfolio = [
    {
      span: 7,
      category: 'Album Art · Visual Identity · World-Building',
      title: 'Mulligan / Between the Last Letters / Kaalu Ram',
      description: 'A three-album multimedia project with original cover art, character development, and an interconnected visual mythology — tracing the arc of the artist across gold, cosmic, and mortal planes.'
    },
    {
      span: 5,
      category: 'Original IP · Graphic Novel',
      title: 'Paraphernalia',
      description: 'An original narrative universe rooted in Obeah mythology — featuring Maya, Remedy, Vuvuzela, and a richly hand-crafted visual language drawing on manga and West African folklore.'
    },
    {
      span: 4,
      category: 'Art Direction · Composite',
      title: 'The Triplet Sisters',
      description: 'Cinematic triptych visualizing Paranoia, Propaganda, and Paraphernalia as psychological archetypes.'
    },
    {
      span: 4,
      category: 'Character Design · Illustration',
      title: 'Character Universe',
      description: 'From manga-influenced character sheets to vector iconography across multiple cultural mythologies.'
    },
    {
      span: 4,
      category: 'Visual Identity · Design',
      title: 'Brand & Graphic Work',
      description: 'Logos, tattoo design, and graphic illustration — from sacred geometry to editorial character art.'
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
              className="card fade-up group"
            >
              <p className="text-gold uppercase text-xs tracking-widest mb-3">{item.category}</p>
              <h3 className="text-white text-2xl font-cormorant font-semibold mb-3">{item.title}</h3>
              <p className="text-off-white text-sm mb-4">{item.description}</p>
              <div className="flex justify-end">
                <span className="text-gold-dim group-hover:text-gold transition-colors">↗</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
