import { useState } from 'react';
import SEO from '../components/SEO';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formDataObj = new FormData(form);

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formDataObj as unknown as Record<string, string>).toString(),
    })
      .then(() => setSubmitted(true))
      .catch(() => setSubmitted(true));
  };

  return (
    <div className="min-h-screen flex flex-col pt-16">
      <SEO
        title="Contact Lunacy Media | Start a Project | Toronto Creative Studio"
        description="Get in touch with Lunacy Media to discuss your next creative project. We offer brand strategy, creative direction, digital experiences, and original IP development from our Toronto, Canada studio."
        path="/contact"
      />

      {/* Hero */}
      <section className="section-padding-lg bg-gradient-to-b from-accent/5 to-void border-b border-subtle">
        <div className="container max-w-3xl mx-auto text-center space-y-8">
          <h1 className="text-7xl md:text-8xl font-cinzel font-bold text-off-white glow-text-gold">
            Initiate
          </h1>
          <p className="text-xl text-muted font-inter font-light leading-relaxed">
            Whether you're seeking strategic creative services or exploring partnership opportunities from anywhere in Canada or beyond, our Toronto-based studio is here to listen. Tell us about your vision, and let's explore what we can build together.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding-lg bg-void">
        <div className="container max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16">
            {/* Contact Info Sidebar */}
            <div className="md:col-span-1 space-y-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-cinzel font-bold text-off-white">Get in Touch</h3>
                <div className="space-y-5">
                  <div>
                    <p className="text-sm font-inter text-accent mb-1 tracking-widest uppercase font-semibold">Studio</p>
                    <p className="text-muted font-inter text-base">Lunacy Media</p>
                  </div>
                  <div>
                    <p className="text-sm font-inter text-accent mb-1 tracking-widest uppercase font-semibold">Location</p>
                    <p className="text-muted font-inter text-base">Toronto, Ontario, Canada</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-cinzel font-bold text-off-white">Response Time</h3>
                <p className="text-base text-muted font-inter font-light leading-relaxed">
                  We typically respond to inquiries within 2-3 business days.
                </p>
              </div>
            </div>

            {/* Form */}
            {submitted ? (
              <div className="md:col-span-3 flex items-center justify-center">
                <div className="text-center space-y-8 py-20">
                  <h2 className="text-4xl font-cinzel font-bold text-accent">Message Sent</h2>
                  <p className="text-xl text-muted font-inter font-light leading-relaxed max-w-md mx-auto">
                    Thank you for reaching out. We'll be in touch within 2-3 business days.
                  </p>
                </div>
              </div>
            ) : (
              <form
                name="lunacy-contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="md:col-span-3 space-y-8"
              >
                <input type="hidden" name="form-name" value="lunacy-contact" />
                <p className="hidden" aria-hidden="true">
                  <label>
                    Don't fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" />
                  </label>
                </p>

                {/* Name */}
                <div>
                  <label htmlFor="contact-name" className="block text-base font-inter font-semibold text-off-white mb-4 tracking-wide">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    className="w-full px-6 py-4 bg-charcoal/50 border border-subtle rounded-sm text-off-white font-inter focus:border-accent focus:outline-none transition-all duration-300 text-lg"
                    placeholder="Your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="contact-email" className="block text-base font-inter font-semibold text-off-white mb-4 tracking-wide">
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    className="w-full px-6 py-4 bg-charcoal/50 border border-subtle rounded-sm text-off-white font-inter focus:border-accent focus:outline-none transition-all duration-300 text-lg"
                    placeholder="you@example.com"
                  />
                </div>

                {/* Project Type */}
                <div>
                  <label htmlFor="contact-project-type" className="block text-base font-inter font-semibold text-off-white mb-4 tracking-wide">
                    Project Type
                  </label>
                  <select
                    id="contact-project-type"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    className="w-full px-6 py-4 bg-charcoal/50 border border-subtle rounded-sm text-off-white font-inter focus:border-accent focus:outline-none transition-all duration-300 text-lg"
                  >
                    <option value="">Select a project type</option>
                    <option value="brand-strategy">Brand Strategy & Visual Identity</option>
                    <option value="digital-experience">Digital Experience & Web Development</option>
                    <option value="content-production">Content Production & Creative Direction</option>
                    <option value="creative-consulting">Creative Consulting & Strategy</option>
                    <option value="ip-partnership">IP Partnership / Investment</option>
                    <option value="collaboration">Creative Collaboration</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Budget Range */}
                <div>
                  <label htmlFor="contact-budget" className="block text-base font-inter font-semibold text-off-white mb-4 tracking-wide">
                    Budget Range
                  </label>
                  <select
                    id="contact-budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-charcoal/50 border border-subtle rounded-sm text-off-white font-inter focus:border-accent focus:outline-none transition-all duration-300 text-lg"
                  >
                    <option value="">Select a budget range</option>
                    <option value="under-5k">Under $5K</option>
                    <option value="5k-10k">$5K - $10K</option>
                    <option value="10k-25k">$10K - $25K</option>
                    <option value="25k-50k">$25K - $50K</option>
                    <option value="50k-100k">$50K - $100K</option>
                    <option value="100k+">$100K+</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-base font-inter font-semibold text-off-white mb-4 tracking-wide">
                    Tell Us About Your Vision
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    rows={5}
                    className="w-full px-6 py-4 bg-charcoal/50 border border-subtle rounded-sm text-off-white font-inter focus:border-accent focus:outline-none transition-all duration-300 resize-none text-lg"
                    placeholder="Describe your project, goals, and timeline..."
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="btn-primary w-full text-lg py-5"
                  aria-label="Submit contact form"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* How We Work */}
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
            Every inquiry is treated as the beginning of a potential long-term relationship. We listen deeply, ask the right questions, and only commit to projects where we can deliver transformative results. If we're not the right fit, we'll tell you — and we'll recommend someone who is.
          </p>
        </div>
      </section>
    </div>
  );
}
