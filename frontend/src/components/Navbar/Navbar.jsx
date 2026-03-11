import React from 'react';
import { useNavigate } from 'react-router';
import './Navbar.scss';

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <nav className="navbar">
            <div className="container navbar__container">
                <div className="navbar__logo" onClick={() => navigate('/')}>
                    <div className="logo-icon">
                        <div className="circle"></div>
                    </div>
                    <span>GEN-AI <span className="text-dim">RESUME</span></span>
                </div>
                
                <ul className="navbar__links">
                    <li><a href="#features">Features</a></li>
                    <li><a href="#workflow">Workflow</a></li>
                    <li><a href="#experience">Experience</a></li>
                </ul>

                <div className="navbar__actions">
                    <button className="navbar__login" onClick={() => navigate('/login')}>Log in</button>
                    <button className="btn btn--white" onClick={() => navigate('/register')}>Get Started</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
