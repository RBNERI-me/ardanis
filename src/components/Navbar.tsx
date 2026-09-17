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
    <nav className="sticky top-0 z-50">
      {/* Top Gradient Glow Line */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-cyan-bright/40 to-transparent"></div>
      
      {/* Main Header Container */}
      <div className="glass-dark border-b border-white/[0.08] relative overflow-hidden">
        {/* Subtle Backdrop Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex items-center justify-between h-20">
            {/* Enhanced Logo Section */}
            <Link to="/" className="flex items-center gap-4 group">
              {/* Flag with Enhanced Glow */}
              <div className="relative">
                <div className="absolute inset-0 bg-cyan-bright/20 rounded-full blur-xl group-hover:bg-cyan-bright/30 transition-all"></div>
                <div className="relative">
                  <Flag size={48} className="transition-all duration-300 group-hover:scale-110" />
                </div>
                {/* State Seal Overlay */}
                <div className="absolute -bottom-1 -right-1 transition-transform duration-300 group-hover:scale-110">
                  <StateSeal size={22} />
                </div>
              </div>
              
              {/* Brand Text */}
              <div className="hidden sm:block">
                <div className="flex items-baseline gap-2">
                  <h1 className="text-xl font-bold font-display text-white leading-none tracking-wide group-hover:text-glow-cyan transition-all">
                    ARDANIS
                  </h1>
                  <span className="text-[10px] text-gold/60 font-medium">™</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <div className="w-1 h-1 rounded-full bg-cyan-bright animate-pulse"></div>
                  <p className="text-[10px] text-cyan-bright/70 tracking-[0.25em] uppercase font-medium">
                    Sovereign Republic
                  </p>
                </div>
              </div>
            </Link>

            {/* Enhanced Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path || 
                  (item.path === '/gazette' && location.pathname.startsWith('/gazette/'));
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`relative px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 group/nav ${
                      isActive 
                        ? 'text-cyan-bright bg-cyan-bright/10' 
                        : 'text-white/60 hover:text-white'
                    }`}
                  >
                    {/* Active Indicator */}
                    {isActive && (
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-transparent via-cyan-bright to-transparent"></div>
                    )}
                    
                    {/* Icon with Hover Effect */}
                    <i className={`fa-solid ${item.icon} text-xs transition-all duration-300 ${
                      isActive ? 'text-cyan-bright' : 'group-hover/nav:text-cyan-bright/80'
                    }`}></i>
                    
                    {/* Label */}
                    <span className="relative">
                      {item.label}
                      {/* Hover Underline Effect */}
                      {!isActive && (
                        <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-cyan-bright/50 group-hover/nav:w-full transition-all duration-300"></span>
                      )}
                    </span>
                  </Link>
                );
              })}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-4">
              {/* Network Status Indicator (Desktop Only) */}
              <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-green-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                <span className="text-xs text-green-400 font-medium">Online</span>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden relative w-10 h-10 rounded-lg glass border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-cyan-bright/30 transition-all duration-300"
                aria-label="Toggle menu"
              >
                <i className={`fa-solid ${mobileOpen ? 'fa-xmark' : 'fa-bars'} text-lg transition-transform duration-300 ${mobileOpen ? 'rotate-90' : ''}`}></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      <div className={`lg:hidden transition-all duration-500 ease-in-out overflow-hidden ${
        mobileOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="glass-dark border-b border-cyan-bright/10 relative overflow-hidden">
          {/* Mobile Menu Background Effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent pointer-events-none"></div>
          
          <div className="px-4 py-6 space-y-2 relative z-10">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/5">
              <div className="flex items-center gap-3">
                <Flag size={32} />
                <div>
                  <p className="text-sm font-bold text-white">Navigation</p>
                  <p className="text-xs text-cyan-bright/60">Select a section</p>
                </div>
              </div>
              <div className="flex items-center gap-2 px-2 py-1 rounded-full glass border border-green-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                <span className="text-xs text-green-400">Online</span>
              </div>
            </div>

            {/* Navigation Items */}
            {navItems.map((item, index) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-5 py-4 rounded-xl text-sm font-medium transition-all duration-300 relative overflow-hidden group ${
                    isActive 
                      ? 'bg-gradient-to-r from-cyan-bright/15 to-violet/10 text-cyan-bright border border-cyan-bright/30' 
                      : 'text-white/70 hover:text-white hover:bg-white/5 border border-transparent'
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {/* Active Indicator */}
                  {isActive && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-cyan-bright to-violet rounded-full"></div>
                  )}
                  
                  <div className="flex items-center gap-4">
                    {/* Icon Container */}
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                      isActive 
                        ? 'bg-cyan-bright/20 border border-cyan-bright/30' 
                        : 'bg-white/5 border border-white/10 group-hover:border-cyan-bright/20'
                    }`}>
                      <i className={`fa-solid ${item.icon} text-sm ${
                        isActive ? 'text-cyan-bright' : 'text-white/60 group-hover:text-cyan-bright/80'
                      }`}></i>
                    </div>
                    
                    {/* Label */}
                    <div className="flex-1">
                      <p className="font-semibold">{item.label}</p>
                      {isActive && (
                        <p className="text-xs text-cyan-bright/60 mt-0.5">Current section</p>
                      )}
                    </div>
                    
                    {/* Arrow */}
                    <i className={`fa-solid fa-chevron-right text-xs transition-all duration-300 ${
                      isActive ? 'text-cyan-bright translate-x-0' : 'text-white/30 -translate-x-1 group-hover:translate-x-0 group-hover:text-white/50'
                    }`}></i>
                  </div>
                </Link>
              );
            })}

            {/* Mobile Menu Footer */}
            <div className="pt-4 mt-4 border-t border-white/5">
              <div className="flex items-center justify-between text-xs text-white/40">
                <span>Node: PW-B-ARD-01</span>
                <span className="flex items-center gap-1">
                  <i className="fa-solid fa-shield-halved text-cyan-bright/50"></i>
                  TLS 1.3
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
