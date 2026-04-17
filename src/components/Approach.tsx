import type { FC } from 'react';

const Approach: FC = () => {
  const approaches = [
    {
      label: 'Narrative-Driven Strategy',
      description: 'Every project begins with story, not surface.'
    },
    {
      label: 'Multi-Disciplinary Execution',
      description: 'We build across music, design, digital, and narrative worlds.'
    },
    {
      label: 'Built for Longevity',
      description: 'We create work designed to last — not trend.'
    }
  ];

  return (
    <section className="bg-black border-t border-b border-border">
      <div className="container py-12">
        <div className="flex items-start gap-8 mb-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-px bg-gold" />
            <span className="text-xs font-cinzel tracking-widest text-gold uppercase">Approach</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-12">
          {approaches.map((item, idx) => (
            <div key={idx} className="fade-up">
              <h4 className="text-gold font-cinzel text-sm uppercase tracking-wide mb-2">
                {item.label}
              </h4>
              <p className="text-muted font-cormorant text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;
