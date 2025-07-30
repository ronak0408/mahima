import React from "react";
import { FaPrayingHands, FaMapMarkedAlt, FaClock, FaCalendarAlt } from "react-icons/fa";
import "./KedarnathTemplePage.css";

const info = [
    { icon: <FaPrayingHands />, label: "Deity", value: "Lord Shiva" },
    { icon: <FaMapMarkedAlt />, label: "Location", value: "Uttarakhand" },
    { icon: <FaCalendarAlt />, label: "Best Time", value: "May to October" },
    { icon: <FaClock />, label: "Darshan Timings", value: "4:00 AM – 9:00 PM" }
];

export default function InfoBar() {
    return (
        <section className="kn-infobar fade-in-on-scroll">
            {info.map((item, i) => (
                <div className="kn-info-cell" key={i}>
                    <span className="kn-info-icon">{item.icon}</span>
                    <span>
            <span className="kn-info-label">{item.label}:</span>
            <span className="kn-info-value">{item.value}</span>
          </span>
                </div>
            ))}
        </section>
    );
}
