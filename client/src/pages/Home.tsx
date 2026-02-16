import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Zap } from "lucide-react";
import { useState } from "react";

/**
 * Design Philosophy: Cosmic Minimalism
 * - Dark background (#07070b) with purple (#b478ff) and gold (#d4af37) accents
 * - Cinzel for headings (classical, mythic), Inter for body (clean, readable)
 * - Glassmorphic cards with subtle borders and shadows
 * - Generous whitespace and vertical rhythm
 * - Status indicators with gradient dots
 */

export default function Home() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail("");
      alert("Welcome to the Orbit!");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/50 backdrop-blur-md">
        <nav className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 font-bold text-lg">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#b478ff] to-[#50c8ff] shadow-lg"></div>
            <span>Lunacy Media</span>
          </a>
          <div className="flex gap-6 items-center">
            <a href="#projects" className="text-sm hover:text-[#b478ff] transition">
              Projects
            </a>
            <a href="#contact" className="text-sm hover:text-[#b478ff] transition">
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              "url('https://private-us-east-1.manuscdn.com/sessionFile/ng4bi4XYYFsDp79XjIAkYH/sandbox/a0FZbT2WMmvIvFoU8CeYif-img-1_1771204834000_na1fn_aGVyby1jb3NtaWM.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvbmc0Ymk0WFlZRnNEcDc5WGpJQWtZSC9zYW5kYm94L2EwRlpiVDJXTW12SXZGb1U4Q2VZaWYtaW1nLTFfMTc3MTIwNDgzNDAwMF9uYTFmbl9hR1Z5YnkxamIzTnRhV00ucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=JfhKWbIbpqtieBAtJ0jXZuF~DJbgyfDNoH7pWYulkxX16I1S4GuLUy4kYGgD322VzMyxcLnokE4u2fOIEZiBudtZEk5tb9s37LCavzG1cxoQyikbGj9UzUZ00ryWNfg2obmFN4tZlSvBFJAh-pbzScJ5SEZdS6M1D3Qz8VfVSG0ofLrZupsldDlqrXAW7dsmEPi26fG7ocJEpujL2UhgH5ZFr2BgwsORU-Xdlc1crGgvZ34Is1Xip~xZI0qEj~3BcMycJRDSdTWqnUf2kEpsebk1D1shT3RRbFVG5Etv5JfmoOUqrRrGjlk6GLINB5IPkK6z56bqZAuf0G99kS-5nw__')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background"></div>

        <div className="relative mx-auto max-w-6xl px-4 py-32 text-center">
          <p className="text-sm uppercase tracking-widest text-muted mb-4">
            Your Forever Endeavour
          </p>
          <h1
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            style={{ fontFamily: "Cinzel, serif" }}
          >
            Build worlds. Release art. Leave receipts.
          </h1>
          <p className="text-lg text-muted max-w-2xl mx-auto mb-8">
            Lunacy Media is a multidisciplinary studio building original IP across{" "}
            <strong>music</strong>, <strong>story</strong>, and{" "}
            <strong>interactive experience</strong>. We design worlds first — then translate them
            into albums, chapters, visuals, and prototypes you can ship, scale, and fund.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button
              className="bg-gradient-to-r from-[#b478ff] to-[#50c8ff] text-black font-semibold px-8 py-6 rounded-lg hover:shadow-lg transition"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              Explore the Universe <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              className="border-border px-8 py-6 rounded-lg hover:bg-card transition"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Work With Lunacy
            </Button>
          </div>
          <p className="text-sm text-muted mt-6">Not a "coming soon." A build log you can follow.</p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid md:grid-cols-7 gap-6">
          <div className="md:col-span-4 border border-border rounded-2xl p-8 bg-card/50 backdrop-blur-sm hover:border-[#b478ff]/50 transition">
            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "Cinzel, serif" }}>
              Studio Overview
            </h2>
            <p className="text-muted mb-4">
              Lunacy Media is an ecosystem: each project strengthens the others. The goal is simple
              — create work with mythic identity, emotional bite, and real-world deliverables.
            </p>
            <ul className="space-y-3 text-muted text-sm">
              <li>
                <strong>Original IP pipeline</strong> (music → narrative → visual → interactive)
              </li>
              <li>
                <strong>Built for releases + grants</strong> (clear scope, measurable outputs)
              </li>
              <li>
                <strong>Collaborator-friendly</strong> (easy entry points for artists, animators,
                devs)
              </li>
            </ul>
            <div className="flex items-center gap-2 mt-6 text-sm">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#b478ff] to-[#d4af37]"></div>
              <span>Toronto-based • global scope</span>
            </div>
          </div>

          <div className="md:col-span-3 border border-border rounded-2xl p-8 bg-card/50 backdrop-blur-sm hover:border-[#b478ff]/50 transition">
            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "Cinzel, serif" }}>
              How to use this site
            </h2>
            <p className="text-muted mb-6">
              This homepage is the map. Each project page is a living dossier — concept, progress,
              needs, and next drop.
            </p>
            <p className="text-sm text-muted">
              Press, collaborators, or funders:{" "}
              <a href="#contact" className="text-[#b478ff] hover:underline">
                Get in touch
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-3xl font-bold mb-12" style={{ fontFamily: "Cinzel, serif" }}>
          What we're building right now
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* OBEAH Card */}
          <div className="border border-border rounded-2xl p-6 bg-card/50 backdrop-blur-sm hover:border-[#b478ff]/50 hover:shadow-lg transition group">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-bold" style={{ fontFamily: "Cinzel, serif" }}>
                OBEAH
              </h3>
              <div className="flex items-center gap-1 text-xs bg-[#b478ff]/10 px-3 py-1 rounded-full border border-[#b478ff]/30">
                <div className="w-1.5 h-1.5 rounded-full bg-[#b478ff]"></div>
                <span>In production</span>
              </div>
            </div>
            <p className="text-muted text-sm mb-6">
              Graphic novel development: <em>The Rogue Witch</em>. Chapter pipeline, lore, visuals,
              and release plan.
            </p>
            <Button
              variant="outline"
              className="w-full border-border hover:border-[#b478ff] hover:text-[#b478ff] transition"
            >
              Explore OBEAH
            </Button>
          </div>

          {/* Releases Card */}
          <div className="border border-border rounded-2xl p-6 bg-card/50 backdrop-blur-sm hover:border-[#b478ff]/50 hover:shadow-lg transition">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-bold" style={{ fontFamily: "Cinzel, serif" }}>
                Lunacy Releases
              </h3>
              <div className="flex items-center gap-1 text-xs bg-[#d4af37]/10 px-3 py-1 rounded-full border border-[#d4af37]/30">
                <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37]"></div>
                <span>In progress</span>
              </div>
            </div>
            <p className="text-muted text-sm mb-6">
              Singles, arcs, and rollouts — built as chapters of a larger universe, not one-off
              drops.
            </p>
            <Button variant="outline" className="w-full border-border hover:border-[#b478ff] hover:text-[#b478ff] transition">
              See current slate
            </Button>
          </div>

          {/* Interactive Worlds Card */}
          <div className="border border-border rounded-2xl p-6 bg-card/50 backdrop-blur-sm hover:border-[#b478ff]/50 hover:shadow-lg transition">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-bold" style={{ fontFamily: "Cinzel, serif" }}>
                Interactive Worlds
              </h3>
              <div className="flex items-center gap-1 text-xs bg-[#50c8ff]/10 px-3 py-1 rounded-full border border-[#50c8ff]/30">
                <div className="w-1.5 h-1.5 rounded-full bg-[#50c8ff]"></div>
                <span>In development</span>
              </div>
            </div>
            <p className="text-muted text-sm mb-6">
              Prototype experiences (TAMMY + beyond) designed for Gen Z clarity and funder-ready
              deliverables.
            </p>
            <Button variant="outline" className="w-full border-border hover:border-[#b478ff] hover:text-[#b478ff] transition">
              Collaborate
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-3xl font-bold mb-12" style={{ fontFamily: "Cinzel, serif" }}>
          Key Benefits
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="border border-border rounded-2xl p-6 bg-card/50 backdrop-blur-sm">
            <div className="text-2xl mb-4">◎</div>
            <h3 className="font-bold mb-2" style={{ fontFamily: "Cinzel, serif" }}>
              Clear IP
            </h3>
            <p className="text-muted text-sm">
              Worldbuilding with recognizable symbols, consistent lore, and repeatable formats.
            </p>
            <p className="text-xs text-muted/60 mt-3">Less "random art." More "franchise DNA."</p>
          </div>

          <div className="border border-border rounded-2xl p-6 bg-card/50 backdrop-blur-sm">
            <div className="text-2xl mb-4">▦</div>
            <h3 className="font-bold mb-2" style={{ fontFamily: "Cinzel, serif" }}>
              Fundable structure
            </h3>
            <p className="text-muted text-sm">
              Projects are written like deliverables: scope, milestones, and proof of progress.
            </p>
            <p className="text-xs text-muted/60 mt-3">Perfect for press kits, grants, and partnerships.</p>
          </div>

          <div className="border border-border rounded-2xl p-6 bg-card/50 backdrop-blur-sm">
            <div className="text-2xl mb-4">⟡</div>
            <h3 className="font-bold mb-2" style={{ fontFamily: "Cinzel, serif" }}>
              Built-in community
            </h3>
            <p className="text-muted text-sm">
              The orbit is the product: supporters follow the build, not just the final drop.
            </p>
            <p className="text-xs text-muted/60 mt-3">Updates, experiments, and calls for collaborators.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="mx-auto max-w-6xl px-4 py-20 mb-20">
        <h2 className="text-3xl font-bold mb-12 text-center" style={{ fontFamily: "Cinzel, serif" }}>
          Join the Orbit
        </h2>

        <div className="max-w-2xl mx-auto border border-border rounded-2xl p-8 bg-card/50 backdrop-blur-sm">
          <p className="text-muted mb-8 text-center">
            No spam. Just progress. Releases, chapters, prototypes, and collaborator calls.
          </p>

          <form onSubmit={handleSubscribe} className="flex gap-3 flex-col sm:flex-row">
            <Input
              type="email"
              placeholder="you@domain.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-input border-border text-foreground placeholder:text-muted/50"
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-gradient-to-r from-[#b478ff] to-[#50c8ff] text-black font-semibold px-8 whitespace-nowrap hover:shadow-lg transition"
            >
              {isSubmitting ? "Joining..." : "Join"}
            </Button>
          </form>

          <p className="text-xs text-muted/60 mt-4 text-center">
            Or email us at{" "}
            <a href="mailto:lunacymedia.ca@gmail.com" className="text-[#b478ff] hover:underline">
              lunacymedia.ca@gmail.com
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/30 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-4 py-8 flex justify-between items-center flex-wrap gap-4 text-sm text-muted">
          <span>© {new Date().getFullYear()} Lunacy Media</span>
          <span>Your Forever Endeavour</span>
        </div>
      </footer>
    </div>
  );
}
