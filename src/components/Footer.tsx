import { Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-lg font-cinzel font-bold text-accent">LUNACY</h3>
            <p className="text-sm text-foreground/60 font-inter">
              Building worlds. Crafting mythology. Creating impact.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-sm font-cinzel font-bold text-foreground">NAVIGATE</h4>
            <ul className="space-y-2 text-sm font-inter text-foreground/60">
              <li><a href="/studio" className="hover:text-accent transition-colors">Studio</a></li>
              <li><a href="/worlds" className="hover:text-accent transition-colors">Worlds</a></li>
              <li><a href="/work" className="hover:text-accent transition-colors">Work</a></li>
              <li><a href="/mythology" className="hover:text-accent transition-colors">Mythology</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-cinzel font-bold text-foreground">CONNECT</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-accent" />
                <a href="mailto:hello@lunacymedia.com" className="text-sm text-foreground/60 hover:text-accent transition-colors font-inter">
                  hello@lunacymedia.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-accent" />
                <a href="tel:+1234567890" className="text-sm text-foreground/60 hover:text-accent transition-colors font-inter">
                  +1 (234) 567-890
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-sm text-foreground/40 font-inter">
          <p>&copy; 2026 Lunacy Media. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
