import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GovBot from './components/GovBot';
import Home from './pages/Home';
import EResidency from './pages/EResidency';
import CredentialsVault from './pages/CredentialsVault';
import Citizenship from './pages/Citizenship';
import VotingSimulator from './pages/VotingSimulator';
import Gazette from './pages/Gazette';
import ArticleDetail from './pages/ArticleDetail';
import Governance from './pages/Governance';
import Registry from './pages/Registry';

function AnnouncementBar() {
  return (
    <div className="bg-gradient-to-r from-midnight via-primary/40 to-midnight border-b border-cyan-bright/20 relative overflow-hidden">
      <div className="absolute inset-0 shimmer opacity-30"></div>
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between relative z-10">
        <div className="flex items-center gap-3 overflow-hidden">
          <span className="flex-shrink-0 inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-gold/20 text-gold border border-gold/40">
            <i className="fa-solid fa-bullhorn mr-1.5 text-[10px]"></i> GAZETTE
          </span>
          <div className="flex items-center gap-2 overflow-hidden">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-bright animate-pulse-glow flex-shrink-0"></span>
            <p className="text-sm text-white/90 truncate">
              <span className="text-cyan-bright font-semibold">OFFICIAL DISPATCH:</span> Vanguard Assembly Session 47 concludes — Digital Commons Expansion Act now in effect • Danube border jurisdiction framework ratified • E-Residency Q1 2026 cohort open
            </p>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-4 flex-shrink-0 ml-4">
          <a href="#" className="text-xs text-white/50 hover:text-cyan-bright transition-colors">
            <i className="fa-solid fa-arrow-up-right-from-square mr-1"></i> Full Dispatch
          </a>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col relative">
        <AnnouncementBar />
        <Navbar />
        <main className="flex-1 relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/e-residency" element={<EResidency />} />
            <Route path="/credentials" element={<CredentialsVault />} />
            <Route path="/citizenship" element={<Citizenship />} />
            <Route path="/voting" element={<VotingSimulator />} />
            <Route path="/gazette" element={<Gazette />} />
            <Route path="/gazette/:slug" element={<ArticleDetail />} />
            <Route path="/governance" element={<Governance />} />
            <Route path="/registry" element={<Registry />} />
          </Routes>
        </main>
        <Footer />
        <GovBot />
      </div>
    </Router>
  );
}

export default App;
