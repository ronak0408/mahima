import React, { useState, useEffect, useRef } from "react";
import "./KedarnathTemplePage.css";

const images = [
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg"
];

const quotes = [
    "“Om Namah Shivaya” – Sacred is the path, sacred is the soul.",
    "In the shadow of Himalayas, devotion finds its voice.",
    "Kedarnath: Where the mountains echo with faith."
];

export default function HeroGallery() {
    const [idx, setIdx] = useState(0);
    const [quoteIdx, setQuoteIdx] = useState(0);
    const timeout = useRef();
    useEffect(() => {
        timeout.current = setTimeout(() => {
            setIdx(i => (i + 1) % images.length);
            setQuoteIdx(q => (q + 1) % quotes.length);
        }, 4200);
        return () => clearTimeout(timeout.current);
    }, [idx, quoteIdx]);
    return (
        <section className="kn-hero-section">
            {images.map((src, i) => (
                <img
                    src={src}
                    key={src}
                    alt={`Kedarnath hero ${i + 1}`}
                    className={`kn-hero-img${i === idx ? " active" : ""}`}
                />
            ))}

            {/* Remove glass overlay or keep minimal as noted above */}

            {/* NEW: Bottom floating text */}
            <div className="kn-hero-bottom-quote fade-in-animation">
                <span aria-hidden className="kn-hero-om">🕉️</span>
                <span>{quotes[quoteIdx]}</span>
            </div>
        </section>

    );
}
