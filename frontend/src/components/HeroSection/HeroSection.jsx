import React, { useRef } from 'react';
import { useNavigate } from 'react-router';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import './HeroSection.scss';

const HeroSection = () => {
    const navigate = useNavigate();
    const container = useRef();
    const titleRef = useRef();
    const subtitleRef = useRef();
    const buttonRef = useRef();

    useGSAP(() => {
        const tl = gsap.timeline();
        
        tl.from('.hero-section__title span', {
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            ease: 'power4.out',
        })
        .from('.hero-section__subtitle', {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
        }, '-=0.5')
        .from('.hero-section__cta', {
            scale: 0.8,
            opacity: 0,
            duration: 0.6,
            ease: 'back.out(1.7)',
        }, '-=0.3');
    }, { scope: container });

    return (
        <section className="hero-section" ref={container}>
            <div className="hero-section__content">
                <h1 className="hero-section__title" ref={titleRef}>
                    <span>Elevate</span> <span>Your</span> <span>Interview</span> <span>Game</span>
                </h1>
                <p className="hero-section__subtitle" ref={subtitleRef}>
                    Master the art of the interview with AI-driven insights and personalized strategies tailored for your dream role.
                </p>
                <div className="hero-section__cta" ref={buttonRef}>
                    <button className="btn btn--primary" onClick={() => navigate('/generator')}>Get Started Now</button>
                    <button className="btn btn--secondary" onClick={() => navigate('/generator')}>Learn More</button>
                </div>
            </div>
            <div className="hero-section__gradient-bg"></div>
        </section>
    );
};

export default HeroSection;
