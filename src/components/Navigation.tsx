import type { FC } from 'react';
import { Link, useLocation } from 'wouter';
import { motion } from 'framer-motion';
import Logo from './Logo';

interface NavigationProps {
  scrolled: boolean;
}

const Navigation: FC<NavigationProps> = ({ scrolled }) => {
  const [location] = useLocation();

  const navLinks = [
    { name: 'Studio', href: '/studio' },
    { name: 'Work', href: '/work' },
    { name: 'Worlds', href: '/worlds' },
    { name: 'Mythology', href: '/mythology' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-12 py-6 transition-all duration-300 ${
      scrolled ? 'bg-black/97 border-b border-border' : 'bg-transparent'
    }`} role="navigation" aria-label="Main navigation">
      <Link
        href="/"
        className="nav-logo-link flex items-center justify-center"
        aria-label="Lunacy Media — Home"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Logo width="80px" height="100px" className="nav-logo" />
        </motion.div>
      </Link>

      <ul className="nav-links hidden md:flex gap-12 list-none">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>
              <a className={`nav-link relative py-2 ${location === link.href ? 'text-accent' : 'text-off-white hover:text-accent'} transition-colors duration-300`}>
                {link.name}
                {location === link.href && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 right-0 h-px bg-accent"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
