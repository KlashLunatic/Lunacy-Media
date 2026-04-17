import type { FC } from 'react';

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-border">
      <div className="container flex flex-col md:flex-row justify-between items-center py-10">
        <svg
          width="40"
          height="53"
          viewBox="0 0 200 280"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="footer-logo"
        >
          <path d="M 80 20 L 80 120 Q 80 140 100 140 L 140 140" stroke="white" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="150" cy="90" r="35" stroke="white" strokeWidth="16" />
          <path d="M 50 160 L 50 260 L 80 240" stroke="white" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M 100 160 L 100 260" stroke="white" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M 150 160 L 150 260 L 120 240" stroke="white" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
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
