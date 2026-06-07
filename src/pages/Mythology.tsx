import SEO from '../components/SEO';

export default function Mythology() {
  return (
    <div className="site-page">
      <SEO
        title="Mythology | Lunacy Media"
        description="The origin story and mythology behind Lunacy Media, including the founder story and core beliefs that shape the studio."
        path="/mythology"
      />

      <section className="index-section">
        <div className="section-heading">
          <p className="kicker">Mythology</p>
          <h1>The story behind Lunacy Media.</h1>
        </div>
      </section>

      <section className="manifesto-section" id="origin">
        <div>
          <p className="kicker">Origin</p>
          <h2>Lunacy Media began as a place to hold ideas that felt too large for one medium.</h2>
        </div>
        <div>
          <p>
            It started with worldbuilding, music, writing, and visual language moving together instead of living in separate boxes. The studio grew from that instinct into a home for brands, artists, and projects that need meaning, not just output.
          </p>
          <p style={{ marginTop: '1rem' }}>
            The point was never to make things look cosmic for the sake of it. The point was to build a system where story, strategy, and symbolism could actually support each other.
          </p>
        </div>
      </section>

      <section className="manifesto-section" id="about-me">
        <div>
          <p className="kicker">About Me</p>
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

      <section className="manifesto-section" id="beliefs">
        <div>
          <p className="kicker">Core Belief</p>
          <h2>Mythology is not decoration. It is structure.</h2>
        </div>
        <div>
          <p>
            We believe emotional truth has structural power, identity is continuously constructed, and creativity is an evolutionary force. The work only matters when it helps build something that can hold weight over time.
          </p>
          <p style={{ marginTop: '1rem' }}>
            That is why the studio moves across brand strategy, design, music, and worldbuilding without treating any one of them as secondary.
          </p>
        </div>
      </section>
    </div>
  );
}
