import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'wouter';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: '/studio', label: 'STUDIO' },
    { href: '/worlds', label: 'WORLDS' },
    { href: '/work', label: 'WORK' },
    { href: '/mythology', label: 'MYTHOLOGY' },
    { href: '/contact', label: 'INITIATE' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-b from-charcoal via-charcoal/80 to-transparent backdrop-blur-md border-b border-subtle">
      <div className="container flex items-center justify-between py-6">
        <Link href="/" className="text-2xl font-cinzel font-bold text-accent glow-text-gold hover:text-off-white transition-all duration-300">
          LUNACY
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-inter font-600 text-silver hover:text-accent transition-all duration-300 relative group letter-spacing-wide"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-gold via-gold to-transparent group-hover:w-full transition-all duration-500"></span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-silver hover:text-accent transition-colors duration-300"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-charcoal/95 backdrop-blur-md border-t border-subtle animate-fade-in-down">
          <div className="container py-6 space-y-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-xs font-inter font-600 text-silver hover:text-accent transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
