import type { FC } from 'react';

const Universe: FC = () => {
  const projects = [
    { number: 'I', title: 'Mulligan', subtitle: 'Album One · The Beginning · Gold & Earth' },
    { number: 'II', title: 'Between the Last Letters', subtitle: 'Album Two · The Transition · Light & Shadow' },
    { number: 'III', title: 'Kaalu Ram', subtitle: 'Album Three · The Black Ram · Death & Rebirth' },
    { number: '∞', title: 'Paraphernalia', subtitle: 'Original Graphic Novel Series · In Development' }
  ];

  const sisters = [
    {
      name: 'Paranoia',
      description: 'The psychological undercurrent — the voice that questions, doubts, and sees patterns in the dark.'
    },
    {
      name: 'Propaganda',
      description: 'The architect of narrative — she shapes perception, controls the story, and moves the masses.'
    },
    {
      name: 'Paraphernalia',
      description: 'The keeper of objects, ritual, and memory — she holds what the others discard and builds from ruin.'
    }
  ];

  return (
    <section id="universe" className="bg-black border-t border-border">
      <div className="container">
        <div className="grid-2-1-2">
          {/* Left column */}
          <div>
            <div className="section-eyebrow">The Universe</div>
            <h2 className="text-white mb-8">An Original World in Progress</h2>
            <div className="gold-rule mb-8" />

            <p className="pull-quote border-l-4 border-gold pl-8 mb-8">
              "Three albums. Three sisters. One mythology unfolding across music, visual art, and narrative IP."
            </p>

            <p className="text-off-white mb-12">
              Lunacy Media is not just a studio for hire — it's the production house behind an original interconnected creative universe, developed by Kailash Nehru across years of intentional world-building.
            </p>

            {/* Project entries */}
            <div className="space-y-1">
              {projects.map((project, idx) => (
                <div
                  key={idx}
                  className="border border-border p-4 hover:border-gold-dim hover:bg-charcoal transition-all fade-up"
                >
                  <div className="flex gap-4">
                    <span className="text-gold font-cinzel text-2xl font-bold opacity-70 w-12">{project.number}</span>
                    <div>
                      <h4 className="text-white font-cormorant text-lg">{project.title}</h4>
                      <p className="text-muted text-sm">{project.subtitle}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column - Three Sisters */}
          <div>
            <p className="text-gold uppercase text-xs tracking-widest mb-8 font-cinzel">The Three Sisters</p>

            <div className="border border-border">
              {sisters.map((sister, idx) => (
                <div
                  key={idx}
                  className={`p-6 fade-up ${idx < sisters.length - 1 ? 'border-b border-border' : ''}`}
                >
                  <h4 className="text-white font-cormorant text-2xl italic font-semibold mb-3">{sister.name}</h4>
                  <p className="text-off-white text-sm">{sister.description}</p>
                </div>
              ))}
            </div>

            {/* Info box */}
            <div className="border border-border bg-charcoal p-6 mt-6 fade-up">
              <p className="text-off-white italic text-sm font-cormorant">
                Each sister makes an appearance across different projects in the Lunacy universe — threading a single mythology through music, visual narrative, and original IP.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Universe;
