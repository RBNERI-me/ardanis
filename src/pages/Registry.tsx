const ministers = [
  { name: 'Dr. Elara Voss', portfolio: 'Digital Infrastructure', council: 'Science & Technology', status: 'Active', termExpiry: '2026-03-31' },
  { name: 'Marcus Chen', portfolio: 'Ecological Policy', council: 'Environment & Territory', status: 'Active', termExpiry: '2026-03-31' },
  { name: 'Amara Okafor', portfolio: 'Civic Engagement', council: 'Governance', status: 'Active', termExpiry: '2026-03-31' },
  { name: 'Lukas Brenner', portfolio: 'International Relations', council: 'Diplomacy', status: 'Active', termExpiry: '2026-03-31' },
  { name: 'Sofia Petrov', portfolio: 'Economic Development', council: 'Economics & Trade', status: 'Active', termExpiry: '2026-03-31' },
  { name: 'Kai Nakamura', portfolio: 'Cultural Affairs', council: 'Arts & Culture', status: 'Active', termExpiry: '2026-03-31' },
  { name: 'Iris de Vries', portfolio: 'Scientific Research', council: 'Science & Technology', status: 'Active', termExpiry: '2026-03-31' },
  { name: 'Tomás Rivera', portfolio: 'Public Transparency', council: 'Governance', status: 'Active', termExpiry: '2026-03-31' },
];

const legislation = [
  { id: 'ARD-L-2026-001', title: 'Digital Commons Expansion Act', sponsor: 'Governance Council', status: 'Passed', votes: { for: 72, against: 3, abstain: 10 } },
  { id: 'ARD-L-2026-002', title: 'Biodiversity Corridor Protection Bill', sponsor: 'Environment Council', status: 'In Progress', votes: { for: 48, against: 12, abstain: 8 } },
  { id: 'ARD-L-2026-003', title: 'E-Resident Voting Rights Amendment', sponsor: 'Citizen Petition #47', status: 'In Progress', votes: { for: 35, against: 22, abstain: 15 } },
  { id: 'ARD-L-2026-004', title: 'Open Data Transparency Mandate', sponsor: 'Transparency Portfolio', status: 'Draft', votes: { for: 0, against: 0, abstain: 0 } },
  { id: 'ARD-L-2026-005', title: 'Renewable Energy Infrastructure Fund', sponsor: 'Science & Technology', status: 'Draft', votes: { for: 0, against: 0, abstain: 0 } },
  { id: 'ARD-L-2026-006', title: 'Cultural Heritage Preservation Act', sponsor: 'Arts & Culture', status: 'Draft', votes: { for: 0, against: 0, abstain: 0 } },
];

const treasuryData = [
  { category: 'Digital Infrastructure', allocation: 2400000, spent: 1800000, remaining: 600000 },
  { category: 'Ecological Policy', allocation: 3200000, spent: 2100000, remaining: 1100000 },
  { category: 'Civic Engagement', allocation: 1800000, spent: 1200000, remaining: 600000 },
  { category: 'International Relations', allocation: 1500000, spent: 900000, remaining: 600000 },
  { category: 'Economic Development', allocation: 2800000, spent: 2000000, remaining: 800000 },
  { category: 'Cultural Affairs', allocation: 1200000, spent: 800000, remaining: 400000 },
  { category: 'Scientific Research', allocation: 2600000, spent: 1900000, remaining: 700000 },
  { category: 'Public Transparency', allocation: 900000, spent: 600000, remaining: 300000 },
];

function getStatusStyle(status: string) {
  switch (status) {
    case 'Passed': return 'bg-green-500/20 text-green-400 border-green-500/30';
    case 'In Progress': return 'bg-cyan-bright/10 text-cyan-bright border-cyan-bright/30';
    case 'Draft': return 'bg-gold/10 text-gold border-gold/30';
    default: return 'bg-white/10 text-white/60 border-white/20';
  }
}

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

function calculateVotingPercentage(votes: { for: number; against: number; abstain: number }) {
  const total = votes.for + votes.against + votes.abstain;
  if (total === 0) return 0;
  return Math.round((votes.for / total) * 100);
}

function exportTreasuryCSV() {
  const headers = ['Category', 'Allocation (AC)', 'Spent (AC)', 'Remaining (AC)', 'Utilization %'];
  const rows = treasuryData.map(item => [
    item.category,
    item.allocation,
    item.spent,
    item.remaining,
    Math.round((item.spent / item.allocation) * 100)
  ]);
  
  const csvContent = [
    headers.join(','),
    ...rows.map(row => row.join(','))
  ].join('\n');
  
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  link.setAttribute('href', url);
  link.setAttribute('download', 'ardanis_treasury_audit_2026.csv');
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export default function Registry() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-bright/10 border border-cyan-bright/20 text-xs text-cyan-bright font-medium mb-4">
          <i className="fa-solid fa-eye"></i> Full Transparency
        </span>
        <h1 className="text-3xl md:text-4xl font-bold font-display text-white mb-3">Public Registry</h1>
        <p className="text-white/50 max-w-xl mx-auto">Active ministers, open legislation, and governance records — all publicly accessible.</p>
      </div>

      <section className="mb-12">
        <h2 className="text-xl font-bold font-display text-white mb-6 flex items-center gap-2">
          <i className="fa-solid fa-users text-cyan-bright"></i> Portfolio Ministers — Q1 2026
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {ministers.map((m) => (
            <div key={m.name} className="glass-card rounded-xl p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-violet flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                  {m.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-white truncate">{m.name}</p>
                  <span className="text-xs text-green-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span> {m.status}
                  </span>
                </div>
              </div>
              <p className="text-xs text-white/40">Portfolio</p>
              <p className="text-sm text-cyan-bright font-medium truncate">{m.portfolio}</p>
              <p className="text-xs text-white/30 mt-1 truncate">{m.council}</p>
              <div className="mt-2 pt-2 border-t border-white/5">
                <p className="text-xs text-white/40">Term Expiry</p>
                <p className="text-xs text-white/60">{formatDate(m.termExpiry)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold font-display text-white mb-6 flex items-center gap-2">
          <i className="fa-solid fa-file-lines text-gold"></i> Legislation Registry
        </h2>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="glass-card rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-green-400">1</p>
            <p className="text-xs text-white/40">Passed</p>
          </div>
          <div className="glass-card rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-cyan-bright">2</p>
            <p className="text-xs text-white/40">In Progress</p>
          </div>
          <div className="glass-card rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-gold">3</p>
            <p className="text-xs text-white/40">Draft</p>
          </div>
        </div>

        <div className="glass-card rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-cyan-bright/10">
                  <th className="px-4 py-3 text-left text-xs font-semibold text-cyan-bright/70 uppercase tracking-wider">ID</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-cyan-bright/70 uppercase tracking-wider">Title</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-cyan-bright/70 uppercase tracking-wider hidden md:table-cell">Sponsor</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-cyan-bright/70 uppercase tracking-wider">Status</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-cyan-bright/70 uppercase tracking-wider">Approval</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-cyan-bright/5">
                {legislation.map((bill) => {
                  const approvalPercentage = calculateVotingPercentage(bill.votes);
                  return (
                    <tr key={bill.id} className="hover:bg-cyan-bright/5 transition-colors">
                      <td className="px-4 py-3 text-xs font-mono text-white/40">{bill.id}</td>
                      <td className="px-4 py-3 text-sm text-white font-medium">{bill.title}</td>
                      <td className="px-4 py-3 text-sm text-white/50 hidden md:table-cell">{bill.sponsor}</td>
                      <td className="px-4 py-3">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getStatusStyle(bill.status)}`}>
                          {bill.status}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        {bill.votes.for > 0 || bill.votes.against > 0 ? (
                          <div className="flex items-center gap-2">
                            <div className="flex-1 max-w-[100px]">
                              <div className="progress-bar h-2">
                                <div className="progress-fill" style={{ width: `${approvalPercentage}%` }}></div>
                              </div>
                            </div>
                            <span className="text-xs text-white/60 font-medium">{approvalPercentage}%</span>
                          </div>
                        ) : (
                          <span className="text-xs text-white/30">Pending</span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Treasury & Budget Audit */}
      <section className="mt-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold font-display text-white flex items-center gap-2">
            <i className="fa-solid fa-coins text-gold"></i> Public Treasury Allocations
          </h2>
          <button
            onClick={exportTreasuryCSV}
            className="btn-gold px-4 py-2 rounded-lg text-sm"
          >
            <i className="fa-solid fa-file-csv mr-2"></i> Export CSV
          </button>
        </div>

        <div className="glass-card rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-cyan-bright/10">
                  <th className="px-4 py-3 text-left text-xs font-semibold text-cyan-bright/70 uppercase tracking-wider">Category</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-cyan-bright/70 uppercase tracking-wider">Allocation</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-cyan-bright/70 uppercase tracking-wider">Spent</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-cyan-bright/70 uppercase tracking-wider">Remaining</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-cyan-bright/70 uppercase tracking-wider">Utilization</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-cyan-bright/5">
                {treasuryData.map((item) => {
                  const utilization = Math.round((item.spent / item.allocation) * 100);
                  return (
                    <tr key={item.category} className="hover:bg-cyan-bright/5 transition-colors">
                      <td className="px-4 py-3 text-sm text-white font-medium">{item.category}</td>
                      <td className="px-4 py-3 text-sm text-white/70">{item.allocation.toLocaleString()} AC</td>
                      <td className="px-4 py-3 text-sm text-white/70">{item.spent.toLocaleString()} AC</td>
                      <td className="px-4 py-3 text-sm text-cyan-bright">{item.remaining.toLocaleString()} AC</td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <div className="flex-1 max-w-[100px]">
                            <div className="progress-bar h-2">
                              <div className="progress-fill" style={{ width: `${utilization}%` }}></div>
                            </div>
                          </div>
                          <span className="text-xs text-white/60 font-medium">{utilization}%</span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-4 p-4 bg-gold/10 border border-gold/20 rounded-xl">
          <p className="text-sm text-white/70">
            <i className="fa-solid fa-info-circle text-gold mr-2"></i>
            All figures are in Ardanian Credits (AC). Treasury data is updated quarterly and audited by the Public Transparency Portfolio. Export this data for independent verification.
          </p>
        </div>
      </section>
    </div>
  );
}
