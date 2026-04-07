import { Link } from 'wouter';
import { ChevronRight } from 'lucide-react';

export default function Studio() {
  const services = [
    {
      title: 'Brand Architecture & Visual Identity',
      description: 'We build complete brand systems that communicate your mythology. From strategic positioning to visual language, we create identities that resonate.',
      includes: ['Strategic Positioning', 'Visual Identity System', 'Brand Guidelines', 'Logo Design'],
      pricing: '$15K - $50K',
    },
    {
      title: 'Digital Experiences & Web Development',
      description: 'Custom digital platforms designed to tell your story. We build websites, apps, and interactive experiences that engage and convert.',
      includes: ['Web Design & Development', 'Interactive Experiences', 'User Experience Design', 'Technical Implementation'],
      pricing: '$20K - $75K',
    },
    {
      title: 'Multidisciplinary Content Production',
      description: 'From concept to execution. We produce music, video, photography, and written content that brings your brand universe to life.',
      includes: ['Video Production', 'Photography', 'Music & Audio', 'Written Content'],
      pricing: '$10K - $100K+',
    },
    {
      title: 'Creative Consulting & Strategy',
      description: 'Strategic guidance for brands navigating transformation. We help you clarify vision, develop strategy, and execute with confidence.',
      includes: ['Strategic Planning', 'Creative Direction', 'Brand Workshops', 'Ongoing Consultation'],
      pricing: '$5K - $25K',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col pt-16">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-accent/5 to-background">
        <div className="container max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-cinzel font-bold text-foreground">
            Studio Services
          </h1>
          <p className="text-lg text-foreground/70 font-inter leading-relaxed">
            We offer comprehensive creative services designed to build your brand, amplify your message, and create lasting impact.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <div key={i} className="bg-card border border-border rounded-sm p-8 space-y-6 hover:border-accent transition-colors">
                <div>
                  <h3 className="text-2xl font-cinzel font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-foreground/70 font-inter">{service.description}</p>
                </div>
                
                <div>
                  <p className="text-sm font-inter text-foreground/60 mb-3">INCLUDES:</p>
                  <ul className="space-y-2">
                    {service.includes.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-foreground/70 font-inter text-sm">
                        <span className="w-1 h-1 bg-accent rounded-full"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-accent font-cinzel font-bold">{service.pricing}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Process */}
      <section className="section-padding bg-card/30 border-t border-border">
        <div className="container max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-cinzel font-bold mb-12 text-center">The Process</h2>
          <div className="space-y-8">
            {[
              { step: '01', title: 'Discovery', desc: 'We listen deeply to understand your vision, values, and goals. This phase establishes the foundation for all creative work.' },
              { step: '02', title: 'Strategy', desc: 'We develop a strategic framework that guides all creative decisions, ensuring alignment with your objectives.' },
              { step: '03', title: 'Creation', desc: 'Our team executes the vision with precision and artistry, bringing the strategy to life through multiple disciplines.' },
              { step: '04', title: 'Refinement', desc: 'We iterate based on feedback, ensuring the final deliverables exceed expectations and serve your goals.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="text-4xl font-cinzel font-bold text-accent/30 flex-shrink-0">{item.step}</div>
                <div className="space-y-2">
                  <h3 className="text-xl font-cinzel font-bold text-foreground">{item.title}</h3>
                  <p className="text-foreground/70 font-inter">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-cinzel font-bold">Ready to Begin?</h2>
          <p className="text-lg text-foreground/70 font-inter">
            Let's discuss your project and explore how Lunacy can help you build something extraordinary.
          </p>
          <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
            Initiate a Project <ChevronRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
