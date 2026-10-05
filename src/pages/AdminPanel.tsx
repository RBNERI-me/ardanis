import { useState, useEffect } from 'react';
import { articles, type Article } from '../data/articles';
import { jobs, type Job } from '../data/jobs';

type UserRole = 'reporter' | 'moderator' | 'admin' | 'official' | null;

interface AdminState {
  articles: Article[];
  jobs: Job[];
  ministers: any[];
  legislation: any[];
}

export default function AdminPanel() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState<UserRole>(null);
  const [activeSection, setActiveSection] = useState('dashboard');
  const [adminData, setAdminData] = useState<AdminState>({
    articles: [],
    jobs: [],
    ministers: [],
    legislation: []
  });
  const [editingArticle, setEditingArticle] = useState<Article | null>(null);
  const [showArticleForm, setShowArticleForm] = useState(false);

  // Load data from localStorage or use defaults
  useEffect(() => {
    const savedData = localStorage.getItem('ardanisAdminData');
    if (savedData) {
      setAdminData(JSON.parse(savedData));
    } else {
      setAdminData({
        articles: articles,
        jobs: jobs,
        ministers: [
          { name: 'Dr. Elara Voss', portfolio: 'Digital Infrastructure', council: 'Science & Technology', status: 'Active', termExpiry: '2026-03-31' },
          { name: 'Marcus Chen', portfolio: 'Ecological Policy', council: 'Environment & Territory', status: 'Active', termExpiry: '2026-03-31' },
          { name: 'Amara Okafor', portfolio: 'Civic Engagement', council: 'Governance', status: 'Active', termExpiry: '2026-03-31' },
          { name: 'Lukas Brenner', portfolio: 'International Relations', council: 'Diplomacy', status: 'Active', termExpiry: '2026-03-31' },
          { name: 'Sofia Petrov', portfolio: 'Economic Development', council: 'Economics & Trade', status: 'Active', termExpiry: '2026-03-31' },
          { name: 'Kai Nakamura', portfolio: 'Cultural Affairs', council: 'Arts & Culture', status: 'Active', termExpiry: '2026-03-31' },
          { name: 'Iris de Vries', portfolio: 'Scientific Research', council: 'Science & Technology', status: 'Active', termExpiry: '2026-03-31' },
          { name: 'Tomás Rivera', portfolio: 'Public Transparency', council: 'Governance', status: 'Active', termExpiry: '2026-03-31' }
        ],
        legislation: [
          { id: 'ARD-L-2026-001', title: 'Digital Commons Expansion Act', sponsor: 'Governance Council', status: 'Passed', votes: { for: 72, against: 3, abstain: 10 } },
          { id: 'ARD-L-2026-002', title: 'Biodiversity Corridor Protection Bill', sponsor: 'Environment Council', status: 'In Progress', votes: { for: 48, against: 12, abstain: 8 } },
          { id: 'ARD-L-2026-003', title: 'E-Resident Voting Rights Amendment', sponsor: 'Citizen Petition #47', status: 'In Progress', votes: { for: 35, against: 22, abstain: 15 } },
          { id: 'ARD-L-2026-004', title: 'Open Data Transparency Mandate', sponsor: 'Transparency Portfolio', status: 'Draft', votes: { for: 0, against: 0, abstain: 0 } },
          { id: 'ARD-L-2026-005', title: 'Renewable Energy Infrastructure Fund', sponsor: 'Science & Technology', status: 'Draft', votes: { for: 0, against: 0, abstain: 0 } },
          { id: 'ARD-L-2026-006', title: 'Cultural Heritage Preservation Act', sponsor: 'Arts & Culture', status: 'Draft', votes: { for: 0, against: 0, abstain: 0 } }
        ]
      });
    }
  }, []);

  // Save data to localStorage whenever it changes
  useEffect(() => {
    if (isLoggedIn) {
      localStorage.setItem('ardanisAdminData', JSON.stringify(adminData));
    }
  }, [adminData, isLoggedIn]);

  const handleLogin = (role: UserRole) => {
    setUserRole(role);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserRole(null);
    setActiveSection('dashboard');
  };

  const handleDeleteArticle = (id: string) => {
    if (confirm('Are you sure you want to delete this article?')) {
      setAdminData({
        ...adminData,
        articles: adminData.articles.filter(a => a.id !== id)
      });
    }
  };

  const handleSaveArticle = (article: Article) => {
    const existingIndex = adminData.articles.findIndex(a => a.id === article.id);
    if (existingIndex >= 0) {
      const updated = [...adminData.articles];
      updated[existingIndex] = article;
      setAdminData({ ...adminData, articles: updated });
    } else {
      setAdminData({
        ...adminData,
        articles: [...adminData.articles, article]
      });
    }
    setEditingArticle(null);
    setShowArticleForm(false);
  };

  const handleDeleteJob = (id: string) => {
    if (confirm('Are you sure you want to delete this job posting?')) {
      setAdminData({
        ...adminData,
        jobs: adminData.jobs.filter(j => j.id !== id)
      });
    }
  };

  const handleDeleteMinister = (name: string) => {
    if (confirm('Are you sure you want to remove this minister?')) {
      setAdminData({
        ...adminData,
        ministers: adminData.ministers.filter(m => m.name !== name)
      });
    }
  };

  const handleDeleteLegislation = (id: string) => {
    if (confirm('Are you sure you want to delete this legislation?')) {
      setAdminData({
        ...adminData,
        legislation: adminData.legislation.filter(l => l.id !== id)
      });
    }
  };

  // Login Screen
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="glass-card rounded-2xl max-w-md w-full p-8">
          <div className="text-center mb-8">
            <div className="inline-block mb-4">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
                <i className="fa-solid fa-user-shield text-4xl text-white"></i>
              </div>
            </div>
            <h1 className="text-3xl font-display font-bold text-white mb-2">
              Admin Access
            </h1>
            <p className="text-white/60">
              Select your role to access the administrative panel
            </p>
          </div>

          <div className="space-y-3">
            <button
              onClick={() => handleLogin('reporter')}
              className="w-full glass rounded-lg p-4 hover:border-cyan-bright/50 transition-all text-left group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-cyan-bright/20 flex items-center justify-center">
                  <i className="fa-solid fa-newspaper text-cyan-bright text-xl"></i>
                </div>
                <div>
                  <div className="font-bold text-white group-hover:text-cyan-bright transition-colors">
                    Reporter
                  </div>
                  <div className="text-sm text-white/60">
                    Manage Gazette articles and news content
                  </div>
                </div>
              </div>
            </button>

            <button
              onClick={() => handleLogin('moderator')}
              className="w-full glass rounded-lg p-4 hover:border-gold/50 transition-all text-left group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-gold/20 flex items-center justify-center">
                  <i className="fa-solid fa-shield-halved text-gold text-xl"></i>
                </div>
                <div>
                  <div className="font-bold text-white group-hover:text-gold transition-colors">
                    Moderator
                  </div>
                  <div className="text-sm text-white/60">
                    Moderate comments and manage user content
                  </div>
                </div>
              </div>
            </button>

            <button
              onClick={() => handleLogin('admin')}
              className="w-full glass rounded-lg p-4 hover:border-violet/50 transition-all text-left group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-violet/20 flex items-center justify-center">
                  <i className="fa-solid fa-user-gear text-violet text-xl"></i>
                </div>
                <div>
                  <div className="font-bold text-white group-hover:text-violet transition-colors">
                    Administrator
                  </div>
                  <div className="text-sm text-white/60">
                    Full system access and data management
                  </div>
                </div>
              </div>
            </button>

            <button
              onClick={() => handleLogin('official')}
              className="w-full glass rounded-lg p-4 hover:border-cyan-light/50 transition-all text-left group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-cyan-light/20 flex items-center justify-center">
                  <i className="fa-solid fa-landmark text-cyan-light text-xl"></i>
                </div>
                <div>
                  <div className="font-bold text-white group-hover:text-cyan-light transition-colors">
                    Government Official
                  </div>
                  <div className="text-sm text-white/60">
                    Manage governance data and public registry
                  </div>
                </div>
              </div>
            </button>
          </div>

          <div className="mt-6 pt-6 border-t border-white/10">
            <p className="text-xs text-white/40 text-center">
              <i className="fa-solid fa-lock mr-1"></i>
              This is a restricted area. All actions are logged.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Admin Dashboard
  return (
    <div className="min-h-screen">
      {/* Admin Header */}
      <div className="glass-dark border-b border-white/10 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
                <i className="fa-solid fa-user-shield text-white"></i>
              </div>
              <div>
                <h1 className="text-xl font-display font-bold text-white">
                  Admin Panel
                </h1>
                <p className="text-xs text-white/60 capitalize">
                  Logged in as: {userRole}
                </p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="px-4 py-2 border border-white/20 rounded-lg hover:bg-white/5 transition-all text-white/80"
            >
              <i className="fa-solid fa-right-from-bracket mr-2"></i>
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Navigation Tabs */}
        <div className="glass-card rounded-xl p-2 mb-8 flex flex-wrap gap-2">
          <button
            onClick={() => setActiveSection('dashboard')}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              activeSection === 'dashboard'
                ? 'bg-cyan-bright/20 text-cyan-bright'
                : 'text-white/60 hover:text-white'
            }`}
          >
            <i className="fa-solid fa-gauge mr-2"></i>
            Dashboard
          </button>
          {(userRole === 'reporter' || userRole === 'admin') && (
            <button
              onClick={() => setActiveSection('articles')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                activeSection === 'articles'
                  ? 'bg-cyan-bright/20 text-cyan-bright'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              <i className="fa-solid fa-newspaper mr-2"></i>
              Articles
            </button>
          )}
          {(userRole === 'admin' || userRole === 'official') && (
            <button
              onClick={() => setActiveSection('ministers')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                activeSection === 'ministers'
                  ? 'bg-cyan-bright/20 text-cyan-bright'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              <i className="fa-solid fa-users mr-2"></i>
              Ministers
            </button>
          )}
          {(userRole === 'admin' || userRole === 'official') && (
            <button
              onClick={() => setActiveSection('legislation')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                activeSection === 'legislation'
                  ? 'bg-cyan-bright/20 text-cyan-bright'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              <i className="fa-solid fa-gavel mr-2"></i>
              Legislation
            </button>
          )}
          {(userRole === 'admin') && (
            <button
              onClick={() => setActiveSection('jobs')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                activeSection === 'jobs'
                  ? 'bg-cyan-bright/20 text-cyan-bright'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              <i className="fa-solid fa-briefcase mr-2"></i>
              Jobs
            </button>
          )}
        </div>

        {/* Dashboard Section */}
        {activeSection === 'dashboard' && (
          <div className="space-y-6">
            <h2 className="text-3xl font-display font-bold text-white mb-6">
              Dashboard Overview
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="glass-card rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-cyan-bright/20 flex items-center justify-center">
                    <i className="fa-solid fa-newspaper text-cyan-bright text-xl"></i>
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-1">
                  {adminData.articles.length}
                </div>
                <div className="text-white/60">Total Articles</div>
              </div>

              <div className="glass-card rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gold/20 flex items-center justify-center">
                    <i className="fa-solid fa-users text-gold text-xl"></i>
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-1">
                  {adminData.ministers.length}
                </div>
                <div className="text-white/60">Active Ministers</div>
              </div>

              <div className="glass-card rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-violet/20 flex items-center justify-center">
                    <i className="fa-solid fa-gavel text-violet text-xl"></i>
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-1">
                  {adminData.legislation.length}
                </div>
                <div className="text-white/60">Legislation Items</div>
              </div>

              <div className="glass-card rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-cyan-light/20 flex items-center justify-center">
                    <i className="fa-solid fa-briefcase text-cyan-light text-xl"></i>
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-1">
                  {adminData.jobs.length}
                </div>
                <div className="text-white/60">Open Positions</div>
              </div>
            </div>

            <div className="glass-card rounded-xl p-6 mt-8">
              <h3 className="text-xl font-display font-bold text-white mb-4">
                <i className="fa-solid fa-info-circle text-cyan-bright mr-2"></i>
                System Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-white/60">Current Role:</span>
                  <span className="ml-2 text-cyan-bright capitalize">{userRole}</span>
                </div>
                <div>
                  <span className="text-white/60">Access Level:</span>
                  <span className="ml-2 text-gold">
                    {userRole === 'admin' ? 'Full Access' : 
                     userRole === 'official' ? 'Governance Data' :
                     userRole === 'moderator' ? 'Content Moderation' :
                     'Article Management'}
                  </span>
                </div>
                <div>
                  <span className="text-white/60">Data Storage:</span>
                  <span className="ml-2 text-violet">Local Browser Storage</span>
                </div>
                <div>
                  <span className="text-white/60">Last Updated:</span>
                  <span className="ml-2 text-cyan-light">
                    {new Date().toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Articles Management */}
        {activeSection === 'articles' && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-display font-bold text-white">
                Manage Articles
              </h2>
              <button
                onClick={() => {
                  setEditingArticle({
                    id: `ART-${Date.now()}`,
                    slug: '',
                    title: '',
                    category: 'Vanguard Assembly',
                    date: new Date().toISOString().split('T')[0],
                    author: '',
                    authorTitle: '',
                    excerpt: '',
                    content: [''],
                    tags: [],
                    readTime: '5 min'
                  });
                  setShowArticleForm(true);
                }}
                className="px-6 py-3 bg-gradient-to-r from-cyan-bright to-violet rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-bright/50 transition-all"
              >
                <i className="fa-solid fa-plus mr-2"></i>
                Add New Article
              </button>
            </div>

            <div className="space-y-4">
              {adminData.articles.map(article => (
                <div key={article.id} className="glass-card rounded-xl p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-3 py-1 bg-cyan-bright/20 border border-cyan-bright/50 rounded-full text-cyan-bright text-xs">
                          {article.category}
                        </span>
                        <span className="text-white/60 text-sm">
                          {new Date(article.date).toLocaleDateString()}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {article.title}
                      </h3>
                      <p className="text-white/60 text-sm mb-2">
                        By {article.author} - {article.authorTitle}
                      </p>
                      <p className="text-white/80 text-sm line-clamp-2">
                        {article.excerpt}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          setEditingArticle(article);
                          setShowArticleForm(true);
                        }}
                        className="px-4 py-2 border border-cyan-bright/50 rounded-lg hover:bg-cyan-bright/10 transition-all text-cyan-bright"
                      >
                        <i className="fa-solid fa-edit"></i>
                      </button>
                      <button
                        onClick={() => handleDeleteArticle(article.id)}
                        className="px-4 py-2 border border-red-500/50 rounded-lg hover:bg-red-500/10 transition-all text-red-400"
                      >
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Ministers Management */}
        {activeSection === 'ministers' && (
          <div>
            <h2 className="text-3xl font-display font-bold text-white mb-6">
              Manage Ministers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {adminData.ministers.map((minister, index) => (
                <div key={index} className="glass-card rounded-xl p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {minister.name}
                      </h3>
                      <p className="text-cyan-bright mb-1">{minister.portfolio}</p>
                      <p className="text-white/60 text-sm">{minister.council}</p>
                      <p className="text-white/40 text-xs mt-2">
                        Term expires: {minister.termExpiry}
                      </p>
                    </div>
                    <button
                      onClick={() => handleDeleteMinister(minister.name)}
                      className="px-3 py-2 border border-red-500/50 rounded-lg hover:bg-red-500/10 transition-all text-red-400"
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Legislation Management */}
        {activeSection === 'legislation' && (
          <div>
            <h2 className="text-3xl font-display font-bold text-white mb-6">
              Manage Legislation
            </h2>
            <div className="space-y-4">
              {adminData.legislation.map(leg => (
                <div key={leg.id} className="glass-card rounded-xl p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-white/40 text-xs font-mono">{leg.id}</span>
                        <span className={`px-3 py-1 rounded-full text-xs ${
                          leg.status === 'Passed' ? 'bg-green-500/20 text-green-400' :
                          leg.status === 'In Progress' ? 'bg-cyan-bright/20 text-cyan-bright' :
                          'bg-gold/20 text-gold'
                        }`}>
                          {leg.status}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {leg.title}
                      </h3>
                      <p className="text-white/60 text-sm">
                        Sponsor: {leg.sponsor}
                      </p>
                    </div>
                    <button
                      onClick={() => handleDeleteLegislation(leg.id)}
                      className="px-3 py-2 border border-red-500/50 rounded-lg hover:bg-red-500/10 transition-all text-red-400"
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Jobs Management */}
        {activeSection === 'jobs' && (
          <div>
            <h2 className="text-3xl font-display font-bold text-white mb-6">
              Manage Job Postings
            </h2>
            <div className="space-y-4">
              {adminData.jobs.map(job => (
                <div key={job.id} className="glass-card rounded-xl p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-3 py-1 bg-cyan-bright/20 border border-cyan-bright/50 rounded-full text-cyan-bright text-xs">
                          {job.type}
                        </span>
                        {job.urgent && (
                          <span className="px-3 py-1 bg-red-500/20 border border-red-500/50 rounded-full text-red-400 text-xs">
                            Urgent
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {job.title}
                      </h3>
                      <p className="text-white/60 text-sm mb-1">{job.council}</p>
                      <p className="text-white/40 text-xs">
                        Deadline: {new Date(job.deadline).toLocaleDateString()}
                      </p>
                    </div>
                    <button
                      onClick={() => handleDeleteJob(job.id)}
                      className="px-3 py-2 border border-red-500/50 rounded-lg hover:bg-red-500/10 transition-all text-red-400"
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Article Edit Modal */}
      {showArticleForm && editingArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="glass-card rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-midnight/90 backdrop-blur-sm p-6 border-b border-white/10 flex justify-between items-center">
              <h2 className="text-2xl font-display font-bold text-white">
                {editingArticle.id.startsWith('ART-') ? 'Create New Article' : 'Edit Article'}
              </h2>
              <button
                onClick={() => {
                  setShowArticleForm(false);
                  setEditingArticle(null);
                }}
                className="text-white/60 hover:text-white text-2xl"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-white/80 mb-2">Title</label>
                <input
                  type="text"
                  value={editingArticle.title}
                  onChange={(e) => setEditingArticle({...editingArticle, title: e.target.value})}
                  className="w-full bg-midnight/50 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-cyan-bright focus:outline-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/80 mb-2">Category</label>
                  <select
                    value={editingArticle.category}
                    onChange={(e) => setEditingArticle({...editingArticle, category: e.target.value as any})}
                    className="w-full bg-midnight/50 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-cyan-bright focus:outline-none"
                  >
                    <option value="Vanguard Assembly">Vanguard Assembly</option>
                    <option value="Danube Territory">Danube Territory</option>
                    <option value="Diplomatic Updates">Diplomatic Updates</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white/80 mb-2">Date</label>
                  <input
                    type="date"
                    value={editingArticle.date}
                    onChange={(e) => setEditingArticle({...editingArticle, date: e.target.value})}
                    className="w-full bg-midnight/50 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-cyan-bright focus:outline-none"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/80 mb-2">Author</label>
                  <input
                    type="text"
                    value={editingArticle.author}
                    onChange={(e) => setEditingArticle({...editingArticle, author: e.target.value})}
                    className="w-full bg-midnight/50 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-cyan-bright focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-white/80 mb-2">Author Title</label>
                  <input
                    type="text"
                    value={editingArticle.authorTitle}
                    onChange={(e) => setEditingArticle({...editingArticle, authorTitle: e.target.value})}
                    className="w-full bg-midnight/50 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-cyan-bright focus:outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block text-white/80 mb-2">Excerpt</label>
                <textarea
                  value={editingArticle.excerpt}
                  onChange={(e) => setEditingArticle({...editingArticle, excerpt: e.target.value})}
                  rows={3}
                  className="w-full bg-midnight/50 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-cyan-bright focus:outline-none resize-none"
                />
              </div>
              <div>
                <label className="block text-white/80 mb-2">Content (one paragraph per line)</label>
                <textarea
                  value={editingArticle.content.join('\n\n')}
                  onChange={(e) => setEditingArticle({...editingArticle, content: e.target.value.split('\n\n')})}
                  rows={10}
                  className="w-full bg-midnight/50 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-cyan-bright focus:outline-none resize-none"
                />
              </div>
              <div className="flex gap-4 pt-4">
                <button
                  onClick={() => handleSaveArticle(editingArticle)}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-bright to-violet rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-bright/50 transition-all"
                >
                  <i className="fa-solid fa-save mr-2"></i>
                  Save Article
                </button>
                <button
                  onClick={() => {
                    setShowArticleForm(false);
                    setEditingArticle(null);
                  }}
                  className="px-6 py-3 border border-white/20 rounded-lg font-medium hover:bg-white/5 transition-all"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
