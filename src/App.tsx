import { Route, Switch } from 'wouter';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Studio from './pages/Studio';
import Worlds from './pages/Worlds';
import Work from './pages/Work';
import Mythology from './pages/Mythology';
import Contact from './pages/Contact';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/studio" component={Studio} />
          <Route path="/worlds" component={Worlds} />
          <Route path="/work" component={Work} />
          <Route path="/mythology" component={Mythology} />
          <Route path="/contact" component={Contact} />
          <Route>
            <div className="min-h-screen flex items-center justify-center">
              <h1 className="text-4xl font-cinzel">404 - Page Not Found</h1>
            </div>
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
