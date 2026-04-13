import { ChevronRight } from 'lucide-react';
import { Link } from 'wouter';

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
      {/* Hero - Enhanced */}
      <section className="section-padding-lg bg-gradient-to-b from-accent/5 to-void border-b border-subtle">
        <div className="container max-w-3xl mx-auto text-center space-y-8">
          <h1 className="text-7xl md:text-8xl font-cinzel font-bold text-off-white glow-text-gold">
            Studio Services
          </h1>
          <p className="text-xl text-muted font-inter leading-relaxed font-light">
            We offer comprehensive creative services designed to build your brand, amplify your message, and create lasting impact.
          </p>
        </div>
      </section>

      {/* Services Grid - Premium presentation */}
      <section className="section-padding-lg bg-void">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, i) => (
              <div key={i} className="bg-charcoal/50 border border-subtle rounded-sm p-10 space-y-8 hover:border-accent transition-all duration-500 group hover:shadow-lg hover:shadow-accent/10">
                <div>
                  <h3 className="text-3xl font-cinzel font-bold text-off-white mb-6 group-hover:text-accent transition-colors duration-500">{service.title}</h3>
                  <p className="text-lg text-muted font-inter font-light leading-relaxed">{service.description}</p>
                </div>
                
                <div>
                  <p className="text-sm font-inter text-subtle mb-4 tracking-widest uppercase font-semibold">Includes:</p>
                  <ul className="space-y-3">
                    {service.includes.map((item, j) => (
                      <li key={j} className="flex items-center gap-3 text-muted font-inter text-base">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full group-hover:animate-glow-pulse"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-subtle">
                  <p className="text-accent font-cinzel font-bold text-2xl">{service.pricing}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Process - Enhanced */}
      <section className="section-padding-lg bg-gradient-dark border-t border-subtle relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent-glow rounded-full blur-3xl animate-glow-shift"></div>
        </div>
        <div className="container max-w-3xl mx-auto relative z-10">
          <h2 className="text-7xl md:text-8xl font-cinzel font-bold mb-20 text-center text-accent glow-text-gold">The Process</h2>
          <div className="space-y-12">
            {[
              { step: '01', title: 'Discovery', desc: 'We listen deeply to understand your vision, values, and goals. This phase establishes the foundation for all creative work.' },
              { step: '02', title: 'Strategy', desc: 'We develop a strategic framework that guides all creative decisions, ensuring alignment with your objectives.' },
              { step: '03', title: 'Creation', desc: 'Our team executes the vision with precision and artistry, bringing the strategy to life through multiple disciplines.' },
              { step: '04', title: 'Refinement', desc: 'We iterate based on feedback, ensuring the final deliverables exceed expectations and serve your goals.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-8 group">
                <div className="text-5xl font-cinzel font-bold text-accent/40 flex-shrink-0 group-hover:text-accent/80 transition-colors duration-500">{item.step}</div>
                <div className="space-y-3 flex-grow border-l border-subtle/50 pl-8 group-hover:border-accent/30 transition-colors duration-500">
                  <h3 className="text-2xl font-cinzel font-bold text-off-white group-hover:text-accent transition-colors duration-500">{item.title}</h3>
                  <p className="text-lg text-muted font-inter font-light leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Maximum conversion */}
      <section className="section-padding-lg bg-charcoal border-t border-subtle relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-glow rounded-full blur-3xl animate-glow-shift"></div>
        </div>
        <div className="container max-w-3xl mx-auto text-center space-y-12 relative z-10">
          <h2 className="text-6xl md:text-7xl font-cinzel font-bold text-off-white">Ready to Begin?</h2>
          <p className="text-xl text-muted font-inter font-light leading-relaxed">
            Let's discuss your project and explore how Lunacy can help you build something extraordinary.
          </p>
          <Link href="/contact" className="btn-primary inline-flex items-center gap-3">
            Initiate a Project <ChevronRight size={22} />
          </Link>
        </div>
      </section>
    </div>
  );
}
