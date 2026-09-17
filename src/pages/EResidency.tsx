import { useState } from 'react';
import Flag from '../components/Flag';
import StateSeal from '../components/StateSeal';

interface FormData {
  fullName: string;
  email: string;
  expertise: string;
  statement: string;
}

export default function EResidency() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    expertise: '',
    statement: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [residentId, setResidentId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = `ARD-E-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;
    setResidentId(id);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16">
        <div className="glass-card rounded-3xl p-8 text-center">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-bright to-violet flex items-center justify-center mx-auto mb-6 glow-cyan">
            <i className="fa-solid fa-check text-3xl text-white"></i>
          </div>
          <h2 className="text-3xl font-bold font-display text-white mb-4">Application Verified</h2>
          <p className="text-white/60 mb-6">Your E-Residency has been processed. Here is your digital identity card:</p>
          
          <div className="glass rounded-2xl p-6 border border-cyan-bright/30 glow-cyan max-w-sm mx-auto mb-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Flag size={32} />
                <div className="text-left">
                  <p className="text-xs text-cyan-bright/60 uppercase tracking-wider">Sovereign Republic of Ardanis</p>
                  <p className="text-sm font-bold text-white">Digital E-Resident Card</p>
                </div>
              </div>
              <StateSeal size={40} />
            </div>
            <div className="bg-midnight/60 rounded-xl p-4 border border-cyan-bright/10">
              <p className="text-xs text-white/40 mb-1">Resident ID</p>
              <p className="text-lg font-mono font-bold text-cyan-bright text-glow-cyan">{residentId}</p>
              <div className="mt-3 grid grid-cols-2 gap-3 text-left">
                <div>
                  <p className="text-xs text-white/40">Name</p>
                  <p className="text-sm text-white font-medium">{formData.fullName}</p>
                </div>
                <div>
                  <p className="text-xs text-white/40">Domain</p>
                  <p className="text-sm text-white font-medium">{formData.expertise}</p>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-cyan-bright/10">
                <p className="text-xs text-white/40">Status</p>
                <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400 border border-green-500/30 mt-1">
                  <i className="fa-solid fa-circle-check"></i> Verified Active
                </span>
              </div>
            </div>
          </div>

          <p className="text-xs text-white/40">Save your Resident ID for future reference.</p>
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({ fullName: '', email: '', expertise: '', statement: '' });
            }}
            className="mt-6 btn-primary px-6 py-2 rounded-xl text-sm"
          >
            Submit Another Application
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-bright/10 border border-cyan-bright/20 text-xs text-cyan-bright font-medium mb-4">
          <i className="fa-solid fa-globe"></i> Digital Nation Program
        </span>
        <h1 className="text-3xl md:text-4xl font-bold font-display text-white mb-3">E-Residency Application</h1>
        <p className="text-white/50 max-w-xl mx-auto">Join the Ardanian digital commons. Open to global contributors, researchers, and creators.</p>
      </div>

      <div className="glass-card rounded-3xl p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-white/70 mb-2">Full Name *</label>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="Your legal name"
                className="w-full px-4 py-3 rounded-xl input-glass"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white/70 mb-2">Email *</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-xl input-glass"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-white/70 mb-2">Area of Expertise *</label>
            <select
              required
              value={formData.expertise}
              onChange={(e) => setFormData({ ...formData, expertise: e.target.value })}
              className="w-full px-4 py-3 rounded-xl input-glass"
            >
              <option value="">Select domain</option>
              <option value="Science & Research">Science & Research</option>
              <option value="Technology & Engineering">Technology & Engineering</option>
              <option value="Arts & Culture">Arts & Culture</option>
              <option value="Governance & Policy">Governance & Policy</option>
              <option value="Environment & Sustainability">Environment & Sustainability</option>
              <option value="Education">Education</option>
              <option value="Diplomacy">Diplomacy</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-white/70 mb-2">Statement of Intent *</label>
            <textarea
              required
              minLength={50}
              rows={4}
              value={formData.statement}
              onChange={(e) => setFormData({ ...formData, statement: e.target.value })}
              placeholder="How do you plan to contribute to Ardanis? (min. 50 characters)"
              className="w-full px-4 py-3 rounded-xl input-glass resize-none"
            />
          </div>
          <div className="glass rounded-xl p-4 border border-gold/20">
            <p className="text-xs text-white/50">
              <i className="fa-solid fa-info-circle text-gold mr-1"></i>
              E-Residency grants digital commons access. It does not confer physical residency or legal citizenship.
            </p>
          </div>
          <button type="submit" className="w-full btn-gold py-4 rounded-xl flex items-center justify-center gap-2">
            <i className="fa-solid fa-paper-plane"></i> Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}
