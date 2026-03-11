import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <footer className="landing-footer">
            <div className="landing-footer__content">
                <div className="landing-footer__logo">GEN-AI RESUME</div>
                <div className="landing-footer__links">
                    <a href="#">Privacy</a>
                    <a href="#">Terms</a>
                    <a href="#">Contact</a>
                </div>
                <div className="landing-footer__copy">
                    &copy; {new Date().getFullYear()} GEN-AI RESUME. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
