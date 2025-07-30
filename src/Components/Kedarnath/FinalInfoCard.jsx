import React from "react";

export default function FinalInfoCard() {
    return (
        <section className="bg-white bg-opacity-80 backdrop-blur-md rounded-2xl shadow-lg border border-yellow-300 border-opacity-40 p-8 min-w-[280px] max-w-full flex flex-col text-gray-900 font-sans h-full">            <h2 className="text-2xl font-serif font-semibold text-yellow-600 mb-6 flex items-center select-none">
                <span role="img" aria-label="map" className="mr-3">🗺️</span>
                How to Reach
            </h2>
            <div className="space-y-4 leading-relaxed text-base md:text-lg font-medium">
                <div>
                    <h3 className="font-semibold text-yellow-700 mb-1">By Road</h3>
                    <p>Reach Gaurikund by bus or taxi; then trek 16 km to Kedarnath temple.</p>
                </div>
                <div>
                    <h3 className="font-semibold text-yellow-700 mb-1">By Helicopter</h3>
                    <p>Helicopter services available from Phata, Guptkashi, or Dehradun (popular during yatra season).</p>
                </div>
                <div>
                    <h3 className="font-semibold text-yellow-700 mb-1">Nearest Railway</h3>
                    <p>Rishikesh (~215 km from Kedarnath).</p>
                </div>
                <div>
                    <h3 className="font-semibold text-yellow-700 mb-1">Nearest Airport</h3>
                    <p>Jolly Grant Airport, Dehradun (238 km from Kedarnath).</p>
                </div>
            </div>
        </section>
    );
}
