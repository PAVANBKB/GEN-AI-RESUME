import React from 'react';
import { useNavigate } from 'react-router';
import './Navbar.scss';

const Navbar = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <nav className="navbar">
            <div className="container navbar__container">
                <div className="navbar__logo" onClick={() => navigate('/')}>
                    <div className="logo-icon">
                        <div className="circle"></div>
                    </div>
                    <span>GEN-AI <span className="text-dim">RESUME</span></span>
                </div>
                
                <ul className={`navbar__links ${isMenuOpen ? 'navbar__links--open' : ''}`}>
                    <li><a href="#features" onClick={() => setIsMenuOpen(false)}>Features</a></li>
                    <li><a href="#workflow" onClick={() => setIsMenuOpen(false)}>Workflow</a></li>
                    <li><a href="#experience" onClick={() => setIsMenuOpen(false)}>Experience</a></li>
                    <li className="mobile-only">
                        <button className="navbar__login" onClick={() => { navigate('/login'); setIsMenuOpen(false); }}>Log in</button>
                    </li>
                </ul>

                <div className="navbar__actions">
                    <button className="navbar__login hide-mobile" onClick={() => navigate('/login')}>Log in</button>
                    <button className="btn btn--white hide-mobile" onClick={() => navigate('/register')}>Get Started</button>
                    
                    <button className="navbar__toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <div className={`hamburger ${isMenuOpen ? 'hamburger--open' : ''}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
