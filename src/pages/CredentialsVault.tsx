import { useState } from 'react';
import Flag from '../components/Flag';
import StateSeal from '../components/StateSeal';

interface Credential {
  id: string;
  type: string;
  issued: string;
  status: 'Active' | 'Pending' | 'Expired';
  token: string;
}

export default function CredentialsVault() {
  const [verificationToken, setVerificationToken] = useState('');
  const [verificationResult, setVerificationResult] = useState<'success' | 'error' | null>(null);

  // Simulated user credentials
  const credentials: Credential[] = [
    {
      id: 'ARD-PASS-2026-001',
      type: 'E-Residency Digital Passport',
      issued: '2026-01-15',
      status: 'Active',
      token: 'ARD-SIG-' + Math.random().toString(36).substring(2, 15).toUpperCase()
    },
    {
      id: 'ARD-CLEAR-2026-042',
      type: 'Diplomatic Clearance Token',
      issued: '2026-01-10',
      status: 'Active',
      token: 'ARD-DIP-' + Math.random().toString(36).substring(2, 15).toUpperCase()
    },
    {
      id: 'ARD-VOTE-2026-128',
      type: 'Voting Rights Credential',
      issued: '2026-01-08',
      status: 'Active',
      token: 'ARD-VOT-' + Math.random().toString(36).substring(2, 15).toUpperCase()
    },
  ];

  const handlePrint = () => {
    window.print();
  };

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate verification
    if (verificationToken.startsWith('ARD-')) {
      setVerificationResult('success');
    } else {
      setVerificationResult('error');
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-bright/10 border border-cyan-bright/20 text-xs text-cyan-bright font-medium mb-4">
          <i className="fa-solid fa-id-card"></i> Secure Credentials
        </span>
        <h1 className="text-3xl md:text-4xl font-bold font-display text-white mb-3">Digital Passport & Credentials Vault</h1>
        <p className="text-white/50 max-w-xl mx-auto">Access your verified digital credentials, download your E-Resident passport, and verify cryptographic diplomatic clearance tokens.</p>
      </div>

      {/* Digital Passport Card */}
      <div className="glass-card rounded-3xl p-8 mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold font-display text-white flex items-center gap-2">
            <i className="fa-solid fa-passport text-cyan-bright"></i>
            Your Digital Passport
          </h2>
          <button
            onClick={handlePrint}
            className="btn-primary px-4 py-2 rounded-lg text-sm"
          >
            <i className="fa-solid fa-print mr-2"></i> Print / Download
          </button>
        </div>

        {/* Passport Card */}
        <div className="glass rounded-2xl p-6 border border-cyan-bright/30 glow-cyan max-w-md mx-auto mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Flag size={32} />
              <div className="text-left">
                <p className="text-xs text-cyan-bright/60 uppercase tracking-wider">Sovereign Republic of Ardanis</p>
                <p className="text-sm font-bold text-white">Digital E-Resident Passport</p>
              </div>
            </div>
            <StateSeal size={40} />
          </div>
          <div className="bg-midnight/60 rounded-xl p-4 border border-cyan-bright/10">
            <p className="text-xs text-white/40 mb-1">Passport ID</p>
            <p className="text-lg font-mono font-bold text-cyan-bright text-glow-cyan">ARD-PASS-2026-001</p>
            <div className="mt-3 grid grid-cols-2 gap-3 text-left">
              <div>
                <p className="text-xs text-white/40">Holder</p>
                <p className="text-sm text-white font-medium">E-Resident</p>
              </div>
              <div>
                <p className="text-xs text-white/40">Issued</p>
                <p className="text-sm text-white font-medium">2026-01-15</p>
              </div>
              <div>
                <p className="text-xs text-white/40">Jurisdiction</p>
                <p className="text-sm text-white font-medium">Pocket West-B</p>
              </div>
              <div>
                <p className="text-xs text-white/40">Status</p>
                <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400 border border-green-500/30 mt-1">
                  <i className="fa-solid fa-circle-check"></i> Verified
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-xs text-white/40">
            <i className="fa-solid fa-lock mr-1"></i> Cryptographically signed and verifiable through the Ardanis Public Key Infrastructure
          </p>
        </div>
      </div>

      {/* Credentials List */}
      <div className="glass-card rounded-3xl p-8 mb-8">
        <h2 className="text-xl font-bold font-display text-white mb-6 flex items-center gap-2">
          <i className="fa-solid fa-shield-halved text-gold"></i>
          Your Credentials
        </h2>

        <div className="space-y-4">
          {credentials.map((cred) => (
            <div key={cred.id} className="glass rounded-xl p-5">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="text-xs font-mono text-white/40 mb-1">{cred.id}</p>
                  <h3 className="font-bold text-white">{cred.type}</h3>
                  <p className="text-xs text-white/50 mt-1">
                    <i className="fa-regular fa-calendar mr-1"></i>
                    Issued: {new Date(cred.issued).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  cred.status === 'Active' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                  cred.status === 'Pending' ? 'bg-gold/20 text-gold border border-gold/30' :
                  'bg-red-500/20 text-red-400 border border-red-500/30'
                }`}>
                  {cred.status}
                </span>
              </div>
              <div className="pt-3 border-t border-white/5">
                <p className="text-xs text-white/40 mb-1">Cryptographic Token</p>
                <p className="text-xs font-mono text-cyan-bright break-all">{cred.token}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Token Verification */}
      <div className="glass-card rounded-3xl p-8">
        <h2 className="text-xl font-bold font-display text-white mb-6 flex items-center gap-2">
          <i className="fa-solid fa-check-double text-violet"></i>
          Verify Diplomatic Clearance Token
        </h2>

        <form onSubmit={handleVerify} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-white/70 mb-2">Enter Token</label>
            <input
              type="text"
              value={verificationToken}
              onChange={(e) => {
                setVerificationToken(e.target.value);
                setVerificationResult(null);
              }}
              placeholder="ARD-DIP-XXXXX-XXXXX"
              className="w-full px-4 py-3 rounded-xl input-glass font-mono"
            />
          </div>

          <button type="submit" className="btn-primary px-6 py-3 rounded-xl w-full">
            <i className="fa-solid fa-shield-halved mr-2"></i> Verify Token
          </button>
        </form>

        {verificationResult && (
          <div className={`mt-4 p-4 rounded-xl border ${
            verificationResult === 'success' 
              ? 'bg-green-500/10 border-green-500/30' 
              : 'bg-red-500/10 border-red-500/30'
          }`}>
            {verificationResult === 'success' ? (
              <div className="flex items-center gap-2 text-green-400">
                <i className="fa-solid fa-circle-check text-xl"></i>
                <div>
                  <p className="font-semibold">Token Verified Successfully</p>
                  <p className="text-sm text-white/60">This is a valid Ardanis diplomatic clearance token.</p>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-2 text-red-400">
                <i className="fa-solid fa-circle-xmark text-xl"></i>
                <div>
                  <p className="font-semibold">Verification Failed</p>
                  <p className="text-sm text-white/60">Invalid token format. Tokens should start with "ARD-".</p>
                </div>
              </div>
            )}
          </div>
        )}

        <div className="mt-6 p-4 bg-violet/10 border border-violet/20 rounded-xl">
          <p className="text-sm text-white/70">
            <i className="fa-solid fa-info-circle text-violet mr-2"></i>
            Diplomatic clearance tokens are cryptographically signed credentials that verify your status as an authorized representative of the Sovereign Republic of Ardanis for international diplomatic purposes.
          </p>
        </div>
      </div>
    </div>
  );
}
