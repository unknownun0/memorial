'use client';

import { useState } from 'react';

const categories = ['All', 'Memorial Lots', 'Columbary', 'Chapels', 'Park Amenities'];

const galleryItems = [
  {
    src: 'https://i.pinimg.com/736x/8b/2c/e7/8b2ce705d80e3690fa93cf58eba2b945.jpg',
    title: 'Serenity Memorial Garden',
    description: 'A tranquil landscape designed for quiet reflection and lasting peace.',
    category: 'Memorial Lots',
  },
  {
    src: 'https://i.pinimg.com/736x/85/86/99/85869909226e41cbeb57370703da5964.jpg',
    title: 'Heritage Oak Grove',
    description: 'Nestled beneath century-old oak trees offering natural shade and timeless beauty.',
    category: 'Memorial Lots',
  },
  {
    src: 'https://i.pinimg.com/236x/64/67/05/6467059ab1f5c65eff14161be404a86d.jpg',
    title: 'Sunset Meadow',
    description: 'Golden hour views across gently rolling hills.',
    category: 'Memorial Lots',
  },
  {
    src: 'https://i.pinimg.com/736x/04/c1/d8/04c1d872ee54b6dc218663e40a24c2d4.jpg',
    title: 'Aeternum Columbary',
    description: 'Elegant columbarium niches in a serene garden setting.',
    category: 'Columbary',
  },
  {
    src: 'https://i.pinimg.com/1200x/65/f2/6b/65f26b5b9729a58f78f5fd222aa27252.jpg',
    title: 'Memorial Chapel',
    description: 'Non-denominational chapel for religious ceremonies of all faiths.',
    category: 'Chapels',
  },
  {
    src: 'https://i.pinimg.com/1200x/78/10/bb/7810bbd8f51edcfc5ae49e9097b6edba.jpg',
    title: 'Pavilion Garden',
    description: 'Beautiful garden pavilion for family gatherings and events.',
    category: 'Park Amenities',
  },
  {
    src: 'https://i.pinimg.com/736x/47/8f/57/478f57b3ad171660d754455d163a1cb6.jpg',
    title: 'Tranquil Water Feature',
    description: 'Peaceful water features that create a calming atmosphere.',
    category: 'Park Amenities',
  },
  {
    src: 'https://i.pinimg.com/736x/64/50/f8/6450f89b4f1da72af45eba3095c18d47.jpg',
    title: 'Park Amenities',
    description: 'Well-maintained pathways and gardens for quiet reflection.',
    category: 'Park Amenities',
  },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const filtered = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="section-padding" style={{ backgroundColor: '#FFF8F0' }}>
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-gold-600 font-semibold text-sm tracking-widest uppercase">
            Our Memorial Lands
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">
            Explore Our <span className="gold-text-gradient">Sacred Grounds</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Each location is carefully selected and maintained to provide a dignified resting place.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-gold-600 text-white shadow-lg shadow-gold-600/30'
                  : 'bg-white text-gray-600 hover:bg-gold-50 hover:text-gold-600 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {filtered.map((item, i) => (
            <div
              key={i}
              onClick={() => setLightbox(item)}
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <h3 className="text-white text-lg font-bold font-serif mb-1">{item.title}</h3>
                <p className="text-white/70 text-xs">{item.description}</p>
              </div>
              <div className="absolute top-3 right-3">
                <span className="bg-gold-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img src={lightbox.src} alt={lightbox.title} className="w-full h-auto max-h-[75vh] object-contain bg-black" />
            </div>
            <div className="text-white text-center mt-4">
              <h3 className="text-xl font-bold font-serif">{lightbox.title}</h3>
              <p className="text-white/70 text-sm mt-1">{lightbox.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
