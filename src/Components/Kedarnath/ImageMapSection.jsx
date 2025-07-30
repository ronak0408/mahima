// ImageMapSection.jsx
import React from "react";
import "./KedarnathTemplePage.css";

export default function ImageMapSection() {
    return (
        <div className="kt-image-map-section">
            <img
                src="/images/kedarnath-main.jpg"
                alt="Kedarnath Temple"
                className="kt-image-map-img"
            />
            <iframe
                className="kt-image-map-iframe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3447.5046089482643!2d79.06689411507159!3d30.735214439107953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a7941eb5e99487%3A0x3381628c2b2eea09!2sKedarnath%20Temple!5e0!3m2!1sen!2sin!4v1652354045391!5m2!1sen!2sin"
                frameBorder="0"
                allowFullScreen
                title="Kedarnath Temple Map"
            ></iframe>
        </div>
    );
}
