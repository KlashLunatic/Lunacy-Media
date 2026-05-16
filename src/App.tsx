import { lazy, Suspense, useEffect, useState } from 'react';
import { Route, Switch } from 'wouter';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import './index.css';

// Lazy-loaded page components for route-based code splitting
const Home = lazy(() => import('./pages/Home'));
const Contact = lazy(() => import('./pages/Contact'));
const Studio = lazy(() => import('./pages/Studio'));
const Work = lazy(() => import('./pages/Work'));
const Worlds = lazy(() => import('./pages/Worlds'));
const Mythology = lazy(() => import('./pages/Mythology'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-black text-white">
      {/* Skip to main content — accessibility */}
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      <Navigation scrolled={scrolled} />

      <main id="main-content">
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center bg-void">
            <div className="text-accent font-cinzel text-lg tracking-widest animate-pulse">Loading...</div>
          </div>
        }>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/studio" component={Studio} />
            <Route path="/work" component={Work} />
            <Route path="/worlds" component={Worlds} />
            <Route path="/mythology" component={Mythology} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}

export default App;
