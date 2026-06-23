'use client';

import { useState } from 'react';

const faqs = [
  {
    q: 'What types of memorial lots are available?',
    a: 'Lawn Lots, Garden Lots, and Estate Lots with perpetual care and transferable certificates.',
  },
  {
    q: 'Can I pay in installments?',
    a: 'Yes. Flexible payment terms from 5 to 10 years. Spot cash payments receive discounts.',
  },
  {
    q: 'What is included in a pre-need plan?',
    a: 'Body retrieval, embalming, casket, wake, hearse service, permits, memorial lot, and perpetual care.',
  },
  {
    q: 'Do you offer cremation?',
    a: 'Yes. Cremation with or without viewing, premium urns, columbary niches available.',
  },
  {
    q: 'What is perpetual care?',
    a: 'A guaranteed fund that keeps the memorial grounds beautifully maintained forever at no extra cost.',
  },
  {
    q: 'Can I visit before purchasing?',
    a: 'Absolutely. Schedule an appointment and we will arrange a guided tour for you.',
  },
  {
    q: 'Is the certificate transferable?',
    a: 'Yes. We assist with the documentation process for transfers.',
  },
  {
    q: 'What documents are needed?',
    a: 'A valid government ID, completed application form, and proof of payment.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="section-padding" style={{ backgroundColor: '#FFF8F0' }}>
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-12">
          <span className="text-gold-600 font-semibold text-sm tracking-widest uppercase">
            Got Questions?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">
            Frequently Asked <span className="gold-text-gradient">Questions</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Answers to common questions about our plans and services.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 hover:border-gold-300"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gold-50/50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.q}</span>
                <svg
                  className={`w-5 h-5 flex-shrink-0 text-gold-600 transition-transform duration-300 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
