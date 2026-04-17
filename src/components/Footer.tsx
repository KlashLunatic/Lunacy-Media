import type { FC } from 'react';

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-border">
      <div className="container flex flex-col md:flex-row justify-between items-center py-10">
        <p className="text-xs font-cinzel tracking-widest text-gold-dim uppercase">
          LUNACY MEDIA
        </p>

        <p className="text-sm font-cormorant italic text-muted my-4 md:my-0">
          Your Forever Endeavour
        </p>

        <p className="text-xs font-cinzel tracking-widest text-muted uppercase">
          © {currentYear} Lunacy Media
        </p>
      </div>
    </footer>
  );
};

export default Footer;
