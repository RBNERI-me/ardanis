import { Link } from 'react-router-dom';
import Flag from '../components/Flag';
import StateSeal from '../components/StateSeal';

export default function Home() {
  return (
    <div>
      {/* Official Government Banner */}
      <section className="relative overflow-hidden bg-gradient-to-b from-midnight via-primary/5 to-midnight py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Official Welcome */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Flag size={60} />
                <div>
                  <h2 className="text-sm font-semibold text-cyan-bright tracking-wider uppercase">Official Portal</h2>
                  <p className="text-xs text-white/60">The Sovereign Republic of Ardanis</p>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white mb-6 leading-tight">
                Welcome to the<br />
                <span className="gradient-text">Digital Republic</span>
              </h1>
              
              <p className="text-lg text-white/70 leading-relaxed mb-8">
                The official government portal providing access to public services, governance information, 
                and civic participation tools for citizens and e-residents of Ardanis.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to="/e-residency" className="btn-gold px-8 py-3 rounded-lg font-semibold flex items-center gap-2">
                  <i className="fa-solid fa-id-card"></i>
                  Apply for E-Residency
                </Link>
                <Link to="/officials" className="btn-primary px-8 py-3 rounded-lg font-semibold flex items-center gap-2">
                  <i className="fa-solid fa-user-tie"></i>
                  View Officials
                </Link>
              </div>
            </div>

            {/* Right Column - National Motto & Seal */}
            <div className="text-center lg:text-right">
              <div className="inline-block">
                <StateSeal size={200} className="mb-6" />
                <div className="border-t-2 border-gold/30 pt-6 mt-6">
                  <p className="text-2xl md:text-3xl font-display font-bold text-gold mb-2 italic">
                    "Ex Cellinentia et Progressus"
                  </p>
                  <p className="text-sm text-white/60 uppercase tracking-wider">
                    From Excellence and Progress
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Statistics Bar */}
      <section className="bg-gradient-to-r from-primary/20 via-violet/10 to-primary/20 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-cyan-bright mb-1">2,847</div>
              <div className="text-sm text-white/60">E-Residents</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gold mb-1">8</div>
              <div className="text-sm text-white/60">Government Councils</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-violet mb-1">100%</div>
              <div className="text-sm text-white/60">Renewable Energy</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-cyan-light mb-1">47</div>
              <div className="text-sm text-white/60">Countries Represented</div>
            </div>
          </div>
        </div>
      </section>

      {/* Government Services Grid */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-3">
            Government Services
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Access official services and information from the Sovereign Republic of Ardanis
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* E-Residency */}
          <Link to="/e-residency" className="glass-card rounded-xl p-6 group">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-cyan-bright/10 border border-cyan-bright/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-id-card text-cyan-bright text-xl"></i>
              </div>
              <div>
                <h3 className="font-bold text-white mb-2 text-lg">E-Residency Program</h3>
                <p className="text-sm text-white/60 leading-relaxed mb-3">
                  Apply for digital residency and access Ardanian services remotely.
                </p>
                <span className="text-cyan-bright text-sm font-medium group-hover:underline">
                  Learn more <i className="fa-solid fa-arrow-right ml-1"></i>
                </span>
              </div>
            </div>
          </Link>

          {/* Citizenship */}
          <Link to="/citizenship" className="glass-card rounded-xl p-6 group">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-violet/10 border border-violet/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-shield-halved text-violet text-xl"></i>
              </div>
              <div>
                <h3 className="font-bold text-white mb-2 text-lg">Citizenship</h3>
                <p className="text-sm text-white/60 leading-relaxed mb-3">
                  Full citizenship with voting rights and civic participation.
                </p>
                <span className="text-violet text-sm font-medium group-hover:underline">
                  Learn more <i className="fa-solid fa-arrow-right ml-1"></i>
                </span>
              </div>
            </div>
          </Link>

          {/* Officials */}
          <Link to="/officials" className="glass-card rounded-xl p-6 group">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-user-tie text-gold text-xl"></i>
              </div>
              <div>
                <h3 className="font-bold text-white mb-2 text-lg">Government Officials</h3>
                <p className="text-sm text-white/60 leading-relaxed mb-3">
                  View current ministers and government leadership.
                </p>
                <span className="text-gold text-sm font-medium group-hover:underline">
                  Learn more <i className="fa-solid fa-arrow-right ml-1"></i>
                </span>
              </div>
            </div>
          </Link>

          {/* National Gazette */}
          <Link to="/gazette" className="glass-card rounded-xl p-6 group">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-cyan-light/10 border border-cyan-light/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-newspaper text-cyan-light text-xl"></i>
              </div>
              <div>
                <h3 className="font-bold text-white mb-2 text-lg">National Gazette</h3>
                <p className="text-sm text-white/60 leading-relaxed mb-3">
                  Official news, legislative updates, and government announcements.
                </p>
                <span className="text-cyan-light text-sm font-medium group-hover:underline">
                  Learn more <i className="fa-solid fa-arrow-right ml-1"></i>
                </span>
              </div>
            </div>
          </Link>

          {/* Governance */}
          <Link to="/governance" className="glass-card rounded-xl p-6 group">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-landmark text-primary text-xl"></i>
              </div>
              <div>
                <h3 className="font-bold text-white mb-2 text-lg">Governance</h3>
                <p className="text-sm text-white/60 leading-relaxed mb-3">
                  Constitutional framework and parliamentary system information.
                </p>
                <span className="text-primary text-sm font-medium group-hover:underline">
                  Learn more <i className="fa-solid fa-arrow-right ml-1"></i>
                </span>
              </div>
            </div>
          </Link>

          {/* Public Registry */}
          <Link to="/registry" className="glass-card rounded-xl p-6 group">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-violet-deep/10 border border-violet-deep/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-database text-violet-deep text-xl"></i>
              </div>
              <div>
                <h3 className="font-bold text-white mb-2 text-lg">Public Registry</h3>
                <p className="text-sm text-white/60 leading-relaxed mb-3">
                  Transparent access to government records and legislation.
                </p>
                <span className="text-violet-deep text-sm font-medium group-hover:underline">
                  Learn more <i className="fa-solid fa-arrow-right ml-1"></i>
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="bg-midnight/50 border-y border-white/10 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold font-display text-white mb-2">Latest News</h2>
              <p className="text-white/60">Recent announcements from the Vanguard Assembly</p>
            </div>
            <Link to="/gazette" className="btn-primary px-6 py-2 rounded-lg font-medium flex items-center gap-2">
              View All
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card rounded-xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-1 bg-cyan-bright/20 text-cyan-bright text-xs rounded font-medium">
                  Legislation
                </span>
                <span className="text-xs text-white/40">Jan 15, 2026</span>
              </div>
              <h3 className="font-bold text-white mb-2">Digital Commons Expansion Act</h3>
              <p className="text-sm text-white/60 mb-4">
                The Vanguard Assembly has passed legislation expanding digital rights for all e-residents.
              </p>
              <Link to="/gazette" className="text-cyan-bright text-sm font-medium hover:underline">
                Read more <i className="fa-solid fa-arrow-right ml-1"></i>
              </Link>
            </div>

            <div className="glass-card rounded-xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-1 bg-gold/20 text-gold text-xs rounded font-medium">
                  Territory
                </span>
                <span className="text-xs text-white/40">Jan 12, 2026</span>
              </div>
              <h3 className="font-bold text-white mb-2">Danube Biodiversity Corridor</h3>
              <p className="text-sm text-white/60 mb-4">
                New environmental initiative protecting 2.4km of Danube riverfront habitat.
              </p>
              <Link to="/gazette" className="text-gold text-sm font-medium hover:underline">
                Read more <i className="fa-solid fa-arrow-right ml-1"></i>
              </Link>
            </div>

            <div className="glass-card rounded-xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-1 bg-violet/20 text-violet text-xs rounded font-medium">
                  Community
                </span>
                <span className="text-xs text-white/40">Jan 10, 2026</span>
              </div>
              <h3 className="font-bold text-white mb-2">E-Residency Milestone</h3>
              <p className="text-sm text-white/60 mb-4">
                Ardanis welcomes 2,800+ e-residents from 47 countries worldwide.
              </p>
              <Link to="/gazette" className="text-violet text-sm font-medium hover:underline">
                Read more <i className="fa-solid fa-arrow-right ml-1"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Government Structure */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-3">
            Government Structure
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            The Merit-Syndicate Parliamentary System ensures balanced governance through dual-track chambers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-card rounded-xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-cyan-bright/10 border border-cyan-bright/30 flex items-center justify-center">
                <i className="fa-solid fa-landmark text-cyan-bright text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-white">Vanguard Assembly</h3>
            </div>
            <p className="text-white/70 mb-4">
              The legislative branch consisting of dual-track chambers ensuring both expert knowledge 
              and democratic representation in lawmaking.
            </p>
            <ul className="space-y-2 text-sm text-white/60">
              <li className="flex items-center gap-2">
                <i className="fa-solid fa-check text-cyan-bright"></i>
                Expert Chamber (35 seats)
              </li>
              <li className="flex items-center gap-2">
                <i className="fa-solid fa-check text-cyan-bright"></i>
                Citizen Chamber (50 seats)
              </li>
              <li className="flex items-center gap-2">
                <i className="fa-solid fa-check text-cyan-bright"></i>
                Liquid Proxy Voting System
              </li>
            </ul>
          </div>

          <div className="glass-card rounded-xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center">
                <i className="fa-solid fa-users text-gold text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-white">Rotating Cabinet</h3>
            </div>
            <p className="text-white/70 mb-4">
              The executive branch with portfolio ministers selected quarterly based on merit 
              and expertise, ensuring fresh perspectives and accountability.
            </p>
            <ul className="space-y-2 text-sm text-white/60">
              <li className="flex items-center gap-2">
                <i className="fa-solid fa-check text-gold"></i>
                8 Portfolio Ministers
              </li>
              <li className="flex items-center gap-2">
                <i className="fa-solid fa-check text-gold"></i>
                Quarterly Rotation
              </li>
              <li className="flex items-center gap-2">
                <i className="fa-solid fa-check text-gold"></i>
                Merit-Based Selection
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link to="/governance" className="btn-primary px-8 py-3 rounded-lg font-semibold inline-flex items-center gap-2">
            <i className="fa-solid fa-book-open"></i>
            Learn About Our Governance
          </Link>
        </div>
      </section>

      {/* Territory & Environment */}
      <section className="bg-gradient-to-br from-primary/10 via-violet/5 to-primary/10 border-y border-white/10 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/30 text-xs text-green-400 font-semibold mb-5">
                <i className="fa-solid fa-leaf"></i> Environmental Leadership
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-6">
                100% Renewable Energy
              </h2>
              <p className="text-lg text-white/70 leading-relaxed mb-6">
                The Sovereign Republic of Ardanis operates entirely on renewable energy through our 
                advanced solar microgrid infrastructure in Pocket West-B along the Danube border.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="glass rounded-lg p-4">
                  <div className="text-2xl font-bold text-cyan-bright mb-1">94%</div>
                  <div className="text-xs text-white/60">Solar Generation</div>
                </div>
                <div className="glass rounded-lg p-4">
                  <div className="text-2xl font-bold text-gold mb-1">78%</div>
                  <div className="text-xs text-white/60">Battery Storage</div>
                </div>
              </div>
              <Link to="/history" className="btn-primary px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2">
                <i className="fa-solid fa-leaf"></i>
                Our Environmental Commitment
              </Link>
            </div>
            <div className="glass-card rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <i className="fa-solid fa-chart-line text-cyan-bright"></i>
                Live Grid Status
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-white/70">Solar Generation</span>
                    <span className="text-white font-bold">94%</span>
                  </div>
                  <div className="progress-bar h-2.5">
                    <div className="progress-fill bg-gold" style={{ width: '94%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-white/70">Battery Storage</span>
                    <span className="text-white font-bold">78%</span>
                  </div>
                  <div className="progress-bar h-2.5">
                    <div className="progress-fill bg-cyan-bright" style={{ width: '78%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-white/70">Grid Efficiency</span>
                    <span className="text-white font-bold">97%</span>
                  </div>
                  <div className="progress-bar h-2.5">
                    <div className="progress-fill bg-violet-deep" style={{ width: '97%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-white/70">Carbon Offset</span>
                    <span className="text-white font-bold">100%</span>
                  </div>
                  <div className="progress-bar h-2.5">
                    <div className="progress-fill bg-green-400" style={{ width: '100%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-display text-white mb-3">Quick Links</h2>
          <p className="text-white/60">Frequently accessed resources and information</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link to="/voting" className="glass-card rounded-lg p-5 text-center group">
            <i className="fa-solid fa-check-to-slot text-3xl text-cyan-bright mb-3 group-hover:scale-110 transition-transform"></i>
            <h3 className="font-bold text-white mb-1">Voting Simulator</h3>
            <p className="text-xs text-white/60">Try liquid proxy voting</p>
          </Link>

          <Link to="/credentials" className="glass-card rounded-lg p-5 text-center group">
            <i className="fa-solid fa-passport text-3xl text-gold mb-3 group-hover:scale-110 transition-transform"></i>
            <h3 className="font-bold text-white mb-1">Digital Credentials</h3>
            <p className="text-xs text-white/60">Manage your passport</p>
          </Link>

          <Link to="/history" className="glass-card rounded-lg p-5 text-center group">
            <i className="fa-solid fa-landmark text-3xl text-violet mb-3 group-hover:scale-110 transition-transform"></i>
            <h3 className="font-bold text-white mb-1">National History</h3>
            <p className="text-xs text-white/60">Our journey since 2019</p>
          </Link>

          <Link to="/careers" className="glass-card rounded-lg p-5 text-center group">
            <i className="fa-solid fa-briefcase text-3xl text-cyan-light mb-3 group-hover:scale-110 transition-transform"></i>
            <h3 className="font-bold text-white mb-1">Careers</h3>
            <p className="text-xs text-white/60">Join our government</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
