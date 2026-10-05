import { Link } from 'react-router-dom';
import Flag from './Flag';
import StateSeal from './StateSeal';

export default function Footer() {
  return (
    <footer className="border-t border-cyan-bright/10 glass-dark mt-12">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <Flag size={36} />
                <div className="absolute -bottom-1 -right-1">
                  <StateSeal size={18} />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-white font-display tracking-wide">ARDANIS</h3>
                <p className="text-[9px] text-cyan-bright/60 tracking-[0.2em]">SOVEREIGN REPUBLIC</p>
              </div>
            </div>
            <p className="text-xs text-white/50 leading-relaxed mb-3">
              A sovereign micronation committed to innovation, ecological harmony, and transparent governance.
            </p>
            <p className="text-xs text-gold/80 italic font-serif">"Ex Cellinentia et Progressus"</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-cyan-bright mb-3 uppercase tracking-wider">Services</h4>
            <ul className="space-y-2 text-sm text-white/50">
              <li><Link to="/history" className="hover:text-cyan-bright transition-colors">History & Heritage</Link></li>
              <li><Link to="/officials" className="hover:text-cyan-bright transition-colors">Government Officials</Link></li>
              <li><Link to="/e-residency" className="hover:text-cyan-bright transition-colors">E-Residency</Link></li>
              <li><Link to="/citizenship" className="hover:text-cyan-bright transition-colors">Citizenship</Link></li>
              <li><Link to="/gazette" className="hover:text-cyan-bright transition-colors">National Gazette</Link></li>
              <li><Link to="/registry" className="hover:text-cyan-bright transition-colors">Public Registry</Link></li>
              <li><Link to="/careers" className="hover:text-cyan-bright transition-colors">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-cyan-bright mb-3 uppercase tracking-wider">Governance</h4>
            <ul className="space-y-2 text-sm text-white/50">
              <li><Link to="/governance" className="hover:text-cyan-bright transition-colors">Constitution</Link></li>
              <li><Link to="/governance" className="hover:text-cyan-bright transition-colors">Vanguard Assembly</Link></li>
              <li><Link to="/registry" className="hover:text-cyan-bright transition-colors">Open Legislation</Link></li>
              <li><Link to="/registry" className="hover:text-cyan-bright transition-colors">Transparency Reports</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-cyan-bright mb-3 uppercase tracking-wider">Secure Node</h4>
            <ul className="space-y-2 text-xs text-white/40">
              <li className="flex items-center gap-2">
                <i className="fa-solid fa-shield-halved text-cyan-bright/50"></i>
                TLS 1.3 Encrypted
              </li>
              <li className="flex items-center gap-2">
                <i className="fa-solid fa-server text-cyan-bright/50"></i>
                Node: PW-B-ARD-01
              </li>
              <li className="flex items-center gap-2">
                <i className="fa-solid fa-globe text-cyan-bright/50"></i>
                ardan.gov.pocket-west-b
              </li>
              <li className="flex items-center gap-2">
                <i className="fa-solid fa-location-dot text-cyan-bright/50"></i>
                Pocket West-B, Danube
              </li>
            </ul>
            
            {/* Network Status */}
            <div className="mt-4 pt-4 border-t border-white/5">
              <p className="text-xs text-white/50 mb-2 font-semibold">Network Status</p>
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-white/40">API Gateway</span>
                  <span className="flex items-center gap-1 text-green-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                    99.9% uptime
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-white/40">Open Commons</span>
                  <span className="flex items-center gap-1 text-green-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                    100% uptime
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-white/40">Voting System</span>
                  <span className="flex items-center gap-1 text-green-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                    99.8% uptime
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">© 2026 The Sovereign Republic of Ardanis. All sovereign rights reserved.</p>
          <div className="flex items-center gap-4">
            <p className="text-xs text-white/30">Merit-Syndicate Parliamentary System • Open Commons Initiative</p>
            <Link to="/careers" className="text-xs text-white/30 hover:text-cyan-bright transition-colors">
              Careers
            </Link>
            <Link to="/admin-portal" className="text-xs text-white/20 hover:text-white/40 transition-colors" title="Authorized Personnel Only">
              <i className="fa-solid fa-lock"></i>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
