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

const audience = [
  'Independent artists and musicians',
  'Creative founders and entrepreneurs',
  'Cultural organizations and nonprofits',
  'Writers, storytellers, and world builders',
  'Small businesses with big visions',
  'Anyone who was told no',
];

const universe = [
  {
    number: 'I',
    tag: 'Music - Trilogy',
    name: 'The Trisomy',
    theme: 'Evolution',
    text: 'A three-part musical odyssey through identity, memory, and legacy. Mulligan. Between the Last Letters. Kalu Ram.',
  },
  {
    number: 'II',
    tag: 'Manga',
    name: 'Obeah',
    theme: 'Reclamation',
    text: 'Magic was never the mystery. History was.',
  },
  {
    number: 'III',
    tag: 'AR / VR Experience',
    name: 'Tammy',
    theme: 'Misinformation',
    text: 'Tammy is not a lesson. She is an encounter.',
  },
  {
    number: 'IV',
    tag: 'Divination',
    name: 'The Tarot',
    theme: 'Divination',
    text: 'An entire mythology transformed into a divination system.',
  },
];

export default function Home() {
  return (
    <div className="site-page">
      <SEO
        title="Lunacy Media | Cosmic Creative Studio in Toronto"
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

      <section className="index-section" aria-labelledby="audience-title">
        <div className="section-heading">
          <p className="kicker">Who we work with</p>
          <h2 id="audience-title">We work with the ones who already know.</h2>
        </div>
        <div className="service-grid">
          {audience.map((item, index) => (
            <article className="service-panel" key={item}>
              <span>0{index + 1}</span>
              <h3>{item}</h3>
              <p>
                {index === 0 && 'People whose work needs a shape that feels as singular as the voice behind it.'}
                {index === 1 && 'Founders who sense the brand should carry meaning, not just momentum.'}
                {index === 2 && 'Groups that need a clearer mythos, not another generic refresh.'}
                {index === 3 && 'Builders of narrative systems that need visual and strategic architecture.'}
                {index === 4 && 'Small teams ready to act like they already have the gravity of a larger world.'}
                {index === 5 && 'Anyone ready to turn an obstacle into a signature.'}
              </p>
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

      <section className="index-section" id="universe">
        <div className="section-heading">
          <p className="kicker">Original IP</p>
          <h2>This is not a portfolio. This is a universe.</h2>
        </div>
        <div className="service-grid">
          {universe.map((project) => (
            <article className="service-panel" key={project.name}>
              <span>{project.number}</span>
              <h3>{project.name}</h3>
              <p>{project.tag}</p>
              <p style={{ marginTop: '1rem' }}>{project.text}</p>
              <p style={{ marginTop: '2rem', color: 'var(--accent)' }}>{project.theme}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
