import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import HeroSection from '../../components/HeroSection/HeroSection';
import FeaturesSection from '../../components/FeaturesSection/FeaturesSection';
import WorkflowSection from '../../components/WorkflowSection/WorkflowSection';
import AIShowcaseSection from '../../components/AIShowcaseSection/AIShowcaseSection';
import CTASection from '../../components/CTASection/CTASection';
import Footer from '../../components/Footer/Footer';
import './LandingPage.scss';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <Navbar />
            <main>
                <HeroSection />
                <FeaturesSection />
                <WorkflowSection />
                <AIShowcaseSection />
                <CTASection />
            </main>
            <Footer />
        </div>
    );
};

export default LandingPage;
