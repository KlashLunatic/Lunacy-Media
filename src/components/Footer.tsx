import type { FC } from 'react';
import { Link } from 'wouter';
import Logo from './Logo';

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-border" role="contentinfo">
      <div className="container flex flex-col md:flex-row justify-between items-center py-10">
        <Link href="/" aria-label="Lunacy Media — Home">
          <Logo width="80px" height="100px" className="footer-logo" />
        </Link>

        <p className="text-sm font-cormorant italic text-muted my-4 md:my-0">
          Your Forever Endeavour
        </p>

        <p className="text-xs font-cinzel tracking-widest text-muted uppercase">
          © {currentYear} Lunacy Media · Toronto, Ontario, Canada · lunacymedia.ca
        </p>
      </div>
    </footer>
  );
};

export default Footer;
