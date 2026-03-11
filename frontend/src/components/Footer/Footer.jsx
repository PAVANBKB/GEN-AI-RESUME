import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer__container">
                <div className="footer__left">
                    <span className="logo-dot"></span>
                    GEN-AI RESUME © {new Date().getFullYear()}
                </div>
                
                <div className="footer__center">
                    <a href="#">GitHub</a>
                    <a href="#">Twitter</a>
                    <a href="#">LinkedIn</a>
                    <a href="#">Terms</a>
                </div>

                <div className="footer__right">
                    Design inspired by the future.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
