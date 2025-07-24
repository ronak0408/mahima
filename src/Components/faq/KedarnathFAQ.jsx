import React, { useState } from "react";
import "./KedarnathFAQ.css";

// Example questions, replace with your own
const faqData = [
    {
        question: "🕉️ What are the darshan timings at Kedarnath Temple?",
        answer: "Kedarnath Temple opens early in the morning and closes in the evening, with specific timings updated yearly according to the religious calendar."
    },
    {
        question: "❓ What is the best time to visit Kedarnath Temple?",
        answer: "The best time is during summer (May to June) and the start of autumn (September to October) when the weather is pleasant and the temple is open."
    },
    {
        "question": "Which places are included in Char Dham Yatra?",
        "answer": "The Char Dham Yatra in Uttarakhand covers four sacred pilgrimage sites: Yamunotri (dedicated to Goddess Yamuna), Gangotri (dedicated to Goddess Ganga), Kedarnath (dedicated to Lord Shiva), and Badrinath (dedicated to Lord Vishnu). These sites are nestled in the Garhwal Himalayas and are some of the most revered destinations for Hindu devotees."
    },
    {
        "question": "How many days does it take to do Char Dham Yatra by helicopter?",
        "answer": "The Char Dham Yatra by helicopter is typically designed as a 4 to 5-day package. This quick journey allows you to visit all four holy sites with minimal travel time, compared to the 10–15 days needed by road."
    },
    {
        "question": "What is the approximate cost of the Char Dham Yatra package by helicopter?",
        "answer": "As of 2025, the approximate cost for a Char Dham Yatra package by helicopter ranges from ₹1,70,000 to ₹2,50,000 per person. The final price depends on the operator, duration, inclusions, and booking time. Premium packages may cost more."
    },
    {
        "question": "Is registration mandatory for Char Dham Yatra?",
        "answer": "Yes, registration is mandatory for all pilgrims undertaking the Char Dham Yatra, whether by road or helicopter. Registration can be done online through the Uttarakhand government portal or at designated counters before starting the yatra."
    },
    {
        "question": "Which mobile network provides the best service during Char Dham Yatra by helicopter?",
        "answer": "During the Char Dham Yatra, BSNL usually offers the widest coverage in remote Himalayan areas, including near the temples. Jio and Airtel may work in some places, but their signals can be inconsistent, especially at higher altitudes."
    },
    {
        "question": "Do you provide VIP darshan tickets in the Char Dham Yatra package?",
        "answer": "Most reputable helicopter yatra operators include VIP darshan passes in their package. These passes allow pilgrims to bypass regular queues at the shrines for a smoother and quicker spiritual experience. Always confirm with your chosen operator before booking."
    }];

const KedarnathFAQ = () => {
    const [openIdx, setOpenIdx] = useState(null);

    return (
        <section className="kedarnath-faq-section" aria-label="Frequently Asked Questions">
            <div className="kedarnath-faq-wrapper">
                <header className="kedarnath-faq-header">
                    <h1 className="kedarnath-faq-title">
                        ✨ Frequently Asked Questions
                    </h1>
                    <p className="kedarnath-faq-subtitle">
                        Your spiritual guide to the mysteries and rituals of Kedarnath Dham.
                    </p>
                </header>
                <ul className="kedarnath-faq-list" role="list">
                    {faqData.map((item, idx) => (
                        <li key={idx} className={`faq-item ${openIdx === idx ? "active" : ""}`}>
                            <button
                                aria-expanded={openIdx === idx}
                                aria-controls={`faq-panel-${idx}`}
                                className="faq-question"
                                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                            >
                                <span className="faq-icon" aria-hidden="true" />
                                <span className="faq-qtext">{item.question}</span>
                                <span className={`faq-toggle-icon ${openIdx === idx ? "opened" : ""}`} aria-hidden="true">
                  {openIdx === idx ? "−" : "+"}
                </span>
                            </button>
                            <div
                                id={`faq-panel-${idx}`}
                                role="region"
                                className="faq-answer-wrapper"
                                style={{
                                    maxHeight: openIdx === idx ? "300px" : "0",
                                    opacity: openIdx === idx ? "1" : "0"
                                }}
                                aria-hidden={openIdx !== idx}
                            >
                                <div className="faq-answer">
                                    <blockquote>{item.answer}</blockquote>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default KedarnathFAQ;
