import { useState } from 'react';
import Flag from '../components/Flag';

const sections = [
  {
    title: 'Merit-Syndicate Parliamentary System',
    icon: 'fa-landmark',
    content: [
      'The Ardanian constitution establishes a unique governance model combining meritocratic expertise with democratic participation. The Vanguard Assembly operates as a dual-chamber parliament where legislation must pass through both the Expert Chamber (merit-verified specialists) and the Citizen Chamber (democratically elected representatives).',
      'This ensures both competence and representation shape every decision. The system was designed to prevent the pitfalls of pure technocracy and pure populism by requiring consensus between expertise and democratic will.',
      'Key features include quarterly cabinet rotations, liquid proxy voting, and mandatory environmental impact assessments for all legislation.'
    ]
  },
  {
    title: 'Dual-Track Chambers',
    icon: 'fa-users',
    content: [
      'Track I — Expert Chamber (35 seats): Filled through merit-based selection verified by peer review. Members are recognized specialists providing evidence-based policy recommendations. Selection criteria include published research, demonstrated expertise, and peer endorsements.',
      'Track II — Citizen Chamber (50 seats): Filled through Liquid Proxy Voting by all active citizens. Ensures broad democratic participation and community voice. Representatives are elected from geographic and thematic constituencies.',
      'When chambers disagree, a Joint Conciliation Committee is formed with equal representation from both tracks. If consensus fails within 30 days, the matter goes to a citizen referendum via the Liquid Proxy system.'
    ]
  },
  {
    title: 'Liquid Proxy Voting',
    icon: 'fa-check-to-slot',
    content: [
      'A fluid democratic system where citizens can: (1) Vote directly on any legislation, (2) Delegate their vote to a trusted proxy — an expert or fellow citizen, (3) Reclaim their vote at any time and vote directly.',
      'Proxies can further delegate, creating fluid chains of representation. This ensures expertise guides decisions while maintaining individual sovereignty over voting power.',
      'The system is implemented through the Open Commons platform with full transparency — all delegations and votes are publicly visible and auditable in real-time.'
    ]
  },
  {
    title: 'Rotating Portfolio Cabinet',
    icon: 'fa-rotate',
    content: [
      'The executive branch operates on quarterly rotation cycles. Portfolio ministers are selected from the Expert Chamber based on merit assessments and peer evaluations. No individual may hold the same portfolio indefinitely.',
      'Current portfolios include: Digital Infrastructure, Ecological Policy, Civic Engagement, International Relations, Economic Development, Cultural Affairs, Scientific Research, and Public Transparency.',
      'This ensures accountability and fresh perspectives while maintaining institutional knowledge through overlapping terms and comprehensive handover protocols.'
    ]
  },
  {
    title: 'Environmental Mandates',
    icon: 'fa-leaf',
    content: [
      'Every policy decision must include an environmental impact assessment. The Environment & Territory Council oversees compliance and can veto legislation that fails environmental standards.',
      'Key mandates: 60% minimum protected natural habitat, net-positive ecological impact for all construction, 100% renewable energy for all government operations, quarterly biodiversity reporting, carbon-neutral operations since 2025, and native species recovery programs.',
      'The Pocket West-B territory serves as a living laboratory for these principles, with real-time ecological monitoring data available through the Open Commons platform.'
    ]
  }
];

export default function Governance() {
  const [openSection, setOpenSection] = useState<number>(0);

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet/10 border border-violet/20 text-xs text-violet font-medium mb-4">
          <i className="fa-solid fa-scale-balanced"></i> Constitutional Framework
        </span>
        <h1 className="text-3xl md:text-4xl font-bold font-display text-white mb-3">Governance & Laws</h1>
        <p className="text-white/50 max-w-xl mx-auto">The constitutional foundation of Ardanian governance and legislative processes.</p>
      </div>

      <div className="glass-card rounded-3xl p-8 mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Flag size={36} />
          <div>
            <h2 className="text-xl font-bold text-white font-display">The Ardanian System</h2>
            <p className="text-xs text-cyan-bright/60">Merit-Syndicate Parliamentary Democracy</p>
          </div>
        </div>
        <p className="text-white/60 leading-relaxed">
          Ardanis operates under a novel governance model that balances expert knowledge with democratic will. 
          The Vanguard Assembly's dual-chamber structure ensures legislation benefits from both specialized expertise 
          and broad citizen participation. The Rotating Portfolio Cabinet provides executive governance with built-in 
          accountability through structured term limits.
        </p>
      </div>

      <div className="space-y-3">
        {sections.map((section, i) => (
          <div key={i} className="glass-card rounded-2xl overflow-hidden">
            <button
              onClick={() => setOpenSection(openSection === i ? -1 : i)}
              className="w-full px-6 py-4 flex items-center justify-between text-left"
            >
              <div className="flex items-center gap-3">
                <i className={`fa-solid ${section.icon} text-cyan-bright`}></i>
                <span className="font-semibold text-white">{section.title}</span>
              </div>
              <i className={`fa-solid fa-chevron-down text-white/40 transition-transform ${openSection === i ? 'rotate-180' : ''}`}></i>
            </button>
            {openSection === i && (
              <div className="px-6 pb-5">
                <div className="pt-3 border-t border-cyan-bright/10">
                  {section.content.map((paragraph, j) => (
                    <p key={j} className="text-sm text-white/60 leading-relaxed mb-3">{paragraph}</p>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
