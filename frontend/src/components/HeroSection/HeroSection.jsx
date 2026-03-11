import React, { useRef } from 'react';
import { useNavigate } from 'react-router';
import { gsap } from '../../lib/gsap';
import { useGSAP } from '@gsap/react';
import './HeroSection.scss';

const HeroSection = () => {
    const navigate = useNavigate();
    const container = useRef();

    useGSAP(() => {
        const tl = gsap.timeline();
        
        tl.fromTo('.hero-section__badge', 
            { y: -20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
        )
        .fromTo('.hero-section__title', 
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: 'power4.out' }, 
            '-=0.4'
        )
        .fromTo('.hero-section__subtitle', 
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, 
            '-=0.6'
        )
        .fromTo('.hero-section__cta', 
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, ease: 'back.out(1.7)' }, 
            '-=0.4'
        );
    }, { scope: container });

    return (
        <section className="hero-section" ref={container}>
            <div className="hero-section__top-glow"></div>
            <div className="container">
                <div className="hero-section__content">
                    <span className="hero-section__badge">
                        <span className="star">✦</span> NEXT GEN CAREER PLATFORM
                    </span>
                    <h1 className="hero-section__title">
                        Master your <span className="text-gradient">interviews</span> with precision.
                    </h1>
                    <p className="hero-section__subtitle">
                        The all-in-one AI platform that transforms your resume into a powerful career roadmap. 
                        Get tailored mock questions and strategic insights.
                    </p>
                    <div className="hero-section__cta">
                        <button className="btn btn--primary" onClick={() => navigate('/generator')}>
                            Start Free Analysis
                        </button>
                        <button className="btn btn--secondary" onClick={() => navigate('/generator')}>
                            View Live Demo
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
