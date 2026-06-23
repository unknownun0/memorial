'use client';

const heroImages = [
  'https://i.pinimg.com/1200x/41/3c/69/413c69170ded113b8453e70760939162.jpg',
  'https://i.pinimg.com/1200x/4b/82/11/4b8211ba588bb8afcc861c3daf0f32ad.jpg',
  'https://i.pinimg.com/1200x/4b/82/11/4b8211ba588bb8afcc861c3daf0f32ad.jpg',
];

export default function Hero() {
  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {heroImages.map((img, i) => (
        <div
          key={i}
          className="hero-slide"
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-4 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Honoring Lives,
            <br />
            <span className="gold-text-gradient">Preserving Memories</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Premium memorial lands and compassionate service plans.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-3.5 bg-gold-600 text-white font-semibold rounded-full hover:bg-gold-700 transition-all hover:shadow-xl hover:shadow-gold-600/30 text-sm sm:text-base"
            >
              Get In Touch
            </a>
            <a
              href="#gallery"
              className="px-8 py-3.5 border-2 border-white/40 text-white font-semibold rounded-full hover:bg-white/10 transition-all text-sm sm:text-base"
            >
              View Gallery
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
