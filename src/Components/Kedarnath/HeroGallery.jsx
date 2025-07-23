import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./KedarnathTemplePage.css";

// Use only true landscape (16:9, 1920x1080 recommended), update file names as needed
const images = [
    "/images/img1.jpg",
    "/images/img2.jpg",
    "/images/img3.jpg",
    "/images/img4.jpg",
    "/images/img5.jpg",
];

// Mandala SVG border for spiritual accent (optional)
function Mandala({ position = "top" }) {
    return (
        <svg
            className={`kt-mandala ${position}`}
            width="180"
            height="30"
            viewBox="0 0 180 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
            style={{
                display: "block",
                margin: "0 auto",
                opacity: 0.38,
            }}
        >
            <ellipse cx="90" cy={position === "top" ? "24" : "6"} rx="90" ry="6" fill="#ffe6b3" />
            <ellipse cx="90" cy={position === "top" ? "10" : "18"} rx="44" ry="3" fill="#d59219" opacity="0.22" />
        </svg>
    );
}

export default function HeroGallery() {
    const [current, setCurrent] = useState(0);
    const [anim, setAnim] = useState("fade-in");
    const timeoutRef = useRef();

    useEffect(() => {
        setAnim("fade-in");
        timeoutRef.current = setTimeout(() => {
            setAnim("fade-out");
            setTimeout(() => {
                setCurrent((prev) => (prev + 1) % images.length);
            }, 500); // duration matches fadeout
        }, 4200);
        return () => clearTimeout(timeoutRef.current);
    }, [current]);

    const goTo = (idx) => {
        setAnim("fade-in");
        setCurrent(idx);
    };
    const prev = () => goTo(current === 0 ? images.length - 1 : current - 1);
    const next = () => goTo((current + 1) % images.length);

    return (
        <section className="kt-hero-section">
            <Mandala position="top" />
            <div className="kt-hero-outer">
                {images.map((src, idx) => (
                    <img
                        src={src}
                        alt={`Kedarnath Temple Landscape ${idx + 1}`}
                        key={src}
                        className={
                            `kt-hero-img` +
                            (idx === current
                                ? ` kt-hero-img--fadein`
                                : ` kt-hero-img--fadeout`)
                        }
                        style={{
                            display: idx === current ? "block" : "none",
                            /* avoid stacking all images for performance */
                        }}
                        draggable="false"
                    />
                ))}
                {/* Navigation */}
                <button className="kt-hero-arrow kt-hero-arrow--left" onClick={prev} aria-label="Previous Slide">
                    <FaChevronLeft />
                </button>
                <button className="kt-hero-arrow kt-hero-arrow--right" onClick={next} aria-label="Next Slide">
                    <FaChevronRight />
                </button>
                {/* Dots */}
                <div className="kt-hero-dots">
                    {images.map((_, idx) => (
                        <button
                            key={idx}
                            aria-label={`Go to image ${idx + 1}`}
                            className={`kt-hero-dot${idx === current ? " active" : ""}`}
                            onClick={() => goTo(idx)}
                        />
                    ))}
                </div>
            </div>
            <Mandala position="bottom" />
            <div className="kt-hero-caption spiritual-fancy-in">
                <span aria-hidden className="kt-om-icon">🕉️</span> Kedarnath Temple, Himalaya
            </div>
        </section>
    );
}
