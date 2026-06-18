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

        <div className="grid md:grid-cols-2 gap-8">
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500"
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
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <h3 className="text-white text-xl font-bold font-serif mb-2">{item.title}</h3>
                <p className="text-white/80 text-sm">{item.description}</p>
              </div>
              <div className="absolute top-4 left-4">
                <span className="bg-white/90 text-gray-900 text-xs font-bold px-3 py-1 rounded-full">
                  Featured
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
