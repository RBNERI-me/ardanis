export interface Job {
  id: string;
  title: string;
  council: string;
  type: 'Full-Time' | 'Part-Time' | 'Contract' | 'Volunteer';
  location: string;
  posted: string;
  deadline: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  salary?: string;
  urgent?: boolean;
}

export const jobs: Job[] = [
  {
    id: 'JOB-2026-001',
    title: 'Digital Infrastructure Engineer',
    council: 'Science & Technology Council',
    type: 'Full-Time',
    location: 'Pocket West-B (Remote Eligible)',
    posted: '2026-01-15',
    deadline: '2026-02-28',
    description: 'We seek a skilled engineer to maintain and expand the Ardanian digital infrastructure, including the Open Commons platform and Liquid Proxy Voting system.',
    requirements: [
      'Experience with distributed systems and cloud infrastructure',
      'Proficiency in TypeScript, React, and Node.js',
      'Understanding of cryptographic security protocols',
      'Minimum 3 years relevant experience',
      'E-Residency or citizenship of Ardanis preferred'
    ],
    responsibilities: [
      'Maintain 99.9% uptime for all digital services',
      'Implement new features for the Open Commons platform',
      'Conduct security audits and vulnerability assessments',
      'Collaborate with the Digital Infrastructure portfolio minister',
      'Document all system changes and maintain technical records'
    ],
    salary: '45,000 - 65,000 Ardanian Credits/year',
    urgent: true
  },
  {
    id: 'JOB-2026-002',
    title: 'Ecological Monitoring Specialist',
    council: 'Environment & Territory Council',
    type: 'Full-Time',
    location: 'Pocket West-B (On-site Required)',
    posted: '2026-01-12',
    deadline: '2026-03-15',
    description: 'Join our environmental team to monitor and protect the Danube biodiversity corridor and wetland restoration projects.',
    requirements: [
      'Degree in Ecology, Environmental Science, or related field',
      'Experience with field monitoring and data collection',
      'Knowledge of Danube river ecosystems preferred',
      'Proficiency with GIS and environmental monitoring tools',
      'Physical ability to conduct field work in wetland environments'
    ],
    responsibilities: [
      'Conduct weekly monitoring of biodiversity corridor',
      'Collect and analyze ecological data from 12 monitoring stations',
      'Prepare monthly progress reports for the Environment Council',
      'Coordinate with volunteer monitoring teams',
      'Identify and report environmental concerns or violations'
    ],
    salary: '38,000 - 52,000 Ardanian Credits/year'
  },
  {
    id: 'JOB-2026-003',
    title: 'Legislative Research Analyst',
    council: 'Governance & Civic Affairs Council',
    type: 'Full-Time',
    location: 'Pocket West-B (Hybrid)',
    posted: '2026-01-10',
    deadline: '2026-02-20',
    description: 'Support the Vanguard Assembly by researching and analyzing proposed legislation, preparing briefings, and tracking legislative progress.',
    requirements: [
      'Degree in Law, Political Science, or Public Policy',
      'Strong analytical and research skills',
      'Excellent written and verbal communication',
      'Understanding of parliamentary procedures',
      'Experience with policy analysis preferred'
    ],
    responsibilities: [
      'Research and analyze proposed legislation',
      'Prepare briefing documents for Assembly members',
      'Track voting patterns and legislative progress',
      'Draft summary reports for public transparency',
      'Assist with citizen petition reviews'
    ],
    salary: '42,000 - 58,000 Ardanian Credits/year'
  },
  {
    id: 'JOB-2026-004',
    title: 'International Relations Coordinator',
    council: 'Diplomacy & External Relations Council',
    type: 'Full-Time',
    location: 'Pocket West-B (Travel Required)',
    posted: '2026-01-08',
    deadline: '2026-03-01',
    description: 'Coordinate diplomatic relations with other micronations and manage international cooperation agreements.',
    requirements: [
      'Degree in International Relations, Diplomacy, or related field',
      'Fluency in English plus at least one additional language',
      'Experience with diplomatic negotiations',
      'Understanding of micronational governance',
      'Excellent interpersonal and communication skills'
    ],
    responsibilities: [
      'Coordinate with Micronational Council of Danube',
      'Prepare diplomatic correspondence and agreements',
      'Organize annual diplomatic summit',
      'Manage E-Residency credential recognition programs',
      'Represent Ardanis at international micronational events'
    ],
    salary: '48,000 - 68,000 Ardanian Credits/year',
    urgent: true
  },
  {
    id: 'JOB-2026-005',
    title: 'Cultural Events Organizer',
    council: 'Arts & Culture Council',
    type: 'Part-Time',
    location: 'Pocket West-B (Hybrid)',
    posted: '2026-01-05',
    deadline: '2026-02-15',
    description: 'Plan and execute cultural events, exhibitions, and community gatherings that celebrate Ardanian heritage and foster community engagement.',
    requirements: [
      'Experience in event planning and coordination',
      'Strong organizational and project management skills',
      'Creative mindset with attention to detail',
      'Ability to work with diverse communities',
      'Passion for arts and cultural programming'
    ],
    responsibilities: [
      'Plan quarterly cultural events and exhibitions',
      'Coordinate with artists, performers, and cultural organizations',
      'Manage event logistics and volunteer teams',
      'Promote events through National Gazette and social channels',
      'Gather feedback and prepare post-event reports'
    ],
    salary: '22,000 - 30,000 Ardanian Credits/year'
  },
  {
    id: 'JOB-2026-006',
    title: 'E-Residency Application Reviewer',
    council: 'Civic Engagement Portfolio',
    type: 'Contract',
    location: 'Remote (Global)',
    posted: '2026-01-03',
    deadline: '2026-02-10',
    description: 'Review and process E-Residency applications, conducting verification checks and ensuring compliance with program requirements.',
    requirements: [
      'Attention to detail and strong analytical skills',
      'Experience with application review or compliance work',
      'Understanding of digital identity verification',
      'Ability to maintain confidentiality',
      'Fluency in English required, additional languages preferred'
    ],
    responsibilities: [
      'Review 20-30 E-Residency applications per week',
      'Conduct background verification checks',
      'Communicate with applicants regarding status',
      'Maintain accurate records in the civic database',
      'Escalate complex cases to senior reviewers'
    ],
    salary: '28,000 - 38,000 Ardanian Credits/year'
  },
  {
    id: 'JOB-2026-007',
    title: 'Renewable Energy Systems Technician',
    council: 'Science & Technology Council',
    type: 'Full-Time',
    location: 'Pocket West-B (On-site Required)',
    posted: '2025-12-28',
    deadline: '2026-02-28',
    description: 'Maintain and optimize the 100% renewable solar microgrid infrastructure powering all Ardanian operations.',
    requirements: [
      'Certification in renewable energy systems',
      'Experience with solar panel installation and maintenance',
      'Knowledge of battery storage systems',
      'Electrical systems expertise',
      'Ability to work in outdoor environments'
    ],
    responsibilities: [
      'Perform weekly inspections of 1,200 solar panels',
      'Maintain battery storage systems at 78% capacity',
      'Monitor grid efficiency and optimize performance',
      'Respond to system alerts and emergency repairs',
      'Prepare monthly energy production reports'
    ],
    salary: '40,000 - 55,000 Ardanian Credits/year'
  },
  {
    id: 'JOB-2026-008',
    title: 'Community Volunteer Coordinator',
    council: 'Civic Engagement Portfolio',
    type: 'Volunteer',
    location: 'Pocket West-B & Remote',
    posted: '2025-12-20',
    deadline: 'Rolling',
    description: 'Coordinate volunteer programs for ecological monitoring, cultural events, and community initiatives across Ardanis.',
    requirements: [
      'Strong organizational and people skills',
      'Passion for community building',
      'Ability to motivate and lead volunteer teams',
      'Flexible schedule availability',
      'E-Residency or citizenship required'
    ],
    responsibilities: [
      'Recruit and train volunteer coordinators',
      'Match volunteers with appropriate projects',
      'Organize volunteer appreciation events',
      'Track volunteer hours and contributions',
      'Report to Civic Engagement portfolio minister'
    ]
  }
];

export const getJobById = (id: string): Job | undefined => {
  return jobs.find(job => job.id === id);
};
