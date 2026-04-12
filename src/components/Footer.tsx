import { Link } from 'wouter';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal border-t border-subtle">
      <div className="container py-16 md:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-cinzel font-bold text-accent glow-text-gold">LUNACY</h3>
            <p className="text-sm text-muted font-inter leading-relaxed">
              Building brands, campaigns, and original artistic universes that leave a lasting imprint.
            </p>
          </div>

          {/* Studio */}
          <div className="space-y-4">
            <h4 className="text-sm font-cinzel font-bold text-accent uppercase">Studio</h4>
            <ul className="space-y-3 text-sm text-muted font-inter">
              <li>
                <Link href="/studio" className="hover:text-accent transition-colors duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-accent transition-colors duration-300">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent transition-colors duration-300">
                  Initiate
                </Link>
              </li>
            </ul>
          </div>

          {/* Worlds */}
          <div className="space-y-4">
            <h4 className="text-sm font-cinzel font-bold text-accent uppercase">Worlds</h4>
            <ul className="space-y-3 text-sm text-muted font-inter">
              <li>
                <Link href="/worlds" className="hover:text-accent transition-colors duration-300">
                  Original IP
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors duration-300">
                  Tammy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors duration-300">
                  Obeah
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="text-sm font-cinzel font-bold text-accent uppercase">Connect</h4>
            <ul className="space-y-3 text-sm text-muted font-inter">
              <li>
                <a href="mailto:hello@lunacymedia.ca" className="hover:text-accent transition-colors duration-300">
                  Email
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors duration-300">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors duration-300">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="divider"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 text-xs text-subtle font-inter">
          <p>&copy; {currentYear} Lunacy Media. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-accent transition-colors duration-300">
              Privacy
            </a>
            <a href="#" className="hover:text-accent transition-colors duration-300">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
