'use client';

import { useState } from 'react';

const faqs = [
  {
    q: 'What types of memorial lots are available?',
    a: 'We offer Lawn Lots (standard individual plots), Garden Lots (expansive family plots with premium markers), and Estate Lots (private lots with mausoleum options). Each tier includes perpetual care and transferable certificates.',
  },
  {
    q: 'Can I pay in installment terms?',
    a: 'Yes. We offer flexible payment terms for all our pre-need plans. You can pay in monthly installments over 5 to 10 years. Spot cash payments also receive exclusive discounts.',
  },
  {
    q: 'What is included in a pre-need memorial plan?',
    a: 'Our pre-need plans cover body retrieval, embalming, imported casket, wake (3-4 nights in a chapel), hearse service, processing of permits, memorial lot, and perpetual care. Higher-tier plans include premium chapels, digital tribute pages, and flower arrangements.',
  },
  {
    q: 'Do you offer cremation services?',
    a: 'Yes. We provide state-of-the-art cremation services with options for viewing wakes before cremation. Premium urns, columbary niches, and scattering garden arrangements are available.',
  },
  {
    q: 'What is perpetual care?',
    a: 'Perpetual care is a guaranteed fund that ensures the memorial grounds, landscaping, and facilities remain beautifully maintained forever — at no additional cost to your family.',
  },
  {
    q: 'Can I visit the memorial park before purchasing?',
    a: 'Absolutely. We encourage families to tour our memorial park. Simply schedule an appointment through our contact form or call us, and we will arrange a guided visit for you.',
  },
  {
    q: 'Is the certificate of ownership transferable?',
    a: 'Yes. All our lot certificates are transferable. We assist with the documentation process for transfers, including Deed of Sale, notarization, and Heritage Park management processing.',
  },
  {
    q: 'What documents are required to purchase?',
    a: 'You will need a valid government ID, the completed application form, and proof of payment. For transfers, additional documents like the Original Certificate of Ownership and Deed of Sale are required.',
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
            Everything you need to know about our memorial plans, lots, and services.
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
