import { useState } from 'react';
import { Mail, Phone } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'client-project',
    projectDescription: '',
    budget: '',
    timeline: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen flex flex-col pt-16">
      {/* Hero - Enhanced */}
      <section className="section-padding-lg bg-gradient-to-b from-accent/5 to-void border-b border-subtle">
        <div className="container max-w-3xl mx-auto text-center space-y-8">
          <h1 className="text-7xl md:text-8xl font-cinzel font-bold text-off-white glow-text-gold">
            Initiate
          </h1>
          <p className="text-xl text-muted font-inter font-light leading-relaxed">
            Whether you're seeking strategic creative services or exploring partnership opportunities, we're here to listen. Tell us about your vision, and let's explore what we can build together.
          </p>
        </div>
      </section>

      {/* Form Section - Premium layout */}
      <section className="section-padding-lg bg-void">
        <div className="container max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16">
            {/* Contact Info - Sidebar */}
            <div className="md:col-span-1 space-y-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-cinzel font-bold text-off-white">Direct Contact</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <Mail size={24} className="text-accent mt-1 flex-shrink-0" />
                    <a href="mailto:hello@lunacymedia.com" className="text-muted hover:text-accent transition-colors font-inter text-lg">
                      hello@lunacymedia.com
                    </a>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone size={24} className="text-accent mt-1 flex-shrink-0" />
                    <a href="tel:+1234567890" className="text-muted hover:text-accent transition-colors font-inter text-lg">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-cinzel font-bold text-off-white">Response Time</h3>
                <p className="text-base text-muted font-inter font-light leading-relaxed">
                  We typically respond to inquiries within 2-3 business days. For urgent matters, please call directly.
                </p>
              </div>
            </div>

            {/* Form - Main content */}
            <form 
              name="lunacy-contact" 
              method="POST" 
              netlify-honeypot="bot-field"
              data-netlify="true"
              className="md:col-span-3 space-y-8"
            >
              {/* Netlify Hidden Field */}
              <input type="hidden" name="form-name" value="lunacy-contact" />
              <input type="hidden" name="bot-field" />
              <>
                {/* Name */}
                <div>
                  <label className="block text-base font-inter font-semibold text-off-white mb-4 tracking-wide">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-charcoal/50 border border-subtle rounded-sm text-off-white font-inter focus:border-accent focus:outline-none transition-all duration-300 text-lg"
                    placeholder="Kailash"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-base font-inter font-semibold text-off-white mb-4 tracking-wide">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-charcoal/50 border border-subtle rounded-sm text-off-white font-inter focus:border-accent focus:outline-none transition-all duration-300 text-lg"
                    placeholder="you@example.com"
                  />
                </div>

                {/* Inquiry Type */}
                <div>
                  <label className="block text-base font-inter font-semibold text-off-white mb-4 tracking-wide">
                    What brings you here?
                  </label>
                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-charcoal/50 border border-subtle rounded-sm text-off-white font-inter focus:border-accent focus:outline-none transition-all duration-300 text-lg"
                  >
                    <option value="client-project">Client Project Inquiry</option>
                    <option value="ip-partnership">IP Partnership / Investment</option>
                    <option value="collaboration">Creative Collaboration</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Conditional Fields */}
                {formData.inquiryType === 'client-project' && (
                  <>
                    <div>
                      <label className="block text-base font-inter font-semibold text-off-white mb-4 tracking-wide">
                        Project Description
                      </label>
                      <textarea
                        name="projectDescription"
                        value={formData.projectDescription}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-6 py-4 bg-charcoal/50 border border-subtle rounded-sm text-off-white font-inter focus:border-accent focus:outline-none transition-all duration-300 resize-none text-lg"
                        placeholder="Tell us about your project vision..."
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="block text-base font-inter font-semibold text-off-white mb-4 tracking-wide">
                          Budget Range
                        </label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-6 py-4 bg-charcoal/50 border border-subtle rounded-sm text-off-white font-inter focus:border-accent focus:outline-none transition-all duration-300 text-lg"
                        >
                          <option value="">Select range</option>
                          <option value="5k-10k">$5K - $10K</option>
                          <option value="10k-25k">$10K - $25K</option>
                          <option value="25k-50k">$25K - $50K</option>
                          <option value="50k+">$50K+</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-base font-inter font-semibold text-off-white mb-4 tracking-wide">
                          Timeline
                        </label>
                        <select
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          className="w-full px-6 py-4 bg-charcoal/50 border border-subtle rounded-sm text-off-white font-inter focus:border-accent focus:outline-none transition-all duration-300 text-lg"
                        >
                          <option value="">Select timeline</option>
                          <option value="immediate">Immediate (0-3 months)</option>
                          <option value="soon">Soon (3-6 months)</option>
                          <option value="flexible">Flexible</option>
                        </select>
                      </div>
                    </div>
                  </>
                )}

                {/* Message */}
                <div>
                  <label className="block text-base font-inter font-semibold text-off-white mb-4 tracking-wide">
                    Additional Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-6 py-4 bg-charcoal/50 border border-subtle rounded-sm text-off-white font-inter focus:border-accent focus:outline-none transition-all duration-300 resize-none text-lg"
                    placeholder="Anything else we should know?"
                  />
                </div>

                {/* Submit */}
                <button type="submit" className="btn-primary w-full text-lg py-5">
                  Send Message
                </button>
              </>
            </form>
          </div>
        </div>
      </section>

      {/* Philosophy - Cinematic CTA */}
      <section className="section-padding-lg bg-gradient-dark border-t border-subtle relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-purple-glow rounded-full blur-3xl animate-glow-shift"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent-glow rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="container max-w-3xl mx-auto text-center space-y-10 relative z-10">
          <h2 className="text-5xl md:text-6xl font-cinzel font-bold text-off-white">
            How We Work
          </h2>
          <p className="text-xl text-muted font-inter font-light leading-relaxed">
            Every inquiry is treated as the beginning of a potential long-term relationship. We listen deeply, ask the right questions, and only commit to projects where we can deliver transformative results. If we're not the right fit, we'll tell you—and we'll recommend someone who is.
          </p>
        </div>
      </section>
    </div>
  );
}
