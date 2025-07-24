import React, { useEffect } from "react";
import HeroGallery from "./HeroGallery";
import InfoBar from "./InfoBar";
import AboutTemple from "./AboutTemple";
import RightSidebar from "./RightSidebar";
import MapSection from "./MapSection";
import BlogSection from "./BlogSection";
import "./KedarnathTemplePage.css";

export default function KedarnathTemplePage() {
    useEffect(() => {
        // Entrance fade-in animation on scroll for sections
        const cb = (entries) => entries.forEach(e => {
            if (e.isIntersecting) e.target.classList.add("in-view");
        });
        const observer = new window.IntersectionObserver(cb, { threshold: 0.14 });
        document.querySelectorAll(".fade-in-on-scroll").forEach(e => observer.observe(e));
        return () => observer.disconnect();
    }, []);

    return (
        <div className="kn-bg">
            {/* Spiritual animated background */}
            <div className="kn-animated-bg" aria-hidden>
                <div className="kn-bg-ornament kn-bg-om">ॐ</div>
                <div className="kn-bg-ornament kn-bg-mandala" />
            </div>
            <HeroGallery />

            {/* Info bar placed below the gallery */}
            <div className="kn-info-strip-wrapper">
                <InfoBar />
            </div>

            <div className="kn-content">
                <AboutTemple />

                {/* Sidebar + Map layout */}
                <div className="kn-flex kn-sb-map-row fade-in-on-scroll">
                    <RightSidebar />
                    <MapSection />
                </div>

                <BlogSection />
            </div>
        </div>
    );
}
