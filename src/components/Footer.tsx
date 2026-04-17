import type { FC } from 'react';

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-border">
      <div className="container flex flex-col md:flex-row justify-between items-center py-10">
        <svg
          width="40"
          height="40"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="footer-logo"
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

        <p className="text-sm font-cormorant italic text-muted my-4 md:my-0">
          Your Forever Endeavour
        </p>

        <p className="text-xs font-cinzel tracking-widest text-muted uppercase">
          © {currentYear} Lunacy Media
        </p>
      </div>
    </footer>
  );
};

export default Footer;
