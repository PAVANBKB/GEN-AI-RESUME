import React, { useRef } from 'react';
import { gsap, ScrollTrigger, useGSAP } from '../../lib/gsap';
import './AboutSection.scss';

const AboutSection = () => {
    const container = useRef();
    const imageRef = useRef();
    const textRef = useRef();

    useGSAP(() => {
        gsap.from(imageRef.current, {
            x: -50,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: container.current,
                start: 'top 70%',
            }
        });

        gsap.from(textRef.current, {
            x: 50,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: container.current,
                start: 'top 70%',
            }
        });
    }, { scope: container });

    return (
        <section className="about-section" ref={container}>
            <div className="about-section__container">
                <div className="about-section__image" ref={imageRef}>
                    <div className="image-placeholder">
                        <div className="blob"></div>
                    </div>
                </div>
                <div className="about-section__text" ref={textRef}>
                    <h2 className="section-title">Why Choose Us?</h2>
                    <p>We combine advanced Generative AI with industry-standard interview preparation techniques to give you an unfair advantage.</p>
                    <ul className="about-list">
                        <li>Tailored strategies for top tech companies</li>
                        <li>Real-time feedback on your responses</li>
                        <li>Comprehensive resource library</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
