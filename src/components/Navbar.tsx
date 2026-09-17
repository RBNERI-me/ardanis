import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Flag from './Flag';
import StateSeal from './StateSeal';

const navItems = [
  { path: '/', label: 'Portal Home', icon: 'fa-house' },
  { path: '/e-residency', label: 'E-Residency', icon: 'fa-id-card' },
  { path: '/credentials', label: 'Credentials', icon: 'fa-passport' },
  { path: '/citizenship', label: 'Citizenship', icon: 'fa-shield-halved' },
  { path: '/voting', label: 'Voting', icon: 'fa-check-to-slot' },
  { path: '/gazette', label: 'Gazette', icon: 'fa-newspaper' },
  { path: '/governance', label: 'Governance', icon: 'fa-landmark' },
  { path: '/registry', label: 'Registry', icon: 'fa-database' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 glass-dark border-b border-cyan-bright/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-18">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <Flag size={44} className="transition-transform group-hover:scale-105" />
              <div className="absolute -bottom-1 -right-1">
                <StateSeal size={20} />
              </div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold font-display text-white leading-tight tracking-wide">ARDANIS</h1>
              <p className="text-[10px] text-cyan-bright/70 tracking-[0.2em] uppercase">Sovereign Republic</p>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path || 
                (item.path === '/gazette' && location.pathname.startsWith('/gazette/'));
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                    isActive ? 'tab-active' : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <i className={`fa-solid ${item.icon} text-xs`}></i>
                  {item.label}
                </Link>
              );
            })}
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white/70 hover:text-white p-2 transition-colors"
            aria-label="Toggle menu"
          >
            <i className={`fa-solid ${mobileOpen ? 'fa-xmark' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-cyan-bright/10 bg-midnight/98 backdrop-blur-xl">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    isActive ? 'bg-cyan-bright/10 text-cyan-bright border border-cyan-bright/20' : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <i className={`fa-solid ${item.icon} mr-3`}></i>
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
