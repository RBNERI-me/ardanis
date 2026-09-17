import { useState } from 'react';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  category: 'founding' | 'governance' | 'architecture' | 'culture' | 'diplomacy';
  details: string[];
}

const timelineEvents: TimelineEvent[] = [
  {
    year: '2019',
    title: 'The Danube Vision',
    description: 'A group of international scholars and technologists conceive the idea of a digital-first micronation along the Danube border.',
    category: 'founding',
    details: [
      'Initial concept developed during a symposium on digital sovereignty',
      'Pocket West-B identified as ideal location due to its ecological significance',
      'Founding charter drafted by 12 international experts in governance and technology',
      'Environmental impact assessment conducted over 6 months'
    ]
  },
  {
    year: '2020',
    title: 'The Merit-Syndicate Charter',
    description: 'The foundational governance document is drafted, establishing the unique dual-chamber parliamentary system.',
    category: 'governance',
    details: [
      'Charter developed through 18 months of collaborative research',
      'Incorporates principles from 47 different governance models worldwide',
      'Liquid Proxy Voting system designed by cryptographic experts',
      'Environmental mandates established as constitutional requirements'
    ]
  },
  {
    year: '2021',
    title: 'Territorial Recognition',
    description: 'Pocket West-B receives formal recognition as the sovereign territory of Ardanis along the Danube border.',
    category: 'diplomacy',
    details: [
      '38 hectares officially designated as Ardanian sovereign zone',
      'Danube river jurisdiction framework established',
      'International diplomatic notes issued to neighboring states',
      'Environmental protection agreements signed with regional authorities'
    ]
  },
  {
    year: '2022',
    title: 'First E-Residents Welcome',
    description: 'The digital nation opens its doors to global citizens, welcoming the first cohort of 500 E-Residents.',
    category: 'culture',
    details: [
      'Applications received from 89 countries worldwide',
      'Rigorous verification process established',
      'Digital identity infrastructure launched',
      'First Open Commons platform goes live'
    ]
  },
  {
    year: '2023',
    title: 'The Renewable Microgrid',
    description: 'Pocket West-B achieves 100% renewable energy status with the completion of the solar microgrid infrastructure.',
    category: 'architecture',
    details: [
      '1,200 solar panels installed across civic buildings',
      'Battery storage system with 78% capacity achieved',
      'Grid efficiency reaches 97% through AI optimization',
      'Carbon-neutral operations certified by international auditors'
    ]
  },
  {
    year: '2024',
    title: 'Civic Architecture Milestone',
    description: 'The Vanguard Assembly Hall and Open Commons Center are completed, blending classical design with sustainable technology.',
    category: 'architecture',
    details: [
      'Assembly Hall seats 85 delegates in dual-chamber configuration',
      'Open Commons Center houses digital governance infrastructure',
      'Buildings constructed using 100% recycled and sustainable materials',
      'Architectural design wins international sustainability award'
    ]
  },
  {
    year: '2025',
    title: 'Diplomatic Breakthrough',
    description: 'Ardanis signs landmark cooperation agreements with the Micronational Council of Danube, establishing regional partnerships.',
    category: 'diplomacy',
    details: [
      'First inter-micronational cooperation framework established',
      'Shared ecological monitoring protocols implemented',
      'Mutual recognition of digital credentials agreed',
      'Annual diplomatic summit rotation initiated'
    ]
  },
  {
    year: '2026',
    title: 'The Digital Commons Expansion',
    description: 'The Digital Commons Expansion Act extends full participatory rights to all E-Residents, marking a new era of inclusive governance.',
    category: 'governance',
    details: [
      '2,800+ active E-Residents from 47 countries',
      'Liquid Proxy Voting extended to advisory matters',
      'Digital Ombudsman office established',
      'Quarterly transparency reports mandated for all ministers'
    ]
  }
];

const categoryColors = {
  founding: { bg: 'bg-cyan-bright/10', border: 'border-cyan-bright/30', text: 'text-cyan-bright', icon: 'fa-flag' },
  governance: { bg: 'bg-violet/10', border: 'border-violet/30', text: 'text-violet', icon: 'fa-landmark' },
  architecture: { bg: 'bg-gold/10', border: 'border-gold/30', text: 'text-gold', icon: 'fa-building' },
  culture: { bg: 'bg-cyan-light/10', border: 'border-cyan-light/30', text: 'text-cyan-light', icon: 'fa-users' },
  diplomacy: { bg: 'bg-primary/10', border: 'border-primary/30', text: 'text-primary', icon: 'fa-handshake' }
};

export default function History() {
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const filteredEvents = filter === 'all' 
    ? timelineEvents 
    : timelineEvents.filter(e => e.category === filter);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-xs text-gold font-medium mb-4">
          <i className="fa-solid fa-landmark"></i> National Heritage
        </span>
        <h1 className="text-4xl md:text-5xl font-bold font-display text-white mb-4 tracking-tight">
          History & Origins
        </h1>
        <p className="text-white/60 max-w-2xl mx-auto text-lg">
          The journey of the Sovereign Republic of Ardanis from vision to reality, 
          chronicling our founding, governance evolution, and cultural milestones.
        </p>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-3 justify-center mb-12">
        <button
          onClick={() => setFilter('all')}
          className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
            filter === 'all'
              ? 'bg-gradient-to-r from-cyan-bright to-violet text-white shadow-lg'
              : 'glass text-white/60 hover:text-white'
          }`}
        >
          <i className="fa-solid fa-clock-rotate-left mr-2"></i>
          All Events
        </button>
        {Object.entries(categoryColors).map(([key, value]) => (
          <button
            key={key}
            onClick={() => setFilter(key)}
            className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all capitalize ${
              filter === key
                ? `${value.bg} ${value.text} border ${value.border}`
                : 'glass text-white/60 hover:text-white'
            }`}
          >
            <i className={`fa-solid ${value.icon} mr-2`}></i>
            {key}
          </button>
        ))}
      </div>

      {/* Interactive Timeline */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-bright via-violet to-gold"></div>

        {/* Timeline Events */}
        <div className="space-y-12">
          {filteredEvents.map((event, index) => {
            const colors = categoryColors[event.category];
            const isLeft = index % 2 === 0;

            return (
              <div
                key={event.year}
                className={`relative flex items-center ${
                  isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                  <div className={`w-16 h-16 rounded-full ${colors.bg} border-2 ${colors.border} flex items-center justify-center backdrop-blur-xl`}>
                    <i className={`fa-solid ${colors.icon} text-2xl ${colors.text}`}></i>
                  </div>
                </div>

                {/* Content Card */}
                <div className={`ml-24 md:ml-0 md:w-5/12 ${
                  isLeft ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <div 
                    className="glass-card rounded-2xl p-6 cursor-pointer group"
                    onClick={() => setSelectedEvent(selectedEvent?.year === event.year ? null : event)}
                  >
                    {/* Year Badge */}
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${colors.bg} ${colors.text} border ${colors.border}`}>
                        {event.year}
                      </span>
                      <span className={`text-xs ${colors.text} uppercase tracking-wider font-medium capitalize`}>
                        {event.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-glow-cyan transition-all">
                      {event.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/60 text-sm leading-relaxed mb-3">
                      {event.description}
                    </p>

                    {/* Expand Indicator */}
                    <div className="flex items-center gap-2 text-xs text-cyan-bright/60 group-hover:text-cyan-bright transition-colors">
                      <span>{selectedEvent?.year === event.year ? 'Hide details' : 'View details'}</span>
                      <i className={`fa-solid fa-chevron-${selectedEvent?.year === event.year ? 'up' : 'down'} text-[10px] transition-transform`}></i>
                    </div>

                    {/* Expanded Details */}
                    {selectedEvent?.year === event.year && (
                      <div className="mt-4 pt-4 border-t border-white/10 space-y-2">
                        {event.details.map((detail, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <i className={`fa-solid fa-check text-xs ${colors.text} mt-1`}></i>
                            <p className="text-sm text-white/70">{detail}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Heritage Stats */}
      <div className="mt-20 glass-card rounded-3xl p-8 md:p-12">
        <h2 className="text-2xl font-bold font-display text-white mb-8 text-center">
          Ardanis at a Glance
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <p className="text-4xl font-bold text-cyan-bright text-glow-cyan mb-2">7</p>
            <p className="text-sm text-white/60">Years of Sovereignty</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-gold text-glow-gold mb-2">2.8K</p>
            <p className="text-sm text-white/60">Global E-Residents</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-violet mb-2">47</p>
            <p className="text-sm text-white/60">Countries Represented</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-cyan-light mb-2">100%</p>
            <p className="text-sm text-white/60">Renewable Energy</p>
          </div>
        </div>
      </div>
    </div>
  );
}
