export interface Article {
  id: string;
  slug: string;
  title: string;
  category: 'Vanguard Assembly' | 'Danube Territory' | 'Diplomatic Updates';
  date: string;
  author: string;
  authorTitle: string;
  excerpt: string;
  content: string[];
  tags: string[];
  readTime: string;
}

export const articles: Article[] = [
  {
    id: '1',
    slug: 'digital-commons-expansion-act',
    title: 'Vanguard Assembly Passes Digital Commons Expansion Act',
    category: 'Vanguard Assembly',
    date: '2026-01-15',
    author: 'Dr. Elara Voss',
    authorTitle: 'Minister of Digital Infrastructure',
    excerpt: 'The Assembly unanimously approved the Digital Commons Expansion Act, extending open-access infrastructure to all E-Residents and introducing new collaborative governance tools.',
    content: [
      'In a historic session that concluded late Thursday evening, the Vanguard Assembly voted 72-3 to pass the Digital Commons Expansion Act (ARD-L-2026-001). This landmark legislation represents the most significant expansion of digital rights and infrastructure in Ardanian history.',
      'The Act extends open-access digital infrastructure to all verified E-Residents, introducing real-time legislative tracking, and establishes new collaborative decision-making frameworks. The legislation also creates a dedicated Digital Rights portfolio within the Rotating Cabinet, ensuring sustained focus on digital sovereignty.',
      'Key provisions of the Act include:',
      '• Universal access to the Open Commons platform for all E-Residents\n• Liquid Proxy Voting extensions allowing E-Residents to participate in advisory votes\n• Mandatory quarterly transparency reports from all portfolio ministers\n• New citizen petition mechanisms with reduced signature thresholds\n• Establishment of a Digital Ombudsman office to handle disputes',
      'Minister of Digital Infrastructure Dr. Elara Voss stated: "This Act ensures that every member of our digital nation has meaningful access to governance tools. We are building the most transparent, participatory system in the world."',
      'The Act takes effect immediately upon publication in the National Gazette. Implementation will be phased over the next 90 days, with full system integration expected by Q2 2026.',
      'Citizen feedback on the implementation process can be submitted through the Open Commons platform. The Public Transparency Portfolio will publish weekly progress updates.'
    ],
    tags: ['legislation', 'digital rights', 'governance', 'open commons'],
    readTime: '5 min'
  },
  {
    id: '2',
    slug: 'danube-biodiversity-corridor',
    title: 'Danube Biodiversity Corridor Proposal Approved',
    category: 'Danube Territory',
    date: '2026-01-12',
    author: 'Marcus Chen',
    authorTitle: 'Minister of Ecological Policy',
    excerpt: 'The Environment Council has approved a new biodiversity corridor along the Danube border, connecting three protected wetland zones.',
    content: [
      'Following extensive ecological surveys conducted over the past six months, the Environment & Territory Council has officially approved the Danube Biodiversity Corridor proposal (ARD-L-2026-002). This initiative will establish a 2.4km protected wildlife corridor connecting three major wetland zones along the Ardanian section of the Danube border.',
      'The project represents a significant investment in ecological restoration and biodiversity preservation. The corridor will feature native vegetation restoration, wildlife crossing structures, and continuous ecological monitoring stations equipped with AI-powered species identification systems.',
      'Marcus Chen, Minister of Ecological Policy, explained: "This corridor is not just about protecting individual species—it\'s about restoring ecological connectivity across the entire Danube frontier. We\'re creating a living laboratory for conservation science."',
      'Construction will begin in Q2 2026 with an expected completion by Q4 2026. The project budget of 2.4 million Ardanian Credits will be funded through the Renewable Energy Infrastructure Fund, ensuring zero additional carbon footprint.',
      'Key features of the corridor include:\n• 2.4km continuous habitat strip\n• Three wildlife underpasses\n• 12 monitoring stations with real-time data transmission\n• Native plant species reintroduction program\n• Public education walking paths (restricted access zones)',
      'The Environment Council will publish monthly progress reports, and all ecological data will be made available through the Open Commons platform for research purposes.',
      'Local E-Residents with expertise in ecology and conservation are encouraged to volunteer for the monitoring program. Applications are now open through the Science & Technology Council.'
    ],
    tags: ['environment', 'biodiversity', 'territory', 'conservation'],
    readTime: '6 min'
  },
  {
    id: '3',
    slug: 'e-residency-milestone',
    title: 'E-Residency Surpasses 2,800 Global Members',
    category: 'Vanguard Assembly',
    date: '2026-01-10',
    author: 'Amara Okafor',
    authorTitle: 'Minister of Civic Engagement',
    excerpt: 'The E-Residency program reaches milestone with members from 47 countries contributing to Ardanian governance and research.',
    content: [
      'The Civic Affairs Office has announced that the E-Residency program has surpassed 2,800 active members from 47 countries, marking a significant milestone in the growth of the Ardanian digital nation.',
      'This achievement reflects growing international interest in Ardanian governance models and the Open Commons initiative. The program continues to attract researchers, technologists, artists, and governance enthusiasts from around the world.',
      'Minister of Civic Engagement Amara Okafor stated: "Our E-Residency program demonstrates that meaningful participation in governance doesn\'t require physical presence. These 2,800 individuals are actively contributing to our legislative processes, research initiatives, and cultural development."',
      'Top contributing domains include:\n• Technology & Engineering: 32%\n• Science & Research: 24%\n• Arts & Culture: 18%\n• Governance & Policy: 14%\n• Environment & Sustainability: 8%\n• Other: 4%',
      'The program continues to accept applications on a rolling basis. Recent enhancements to the E-Residency platform include improved verification systems, streamlined application processes, and expanded access to collaborative tools.',
      'E-Residents now have access to:\n• Advisory voting on select legislative matters\n• Full access to the Open Commons research platform\n• Participation in council working groups\n• Digital identity credentials for verification',
      'The Civic Affairs Office plans to launch a mentorship program in Q2 2026, pairing new E-Residents with experienced members to facilitate integration and maximize contributions.'
    ],
    tags: ['e-residency', 'community', 'milestone', 'growth'],
    readTime: '4 min'
  },
  {
    id: '4',
    slug: 'q1-cabinet-rotation',
    title: 'Q1 2026 Cabinet Rotation Announced',
    category: 'Vanguard Assembly',
    date: '2026-01-08',
    author: 'Office of the Prime Coordinator',
    authorTitle: 'Executive Branch',
    excerpt: 'New quarterly rotation brings fresh perspectives to key ministries including Digital Infrastructure and Ecological Policy.',
    content: [
      'The Office of the Prime Coordinator has announced the Q1 2026 Portfolio Cabinet rotation, bringing eight new ministers into leadership positions for the quarterly term.',
      'The Rotating Portfolio Cabinet operates on structured quarterly cycles, ensuring that governance benefits from diverse perspectives while maintaining institutional knowledge through overlapping terms. Ministers are selected from the Expert Chamber based on merit assessments and peer evaluations.',
      'The Q1 2026 Cabinet includes:\n• Dr. Elara Voss — Digital Infrastructure\n• Marcus Chen — Ecological Policy\n• Amara Okafor — Civic Engagement\n• Lukas Brenner — International Relations\n• Sofia Petrov — Economic Development\n• Kai Nakamura — Cultural Affairs\n• Iris de Vries — Scientific Research\n• Tomás Rivera — Public Transparency',
      'Notable appointments include Dr. Elara Voss, who brings extensive experience in distributed systems and digital governance, and Marcus Chen, a recognized expert in wetland ecology and conservation biology.',
      'The Prime Coordinator emphasized: "This rotation exemplifies our commitment to meritocratic governance. Each minister was selected based on demonstrated expertise and peer recognition, not political connections or popularity."',
      'The new Cabinet will serve from January 1 through March 31, 2026. During this period, they will oversee implementation of the Digital Commons Expansion Act, the Danube Biodiversity Corridor project, and several other key initiatives.',
      'Citizens and E-Residents can track ministerial activities through the Public Registry, which provides real-time updates on portfolio activities, legislative progress, and transparency reports.'
    ],
    tags: ['cabinet', 'rotation', 'governance', 'appointments'],
    readTime: '5 min'
  },
  {
    id: '5',
    slug: 'wetland-restoration-phase-2',
    title: 'Wetland Restoration Phase 2 Begins',
    category: 'Danube Territory',
    date: '2026-01-05',
    author: 'Marcus Chen',
    authorTitle: 'Minister of Ecological Policy',
    excerpt: '12 hectares of degraded wetland in Pocket West-B enter active restoration, improving water quality and habitat.',
    content: [
      'Phase 2 of the Pocket West-B Wetland Restoration project has officially commenced, targeting 12 hectares of previously degraded wetland for active restoration and ecological enhancement.',
      'This phase builds on the success of Phase 1, which demonstrated remarkable results including a 340% increase in native bird species and significant improvement in water quality metrics. The project implements native plant species reintroduction, water flow restoration, and wildlife habitat enhancement.',
      'Marcus Chen, Minister of Ecological Policy, reported: "Phase 1 exceeded our expectations. The ecosystem is responding beautifully to restoration efforts. Phase 2 will expand these techniques to a larger area and introduce additional species to accelerate biodiversity recovery."',
      'Phase 2 activities include:\n• Removal of invasive plant species across 12 hectares\n• Reintroduction of 47 native plant species\n• Restoration of natural water flow patterns\n• Installation of wildlife nesting structures\n• Deployment of 8 additional monitoring stations',
      'The project is funded through the Environmental Mandate budget, with no additional carbon footprint. All construction equipment runs on renewable energy from the Pocket West-B microgrid.',
      'Early indicators from Phase 1 monitoring stations show:\n• Water quality improved from Class C to Class B+\n• Native fish species returned to 3 previously barren zones\n• Amphibian populations increased by 280%\n• Soil microbiome diversity doubled',
      'The Environment Council will publish quarterly progress reports. All ecological data is available through the Open Commons platform for research and educational purposes.'
    ],
    tags: ['environment', 'wetland', 'restoration', 'territory'],
    readTime: '6 min'
  },
  {
    id: '6',
    slug: 'diplomatic-cooperation-danube-council',
    title: 'Diplomatic Cooperation with Danube Council',
    category: 'Diplomatic Updates',
    date: '2026-01-03',
    author: 'Lukas Brenner',
    authorTitle: 'Minister of International Relations',
    excerpt: 'Ardanis signs cooperation agreement for shared ecological monitoring and cultural exchange along the river border.',
    content: [
      'The Diplomacy & External Relations Council has finalized a landmark cooperation agreement with the Micronational Council of Danube, establishing the first formal inter-micronational agreement for the Ardanis territory.',
      'The agreement establishes frameworks for shared ecological monitoring, joint cultural events, and mutual recognition of digital credentials. This represents a significant step forward in regional cooperation and diplomatic relations.',
      'Minister of International Relations Lukas Brenner stated: "This agreement demonstrates that micronations can collaborate effectively on shared challenges. The Danube river ecosystem doesn\'t recognize political boundaries, and neither should our conservation efforts."',
      'Key provisions of the agreement include:\n• Shared ecological monitoring data along the Danube border\n• Joint cultural exchange programs and events\n• Mutual recognition of E-Residency credentials\n• Collaborative research initiatives\n• Annual diplomatic summit rotation',
      'The agreement was signed during a ceremonial event attended by representatives from both nations. The first joint ecological survey is scheduled for Q2 2026.',
      'This cooperation aligns with Ardanis\'s commitment to transparent, collaborative governance and environmental stewardship. The agreement includes provisions for public transparency, with all joint activities reported through the National Gazette.',
      'Citizens and E-Residents interested in participating in joint initiatives can express interest through the Diplomacy & External Relations Council. Volunteer opportunities include ecological monitoring, cultural event organization, and research collaboration.'
    ],
    tags: ['diplomacy', 'cooperation', 'danube', 'international'],
    readTime: '5 min'
  },
  {
    id: '7',
    slug: 'danube-border-jurisdiction-framework',
    title: 'Danube Border Jurisdiction Framework Ratified',
    category: 'Diplomatic Updates',
    date: '2025-12-28',
    author: 'Lukas Brenner',
    authorTitle: 'Minister of International Relations',
    excerpt: 'The Pocket West-B Danube Sovereign Zone framework receives international recognition, establishing clear maritime and riparian jurisdiction.',
    content: [
      'The Pocket West-B Danube Sovereign Zone framework has received formal recognition from regional authorities, establishing clear jurisdictional boundaries for the Ardanis territory along the Danube river border.',
      'This landmark agreement defines Ardanis\'s sovereign rights over a 1.2km stretch of riverfront, including riparian zones, seasonal wetlands, and adjacent territorial waters. The framework ensures environmental protection while maintaining navigational access for commercial vessels.',
      'The agreement was negotiated over 18 months through the Diplomatic Council, with extensive input from environmental scientists, maritime law experts, and local communities.',
      'Key provisions include:\n• Defined sovereign boundaries along the Danube riverfront\n• Environmental protection mandates for riparian zones\n• Shared navigation protocols with neighboring jurisdictions\n• Joint emergency response procedures\n• Annual environmental impact assessments',
      'This framework represents a significant achievement for Ardanis\'s diplomatic efforts and establishes a precedent for micronational territorial recognition along international waterways.'
    ],
    tags: ['diplomacy', 'jurisdiction', 'danube', 'sovereignty'],
    readTime: '4 min'
  }
];

export const getArticleBySlug = (slug: string): Article | undefined => {
  return articles.find(article => article.slug === slug);
};
