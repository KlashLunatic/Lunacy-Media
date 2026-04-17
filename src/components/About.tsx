import type { FC } from 'react';

const About: FC = () => {
  return (
    <section id="about" className="bg-deep border-t border-b border-border">
      <div className="container">
        <div className="grid-2">
          {/* Left column */}
          <div>
            <div className="section-eyebrow">About</div>

            <p className="pull-quote mb-8">
              We live at the intersection of <span className="text-gold italic">entertainment</span>, branding, and <span className="text-gold italic">digital experience</span> — where story becomes strategy.
            </p>

            <p className="mb-6">
              Lunacy Media is a creative studio founded by Kailash Nehru — artist, creative director, and world-builder. We develop original IP, craft multimedia storytelling projects, and design creative marketing experiences for artists, brands, and organizations that refuse to be forgettable.
            </p>

            <p>
              Our long-term vision is to grow into a full-scale media house and creative studio — building internal original properties alongside client-facing solutions that last.
            </p>
          </div>

          {/* Right column - Three pillars */}
          <div className="space-y-8">
            {/* Pillar 1 */}
            <div className="gold-bar-left fade-up">
              <h3 className="text-gold uppercase text-xs tracking-widest mb-3">Entertainment</h3>
              <p className="text-off-white text-sm">
                Original IP, multimedia franchises, and narrative worlds built to endure — from graphic novels to immersive story universes.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="gold-bar-left fade-up">
              <h3 className="text-gold uppercase text-xs tracking-widest mb-3">Branding</h3>
              <p className="text-off-white text-sm">
                Identity systems, brand strategy, and creative direction rooted in storytelling — for artists and organizations ready to define their world.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="gold-bar-left fade-up">
              <h3 className="text-gold uppercase text-xs tracking-widest mb-3">Digital Experience</h3>
              <p className="text-off-white text-sm">
                Interactive web experiences, digital installations, and platforms designed to immerse audiences, not just inform them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
