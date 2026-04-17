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
          height="64"
          viewBox="0 0 200 280"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="nav-logo"
        >
          <path d="M 80 20 L 80 120 Q 80 140 100 140 L 140 140" stroke="white" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="150" cy="90" r="35" stroke="white" strokeWidth="16" />
          <path d="M 50 160 L 50 260 L 80 240" stroke="white" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M 100 160 L 100 260" stroke="white" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M 150 160 L 150 260 L 120 240" stroke="white" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
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
