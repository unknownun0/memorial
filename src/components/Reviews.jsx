'use client';

const reviews = [
  {
    name: 'Maria Santos',
    location: 'Manila',
    rating: 5,
    text: 'Memorial Ready provided exceptional care during our most difficult time. The memorial garden is absolutely beautiful.',
    date: 'March 2025',
  },
  {
    name: 'Robert Chen',
    location: 'Quezon City',
    rating: 5,
    text: 'The team guided us through every step with patience. The perpetual care gives us peace of mind.',
    date: 'January 2025',
  },
  {
    name: 'Amanda Reyes',
    location: 'Cebu',
    rating: 5,
    text: 'The Eternal Legacy plan exceeded our expectations. The digital tribute video is a thoughtful touch.',
    date: 'November 2024',
  },
  {
    name: 'David Martinez',
    location: 'Makati',
    rating: 4,
    text: 'Professional and respectful from consultation to interment. The columbarium is beautifully designed.',
    date: 'October 2024',
  },
];

function StarRating({ rating }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="section-padding" style={{ backgroundColor: '#FFF8F0' }}>
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-gold-600 font-semibold text-sm tracking-widest uppercase">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">
            What Our <span className="gold-text-gradient">Families Say</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center justify-between mb-4">
                <StarRating rating={review.rating} />
                <span className="text-gray-400 text-xs">{review.date}</span>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6 italic">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold-600 flex items-center justify-center text-white font-bold text-sm">
                  {review.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{review.name}</p>
                  <p className="text-gray-400 text-xs">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
