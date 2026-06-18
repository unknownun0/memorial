'use client';

const galleryItems = [
  {
    src: 'https://i.pinimg.com/736x/7c/d9/7b/7cd97b7797b9c5c9756925c7089cd53f.jpg',
    title: 'Serenity Memorial Garden',
    description: 'A tranquil landscape designed for quiet reflection and lasting peace, surrounded by lush greenery and blooming gardens.',
  },
  {
    src: 'https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?auto=format&fit=crop&w=800&q=80',
    title: 'Heritage Oak Grove',
    description: 'Nestled beneath century-old oak trees, this sacred space offers natural shade and timeless beauty for generations.',
  },
  {
    src: 'https://images.unsplash.com/photo-1440581571452-82ccc2c0e7d6?auto=format&fit=crop&w=800&q=80',
    title: 'Sunset Meadow',
    description: 'Golden hour views across gently rolling hills create a peaceful atmosphere that honors a life well-lived.',
  },
  {
    src: 'https://images.unsplash.com/photo-1504198266287-1659872e6590?auto=format&fit=crop&w=800&q=80',
    title: 'Lakeview Memorial Park',
    description: 'Serene waterfront memorial sites with panoramic lake views, offering a calming presence for visiting families.',
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
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

        <hr className="border-t border-gray-200 mb-8" />
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          <div className="md:w-1/2">
            <div className="aspect-[4/3] overflow-hidden rounded-xl">
              <img
                src={galleryItems[0].src}
                alt={galleryItems[0].title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="hidden md:block w-px bg-gray-200" />
          <div className="md:w-1/2 space-y-6">
            {galleryItems.map((item, i) => (
              <div key={i}>
                {i < 2 && (
                  <span className="text-gold-600 text-xs font-bold tracking-widest uppercase">
                    - Featured
                  </span>
                )}
                <div className="mt-1">
                  <h3 className="text-lg font-bold text-gray-900 font-serif">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mt-1">
                    {item.description}
                  </p>
                </div>
                {i < galleryItems.length - 1 && <hr className="border-t border-gray-100 mt-4" />}
              </div>
            ))}
          </div>
        </div>
        <hr className="border-t border-gray-200 mt-8" />
      </div>
    </section>
  );
}
