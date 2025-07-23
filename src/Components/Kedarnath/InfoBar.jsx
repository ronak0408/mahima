import React from "react";
import { FaPrayingHands, FaMapMarkedAlt, FaCalendarAlt, FaClock } from "react-icons/fa";
import "./KedarnathTemplePage.css";

const info = [
    { icon: <FaPrayingHands />, title: "Deity", value: "Lord Shiva" },
    { icon: <FaMapMarkedAlt />, title: "Location", value: "Uttarakhand" },
    { icon: <FaCalendarAlt />, title: "Best Time", value: "May to October" },
    { icon: <FaClock />, title: "Darshan Timings", value: "4:00 AM – 9:00 PM" },
];

export default function InfoBar() {
    return (
        <section className="kt-infobar fade-on-scroll spiritual-border">
            {info.map((item, i) => (
                <div className="kt-infobar-section" key={i}>
                    <span className="kt-infobar-icon">{item.icon}</span>
                    <div className="kt-infobar-text">
                        <span className="kt-infobar-title">{item.title}:</span><span className="kt-infobar-value"> {item.value}</span>
                    </div>
                </div>
            ))}
        </section>
    );
}
