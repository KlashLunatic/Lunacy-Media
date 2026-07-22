import { ArrowUpRight, CircleDot, MoonStar, Orbit, Square, Star, Telescope } from 'lucide-react';
import { Link } from 'wouter';
import HeroSection from '../components/HeroSection';
import SEO from '../components/SEO';

const mythosEngine = [
  {
    label: 'What We Do',
    title: 'Fragmented visions become worlds.',
    text: 'We turn scattered ideas, symbols, stories, images, songs, and instincts into worlds people can recognize, repeat, and believe in.',
  },
  {
    label: 'How It Works',
    title: 'Meaning becomes a system.',
    text: 'Through mythos strategy, symbolic systems, visual architecture, naming, campaign language, and launchable narrative assets.',
  },
  {
    label: 'What You Get',
    title: 'Artifacts with gravity.',
    text: 'A mythos map, narrative framework, visual world rules, campaign language, content architecture, and assets built for web, social, pitch, and audience engagement.',
  },
];

const services = [
  {
    number: 'I',
    title: 'Nebula',
    subtitle: 'Mythos Audit - The Awakening',
    text: 'A focused 60 to 90 minute diagnosis for the thing that keeps circling your work. We surface the core myth, the gaps in the container, and the clearest next move.',
    price: 'From $150',
    deliverables: 'Mythos diagnosis / opportunity map / next-step recommendation',
  },
  {
    number: 'II',
    title: 'Neutron',
    subtitle: 'Narrative System - The Illumination',
    text: 'The concentrated core. Your identity, story pillars, symbolic language, audience belief map, voice, and campaign logic become structured enough to hold weight.',
    price: 'From $2,500',
    deliverables: 'Positioning / language system / symbolic architecture',
  },
  {
    number: 'III',
    title: 'Nova',
    subtitle: 'World Build - The Conjure',
    text: 'The full reveal. A complete ecosystem of identity, mythology, visual rules, characters, launch strategy, and cultural narrative brought into existence.',
    price: 'From $10,000',
    deliverables: 'World bible / campaign architecture / launchable creative system',
  },
  {
    number: 'IV',
    title: 'Orbit',
    subtitle: 'Ongoing Creative Direction - The Continuing Cycle',
    text: 'For worlds that need to keep moving after launch. Monthly creative direction, narrative stewardship, content guidance, and strategic refinement beyond the three movements.',
    price: 'From $750/month',
    deliverables: 'Retainer direction / content rhythm / world stewardship',
  },
];

const pathways = [
  {
    label: 'For Artists',
    title: 'Give the release a world around it.',
    text: 'Album mythology, rollout language, visual rules, audience rituals, content arcs, and the symbolic thread that makes a body of work feel unavoidable.',
  },
  {
    label: 'For Founders',
    title: 'Build a brand people can believe in.',
    text: 'Positioning, naming, origin language, pitch narrative, brand voice, and the deeper meaning that turns a product into a movement.',
  },
  {
    label: 'For Storytellers',
    title: 'Turn lore into architecture.',
    text: 'Character logic, world rules, narrative systems, format strategy, audience entry points, and story bibles that can survive expansion.',
  },
  {
    label: 'For Organizations',
    title: 'Make the mission felt.',
    text: 'Campaign language, cultural narrative, symbolic systems, stakeholder storytelling, and experiences that help people understand why the work matters.',
  },
];

const universe = [
  {
    number: 'I',
    tag: 'Music - Trilogy',
    name: 'The Trisomy',
    theme: 'Evolution',
    text: 'A three-part musical odyssey exploring identity, memory, and legacy. Mulligan. Between the Last Letters. Kalu Ram. A mythic autobiography told through hip-hop, poetry, and worldbuilding.',
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
    theme: 'Information',
    text: 'An entire mythology transformed into a divination system.',
  },
];

const clientSystems = [
  {
    label: 'Mythos Map',
    title: 'A living diagram of the world.',
    text: 'The belief, symbols, audience, language, tensions, and recurring motifs that give the work a repeatable center.',
  },
  {
    label: 'Lore Bible',
    title: 'Rules for expansion.',
    text: 'A source document for character, story, visual tone, rituals, terminology, and the lines the world should never cross.',
  },
  {
    label: 'Campaign Arc',
    title: 'Launch as narrative.',
    text: 'A phased rollout that turns announcements, social content, visuals, and audience moments into one unfolding story.',
  },
  {
    label: 'Identity System',
    title: 'Meaning made visible.',
    text: 'Naming, voice, visual references, symbolic logic, and strategic direction for the assets people will actually encounter.',
  },
];

export default function Home() {
  return (
    <div className="site-page">
      <SEO
        title="Lunacy Media | Mythology & Worldbuilding Studio"
        description="Lunacy Media is a mythology and worldbuilding studio for artists, founders, and organizations who were never meant to be ordinary. Toronto-based. Universe-minded."
        path="/"
      />

      <HeroSection />

      <section className="index-section" id="who-we-are">
        <span className="section-ghost" aria-hidden="true">01</span>
        <div className="section-heading">
          <p className="kicker">01 / Who We Are</p>
          <h2>Part creative studio, part storytelling laboratory, part worldbuilding workshop.</h2>
        </div>
        <div className="service-grid who-grid">
          <article className="service-panel" style={{ gridColumn: '1 / -1' }}>
            <span>Studio</span>
            <h3>Lunacy Media is a Toronto-based multidisciplinary creative studio founded by Klash, artist, strategist, and worldbuilder.</h3>
            <p>
              We exist at the intersection of mythology, brand strategy, music, visual storytelling, and interactive media. We do not separate these disciplines because the strongest work happens when they speak to each other. We believe language, imagery, sound, and structure should move as one system.
            </p>
            <p style={{ marginTop: '1rem' }}>
              Lunacy was built for the ones with stories worth telling and no adequate container to hold them. We were built for artists, founders, and organizations who need meaning, not just assets.
            </p>
          </article>
        </div>
      </section>

      <section className="index-section mythos-engine" aria-labelledby="mythos-engine-title">
        <span className="section-ghost" aria-hidden="true">02</span>
        <div className="section-heading">
          <p className="kicker">02 / Mythos Engine</p>
          <h2 id="mythos-engine-title">Poetry has to become something you can use.</h2>
        </div>
        <div className="service-grid engine-grid">
          {mythosEngine.map((item) => (
            <article className="service-panel" key={item.label}>
              <span>{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cosmic-band" aria-labelledby="framework-title">
        <span className="section-ghost" aria-hidden="true">03</span>
        <div className="section-heading">
          <p className="kicker">03 / The Framework</p>
          <h2 id="framework-title">Three movements, plus the orbit that keeps them alive.</h2>
        </div>
        <div className="service-grid framework-grid">
          {services.map((service) => (
            <article className="service-panel" key={service.title}>
              <span>{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.subtitle}</p>
              <p>{service.text}</p>
              <p className="service-deliverables">{service.deliverables}</p>
              <p style={{ marginTop: '2rem', color: 'var(--accent)' }}>{service.price}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="index-section" aria-labelledby="audience-title">
        <span className="section-ghost" aria-hidden="true">04</span>
        <div className="section-heading">
          <p className="kicker">04 / Who We Work With</p>
          <h2 id="audience-title">We work with the ones who already know.</h2>
        </div>
        <div style={{ marginBottom: '2rem', maxWidth: '48rem' }}>
          <p style={{ color: 'var(--bone)', lineHeight: 1.8 }}>
            Artists who sense their work is bigger than its current container. Founders who feel their brand is missing its soul. Organizations ready to stop communicating and start meaning something.
          </p>
          <p style={{ color: 'var(--bone)', lineHeight: 1.8, marginTop: '1rem' }}>
            If you&apos;ve ever felt like the vision in your head has never fully existed in the world, that&apos;s why Lunacy exists.
          </p>
        </div>
        <div className="service-grid audience-grid pathway-grid">
          {pathways.map((item, index) => (
            <article className="service-panel fade-up audience-panel" key={item.label} style={{ transitionDelay: `${index * 80}ms` }}>
              <span>{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="manifesto-section">
        <span className="section-ghost" aria-hidden="true">05</span>
        <div className="manifesto-mark" aria-hidden="true">
          <CircleDot size={92} />
          <Orbit size={160} />
          <Telescope size={76} />
        </div>
        <div>
          <p className="kicker">05 / The Universe</p>
          <h2>This is not a portfolio. This is a universe.</h2>
        </div>
        <p>
          Lunacy Media uses art and mixed media as a conduit to help create immersive worlds that evolve into legends told across time, format, and audience.
        </p>
      </section>

      <section className="index-section" id="universe">
        <div className="service-grid">
          {universe.map((project) => (
            <article className="service-panel fade-up universe-panel" key={project.name}>
              <span>{project.number}</span>
              <h3>{project.name}</h3>
              <p>{project.tag}</p>
              <p style={{ marginTop: '1rem' }}>{project.text}</p>
              <p style={{ marginTop: '2rem', color: 'var(--accent)' }}>{project.theme}</p>
            </article>
          ))}
        </div>
        <p style={{ marginTop: '2rem', color: 'var(--bone)', lineHeight: 1.8 }}>
          One Sister remains unrevealed. The universe is still expanding.
        </p>
      </section>

      <section className="index-section built-worlds" aria-labelledby="built-worlds-title">
        <span className="section-ghost" aria-hidden="true">06</span>
        <div className="section-heading">
          <p className="kicker">06 / Built Worlds</p>
          <h2 id="built-worlds-title">Here is how that becomes yours.</h2>
        </div>
        <div className="service-grid proof-grid">
          {clientSystems.map((item) => (
            <article className="service-panel" key={item.label}>
              <span>{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="manifesto-section" id="founder">
        <span className="section-ghost" aria-hidden="true">07</span>
        <div className="manifesto-mark" aria-hidden="true">
          <MoonStar size={92} />
          <Star size={160} />
          <Square size={76} />
        </div>
        <div>
          <p className="kicker">07 / About</p>
          <h2>Klash</h2>
        </div>
        <div>
          <p style={{ color: 'var(--accent)', marginBottom: '1rem' }}>Founder, Lunacy Media</p>
          <p>Lunacy Media is a love letter to the inner child in all of us.</p>
          <p style={{ marginTop: '1rem' }}>
            The one who needed to be told his ideas weren&apos;t crazy. That his whimsical dreams of some moonlit space for the mythical, magical, metaphysical, and marginalized were worth something. Worth everything.
          </p>
          <p style={{ marginTop: '1rem' }}>
            Growing up, I was drawn to the stories beneath the surface. The symbols people carried without realizing it. The myths that shaped cultures. The monsters we feared. The dreams we buried. The questions that lingered long after everyone else seemed satisfied with the answers.
          </p>
          <p style={{ marginTop: '1rem' }}>Where others saw fantasy, I saw meaning. Where others saw imagination, I saw possibility.</p>
          <p style={{ marginTop: '1rem' }}>
            Lunacy was born from the belief that creativity is not a luxury - it is a survival mechanism. Art has always been one of humanity&apos;s oldest forms of magic: the ability to take an idea that exists nowhere else and make it real enough for others to experience.
          </p>
          <p style={{ marginTop: '1rem' }}>
            What began as a personal pursuit became a larger mission. Artists, founders, and organizations were facing the same challenge - stories worth telling, but no language, no symbols, no world to hold them. They weren&apos;t looking for another logo or another campaign.
          </p>
          <p style={{ marginTop: '1rem' }}>They were searching for meaning. That is where Lunacy Media lives.</p>
          <p style={{ marginTop: '1rem' }}>
            If you&apos;ve ever been told your ideas were too strange, too ambitious, too emotional, too idealistic, or too impossible - this place was built with you in mind.
          </p>
          <p style={{ marginTop: '1rem' }}>Welcome to Lunacy.</p>
        </div>
      </section>

      <section className="manifesto-section">
        <div />
        <div>
          <p>
            Historically, they rumoured us to have been driven mad by the moon.
          </p>
          <p style={{ marginTop: '1rem' }}>
            It was quite a nice drive, you should try it sometime.
          </p>
          <p style={{ color: 'var(--accent)', marginTop: '1.5rem' }}>- Klash The Lunatic</p>
        </div>
        <div />
      </section>

      <section className="manifesto-section">
        <span className="section-ghost" aria-hidden="true">08</span>
        <div className="manifesto-mark" aria-hidden="true">
          <MoonStar size={92} />
          <Star size={160} />
          <Square size={76} />
        </div>
        <div>
          <p className="kicker">08 / Closing</p>
          <h2>Every world begins the same way.</h2>
        </div>
        <div>
          <p>A feeling. A question. A vision that refuses to stay quiet.</p>
          <p style={{ marginTop: '1rem' }}>If something brought you here - trust it.</p>
          <p style={{ marginTop: '1rem' }}>The stars have aligned.</p>
          <Link href="/contact" className="primary-action">
            Begin with Nebula
            <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
