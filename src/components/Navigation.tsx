import type { FC } from 'react';

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
        className="nav-logo-link"
      >
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="nav-logo"
        >
          <path
            d="M 14 6 L 14 20 Q 14 24 18 24 L 24 24"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <circle cx="32" cy="14" r="6" stroke="white" strokeWidth="3" fill="none" />
          <line x1="8" y1="30" x2="8" y2="42" stroke="white" strokeWidth="3" strokeLinecap="round" />
          <line x1="24" y1="30" x2="24" y2="42" stroke="white" strokeWidth="3" strokeLinecap="round" />
          <line x1="40" y1="30" x2="40" y2="42" stroke="white" strokeWidth="3" strokeLinecap="round" />
        </svg>
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
