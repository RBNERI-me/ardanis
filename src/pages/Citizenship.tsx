import { useState } from 'react';

interface FormData {
  fullName: string;
  eResidencyId: string;
  handle: string;
  council: string;
  agreed: boolean;
}

export default function Citizenship() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    eResidencyId: '',
    handle: '',
    council: '',
    agreed: false
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <div className="glass-card rounded-3xl p-8">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gold to-violet-deep flex items-center justify-center mx-auto mb-6 glow-gold">
            <i className="fa-solid fa-shield-halved text-3xl text-white"></i>
          </div>
          <h2 className="text-3xl font-bold font-display text-white mb-4">Petition Received</h2>
          <p className="text-white/60 mb-4">Your citizenship petition is under review by the Vanguard Assembly.</p>
          <div className="glass rounded-xl p-4 border border-gold/20 inline-block">
            <p className="text-xs text-white/40">Reference</p>
            <p className="text-lg font-mono font-bold text-gold">ARD-CIT-{Date.now().toString(36).toUpperCase()}</p>
          </div>
          <p className="text-sm text-white/40 mt-4">Review period: 14 working days. You will be notified via email.</p>
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({ fullName: '', eResidencyId: '', handle: '', council: '', agreed: false });
            }}
            className="mt-6 btn-primary px-6 py-2 rounded-xl text-sm"
          >
            New Petition
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet/10 border border-violet/20 text-xs text-violet font-medium mb-4">
          <i className="fa-solid fa-shield-halved"></i> Open Commons Assembly
        </span>
        <h1 className="text-3xl md:text-4xl font-bold font-display text-white mb-3">Citizenship Petition</h1>
        <p className="text-white/50 max-w-xl mx-auto">Request full citizenship and participate in the governance of Ardanis through the Open Commons.</p>
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
                placeholder="Legal name"
                className="w-full px-4 py-3 rounded-xl input-glass"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white/70 mb-2">E-Residency ID</label>
              <input
                type="text"
                value={formData.eResidencyId}
                onChange={(e) => setFormData({ ...formData, eResidencyId: e.target.value })}
                placeholder="ARD-E-XXXXX-XXXX"
                className="w-full px-4 py-3 rounded-xl input-glass font-mono"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-white/70 mb-2">Digital Handle *</label>
              <div className="flex">
                <span className="px-3 py-3 bg-midnight/60 border border-r-0 border-cyan-bright/20 rounded-l-xl text-white/40 text-sm">@</span>
                <input
                  type="text"
                  required
                  value={formData.handle}
                  onChange={(e) => setFormData({ ...formData, handle: e.target.value })}
                  placeholder="handle"
                  className="w-full px-4 py-3 rounded-r-xl input-glass"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-white/70 mb-2">Council Track *</label>
              <select
                required
                value={formData.council}
                onChange={(e) => setFormData({ ...formData, council: e.target.value })}
                className="w-full px-4 py-3 rounded-xl input-glass"
              >
                <option value="">Select council</option>
                <option value="Science & Technology">Science & Technology</option>
                <option value="Arts & Culture">Arts & Culture</option>
                <option value="Governance">Governance & Civic Affairs</option>
                <option value="Environment">Environment & Territory</option>
                <option value="Education">Education & Knowledge</option>
                <option value="Economics">Economics & Trade</option>
                <option value="Diplomacy">Diplomacy & External Relations</option>
              </select>
            </div>
          </div>
          <div className="glass rounded-xl p-5 border border-violet/20">
            <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
              <i className="fa-solid fa-scroll text-violet"></i> Constitutional Oath
            </h3>
            <ul className="space-y-2 text-sm text-white/60 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-violet mt-0.5">•</span>
                I uphold the Merit-Syndicate Parliamentary System
              </li>
              <li className="flex items-start gap-2">
                <span className="text-violet mt-0.5">•</span>
                I commit to transparent and ethical governance
              </li>
              <li className="flex items-start gap-2">
                <span className="text-violet mt-0.5">•</span>
                I respect all Ardanian citizens and their contributions
              </li>
              <li className="flex items-start gap-2">
                <span className="text-violet mt-0.5">•</span>
                I support eco-sustainable development of Pocket West-B
              </li>
            </ul>
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                required
                checked={formData.agreed}
                onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
                className="w-5 h-5 rounded border-cyan-bright/20 mt-0.5 accent-cyan-bright"
              />
              <span className="text-sm text-white/60">I swear to uphold the Ardanian constitutional principles. *</span>
            </label>
          </div>
          <button
            type="submit"
            disabled={!formData.agreed}
            className="w-full btn-primary py-4 rounded-xl flex items-center justify-center gap-2 disabled:opacity-50"
          >
            <i className="fa-solid fa-paper-plane"></i> Submit Citizenship Petition
          </button>
        </form>
      </div>
    </div>
  );
}
