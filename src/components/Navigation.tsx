import { Link } from 'wouter';
import Logo from './Logo';

interface NavigationProps {
  scrolled: boolean;
}

const navItems = [
  ['Studio', '/studio'],
  ['Work', '/work'],
  ['Worlds', '/worlds'],
  ['Mythology', '/mythology'],
  ['Contact', '/contact'],
];

export default function Navigation({ scrolled }: NavigationProps) {
  return (
    <nav className={scrolled ? 'main-nav scrolled' : 'main-nav'} role="navigation" aria-label="Main navigation">
      <Link href="/" className="nav-logo-link" aria-label="Lunacy Media home">
        <Logo width="58px" height="72px" className="nav-logo" />
      </Link>

      <ul className="nav-links">
        {navItems.map(([label, href]) => (
          <li key={href}>
            <Link href={href} className="nav-link">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
