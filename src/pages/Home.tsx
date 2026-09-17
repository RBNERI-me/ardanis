import { Link } from 'react-router-dom';
import Flag from '../components/Flag';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/25 rounded-full blur-[180px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-violet-deep/20 rounded-full blur-[150px]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-bright/5 rounded-full blur-[200px]"></div>
        </div>
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(rgba(1, 255, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(1, 255, 246, 0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-bright animate-pulse"></span>
            <span className="text-sm text-cyan-bright/90">Sovereign Republic of Ardanis — Official Portal</span>
          </div>
          <div className="mb-8">
            <Flag size={80} className="mx-auto animate-float" />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display mb-4">
            <span className="gradient-text">Ex Cellinentia</span>
            <br />
            <span className="text-white">et Progressus</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-white/60 leading-relaxed mb-8">
            Welcome to the official digital portal of <span className="text-cyan-bright font-medium">Ardanis</span> — 
            a sovereign micronation in <span className="text-gold font-medium">Pocket West-B</span> along the Danube border. 
            Pioneering eco-sustainable governance through the Merit-Syndicate Parliamentary System.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/e-residency" className="btn-gold px-8 py-3 rounded-xl flex items-center gap-2">
              <i className="fa-solid fa-id-card"></i> Apply for E-Residency
            </Link>
            <Link to="/governance" className="btn-primary px-8 py-3 rounded-xl flex items-center gap-2">
              <i className="fa-solid fa-book-open"></i> Explore Governance
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4">
        <div className="editorial-line my-12"></div>
      </div>

      {/* Quick Action Cards */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold font-display text-center mb-8 text-white">Public Services Portal</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link to="/e-residency" className="glass-card rounded-2xl p-6 group">
            <div className="w-12 h-12 rounded-xl bg-cyan-bright/10 border border-cyan-bright/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <i className="fa-solid fa-id-card text-cyan-bright"></i>
            </div>
            <h3 className="font-bold text-white mb-1">E-Residency</h3>
            <p className="text-sm text-white/50">Digital nation membership for global contributors</p>
          </Link>
          <Link to="/citizenship" className="glass-card rounded-2xl p-6 group">
            <div className="w-12 h-12 rounded-xl bg-violet/10 border border-violet/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <i className="fa-solid fa-shield-halved text-violet"></i>
            </div>
            <h3 className="font-bold text-white mb-1">Citizenship</h3>
            <p className="text-sm text-white/50">Full civic participation in the Open Commons</p>
          </Link>
          <Link to="/gazette" className="glass-card rounded-2xl p-6 group">
            <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <i className="fa-solid fa-newspaper text-gold"></i>
            </div>
            <h3 className="font-bold text-white mb-1">National Gazette</h3>
            <p className="text-sm text-white/50">Official dispatches and legislative updates</p>
          </Link>
          <Link to="/registry" className="glass-card rounded-2xl p-6 group">
            <div className="w-12 h-12 rounded-xl bg-cyan-light/10 border border-cyan-light/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <i className="fa-solid fa-database text-cyan-light"></i>
            </div>
            <h3 className="font-bold text-white mb-1">Public Registry</h3>
            <p className="text-sm text-white/50">Transparent governance records and data</p>
          </Link>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4">
        <div className="editorial-line my-12"></div>
      </div>

      {/* Territory Spotlight */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="glass-card rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-bright/10 border border-cyan-bright/20 text-xs text-cyan-bright font-medium mb-4">
                <i className="fa-solid fa-leaf"></i> Territory Spotlight
              </span>
              <h2 className="text-3xl font-bold font-display text-white mb-4">
                Pocket West-B: <span className="text-cyan-bright">100% Renewable Microgrid</span>
              </h2>
              <p className="text-white/60 leading-relaxed mb-6">
                The Ardanian territory operates on a fully renewable solar microgrid, achieving carbon-neutral 
                status since 2025. Our community-owned energy infrastructure powers all digital services, 
                civic buildings, and research facilities with zero fossil fuel dependency.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-cyan-bright">100%</p>
                  <p className="text-xs text-white/40">Renewable</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-gold">38ha</p>
                  <p className="text-xs text-white/40">Territory</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-violet-deep">2.8K</p>
                  <p className="text-xs text-white/40">E-Residents</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="glass rounded-2xl p-6 border border-cyan-bright/20">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-3 h-3 rounded-full bg-cyan-bright animate-pulse"></span>
                  <span className="text-sm text-cyan-bright font-medium">Live Grid Status</span>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-white/60">Solar Generation</span>
                      <span className="text-white font-medium">94%</span>
                    </div>
                    <div className="progress-bar h-2">
                      <div className="progress-fill bg-gold" style={{ width: '94%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-white/60">Battery Storage</span>
                      <span className="text-white font-medium">78%</span>
                    </div>
                    <div className="progress-bar h-2">
                      <div className="progress-fill bg-cyan-bright" style={{ width: '78%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-white/60">Grid Efficiency</span>
                      <span className="text-white font-medium">97%</span>
                    </div>
                    <div className="progress-bar h-2">
                      <div className="progress-fill bg-violet-deep" style={{ width: '97%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-white/60">Carbon Offset</span>
                      <span className="text-white font-medium">100%</span>
                    </div>
                    <div className="progress-bar h-2">
                      <div className="progress-fill bg-green-400" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
