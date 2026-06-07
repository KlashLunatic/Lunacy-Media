import { motion } from 'framer-motion';
import { ChevronRight, BookOpen } from 'lucide-react';
import { Link } from 'wouter';
import SEO from '../components/SEO';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 }
};

export default function Journal() {
  const posts = [
    {
      title: 'The Functional Mythology',
      excerpt: 'Why modern brands must move beyond aesthetics and toward deep, symbolic worldbuilding.',
      date: 'June 06, 2026',
      category: 'Philosophy',
      image: '/assets/A00F6157-C5ED-4CE8-91AC-BE8F2DE5F923.png'
    },
    {
      title: 'Finding Your First Signal',
      excerpt: 'The essential elements every artist needs to establish a recognizable cultural presence.',
      date: 'May 24, 2026',
      category: 'Strategy',
      image: '/assets/IMG_0086.JPG'
    },
    {
      title: 'Emotional Truth in Narrative Design',
      excerpt: 'How we used psychological frameworks to build the interactive world of Tammy.',
      date: 'May 10, 2026',
      category: 'Case Study',
      image: '/assets/IMG_0487.PNG'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col pt-16">
      <SEO
        title="Archive | Thought Leadership & Mythic Insights | Lunacy Media"
        description="Explore the Lunacy Media archive. Deep dives into creative mythology, narrative strategy, and the philosophy of worldbuilding."
        path="/archive"
      />

      {/* Hero */}
      <section className="section-padding-lg bg-gradient-to-b from-accent/5 to-void border-b border-subtle relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/IMG_0497.GIF" 
            alt="" 
            className="w-full h-full object-cover opacity-5 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-void/40 via-void/80 to-void"></div>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container max-w-3xl mx-auto text-center space-y-8 relative z-10"
        >
          <h1 className="text-7xl md:text-8xl font-cinzel font-bold text-off-white glow-text-gold">
            Archive
          </h1>
          <p className="text-xl text-muted font-inter font-light leading-relaxed">
            Deep dives into the philosophy of worldbuilding, narrative strategy, and the functional power of mythology.
          </p>
        </motion.div>
      </section>

      {/* Journal Grid */}
      <section className="section-padding-lg bg-void">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {posts.map((post, i) => (
              <motion.div 
                key={i}
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="aspect-[4/5] rounded-sm mb-8 overflow-hidden border border-subtle group-hover:border-accent transition-all duration-700 relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent opacity-60"></div>
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-1 bg-accent/20 border border-accent/30 text-accent text-xs font-inter tracking-widest uppercase font-semibold rounded-full backdrop-blur-sm">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="space-y-6">
                  <p className="text-sm text-subtle font-inter tracking-widest uppercase">{post.date}</p>
                  <h3 className="text-3xl font-cinzel font-bold text-off-white group-hover:text-accent transition-colors duration-500 leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-lg text-muted font-inter font-light leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="inline-flex items-center gap-3 text-accent font-inter font-semibold group-hover:gap-5 transition-all duration-500">
                    Read Entry <ChevronRight size={18} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="section-padding-lg bg-charcoal border-t border-subtle relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-glow rounded-full blur-3xl animate-glow-shift"></div>
        </div>
        <motion.div 
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="container max-w-2xl mx-auto text-center space-y-12 relative z-10"
        >
          <BookOpen className="mx-auto text-accent" size={48} />
          <h2 className="text-5xl font-cinzel font-bold text-off-white">Enter the Archive</h2>
          <p className="text-xl text-muted font-inter font-light leading-relaxed">
            Subscribe to receive our latest mythic insights and strategic updates directly in your orbit.
          </p>
          <form className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="you@example.com"
              className="flex-grow px-6 py-4 bg-void border border-subtle rounded-sm text-off-white font-inter focus:border-accent focus:outline-none transition-all duration-300"
            />
            <button className="btn-primary whitespace-nowrap">Subscribe</button>
          </form>
        </motion.div>
      </section>
    </div>
  );
}
