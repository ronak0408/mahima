// MainContent.jsx
import React from "react";
import RightSidebar from "./RightSidebar";
import "./KedarnathTemplePage.css";

export default function MainContent() {
    return (
        <div className="kt-main-content">
            <div className="kt-main-left">
                <section>
                    <h2>About Kedarnath Temple</h2>
                    <p>
                        Kedarnath Temple stands majestically amidst the Garhwal Himalayas at an altitude of 3,583 meters. Believed to be built in the 8th century by Adi Shankaracharya near the site of an ancient Pandava shrine, this sacred temple is dedicated to Lord Shiva and is one of the twelve Jyotirlingas of India. The stone structure, interlocked without mortar, has withstood centuries of floods, snow, and harsh weather, serving as a beacon of faith for millions of pilgrims each year[2][5].
                    </p>
                </section>
                <section>
                    <h3>Best Time to Visit & Climate</h3>
                    <p>
                        The temple is open from late April/May to October, with May and June being the most popular months. Daytime temperatures in summer range from 8°C to 15°C, while nights remain chilly. Monsoon (July–August) brings heavy rainfall, increasing landslide risk. If you visit during pre-winter (September–October), you’ll experience colder temperatures, so bring adequate warm clothing. Winters (November–March) are harsh, with temperatures plummeting to -15°C and the temple closed due to heavy snow[7][17].
                    </p>
                </section>
            </div>
            <div className="kt-main-right">
                <RightSidebar />
            </div>
        </div>
    );
}
