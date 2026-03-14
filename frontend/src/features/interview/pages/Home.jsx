import React, { useEffect, useRef, useState } from 'react'
import "../style/home.scss"
import { useInterview } from '../hooks/useInterview'
import { useNavigate } from 'react-router'
import Loader from '../../../components/Loader/Loader'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Home = () => {
    const container = useRef()
    const [selfDescription, setselfDescription] = useState("")
    const [jobDescription, setjobDescription] = useState("")
    const resumeFileRef = useRef()
    const { generateReport, loading, report, reports, getUserAllReports } = useInterview()
    const navigate = useNavigate()
    async function handelClick() {
        const data = await generateReport({ jobdescribe: jobDescription, selfdescribe: selfDescription, resumeFile: resumeFileRef.current.files[0] })

        navigate(`/interview/${data._id}`)
    }
    useEffect(() => {
    async function call() {
      await getUserAllReports()
    }
    call()
  }, [])

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    
    tl.from(".page-header h1", { y: 30, opacity: 0, duration: 0.8 })
      .from(".page-header p", { y: 20, opacity: 0, duration: 0.6 }, "-=0.4")
      .from(".form-card", { y: 40, opacity: 0, duration: 0.8, stagger: 0.2 }, "-=0.4")
      .from(".action-bar", { scale: 0.9, opacity: 0, duration: 0.8 }, "-=0.4")
      .from(".recent-reports", { y: 30, opacity: 0, duration: 0.8 }, "-=0.6");
  }, { scope: container });

  const formatDate = (report) => {
    try {
      // Priority 1: Use createdAt (managed by mongoose timestamps)
      if (report.createdAt) {
        return new Date(report.createdAt).toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric'
        });
      }
      // Priority 2: Extract from MongoDB ObjectId (the top 5% dev trick)
      if (report._id && report._id.length === 24) {
        const timestamp = parseInt(report._id.substring(0, 8), 16) * 1000;
        return new Date(timestamp).toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric'
        });
      }
      return 'Recent';
    } catch (e) {
      return 'Recent';
    }
  };

    return (
        <main className='home-page' ref={container}>
            <div className="bg-grid"></div>
            <div className="bg-glow"></div>
            
            {loading && <Loader message="Analyzing Profile..." />}

            <div className="home-container">
                {/* Page Header */}
                <header className='page-header'>
                    <h1>Create Your Custom <span className='highlight'>Interview Plan</span></h1>
                    <p>Let our AI analyze the job requirements and your unique profile to build a winning strategy tailored specifically for your next big move.</p>
                </header>

                {/* Main Content Sections */}
                <div className='dashboard-grid'>
                    
                    {/* Left Card - Job Description */}
                    <div className='form-card'>
                        <div className='form-card__header'>
                            <div className='form-card__title-grp'>
                                <span className='form-card__icon icon-box--job'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
                                </span>
                                <h2>Target Job Description</h2>
                            </div>
                            <span className='badge badge--required'>Required</span>
                        </div>
                        <div className="form-card__body">
                            <textarea
                                onChange={(e) => setjobDescription(e.target.value)}
                                className='panel__textarea'
                                placeholder={`Paste the full job description here...\ne.g. 'Senior Frontend Engineer at Google requires proficiency in React, TypeScript, and large-scale system design...'`}
                                maxLength={5000}
                                value={jobDescription}
                            />
                            <div className='char-counter'>{jobDescription.length} / 5000 chars</div>
                        </div>
                    </div>

                    {/* Right Card - Profile */}
                    <div className='form-card'>
                        <div className='form-card__header'>
                            <div className='form-card__title-grp'>
                                <span className='form-card__icon icon-box--profile'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                                </span>
                                <h2>Your Profile</h2>
                            </div>
                            <span className='badge badge--best'>Best Results</span>
                        </div>

                        <div className="form-card__body">
                            {/* Upload Resume */}
                            <div className='upload-section'>
                                <label className='dropzone' htmlFor='resume'>
                                    <span className='dropzone__icon'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                            <polyline points="17 8 12 3 7 8" />
                                            <line x1="12" y1="3" x2="12" y2="15" />
                                        </svg>
                                    </span>
                                    <p className='dropzone__title'>Click to upload or drag & drop</p>
                                    <p className='dropzone__subtitle'>PDF or DOCX (Max 5MB)</p>
                                    <input
                                        ref={resumeFileRef}
                                        hidden type='file' id='resume' name='resume' accept='.pdf,.docx' />
                                </label>
                            </div>

                            <div className='or-divider'><span>OR</span></div>

                            {/* Self-Description */}
                            <div className='self-description'>
                                <label className='section-label' htmlFor='selfDescription'>Quick Self-Description</label>
                                <textarea
                                    onChange={(e) => setselfDescription(e.target.value)}
                                    id='selfDescription'
                                    name='selfDescription'
                                    className='panel__textarea panel__textarea--short'
                                    placeholder="Briefly describe your experience, key skills, and years of experience if you don't have a resume handy..."
                                    value={selfDescription}
                                />
                            </div>

                            <div className='info-box'>
                                <span className='info-box__icon'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                                </span>
                                <p>Either a <strong>Resume</strong> or a <strong>Self Description</strong> is required to generate a personalized plan.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sticky Action Footer */}
                <div className='action-bar'>
                    <div className='action-bar__info'>
                        <span className='dot'></span>
                        AI-Powered Strategy Generation &bull; Approx 30s
                    </div>
                    <button onClick={handelClick} className='generate-btn-premium'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                        Generate My Interview Strategy
                    </button>
                </div>

                {/* Recent Report List */}
                {reports.length > 0 && (
                    <div className='recent-reports'>
                        <div className='recent-reports__header'>
                            <h2>My Recent Interview Plans</h2>
                            <span className='recent-reports__count'>{reports.length} {reports.length === 1 ? 'plan' : 'plans'} saved</span>
                        </div>
                        <div className='reports-list'>
                            {reports.map((report, index) => (
                                <div key={index} className='report-card' onClick={() => navigate(`/interview/${report._id}`)}>
                                    <div className='report-card__icon'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                            <polyline points="14 2 14 8 20 8"></polyline>
                                            <line x1="16" y1="13" x2="8" y2="13"></line>
                                            <line x1="16" y1="17" x2="8" y2="17"></line>
                                        </svg>
                                    </div>
                                    <div className='report-card__content'>
                                        <h3>{report.title || report.jobTitle || 'Untitled Position'}</h3>
                                        <div className='report-card__meta'>
                                            <span className='report-card__date'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                                    <line x1="16" y1="2" x2="16" y2="6"></line>
                                                    <line x1="8" y1="2" x2="8" y2="6"></line>
                                                    <line x1="3" y1="10" x2="21" y2="10"></line>
                                                </svg>
                                                {formatDate(report)}
                                            </span>
                                            {report.matchScore && (
                                                <span className={`report-card__score ${report.matchScore >= 80 ? 'score--high' : report.matchScore >= 60 ? 'score--mid' : 'score--low'}`}>
                                                    {report.matchScore}% Match
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <div className='report-card__arrow'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="9 18 15 12 9 6"></polyline>
                                        </svg>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Page Footer */}
                <footer className='page-footer'>
                   <div className="footer-links">
                        <a href='#'>Privacy Policy</a>
                        <a href='#'>Terms of Service</a>
                        <a href='#'>Help Center</a>
                   </div>
                   <p className="copyright">&copy; {new Date().getFullYear()} AI Interview Planner. All rights reserved.</p>
                </footer>
            </div>
        </main>
    )
}

export default Home