import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Instagram, Linkedin, Facebook } from "lucide-react";
import { useState, useRef } from "react";
import { useScrollReveal, type RevealConfig } from "@/hooks/useScrollReveal";
import { trackEvent, trackSocialClick } from "@/lib/analytics";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";

export default function Home() {
  const authData = useAuth();
  const { user = null, loading = false, error = null, isAuthenticated = false, logout = () => {} } = authData || {};
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const subscribeRef = useRef<HTMLElement>(null);
  const { style: subscribeStyle } = useScrollReveal(subscribeRef, { type: 'slideUp', duration: 800 });

  const subscribeMutation = trpc.newsletter.subscribe.useMutation();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !firstName) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);
    try {
      await subscribeMutation.mutateAsync({ email, firstName });
      trackEvent("newsletter_subscribe", `subscribe_${firstName}`, email);
      toast.success(`Welcome to the Orbit, ${firstName}!`);
      setEmail("");
      setFirstName("");
    } catch (error) {
      toast.error("Failed to subscribe. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <nav className="mx-auto max-w-7xl px-4 sm:px-8 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 font-semibold text-base tracking-tight">
            <img src="/lunacy-logo.svg" alt="Lunacy" className="w-6 h-6" />
            <span>Lunacy</span>
          </a>
          <div className="flex gap-8 items-center text-sm">
            <a href="/services" className="hover:text-accent transition duration-200">
              Services
            </a>
            <a href="/portfolio" className="hover:text-accent transition duration-200">
              Portfolio
            </a>
            <a href="/projects" className="hover:text-accent transition duration-200">
              Projects
            </a>
            <a href="/about" className="hover:text-accent transition duration-200">
              About
            </a>
            <a href="/contact" className="hover:text-accent transition duration-200">
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://private-us-east-1.manuscdn.com/sessionFile/ng4bi4XYYFsDp79XjIAkYH/sandbox/r5790bGa8uBDs6hxWp9isA-img-1_1771259060000_na1fn_aGVyby1kYXJrLW1vb25saWdodA.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvbmc0Ymk0WFlZRnNEcDc5WGpJQWtZSC9zYW5kYm94L3I1NzkwYkdhOHVCRHM2aHhXcDlpc0EtaW1nLTFfMTc3MTI1OTA2MDAwMF9uYTFmbl9hR1Z5Ynkxa1lYSnJMVzF2YjI1c2FXZG9kQS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=NnnQyv1ppO5bIXtYzDHbsMaMJNj~RdhR4L9ENhALZ8oaPlcjk7P6~OFpSxny250crIWMFq5czWH8nz46ZhBv2kCGGdmw4q44ZAAAWfHGFuDnodmhwfhcvNIdhTqjnqoi-HhO9-JawNNQNJXybX02IlYYBeIAbI79lgW9y1E~quOc8XBNCF8wuP05PSQ3X6nErQoiHl~F6OMMEwWUGAe1RK2QWzYcBPzDp--pdFtllZP6rXNohs9kR62UtShiSqFdiP4EsyWuPx2WFQh--IVtKyt8vVTnro6V1L1VuF9cjrl5V4~~Z-IYJimFdGePa0Zf8co5rkbFBfp7a5AioIZAog__')",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto px-4 animate-fadeIn">
          <h1 className="text-8xl md:text-9xl lg:text-[11rem] font-black mb-8 leading-none animate-slideUp tracking-tighter">
            Build culture.
          </h1>
          <h2 className="text-7xl md:text-8xl lg:text-9xl font-black mb-10 text-accent animate-slideUp tracking-tighter" style={{ animationDelay: "0.1s" }}>
            Design experiences.
          </h2>
          <h3 className="text-7xl md:text-8xl lg:text-9xl font-black mb-16 leading-none animate-slideUp tracking-tighter" style={{ animationDelay: "0.2s" }}>
            Move people.
          </h3>

          <p className="text-lg md:text-xl text-muted-foreground mb-16 max-w-3xl mx-auto animate-slideUp leading-relaxed" style={{ animationDelay: "0.3s" }}>
            We create experiential campaigns and visual systems that increase engagement, cultural relevance, and audience retention. We work with artists, brands, and cultural institutions to craft experiences that resonate emotionally and live beyond their initial release.
          </p>

          <div className="flex gap-4 justify-center animate-slideUp flex-wrap" style={{ animationDelay: "0.4s" }}>
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              onClick={() => {
                trackEvent("project_cta_click", "hero_services", "services");
                window.location.href = "/services";
              }}
            >
              Explore Services <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                trackEvent("project_cta_click", "hero_portfolio", "portfolio");
                window.location.href = "/portfolio";
              }}
            >
              View Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section ref={subscribeRef} className="py-20 md:py-32 px-4 sm:px-8 bg-card/50 border-t border-border">
        <div className="mx-auto max-w-6xl">
          <div className="mb-24 animate-fadeIn">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight">What We Do</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
              We create experiential campaigns and visual systems that increase engagement, cultural relevance, and audience retention. Our work moves people and builds lasting cultural impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="p-8 bg-background border border-border rounded-lg hover:border-accent transition duration-300 animate-slideUp">
              <h3 className="text-xl font-semibold mb-4">Services</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Experiential brand activations & events</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Guerilla marketing campaigns</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Digital media & visual storytelling</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Audio branding & sonic identity</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Social media strategy & management</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-background border border-border rounded-lg hover:border-accent transition duration-300 animate-slideUp" style={{ animationDelay: "0.1s" }}>
              <h3 className="text-xl font-semibold mb-4">Outcomes</h3>
              <p className="text-muted-foreground mb-6">
                Increased engagement. Cultural relevance. Audience retention. We work with artists, brands, and cultural institutions to create experiences that move people and drive measurable results.
              </p>
              <div className="flex gap-3 flex-wrap">
                <Button
                  variant="outline"
                  onClick={() => {
                    trackEvent("project_cta_click", "services_view", "services");
                    window.location.href = "/services";
                  }}
                >
                  View Services
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    trackEvent("project_cta_click", "portfolio_view", "portfolio");
                    window.location.href = "/portfolio";
                  }}
                >
                  View Portfolio
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 md:py-40 px-4 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-24 animate-fadeIn leading-tight">Creative Projects</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "OBEAH",
                description: "A graphic novel exploring Caribbean mythology and spiritual systems",
                link: "/obeah",
              },
              {
                title: "Lunacy Releases",
                description: "Original music and audio projects pushing narrative boundaries",
                link: "/releases",
              },
              {
                title: "Interactive Worlds",
                description: "Immersive digital experiences and interactive storytelling",
                link: "/interactive-worlds",
              },
            ].map((project, i) => (
              <div
                key={i}
                className="group p-8 bg-card border border-border rounded-lg hover:border-accent hover:shadow-lg transition duration-300 cursor-pointer animate-slideUp"
                style={{ animationDelay: `${i * 0.1}s` }}
                onClick={() => {
                  trackEvent("project_explore", `explore_${project.title}`, project.title);
                  window.location.href = project.link;
                }}
              >
                <h3 className="text-3xl md:text-4xl font-black mb-4 group-hover:text-accent transition duration-200 leading-tight">
                  {project.title}
                </h3>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{project.description}</p>
                <span className="text-accent font-medium flex items-center gap-2 group-hover:gap-3 transition duration-200">
                  Explore <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 md:py-40 px-4 sm:px-8 bg-card/50 border-t border-border">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 animate-fadeIn leading-tight">Join the Orbit</h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-16 animate-fadeIn leading-relaxed">
            Get updates on new projects, campaigns, and creative collaborations.
          </p>

          <form onSubmit={handleSubscribe} className="space-y-4 animate-slideUp">
            <div className="grid md:grid-cols-2 gap-4">
              <Input
                type="text"
                placeholder="Your name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                disabled={isSubmitting}
                className="bg-background border-border"
              />
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
                className="bg-background border-border"
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Subscribing..." : "Join the Orbit"}
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4 sm:px-8 bg-card/30">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-4">Studio</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="/about" className="hover:text-accent transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="/services" className="hover:text-accent transition">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/portfolio" className="hover:text-accent transition">
                    Portfolio
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Projects</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="/obeah" className="hover:text-accent transition">
                    OBEAH
                  </a>
                </li>
                <li>
                  <a href="/releases" className="hover:text-accent transition">
                    Releases
                  </a>
                </li>
                <li>
                  <a href="/interactive-worlds" className="hover:text-accent transition">
                    Interactive Worlds
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="/contact" className="hover:text-accent transition">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="mailto:hello@lunacymedia.ca" className="hover:text-accent transition">
                    Email
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Follow</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/lunacy_media/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition"
                  onClick={() => trackSocialClick("instagram")}
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61577277770199"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition"
                  onClick={() => trackSocialClick("facebook")}
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/company/lunacy-media/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition"
                  onClick={() => trackSocialClick("linkedin")}
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2026 Lunacy Media. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
