import { ArrowUpRight, CircleDot, MoonStar, Orbit, Square, Star, Telescope } from 'lucide-react';
import { Link } from 'wouter';
import HeroSection from '../components/HeroSection';
import SEO from '../components/SEO';

const services = [
  ['I', 'Nebula', 'Creation · The Awakening', 'The moment of pure potential. Before anything is built, something must be seen. A focused engagement to surface what is already forming within your work, your brand, and your vision.', 'From $150'],
  ['II', 'Neutron', 'Preservation · The Illumination', 'The concentrated core. What was sensed becomes structured, named, and durable. Identity built to hold weight — and hold attention.', 'From $2,500'],
  ['III', 'Nova', 'Purification · The Conjure', 'The full reveal. What was seen is now made real — completely, permanently, undeniably. The complete ecosystem of identity, mythology, characters, and cultural strategy brought into existence.', 'From $10,000'],
  ['IV', 'Orbit', 'Creative Direction Retainer · The ongoing cycle', 'Consistent creative direction for artists and brands that need an ongoing presence in the world.', 'From $750/month'],
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
    text: 'Tammy is not a lesson. She\'s an encounter.',
  },
  {
    number: 'IV',
    tag: 'Divination',
    name: 'The Tarot',
    theme: 'Information',
    text: 'An entire mythology transformed into a divination system.',
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

      <section className="cosmic-band" aria-labelledby="framework-title">
        <span className="section-ghost" aria-hidden="true">02</span>
        <div className="section-heading">
          <p className="kicker">02 / The Framework</p>
          <h2 id="framework-title">We work in three movements.</h2>
        </div>
        <div className="service-grid framework-grid">
          {services.map(([number, title, subtitle, text, price]) => (
            <article className="service-panel" key={title}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{subtitle}</p>
              <p>{text}</p>
              <p style={{ marginTop: '2rem', color: 'var(--accent)' }}>{price}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="index-section" aria-labelledby="audience-title">
        <span className="section-ghost" aria-hidden="true">03</span>
        <div className="section-heading">
          <p className="kicker">03 / Who We Work With</p>
          <h2 id="audience-title">We work with the ones who already know.</h2>
        </div>
        <div style={{ marginBottom: '2rem', maxWidth: '48rem' }}>
          <p style={{ color: 'var(--bone)', lineHeight: 1.8 }}>
            Artists who sense their work is bigger than its current container. Founders who feel their brand is missing its soul. Organizations ready to stop communicating and start meaning something.
          </p>
          <p style={{ color: 'var(--bone)', lineHeight: 1.8, marginTop: '1rem' }}>
            If you&apos;ve ever felt like the vision in your head has never fully existed in the world - that&apos;s why Lunacy exists.
          </p>
        </div>
        <div className="service-grid audience-grid">
          {audience.map((item, index) => (
            <article className="service-panel fade-up audience-panel" key={item} style={{ transitionDelay: `${index * 80}ms` }}>
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
        <span className="section-ghost" aria-hidden="true">04</span>
        <div className="manifesto-mark" aria-hidden="true">
          <CircleDot size={92} />
          <Orbit size={160} />
          <Telescope size={76} />
        </div>
        <div>
          <p className="kicker">04 / The Universe</p>
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

      <section className="manifesto-section" id="founder">
        <span className="section-ghost" aria-hidden="true">05</span>
        <div className="manifesto-mark" aria-hidden="true">
          <MoonStar size={92} />
          <Star size={160} />
          <Square size={76} />
        </div>
        <div>
          <p className="kicker">05 / About</p>
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
        <span className="section-ghost" aria-hidden="true">06</span>
        <div className="manifesto-mark" aria-hidden="true">
          <MoonStar size={92} />
          <Star size={160} />
          <Square size={76} />
        </div>
        <div>
          <p className="kicker">06 / Closing</p>
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
