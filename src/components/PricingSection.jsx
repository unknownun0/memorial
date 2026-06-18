'use client';

import { useState } from 'react';

const tabs = [
  { id: 'lots', label: 'Memorial Lots' },
  { id: 'plans', label: 'Memorial Plans' },
  { id: 'cremation', label: 'Cremation Plans' },
];

const lotPackages = [
  {
    name: 'Lawn Lot',
    price: '₱180,000',
    period: 'one-time',
    features: [
      'Standard memorial lot (1m x 2.4m)',
      'Basic granite marker',
      'Perpetual care included',
      'Access to park amenities',
      'Transferable certificate',
    ],
    popular: false,
  },
  {
    name: 'Garden Lot',
    price: '₱350,000',
    period: 'one-time',
    features: [
      'Expansive garden lot (2m x 3m)',
      'Premium granite headstone',
      'Perpetual care included',
      'Garden view location',
      'Up to 2 interments',
      'Transferable certificate',
    ],
    popular: true,
  },
  {
    name: 'Estate Lot',
    price: '₱800,000',
    period: 'one-time',
    features: [
      'Private estate lot (4m x 5m)',
      'Custom marble monument',
      'Perpetual care included',
      'Prime park location',
      'Option to build mausoleum',
      'Up to 4 interments',
      'Transferable certificate',
    ],
    popular: false,
  },
];

const planPackages = [
  {
    name: 'Basic Tribute',
    price: '₱250,000',
    period: 'or ₱2,500/mo for 10 yrs',
    features: [
      'Standard memorial lot',
      'Basic headstone',
      'Body retrieval & preparation',
      'Embalming & viewing',
      'Imported metal casket',
      'Wake: 3 nights (regular chapel)',
      'Hearse service',
      'Processing of permits',
    ],
    popular: false,
  },
  {
    name: 'Premium Honor',
    price: '₱400,000',
    period: 'or ₱4,000/mo for 10 yrs',
    features: [
      'Premium memorial lot',
      'Granite headstone',
      'Body retrieval & preparation',
      'Embalming & viewing',
      'Premium imported casket',
      'Wake: 3 nights (premier chapel)',
      'Hearse service',
      'Processing of permits',
      'Digital memory page',
    ],
    popular: true,
  },
  {
    name: 'Eternal Legacy',
    price: '₱600,000',
    period: 'or ₱6,000/mo for 10 yrs',
    features: [
      'Prime memorial lot',
      'Custom marble monument',
      'Full funeral service',
      'Premium embalming',
      'Luxury imported casket',
      'Wake: 4 nights (premier chapel)',
      'Hearse & fleet service',
      'Digital tribute video',
      'Monthly flower arrangement',
      'Guest book & cards',
    ],
    popular: false,
  },
];

const cremationPackages = [
  {
    name: 'Cremation Only',
    price: '₱140,000',
    period: 'or ₱1,500/mo for 10 yrs',
    features: [
      'Cremation service',
      'Standard urn',
      '2-hour chapel use',
      'Processing of permits',
      'Certificate of cremation',
    ],
    popular: false,
  },
  {
    name: 'Cremation with Viewing',
    price: '₱350,000',
    period: 'or ₱3,500/mo for 10 yrs',
    features: [
      'Cremation service',
      'Premium urn',
      'Wake: 4 days & 3 nights',
      'Regular chapel use',
      'Body retrieval & preparation',
      'Embalming',
      'Imported casket (for viewing)',
      'Hearse service',
      'Processing of permits',
    ],
    popular: true,
  },
  {
    name: 'Premium Cremation',
    price: '₱400,000',
    period: 'or ₱4,000/mo for 10 yrs',
    features: [
      'Cremation service',
      'Luxury urn',
      'Wake: 4 days & 3 nights',
      'Premier chapel use',
      'Body retrieval & preparation',
      'Premium embalming',
      'Premium imported casket',
      'Hearse & fleet service',
      'Digital tribute page',
      'Processing of permits',
    ],
    popular: false,
  },
];

const dataMap = { lots: lotPackages, plans: planPackages, cremation: cremationPackages };

const columbaryOptions = [
  { label: 'Aeternum Columbary Niche', price: 'Starts at ₱80,000' },
  { label: 'Pavilion Columbary Niche', price: 'Starts at ₱120,000' },
];

export default function PricingSection() {
  const [activeTab, setActiveTab] = useState('lots');

  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-gold-600 font-semibold text-sm tracking-widest uppercase">Transparent Pricing</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">
            Our <span className="gold-text-gradient">Packages & Rates</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            No hidden fees. Choose from flexible payment terms that suit your family&apos;s needs.
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-gray-100 rounded-full p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 text-sm font-semibold rounded-full transition-all ${
                  activeTab === tab.id
                    ? 'bg-gold-600 text-white shadow-lg shadow-gold-600/30'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {dataMap[activeTab].map((pkg, i) => (
            <div
              key={i}
              className={`relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 ${
                pkg.popular
                  ? 'bg-gold-600 text-white shadow-2xl shadow-gold-600/20 scale-105 md:scale-110'
                  : 'bg-white text-gray-900 shadow-lg hover:shadow-xl border border-gray-100'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-white text-gold-700 text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <h3 className={`text-xl font-bold font-serif mb-2 ${pkg.popular ? 'text-white' : 'text-gray-900'}`}>
                {pkg.name}
              </h3>
              <p className={`text-3xl font-bold mb-1 ${pkg.popular ? 'text-gold-200' : 'text-gold-600'}`}>
                {pkg.price}
              </p>
              <p className={`text-xs mb-6 ${pkg.popular ? 'text-white/70' : 'text-gray-400'}`}>
                {pkg.period}
              </p>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm">
                    <svg className={`w-5 h-5 mt-0.5 flex-shrink-0 ${pkg.popular ? 'text-gold-200' : 'text-gold-600'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className={pkg.popular ? 'text-white/90' : 'text-gray-600'}>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center py-3 rounded-full font-semibold transition-all text-sm ${
                  pkg.popular
                    ? 'bg-white text-gold-700 hover:bg-gold-50'
                    : 'bg-gold-600 text-white hover:bg-gold-700'
                }`}
              >
                Inquire Now
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 rounded-2xl bg-cream-50 border border-gold-200" style={{ backgroundColor: '#FFF8F0' }}>
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold font-serif text-gray-900">Columbary Niches</h3>
            <p className="text-gray-500 text-sm mt-1">Eternal resting places for cremated remains</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {columbaryOptions.map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center">
                <span className="font-semibold text-gray-900">{item.label}</span>
                <span className="text-gold-600 font-bold">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
