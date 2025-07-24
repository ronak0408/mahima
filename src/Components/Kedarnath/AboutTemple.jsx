import React from "react";
import "./KedarnathTemplePage.css";

export default function AboutTemple() {
    return (
        <section className="kn-about-section fade-in-on-scroll">
            {/* Animated Om background watermark */}
            <div className="kn-about-bg-ornament" aria-hidden>
                <span className="kn-about-om">ॐ</span>
            </div>
            <h1 className="kn-about-title">About Kedarnath Temple</h1>
            <div className="kn-about-text">
                <p>
                    <b>Historical Origins:</b> Kedarnath Temple’s origins trace to the epic tales of the Mahabharata. It is believed that the Pandavas, after the Kurukshetra war, sought Lord Shiva here for absolution. The present structure was reestablished by <b>Adi Shankaracharya</b> in the 8th century CE near the site of the original shrine. The temple’s timeless stone architecture stands resilient amidst the elements.<br /><br />
                    <b>Mythological Significance:</b> Legend narrates that Shiva, eluding the Pandavas, took the form of a bull and submerged himself into the ground at Kedarnath, leaving his hump at the temple site. The other parts emerged at four nearby locations, forming the sacred Panch Kedar pilgrimage.<br /><br />
                    <b>Natural Beauty & Surroundings:</b> The temple is nestled beside the <b>Mandakini River</b> at a stunning 3,583 meters, surrounded by towering Himalayan snow peaks. The spiritual ambiance merges with crisp mountain air, echoing mantras and ringing bells.<br /><br />
                    <b>Pilgrimage & Spiritual Journey:</b> Kedarnath is one of the twelve Jyotirlingas and forms a key part of the Char Dham Yatra. Pilgrims from all over India trek in devotion, braving cold, altitude, and the winding Himalayan paths.<br /><br />
                    <b>Trekking Route:</b> The traditional path begins at Gaurikund and stretches over a <b>16 km trek</b> via Rambara and Linchauli, with mountain vistas, cascading rivers, and resting Dharma Shalas along the way.<br />
                </p>
            </div>
        </section>
    );
}
