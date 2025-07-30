import React from "react";

export default function AboutPostCards() {
    return (
        <section className="flex flex-col md:flex-row justify-center items-stretch w-full mx-auto gap-8 mt-10 px-4 max-w-5xl">
            {/* Card 1: Major Festivals */}
            <div className="flex-1 max-w-[45%] bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl border border-yellow-200 border-opacity-40 transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl p-8 min-w-[290px] flex flex-col">
                <h2 className="text-2xl font-serif font-semibold text-yellow-500 mb-5 flex items-center select-none">
                    <span role="img" aria-label="festival" className="mr-2">🎉</span>
                    Major Festivals
                </h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-800 text-base md:text-lg font-medium font-crimson">
                    <li>Maha Shivratri – Rudrabhishek and special aartis</li>
                    <li>Opening Day – Huge celebration in May, idol brought from Ukhimath</li>
                    <li>Closing Day – October/November, idol carried back to Ukhimath</li>
                    <li>Shravan Maas – Daily pooja, massive crowds of pilgrims</li>
                </ul>
            </div>

            {/* Card 2: Nearby Attractions */}
            <div className="flex-1 max-w-[45%] bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl border border-indigo-200 border-opacity-40 transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl p-8 min-w-[290px] flex flex-col">
                <h2 className="text-2xl font-serif font-semibold text-indigo-600 mb-5 flex items-center select-none">
                    <span role="img" aria-label="attractions" className="mr-2">🙏</span>
                    Nearby Attractions
                </h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-800 text-base md:text-lg font-medium font-crimson">
                    <li>Bhairavnath Temple – Guardian deity of Kedarnath</li>
                    <li>Adi Shankaracharya Samadhi – Just behind the temple</li>
                    <li>Vasuki Tal – High altitude lake with Himalayan view</li>
                    <li>Gandhi Sarovar – Glacial lake</li>
                    <li>Ukhimath – Winter seat of Kedarnath idol</li>
                </ul>
            </div>
        </section>
    );
}
