import { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import CTA from './components/CTA';
import Approach from './components/Approach';
import Work from './components/Work';

import Universe from './components/Universe';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-black text-white">
      <Navigation scrolled={scrolled} />
      <main>
        <Hero />
        <About />
        <Services />
        <CTA />
        <Approach />
        <Work />

        <Universe />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
