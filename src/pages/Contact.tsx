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
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-accent/5 to-background">
        <div className="container max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-cinzel font-bold text-foreground">
            Initiate
          </h1>
          <p className="text-lg text-foreground/70 font-inter leading-relaxed">
            Whether you're seeking strategic creative services or exploring partnership opportunities, we're here to listen. Tell us about your vision, and let's explore what we can build together.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding">
        <div className="container max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Contact Info */}
            <div className="md:col-span-1 space-y-8">
              <div className="space-y-4">
                <h3 className="text-lg font-cinzel font-bold text-foreground">Direct Contact</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Mail size={20} className="text-accent mt-1 flex-shrink-0" />
                    <a href="mailto:hello@lunacymedia.com" className="text-foreground/70 hover:text-accent transition-colors font-inter">
                      hello@lunacymedia.com
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone size={20} className="text-accent mt-1 flex-shrink-0" />
                    <a href="tel:+1234567890" className="text-foreground/70 hover:text-accent transition-colors font-inter">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-cinzel font-bold text-foreground">Response Time</h3>
                <p className="text-sm text-foreground/70 font-inter leading-relaxed">
                  We typically respond to inquiries within 2-3 business days. For urgent matters, please call directly.
                </p>
              </div>
            </div>

            {/* Form */}
            <form 
              name="lunacy-contact" 
              method="POST" 
              netlify-honeypot="bot-field"
              data-netlify="true"
              className="md:col-span-2 space-y-6"
            >
              {/* Netlify Hidden Field */}
              <input type="hidden" name="form-name" value="lunacy-contact" />
              <input type="hidden" name="bot-field" />

              <>
                {/* Name */}
                <div>
                  <label className="block text-sm font-inter font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-card border border-border rounded-sm text-foreground font-inter focus:border-accent focus:outline-none transition-colors"
                    placeholder="Kailash"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-inter font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-card border border-border rounded-sm text-foreground font-inter focus:border-accent focus:outline-none transition-colors"
                    placeholder="you@example.com"
                  />
                </div>

                {/* Inquiry Type */}
                <div>
                  <label className="block text-sm font-inter font-medium text-foreground mb-2">
                    What brings you here?
                  </label>
                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-card border border-border rounded-sm text-foreground font-inter focus:border-accent focus:outline-none transition-colors"
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
                      <label className="block text-sm font-inter font-medium text-foreground mb-2">
                        Project Description
                      </label>
                      <textarea
                        name="projectDescription"
                        value={formData.projectDescription}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 bg-card border border-border rounded-sm text-foreground font-inter focus:border-accent focus:outline-none transition-colors resize-none"
                        placeholder="Tell us about your project vision..."
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-inter font-medium text-foreground mb-2">
                          Budget Range
                        </label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-card border border-border rounded-sm text-foreground font-inter focus:border-accent focus:outline-none transition-colors"
                        >
                          <option value="">Select range</option>
                          <option value="5k-10k">$5K - $10K</option>
                          <option value="10k-25k">$10K - $25K</option>
                          <option value="25k-50k">$25K - $50K</option>
                          <option value="50k+">$50K+</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-inter font-medium text-foreground mb-2">
                          Timeline
                        </label>
                        <select
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-card border border-border rounded-sm text-foreground font-inter focus:border-accent focus:outline-none transition-colors"
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
                  <label className="block text-sm font-inter font-medium text-foreground mb-2">
                    Additional Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-card border border-border rounded-sm text-foreground font-inter focus:border-accent focus:outline-none transition-colors resize-none"
                    placeholder="Anything else we should know?"
                  />
                </div>

                {/* Submit */}
                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </>
            </form>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-card/30 border-t border-border">
        <div className="container max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-cinzel font-bold text-foreground">
            How We Work
          </h2>
          <p className="text-foreground/70 font-inter leading-relaxed">
            Every inquiry is treated as the beginning of a potential long-term relationship. We listen deeply, ask the right questions, and only commit to projects where we can deliver transformative results. If we're not the right fit, we'll tell you—and we'll recommend someone who is.
          </p>
        </div>
      </section>
    </div>
  );
}
