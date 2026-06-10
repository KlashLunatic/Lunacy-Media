import { Link } from 'wouter';
import Logo from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer" role="contentinfo">
      <Link href="/" aria-label="Lunacy Media home">
        <Logo width="58px" height="72px" className="footer-logo" />
      </Link>
      <p>Copyright {currentYear} Lunacy Media Inc.</p>
      <p>The light of the moon is simply a reflection of the brightest star.</p>
    </footer>
  );
}
