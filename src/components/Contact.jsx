'use client';

import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', text: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', text: '' });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus({ type: 'success', text: 'Thank you! We will get back to you soon.' });
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus({ type: 'error', text: data.error || 'Something went wrong.' });
      }
    } catch (error) {
      setStatus({ type: 'error', text: 'Network error. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-gold-600 font-semibold text-sm tracking-widest uppercase">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">
            We Are Here <span className="gold-text-gradient">For You</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Reach out to us. Our team is ready to assist you.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold-50 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Address</h4>
                  <p className="text-gray-500 text-sm mt-1">Bayani Road, Fort Bonifacio, Taguig City</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold-50 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Phone</h4>
                  <p className="text-gray-500 text-sm mt-1">+63 (2) 1234 5678</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold-50 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <p className="text-gray-500 text-sm mt-1">hello@memorialready.com</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 h-[250px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.7000000000004!2d121.0456!3d14.5321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c8a123456789%3A0x123456789abcdef!2sThe+Heritage+Park!5e0!3m2!1sen!2sph!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location"
              />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-8 rounded-2xl shadow-lg border border-gray-100" style={{ backgroundColor: '#FFF8F0' }}>
            <h3 className="text-xl font-bold font-serif text-gray-900 mb-6">Send a Message</h3>

            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-gold-500 focus:ring-2 focus:ring-gold-200 outline-none transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-gold-500 focus:ring-2 focus:ring-gold-200 outline-none transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-gold-500 focus:ring-2 focus:ring-gold-200 outline-none transition-all resize-none"
                  placeholder="How can we help?"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 bg-gold-600 hover:bg-gold-700 text-white font-semibold rounded-full transition-all hover:shadow-lg hover:shadow-gold-600/30 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>

              {status.text && (
                <div className={`p-4 rounded-xl text-sm ${
                  status.type === 'success'
                    ? 'bg-green-50 text-green-700 border border-green-200'
                    : 'bg-red-50 text-red-700 border border-red-200'
                }`}>
                  {status.text}
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
