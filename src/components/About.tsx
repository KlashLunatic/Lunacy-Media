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
              Lunacy Media is a creative studio founded by Kailash Nehru — rapper, creative director, and world-builder rooted in Jamaican-Canadian culture and the mythology of the everyday. We work with independent artists and musicians who are building something real: visual identities that match the music, brand systems that grow with the work, and creative worlds that outlast any single release.
            </p>

            <p>
              Our long-term vision is to grow into a full-scale media house and creative studio — building internal original properties alongside client-facing solutions that last.
            </p>
          </div>

          {/* Right column - Three pillars */}
          <div className="space-y-8">
            {/* Pillar 1 */}
            <article className="gold-bar-left fade-up">
              <h3 className="text-gold uppercase text-xs tracking-widest mb-3">Entertainment</h3>
              <p className="text-off-white text-sm">
                Original IP, multimedia franchises, and narrative worlds built to endure — from graphic novels to immersive story universes.
              </p>
            </article>

            {/* Pillar 2 */}
            <article className="gold-bar-left fade-up">
              <h3 className="text-gold uppercase text-xs tracking-widest mb-3">Branding</h3>
              <p className="text-off-white text-sm">
                Identity systems, brand strategy, and creative direction rooted in storytelling — for artists and organizations ready to define their world.
              </p>
            </article>

            {/* Pillar 3 */}
            <article className="gold-bar-left fade-up">
              <h3 className="text-gold uppercase text-xs tracking-widest mb-3">Digital Experience</h3>
              <p className="text-off-white text-sm">
                Interactive web experiences, digital installations, and platforms designed to immerse audiences, not just inform them.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
