'use client';

import { useState, useEffect } from 'react';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Plans' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#home" className="flex items-center gap-2">
            <span className="text-xl lg:text-2xl font-bold font-serif">
              <span className="text-gold-600">Memorial</span>
              <span className={scrolled ? 'text-gray-800' : 'text-white'}>Ready</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-gold-500 ${
                  scrolled ? 'text-gray-700' : 'text-white/90'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="px-6 py-2.5 bg-gold-600 text-white text-sm font-semibold rounded-full hover:bg-gold-700 transition-all hover:shadow-lg hover:shadow-gold-600/30"
            >
              Get In Touch
            </a>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-0.5 bg-gold-600 mb-1.5 transition-all" />
            <div className="w-6 h-0.5 bg-gold-600 mb-1.5 transition-all" />
            <div className="w-6 h-0.5 bg-gold-600 transition-all" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t shadow-xl">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-2 text-gray-700 font-medium hover:text-gold-600"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="block text-center py-3 bg-gold-600 text-white font-semibold rounded-full hover:bg-gold-700"
            >
              Get In Touch
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
