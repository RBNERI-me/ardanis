import { Link } from 'react-router-dom';
import Flag from '../components/Flag';

export default function Home() {
  return (
    <div>
      {/* Hero Section - Enhanced Atmospheric Depth */}
      <section className="relative overflow-hidden py-24 md:py-40">
        {/* Luminous Gradient Blooms */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/30 rounded-full blur-[200px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-violet-deep/25 rounded-full blur-[180px] animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-bright/8 rounded-full blur-[220px]"></div>
          <div className="absolute top-1/3 right-1/3 w-[400px] h-[400px] bg-cyan-light/10 rounded-full blur-[160px]"></div>
        </div>
        
        {/* Editorial Grid Overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{
          backgroundImage: 'linear-gradient(rgba(1, 255, 246, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(1, 255, 246, 0.4) 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }}></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass mb-8">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-bright animate-pulse-glow"></span>
            <span className="text-sm text-cyan-bright font-medium tracking-wide">Sovereign Republic of Ardanis — Official Portal</span>
          </div>
          
          {/* Flag with Enhanced Glow */}
          <div className="mb-10 relative inline-block">
            <div className="absolute inset-0 bg-cyan-bright/20 rounded-full blur-3xl"></div>
            <Flag size={100} className="mx-auto animate-float relative z-10" />
          </div>
          
          {/* Editorial Typography - Massive Feature Headers */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display mb-6 tracking-tight">
            <span className="gradient-text block mb-2">Ex Cellinentia</span>
            <span className="text-white block">et Progressus</span>
          </h1>
          
          {/* Subheading with Classical Elegance */}
          <p className="editorial-subheading text-cyan-bright/70 mb-6 tracking-[0.2em]">
            From Excellence and Progress
          </p>
          
          {/* Main Description */}
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-white/70 leading-relaxed mb-10 font-light">
            Welcome to the official digital portal of <span className="text-cyan-bright font-medium">Ardanis</span> — 
            a sovereign micronation in <span className="text-gold font-medium">Pocket West-B</span> along the Danube border. 
            Pioneering eco-sustainable governance through the Merit-Syndicate Parliamentary System.
          </p>
          
          {/* Action Buttons with Enhanced Styling */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link to="/e-residency" className="btn-gold px-10 py-4 rounded-xl flex items-center gap-3 text-base font-semibold tracking-wide">
              <i className="fa-solid fa-id-card"></i> Apply for E-Residency
            </Link>
            <Link to="/governance" className="btn-primary px-10 py-4 rounded-xl flex items-center gap-3 text-base font-semibold tracking-wide">
              <i className="fa-solid fa-book-open"></i> Explore Governance
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4">
        <div className="editorial-line my-16"></div>
      </div>

      {/* Quick Action Cards - Enhanced with Classical Elegance */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <p className="editorial-subheading text-cyan-bright/60 mb-3">Official Services</p>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-white tracking-tight">Public Services Portal</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link to="/e-residency" className="glass-card rounded-2xl p-8 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-bright/5 rounded-full blur-3xl group-hover:bg-cyan-bright/10 transition-all"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-xl bg-cyan-bright/10 border border-cyan-bright/30 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-cyan-bright/20 transition-all">
                <i className="fa-solid fa-id-card text-cyan-bright text-xl"></i>
              </div>
              <h3 className="font-bold text-white mb-2 text-lg">E-Residency</h3>
              <p className="text-sm text-white/60 leading-relaxed">Digital nation membership for global contributors</p>
            </div>
          </Link>
          <Link to="/citizenship" className="glass-card rounded-2xl p-8 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-violet/5 rounded-full blur-3xl group-hover:bg-violet/10 transition-all"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-xl bg-violet/10 border border-violet/30 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-violet/20 transition-all">
                <i className="fa-solid fa-shield-halved text-violet text-xl"></i>
              </div>
              <h3 className="font-bold text-white mb-2 text-lg">Citizenship</h3>
              <p className="text-sm text-white/60 leading-relaxed">Full civic participation in the Open Commons</p>
            </div>
          </Link>
          <Link to="/gazette" className="glass-card rounded-2xl p-8 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-3xl group-hover:bg-gold/10 transition-all"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-gold/20 transition-all">
                <i className="fa-solid fa-newspaper text-gold text-xl"></i>
              </div>
              <h3 className="font-bold text-white mb-2 text-lg">National Gazette</h3>
              <p className="text-sm text-white/60 leading-relaxed">Official dispatches and legislative updates</p>
            </div>
          </Link>
          <Link to="/registry" className="glass-card rounded-2xl p-8 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-light/5 rounded-full blur-3xl group-hover:bg-cyan-light/10 transition-all"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-xl bg-cyan-light/10 border border-cyan-light/30 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-cyan-light/20 transition-all">
                <i className="fa-solid fa-database text-cyan-light text-xl"></i>
              </div>
              <h3 className="font-bold text-white mb-2 text-lg">Public Registry</h3>
              <p className="text-sm text-white/60 leading-relaxed">Transparent governance records and data</p>
            </div>
          </Link>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4">
        <div className="editorial-line my-16"></div>
      </div>

      {/* Territory Spotlight - Enhanced with Classical Framing */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <p className="editorial-subheading text-cyan-bright/60 mb-3">Ecological Innovation</p>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-white tracking-tight">Territory Spotlight</h2>
        </div>
        
        <div className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden">
          {/* Atmospheric Background Blobs */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-bright/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-deep/5 rounded-full blur-3xl"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-bright/10 border border-cyan-bright/30 text-xs text-cyan-bright font-semibold mb-5 tracking-wide">
                <i className="fa-solid fa-leaf"></i> Territory Spotlight
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-5 tracking-tight leading-tight">
                Pocket West-B: <span className="text-cyan-bright text-glow-cyan">100% Renewable Microgrid</span>
              </h2>
              <p className="text-white/70 leading-relaxed mb-8 text-lg">
                The Ardanian territory operates on a fully renewable solar microgrid, achieving carbon-neutral 
                status since 2025. Our community-owned energy infrastructure powers all digital services, 
                civic buildings, and research facilities with zero fossil fuel dependency.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center p-4 glass rounded-xl">
                  <p className="text-3xl font-bold text-cyan-bright text-glow-cyan mb-1">100%</p>
                  <p className="text-xs text-white/50 uppercase tracking-wider">Renewable</p>
                </div>
                <div className="text-center p-4 glass rounded-xl">
                  <p className="text-3xl font-bold text-gold text-glow-gold mb-1">38ha</p>
                  <p className="text-xs text-white/50 uppercase tracking-wider">Territory</p>
                </div>
                <div className="text-center p-4 glass rounded-xl">
                  <p className="text-3xl font-bold text-violet-deep mb-1">2.8K</p>
                  <p className="text-xs text-white/50 uppercase tracking-wider">E-Residents</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="glass rounded-2xl p-8 border border-cyan-bright/30 relative overflow-hidden">
                {/* Inner Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-bright/5 to-transparent pointer-events-none"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="w-3 h-3 rounded-full bg-cyan-bright animate-pulse-glow"></span>
                    <span className="text-sm text-cyan-bright font-semibold tracking-wide">Live Grid Status</span>
                  </div>
                  <div className="space-y-5">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-white/70 font-medium">Solar Generation</span>
                        <span className="text-white font-bold">94%</span>
                      </div>
                      <div className="progress-bar h-2.5">
                        <div className="progress-fill bg-gold" style={{ width: '94%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-white/70 font-medium">Battery Storage</span>
                        <span className="text-white font-bold">78%</span>
                      </div>
                      <div className="progress-bar h-2.5">
                        <div className="progress-fill bg-cyan-bright" style={{ width: '78%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-white/70 font-medium">Grid Efficiency</span>
                        <span className="text-white font-bold">97%</span>
                      </div>
                      <div className="progress-bar h-2.5">
                        <div className="progress-fill bg-violet-deep" style={{ width: '97%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-white/70 font-medium">Carbon Offset</span>
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
          </div>
        </div>
      </section>
    </div>
  );
}
