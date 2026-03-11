import React, { useRef } from 'react';
import { gsap, ScrollTrigger, useGSAP } from '../../lib/gsap';
import './FeaturesSection.scss';

const features = [
    {
        title: 'AI Strategy',
        description: 'Personalized game plans based on real-time market data and your specific skill set.',
        icon: '✦',
        color: '#3b82f6'
    },
    {
        title: 'Resume Analysis',
        description: 'Instantly identify gaps and optimization points to bypass Applicant Tracking Systems (ATS).',
        icon: '📄',
        color: '#a855f7'
    },
    {
        title: 'Mock Questions',
        description: 'Dynamic interview simulations that adapt to your answers and improve your delivery.',
        icon: '💬',
        color: '#ec4899'
    },
    {
        title: 'Career Roadmap',
        description: 'Step-by-step guidance on what to learn next to increase your salary potential.',
        icon: '📂',
        color: '#10b981'
    },
    {
        title: 'Military Grade Security',
        description: 'Your data is encrypted and private. We never sell your personal information to recruiters.',
        icon: '🔒',
        color: '#f59e0b'
    },
    {
        title: 'Smart PDF Export',
        description: 'One-click export of optimized resumes and preparation notes in stunning layouts.',
        icon: '⚙️',
        color: '#06b6d4'
    }
];

const FeaturesSection = () => {
    const container = useRef();

    useGSAP(() => {
        gsap.fromTo('.feature-card', 
            { y: 40, opacity: 0 },
            { 
                y: 0, 
                opacity: 1, 
                duration: 0.8, 
                stagger: 0.1, 
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: container.current,
                    start: 'top 80%',
                }
            }
        );
    }, { scope: container });

    return (
        <section className="features-section" id="features" ref={container}>
            <div className="container">
                <div className="features-section__header">
                    <h2 className="section-title">Engineered for Success</h2>
                    <p className="section-subtitle">Everything you need to land your dream role in tech.</p>
                </div>
                <div className="features-section__grid">
                    {features.map((feature, index) => (
                        <div className="feature-card" key={index}>
                            <div className="feature-card__icon" style={{ color: feature.color, background: `${feature.color}15` }}>
                                {feature.icon}
                            </div>
                            <h3 className="feature-card__title">{feature.title}</h3>
                            <p className="feature-card__description">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
