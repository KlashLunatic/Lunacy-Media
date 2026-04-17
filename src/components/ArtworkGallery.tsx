import type { FC } from 'react';

const ArtworkGallery: FC = () => {
  const artworks = [
    {
      id: 1,
      title: 'Moon Balloon',
      image: 'https://lunacy-media-assets.s3.amazonaws.com/artwork-moon-balloon.png',
      description: 'A contemplative moment of reaching for the infinite'
    },
    {
      id: 2,
      title: 'Mind Moon',
      image: 'https://lunacy-media-assets.s3.amazonaws.com/artwork-mind-moon.png',
      description: 'The moon as a symbol of inner consciousness'
    },
    {
      id: 3,
      title: 'Golden Moon',
      image: 'https://lunacy-media-assets.s3.amazonaws.com/artwork-golden-moon.png',
      description: 'Celestial reflection and spiritual connection'
    },
    {
      id: 4,
      title: 'Kali',
      image: 'https://lunacy-media-assets.s3.amazonaws.com/artwork-kali.png',
      description: 'The divine feminine: destruction and creation'
    }
  ];

  return (
    <section id="gallery" className="bg-deep border-t border-border">
      <div className="container">
        <div className="section-eyebrow">Gallery</div>
        <h2 className="mb-16">Original Artwork</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {artworks.map((artwork) => (
            <div
              key={artwork.id}
              className="artwork-card group cursor-pointer fade-up"
            >
              <div className="relative overflow-hidden bg-charcoal rounded-sm mb-6 h-96">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="text-lg font-syne font-600 mb-2 text-gold group-hover:text-gold-pale transition-colors">
                {artwork.title}
              </h3>
              <p className="text-sm font-inter text-off-white group-hover:text-white transition-colors">
                {artwork.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center pt-8 border-t border-border">
          <p className="text-muted text-sm font-inter">
            Explore the visual language that shapes Lunacy Media's creative universe
          </p>
        </div>
      </div>
    </section>
  );
};

export default ArtworkGallery;
