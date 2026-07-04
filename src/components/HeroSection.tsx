import { useEffect, useState } from 'react';
import { ArrowUpRight, Moon } from 'lucide-react';
import { Link } from 'wouter';

const phases = [
  ['New Moon', 'Nebula', '/studio'],
  ['Waxing Crescent', 'Identity', '/work'],
  ['First Quarter', 'Campaigns', '/studio'],
  ['Waxing Gibbous', 'Web', '/work'],
  ['Full Moon', 'Worlds', '/worlds'],
  ['Waning Gibbous', 'Mythology', '/mythology'],
  ['Last Quarter', 'Launch', '/contact'],
  ['Waning Crescent', 'Signal', '/contact'],
];

export default function HeroSection() {
  const [activePhase, setActivePhase] = useState(0);
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActivePhase((current) => (current + 1) % phases.length);
    }, 2200);

    return () => window.clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 640px), (prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      return;
    }

    const handleScroll = () => {
      setScrollOffset(Math.min(window.scrollY, 480));
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="cap-hero" aria-labelledby="hero-title">
      <div className="cap-hero-bg" aria-hidden="true" />
      <div className="cap-hero-shell">
        <div className="cap-hero-copy" style={{ transform: `translate3d(0, ${scrollOffset * -0.12}px, 0)` }}>
          <p className="kicker">Your Forever Endeavour</p>
          <h1 id="hero-title">
            The moon teaches us
            <br />
            that sometimes...
            <br />
            it's not just a phase.
          </h1>
          <p className="hero-lede hero-lede-strong" style={{ transform: `translate3d(0, ${scrollOffset * -0.08}px, 0)` }}>
            Brand identity, worldbuilding, and narrative strategy for artists, founders, and organizations who were never meant to be ordinary.
          </p>
          <p className="hero-lede" style={{ transform: `translate3d(0, ${scrollOffset * -0.06}px, 0)` }}>
            Lunacy Media is a mythology and worldbuilding studio for artists, founders, and organizations who were never meant to be ordinary.
          </p>
          <div className="hero-actions">
            <Link href="/contact" className="primary-action">
              Begin with Nebula
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
            <Link href="/work" className="secondary-action">
              View Work
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="cap-hero-menu" aria-label="Lunar cycle navigation">
          <div className="cap-lunar-system" aria-hidden="true">
            <div className="cap-lunar-orbit">
              {phases.map(([label], index) => (
                <span
                  className={`cap-orbit-phase cap-orbit-phase-${index + 1}${index === activePhase ? ' is-active' : ''}`}
                  key={label}
                />
              ))}
            </div>
            <div className="cap-hero-moon">
              <div
                className="cap-hero-moon-core"
                style={{
                  clipPath: `inset(0 ${Math.max(0, 100 - activePhase * 14)}% 0 0 round 999px)`,
                }}
              />
            </div>
          </div>
          <div className="cap-hero-phases">
            {phases.map(([label, theme, href], index) => (
              <Link
                href={href}
                className="cap-phase-link"
                key={label}
                onMouseEnter={() => setActivePhase(index)}
                onFocus={() => setActivePhase(index)}
              >
                <span className="cap-phase-dot">
                  <Moon size={14} aria-hidden="true" />
                </span>
                <span className="cap-phase-label">{theme}</span>
                <small>{label}</small>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="cap-hero-strip" aria-label="Focus areas">
        {['Brand Worlds', 'Campaign Systems', 'Digital Presence', 'Original IP'].map((item, index) => (
          <span key={item}>
            <small>0{index + 1}</small>
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
