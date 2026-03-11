import React, { useRef } from 'react';
import { gsap, ScrollTrigger, useGSAP } from '../../lib/gsap';
import './AIShowcaseSection.scss';

const AIShowcaseSection = () => {
    const container = useRef();
    const dashboardRef = useRef();

    useGSAP(() => {
        gsap.fromTo('.ai-showcase__text-content', 
            { x: -50, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: container.current,
                    start: 'top 70%',
                }
            }
        );

        gsap.fromTo(dashboardRef.current, 
            { x: 50, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: container.current,
                    start: 'top 70%',
                }
            }
        );
    }, { scope: container });

    return (
        <section className="ai-showcase" ref={container}>
            <div className="container ai-showcase__container">
                <div className="ai-showcase__text-content">
                    <h2 className="ai-showcase__title">
                        Insightful <span className="text-primary">Analytics</span> at your fingertips.
                    </h2>
                    <ul className="ai-showcase__list">
                        <li>
                            <div className="check-icon">✓</div>
                            <p>Detailed scoring on 15+ key performance indicators relevant to modern hiring.</p>
                        </li>
                        <li>
                            <div className="check-icon">✓</div>
                            <p>Visual heatmaps showing where your resume captures or loses recruiter attention.</p>
                        </li>
                        <li>
                            <div className="check-icon">✓</div>
                            <p>Personalized feedback loops that learn from your interview performance history.</p>
                        </li>
                    </ul>
                </div>

                <div className="ai-showcase__dashboard" ref={dashboardRef}>
                    <div className="dashboard-card">
                        <div className="dashboard-card__header">
                            <div className="circles">
                                <span className="red"></span>
                                <span className="yellow"></span>
                                <span className="green"></span>
                            </div>
                        </div>
                        <div className="dashboard-content">
                            <div className="score-header">
                                <span>AI Resume Score</span>
                                <span className="score-value">88/100</span>
                            </div>
                            <div className="progress-bar">
                                <div className="progress-fill" style={{ width: '88%' }}></div>
                            </div>
                            
                            <div className="stats-grid">
                                <div className="stat-card">
                                    <span className="stat-label">IMPACT SCORE</span>
                                    <span className="stat-value">High</span>
                                </div>
                                <div className="stat-card">
                                    <span className="stat-label">READABILITY</span>
                                    <span className="stat-value">94%</span>
                                </div>
                            </div>

                            <div className="suggestion-box">
                                <span className="suggestion-label">AI SUGGESTION</span>
                                <p>"Strengthen your 'Project' section by quantifying the 25% increase in lead speed you achieved..."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AIShowcaseSection;
