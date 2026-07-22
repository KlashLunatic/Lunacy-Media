import { useState } from 'react';
import { Link } from 'wouter';
import { ChevronRight, Sparkles } from 'lucide-react';
import SEO from '../components/SEO';

const dossiers = [
  {
    title: 'The Trisomy',
    category: 'original-ip',
    medium: 'Music - Trilogy',
    fragment: 'A life story split across identity, memory, grief, inheritance, and becoming.',
    insight: 'The albums are not separate releases. They are phases of one mythic autobiography.',
    system: 'Three records become a narrative architecture: Mulligan, Between the Last Letters, and Kalu Ram.',
    artifacts: 'Release language, trilogy structure, symbolic positioning, world vocabulary, and audience entry points.',
    archive: 'A music world designed to hold evolution instead of just promotion.',
  },
  {
    title: 'Obeah',
    category: 'original-ip',
    medium: 'Manga',
    fragment: 'Magic was being treated like spectacle when the deeper force was historical memory.',
    insight: 'The mystery is not whether magic is real. The mystery is what history tried to bury.',
    system: 'A reclamation myth built through character, ancestry, spiritual tension, and a visual language of return.',
    artifacts: 'Lore framework, character logic, tonal rules, issue structure, and mythological positioning.',
    archive: 'A manga world where fantasy becomes a way to confront inheritance.',
  },
  {
    title: 'Tammy',
    category: 'digital',
    medium: 'AR / VR Experience',
    fragment: 'Misinformation often behaves less like a lesson and more like an encounter.',
    insight: 'Tammy should not explain misinformation from a distance. She should make the audience feel its proximity.',
    system: 'An interactive encounter shaped around perspective, trust, distortion, and the unease of not knowing what to believe.',
    artifacts: 'Experience premise, interaction logic, audience journey, educational framing, and prototype narrative.',
    archive: 'A digital story system where information becomes atmosphere.',
  },
  {
    title: 'The Tarot',
    category: 'systems',
    medium: 'Divination / Information',
    fragment: 'A mythology needed a tactile system people could hold, shuffle, ask, and return to.',
    insight: 'Divination can also be information design when every card becomes a structured encounter with meaning.',
    system: 'The Sisters Grim mythology translated into cards, archetypes, interpretations, spreads, and symbolic rules.',
    artifacts: 'Deck architecture, card language, archetype map, ritual prompts, and interpretive framework.',
    archive: 'A world turned into a usable divination system.',
  },
];

const filters = [
  { label: 'All Dossiers', value: 'all' },
  { label: 'Original IP', value: 'original-ip' },
  { label: 'Digital', value: 'digital' },
  { label: 'Systems', value: 'systems' },
];

export default function Work() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = activeFilter === 'all'
    ? dossiers
    : dossiers.filter((project) => project.category === activeFilter);

  return (
    <div className="min-h-screen flex flex-col pt-16">
      <SEO
        title="Selected Work | Lunacy Media Dossiers"
        description="Explore Lunacy Media dossiers across original IP, music, manga, interactive experience, and mythological systems."
        path="/work"
      />

      <section className="section-padding-lg bg-gradient-to-b from-accent/5 to-void border-b border-subtle">
        <div className="container max-w-3xl mx-auto text-center space-y-8">
          <h1 className="text-7xl md:text-8xl font-cinzel font-bold text-off-white glow-text-gold">
            Dossiers
          </h1>
          <p className="text-xl text-muted font-inter font-light leading-relaxed">
            Not empty portfolio doors. These are glimpses into how fragments become systems, artifacts, and worlds.
          </p>
        </div>
      </section>

      <section className="section-padding-sm bg-void border-b border-subtle">
        <div className="container">
          <div className="flex flex-wrap gap-6 justify-center" role="group" aria-label="Filter dossiers by category">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                aria-pressed={activeFilter === filter.value}
                aria-label={`Filter by ${filter.label}`}
                className={`px-6 py-3 rounded-sm font-inter text-sm font-semibold tracking-wide transition-all duration-500 uppercase ${
                  activeFilter === filter.value
                    ? 'bg-gradient-to-r from-gold to-gold-dark text-void shadow-lg shadow-accent/40'
                    : 'border border-subtle text-muted hover:border-accent hover:text-accent'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding-lg bg-void">
        <div className="container work-dossier-list">
          {filtered.map((project, index) => (
            <article className="work-dossier" key={project.title}>
              <div className="work-dossier-mark" aria-hidden="true">
                <Sparkles size={42} />
                <span>{String(index + 1).padStart(2, '0')}</span>
              </div>
              <div className="work-dossier-main">
                <p className="kicker">{project.medium}</p>
                <h2>{project.title}</h2>
                <div className="dossier-grid">
                  <div>
                    <span>The Fragment</span>
                    <p>{project.fragment}</p>
                  </div>
                  <div>
                    <span>The Mythic Insight</span>
                    <p>{project.insight}</p>
                  </div>
                  <div>
                    <span>The System</span>
                    <p>{project.system}</p>
                  </div>
                  <div>
                    <span>The Artifacts</span>
                    <p>{project.artifacts}</p>
                  </div>
                </div>
                <p className="archive-line">{project.archive}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-padding-lg bg-gradient-dark border-t border-subtle relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent-glow rounded-full blur-3xl animate-glow-shift"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-glow rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="container max-w-3xl mx-auto text-center space-y-12 relative z-10">
          <h2 className="text-6xl md:text-7xl font-cinzel font-bold text-off-white">Want yours built with this much intention?</h2>
          <p className="text-xl text-muted font-inter font-light leading-relaxed">
            Start with the mythos brief. We will find the fragment, name the system, and decide what needs to become real first.
          </p>
          <Link href="/contact" className="btn-primary inline-flex items-center gap-3" aria-label="Start a mythos brief with Lunacy Media">
            Begin the Brief <ChevronRight size={22} />
          </Link>
        </div>
      </section>
    </div>
  );
}
