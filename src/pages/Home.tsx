import { ArrowUpRight, CircleDot, MoonStar, Orbit, Square, Star, Telescope } from 'lucide-react';
import { Link } from 'wouter';
import HeroSection from '../components/HeroSection';
import SEO from '../components/SEO';

const work = [
  {
    title: 'Mulligan',
    type: 'Music / Trilogy',
    text: 'A three-part musical odyssey through identity, memory, and legacy. Mulligan confronts wounds and second chances. Between the Last Letters lives in the space between endings and beginnings. Kalu Ram meditates on ancestry, power, and the stories we inherit.',
  },
  {
    title: 'Obeah',
    type: 'Manga',
    text: 'Magic was never the mystery. History was. Set within Paranoia\'s world, Obeah reimagines folklore, slavery, trauma, and resistance through a supernatural lens.',
  },
  {
    title: 'Tammy',
    type: 'AR / VR Experience',
    text: 'Step inside the mind of propaganda. Part interactive exhibit, part psychological experiment, Tammy is not a lesson. She is an encounter.',
  },
];

const services = [
  ['01', 'Brand Strategy', 'Mythology-driven positioning, archetype identification, brand language, and cultural narrative development.'],
  ['02', 'Visual Identity', 'Logo systems, typography, color architecture, and visual language built to carry meaning across every medium.'],
  ['03', 'Worldbuilding', 'Character systems, lore development, mythology architecture, and narrative universe design.'],
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
    text: 'A three-part musical odyssey through identity, memory, and legacy. Mulligan confronts wounds and second chances. Between the Last Letters inhabits liminal space. Kalu Ram meditates on ancestry, power, and inheritance.',
  },
  {
    number: 'II',
    tag: 'Manga',
    name: 'Obeah',
    theme: 'Reclamation',
    text: 'Magic was never the mystery. History was. Obeah reimagines folklore, slavery, trauma, and resistance through a supernatural lens.',
  },
  {
    number: 'III',
    tag: 'AR / VR Experience',
    name: 'Tammy',
    theme: 'Misinformation',
    text: 'Part interactive exhibit, part psychological experiment. Guided by Tammy herself, visitors navigate memories, symbols, and competing narratives.',
  },
  {
    number: 'IV',
    tag: 'Divination',
    name: 'The Tarot',
    theme: 'Divination',
    text: 'An entire mythology transformed into a divination system for both narrative exploration and spiritual reading.',
  },
];

const process = [
  ['01', 'The Nebula Session', 'A 60 to 90 minute deep dive into your brand, vision, and mythology. We surface what is already forming.', 'Complimentary'],
  ['02', 'Scope and Proposal', 'Based on the Nebula session, we define the tier, deliverables, and timeline. You receive a formal proposal within 48 hours.', 'Includes next steps'],
  ['03', 'The Build', 'Work begins on deposit with milestone reviews, regular check-ins, and two rounds of revisions per deliverable.', 'Neutron or Nova'],
  ['04', 'Delivery and Handoff', 'Final assets are delivered with source files and a 60-day support window.', 'Included'],
];

const why = [
  ['We do not make things. We build worlds.', 'Most studios deliver assets. We deliver mythology, with its own symbols, language, and internal logic.'],
  ['We understand the stories beneath the surface.', 'We look for the archetype living inside your brand and make the invisible visible.'],
  ['We work across disciplines without losing coherence.', 'Music, design, writing, and interactive experience all move from a single creative vision.'],
  ['We were built for the ones who were told no.', 'We do not shrink the vision to fit the container. We build a container worthy of the vision.'],
];

export default function Home() {
  return (
    <div className="site-page">
      <SEO
        title="Lunacy Media | Cosmic Creative Studio in Toronto"
        description="Lunacy Media is a mythology and worldbuilding studio working across brand strategy, music, visual identity, interactive media, and original IP."
        path="/"
      />

      <HeroSection />

      <section className="index-section" id="who-we-are">
        <div className="section-heading">
          <p className="kicker">01 / Who We Are</p>
          <h2>Part creative studio, part storytelling laboratory, part worldbuilding workshop.</h2>
        </div>
        <div className="service-grid">
          <article className="service-panel" style={{ gridColumn: '1 / -1' }}>
            <span>Founder</span>
            <h3>Lunacy Media is a Toronto-based multidisciplinary creative studio founded by Kailash, artist, strategist, and worldbuilder operating under the name Klash.</h3>
            <p>
              We exist at the intersection of mythology, brand strategy, music, visual storytelling, and interactive media. We do not separate these disciplines because the strongest work happens when they speak to each other. We believe the most powerful creative work happens when language, imagery, sound, and structure move as one system.
            </p>
            <p style={{ marginTop: '1rem' }}>
              Lunacy was built for the ones with stories worth telling and no adequate container to hold them. We were built for artists, founders, and organizations who need meaning, not just assets.
            </p>
          </article>
        </div>
      </section>

      <section className="manifesto-section" id="founder">
        <div className="manifesto-mark" aria-hidden="true">
          <Telescope size={92} />
          <Orbit size={160} />
          <MoonStar size={76} />
        </div>
        <div>
          <p className="kicker">The Studio / The Founder</p>
          <h2>Kailash, known as Klash, built Lunacy as a love letter to the inner child.</h2>
        </div>
        <div>
          <p>
            The one who needed to be told his ideas were not crazy. That his whimsical dreams of a moonlit space for the mythical, magical, metaphysical, and marginalized were worth something. Worth everything.
          </p>
          <p style={{ marginTop: '1rem' }}>
            Growing up, he was drawn to the stories beneath the surface. The symbols people carried without realizing it. The myths that shaped cultures. The monsters we feared. The dreams we buried. The questions that lingered long after everyone else seemed satisfied with the answers.
          </p>
          <p style={{ marginTop: '1rem' }}>
            Where others saw fantasy, he saw meaning. Where others saw imagination, he saw possibility. Creativity, to him, has always been a survival mechanism.
          </p>
          <p style={{ marginTop: '1rem' }}>
            What began as a personal pursuit became a larger mission. Artists, founders, and organizations were facing the same challenge: stories worth telling, but no language, no symbols, no world to hold them.
          </p>
        </div>
      </section>

      <section className="cosmic-band" aria-labelledby="framework-title">
        <div className="section-heading">
          <p className="kicker">02 / The Framework</p>
          <h2 id="framework-title">The N-Framework moves from first spark to full conjure.</h2>
        </div>
        <div className="service-grid">
          <article className="service-panel">
            <span>I</span>
            <h3>Nebula</h3>
            <p>The moment of pure potential. Before anything is built, something must be seen. A focused engagement to surface what is already forming.</p>
          </article>
          <article className="service-panel">
            <span>II</span>
            <h3>Neutron</h3>
            <p>The concentrated core. What was sensed becomes structured, named, and durable. Identity built to hold weight.</p>
          </article>
          <article className="service-panel">
            <span>III</span>
            <h3>Nova</h3>
            <p>The full reveal. What was seen is now made real - completely, permanently, undeniably. The full world brought into existence.</p>
          </article>
        </div>
      </section>

      <section className="index-section" id="what-we-do">
        <div className="section-heading">
          <p className="kicker">03 / What We Do</p>
          <h2>Mythology-driven strategy across the disciplines that shape a world.</h2>
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
          <CircleDot size={92} />
          <Orbit size={160} />
          <Telescope size={76} />
        </div>
        <div>
          <p className="kicker">The Lunacy method</p>
          <h2>Less noise. More myth.</h2>
        </div>
        <p>
          We treat every brand like a living system: a moonlit center of gravity with language, visuals, rituals, stories, and digital touchpoints all moving in the same orbit. We do not separate brand from story, or story from structure.
        </p>
        <p>
          The work is part strategy, part symbolism, part emotional intelligence. The result is not just a look, but a world that can hold meaning across every medium.
        </p>
        <Link href="/contact" className="primary-action">
          Book the First Signal
          <ArrowUpRight size={18} aria-hidden="true" />
        </Link>
      </section>

      <section className="index-section" id="universe">
        <div className="section-heading">
          <p className="kicker">04 / The Universe</p>
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

      <section className="index-section" id="process">
        <div className="section-heading">
          <p className="kicker">05 / How We Work</p>
          <h2>The Nebula session, scope, build, and handoff.</h2>
        </div>
        <div className="work-list">
          {process.map(([number, title, text, tag]) => (
            <article className="work-row" key={title}>
              <span className="row-number">{number}</span>
              <span className="row-title">{title}</span>
              <span className="row-type">{tag}</span>
              <span className="row-text">{text}</span>
              <ArrowUpRight size={22} aria-hidden="true" />
            </article>
          ))}
        </div>
      </section>

      <section className="index-section" id="why-lunacy">
        <div className="section-heading">
          <p className="kicker">06 / Why Lunacy</p>
          <h2>We build worlds, understand symbols, and work across disciplines without losing coherence.</h2>
        </div>
        <div className="service-grid">
          {why.map(([title, text]) => (
            <article className="service-panel" key={title}>
              <span>Why</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="manifesto-section">
        <div className="manifesto-mark" aria-hidden="true">
          <MoonStar size={92} />
          <Star size={160} />
          <Square size={76} />
        </div>
        <div>
          <p className="kicker">Closing</p>
          <h2>Every world begins the same way.</h2>
        </div>
        <p>
          Historically, they rumoured us to have been driven mad by the moon. It was quite a nice drive, you should try it sometime.
        </p>
        <p>
          If you&apos;ve ever been told your ideas were too strange, too ambitious, too emotional, too idealistic, or too impossible, this place was built with you in mind.
        </p>
        <Link href="/contact" className="primary-action">
          Begin with Nebula
          <ArrowUpRight size={18} aria-hidden="true" />
        </Link>
      </section>
    </div>
  );
}
