const services = [
  {
    src: 'https://images.unsplash.com/photo-1586169364769-3e4b6b7f5c5d?auto=format&fit=crop&w=800&q=80',
    title: 'Memorial Lots',
    description: 'Premium burial plots in serene locations with perpetual care included.',
  },
  {
    src: 'https://i.pinimg.com/1200x/04/fe/5a/04fe5a3bac4f285cc4297c02bf534dd7.jpg',
    title: 'Memorial Plans',
    description: 'Comprehensive memorial packages tailored to honor your loved ones uniquely.',
  },
  {
    src: 'https://i.pinimg.com/736x/88/94/c4/8894c4aa956e1f6de9b2cabf7ed5199a.jpg',
    title: 'Cremation Plans',
    description: 'Dignified cremation services with options for urns, niches, and scattering gardens.',
  },
  {
    src: 'https://i.pinimg.com/736x/b8/61/c5/b861c54591c023a98d14c4fd456085a4.jpg',
    title: 'Interment Plans',
    description: 'Proper burial services coordinated with care and attention to every detail.',
  },
  {
    src: 'https://i.pinimg.com/736x/fa/f2/12/faf2121f29b138650794a4132954b59e.jpg',
    title: 'Columbary',
    description: 'Beautiful columbarium niches for eternal resting of cremated remains in community.',
  },
];

export default function MoreServices() {
  return (
    <section className="section-padding" style={{ backgroundColor: '#FFF8F0' }}>
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-gold-600 font-semibold text-sm tracking-widest uppercase">
            Comprehensive Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">
            More <span className="gold-text-gradient">Services</span> We Offer
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From traditional burial to modern cremation options, we provide complete memorial solutions.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.src}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold font-serif text-gray-900 mb-2 group-hover:text-gold-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
