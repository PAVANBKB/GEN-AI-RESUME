import React, { useRef } from 'react';
import { useNavigate } from 'react-router';
import { gsap, useGSAP } from '../../lib/gsap';
import './CTASection.scss';

const CTASection = () => {
    const navigate = useNavigate();
    const container = useRef();
    const buttonRef = useRef();

    useGSAP(() => {
        gsap.from(container.current, {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: container.current,
                start: 'top 85%',
            }
        });
    }, { scope: container });

    const handleMouseMove = (e) => {
        const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
        const x = (e.clientX - left - width / 2) * 0.3;
        const y = (e.clientY - top - height / 2) * 0.3;
        
        gsap.to(buttonRef.current, {
            x,
            y,
            duration: 0.3,
            ease: 'power2.out'
        });
    };

    const handleMouseLeave = () => {
        gsap.to(buttonRef.current, {
            x: 0,
            y: 0,
            duration: 0.6,
            ease: 'elastic.out(1, 0.3)'
        });
    };

    return (
        <section className="cta-section" ref={container}>
            <div className="cta-section__content">
                <h2 className="cta-title">Ready to land your dream job?</h2>
                <p className="cta-subtitle">Join thousands of professionals who improved their interview success rate by 80%.</p>
                <div 
                    className="magnetic-wrapper"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                >
                    <button className="cta-button" ref={buttonRef} onClick={() => navigate('/generator')}>
                        Start Your Journey
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
