'use client';

import { useState } from 'react';

export default function AppointmentModal({ isOpen, onClose }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', date: '', time: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Appointment Request:%0A%0A
Name: ${form.name}%0A
Email: ${form.email}%0A
Phone: ${form.phone}%0A
Date: ${form.date}%0A
Time: ${form.time}%0A
Message: ${form.message}`;
    window.open(`https://wa.me/639175315501?text=${text}`, '_blank');
    setSubmitted(true);
    setTimeout(() => { onClose(); setSubmitted(false); setForm({ name: '', email: '', phone: '', date: '', time: '', message: '' }); }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
        <button onClick={onClose} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors z-10">
          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-8">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold font-serif text-gray-900">Schedule a Visit</h3>
            <p className="text-gray-500 text-sm mt-2">We&apos;ll confirm your appointment via WhatsApp</p>
          </div>

          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-green-600 font-semibold">Redirecting to WhatsApp...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input type="text" name="name" value={form.name} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 outline-none transition-all" placeholder="Your full name" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 outline-none transition-all" placeholder="email@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 outline-none transition-all" placeholder="+63 912 345 6789" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
                  <input type="date" name="date" value={form.date} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Time</label>
                  <input type="time" name="time" value={form.time} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 outline-none transition-all" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message (optional)</label>
                <textarea name="message" value={form.message} onChange={handleChange} rows={3} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 outline-none transition-all resize-none" placeholder="Any special requests..." />
              </div>
              <button type="submit" className="w-full py-3.5 bg-gold-600 hover:bg-gold-700 text-white font-semibold rounded-full transition-all hover:shadow-lg hover:shadow-gold-600/30">
                Confirm Appointment
              </button>
              <p className="text-xs text-gray-400 text-center">By submitting, you agree to be contacted via WhatsApp</p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
