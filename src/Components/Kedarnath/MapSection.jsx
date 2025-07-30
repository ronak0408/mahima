import React from "react";
import "./KedarnathTemplePage.css";

export default function MapSection() {
    return (
        <section className="kn-map-section bg-white bg-opacity-70 backdrop-blur-md rounded-2xl shadow-lg border border-yellow-300 border-opacity-30 p-6 flex flex-col items-stretch justify-stretch w-full h-full">
            {/* Small info line above the map */}
            <div className="mb-3">
                <h3 className="text-yellow-600 text-xl font-serif font-semibold mb-1 select-none flex items-center gap-2">
                    <span role="img" aria-label="location">📍</span> Temple Location
                </h3>
                <p className="text-gray-800 font-crimson text-base leading-normal m-5">
                    At 3,583m in Uttarakhand’s Garhwal Himalayas, beside the Mandakini River.
                </p>
            </div>

            {/* Map stays with fixed, controlled height */}
            <div className="flex-1 flex">
                <iframe
                    title="Kedarnath Temple Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3447.5046089482643!2d79.06689411507159!3d30.735214439107953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a7941eb5e99487%3A0x3381628c2b2eea09!2sKedarnath%20Temple!5e0!3m2!1sen!2sin!4v1652354045391!5m2!1sen!2sin"
                    allowFullScreen
                    loading="lazy"
                    style={{ border: 0 }}
                    className="rounded-xl shadow-md w-full h-[320px] md:h-[320px]"
                />
            </div>
        </section>
    );
}
