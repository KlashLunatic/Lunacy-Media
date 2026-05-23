import { useState, type CSSProperties } from 'react';
import { ArrowUpRight, Moon, Sparkles } from 'lucide-react';
import { Link } from 'wouter';

const lunarPhases = [
  { label: 'New Moon', theme: 'Strategy', path: '/studio', mask: '0%' },
  { label: 'Waxing Crescent', theme: 'Identity', path: '/work', mask: '18%' },
  { label: 'First Quarter', theme: 'Campaigns', path: '/studio', mask: '36%' },
  { label: 'Waxing Gibbous', theme: 'Web', path: '/work', mask: '54%' },
  { label: 'Full Moon', theme: 'Worlds', path: '/worlds', mask: '100%' },
  { label: 'Waning Gibbous', theme: 'Mythology', path: '/mythology', mask: '54%' },
  { label: 'Last Quarter', theme: 'Launch', path: '/contact', mask: '36%' },
  { label: 'Waning Crescent', theme: 'Signal', path: '/contact', mask: '18%' },
];

export default function HeroSection() {
  const [activePhase, setActivePhase] = useState(4);

  return (
    <section className="lunar-hero" aria-labelledby="hero-title">
      <div className="starfield" aria-hidden="true" />
      <div className="moon-haze" aria-hidden="true" />

      <div className="hero-shell">
        <div className="hero-copy">
          <p className="kicker">Toronto creative studio for mythic brands</p>
          <h1 id="hero-title">
            Lunacy Media builds brands that move like worlds.
          </h1>
          <p className="hero-lede">
            Strategy, identity, campaigns, websites, and original media systems
            for artists, founders, and organizations with a world to reveal.
          </p>
          <div className="hero-actions" aria-label="Primary actions">
            <Link href="/studio" className="primary-action">
              Start a Project
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
            <Link href="/work" className="secondary-action">
              View Work
              <Sparkles size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="lunar-menu-wrap" aria-label="Lunar cycle navigation">
          <div className="orbit-ring orbit-ring-large" aria-hidden="true" />
          <div className="orbit-ring orbit-ring-small" aria-hidden="true" />
          <div className="hero-moon" aria-hidden="true">
            <div
              className="hero-moon-light"
              style={{ '--moon-mask': lunarPhases[activePhase].mask } as CSSProperties}
            />
          </div>

          <div className="phase-menu">
            {lunarPhases.map((phase, index) => (
              <Link
                key={phase.label}
                href={phase.path}
                className={`phase-node phase-node-${index + 1} ${activePhase === index ? 'active' : ''}`}
                onMouseEnter={() => setActivePhase(index)}
                onFocus={() => setActivePhase(index)}
              >
                <span className="phase-dot">
                  <Moon size={16} aria-hidden="true" />
                </span>
                <span className="phase-label">{phase.theme}</span>
              </Link>
            ))}
          </div>

          <div className="phase-caption">
            <span>{lunarPhases[activePhase].label}</span>
            <strong>{lunarPhases[activePhase].theme}</strong>
          </div>
        </div>
      </div>

      <div className="hero-index" aria-label="Studio focus areas">
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
