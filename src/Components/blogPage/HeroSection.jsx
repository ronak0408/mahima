import React from 'react';
import './HeroSection.css'; // Import the component-specific CSS

const HeroSection = () => {
    return (
        <header className="zenitsu-hero">
            {/* The animated stars and overlay are applied via CSS */}
            <div className="zenitsu-hero__overlay"></div>
            <h1 className="zenitsu-hero__heading">
                Explore Divine Temples
            </h1>
        </header>
    );
};

export default HeroSection;