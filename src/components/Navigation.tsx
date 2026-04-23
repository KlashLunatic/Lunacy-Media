import type { FC } from 'react';
import Logo from './Logo';

interface NavigationProps {
  scrolled: boolean;
}

const Navigation: FC<NavigationProps> = ({ scrolled }) => {
  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-12 py-6 transition-all duration-300 ${
      scrolled ? 'bg-black/97 border-b border-border' : 'bg-transparent'
    }`}>
      <a
        href="#hero"
        onClick={(e) => {
          e.preventDefault();
          handleNavClick('hero');
        }}
        className="nav-logo-link flex items-center justify-center"
      >
        <Logo width="80px" height="100px" className="nav-logo" style={{ filter: 'drop-shadow(0 0 0 transparent)' }} />
      </a>

      <ul className="nav-links hidden md:flex gap-12 list-none">
        <li>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('about');
            }}
            className="nav-link"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('services');
            }}
            className="nav-link"
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="#work"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('work');
            }}
            className="nav-link"
          >
            Work
          </a>
        </li>
        <li>
          <a
            href="#universe"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('universe');
            }}
            className="nav-link"
          >
            Universe
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('contact');
            }}
            className="nav-link"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
