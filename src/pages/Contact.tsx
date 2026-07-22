import { useState } from 'react';
import SEO from '../components/SEO';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    building: '',
    unclear: '',
    returning: '',
    belief: '',
    stage: '',
    level: '',
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
        title="Contact Lunacy Media | Begin Your Mythos Brief"
        description="Begin a project with Lunacy Media. Share what you are building, what feels unclear, and what kind of world you want your audience to believe in."
        path="/contact"
      />

      <section className="section-padding-lg bg-gradient-to-b from-accent/5 to-void border-b border-subtle">
        <div className="container max-w-3xl mx-auto text-center space-y-8">
          <h1 className="text-7xl md:text-8xl font-cinzel font-bold text-off-white glow-text-gold">
            Initiate
          </h1>
          <p className="text-xl text-muted font-inter font-light leading-relaxed">
            This is the first page of the mythos brief. Tell us what you are building, what feels unresolved, and what you want people to believe when they encounter the world around your work.
          </p>
        </div>
      </section>

      <section className="section-padding-lg bg-void">
        <div className="container max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16">
            <div className="md:col-span-1 space-y-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-cinzel font-bold text-off-white">The Signal</h3>
                <div className="space-y-5">
                  <div>
                    <p className="text-sm font-inter text-accent mb-1 tracking-widest uppercase font-semibold">Studio</p>
                    <p className="text-muted font-inter text-base">Lunacy Media</p>
                  </div>
                  <div>
                    <p className="text-sm font-inter text-accent mb-1 tracking-widest uppercase font-semibold">Location</p>
                    <p className="text-muted font-inter text-base">Toronto, Ontario, Canada</p>
                  </div>
                  <div>
                    <p className="text-sm font-inter text-accent mb-1 tracking-widest uppercase font-semibold">Email</p>
                    <p className="text-muted font-inter text-base">info@lunacymedia.ca</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-cinzel font-bold text-off-white">Response</h3>
                <p className="text-base text-muted font-inter font-light leading-relaxed">
                  Every signal is read with care. If the fit is there, you will hear back within 24 business hours.
                </p>
              </div>
            </div>

            {submitted ? (
              <div className="md:col-span-3 flex items-center justify-center">
                <div className="text-center space-y-8 py-20">
                  <h2 className="text-4xl font-cinzel font-bold text-accent">Signal Received</h2>
                  <p className="text-xl text-muted font-inter font-light leading-relaxed max-w-md mx-auto">
                    Thank you for trusting us with the first shape of the vision. We will be in touch within 24 business hours if the fit is there.
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
                <div hidden>
                  <input name="bot-field" tabIndex={-1} autoComplete="off" />
                </div>

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

                <div>
                  <label htmlFor="contact-building" className="block text-base font-inter font-semibold text-off-white mb-4 tracking-wide">
                    What are you building?
                  </label>
                  <select
                    id="contact-building"
                    name="building"
                    value={formData.building}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    className="w-full px-6 py-4 bg-charcoal/50 border border-subtle rounded-sm text-off-white font-inter focus:border-accent focus:outline-none transition-all duration-300 text-lg"
                  >
                    <option value="">Select the closest shape</option>
                    <option value="artist-release">An artist release or music world</option>
                    <option value="brand-or-business">A brand, business, or founder story</option>
                    <option value="story-world">A story world, character system, or original IP</option>
                    <option value="campaign">A campaign, launch, or cultural initiative</option>
                    <option value="organization">An organization with a mission to clarify</option>
                    <option value="other">Something stranger, still forming</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-unclear" className="block text-base font-inter font-semibold text-off-white mb-4 tracking-wide">
                    What feels unclear right now?
                  </label>
                  <select
                    id="contact-unclear"
                    name="unclear"
                    value={formData.unclear}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    className="w-full px-6 py-4 bg-charcoal/50 border border-subtle rounded-sm text-off-white font-inter focus:border-accent focus:outline-none transition-all duration-300 text-lg"
                  >
                    <option value="">Choose the strongest tension</option>
                    <option value="identity">Identity</option>
                    <option value="message">Message</option>
                    <option value="visual-world">Visual world</option>
                    <option value="audience">Audience belief</option>
                    <option value="launch">Launch or rollout</option>
                    <option value="mythology">Mythology and meaning</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-returning" className="block text-base font-inter font-semibold text-off-white mb-4 tracking-wide">
                    What keeps returning?
                  </label>
                  <textarea
                    id="contact-returning"
                    name="returning"
                    value={formData.returning}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-6 py-4 bg-charcoal/50 border border-subtle rounded-sm text-off-white font-inter focus:border-accent focus:outline-none transition-all duration-300 resize-none text-lg"
                    placeholder="A symbol, phrase, feeling, character, song, image, question, or obstacle..."
                  />
                </div>

                <div>
                  <label htmlFor="contact-belief" className="block text-base font-inter font-semibold text-off-white mb-4 tracking-wide">
                    What do you want people to believe?
                  </label>
                  <textarea
                    id="contact-belief"
                    name="belief"
                    value={formData.belief}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-6 py-4 bg-charcoal/50 border border-subtle rounded-sm text-off-white font-inter focus:border-accent focus:outline-none transition-all duration-300 resize-none text-lg"
                    placeholder="When someone leaves your world, what should feel newly true?"
                  />
                </div>

                <div>
                  <label htmlFor="contact-stage" className="block text-base font-inter font-semibold text-off-white mb-4 tracking-wide">
                    What stage are you in?
                  </label>
                  <select
                    id="contact-stage"
                    name="stage"
                    value={formData.stage}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-charcoal/50 border border-subtle rounded-sm text-off-white font-inter focus:border-accent focus:outline-none transition-all duration-300 text-lg"
                  >
                    <option value="">Select a stage</option>
                    <option value="idea">Idea stage</option>
                    <option value="active">Active project</option>
                    <option value="launch-ready">Launch-ready</option>
                    <option value="rebuilding">Rebuilding or repositioning</option>
                    <option value="scaling">Scaling an existing world</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-level" className="block text-base font-inter font-semibold text-off-white mb-4 tracking-wide">
                    What level of build are you considering?
                  </label>
                  <select
                    id="contact-level"
                    name="level"
                    value={formData.level}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-charcoal/50 border border-subtle rounded-sm text-off-white font-inter focus:border-accent focus:outline-none transition-all duration-300 text-lg"
                  >
                    <option value="">Select what feels closest</option>
                    <option value="nebula">Nebula - Mythos Audit</option>
                    <option value="neutron">Neutron - Narrative System</option>
                    <option value="nova">Nova - World Build</option>
                    <option value="orbit">Orbit - Ongoing Creative Direction</option>
                    <option value="unsure">I am not sure yet</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-base font-inter font-semibold text-off-white mb-4 tracking-wide">
                    Anything else the moon should know?
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-6 py-4 bg-charcoal/50 border border-subtle rounded-sm text-off-white font-inter focus:border-accent focus:outline-none transition-all duration-300 resize-none text-lg"
                    placeholder="Timeline, links, references, dreams, constraints, or the part that feels hardest to explain..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full text-lg py-5"
                  aria-label="Submit contact form"
                >
                  Send the Signal
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

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
            Every inquiry is treated as the beginning of a possible world. We listen for the recurring symbols, the unresolved tensions, and the audience belief underneath the request. If we are not the right fit, we will say so clearly.
          </p>
        </div>
      </section>
    </div>
  );
}
