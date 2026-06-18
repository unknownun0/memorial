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
          <div className="inline-block mb-6 px-4 py-1.5 border border-gold-400/40 rounded-full">
            <span className="text-gold-300 text-sm tracking-widest uppercase">Est. Still updating</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Honoring Lives,
            <br />
            <span className="gold-text-gradient">Preserving Memories</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Premium memorial lands and compassionate service plans designed with dignity,
            respect, and timeless elegance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#pricing"
              className="px-8 py-3.5 bg-gold-600 text-white font-semibold rounded-full hover:bg-gold-700 transition-all hover:shadow-xl hover:shadow-gold-600/30 text-sm sm:text-base"
            >
              View Packages & Pricing
            </a>
            <a
              href="#contact"
              className="px-8 py-3.5 border-2 border-white/40 text-white font-semibold rounded-full hover:bg-white/10 transition-all text-sm sm:text-base"
            >
              Schedule a Visit
            </a>
          </div>
          <div className="mt-6 flex items-center justify-center gap-6 text-white/70 text-sm">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-gold-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              4.8/5 from 250+ families
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              Perpetual Care Guaranteed
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Flexible Payment Terms
            </span>
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
