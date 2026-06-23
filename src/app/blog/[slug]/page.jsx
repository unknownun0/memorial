'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { getBlogPost, getRecentPosts } from '@/data/blog';

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = getBlogPost(slug);
  const recentPosts = getRecentPosts(3);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#FFF8F0' }}>
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <p className="text-gray-500 mb-6">The article you are looking for does not exist.</p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gold-600 text-white font-semibold rounded-full hover:bg-gold-700"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFF8F0' }}>
      <div className="h-64 md:h-80 relative overflow-hidden">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="container-custom">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white/70 hover:text-gold-400 text-sm mb-4 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              Back to Blog
            </Link>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-white/60 text-sm mt-4">
              <span>{post.date}</span>
              <span className="w-1 h-1 rounded-full bg-white/40" />
              <span>{post.author}</span>
              <span className="w-1 h-1 rounded-full bg-white/40" />
              <span className="text-gold-400">{post.category}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          <article className="lg:col-span-2 bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-gray-900 prose-p:text-gray-600 prose-a:text-gold-600">
              {post.content.split('\n').map((line, i) => {
                if (line.startsWith('## ')) {
                  return <h2 key={i} className="text-2xl font-bold text-gray-900 mt-8 mb-4">{line.slice(3)}</h2>;
                }
                if (line.startsWith('### ')) {
                  return <h3 key={i} className="text-xl font-bold text-gray-900 mt-6 mb-3">{line.slice(4)}</h3>;
                }
                if (line.startsWith('- ')) {
                  return <li key={i} className="text-gray-600 ml-4 mb-1">{line.slice(2)}</li>;
                }
                if (line.trim() === '') {
                  return <div key={i} className="h-4" />;
                }
                return <p key={i} className="text-gray-600 mb-4 leading-relaxed">{line}</p>;
              })}
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gold-600 text-white font-semibold rounded-full hover:bg-gold-700 transition-all"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
                Back to Blog
              </Link>
            </div>
          </article>

          <aside className="space-y-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-4 font-serif">Recent Articles</h3>
              <div className="space-y-4">
                {recentPosts.filter((p) => p.slug !== slug).map((recent) => (
                  <Link
                    key={recent.slug}
                    href={`/blog/${recent.slug}`}
                    className="flex gap-4 group"
                  >
                    <div className="w-20 h-16 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={recent.image}
                        alt={recent.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold text-gray-900 group-hover:text-gold-600 transition-colors line-clamp-2">
                        {recent.title}
                      </h4>
                      <p className="text-xs text-gray-400 mt-1">{recent.date}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-gold-600 rounded-2xl p-6 shadow-lg text-center">
              <h3 className="text-lg font-bold text-white mb-2 font-serif">Need Guidance?</h3>
              <p className="text-white/80 text-sm mb-4">
                Our team is here to help you with memorial planning.
              </p>
              <Link
                href="/#contact"
                className="inline-block px-6 py-2.5 bg-white text-gold-700 font-semibold rounded-full hover:bg-gold-50 transition-all text-sm"
              >
                Contact Us
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
