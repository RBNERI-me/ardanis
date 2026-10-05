import { useState } from 'react';
import { jobs, type Job } from '../data/jobs';

export default function Jobs() {
  const [selectedCouncil, setSelectedCouncil] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [showApplication, setShowApplication] = useState(false);
  const [applicationData, setApplicationData] = useState({
    name: '',
    email: '',
    residencyId: '',
    coverLetter: ''
  });
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);

  const councils = ['all', ...Array.from(new Set(jobs.map(j => j.council)))];
  const types = ['all', 'Full-Time', 'Part-Time', 'Contract', 'Volunteer'];

  const filteredJobs = jobs.filter(job => {
    const councilMatch = selectedCouncil === 'all' || job.council === selectedCouncil;
    const typeMatch = selectedType === 'all' || job.type === selectedType;
    return councilMatch && typeMatch;
  });

  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setApplicationSubmitted(true);
    setTimeout(() => {
      setShowApplication(false);
      setApplicationSubmitted(false);
      setApplicationData({ name: '', email: '', residencyId: '', coverLetter: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-violet/10 to-cyan-bright/5"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center">
            <div className="inline-block mb-6">
              <div className="glass-card px-6 py-2 rounded-full">
                <span className="text-cyan-bright font-medium">
                  <i className="fa-solid fa-briefcase mr-2"></i>
                  Careers in Governance
                </span>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 gradient-text">
              Build the Future with Ardanis
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Join our team of dedicated professionals working to build a transparent, 
              sustainable, and innovative micronation. Explore opportunities across governance, 
              technology, environment, and diplomacy.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-bright mb-2">{jobs.length}</div>
              <div className="text-white/60">Open Positions</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gold mb-2">7</div>
              <div className="text-white/60">Councils Hiring</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-violet mb-2">24</div>
              <div className="text-white/60">Countries Welcome</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-light mb-2">100%</div>
              <div className="text-white/60">Remote Eligible</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="glass-card rounded-2xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white/80 mb-2 font-medium">
                  <i className="fa-solid fa-filter mr-2"></i>
                  Filter by Council
                </label>
                <select
                  value={selectedCouncil}
                  onChange={(e) => setSelectedCouncil(e.target.value)}
                  className="w-full bg-midnight/50 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-cyan-bright focus:outline-none transition-colors"
                >
                  {councils.map(council => (
                    <option key={council} value={council}>
                      {council === 'all' ? 'All Councils' : council}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-white/80 mb-2 font-medium">
                  <i className="fa-solid fa-clock mr-2"></i>
                  Filter by Type
                </label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full bg-midnight/50 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-cyan-bright focus:outline-none transition-colors"
                >
                  {types.map(type => (
                    <option key={type} value={type}>
                      {type === 'all' ? 'All Types' : type}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Jobs List */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-display font-bold text-white mb-2">
              Available Positions
            </h2>
            <p className="text-white/60">
              Showing {filteredJobs.length} of {jobs.length} positions
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {filteredJobs.map(job => (
              <div
                key={job.id}
                className="glass-card rounded-2xl p-6 hover:border-cyan-bright/50 transition-all cursor-pointer"
                onClick={() => setSelectedJob(job)}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      {job.urgent && (
                        <span className="px-3 py-1 bg-red-500/20 border border-red-500/50 rounded-full text-red-400 text-xs font-medium">
                          <i className="fa-solid fa-fire mr-1"></i>
                          Urgent
                        </span>
                      )}
                      <span className="px-3 py-1 bg-cyan-bright/20 border border-cyan-bright/50 rounded-full text-cyan-bright text-xs font-medium">
                        {job.type}
                      </span>
                    </div>
                    <h3 className="text-2xl font-display font-bold text-white mb-2">
                      {job.title}
                    </h3>
                    <p className="text-white/80 mb-4">{job.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-white/60">
                      <span>
                        <i className="fa-solid fa-building mr-2 text-cyan-bright"></i>
                        {job.council}
                      </span>
                      <span>
                        <i className="fa-solid fa-location-dot mr-2 text-gold"></i>
                        {job.location}
                      </span>
                      <span>
                        <i className="fa-solid fa-calendar mr-2 text-violet"></i>
                        Posted: {new Date(job.posted).toLocaleDateString()}
                      </span>
                      <span>
                        <i className="fa-solid fa-hourglass-end mr-2 text-cyan-light"></i>
                        Deadline: {new Date(job.deadline).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    {job.salary && (
                      <div className="text-right">
                        <div className="text-xs text-white/60 mb-1">Salary Range</div>
                        <div className="text-gold font-bold">{job.salary}</div>
                      </div>
                    )}
                    <button className="mt-4 px-6 py-2 bg-gradient-to-r from-cyan-bright to-violet rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-bright/50 transition-all">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-16">
              <i className="fa-solid fa-briefcase text-6xl text-white/20 mb-4"></i>
              <p className="text-white/60 text-lg">No positions match your filters</p>
            </div>
          )}
        </div>
      </section>

      {/* Job Detail Modal */}
      {selectedJob && !showApplication && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
          <div className="glass-card rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-midnight/90 backdrop-blur-sm p-6 border-b border-white/10 flex justify-between items-center">
              <h2 className="text-3xl font-display font-bold text-white">
                {selectedJob.title}
              </h2>
              <button
                onClick={() => setSelectedJob(null)}
                className="text-white/60 hover:text-white text-2xl"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="glass rounded-lg p-4">
                  <div className="text-xs text-white/60 mb-1">Council</div>
                  <div className="text-cyan-bright font-medium">{selectedJob.council}</div>
                </div>
                <div className="glass rounded-lg p-4">
                  <div className="text-xs text-white/60 mb-1">Type</div>
                  <div className="text-gold font-medium">{selectedJob.type}</div>
                </div>
                <div className="glass rounded-lg p-4">
                  <div className="text-xs text-white/60 mb-1">Location</div>
                  <div className="text-violet font-medium text-sm">{selectedJob.location}</div>
                </div>
                {selectedJob.salary && (
                  <div className="glass rounded-lg p-4">
                    <div className="text-xs text-white/60 mb-1">Salary</div>
                    <div className="text-cyan-light font-medium text-sm">{selectedJob.salary}</div>
                  </div>
                )}
              </div>

              <div>
                <h3 className="text-xl font-display font-bold text-white mb-3">
                  <i className="fa-solid fa-info-circle text-cyan-bright mr-2"></i>
                  Position Overview
                </h3>
                <p className="text-white/80 leading-relaxed">{selectedJob.description}</p>
              </div>

              <div>
                <h3 className="text-xl font-display font-bold text-white mb-3">
                  <i className="fa-solid fa-list-check text-gold mr-2"></i>
                  Requirements
                </h3>
                <ul className="space-y-2">
                  {selectedJob.requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/80">
                      <i className="fa-solid fa-check text-cyan-bright mt-1"></i>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-display font-bold text-white mb-3">
                  <i className="fa-solid fa-tasks text-violet mr-2"></i>
                  Responsibilities
                </h3>
                <ul className="space-y-2">
                  {selectedJob.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/80">
                      <i className="fa-solid fa-circle-dot text-gold mt-1 text-xs"></i>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass rounded-lg p-4 border border-gold/30">
                <div className="flex items-center gap-3">
                  <i className="fa-solid fa-calendar-check text-gold text-2xl"></i>
                  <div>
                    <div className="text-xs text-white/60">Application Deadline</div>
                    <div className="text-gold font-bold">
                      {new Date(selectedJob.deadline).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  onClick={() => setShowApplication(true)}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-bright to-violet rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-bright/50 transition-all"
                >
                  <i className="fa-solid fa-paper-plane mr-2"></i>
                  Apply Now
                </button>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="px-6 py-3 border border-white/20 rounded-lg font-medium hover:bg-white/5 transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Application Modal */}
      {showApplication && selectedJob && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
          <div className="glass-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-midnight/90 backdrop-blur-sm p-6 border-b border-white/10 flex justify-between items-center">
              <h2 className="text-2xl font-display font-bold text-white">
                Apply for {selectedJob.title}
              </h2>
              <button
                onClick={() => {
                  setShowApplication(false);
                  setApplicationSubmitted(false);
                }}
                className="text-white/60 hover:text-white text-2xl"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div className="p-6">
              {!applicationSubmitted ? (
                <form onSubmit={handleApplicationSubmit} className="space-y-6">
                  <div>
                    <label className="block text-white/80 mb-2 font-medium">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={applicationData.name}
                      onChange={(e) => setApplicationData({...applicationData, name: e.target.value})}
                      className="w-full bg-midnight/50 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-cyan-bright focus:outline-none transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 mb-2 font-medium">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={applicationData.email}
                      onChange={(e) => setApplicationData({...applicationData, email: e.target.value})}
                      className="w-full bg-midnight/50 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-cyan-bright focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 mb-2 font-medium">
                      E-Residency ID (if applicable)
                    </label>
                    <input
                      type="text"
                      value={applicationData.residencyId}
                      onChange={(e) => setApplicationData({...applicationData, residencyId: e.target.value})}
                      className="w-full bg-midnight/50 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-cyan-bright focus:outline-none transition-colors"
                      placeholder="ARD-E-XXXXX-XXXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 mb-2 font-medium">
                      Cover Letter *
                    </label>
                    <textarea
                      required
                      rows={6}
                      value={applicationData.coverLetter}
                      onChange={(e) => setApplicationData({...applicationData, coverLetter: e.target.value})}
                      className="w-full bg-midnight/50 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-cyan-bright focus:outline-none transition-colors resize-none"
                      placeholder="Tell us why you're interested in this position and how your skills align with the requirements..."
                    />
                  </div>
                  <div className="flex gap-4">
                    <button
                      type="submit"
                      className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-bright to-violet rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-bright/50 transition-all"
                    >
                      <i className="fa-solid fa-paper-plane mr-2"></i>
                      Submit Application
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowApplication(false)}
                      className="px-6 py-3 border border-white/20 rounded-lg font-medium hover:bg-white/5 transition-all"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              ) : (
                <div className="text-center py-12">
                  <div className="inline-block mb-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-bright to-violet flex items-center justify-center">
                      <i className="fa-solid fa-check text-4xl text-white"></i>
                    </div>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mb-4">
                    Application Submitted!
                  </h3>
                  <p className="text-white/80 mb-6">
                    Thank you for your interest in joining the Sovereign Republic of Ardanis. 
                    Your application has been received and will be reviewed by the {selectedJob.council}.
                  </p>
                  <p className="text-white/60 text-sm">
                    You will receive a confirmation email at {applicationData.email}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
