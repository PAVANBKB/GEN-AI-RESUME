import React, { useRef } from 'react';
import { useNavigate } from 'react-router';
import { gsap, useGSAP } from '../../lib/gsap';
import './CTASection.scss';

const CTASection = () => {
    const navigate = useNavigate();
    const container = useRef();

    useGSAP(() => {
        gsap.fromTo('.cta-card', 
            { y: 40, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: container.current,
                    start: 'top 85%',
                }
            }
        );
    }, { scope: container });

    return (
        <section className="cta-section" ref={container}>
            <div className="container">
                <div className="cta-card">
                    <div className="cta-card__glow"></div>
                    <div className="cta-card__content">
                        <h2 className="cta-card__title">Ready to get hired?</h2>
                        <p className="cta-card__subtitle">
                            Join 10,000+ engineers who have used Gen-AI Resume to secure roles at FAANG and top-tier startups.
                        </p>
                        <button className="btn btn--white" onClick={() => navigate('/generator')}>
                            Build Your Future Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
