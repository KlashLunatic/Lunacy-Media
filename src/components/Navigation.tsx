import type { FC } from 'react';
import { Link } from 'wouter';
import Logo from './Logo';

interface NavigationProps {
  scrolled: boolean;
}

const Navigation: FC<NavigationProps> = ({ scrolled }) => {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-12 py-6 transition-all duration-300 ${
      scrolled ? 'bg-black/97 border-b border-border' : 'bg-transparent'
    }`} role="navigation" aria-label="Main navigation">
      <Link
        href="/"
        className="nav-logo-link flex items-center justify-center"
        aria-label="Lunacy Media — Home"
      >
        <Logo width="80px" height="100px" className="nav-logo" />
      </Link>

      <ul className="nav-links hidden md:flex gap-12 list-none">
        <li>
          <Link href="/studio" className="nav-link" aria-label="Studio services">
            Studio
          </Link>
        </li>
        <li>
          <Link href="/work" className="nav-link" aria-label="View selected work">
            Work
          </Link>
        </li>
        <li>
          <Link href="/worlds" className="nav-link" aria-label="Explore original worlds">
            Worlds
          </Link>
        </li>
        <li>
          <Link href="/mythology" className="nav-link" aria-label="Our mythology and story">
            Mythology
          </Link>
        </li>
        <li>
          <Link href="/contact" className="nav-link" aria-label="Contact us">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
