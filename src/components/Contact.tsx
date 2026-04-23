import type { FC } from 'react';

const Contact: FC = () => {
  return (
    <section id="contact" className="bg-deep border-t border-border">
      <div className="container">
        <div className="grid-2">
          {/* Left column */}
          <div>
            <div className="section-eyebrow">Contact</div>
            
            <div className="mb-16">
              <h2 className="text-white mb-6 leading-tight">
                Let's Build<br />
                <span className="text-gold text-5xl md:text-6xl">Something</span><br />
                Unforgettable.
              </h2>
              <div className="w-24 h-px bg-gradient-to-r from-gold to-transparent" />
            </div>

            <p className="text-off-white mb-12 font-cormorant text-lg leading-relaxed">
              If you've been waiting for a creative partner who actually gets it — this is the conversation. We're currently accepting new clients. Tell us what you're building.
            </p>

            <a
              href="mailto:hello@lunacymedia.ca"
              className="contact-cta-button"
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
