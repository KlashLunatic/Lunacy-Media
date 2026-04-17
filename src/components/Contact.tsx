import type { FC } from 'react';

const Contact: FC = () => {
  return (
    <section id="contact" className="bg-deep border-t border-border">
      <div className="container">
        <div className="grid-2">
          {/* Left column */}
          <div>
            <div className="section-eyebrow">Contact</div>
            <h2 className="text-white mb-6">
              Let's Build<br />
              <span className="text-gold">Something</span><br />
              Unforgettable.
            </h2>

            <p className="text-off-white mb-8">
              Whether you're an artist building your world or a brand ready to tell a real story — we want to hear from you.
            </p>

            <a
              href="mailto:hello@lunacymedia.ca"
              className="hero-cta inline-block"
            >
              Start a Conversation →
            </a>
          </div>

          {/* Right column - Details */}
          <div className="space-y-1">
            <div className="border-b border-border py-4 fade-up">
              <p className="text-muted uppercase text-xs tracking-widest font-cinzel mb-2">Studio</p>
              <p className="text-white italic font-cormorant text-lg">Lunacy Media</p>
            </div>

            <div className="border-b border-border py-4 fade-up">
              <p className="text-muted uppercase text-xs tracking-widest font-cinzel mb-2">Founder & Creative Director</p>
              <p className="text-white italic font-cormorant text-lg">Kailash Nehru</p>
            </div>

            <div className="border-b border-border py-4 fade-up">
              <p className="text-muted uppercase text-xs tracking-widest font-cinzel mb-2">Website</p>
              <p className="text-white italic font-cormorant text-lg">lunacymedia.ca</p>
            </div>

            <div className="border-b border-border py-4 fade-up">
              <p className="text-muted uppercase text-xs tracking-widest font-cinzel mb-2">Based In</p>
              <p className="text-white italic font-cormorant text-lg">Canada</p>
            </div>

            <div className="py-4 fade-up">
              <p className="text-muted uppercase text-xs tracking-widest font-cinzel mb-2">Currently Accepting</p>
              <p className="text-white italic font-cormorant text-lg">
                Brand strategy · Creative direction · Album art & artist visual identity · Digital experience design · Original IP collaborations
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
