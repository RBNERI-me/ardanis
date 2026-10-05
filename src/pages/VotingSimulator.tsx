import { useState } from 'react';

interface Minister {
  name: string;
  portfolio: string;
  currentWeight: number;
}

interface Bill {
  id: string;
  title: string;
  description: string;
  yourVote: 'for' | 'against' | 'abstain' | null;
}

export default function VotingSimulator() {
  const [mode, setMode] = useState<'proxy' | 'direct'>('proxy');
  
  const [ministers, setMinisters] = useState<Minister[]>([
    { name: 'Dr. Elara Voss', portfolio: 'Digital Infrastructure', currentWeight: 0 },
    { name: 'Marcus Chen', portfolio: 'Ecological Policy', currentWeight: 0 },
    { name: 'Amara Okafor', portfolio: 'Civic Engagement', currentWeight: 0 },
    { name: 'Lukas Brenner', portfolio: 'International Relations', currentWeight: 0 },
    { name: 'Sofia Petrov', portfolio: 'Economic Development', currentWeight: 0 },
    { name: 'Kai Nakamura', portfolio: 'Cultural Affairs', currentWeight: 0 },
    { name: 'Iris de Vries', portfolio: 'Scientific Research', currentWeight: 0 },
    { name: 'Tomás Rivera', portfolio: 'Public Transparency', currentWeight: 0 },
  ]);

  const [bills, setBills] = useState<Bill[]>([
    {
      id: 'ARD-L-2026-002',
      title: 'Biodiversity Corridor Protection Bill',
      description: 'Establishes a 2.4km protected wildlife corridor along the Danube border with native vegetation restoration and AI-powered monitoring stations.',
      yourVote: null
    },
    {
      id: 'ARD-L-2026-003',
      title: 'E-Resident Voting Rights Amendment',
      description: 'Extends advisory voting rights to verified E-Residents on select legislative matters through the Open Commons platform.',
      yourVote: null
    },
    {
      id: 'ARD-L-2026-004',
      title: 'Open Data Transparency Mandate',
      description: 'Requires all government datasets to be published in machine-readable formats within 30 days of creation.',
      yourVote: null
    },
  ]);

  const [allocatedWeight, setAllocatedWeight] = useState(0);

  const handleWeightChange = (index: number, weight: number) => {
    const newMinisters = [...ministers];
    newMinisters[index].currentWeight = weight;
    setMinisters(newMinisters);
    
    const totalAllocated = newMinisters.reduce((sum, m) => sum + m.currentWeight, 0);
    setAllocatedWeight(totalAllocated);
  };

  const handleVote = (billId: string, vote: 'for' | 'against' | 'abstain') => {
    setBills(bills.map(bill => 
      bill.id === billId ? { ...bill, yourVote: vote } : bill
    ));
  };

  const totalWeight = 100;
  const remainingWeight = totalWeight - allocatedWeight;

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet/10 border border-violet/20 text-xs text-violet font-medium mb-4">
          <i className="fa-solid fa-check-to-slot"></i> Interactive Democracy
        </span>
        <h1 className="text-3xl md:text-4xl font-bold font-display text-white mb-3">Liquid Proxy Voting Simulator</h1>
        <p className="text-white/50 max-w-xl mx-auto">Experience Ardanis's innovative voting system. Allocate your voting weight to portfolio ministers or cast direct ballots on active legislation.</p>
      </div>

      {/* Mode Selector */}
      <div className="glass-card rounded-2xl p-6 mb-8">
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => setMode('proxy')}
            className={`px-6 py-3 rounded-xl font-medium transition-all ${
              mode === 'proxy' 
                ? 'bg-gradient-to-r from-cyan-bright to-violet text-white shadow-lg' 
                : 'glass text-white/60 hover:text-white'
            }`}
          >
            <i className="fa-solid fa-users mr-2"></i> Proxy Delegation
          </button>
          <button
            onClick={() => setMode('direct')}
            className={`px-6 py-3 rounded-xl font-medium transition-all ${
              mode === 'direct' 
                ? 'bg-gradient-to-r from-cyan-bright to-violet text-white shadow-lg' 
                : 'glass text-white/60 hover:text-white'
            }`}
          >
            <i className="fa-solid fa-check-to-slot mr-2"></i> Direct Voting
          </button>
        </div>
      </div>

      {/* Proxy Delegation Mode */}
      {mode === 'proxy' && (
        <div className="space-y-6">
          <div className="glass-card rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold font-display text-white">Allocate Your Voting Weight</h2>
              <div className="text-right">
                <p className="text-sm text-white/60">Remaining Weight</p>
                <p className={`text-2xl font-bold ${remainingWeight === 0 ? 'text-green-400' : 'text-gold'}`}>
                  {remainingWeight}%
                </p>
              </div>
            </div>
            <div className="progress-bar h-3 mb-6">
              <div 
                className="progress-fill" 
                style={{ width: `${allocatedWeight}%` }}
              ></div>
            </div>

            <div className="space-y-4">
              {ministers.map((minister, index) => (
                <div key={minister.name} className="glass rounded-xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <p className="font-semibold text-white">{minister.name}</p>
                      <p className="text-xs text-cyan-bright">{minister.portfolio}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={minister.currentWeight}
                        onChange={(e) => handleWeightChange(index, parseInt(e.target.value))}
                        className="w-32 accent-cyan-bright"
                      />
                      <span className="text-sm font-bold text-white w-12 text-right">
                        {minister.currentWeight}%
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-cyan-bright/10 border border-cyan-bright/20 rounded-xl">
              <p className="text-sm text-white/70">
                <i className="fa-solid fa-info-circle text-cyan-bright mr-2"></i>
                In Ardanis's Liquid Proxy system, you can delegate your voting power to trusted ministers based on their expertise. You can reclaim your vote at any time to vote directly on specific issues.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Direct Voting Mode */}
      {mode === 'direct' && (
        <div className="space-y-6">
          <div className="glass-card rounded-2xl p-6">
            <h2 className="text-xl font-bold font-display text-white mb-6">Active Legislative Drafts</h2>
            
            <div className="space-y-4">
              {bills.map((bill) => (
                <div key={bill.id} className="glass rounded-xl p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-mono text-white/40">{bill.id}</span>
                        {bill.yourVote && (
                          <span className={`text-xs px-2 py-0.5 rounded-full ${
                            bill.yourVote === 'for' ? 'bg-green-500/20 text-green-400' :
                            bill.yourVote === 'against' ? 'bg-red-500/20 text-red-400' :
                            'bg-white/10 text-white/60'
                          }`}>
                            Your vote: {bill.yourVote}
                          </span>
                        )}
                      </div>
                      <h3 className="font-bold text-white mb-2">{bill.title}</h3>
                      <p className="text-sm text-white/60">{bill.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 mt-4">
                    <button
                      onClick={() => handleVote(bill.id, 'for')}
                      className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${
                        bill.yourVote === 'for'
                          ? 'bg-green-500/30 text-green-400 border border-green-500/50'
                          : 'glass text-white/60 hover:text-white hover:bg-green-500/10'
                      }`}
                    >
                      <i className="fa-solid fa-thumbs-up mr-1"></i> For
                    </button>
                    <button
                      onClick={() => handleVote(bill.id, 'against')}
                      className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${
                        bill.yourVote === 'against'
                          ? 'bg-red-500/30 text-red-400 border border-red-500/50'
                          : 'glass text-white/60 hover:text-white hover:bg-red-500/10'
                      }`}
                    >
                      <i className="fa-solid fa-thumbs-down mr-1"></i> Against
                    </button>
                    <button
                      onClick={() => handleVote(bill.id, 'abstain')}
                      className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${
                        bill.yourVote === 'abstain'
                          ? 'bg-white/20 text-white border border-white/30'
                          : 'glass text-white/60 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <i className="fa-solid fa-minus mr-1"></i> Abstain
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-violet/10 border border-violet/20 rounded-xl">
              <p className="text-sm text-white/70">
                <i className="fa-solid fa-info-circle text-violet mr-2"></i>
                This is a simulation of Ardanis's direct voting system. In the live system, your votes are cryptographically secured and publicly verifiable through the Open Commons platform.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
