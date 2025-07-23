import React from "react";
import { FaClock, FaTshirt, FaRoute, FaUtensils, FaLock } from "react-icons/fa";
import "./KedarnathTemplePage.css";

export default function RightSidebar() {
    return (
        <section className="kt-sidebar-box">
            <div className="kt-sidebar-section">
                <FaClock className="kt-sidebar-icon" />
                <div>
                    <div className="kt-sidebar-label">Darshan Timings</div>
                    <div className="kt-sidebar-value">4:00 AM – 9:00 PM</div>
                </div>
            </div>
            <div className="kt-sidebar-section">
                <FaTshirt className="kt-sidebar-icon" />
                <div>
                    <div className="kt-sidebar-label">Dress Code</div>
                    <div className="kt-sidebar-value">Moderate attire recommended</div>
                </div>
            </div>
            <div className="kt-sidebar-section">
                <FaRoute className="kt-sidebar-icon" />
                <div>
                    <div className="kt-sidebar-label">How to Reach</div>
                    <div className="kt-sidebar-value">
                        Road: Rishikesh, Haridwar, or Dehradun to Gaurikund &nbsp;|&nbsp;
                        Trek: 16 km from Gaurikund
                    </div>
                </div>
            </div>
            <div className="kt-sidebar-section">
                <FaLock className="kt-sidebar-icon" />
                <div>
                    <div className="kt-sidebar-label">Nearby Facilities</div>
                    <div className="kt-sidebar-value">Lockers, Food Stalls, Restrooms</div>
                </div>
            </div>
        </section>
    );
}
