import { useState, useEffect } from 'react';

interface Official {
  id: string;
  name: string;
  title: string;
  council: string;
  portfolio: string;
  termStart: string;
  termEnd: string;
  bio: string;
  image?: string;
  status: 'Active' | 'On Leave' | 'Transitioning';
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
    bio: 'Dr. Voss brings 15 years of experience in distributed systems and digital governance. Previously led blockchain initiatives at the European Digital Rights Foundation.',
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
    bio: 'Marcus is a recognized expert in wetland ecology and conservation biology with publications in Nature and Science. Led the Danube Biodiversity Corridor initiative.',
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
    bio: 'Amara has dedicated her career to participatory democracy and civic technology. Founded the Open Governance Initiative and advised multiple micronational projects.',
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
    bio: 'Lukas brings extensive diplomatic experience from the United Nations and various international organizations. Fluent in 6 languages and specialist in micronational diplomacy.',
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
    bio: 'Sofia is an economist specializing in digital currencies and alternative economic systems. Previously worked with the World Bank on financial inclusion projects.',
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
    bio: 'Kai is an accomplished artist and cultural curator with exhibitions in major galleries worldwide. Passionate about making art accessible and fostering creative communities.',
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
    bio: 'Dr. de Vries holds PhDs in both Physics and Computer Science. Led research teams at CERN and MIT before joining Ardanis to advance open scientific collaboration.',
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
    bio: 'Tomás is a transparency advocate and open data specialist. Previously worked with Transparency International and developed open government platforms for multiple cities.',
    status: 'Active'
  }
];

export default function Officials() {
  const [officials, setOfficials] = useState<Official[]>([]);
  const [selectedCouncil, setSelectedCouncil] = useState<string>('all');
  const [selectedOfficial, setSelectedOfficial] = useState<Official | null>(null);

  useEffect(() => {
    const savedData = localStorage.getItem('ardanisAdminData');
    if (savedData) {
      const data = JSON.parse(savedData);
      if (data.officials && data.officials.length > 0) {
        setOfficials(data.officials);
      } else {
        setOfficials(defaultOfficials);
      }
    } else {
      setOfficials(defaultOfficials);
    }
  }, []);

  const councils = ['all', ...Array.from(new Set(officials.map(o => o.council)))];

  const filteredOfficials = selectedCouncil === 'all' 
    ? officials 
    : officials.filter(o => o.council === selectedCouncil);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-500/20 text-green-400 border-green-500/50';
      case 'On Leave': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50';
      case 'Transitioning': return 'bg-blue-500/20 text-blue-400 border-blue-500/50';
      default: return 'bg-white/20 text-white/60 border-white/30';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet/20 via-primary/10 to-cyan-bright/5"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center">
            <div className="inline-block mb-6">
              <div className="glass-card px-6 py-2 rounded-full">
                <span className="text-violet font-medium">
                  <i className="fa-solid fa-user-tie mr-2"></i>
                  Government Leadership
                </span>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 gradient-text">
              Our Officials
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Meet the dedicated individuals serving the Sovereign Republic of Ardanis. 
              Our ministers are selected through the Merit-Syndicate system based on expertise, 
              experience, and commitment to public service.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-bright mb-2">{officials.length}</div>
              <div className="text-white/60">Active Officials</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gold mb-2">{councils.length - 1}</div>
              <div className="text-white/60">Government Councils</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-violet mb-2">Q1</div>
              <div className="text-white/60">Current Term</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-light mb-2">2026</div>
              <div className="text-white/60">Term Year</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="glass-card rounded-2xl p-6">
            <label className="block text-white/80 mb-3 font-medium">
              <i className="fa-solid fa-filter mr-2"></i>
              Filter by Council
            </label>
            <select
              value={selectedCouncil}
              onChange={(e) => setSelectedCouncil(e.target.value)}
              className="w-full bg-midnight/50 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-cyan-bright focus:outline-none transition-colors"
            >
              {councils.map(council => (
                <option key={council} value={council}>
                  {council === 'all' ? 'All Councils' : council}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Officials Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-display font-bold text-white mb-2">
              Current Ministers
            </h2>
            <p className="text-white/60">
              Showing {filteredOfficials.length} of {officials.length} officials
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredOfficials.map(official => (
              <div
                key={official.id}
                className="glass-card rounded-2xl p-6 hover:border-violet/50 transition-all cursor-pointer group"
                onClick={() => setSelectedOfficial(official)}
              >
                {/* Avatar */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-violet to-cyan-bright flex items-center justify-center text-2xl font-bold text-white">
                    {official.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white group-hover:text-violet transition-colors">
                      {official.name}
                    </h3>
                    <p className="text-cyan-bright text-sm">{official.title}</p>
                  </div>
                </div>

                {/* Status Badge */}
                <div className="mb-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(official.status)}`}>
                    {official.status}
                  </span>
                </div>

                {/* Portfolio */}
                <div className="mb-3">
                  <div className="text-xs text-white/60 mb-1">Portfolio</div>
                  <div className="text-gold font-medium">{official.portfolio}</div>
                </div>

                {/* Council */}
                <div className="mb-4">
                  <div className="text-xs text-white/60 mb-1">Council</div>
                  <div className="text-white/80 text-sm">{official.council}</div>
                </div>

                {/* Term */}
                <div className="pt-4 border-t border-white/10">
                  <div className="flex items-center justify-between text-xs text-white/60">
                    <span>
                      <i className="fa-solid fa-calendar mr-1"></i>
                      {formatDate(official.termStart)}
                    </span>
                    <span>to</span>
                    <span>{formatDate(official.termEnd)}</span>
                  </div>
                </div>

                {/* View Profile Button */}
                <button className="mt-4 w-full px-4 py-2 bg-gradient-to-r from-violet/20 to-cyan-bright/20 border border-violet/30 rounded-lg text-sm font-medium hover:from-violet/30 hover:to-cyan-bright/30 transition-all">
                  <i className="fa-solid fa-user mr-2"></i>
                  View Full Profile
                </button>
              </div>
            ))}
          </div>

          {filteredOfficials.length === 0 && (
            <div className="text-center py-16">
              <i className="fa-solid fa-user-tie text-6xl text-white/20 mb-4"></i>
              <p className="text-white/60 text-lg">No officials found for this council</p>
            </div>
          )}
        </div>
      </section>

      {/* Official Detail Modal */}
      {selectedOfficial && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="glass-card rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-midnight/90 backdrop-blur-sm p-6 border-b border-white/10 flex justify-between items-center">
              <h2 className="text-3xl font-display font-bold text-white">
                {selectedOfficial.name}
              </h2>
              <button
                onClick={() => setSelectedOfficial(null)}
                className="text-white/60 hover:text-white text-2xl"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div className="p-6 space-y-6">
              {/* Header with Avatar */}
              <div className="flex items-start gap-6">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-violet to-cyan-bright flex items-center justify-center text-3xl font-bold text-white flex-shrink-0">
                  {selectedOfficial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {selectedOfficial.name}
                  </h3>
                  <p className="text-cyan-bright text-lg mb-2">{selectedOfficial.title}</p>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(selectedOfficial.status)}`}>
                    {selectedOfficial.status}
                  </span>
                </div>
              </div>

              {/* Info Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="glass rounded-lg p-4">
                  <div className="text-xs text-white/60 mb-1">Portfolio</div>
                  <div className="text-gold font-bold text-lg">{selectedOfficial.portfolio}</div>
                </div>
                <div className="glass rounded-lg p-4">
                  <div className="text-xs text-white/60 mb-1">Council</div>
                  <div className="text-violet font-medium">{selectedOfficial.council}</div>
                </div>
                <div className="glass rounded-lg p-4">
                  <div className="text-xs text-white/60 mb-1">Term Start</div>
                  <div className="text-cyan-bright font-medium">{formatDate(selectedOfficial.termStart)}</div>
                </div>
                <div className="glass rounded-lg p-4">
                  <div className="text-xs text-white/60 mb-1">Term End</div>
                  <div className="text-cyan-light font-medium">{formatDate(selectedOfficial.termEnd)}</div>
                </div>
              </div>

              {/* Biography */}
              <div>
                <h4 className="text-xl font-display font-bold text-white mb-3">
                  <i className="fa-solid fa-user text-violet mr-2"></i>
                  Biography
                </h4>
                <p className="text-white/80 leading-relaxed">
                  {selectedOfficial.bio}
                </p>
              </div>

              {/* Responsibilities */}
              <div>
                <h4 className="text-xl font-display font-bold text-white mb-3">
                  <i className="fa-solid fa-briefcase text-gold mr-2"></i>
                  Key Responsibilities
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3 text-white/80">
                    <i className="fa-solid fa-check text-cyan-bright mt-1"></i>
                    <span>Oversee policy development and implementation in {selectedOfficial.portfolio.toLowerCase()}</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/80">
                    <i className="fa-solid fa-check text-cyan-bright mt-1"></i>
                    <span>Represent Ardanis in {selectedOfficial.council} meetings and sessions</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/80">
                    <i className="fa-solid fa-check text-cyan-bright mt-1"></i>
                    <span>Prepare quarterly reports for public transparency</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/80">
                    <i className="fa-solid fa-check text-cyan-bright mt-1"></i>
                    <span>Collaborate with other ministers on cross-council initiatives</span>
                  </li>
                </ul>
              </div>

              {/* Contact Information */}
              <div className="glass rounded-lg p-4 border border-violet/30">
                <h4 className="text-lg font-display font-bold text-white mb-3">
                  <i className="fa-solid fa-envelope text-violet mr-2"></i>
                  Contact Information
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-3 text-white/80">
                    <i className="fa-solid fa-envelope text-cyan-bright w-5"></i>
                    <span>{selectedOfficial.name.toLowerCase().replace(' ', '.')}@ardan.gov</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/80">
                    <i className="fa-solid fa-building text-gold w-5"></i>
                    <span>Vanguard Assembly Hall, Pocket West-B</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/80">
                    <i className="fa-solid fa-clock text-violet w-5"></i>
                    <span>Office Hours: Mon-Fri, 9:00 AM - 5:00 PM CET</span>
                  </div>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedOfficial(null)}
                className="w-full px-6 py-3 border border-white/20 rounded-lg font-medium hover:bg-white/5 transition-all"
              >
                Close Profile
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
