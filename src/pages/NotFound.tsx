import { Link } from 'wouter';
import { ChevronRight } from 'lucide-react';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col pt-16">
      <SEO
        title="Page Not Found | Lunacy Media"
        description="The page you're looking for doesn't exist. Return to Lunacy Media to explore our creative studio, portfolio, and original worlds."
        path="/404"
      />

      <section className="flex-1 flex items-center justify-center bg-gradient-to-b from-accent/5 to-void relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent-glow rounded-full blur-3xl animate-glow-shift"></div>
          <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-purple-glow rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container max-w-3xl mx-auto text-center space-y-12 relative z-10">
          <div className="space-y-6">
            <h1 className="text-9xl md:text-[12rem] font-cinzel font-bold text-accent/30 leading-none">
              404
            </h1>
            <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-off-white">
              Lost in the Void
            </h2>
            <p className="text-xl text-muted font-inter font-light leading-relaxed max-w-xl mx-auto">
              The page you seek has drifted beyond our universe. Perhaps the story you're looking for begins elsewhere.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 justify-center pt-8">
            <Link href="/" className="btn-primary inline-flex items-center gap-3">
              Return Home <ChevronRight size={22} />
            </Link>
            <Link href="/contact" className="btn-secondary inline-flex items-center gap-3">
              Contact Us <ChevronRight size={22} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
