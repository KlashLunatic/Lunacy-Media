import { Link } from 'wouter';
import Logo from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer" role="contentinfo">
      <Link href="/" aria-label="Lunacy Media home">
        <Logo width="58px" height="72px" className="footer-logo" />
      </Link>
      <p>Your Forever Endeavour</p>
      <p>Copyright {currentYear} Lunacy Media. Toronto, Canada.</p>
    </footer>
  );
}
