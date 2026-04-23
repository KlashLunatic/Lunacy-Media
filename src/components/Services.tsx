import type { FC } from 'react';

const Services: FC = () => {
  const services = [
    {
      number: '01',
      name: 'Creative Direction & Brand Development',
      description: 'Identity systems, visual language, and brand strategy built to tell your story with real depth — not just aesthetics.'
    },
    {
      number: '02',
      name: 'Marketing Strategy & Campaign Storytelling',
      description: 'Narrative-first campaigns that connect emotionally and move audiences — across digital, print, and experiential channels.'
    },
    {
      number: '03',
      name: 'Interactive & Web Experiences',
      description: 'Digital platforms and interactive experiences designed to immerse — built where technology meets storytelling.'
    },
    {
      number: '04',
      name: 'Music & Audio-Visual Production',
      description: 'Original music, sonic branding, and audio-visual content — produced with cinematic intention from concept to delivery.'
    },
    {
      number: '05',
      name: 'Original IP & Narrative Development',
      description: 'Graphic novels, story worlds, and multimedia franchises built for lasting cultural resonance — not one-season relevance.'
    }
  ];

  return (
    <section id="services" className="bg-black">
      <div className="container">
        {/* Intro section */}
        <div className="grid-2 mb-16">
          <div>
            <div className="section-eyebrow">Services</div>
            <h2 className="text-white">What We Build</h2>
          </div>
          <div>
            <p className="text-off-white">
              Most designers will give you a logo. We give you a world. Here's what that looks like in practice.
            </p>
          </div>
        </div>

        {/* Services grid */}
        <div className="grid-3">
          {services.map((service, idx) => (
            <div key={idx} className="card fade-up">
              <div className="service-number mb-4">{service.number}</div>
              <h3 className="text-white text-sm uppercase tracking-wide mb-3">{service.name}</h3>
              <p className="text-muted text-sm">{service.description}</p>
            </div>
          ))}

          {/* Brand statement card */}
          <div className="card bg-mid fade-up flex items-center justify-center">
            <p className="text-gold italic text-center text-lg font-cormorant">
              "Every project begins with story."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
