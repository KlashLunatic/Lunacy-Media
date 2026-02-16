import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import { trackEvent } from "@/lib/analytics";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Contact() {
  const formRef = useScrollReveal();
  const contactMutation = trpc.contact.submit.useMutation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    projectType: "",
    budgetRange: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const projectTypes = [
    "Experiential Marketing",
    "Digital Campaign",
    "Audio Branding",
    "Social Media Strategy",
    "Creative Direction",
    "Event Production",
    "Other",
  ];

  const budgetRanges = [
    "$5K - $15K",
    "$15K - $50K",
    "$50K - $100K",
    "$100K+",
    "Not sure yet",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);
    try {
      await contactMutation.mutateAsync({
        name: formData.name,
        email: formData.email,
        message: formData.message,
        projectType: formData.projectType,
        budgetRange: formData.budgetRange,
      });

      trackEvent("project_cta_click", "contact_form_submit", "contact");
      toast.success("Message sent! We'll be in touch soon.");
      setShowSuccess(true);
      setFormData({
        name: "",
        email: "",
        message: "",
        projectType: "",
        budgetRange: "",
      });

      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    } catch (error) {
      console.error("Contact form error:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <nav className="mx-auto max-w-6xl px-4 sm:px-8 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 font-semibold text-base tracking-tight">
            <img src="/lunacy-logo.png" alt="Lunacy" className="w-6 h-6" />
            <span>Lunacy</span>
          </a>
          <div className="flex gap-8 items-center text-sm">
            <a href="/about" className="hover:text-[#d4af37] transition duration-200">
              About
            </a>
            <a href="/services" className="hover:text-[#d4af37] transition duration-200">
              Services
            </a>
            <a href="/portfolio" className="hover:text-[#d4af37] transition duration-200">
              Portfolio
            </a>
            <a href="/" className="hover:text-[#d4af37] transition duration-200">
              Projects
            </a>
            <a href="/contact" className="text-[#d4af37]">
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="py-20 sm:py-32 bg-white">
        <div className="mx-auto max-w-2xl px-4 sm:px-8 text-center">
          <div className="animate-fade-in-up">
            <p className="text-sm font-light tracking-widest text-[#d4af37] mb-4">GET IN TOUCH</p>
            <h1 className="text-5xl sm:text-6xl font-light tracking-tight mb-6">
              Let's Create Together
            </h1>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              Have a project in mind? We'd love to hear about it. Fill out the form below and we'll get back to you within 48 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section ref={formRef} className="py-20 sm:py-32 bg-background">
        <div className="mx-auto max-w-2xl px-4 sm:px-8">
          {showSuccess && (
            <div className="mb-8 p-6 bg-green-50 border border-green-200 rounded-lg animate-fade-in-up">
              <p className="text-green-800 font-light">
                Thank you for reaching out! We've received your message and will be in touch soon.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in-up">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-light mb-2">
                Your Name *
              </label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Kailash"
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-[#d4af37] transition"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-light mb-2">
                Email Address *
              </label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-[#d4af37] transition"
                required
              />
            </div>

            {/* Project Type */}
            <div>
              <label htmlFor="projectType" className="block text-sm font-light mb-2">
                Project Type
              </label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-[#d4af37] transition bg-background text-foreground"
              >
                <option value="">Select a project type</option>
                {projectTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Budget Range */}
            <div>
              <label htmlFor="budgetRange" className="block text-sm font-light mb-2">
                Budget Range
              </label>
              <select
                id="budgetRange"
                name="budgetRange"
                value={formData.budgetRange}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-[#d4af37] transition bg-background text-foreground"
              >
                <option value="">Select a budget range</option>
                {budgetRanges.map((range) => (
                  <option key={range} value={range}>
                    {range}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-light mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project, vision, or collaboration idea..."
                rows={6}
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-[#d4af37] transition resize-none"
                required
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#d4af37] text-black hover:bg-[#c9a02d] rounded-full py-6 text-lg font-light disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send Message"} <ArrowRight className="ml-2 w-5 h-5" />
            </Button>

            <p className="text-xs text-gray-600 text-center">
              * Required fields. We respect your privacy and will only use your information to respond to your inquiry.
            </p>
          </form>

          {/* Alternative Contact Methods */}
          <div className="mt-16 pt-16 border-t border-border">
            <h3 className="text-2xl font-light mb-8 text-center">Other Ways to Reach Us</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-sm text-[#d4af37] font-light mb-2">Email</p>
                <a href="mailto:hello@lunacymedia.ca" className="text-gray-600 hover:text-[#d4af37] transition">
                  hello@lunacymedia.ca
                </a>
              </div>
              <div>
                <p className="text-sm text-[#d4af37] font-light mb-2">Instagram</p>
                <a
                  href="https://www.instagram.com/lunacy_media/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#d4af37] transition"
                >
                  @lunacy_media
                </a>
              </div>
              <div>
                <p className="text-sm text-[#d4af37] font-light mb-2">LinkedIn</p>
                <a
                  href="https://www.linkedin.com/company/lunacy-media/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#d4af37] transition"
                >
                  Lunacy Media
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-sm text-gray-600">© 2026 Lunacy Media. All rights reserved.</p>
            <div className="flex gap-6">
              <a
                href="https://www.instagram.com/lunacy_media/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("social_click", "social_instagram", "instagram")}
                className="text-gray-600 hover:text-[#d4af37] transition duration-200"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61577277770199"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("social_click", "social_facebook", "facebook")}
                className="text-gray-600 hover:text-[#d4af37] transition duration-200"
              >
                Facebook
              </a>
              <a
                href="https://www.linkedin.com/company/lunacy-media/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("social_click", "social_linkedin", "linkedin")}
                className="text-gray-600 hover:text-[#d4af37] transition duration-200"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
