'use client';

import Link from 'next/link';
import { useState } from 'react';
import { getBlogPosts, getCategories } from '@/data/blog';

export default function BlogPage() {
  const allPosts = getBlogPosts();
  const categories = getCategories();
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? allPosts
    : allPosts.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFF8F0' }}>
      <div className="pt-28 pb-12 text-center" style={{ backgroundColor: '#1a1a1a' }}>
        <div className="container-custom">
          <span className="text-gold-600 font-semibold text-sm tracking-widest uppercase">Our Blog</span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-4">
            Insights & <span className="gold-text-gradient">Guidance</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Articles about memorial planning and honoring your loved ones.
          </p>
        </div>
      </div>

      <div className="container-custom py-16">
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-gold-600 text-white shadow-lg shadow-gold-600/30'
                  : 'bg-white text-gray-600 hover:bg-gold-50 hover:text-gold-600 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">No articles found in this category.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300" />
                    <span className="text-gold-600 font-medium">{post.category}</span>
                  </div>
                  <h2 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-gold-600 transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-500 line-clamp-3">{post.excerpt}</p>
                  <div className="mt-4 flex items-center gap-2 text-gold-600 text-sm font-semibold group-hover:gap-3 transition-all">
                    Read More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        <div className="mt-16 text-center">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gold-600 text-white font-semibold rounded-full hover:bg-gold-700 transition-all hover:shadow-lg hover:shadow-gold-600/30"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
