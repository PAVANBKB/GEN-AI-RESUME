import React, { useRef } from 'react';
import { gsap, ScrollTrigger, useGSAP } from '../../lib/gsap';
import './FeaturesSection.scss';

const features = [
    {
        title: 'AI Insights',
        description: 'Leverage cutting-edge AI to understand what interviewers are really looking for.',
        icon: '🧠'
    },
    {
        title: 'Mock Interviews',
        description: 'Practice with our AI bot that simulates real-world stress and complex questions.',
        icon: '💬'
    },
    {
        title: 'Success Reports',
        description: 'Get detailed feedback and actionable steps to improve your performance.',
        icon: '📈'
    }
];

const FeaturesSection = () => {
    const container = useRef();

    useGSAP(() => {
        gsap.from('.feature-card', {
            y: 60,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: container.current,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });
    }, { scope: container });

    return (
        <section className="features-section" ref={container}>
            <div className="features-section__header">
                <h2 className="section-title">Core Features</h2>
                <p className="section-subtitle">Everything you need to land your next big role.</p>
            </div>
            <div className="features-section__grid">
                {features.map((feature, index) => (
                    <div className="feature-card" key={index}>
                        <div className="feature-card__icon">{feature.icon}</div>
                        <h3 className="feature-card__title">{feature.title}</h3>
                        <p className="feature-card__description">{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturesSection;
