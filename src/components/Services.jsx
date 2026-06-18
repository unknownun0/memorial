const plans = [
  {
    name: 'Basic Tribute',
    price: 'Starting at $2,500',
    features: [
      'Standard Memorial Lot',
      'Basic Headstone',
      'Perpetual Care',
      'Memorial Service Setup',
      'Digital Memory Page',
    ],
    popular: false,
  },
  {
    name: 'Premium Honor',
    price: 'Starting at $5,500',
    features: [
      'Premium Memorial Lot',
      'Premium Granite Headstone',
      'Perpetual Care',
      'Full Memorial Service',
      'Digital Memory Page',
      'Flower Arrangement',
      'Guest Book',
    ],
    popular: true,
  },
  {
    name: 'Eternal Legacy',
    price: 'Starting at $9,500',
    features: [
      'Prime Memorial Lot',
      'Custom Marble Monument',
      'Perpetual Care',
      'Premium Funeral Service',
      'Digital Tribute Video',
      'Monthly Flower Decoration',
      'Private Family Mausoleum Option',
      '24/7 Chapel Access',
    ],
    popular: false,
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-cream-50" style={{ backgroundColor: '#FFF8F0' }}>
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-gold-600 font-semibold text-sm tracking-widest uppercase">
            Our Service Plans
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">
            Choose Your <span className="gold-text-gradient">Memorial Plan</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tailored plans to honor your loved ones with the dignity they deserve.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 ${
                plan.popular
                  ? 'bg-gold-600 text-white shadow-2xl shadow-gold-600/20 scale-105 md:scale-110'
                  : 'bg-white text-gray-900 shadow-lg hover:shadow-xl'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-white text-gold-700 text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <h3 className={`text-xl font-bold font-serif mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                {plan.name}
              </h3>
              <p className={`text-2xl font-bold mb-6 ${plan.popular ? 'text-gold-200' : 'text-gold-600'}`}>
                {plan.price}
              </p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm">
                    <svg className={`w-5 h-5 mt-0.5 flex-shrink-0 ${plan.popular ? 'text-gold-200' : 'text-gold-600'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className={plan.popular ? 'text-white/90' : 'text-gray-600'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center py-3 rounded-full font-semibold transition-all text-sm ${
                  plan.popular
                    ? 'bg-white text-gold-700 hover:bg-gold-50'
                    : 'bg-gold-600 text-white hover:bg-gold-700'
                }`}
              >
                Select Plan
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
