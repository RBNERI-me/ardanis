import { useParams, Link, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { articles, getArticleBySlug } from '../data/articles';

interface Comment {
  id: number;
  author: string;
  text: string;
  timestamp: string;
}

export default function ArticleDetail() {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;
  const [comments, setComments] = useState<Comment[]>([]);
  const [commentAuthor, setCommentAuthor] = useState('');
  const [commentText, setCommentText] = useState('');

  if (!article) {
    return <Navigate to="/gazette" replace />;
  }

  const relatedArticles = articles
    .filter(a => a.category === article.category && a.id !== article.id)
    .slice(0, 3);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <nav className="flex items-center gap-2 text-sm text-white/40 mb-8">
        <Link to="/" className="hover:text-cyan-bright transition-colors">Home</Link>
        <i className="fa-solid fa-chevron-right text-[10px]"></i>
        <Link to="/gazette" className="hover:text-cyan-bright transition-colors">National Gazette</Link>
        <i className="fa-solid fa-chevron-right text-[10px]"></i>
        <span className="text-white/60 truncate max-w-[200px]">{article.title}</span>
      </nav>

      <header className="mb-8">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium border ${
            article.category === 'Vanguard Assembly' ? 'bg-violet/10 text-violet border-violet/20' :
            article.category === 'Diplomatic Updates' ? 'bg-gold/10 text-gold border-gold/20' :
            'bg-cyan-bright/10 text-cyan-bright border-cyan-bright/20'
          }`}>
            <i className={`fa-solid ${article.category === 'Vanguard Assembly' ? 'fa-landmark' : article.category === 'Diplomatic Updates' ? 'fa-handshake' : 'fa-tree'} text-[10px]`}></i>
            {article.category}
          </span>
          <span className="text-xs text-white/40 flex items-center gap-1">
            <i className="fa-regular fa-clock"></i> {article.readTime} read
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-white mb-6 leading-tight">{article.title}</h1>

        <div className="glass rounded-xl p-4 border border-cyan-bright/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-violet flex items-center justify-center text-white font-bold">
              {article.author.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <p className="text-sm font-semibold text-white">{article.author}</p>
              <p className="text-xs text-white/50">{article.authorTitle}</p>
            </div>
          </div>
          <div className="text-sm text-white/50 flex items-center gap-2">
            <i className="fa-regular fa-calendar"></i>
            {new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
        </div>
      </header>

      <article className="glass-card rounded-3xl p-8 md:p-10 mb-12">
        <div className="prose prose-invert max-w-none">
          {article.content.map((paragraph, index) => (
            <p key={index} className="text-white/70 leading-relaxed mb-4 text-base">
              {paragraph.startsWith('•') ? (
                <span className="block pl-4 border-l-2 border-cyan-bright/30 my-2">{paragraph}</span>
              ) : (
                paragraph
              )}
            </p>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-cyan-bright/10">
          <p className="text-xs text-white/40 mb-3 uppercase tracking-wider">Tags</p>
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full text-xs bg-white/5 text-white/60 border border-white/10">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </article>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12">
        <Link to="/gazette" className="btn-primary px-6 py-2 rounded-xl text-sm flex items-center gap-2">
          <i className="fa-solid fa-arrow-left"></i> Back to Gazette
        </Link>
        <div className="flex items-center gap-3">
          <span className="text-xs text-white/40">Share:</span>
          <button className="w-8 h-8 rounded-full glass flex items-center justify-center text-white/60 hover:text-cyan-bright transition-colors">
            <i className="fa-brands fa-twitter text-sm"></i>
          </button>
          <button className="w-8 h-8 rounded-full glass flex items-center justify-center text-white/60 hover:text-cyan-bright transition-colors">
            <i className="fa-brands fa-linkedin text-sm"></i>
          </button>
          <button className="w-8 h-8 rounded-full glass flex items-center justify-center text-white/60 hover:text-cyan-bright transition-colors">
            <i className="fa-solid fa-link text-sm"></i>
          </button>
        </div>
      </div>

      {relatedArticles.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold font-display text-white mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {relatedArticles.map((related) => (
              <Link
                key={related.id}
                to={`/gazette/${related.slug}`}
                className="glass-card rounded-xl p-5 group block"
              >
                <p className="text-xs text-white/40 mb-2">
                  {new Date(related.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </p>
                <h3 className="font-semibold text-white group-hover:text-cyan-bright transition-colors mb-2 line-clamp-2 text-sm">{related.title}</h3>
                <p className="text-xs text-white/50 line-clamp-2">{related.excerpt}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Comments Section */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold font-display text-white mb-6 flex items-center gap-2">
          <i className="fa-solid fa-comments text-cyan-bright"></i>
          Citizen Comments ({comments.length})
        </h2>

        {/* Comment Form */}
        <div className="glass-card rounded-2xl p-6 mb-6">
          <form onSubmit={(e) => {
            e.preventDefault();
            if (!commentAuthor.trim() || !commentText.trim()) return;
            setComments([...comments, {
              id: comments.length + 1,
              author: commentAuthor,
              text: commentText,
              timestamp: new Date().toISOString()
            }]);
            setCommentAuthor('');
            setCommentText('');
          }} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-white/70 mb-2">Your Name</label>
              <input
                type="text"
                value={commentAuthor}
                onChange={(e) => setCommentAuthor(e.target.value)}
                placeholder="Enter your name or handle"
                className="w-full px-4 py-2 rounded-lg input-glass"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white/70 mb-2">Your Comment</label>
              <textarea
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                placeholder="Share your thoughts on this article..."
                rows={3}
                className="w-full px-4 py-2 rounded-lg input-glass resize-none"
                required
              />
            </div>
            <button type="submit" className="btn-primary px-6 py-2 rounded-lg text-sm">
              <i className="fa-solid fa-paper-plane mr-2"></i> Submit Comment
            </button>
          </form>
        </div>

        {/* Comments List */}
        {comments.length > 0 && (
          <div className="space-y-4">
            {comments.map((comment) => (
              <div key={comment.id} className="glass-card rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-bright to-violet flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {comment.author.charAt(0).toUpperCase()}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-white text-sm">{comment.author}</span>
                      <span className="text-xs text-white/40">
                        {new Date(comment.timestamp).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </span>
                    </div>
                    <p className="text-sm text-white/70">{comment.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
