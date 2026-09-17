import { useState } from 'react';
import { Link } from 'react-router-dom';
import { articles } from '../data/articles';

export default function Gazette() {
  const [filter, setFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Vanguard Assembly', 'Danube Territory', 'Diplomatic Updates'];
  
  // Filter by category first, then by search query
  const filtered = articles
    .filter(a => filter === 'All' || a.category === filter)
    .filter(a => 
      searchQuery === '' || 
      a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-xs text-gold font-medium mb-4">
          <i className="fa-solid fa-newspaper"></i> Official Gazette
        </span>
        <h1 className="text-3xl md:text-4xl font-bold font-display text-white mb-3">National Gazette</h1>
        <p className="text-white/50 max-w-xl mx-auto">Official announcements, legislative updates, and territorial dispatches from the Sovereign Republic of Ardanis.</p>
      </div>

      <div className="flex flex-wrap gap-2 justify-center mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              filter === cat ? 'bg-cyan-bright/20 text-cyan-bright border border-cyan-bright/30' : 'glass text-white/60 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Search Bar */}
      <div className="max-w-xl mx-auto mb-8">
        <div className="relative">
          <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-cyan-bright/50"></i>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search articles by title, content, or tags..."
            className="w-full pl-11 pr-4 py-3 rounded-xl input-glass"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((article) => (
          <Link
            key={article.id}
            to={`/gazette/${article.slug}`}
            className="glass-card rounded-2xl overflow-hidden group block"
          >
            <div className="h-32 relative overflow-hidden">
              <div className={`absolute inset-0 ${
                article.category === 'Vanguard Assembly' ? 'bg-gradient-to-br from-primary/60 via-violet/40 to-cyan-bright/20' :
                article.category === 'Diplomatic Updates' ? 'bg-gradient-to-br from-gold/30 via-primary/40 to-violet-deep/30' :
                'bg-gradient-to-br from-cyan-bright/30 via-primary/40 to-violet-deep/30'
              }`}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 to-transparent"></div>
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white/10 text-white/80 border border-white/20 text-xs backdrop-blur-sm">
                  <i className={`fa-solid ${article.category === 'Vanguard Assembly' ? 'fa-landmark' : article.category === 'Diplomatic Updates' ? 'fa-handshake' : 'fa-tree'} text-[10px]`}></i>
                  {article.category}
                </span>
                <span className="text-xs text-white/50">{article.readTime}</span>
              </div>
            </div>
            <div className="p-5">
              <p className="text-xs text-white/40 mb-2 flex items-center gap-2">
                <i className="fa-regular fa-calendar"></i>
                {new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
              <h3 className="font-bold text-white group-hover:text-cyan-bright transition-colors mb-2 line-clamp-2 leading-snug">{article.title}</h3>
              <p className="text-sm text-white/50 line-clamp-3 leading-relaxed">{article.excerpt}</p>
              <div className="mt-4 flex items-center justify-between">
                <p className="text-xs text-white/40"><i className="fa-solid fa-user-pen mr-1"></i> {article.author}</p>
                <span className="inline-flex items-center gap-1 text-xs text-cyan-bright group-hover:gap-2 transition-all font-medium">
                  Read full article <i className="fa-solid fa-arrow-right text-[10px]"></i>
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16">
          <i className="fa-solid fa-newspaper text-4xl text-white/20 mb-4"></i>
          <p className="text-white/40">No articles found in this category.</p>
        </div>
      )}
    </div>
  );
}
