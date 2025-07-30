import React from "react";
import { FaClock, FaTshirt, FaRoute, FaConciergeBell } from "react-icons/fa";
import "./KedarnathTemplePage.css";

export default function RightSidebar() {
    return (
        <section className="kn-sidebar-box">
            <div className="kn-sidebar-row">
                <FaClock className="kn-sidebar-icon" />
                <div>
                    <div className="kn-sidebar-label">Darshan Timings</div>
                    <div className="kn-sidebar-value">4:00 AM – 9:00 PM</div>
                </div>
            </div>
            <div className="kn-sidebar-row">
                <FaTshirt className="kn-sidebar-icon" />
                <div>
                    <div className="kn-sidebar-label">Dress Code</div>
                    <div className="kn-sidebar-value">Modest attire required</div>
                </div>
            </div>
            <div className="kn-sidebar-row">
                <FaRoute className="kn-sidebar-icon" />
                <div>
                    <div className="kn-sidebar-label">How to Reach</div>
                    <div className="kn-sidebar-value">
                        Drive to Gaurikund (from Haridwar, Rishikesh, Dehradun), then trek 16 km by foot or pony.
                    </div>
                </div>
            </div>
            <div className="kn-sidebar-row">
                <FaConciergeBell className="kn-sidebar-icon" />
                <div>
                    <div className="kn-sidebar-label">Facilities</div>
                    <div className="kn-sidebar-value">Lockers, food stalls, restrooms</div>
                </div>
            </div>
        </section>
    );
}
