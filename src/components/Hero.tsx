import type { FC } from 'react';

const Hero: FC = () => {
  const handleScrollToWork = () => {
    const element = document.getElementById('work');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen flex items-end px-12 pb-20 bg-black overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-transparent pointer-events-none z-0" />
      
      {/* Radial gradients */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute w-96 h-96 rounded-full opacity-5 bg-gold blur-3xl" style={{ top: '40%', left: '70%' }} />
        <div className="absolute w-96 h-96 rounded-full opacity-10 bg-purple-900 blur-3xl" style={{ top: '80%', left: '20%' }} />
      </div>

      {/* Film grain overlay */}
      <div className="absolute inset-0 opacity-40 pointer-events-none z-0" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' seed=\'2\' /%3E%3C/filter%3E%3Crect width=\'400\' height=\'400\' filter=\'url(%23noiseFilter)\' opacity=\'0.4\'/%3E%3C/svg%3E")',
      }} />

      {/* Vertical gold gradient line */}
      <div className="absolute left-12 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold to-transparent z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-2xl">
        {/* Eyebrow */}
        <div className="flex items-center gap-4 mb-12">
          <div className="w-8 h-px bg-gold" />
          <span className="text-xs font-cinzel tracking-widest text-gold uppercase">
            Creative Media & Storytelling Studio
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-7xl md:text-8xl font-cinzel font-bold tracking-wider text-white mb-4 leading-tight">
          LUNACY<br />
          <span className="text-gold">MEDIA</span>
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl font-cormorant italic text-off-white font-light mb-8">
          Your Forever Endeavour
        </p>

        {/* CTA Button */}
        <button
          onClick={handleScrollToWork}
          className="hero-cta"
        >
          View the Work →
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-12 z-10">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs font-cinzel tracking-widest text-muted uppercase" style={{ writingMode: 'vertical-rl' }}>
            Scroll
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-muted to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
