import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";

/**
 * Design Philosophy: Luxury Minimal (Apple-Inspired)
 * - White background with subtle gold (#d4af37) accents
 * - Generous whitespace and clean typography
 * - Refined, elegant, premium aesthetic
 * - Minimal visual elements, maximum impact
 * - Typography: SF Pro Display / Inter for body (Apple-inspired)
 * - Smooth transitions and subtle interactions
 */

export default function Home() {
  // The userAuth hooks provides authentication state
  // To implement login/logout functionality, simply call logout() or redirect to getLoginUrl()
  let { user, loading, error, isAuthenticated, logout } = useAuth();

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const subscribeMutation = trpc.newsletter.subscribe.useMutation();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    try {
      const result = await subscribeMutation.mutateAsync({ email, firstName });
      if (result.alreadySubscribed) {
        toast.info("You're already in the Orbit!");
      } else {
        setShowSuccess(true);
        setEmail("");
        setFirstName("");
        // Hide success message after 5 seconds
        setTimeout(() => setShowSuccess(false), 5000);
      }
    } catch (error: any) {
      toast.error(error.message || "Failed to subscribe. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <nav className="mx-auto max-w-6xl px-4 sm:px-8 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 font-semibold text-base tracking-tight">
            <img src="/lunacy-logo.png" alt="Lunacy Media" className="w-6 h-6" />
            <span>Lunacy</span>
          </a>
          <div className="flex gap-8 items-center text-sm">
            <a href="/about" className="hover:text-[#d4af37] transition duration-200">
              About
            </a>
            <a href="#projects" className="hover:text-[#d4af37] transition duration-200">
              Projects
            </a>
            <a href="#contact" className="hover:text-[#d4af37] transition duration-200">
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://private-us-east-1.manuscdn.com/sessionFile/ng4bi4XYYFsDp79XjIAkYH/sandbox/dBZIR6p2Lb5BmnxoodTkkJ-img-1_1771205401000_na1fn_aGVyby1taW5pbWFsLWxpZ2h0.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvbmc0Ymk0WFlZRnNEcDc5WGpJQWtZSC9zYW5kYm94L2RCWklSNnAyTGI1Qm1ueG9vZFRra0otaW1nLTFfMTc3MTIwNTQwMTAwMF9uYTFmbl9hR1Z5YnkxdGFXNXBiV0ZzTFd4cFoyaDAucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=kUts-KyZE4BlvS5Kt-dfycNXM-Mt43xLZ4y6NJG47gRO8z0DgO-Zz9EgdK854b0imV2bAyY8Sln4ks6X8pCFZSibaVZ4JBxT~2cNrOl7MuN6jCQcQcygBcthP-B859C9SlrZS6iV0611tf~S68xrnfdzI8zqxmOae7oRc~-RgxALSvudvseD4agEkZLod7jc4v6FjNX7uVqPfbTqEXeafYw1radQ2H0BcqX8oKnQ~ZcEmGzRofaynJG9sMEMK8GDMRbRqGjO0iJA~TzHC3Byxw~Z9JInmwdl9KO9VV-Y~WuYe8P4jKL~jeSd20ZAcq~jliUzWAiNrpD9l4tTmFAntA__')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background"></div>

        <div className="relative mx-auto max-w-5xl px-4 sm:px-8 py-40 text-center">
          <p className="text-xs uppercase tracking-widest text-muted mb-6 font-medium">
            Your Forever Endeavour
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-light mb-6 leading-tight tracking-tight">
            Build worlds.<br />Release art.<br />Leave receipts.
          </h1>
          <p className="text-lg text-muted max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Lunacy Media is a multidisciplinary studio building original IP across music, story, and interactive experience. We design worlds first — then translate them into albums, chapters, visuals, and prototypes you can ship, scale, and fund.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button
              className="bg-[#d4af37] text-black font-medium px-8 py-6 rounded-lg hover:bg-[#c9a02d] transition duration-200 shadow-sm"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              Explore Projects <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              className="border-border px-8 py-6 rounded-lg hover:bg-secondary transition duration-200"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="mx-auto max-w-5xl px-4 sm:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-light mb-6 tracking-tight">Studio Overview</h2>
            <p className="text-muted mb-6 leading-relaxed font-light">
              Lunacy Media is an ecosystem: each project strengthens the others. The goal is simple — create work with mythic identity, emotional bite, and real-world deliverables.
            </p>
            <ul className="space-y-4 text-muted text-sm font-light">
              <li className="flex items-start gap-3">
                <span className="text-[#d4af37] mt-1">•</span>
                <span><strong>Original IP pipeline</strong> (music → narrative → visual → interactive)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#d4af37] mt-1">•</span>
                <span><strong>Built for releases + grants</strong> (clear scope, measurable outputs)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#d4af37] mt-1">•</span>
                <span><strong>Collaborator-friendly</strong> (easy entry points for artists, animators, devs)</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-light mb-6 tracking-tight">How to use this site</h2>
              <p className="text-muted mb-6 leading-relaxed font-light">
                This homepage is the map. Each project page is a living dossier — concept, progress, needs, and next drop.
              </p>
              <p className="text-sm text-muted font-light">
                Press, collaborators, or funders:{" "}
                <a href="#contact" className="text-[#d4af37] hover:underline">
                  Get in touch
                </a>
              </p>
            </div>
            <div className="pt-8">
              <p className="text-xs text-muted uppercase tracking-widest font-medium">Based in Toronto • Global scope</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mx-auto max-w-5xl px-4 sm:px-8 py-24 border-t border-border">
        <h2 className="text-3xl font-light mb-16 tracking-tight">What we're building</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* OBEAH Card */}
          <div className="group">
            <div className="mb-4 pb-4 border-b border-border">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-medium">OBEAH</h3>
                <span className="text-xs text-[#d4af37] uppercase tracking-widest font-medium">In production</span>
              </div>
              <p className="text-muted text-sm font-light leading-relaxed">
                Graphic novel development: <em>The Rogue Witch</em>. Chapter pipeline, lore, visuals, and release plan.
              </p>
            </div>
            <a href="/obeah">
              <Button
                variant="ghost"
                className="text-sm font-medium text-[#d4af37] hover:text-[#c9a02d] p-0 h-auto"
              >
                Explore OBEAH →
              </Button>
            </a>
          </div>

          {/* Releases Card */}
          <div className="group">
            <div className="mb-4 pb-4 border-b border-border">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-medium">Lunacy Releases</h3>
                <span className="text-xs text-[#d4af37] uppercase tracking-widest font-medium">In progress</span>
              </div>
              <p className="text-muted text-sm font-light leading-relaxed">
                Singles, arcs, and rollouts — built as chapters of a larger universe, not one-off drops.
              </p>
            </div>
            <a href="/releases">
              <Button
                variant="ghost"
                className="text-sm font-medium text-[#d4af37] hover:text-[#c9a02d] p-0 h-auto"
              >
                See current slate →
              </Button>
            </a>
          </div>

          {/* Interactive Worlds Card */}
          <div className="group">
            <div className="mb-4 pb-4 border-b border-border">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-medium">Interactive Worlds</h3>
                <span className="text-xs text-[#d4af37] uppercase tracking-widest font-medium">In development</span>
              </div>
              <p className="text-muted text-sm font-light leading-relaxed">
                Prototype experiences (TAMMY + beyond) designed for Gen Z clarity and funder-ready deliverables.
              </p>
            </div>
            <a href="/interactive-worlds">
              <Button
                variant="ghost"
                className="text-sm font-medium text-[#d4af37] hover:text-[#c9a02d] p-0 h-auto"
              >
                Collaborate →
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="mx-auto max-w-5xl px-4 sm:px-8 py-24 border-t border-border">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-light mb-6 tracking-tight">Join the Orbit</h2>
          <p className="text-muted mb-12 font-light leading-relaxed">
            No spam. Just progress. Releases, chapters, prototypes, and collaborator calls.
          </p>

          {showSuccess && firstName && (
            <div className="mb-8 p-6 bg-[#d4af37]/10 border border-[#d4af37] rounded-lg animate-in fade-in duration-300">
              <p className="text-lg font-light text-foreground">
                Welcome to the Orbit, <span className="font-medium text-[#d4af37]">{firstName}</span>.
              </p>
              <p className="text-sm text-muted mt-2 font-light">
                Check your email to confirm your subscription. You'll hear from us soon.
              </p>
            </div>
          )}

          <form onSubmit={handleSubscribe} className="flex gap-3 flex-col sm:flex-row">
            <Input
              type="text"
              placeholder="Your name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="bg-secondary border-border text-foreground placeholder:text-muted/60 rounded-lg"
            />
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-secondary border-border text-foreground placeholder:text-muted/60 rounded-lg"
            />
            <Button
              type="submit"
              disabled={subscribeMutation.isPending}
              className="bg-[#d4af37] text-black font-medium px-8 whitespace-nowrap hover:bg-[#c9a02d] transition duration-200 rounded-lg disabled:opacity-50"
            >
              {subscribeMutation.isPending ? "Joining..." : "Join"}
            </Button>
          </form>

          <p className="text-xs text-muted/60 mt-6 font-light">
            Or email us at{" "}
            <a href="mailto:lunacymedia.ca@gmail.com" className="text-[#d4af37] hover:underline">
              lunacymedia.ca@gmail.com
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-secondary/30">
        <div className="mx-auto max-w-5xl px-4 sm:px-8 py-12 flex justify-between items-center flex-wrap gap-4 text-xs text-muted font-light">
          <span>© {new Date().getFullYear()} Lunacy Media</span>
          <span>Your Forever Endeavour</span>
        </div>
      </footer>
    </div>
  );
}
