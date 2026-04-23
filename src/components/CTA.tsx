import type { FC } from 'react';

const CTA: FC = () => {
  const handleScrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-black py-20 md:py-32">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-5xl md:text-6xl font-cinzel font-bold tracking-wider mb-6 text-white">
            Ready to build something that lasts?
          </h2>

          {/* Subtext */}
          <p className="text-lg md:text-xl font-cormorant text-muted mb-10">
            We're currently accepting artists, musicians, and small brands. Spots are limited.
          </p>

          {/* CTA Button */}
          <button
            onClick={handleScrollToContact}
            className="hero-cta-enhanced"
          >
            Tell Us What You're Building →
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
