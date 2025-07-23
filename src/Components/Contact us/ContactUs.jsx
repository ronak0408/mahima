

import React from 'react';
import './ConnectWithUs.css';
// For social media icons, you can use a library like react-icons.
// Example: import { FaInstagram, FaTwitter, FaFacebookF } from 'react-icons/fa';
import templeBackground from '/src/assets/images/templebg.jpg';

const ConnectWithUs = () => {
    return (
        // This new main container will hold the navbar, content, and footer
        <div className="app-container">
            {/* ==================== NAVBAR ==================== */}
            <nav className="navbar">
                <div className="navbar-brand">Inner Sanctum</div>
                <div className="navbar-links">
                    <a href="#">Home</a>
                    <a href="#">Wisdom</a>
                    <a href="#">Meditations</a>
                </div>
            </nav>

            {/* ==================== MAIN CONTENT ==================== */}
            <div
                className="spiritual-connect-page"
                style={{ backgroundImage: `url(${templeBackground})` }}
            >
                <div className="smoke-container">
                    {/* Smoke spans */}
                    <span></span><span></span><span></span><span></span><span></span>
                    <span></span><span></span><span></span><span></span><span></span>
                </div>
                <div className="overlay"></div>
                <div className="form-container">
                    <h2 className="form-title">Connect With Us</h2>
                    <p className="form-subtitle">
                        Share your journey, ask a question, or simply send your light. We are honored to receive it.
                    </p>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name" className="form-label">Your Name</label>
                            <input type="text" id="name" placeholder="Let us know your earthly name" className="form-input" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" className="form-label">Your Sacred Email</label>
                            <input type="email" id="email" placeholder="your.path@example.com" className="form-input" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message" className="form-label">Share Your Energy</label>
                            <textarea id="message" rows="5" placeholder="Pour your thoughts and inquiries here..." className="form-textarea" />
                        </div>
                        <div className="submit-button-wrapper">
                            <button type="submit" className="submit-button">Send with Love</button>
                        </div>
                    </form>
                </div>
            </div>

            {/* ==================== FOOTER ==================== */}
            <footer className="footer">
                <div className="footer-content">
                    <p>Connect with us on our journey</p>
                    <div className="social-links">
                        <a href="#" aria-label="Instagram"><i className="icon-placeholder">IG</i></a>
                        <a href="#" aria-label="Twitter"><i className="icon-placeholder">TW</i></a>
                        <a href="#" aria-label="Facebook"><i className="icon-placeholder">FB</i></a>
                    </div>
                </div>
                <div className="footer-copyright">
                    &copy; 2025 Inner Sanctum. All Rights Reserved.
                </div>
            </footer>
        </div>
    );
};

export default ConnectWithUs;