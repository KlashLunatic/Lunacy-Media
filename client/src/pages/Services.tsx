import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import { useLocation } from "wouter";
import { trackEvent } from "@/lib/analytics";

export default function Services() {
  const [, setLocation] = useLocation();
  const containerRef = useScrollReveal();

  const services = [
    {
      title: "Experiential Marketing & Event Design",
      description: "Increase audience engagement and brand loyalty through immersive, memorable experiences that drive cultural relevance and measurable business results.",
      items: [
        "Guerilla marketing activations",
        "Pop-up experiences and installations",
        "Launch events and brand environments",
        "Interactive and immersive spaces",
        "Cultural and community activations"
      ]
    },
    {
      title: "Digital Media Production",
      description: "Boost audience engagement and retention through strategic visual content that strengthens brand identity and drives measurable platform growth.",
      items: [
        "Campaign visuals and creative direction",
        "Video production and editing",
        "Motion graphics and visual storytelling",
        "Mixed media and symbolic brand visuals",
        "Digital asset creation"
      ]
    },
    {
      title: "Audio Branding & Sound Design",
      description: "Create distinctive sonic identities that increase brand recall, emotional connection, and audience loyalty through strategic sound design.",
      items: [
        "Custom sound design for campaigns",
        "Original music composition",
        "Audio experiences for events",
        "Sonic identity development",
        "Podcast and audio content production"
      ]
    },
    {
      title: "Social Media Strategy & Execution",
      description: "Drive audience growth, engagement, and cultural relevance through strategic content direction and community-focused social campaigns.",
      items: [
        "Social-first campaign development",
        "Content direction and production",
        "Visual identity systems",
        "Audience growth strategy",
        "Community engagement and management"
      ]
    },
    {
      title: "Creative Direction & Brand Worldbuilding",
      description: "Build distinctive brand universes that increase market differentiation, audience loyalty, and long-term cultural impact across all touchpoints.",
      items: [
        "Narrative-driven brand identity",
        "Concept design and campaign architecture",
        "Visual language development",
        "Symbolic system creation",
        "Long-term brand strategy"
      ]
    }
  ];

  const clientTypes = [
    "Music artists and record labels",
    "Fashion brands and designers",
    "Lifestyle and culture brands",
    "Tech startups and digital platforms",
    "Creative agencies",
    "Event organizers and cultural institutions"
  ];

  const pricingModels = [
    {
      title: "Project-Based Pricing",
      description: "Fixed fee for defined campaigns or creative deliverables"
    },
    {
      title: "Retainer-Based Partnerships",
      description: "Monthly creative direction and ongoing campaign support"
    },
    {
      title: "Consulting & Creative Direction",
      description: "Strategy and concept development billed per engagement"
    }
  ];

  const handleContactClick = () => {
    trackEvent("project_cta_click", "services_contact_click", "services");
    setLocation("/contact");
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
            <a href="/about" className="hover:text-[#d4af37] transition duration-200">About</a>
            <a href="/" className="hover:text-[#d4af37] transition duration-200">Projects</a>
            <a href="/services" className="text-[#d4af37]">Services</a>
            <a href="/" className="hover:text-[#d4af37] transition duration-200">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: "url('https://private-us-east-1.manuscdn.com/sessionFile/ng4bi4XYYFsDp79XjIAkYH/sandbox/nuaUCI45B2SppNu5IswND7-img-1_1771257576000_na1fn_c2VydmljZXMtaGVyby1leHBlcmllbnRpYWw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvbmc0Ymk0WFlZRnNEcDc5WGpJQWtZSC9zYW5kYm94L251YVVDSTQ1QjJTcHBOdTVJc3dORDctaW1nLTFfMTc3MTI1NzU3NjAwMF9uYTFmbl9jMlZ5ZG1salpYTXRhR1Z5YnkxbGVIQmxjbWxsYm5ScFlXdy5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=DueZsS28HabyDqfZAhTRiT1y7iKA4RIdhVlR4U13Lv8DaDYpRwEPPOCE1icQjhSY3R8HvqpUMtPWg430Vi8hMP5-kyYigF42XiSuSWtOPGDl8cPtvNC4fpkmqltI25E7upDuAO6hu61DD2olBuIyhw1nezySyN560X7hC4nksKoUugH3KBliYZfYTo0XcL6vFPu9sPZ60vpL0m~yzyLyZyLLQBi0O-1SCBUeJPwrNld35niGFlpo8s3nKBTSXN8XthuqcoIRQt3o6tYY~IY-wgenGFRsGCVcnXGNcbxsrCTACXXbh0azizbuUYNdMHqVdK6SLV2bhKRHmvEfz1WrxA__')"
          }}
        />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-8 text-center">
          <div className="animate-fade-in-up">
            <p className="text-sm font-light tracking-widest text-[#d4af37] mb-4">CREATIVE STUDIO</p>
            <h1 className="text-5xl sm:text-7xl font-light tracking-tight mb-6">
              Experiential Marketing & Creative Direction
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              We design culturally resonant brand experiences that feel less like advertisements and more like moments that matter.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={containerRef} className="py-20 sm:py-32 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-8">
          <h2 className="text-4xl font-light tracking-tight mb-16 text-center">Our Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="p-8 border border-border rounded-lg hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <h3 className="text-2xl font-light mb-3 text-[#d4af37]">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.items.map((item, i) => (
                    <li key={i} className="text-sm text-gray-700 flex items-start gap-3">
                      <span className="text-[#d4af37] mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Types */}
      <section className="py-20 sm:py-32 bg-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-8">
          <h2 className="text-4xl font-light tracking-tight mb-16 text-center">Who We Work With</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clientTypes.map((client, idx) => (
              <div
                key={idx}
                className="p-6 border border-border rounded-lg text-center hover:border-[#d4af37] transition-colors duration-300"
              >
                <p className="text-lg font-light">{client}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-600 mt-12 max-w-2xl mx-auto">
            Lunacy Media specializes in working with brands that want to stand out through originality, symbolism, and experiential engagement rather than conventional marketing.
          </p>
        </div>
      </section>

      {/* Pricing Models */}
      <section className="py-20 sm:py-32 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-8">
          <h2 className="text-4xl font-light tracking-tight mb-16 text-center">Flexible Pricing Models</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingModels.map((model, idx) => (
              <div key={idx} className="p-8 border border-border rounded-lg text-center">
                <h3 className="text-xl font-light mb-3 text-[#d4af37]">{model.title}</h3>
                <p className="text-gray-600">{model.description}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-600 mt-12">
            Custom quotes are provided based on project complexity and scope.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32 bg-background">
        <div className="mx-auto max-w-2xl px-4 sm:px-8 text-center">
          <h2 className="text-4xl font-light tracking-tight mb-6">Ready to Create Something Extraordinary?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Let's discuss how Lunacy Media can bring your brand vision to life.
          </p>
          <Button
            onClick={handleContactClick}
            className="bg-[#d4af37] text-black hover:bg-[#c9a02d] rounded-full px-8 py-6 text-lg font-light"
          >
            Get in Touch <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
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
