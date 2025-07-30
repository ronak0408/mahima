//
//
// import React, { useEffect } from "react";
// import HeroGallery from "./HeroGallery";
// import AboutTemple from "./AboutTemple";
// import MapSection from "./MapSection";
// import BlogSection from "./BlogSection";
// import VerticalInfoCards from "./VerticalInfoCards.jsx";
// import AboutPostCards from "./AboutPostCards.jsx";
// import FinalInfoCard from "./FinalInfoCard.jsx";
// import "./KedarnathTemplePage.css";
//
// export default function KedarnathTemplePage() {
//     useEffect(() => {
//         // Entrance fade-in animation on scroll for sections
//         const cb = (entries) => entries.forEach(e => {
//             if (e.isIntersecting) e.target.classList.add("in-view");
//         });
//         const observer = new window.IntersectionObserver(cb, { threshold: 0.14 });
//         document.querySelectorAll(".fade-in-on-scroll").forEach(e => observer.observe(e));
//         return () => observer.disconnect();
//     }, []);
//
//     return (
//         <div className="relative kn-bg min-h-screen overflow-x-hidden">
//             {/* Modern spiritual layered background */}
//             <div className="absolute inset-0 z-0 w-full min-h-screen bg-gradient-to-b from-[#fdfcfb] via-[#e0eafc] to-[#cfdef3]">
//                 {/* Optional: Low-opacity Mandala SVG */}
//                 <div className="absolute inset-0 bg-[url('/assets/mandala.svg')] bg-center bg-repeat opacity-5 z-0"></div>
//                 {/* Optional: Glass/mist overlay */}
//                 <div className="absolute inset-0 bg-white/40 backdrop-blur-sm z-0" />
//             </div>
//
//             {/* Spiritual animated icons */}
//             <div className="kn-animated-bg pointer-events-none absolute inset-0 z-10">
//                 <div className="kn-bg-ornament kn-bg-om">ॐ</div>
//                 <div className="kn-bg-ornament kn-bg-mandala" />
//             </div>
//
//             {/* Main content */}
//             <div className="relative z-10">
//                 <HeroGallery />
//
//                 {/* Info cards below hero */}
//                 <div className="kn-info-strip-wrapper">
//                     <VerticalInfoCards />
//                 </div>
//
//                 <div className="kn-content">
//                     {/* About Kedarnath section */}
//                     <AboutTemple />
//
//                     {/* Major Festivals / Nearby Attractions cards */}
//                     <AboutPostCards />
//
//                     {/* Final Info Card + Map, visually aligned */}
//                     <section className="flex flex-col md:flex-row gap-8 w-full max-w-5xl mx-auto py-8 px-4">
//                         <div className="flex-1 min-w-[280px] flex">
//                             <FinalInfoCard />
//                         </div>
//                         <div className="flex-1 min-w-[280px] flex">
//                             <MapSection />
//                         </div>
//                     </section>
//
//                     {/* Blog section */}
//                     <BlogSection />
//                 </div>
//             </div>
//         </div>
//     );
// }
//
//


import React, { useEffect } from "react";
import HeroGallery from "./HeroGallery";
import AboutTemple from "./AboutTemple";
import MapSection from "./MapSection";
import BlogSection from "./BlogSection";
import VerticalInfoCards from "./VerticalInfoCards.jsx";
import AboutPostCards from "./AboutPostCards.jsx";
import FinalInfoCard from "./FinalInfoCard.jsx";
import "./KedarnathTemplePage.css";

/* ⬇️ You can place this <style> in your index.html or inside a Tailwind CSS global file */
const AnimatedBackground = () => (
    <>
        <style>
            {`
        @keyframes auroraFlow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 55%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .aurora-bg {
          background: radial-gradient(ellipse 120% 65% at 60% 10%, #a8edea 0%, #fed6e3 60%, #e0c3fc 100%),
                      linear-gradient(120deg, #a1c4fd 0%, #d4fc79 100%);
          background-blend-mode: screen, lighten;
          animation: auroraFlow 32s ease-in-out infinite;
          background-size: 400% 400%, 200% 200%;
        }
        @media (max-width: 700px) {
          .aurora-bg { background-size: 600% 300%, 350% 200%; }
        }
      `}
        </style>
        {/* ☯️ Aurora animated background */}
        <div className="aurora-bg absolute inset-0 -z-10 w-full min-h-screen bg-fixed"></div>
        {/* Optional: cosmic glow overlay */}
        <div className="absolute inset-0 -z-10 bg-white/30 backdrop-blur-[3px]"></div>
        {/* Optional: shimmering mandala particles */}
        <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-[15%] top-[12%] w-52 h-52 bg-[radial-gradient(circle,rgba(170,125,255,0.14),transparent_70%)] rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute right-[10%] bottom-[9%] w-60 h-60 bg-[radial-gradient(circle,rgba(117,222,255,0.18),transparent_70%)] rounded-full blur-2xl animate-pulse delay-300"></div>
            <div className="absolute left-1/3 top-1/2 w-32 h-32 bg-[radial-gradient(circle,rgba(255,213,102,0.09),transparent_80%)] rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>
    </>
);

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
        <div className="relative kn-bg min-h-screen overflow-x-hidden">
            {/* 🌌 Modern animated aurora/water background ⬇️ */}
            <AnimatedBackground />

            {/* Spiritual animated icons (above bg, below content) */}
            <div className="kn-animated-bg pointer-events-none absolute inset-0 z-10">
                <div className="kn-bg-ornament kn-bg-om">ॐ</div>
                <div className="kn-bg-ornament kn-bg-mandala" />
            </div>

            {/* Main content (z-20 by stacking order) */}
            <div className="relative z-20">
                <HeroGallery />

                {/* Info cards below hero */}
                <div className="kn-info-strip-wrapper">
                    <VerticalInfoCards />
                </div>

                <div className="kn-content">
                    {/* About Kedarnath section */}
                    <AboutTemple />

                    {/* Major Festivals / Nearby Attractions cards */}
                    <AboutPostCards />

                    {/* Final Info Card + Map, visually aligned */}
                    <section className="flex flex-col md:flex-row gap-8 w-full max-w-5xl mx-auto py-8 px-4">
                        <div className="flex-1 min-w-[280px] flex">
                            <FinalInfoCard />
                        </div>
                        <div className="flex-1 min-w-[280px] flex">
                            <MapSection />
                        </div>
                    </section>

                    {/* Blog section */}
                    <BlogSection />
                </div>
            </div>
        </div>
    );
}
