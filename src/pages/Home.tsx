import { ArrowUpRight, Eclipse, Orbit, Telescope } from 'lucide-react';
import { Link } from 'wouter';
import HeroSection from '../components/HeroSection';
import SEO from '../components/SEO';

const work = [
  {
    title: 'Tammy',
    type: 'Interactive Narrative',
    text: 'A character-led world built around identity, transformation, and emotional discovery.',
  },
  {
    title: 'Obeah',
    type: 'Graphic Novel System',
    text: 'Caribbean mythology, contemporary tension, and a visual language made for expansion.',
  },
  {
    title: 'Mulligan',
    type: 'Brand Identity',
    text: 'A complete signal system for a creative collective moving from concept to culture.',
  },
];

const services = [
  ['01', 'Worldbuilding', 'Narrative strategy, naming, mythology, and identity systems.'],
  ['02', 'Launch Systems', 'Campaign concepts, content direction, decks, and audience pathways.'],
  ['03', 'Digital Presence', 'Websites, art direction, conversion flows, and visual storytelling.'],
];

export default function Home() {
  return (
    <div className="site-page">
      <SEO
        title="Lunacy Media | Creative Studio for Music, Storytelling & Digital Experiences | Toronto, Canada"
        description="Lunacy Media is a Toronto-based creative studio specializing in brand strategy, original IP, multimedia storytelling, and immersive digital experiences."
        path="/"
      />

      <HeroSection />

      <section className="index-section" id="work">
        <div className="section-heading">
          <p className="kicker">Selected constellations</p>
          <h2>Projects with gravity.</h2>
        </div>
        <div className="work-list">
          {work.map((project, index) => (
            <Link href="/work" className="work-row" key={project.title}>
              <span className="row-number">0{index + 1}</span>
              <span className="row-title">{project.title}</span>
              <span className="row-type">{project.type}</span>
              <span className="row-text">{project.text}</span>
              <ArrowUpRight size={22} aria-hidden="true" />
            </Link>
          ))}
        </div>
      </section>

      <section className="cosmic-band" aria-labelledby="services-title">
        <div className="section-heading">
          <p className="kicker">Studio orbit</p>
          <h2 id="services-title">Everything needed to pull a vision into view.</h2>
        </div>
        <div className="service-grid">
          {services.map(([number, title, text]) => (
            <article className="service-panel" key={title}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="manifesto-section">
        <div className="manifesto-mark" aria-hidden="true">
          <Eclipse size={92} />
          <Orbit size={160} />
          <Telescope size={76} />
        </div>
        <div>
          <p className="kicker">The Lunacy method</p>
          <h2>Less noise. More myth.</h2>
        </div>
        <p>
          We treat every brand like a living system: a moonlit center of gravity
          with language, visuals, rituals, stories, and digital touchpoints all
          moving in the same orbit.
        </p>
        <Link href="/contact" className="primary-action">
          Book the First Signal
          <ArrowUpRight size={18} aria-hidden="true" />
        </Link>
      </section>
    </div>
  );
}
