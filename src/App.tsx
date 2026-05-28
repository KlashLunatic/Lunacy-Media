import { lazy, Suspense, useEffect, useState } from 'react';
import { Route, Switch, useLocation } from 'wouter';
import { AnimatePresence } from 'framer-motion';
import PageTransition from './components/PageTransition';
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
  const [location] = useLocation();

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
  }, [location]);

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
          <AnimatePresence mode="wait">
            <Switch key={location}>
              <Route path="/">
                <PageTransition>
                  <Home />
                </PageTransition>
              </Route>
              <Route path="/contact">
                <PageTransition>
                  <Contact />
                </PageTransition>
              </Route>
              <Route path="/studio">
                <PageTransition>
                  <Studio />
                </PageTransition>
              </Route>
              <Route path="/work">
                <PageTransition>
                  <Work />
                </PageTransition>
              </Route>
              <Route path="/worlds">
                <PageTransition>
                  <Worlds />
                </PageTransition>
              </Route>
              <Route path="/mythology">
                <PageTransition>
                  <Mythology />
                </PageTransition>
              </Route>
              <Route>
                <PageTransition>
                  <NotFound />
                </PageTransition>
              </Route>
            </Switch>
          </AnimatePresence>
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}

export default App;
