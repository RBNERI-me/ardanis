import { useState, useEffect } from 'react';
import { articles, type Article } from '../data/articles';
import { jobs, type Job } from '../data/jobs';

type UserRole = 'reporter' | 'moderator' | 'admin' | 'official' | null;

interface User {
  id: string;
  username: string;
  password: string;
  role: UserRole;
  name: string;
  email: string;
  createdAt: string;
  lastLogin?: string;
}

interface Official {
  id: string;
  name: string;
  title: string;
  council: string;
  portfolio: string;
  termStart: string;
  termEnd: string;
  bio: string;
  status: 'Active' | 'On Leave' | 'Transitioning';
}

interface Legislation {
  id: string;
  title: string;
  sponsor: string;
  status: 'Draft' | 'Bill' | 'In Progress' | 'Passed';
  votes: { for: number; against: number; abstain: number };
  description?: string;
  createdDate?: string;
}

interface AdminState {
  articles: Article[];
  jobs: Job[];
  officials: Official[];
  legislation: Legislation[];
}

const defaultOfficials: Official[] = [
  {
    id: 'OFF-001',
    name: 'Dr. Elara Voss',
    title: 'Minister',
    council: 'Science & Technology Council',
    portfolio: 'Digital Infrastructure',
    termStart: '2026-01-01',
    termEnd: '2026-03-31',
    bio: 'Dr. Voss brings 15 years of experience in distributed systems and digital governance.',
    status: 'Active'
  },
  {
    id: 'OFF-002',
    name: 'Marcus Chen',
    title: 'Minister',
    council: 'Environment & Territory Council',
    portfolio: 'Ecological Policy',
    termStart: '2026-01-01',
    termEnd: '2026-03-31',
    bio: 'Marcus is a recognized expert in wetland ecology and conservation biology.',
    status: 'Active'
  },
  {
    id: 'OFF-003',
    name: 'Amara Okafor',
    title: 'Minister',
    council: 'Governance & Civic Affairs Council',
    portfolio: 'Civic Engagement',
    termStart: '2026-01-01',
    termEnd: '2026-03-31',
    bio: 'Amara has dedicated her career to participatory democracy and civic technology.',
    status: 'Active'
  },
  {
    id: 'OFF-004',
    name: 'Lukas Brenner',
    title: 'Minister',
    council: 'Diplomacy & External Relations Council',
    portfolio: 'International Relations',
    termStart: '2026-01-01',
    termEnd: '2026-03-31',
    bio: 'Lukas brings extensive diplomatic experience from the United Nations.',
    status: 'Active'
  },
  {
    id: 'OFF-005',
    name: 'Sofia Petrov',
    title: 'Minister',
    council: 'Economics & Trade Council',
    portfolio: 'Economic Development',
    termStart: '2026-01-01',
    termEnd: '2026-03-31',
    bio: 'Sofia is an economist specializing in digital currencies and alternative economic systems.',
    status: 'Active'
  },
  {
    id: 'OFF-006',
    name: 'Kai Nakamura',
    title: 'Minister',
    council: 'Arts & Culture Council',
    portfolio: 'Cultural Affairs',
    termStart: '2026-01-01',
    termEnd: '2026-03-31',
    bio: 'Kai is an accomplished artist and cultural curator with exhibitions worldwide.',
    status: 'Active'
  },
  {
    id: 'OFF-007',
    name: 'Iris de Vries',
    title: 'Minister',
    council: 'Science & Technology Council',
    portfolio: 'Scientific Research',
    termStart: '2026-01-01',
    termEnd: '2026-03-31',
    bio: 'Dr. de Vries holds PhDs in both Physics and Computer Science.',
    status: 'Active'
  },
  {
    id: 'OFF-008',
    name: 'Tomás Rivera',
    title: 'Minister',
    council: 'Governance & Civic Affairs Council',
    portfolio: 'Public Transparency',
    termStart: '2026-01-01',
    termEnd: '2026-03-31',
    bio: 'Tomás is a transparency advocate and open data specialist.',
    status: 'Active'
  }
];

export default function AdminPanel() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [userRole, setUserRole] = useState<UserRole>(null);
  const [activeSection, setActiveSection] = useState('dashboard');
  const [users, setUsers] = useState<User[]>([]);
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [loginError, setLoginError] = useState('');
  const [showCreateAccount, setShowCreateAccount] = useState(false);
  const [newAccount, setNewAccount] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    name: '',
    email: '',
    role: 'reporter' as UserRole
  });
  const [accountError, setAccountError] = useState('');
  const [adminData, setAdminData] = useState<AdminState>({
    articles: [],
    jobs: [],
    officials: [],
    legislation: []
  });
  const [editingArticle, setEditingArticle] = useState<Article | null>(null);
  const [showArticleForm, setShowArticleForm] = useState(false);
  const [editingOfficial, setEditingOfficial] = useState<Official | null>(null);
  const [showOfficialForm, setShowOfficialForm] = useState(false);
  const [editingLegislation, setEditingLegislation] = useState<Legislation | null>(null);
  const [showLegislationForm, setShowLegislationForm] = useState(false);

  // Load data from localStorage or use defaults
  useEffect(() => {
    const savedData = localStorage.getItem('ardanisAdminData');
    if (savedData) {
      const data = JSON.parse(savedData);
      setAdminData({
        articles: data.articles || articles,
        jobs: data.jobs || jobs,
        officials: data.officials || defaultOfficials,
        legislation: data.legislation || [
          { id: 'ARD-L-2026-001', title: 'Digital Commons Expansion Act', sponsor: 'Governance Council', status: 'Passed', votes: { for: 72, against: 3, abstain: 10 } },
          { id: 'ARD-L-2026-002', title: 'Biodiversity Corridor Protection Bill', sponsor: 'Environment Council', status: 'In Progress', votes: { for: 48, against: 12, abstain: 8 } },
          { id: 'ARD-L-2026-003', title: 'E-Resident Voting Rights Amendment', sponsor: 'Citizen Petition #47', status: 'In Progress', votes: { for: 35, against: 22, abstain: 15 } },
          { id: 'ARD-L-2026-004', title: 'Open Data Transparency Mandate', sponsor: 'Transparency Portfolio', status: 'Draft', votes: { for: 0, against: 0, abstain: 0 } },
          { id: 'ARD-L-2026-005', title: 'Renewable Energy Infrastructure Fund', sponsor: 'Science & Technology', status: 'Draft', votes: { for: 0, against: 0, abstain: 0 } },
          { id: 'ARD-L-2026-006', title: 'Cultural Heritage Preservation Act', sponsor: 'Arts & Culture', status: 'Draft', votes: { for: 0, against: 0, abstain: 0 } }
        ]
      });
    } else {
      setAdminData({
        articles: articles,
        jobs: jobs,
        officials: defaultOfficials,
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

  // Load users from localStorage
  useEffect(() => {
    const savedUsers = localStorage.getItem('ardanisAdminUsers');
    if (savedUsers) {
      setUsers(JSON.parse(savedUsers));
    } else {
      // No users exist - show setup screen
      setUsers([]);
    }
  }, []);

  // Save users to localStorage whenever they change
  useEffect(() => {
    if (users.length > 0) {
      localStorage.setItem('ardanisAdminUsers', JSON.stringify(users));
    }
  }, [users]);

  // Authentication functions
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    
    const user = users.find(u => u.username === loginForm.username && u.password === loginForm.password);
    
    if (user) {
      setCurrentUser(user);
      setUserRole(user.role);
      setIsLoggedIn(true);
      
      // Update last login
      const updatedUsers = users.map(u => 
        u.id === user.id ? { ...u, lastLogin: new Date().toISOString() } : u
      );
      setUsers(updatedUsers);
      
      // Clear login form
      setLoginForm({ username: '', password: '' });
    } else {
      setLoginError('Invalid username or password');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    setUserRole(null);
    setActiveSection('dashboard');
    setLoginForm({ username: '', password: '' });
    setLoginError('');
  };

  // Account management functions (admin only)
  const handleCreateAccount = (e: React.FormEvent) => {
    e.preventDefault();
    setAccountError('');

    // Validation
    if (!newAccount.username || !newAccount.password || !newAccount.name || !newAccount.email) {
      setAccountError('All fields are required');
      return;
    }

    if (newAccount.password !== newAccount.confirmPassword) {
      setAccountError('Passwords do not match');
      return;
    }

    if (newAccount.password.length < 6) {
      setAccountError('Password must be at least 6 characters');
      return;
    }

    // Check for unique username
    if (users.some(u => u.username.toLowerCase() === newAccount.username.toLowerCase())) {
      setAccountError('Username already exists');
      return;
    }

    // Check for unique email
    if (users.some(u => u.email.toLowerCase() === newAccount.email.toLowerCase())) {
      setAccountError('Email already exists');
      return;
    }

    // Create new user
    const newUser: User = {
      id: `USR-${Date.now()}`,
      username: newAccount.username,
      password: newAccount.password,
      role: newAccount.role,
      name: newAccount.name,
      email: newAccount.email,
      createdAt: new Date().toISOString()
    };

    setUsers([...users, newUser]);
    
    // Reset form
    setNewAccount({
      username: '',
      password: '',
      confirmPassword: '',
      name: '',
      email: '',
      role: 'reporter'
    });
    setShowCreateAccount(false);
  };

  const handleDeleteUser = (userId: string) => {
    if (userId === currentUser?.id) {
      alert('You cannot delete your own account');
      return;
    }

    if (confirm('Are you sure you want to delete this user account?')) {
      setUsers(users.filter(u => u.id !== userId));
    }
  };

  // Article Management
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

  const handlePublishArticle = (id: string) => {
    const updated = adminData.articles.map(a => 
      a.id === id ? { ...a, status: 'Published' as any } : a
    );
    setAdminData({ ...adminData, articles: updated });
  };

  const handleDraftArticle = (id: string) => {
    const updated = adminData.articles.map(a => 
      a.id === id ? { ...a, status: 'Draft' as any } : a
    );
    setAdminData({ ...adminData, articles: updated });
  };

  // Officials Management
  const handleDeleteOfficial = (id: string) => {
    if (confirm('Are you sure you want to remove this official?')) {
      setAdminData({
        ...adminData,
        officials: adminData.officials.filter(o => o.id !== id)
      });
    }
  };

  const handleSaveOfficial = (official: Official) => {
    const existingIndex = adminData.officials.findIndex(o => o.id === official.id);
    if (existingIndex >= 0) {
      const updated = [...adminData.officials];
      updated[existingIndex] = official;
      setAdminData({ ...adminData, officials: updated });
    } else {
      setAdminData({
        ...adminData,
        officials: [...adminData.officials, official]
      });
    }
    setEditingOfficial(null);
    setShowOfficialForm(false);
  };

  // Legislation Management
  const handleDeleteLegislation = (id: string) => {
    if (confirm('Are you sure you want to delete this legislation?')) {
      setAdminData({
        ...adminData,
        legislation: adminData.legislation.filter(l => l.id !== id)
      });
    }
  };

  const handleSaveLegislation = (legislation: Legislation) => {
    const existingIndex = adminData.legislation.findIndex(l => l.id === legislation.id);
    if (existingIndex >= 0) {
      const updated = [...adminData.legislation];
      updated[existingIndex] = legislation;
      setAdminData({ ...adminData, legislation: updated });
    } else {
      setAdminData({
        ...adminData,
        legislation: [...adminData.legislation, legislation]
      });
    }
    setEditingLegislation(null);
    setShowLegislationForm(false);
  };

  const handleMakeLaw = (id: string) => {
    if (confirm('Promote this bill to law? This will change its status to "Passed".')) {
      const updated = adminData.legislation.map(l => 
        l.id === id ? { ...l, status: 'Passed' as const } : l
      );
      setAdminData({ ...adminData, legislation: updated });
    }
  };

  // Jobs Management
  const handleDeleteJob = (id: string) => {
    if (confirm('Are you sure you want to delete this job posting?')) {
      setAdminData({
        ...adminData,
        jobs: adminData.jobs.filter(j => j.id !== id)
      });
    }
  };

  // Initial Setup Screen (when no users exist)
  if (users.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="glass-card rounded-2xl max-w-2xl w-full p-8">
          <div className="text-center mb-8">
            <div className="inline-block mb-4">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-bright to-violet flex items-center justify-center">
                <i className="fa-solid fa-user-plus text-4xl text-white"></i>
              </div>
            </div>
            <h1 className="text-3xl font-display font-bold text-white mb-2">
              Initial Setup Required
            </h1>
            <p className="text-white/60">
              No administrator accounts exist. Please create the first admin account to begin.
            </p>
          </div>

          <form onSubmit={handleCreateAccount} className="space-y-4">
            <div>
              <label className="block text-white/80 mb-2 text-sm font-medium">
                Full Name
              </label>
              <input
                type="text"
                value={newAccount.name}
                onChange={(e) => setNewAccount({ ...newAccount, name: e.target.value })}
                className="w-full bg-midnight/50 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-cyan-bright focus:outline-none transition-colors"
                placeholder="John Doe"
                required
              />
            </div>

            <div>
              <label className="block text-white/80 mb-2 text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                value={newAccount.email}
                onChange={(e) => setNewAccount({ ...newAccount, email: e.target.value })}
                className="w-full bg-midnight/50 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-cyan-bright focus:outline-none transition-colors"
                placeholder="admin@ardan.gov"
                required
              />
            </div>

            <div>
              <label className="block text-white/80 mb-2 text-sm font-medium">
                Username
              </label>
              <input
                type="text"
                value={newAccount.username}
                onChange={(e) => setNewAccount({ ...newAccount, username: e.target.value })}
                className="w-full bg-midnight/50 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-cyan-bright focus:outline-none transition-colors"
                placeholder="admin"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-white/80 mb-2 text-sm font-medium">
                  Password
                </label>
                <input
                  type="password"
                  value={newAccount.password}
                  onChange={(e) => setNewAccount({ ...newAccount, password: e.target.value })}
                  className="w-full bg-midnight/50 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-cyan-bright focus:outline-none transition-colors"
                  placeholder="Min 6 characters"
                  required
                />
              </div>
              <div>
                <label className="block text-white/80 mb-2 text-sm font-medium">
                  Confirm Password
                </label>
                <input
                  type="password"
                  value={newAccount.confirmPassword}
                  onChange={(e) => setNewAccount({ ...newAccount, confirmPassword: e.target.value })}
                  className="w-full bg-midnight/50 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-cyan-bright focus:outline-none transition-colors"
                  placeholder="Repeat password"
                  required
                />
              </div>
            </div>

            {accountError && (
              <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-3 text-red-400 text-sm">
                <i className="fa-solid fa-exclamation-triangle mr-2"></i>
                {accountError}
              </div>
            )}

            <div className="bg-cyan-bright/10 border border-cyan-bright/30 rounded-lg p-4 text-sm text-cyan-bright">
              <i className="fa-solid fa-shield-halved mr-2"></i>
              <strong>Security Notice:</strong> This account will have full administrative privileges. Choose a strong password and keep it secure.
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-cyan-bright to-violet rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-bright/50 transition-all"
            >
              <i className="fa-solid fa-user-plus mr-2"></i>
              Create Administrator Account
            </button>
          </form>
        </div>
      </div>
    );
  }

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
              Enter your credentials to access the administrative panel
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-white/80 mb-2 text-sm font-medium">
                Username
              </label>
              <input
                type="text"
                value={loginForm.username}
                onChange={(e) => setLoginForm({ ...loginForm, username: e.target.value })}
                className="w-full bg-midnight/50 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-cyan-bright focus:outline-none transition-colors"
                placeholder="Enter your username"
                required
              />
            </div>

            <div>
              <label className="block text-white/80 mb-2 text-sm font-medium">
                Password
              </label>
              <input
                type="password"
                value={loginForm.password}
                onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                className="w-full bg-midnight/50 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-cyan-bright focus:outline-none transition-colors"
                placeholder="Enter your password"
                required
              />
            </div>

            {loginError && (
              <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-3 text-red-400 text-sm">
                <i className="fa-solid fa-exclamation-triangle mr-2"></i>
                {loginError}
              </div>
            )}

            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-cyan-bright to-violet rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-bright/50 transition-all"
            >
              <i className="fa-solid fa-right-to-bracket mr-2"></i>
              Sign In
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-white/10">
            <p className="text-xs text-white/40 text-center">
              <i className="fa-solid fa-lock mr-1"></i>
              This is a restricted area. All actions are logged.
            </p>
            <p className="text-xs text-white/30 text-center mt-2">
              Contact your system administrator if you need access.
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
                <p className="text-xs text-white/60">
                  Welcome, <span className="text-cyan-bright font-medium">{currentUser?.name}</span>
                  <span className="ml-2 px-2 py-0.5 bg-cyan-bright/20 rounded text-cyan-bright capitalize text-[10px]">
                    {userRole}
                  </span>
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
              onClick={() => setActiveSection('officials')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                activeSection === 'officials'
                  ? 'bg-cyan-bright/20 text-cyan-bright'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              <i className="fa-solid fa-user-tie mr-2"></i>
              Officials
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
          {(userRole === 'admin') && (
            <button
              onClick={() => setActiveSection('accounts')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                activeSection === 'accounts'
                  ? 'bg-cyan-bright/20 text-cyan-bright'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              <i className="fa-solid fa-users-gear mr-2"></i>
              Accounts
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
                    <i className="fa-solid fa-user-tie text-gold text-xl"></i>
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-1">
                  {adminData.officials.length}
                </div>
                <div className="text-white/60">Active Officials</div>
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
                    readTime: '5 min',
                    status: 'Draft'
                  } as any);
                  setShowArticleForm(true);
                }}
                className="px-6 py-3 bg-gradient-to-r from-cyan-bright to-violet rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-bright/50 transition-all"
              >
                <i className="fa-solid fa-plus mr-2"></i>
                Create New Article
              </button>
            </div>

            <div className="space-y-4">
              {adminData.articles.map(article => (
                <div key={article.id} className="glass-card rounded-xl p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${
                          (article as any).status === 'Published' 
                            ? 'bg-green-500/20 text-green-400 border-green-500/50'
                            : 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50'
                        }`}>
                          {(article as any).status || 'Draft'}
                        </span>
                        <span className="px-3 py-1 bg-cyan-bright/20 border border-cyan-bright/50 rounded-full text-cyan-bright text-xs">
                          {article.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {article.title}
                      </h3>
                      <p className="text-white/60 text-sm mb-2">
                        By {article.author} - {article.authorTitle}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      {(article as any).status === 'Draft' ? (
                        <button
                          onClick={() => handlePublishArticle(article.id)}
                          className="px-4 py-2 border border-green-500/50 rounded-lg hover:bg-green-500/10 transition-all text-green-400"
                          title="Publish"
                        >
                          <i className="fa-solid fa-check"></i>
                        </button>
                      ) : (
                        <button
                          onClick={() => handleDraftArticle(article.id)}
                          className="px-4 py-2 border border-yellow-500/50 rounded-lg hover:bg-yellow-500/10 transition-all text-yellow-400"
                          title="Make Draft"
                        >
                          <i className="fa-solid fa-pen"></i>
                        </button>
                      )}
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

        {/* Officials Management */}
        {activeSection === 'officials' && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-display font-bold text-white">
                Manage Officials
              </h2>
              <button
                onClick={() => {
                  setEditingOfficial({
                    id: `OFF-${Date.now()}`,
                    name: '',
                    title: 'Minister',
                    council: '',
                    portfolio: '',
                    termStart: new Date().toISOString().split('T')[0],
                    termEnd: '',
                    bio: '',
                    status: 'Active'
                  });
                  setShowOfficialForm(true);
                }}
                className="px-6 py-3 bg-gradient-to-r from-cyan-bright to-violet rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-bright/50 transition-all"
              >
                <i className="fa-solid fa-plus mr-2"></i>
                Add Official
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {adminData.officials.map(official => (
                <div key={official.id} className="glass-card rounded-xl p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {official.name}
                      </h3>
                      <p className="text-cyan-bright mb-1">{official.portfolio}</p>
                      <p className="text-white/60 text-sm">{official.council}</p>
                      <p className="text-white/40 text-xs mt-2">
                        Term: {official.termStart} to {official.termEnd}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          setEditingOfficial(official);
                          setShowOfficialForm(true);
                        }}
                        className="px-3 py-2 border border-cyan-bright/50 rounded-lg hover:bg-cyan-bright/10 transition-all text-cyan-bright"
                      >
                        <i className="fa-solid fa-edit"></i>
                      </button>
                      <button
                        onClick={() => handleDeleteOfficial(official.id)}
                        className="px-3 py-2 border border-red-500/50 rounded-lg hover:bg-red-500/10 transition-all text-red-400"
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

        {/* Legislation Management */}
        {activeSection === 'legislation' && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-display font-bold text-white">
                Manage Legislation
              </h2>
              <button
                onClick={() => {
                  setEditingLegislation({
                    id: `ARD-L-2026-${String(adminData.legislation.length + 1).padStart(3, '0')}`,
                    title: '',
                    sponsor: '',
                    status: 'Draft',
                    votes: { for: 0, against: 0, abstain: 0 },
                    description: '',
                    createdDate: new Date().toISOString().split('T')[0]
                  });
                  setShowLegislationForm(true);
                }}
                className="px-6 py-3 bg-gradient-to-r from-cyan-bright to-violet rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-bright/50 transition-all"
              >
                <i className="fa-solid fa-plus mr-2"></i>
                Create Bill/Act
              </button>
            </div>

            <div className="space-y-4">
              {adminData.legislation.map(leg => (
                <div key={leg.id} className="glass-card rounded-xl p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-white/40 text-xs font-mono">{leg.id}</span>
                        <span className={`px-3 py-1 rounded-full text-xs ${
                          leg.status === 'Passed' ? 'bg-green-500/20 text-green-400' :
                          leg.status === 'Bill' ? 'bg-blue-500/20 text-blue-400' :
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
                    <div className="flex gap-2">
                      {leg.status !== 'Passed' && (
                        <button
                          onClick={() => handleMakeLaw(leg.id)}
                          className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg hover:shadow-lg hover:shadow-green-500/50 transition-all text-white font-medium"
                          title="Make Law"
                        >
                          <i className="fa-solid fa-scale-balanced mr-2"></i>
                          Make Law
                        </button>
                      )}
                      <button
                        onClick={() => {
                          setEditingLegislation(leg);
                          setShowLegislationForm(true);
                        }}
                        className="px-4 py-2 border border-cyan-bright/50 rounded-lg hover:bg-cyan-bright/10 transition-all text-cyan-bright"
                      >
                        <i className="fa-solid fa-edit"></i>
                      </button>
                      <button
                        onClick={() => handleDeleteLegislation(leg.id)}
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

        {/* Accounts Management Section (Admin Only) */}
        {activeSection === 'accounts' && userRole === 'admin' && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-display font-bold text-white">
                User Accounts Management
              </h2>
              <button
                onClick={() => setShowCreateAccount(true)}
                className="px-6 py-3 bg-gradient-to-r from-cyan-bright to-violet rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-bright/50 transition-all"
              >
                <i className="fa-solid fa-user-plus mr-2"></i>
                Create New Account
              </button>
            </div>

            <div className="glass-card rounded-xl p-6 mb-6">
              <h3 className="text-xl font-display font-bold text-white mb-4">
                <i className="fa-solid fa-info-circle text-cyan-bright mr-2"></i>
                Account Statistics
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">{users.length}</div>
                  <div className="text-xs text-white/60">Total Users</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-bright">{users.filter(u => u.role === 'admin').length}</div>
                  <div className="text-xs text-white/60">Admins</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gold">{users.filter(u => u.role === 'official').length}</div>
                  <div className="text-xs text-white/60">Officials</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-violet">{users.filter(u => u.role === 'moderator').length}</div>
                  <div className="text-xs text-white/60">Moderators</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-light">{users.filter(u => u.role === 'reporter').length}</div>
                  <div className="text-xs text-white/60">Reporters</div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {users.map(user => (
                <div key={user.id} className="glass-card rounded-xl p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-bright to-violet flex items-center justify-center text-white font-bold">
                          {user.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">{user.name}</h3>
                          <p className="text-sm text-white/60">@{user.username}</p>
                        </div>
                      </div>
                      <div className="mt-3 space-y-1 text-sm">
                        <div className="flex items-center gap-2 text-white/70">
                          <i className="fa-solid fa-envelope text-cyan-bright w-5"></i>
                          <span>{user.email}</span>
                        </div>
                        <div className="flex items-center gap-2 text-white/70">
                          <i className="fa-solid fa-user-tag text-gold w-5"></i>
                          <span className="capitalize px-2 py-0.5 bg-cyan-bright/20 rounded text-cyan-bright text-xs">{user.role}</span>
                        </div>
                        <div className="flex items-center gap-2 text-white/70">
                          <i className="fa-solid fa-calendar text-violet w-5"></i>
                          <span>Created: {new Date(user.createdAt).toLocaleDateString()}</span>
                        </div>
                        {user.lastLogin && (
                          <div className="flex items-center gap-2 text-white/70">
                            <i className="fa-solid fa-clock text-cyan-light w-5"></i>
                            <span>Last login: {new Date(user.lastLogin).toLocaleString()}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {user.id !== currentUser?.id && (
                        <button
                          onClick={() => handleDeleteUser(user.id)}
                          className="px-3 py-2 border border-red-500/50 rounded-lg hover:bg-red-500/10 transition-all text-red-400"
                          title="Delete Account"
                        >
                          <i className="fa-solid fa-trash"></i>
                        </button>
                      )}
                      {user.id === currentUser?.id && (
                        <span className="px-3 py-2 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-sm">
                          <i className="fa-solid fa-user-check mr-1"></i>
                          Current User
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Create Account Modal */}
      {showCreateAccount && userRole === 'admin' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="glass-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-midnight/90 backdrop-blur-sm p-6 border-b border-white/10 flex justify-between items-center">
              <h2 className="text-2xl font-display font-bold text-white">
                Create New User Account
              </h2>
              <button
                onClick={() => {
                  setShowCreateAccount(false);
                  setAccountError('');
                  setNewAccount({
                    username: '',
                    password: '',
                    confirmPassword: '',
                    name: '',
                    email: '',
                    role: 'reporter'
                  });
                }}
                className="text-white/60 hover:text-white text-2xl"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <form onSubmit={handleCreateAccount} className="p-6 space-y-4">
              <div>
                <label className="block text-white/80 mb-2">Full Name</label>
                <input
                  type="text"
                  value={newAccount.name}
                  onChange={(e) => setNewAccount({...newAccount, name: e.target.value})}
                  className="w-full bg-midnight/50 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-cyan-bright focus:outline-none"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-white/80 mb-2">Email</label>
                <input
                  type="email"
                  value={newAccount.email}
                  onChange={(e) => setNewAccount({...newAccount, email: e.target.value})}
                  className="w-full bg-midnight/50 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-cyan-bright focus:outline-none"
                  placeholder="user@ardan.gov"
                />
              </div>
              <div>
                <label className="block text-white/80 mb-2">Username</label>
                <input
                  type="text"
                  value={newAccount.username}
                  onChange={(e) => setNewAccount({...newAccount, username: e.target.value})}
                  className="w-full bg-midnight/50 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-cyan-bright focus:outline-none"
                  placeholder="johndoe"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/80 mb-2">Password</label>
                  <input
                    type="password"
                    value={newAccount.password}
                    onChange={(e) => setNewAccount({...newAccount, password: e.target.value})}
                    className="w-full bg-midnight/50 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-cyan-bright focus:outline-none"
                    placeholder="Min 6 characters"
                  />
                </div>
                <div>
                  <label className="block text-white/80 mb-2">Confirm Password</label>
                  <input
                    type="password"
                    value={newAccount.confirmPassword}
                    onChange={(e) => setNewAccount({...newAccount, confirmPassword: e.target.value})}
                    className="w-full bg-midnight/50 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-cyan-bright focus:outline-none"
                    placeholder="Repeat password"
                  />
                </div>
              </div>
              <div>
                <label className="block text-white/80 mb-2">Role</label>
                <select
                  value={newAccount.role || 'reporter'}
                  onChange={(e) => setNewAccount({...newAccount, role: e.target.value as UserRole})}
                  className="w-full bg-midnight/50 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-cyan-bright focus:outline-none"
                >
                  <option value="reporter">Reporter</option>
                  <option value="moderator">Moderator</option>
                  <option value="admin">Administrator</option>
                  <option value="official">Government Official</option>
                </select>
              </div>

              {accountError && (
                <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-3 text-red-400 text-sm">
                  <i className="fa-solid fa-exclamation-triangle mr-2"></i>
                  {accountError}
                </div>
              )}

              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-bright to-violet rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-bright/50 transition-all"
                >
                  <i className="fa-solid fa-user-plus mr-2"></i>
                  Create Account
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowCreateAccount(false);
                    setAccountError('');
                  }}
                  className="px-6 py-3 border border-white/20 rounded-lg font-medium hover:bg-white/5 transition-all"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Article Edit Modal */}
      {showArticleForm && editingArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="glass-card rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-midnight/90 backdrop-blur-sm p-6 border-b border-white/10 flex justify-between items-center">
              <h2 className="text-2xl font-display font-bold text-white">
                {(editingArticle as any).id?.startsWith('ART-') ? 'Create New Article' : 'Edit Article'}
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
                  <label className="block text-white/80 mb-2">Status</label>
                  <select
                    value={(editingArticle as any).status || 'Draft'}
                    onChange={(e) => setEditingArticle({...editingArticle, status: e.target.value } as any)}
                    className="w-full bg-midnight/50 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-cyan-bright focus:outline-none"
                  >
                    <option value="Draft">Draft</option>
                    <option value="Published">Published</option>
                  </select>
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

      {/* Official Edit Modal */}
      {showOfficialForm && editingOfficial && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="glass-card rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-midnight/90 backdrop-blur-sm p-6 border-b border-white/10 flex justify-between items-center">
              <h2 className="text-2xl font-display font-bold text-white">
                {editingOfficial.id?.startsWith('OFF-') && editingOfficial.name === '' ? 'Add New Official' : 'Edit Official'}
              </h2>
              <button
                onClick={() => {
                  setShowOfficialForm(false);
                  setEditingOfficial(null);
                }}
                className="text-white/60 hover:text-white text-2xl"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-white/80 mb-2">Name</label>
                <input
                  type="text"
                  value={editingOfficial.name}
                  onChange={(e) => setEditingOfficial({...editingOfficial, name: e.target.value})}
                  className="w-full bg-midnight/50 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-cyan-bright focus:outline-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/80 mb-2">Title</label>
                  <input
                    type="text"
                    value={editingOfficial.title}
                    onChange={(e) => setEditingOfficial({...editingOfficial, title: e.target.value})}
                    className="w-full bg-midnight/50 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-cyan-bright focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-white/80 mb-2">Status</label>
                  <select
                    value={editingOfficial.status}
                    onChange={(e) => setEditingOfficial({...editingOfficial, status: e.target.value as any})}
                    className="w-full bg-midnight/50 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-cyan-bright focus:outline-none"
                  >
                    <option value="Active">Active</option>
                    <option value="On Leave">On Leave</option>
                    <option value="Transitioning">Transitioning</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-white/80 mb-2">Council</label>
                <input
                  type="text"
                  value={editingOfficial.council}
                  onChange={(e) => setEditingOfficial({...editingOfficial, council: e.target.value})}
                  className="w-full bg-midnight/50 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-cyan-bright focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-white/80 mb-2">Portfolio</label>
                <input
                  type="text"
                  value={editingOfficial.portfolio}
                  onChange={(e) => setEditingOfficial({...editingOfficial, portfolio: e.target.value})}
                  className="w-full bg-midnight/50 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-cyan-bright focus:outline-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/80 mb-2">Term Start</label>
                  <input
                    type="date"
                    value={editingOfficial.termStart}
                    onChange={(e) => setEditingOfficial({...editingOfficial, termStart: e.target.value})}
                    className="w-full bg-midnight/50 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-cyan-bright focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-white/80 mb-2">Term End</label>
                  <input
                    type="date"
                    value={editingOfficial.termEnd}
                    onChange={(e) => setEditingOfficial({...editingOfficial, termEnd: e.target.value})}
                    className="w-full bg-midnight/50 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-cyan-bright focus:outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block text-white/80 mb-2">Biography</label>
                <textarea
                  value={editingOfficial.bio}
                  onChange={(e) => setEditingOfficial({...editingOfficial, bio: e.target.value})}
                  rows={4}
                  className="w-full bg-midnight/50 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-cyan-bright focus:outline-none resize-none"
                />
              </div>
              <div className="flex gap-4 pt-4">
                <button
                  onClick={() => handleSaveOfficial(editingOfficial)}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-bright to-violet rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-bright/50 transition-all"
                >
                  <i className="fa-solid fa-save mr-2"></i>
                  Save Official
                </button>
                <button
                  onClick={() => {
                    setShowOfficialForm(false);
                    setEditingOfficial(null);
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

      {/* Legislation Edit Modal */}
      {showLegislationForm && editingLegislation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="glass-card rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-midnight/90 backdrop-blur-sm p-6 border-b border-white/10 flex justify-between items-center">
              <h2 className="text-2xl font-display font-bold text-white">
                {editingLegislation.title === '' ? 'Create New Bill/Act' : 'Edit Legislation'}
              </h2>
              <button
                onClick={() => {
                  setShowLegislationForm(false);
                  setEditingLegislation(null);
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
                  value={editingLegislation.title}
                  onChange={(e) => setEditingLegislation({...editingLegislation, title: e.target.value})}
                  className="w-full bg-midnight/50 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-cyan-bright focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-white/80 mb-2">Description</label>
                <textarea
                  value={editingLegislation.description || ''}
                  onChange={(e) => setEditingLegislation({...editingLegislation, description: e.target.value})}
                  rows={4}
                  className="w-full bg-midnight/50 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-cyan-bright focus:outline-none resize-none"
                />
              </div>
              <div>
                <label className="block text-white/80 mb-2">Sponsor</label>
                <input
                  type="text"
                  value={editingLegislation.sponsor}
                  onChange={(e) => setEditingLegislation({...editingLegislation, sponsor: e.target.value})}
                  className="w-full bg-midnight/50 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-cyan-bright focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-white/80 mb-2">Status</label>
                <select
                  value={editingLegislation.status}
                  onChange={(e) => setEditingLegislation({...editingLegislation, status: e.target.value as any})}
                  className="w-full bg-midnight/50 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-cyan-bright focus:outline-none"
                >
                  <option value="Draft">Draft</option>
                  <option value="Bill">Bill</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Passed">Passed (Law)</option>
                </select>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-white/80 mb-2">Votes For</label>
                  <input
                    type="number"
                    value={editingLegislation.votes.for}
                    onChange={(e) => setEditingLegislation({...editingLegislation, votes: {...editingLegislation.votes, for: parseInt(e.target.value) || 0}})}
                    className="w-full bg-midnight/50 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-cyan-bright focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-white/80 mb-2">Votes Against</label>
                  <input
                    type="number"
                    value={editingLegislation.votes.against}
                    onChange={(e) => setEditingLegislation({...editingLegislation, votes: {...editingLegislation.votes, against: parseInt(e.target.value) || 0}})}
                    className="w-full bg-midnight/50 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-cyan-bright focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-white/80 mb-2">Abstentions</label>
                  <input
                    type="number"
                    value={editingLegislation.votes.abstain}
                    onChange={(e) => setEditingLegislation({...editingLegislation, votes: {...editingLegislation.votes, abstain: parseInt(e.target.value) || 0}})}
                    className="w-full bg-midnight/50 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-cyan-bright focus:outline-none"
                  />
                </div>
              </div>
              <div className="flex gap-4 pt-4">
                <button
                  onClick={() => handleSaveLegislation(editingLegislation)}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-bright to-violet rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-bright/50 transition-all"
                >
                  <i className="fa-solid fa-save mr-2"></i>
                  Save Legislation
                </button>
                <button
                  onClick={() => {
                    setShowLegislationForm(false);
                    setEditingLegislation(null);
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
