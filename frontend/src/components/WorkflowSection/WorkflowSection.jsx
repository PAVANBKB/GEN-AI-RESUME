import React, { useRef } from 'react';
import { gsap, ScrollTrigger, useGSAP } from '../../lib/gsap';
import './WorkflowSection.scss';

const steps = [
    {
        number: '1',
        title: 'Upload Resume',
        description: 'Drop your PDF or LinkedIn profile. Our AI parses every skill and achievement.',
        color: '#3b82f6'
    },
    {
        number: '2',
        title: 'AI Deep Scan',
        description: 'We compare your profile against thousands of successful tech hiring patterns.',
        color: '#a855f7'
    },
    {
        number: '3',
        title: 'Dominate Interview',
        description: 'Receive your custom prep guide and go into your interview with total confidence.',
        color: '#ec4899'
    }
];

const WorkflowSection = () => {
    const container = useRef();

    useGSAP(() => {
        gsap.fromTo('.workflow-step', 
            { y: 40, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: container.current,
                    start: 'top 80%',
                }
            }
        );
    }, { scope: container });

    return (
        <section className="workflow-section" id="workflow" ref={container}>
            <div className="container">
                <div className="workflow-section__header">
                    <h2 className="section-title">The Workflow</h2>
                    <p className="section-subtitle">From upload to offer in three seamless steps.</p>
                </div>
                <div className="workflow-section__grid">
                    {steps.map((step, index) => (
                        <div className="workflow-step" key={index}>
                            <div className="workflow-step__number-wrapper">
                                <div className="workflow-step__number" style={{ background: step.color }}>
                                    {step.number}
                                </div>
                                {index < steps.length - 1 && <div className="workflow-step__connector"></div>}
                            </div>
                            <h3 className="workflow-step__title">{step.title}</h3>
                            <p className="workflow-step__description">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WorkflowSection;
