import React, { useEffect } from "react";
import HeroGallery from "./HeroGallery";
import InfoBar from "./InfoBar";
import AboutTemple from "./AboutTemple";
import BlogSection from "./BlogSection";
import RightSidebar from "./RightSidebar";  // New: import sidebar
import "./KedarnathTemplePage.css";

export default function KedarnathTemplePage() {
    useEffect(() => {
        // IntersectionObserver to trigger fade in on scroll for .fade-on-scroll
        const callback = (entries) => {
            for (let e of entries) {
                if (e.isIntersecting) e.target.classList.add("in-view");
            }
        };
        const observer = new window.IntersectionObserver(callback, { threshold: 0.15 });
        document.querySelectorAll(".fade-on-scroll").forEach((e) => observer.observe(e));
        return () => observer.disconnect();
    }, []);

    return (
        <div className="kt-bg">
            <HeroGallery />
            <InfoBar />
            {/* Two-column layout: main content + sidebar */}
            <div className="kt-main-content-container fade-on-scroll">
                <main className="kt-main-left">
                    <AboutTemple />
                    <BlogSection />
                </main>
                <aside className="kt-main-right">
                    <RightSidebar />
                </aside>
            </div>
            
        </div>
    );
}
