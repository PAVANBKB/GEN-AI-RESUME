import React from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import FeaturesSection from '../../components/FeaturesSection/FeaturesSection';
import AboutSection from '../../components/AboutSection/AboutSection';
import CTASection from '../../components/CTASection/CTASection';
import Footer from '../../components/Footer/Footer';
import './LandingPage.scss';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <HeroSection />
            <FeaturesSection />
            <AboutSection />
            <CTASection />
            <Footer />
        </div>
    );
};

export default LandingPage;
