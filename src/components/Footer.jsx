const footerLinks = {
  Services: ['Memorial Lots', 'Memorial Plans', 'Cremation Plans', 'Interment Plans', 'Columbary'],
  Company: ['About Us', 'Our Team', 'Careers', 'Blog', 'FAQ'],
  Support: ['Contact Us', 'Privacy Policy', 'Terms of Service', 'Sitemap'],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold font-serif mb-4">
              <span className="text-gold-500">Memorial</span>
              <span className="text-white">Ready</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
              Honoring lives and preserving memories with dignity, respect, and timeless
              elegance. We provide premium memorial lands and compassionate service plans
              for families.
            </p>
            <div className="flex gap-3">
              {['facebook', 'twitter', 'instagram', 'youtube'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gold-600 flex items-center justify-center transition-all"
                  aria-label={social}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10z" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-bold tracking-widest uppercase text-gold-500 mb-5">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href={category === 'Services' ? '#services' : '#contact'}
                      className="text-gray-400 hover:text-gold-500 text-sm transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container-custom py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Memorial Ready. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Designed with care. Made with love.
          </p>
        </div>
      </div>
    </footer>
  );
}
