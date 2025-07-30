import React, { useEffect, useRef } from "react";

export default function AboutTemple() {
    const sectionRef = useRef(null);

    useEffect(() => {
        // Intersection observer for fade-in animations on scroll (local to this component)
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("opacity-100", "translate-y-0");
                    }
                });
            },
            { threshold: 0.2 }
        );

        const section = sectionRef.current;
        if (section) {
            section.querySelectorAll(".animate-on-scroll").forEach((el) => {
                el.classList.add("opacity-0", "translate-y-8", "transition-all", "duration-700", "ease-out");
                observer.observe(el);
            });
        }
        return () => observer.disconnect();
    }, []);

    const timelineEvents = [
        { date: "Ancient Era", event: "Referenced in Puranas & Mahabharata" },
        { date: "8th Century CE", event: "Believed to be revived by Adi Shankaracharya" },
        { date: "2013", event: "Temple miraculously survived Uttarakhand floods (Bhim Shila)" },
        { date: "2014–2021", event: "Major restoration and conservation by Indian government" },
        { date: "Present", event: "Massive annual pilgrimage, digitally accessible" },
    ];

    const notableBeliefs = [
        { icon: "🔱", text: "Myth: Shiva eluded the Pandavas and dove into the ground as a bull; his hump appeared at Kedarnath." },
        { icon: "🙏", text: "Char Dham Rule: Pilgrims must visit Yamunotri, Gangotri, and Badrinath before Kedarnath." },
        { icon: "✨", text: "Spiritual energy at Kedarnath Jyotirlinga is believed to peak during Shravan month." },
        { icon: "🕉️", text: "In winter, the holy deity is moved to Ukhimath's Omkareshwar temple." },
    ];

    return (
        <section
            ref={sectionRef}
            className="relative w-full max-w-5xl mx-auto rounded-3xl bg-[#f9f9f9] backdrop-blur-sm border border-gray-200 shadow-md p-10 my-12 overflow-hidden select-none"
        >
            {/* Floating Icon Decorations */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-16 left-1/4 text-yellow-200 text-7xl opacity-10 animate-slow-float select-none"
                style={{ userSelect: "none" }}
            >
                🕉️
            </div>
            <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-8 right-10 text-purple-300 text-9xl opacity-10 animate-slow-spin select-none"
                style={{ userSelect: "none" }}
            >
                🔱
            </div>

            {/* Main Heading */}
            <h1 className="animate-on-scroll font-cinzel underline decoration-yellow-400 decoration-4 underline-offset-8 text-4xl md:text-5xl font-extrabold text-purple-900 mb-12 flex items-center gap-4 select-text">
                <span className="text-yellow-500">🕉️</span> About Kedarnath Temple
            </h1>

            {/* Overview */}
            <article className="animate-on-scroll mb-10 mx-auto max-w-[90%]">
                <h2 className="font-crimson text-3xl text-yellow-600 mb-3 border-b-4 border-yellow-400 inline-block pb-2">
                    Overview
                </h2>
                <p className="text-gray-800 font-crimson text-lg md:text-xl leading-relaxed">
                    Kedarnath Temple, one of the holiest Hindu shrines, is nestled in the Garhwal Himalayas of Uttarakhand. Dedicated to Lord Shiva, this Jyotirlinga draws thousands of pilgrims annually and is a key destination in the Char Dham Yatra.
                </p>
            </article>

            {/* 🧘‍♂️ MYTHOLOGICAL ORIGIN – new block */}
            <article className="animate-on-scroll mb-10 mx-auto max-w-[90%]">
                <h2
                    className="font-cinzel text-2xl md:text-3xl text-saffron-700 mb-3 border-b-4 border-orange-300 inline-block pb-2 flex items-center gap-2"
                    style={{ fontFamily: "'Cinzel', serif" }}
                >
                    <span className="text-2xl">🧘‍♂️</span> Mythological Origin
                </h2>
                <p className="text-gray-800 font-crimson text-lg leading-relaxed bg-orange-50/60 rounded-lg p-6 shadow-sm" style={{ fontFamily: "'Crimson Text', serif" }}>
                    According to Mahabharata, after the war, the Pandavas sought Lord Shiva for redemption from the sins of killing their own kin.
                    Shiva, avoiding them, took refuge in the Himalayas in the form of a bull. Bhima recognized him and tried to catch the bull, but Shiva disappeared into the ground, leaving his hump visible in Kedarnath.
                    The other parts of his body appeared at four other places, forming the Panch Kedar. Thus, Kedarnath became the place where Shiva forgave the Pandavas and blessed them.
                </p>
            </article>

            {/* Architectural Highlights */}
            <article className="animate-on-scroll mb-10 mx-auto max-w-[90%]">
                <h2 className="font-crimson text-3xl text-blue-600 mb-3 border-b-4 border-blue-400 inline-block pb-2 flex items-center gap-2">
                    <span className="text-2xl">🛕</span> Architectural Highlights
                </h2>
                <ul className="list-disc list-inside space-y-2 text-gray-800 font-crimson text-base md:text-lg">
                    <li>Constructed using massive stone slabs, joined without mortar in the traditional Katyuri style.</li>
                    <li>Located at an altitude of 3,583 meters, surrounded by snow-covered peaks and the sacred Mandakini River.</li>
                    <li>Sanctum houses a unique hump-shaped Shiva lingam; Nandi bull statue graces the temple entrance.</li>
                    <li>Built or restored by Adi Shankaracharya, embodying enduring Himalayan spiritual architecture.</li>
                    <li>Temple survived the devastating 2013 floods thanks to the protective Bhim Shila boulder.</li>
                </ul>
            </article>

            {/* Spiritual Significance */}
            <article className="animate-on-scroll mb-10 mx-auto max-w-[90%]">
                <h2 className="font-crimson text-3xl text-purple-700 mb-3 border-b-4 border-purple-500 inline-block pb-2 flex items-center gap-2">
                    <span className="text-2xl">📿</span> Spiritual Significance
                </h2>
                <ul className="list-disc list-inside space-y-2 text-gray-800 font-crimson text-base md:text-lg text-purple-800 hover:text-purple-900 hover:shadow-outline transition duration-300">
                    <li>Considered the highest and the most remote of the 12 Jyotirlingas.</li>
                    <li>Believed to be the site where Lord Shiva absolved the Pandavas of their sins after the Mahabharata war.</li>
                    <li>The temple offers pilgrims spiritual liberation, forgiveness, and inner purity.</li>
                    <li>Open only six months a year (May to October); deity relocates to Ukhimath temple during winter.</li>
                    <li>Meditation and pilgrimage here are deeply connected to moksha and detachment from worldly suffering.</li>
                </ul>
            </article>

            {/* Historical Timeline */}
            <article className="animate-on-scroll mb-10 mx-auto max-w-[90%] overflow-x-auto">
                <h2 className="font-crimson text-3xl text-green-700 mb-4 border-b-4 border-green-400 inline-block pb-2 flex items-center gap-2">
                    <span className="text-2xl">📜</span> Historical Timeline
                </h2>
                <table className="w-full min-w-[320px] border-separate border-spacing-y-2 text-left shadow rounded-md overflow-hidden">
                    <thead>
                    <tr className="bg-green-200 text-green-900 font-semibold text-lg">
                        <th className="px-4 py-2"><span role="img" aria-label="date">🕰️</span> Period</th>
                        <th className="px-4 py-2"><span role="img" aria-label="event">📜</span> Event</th>
                    </tr>
                    </thead>
                    <tbody>
                    {timelineEvents.map(({ date, event }, idx) => (
                        <tr
                            key={idx}
                            className={`${idx % 2 === 0 ? 'bg-green-50' : 'bg-green-100'} text-green-900 text-base`}
                        >
                            <td className="px-4 py-3 align-top font-semibold">{date}</td>
                            <td className="px-4 py-3">{event}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </article>

            {/* Notable Beliefs & Legends */}
            <article className="animate-on-scroll mx-auto max-w-[90%]">
                <h2 className="font-crimson text-3xl text-indigo-700 mb-5 border-b-4 border-indigo-500 inline-block pb-2 flex items-center gap-2">
                    <span className="text-2xl">✨</span> Notable Beliefs & Legends
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {notableBeliefs.map(({ icon, text }, i) => (
                        <div key={i} className="flex items-start gap-4 bg-indigo-50/40 backdrop-blur-sm rounded-lg p-4 shadow-sm hover:shadow-md hover:scale-[1.02] transition transform duration-300">
                            <div className="text-indigo-600 text-3xl flex-shrink-0 select-none">{icon}</div>
                            <p className="text-gray-800 font-serif leading-relaxed">{text}</p>
                        </div>
                    ))}
                </div>
            </article>

            {/* 🧾 Conclusion */}
            <article className="animate-on-scroll mt-12 mx-auto max-w-[90%]">
                <h2
                    className="font-cinzel text-2xl md:text-3xl text-green-800 mb-3 border-b-4 border-green-400 inline-block pb-2 flex items-center gap-2"
                    style={{ fontFamily: "'Cinzel', serif" }}
                >
                    <span className="text-2xl">🧾</span> Conclusion
                </h2>
                <p className="text-gray-800 font-crimson text-lg leading-relaxed bg-green-50/70 rounded-lg p-6 shadow-sm mb-5" style={{ fontFamily: "'Crimson Text', serif" }}>
                    Kedarnath Jyotirlinga is not just a temple, it is a soul-stirring experience in the lap of the Himalayas. Known for its purity, penance, and peace, a visit here is the ultimate pilgrimage of faith, surrender, and liberation.
                </p>
                <div className="flex items-center mt-2">
                    <span className="font-semibold text-green-700 mr-2">Website:</span>
                    <a
                        href="https://badrinath-kedarnath.gov.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-900 hover:text-green-500 underline font-mono text-base"
                        tabIndex={0}
                    >
                        https://badrinath-kedarnath.gov.in
                    </a>
                </div>
            </article>
        </section>
    );
}
