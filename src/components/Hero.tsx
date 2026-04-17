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
      {/* Animated background layers */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Primary gold glow - slow drift */}
        <div 
          className="absolute w-96 h-96 rounded-full opacity-8 bg-gold blur-3xl animate-drift"
          style={{ top: '35%', left: '65%' }}
        />
        
        {/* Secondary purple depth */}
        <div 
          className="absolute w-96 h-96 rounded-full opacity-12 bg-purple-900 blur-3xl animate-drift-slow"
          style={{ top: '75%', left: '15%' }}
        />
        
        {/* Tertiary accent glow */}
        <div 
          className="absolute w-80 h-80 rounded-full opacity-6 bg-gold blur-2xl animate-drift-reverse"
          style={{ top: '50%', right: '10%' }}
        />
      </div>

      {/* Film grain overlay with subtle animation */}
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none z-0 animate-grain-shift"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' seed=\'2\' /%3E%3C/filter%3E%3Crect width=\'400\' height=\'400\' filter=\'url(%23noiseFilter)\' opacity=\'0.5\'/%3E%3C/svg%3E")',
        }} 
      />

      {/* Strengthened vertical gold signature line */}
      <div className="absolute left-12 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-gold to-transparent z-0 shadow-lg" style={{
        boxShadow: '0 0 20px rgba(201, 168, 76, 0.4)'
      }} />

      {/* Light drift effect */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div 
          className="absolute w-full h-full opacity-5 animate-light-drift"
          style={{
            background: 'linear-gradient(45deg, transparent 30%, rgba(201, 168, 76, 0.1) 50%, transparent 70%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl">
        {/* Eyebrow */}
        <div className="flex items-center gap-4 mb-16">
          <div className="w-8 h-px bg-gold" />
          <span className="text-xs font-cinzel tracking-widest text-gold uppercase">
            Creative Media & Storytelling Studio
          </span>
        </div>

        {/* Headline - Increased scale and spacing */}
        <h1 className="text-8xl lg:text-9xl font-cinzel font-bold tracking-wider leading-tight mb-6">
          <span className="text-white block">LUNACY</span>
          <span className="text-gold block glow-headline">MEDIA</span>
        </h1>

        {/* Tagline */}
        <p className="text-2xl md:text-3xl font-cormorant italic text-off-white font-light mb-4">
          Your Forever Endeavour
        </p>

        {/* Supporting line */}
        <p className="text-lg font-cormorant text-muted mb-10 max-w-2xl leading-relaxed">
          We build brands, stories, and digital experiences that feel like worlds — not campaigns.
        </p>

        {/* CTA Button - Enhanced prominence */}
        <button
          onClick={handleScrollToWork}
          className="hero-cta-enhanced"
        >
          View the Work →
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-12 z-10 animate-float">
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
