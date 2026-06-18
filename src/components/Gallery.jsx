'use client';

import { useState } from 'react';

const categories = ['All', 'Memorial Lots', 'Columbary', 'Chapels', 'Park Amenities'];

const galleryItems = [
  {
    src: 'https://i.pinimg.com/736x/7c/d9/7b/7cd97b7797b9c5c9756925c7089cd53f.jpg',
    title: 'Serenity Memorial Garden',
    description: 'A tranquil landscape designed for quiet reflection and lasting peace.',
    category: 'Memorial Lots',
  },
  {
    src: 'https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?auto=format&fit=crop&w=800&q=80',
    title: 'Heritage Oak Grove',
    description: 'Nestled beneath century-old oak trees offering natural shade and timeless beauty.',
    category: 'Memorial Lots',
  },
  {
    src: 'https://images.unsplash.com/photo-1440581571452-82ccc2c0e7d6?auto=format&fit=crop&w=800&q=80',
    title: 'Sunset Meadow',
    description: 'Golden hour views across gently rolling hills.',
    category: 'Park Amenities',
  },
  {
    src: 'https://images.unsplash.com/photo-1504198266287-1659872e6590?auto=format&fit=crop&w=800&q=80',
    title: 'Lakeview Memorial Park',
    description: 'Serene waterfront memorial sites with panoramic lake views.',
    category: 'Park Amenities',
  },
  {
    src: 'https://images.unsplash.com/photo-1468283214096-e8e6f5e6f4b8?auto=format&fit=crop&w=800&q=80',
    title: 'Aeternum Columbary',
    description: 'Elegant columbarium niches in a garden setting.',
    category: 'Columbary',
  },
  {
    src: 'https://images.unsplash.com/photo-1544967082-d9d25d867d66?auto=format&fit=crop&w=800&q=80',
    title: 'Memorial Chapel',
    description: 'Non-denominational chapel for religious ceremonies of all faiths.',
    category: 'Chapels',
  },
  {
    src: 'https://images.unsplash.com/photo-1510797215324-95aa89f43c33?auto=format&fit=crop&w=800&q=80',
    title: 'Pavilion Garden',
    description: 'Beautiful garden pavilion for family gatherings and events.',
    category: 'Park Amenities',
  },
  {
    src: 'https://images.unsplash.com/photo-1586169364769-3e4b6b7f5c5d?auto=format&fit=crop&w=800&q=80',
    title: 'Lawn Lot Section',
    description: 'Simple yet dignified lawn lot memorialization option.',
    category: 'Memorial Lots',
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
