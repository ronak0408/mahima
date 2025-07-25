import React, { useState } from "react";
import "./KedarnathFAQ.css";

const faqData = [
    {
        id: 1,
        question: "Which places are included in Char Dham Yatra?",
        answer: "The Char Dham Yatra in Uttarakhand includes four sacred sites: Yamunotri, Gangotri, Kedarnath, and Badrinath. Each holy site is dedicated to a different deity and is located in the Garhwal Himalayas."
    },
    {
        id: 2,
        question: "How many days does it take to do Char Dham Yatra by helicopter?",
        answer: "The Yatra by helicopter typically takes 4 to 5 days and allows efficient darshan of all four shrines."
    },
    {
        id: 3,
        question: "What is the approximate cost of the Char Dham Yatra package by helicopter?",
        answer: "The cost usually ranges from ₹1,70,000 to ₹2,50,000 per person, depending on operator, dates, and inclusions."
    },
    {
        id: 4,
        question: "Is registration mandatory for Char Dham Yatra?",
        answer: "Yes, registration is required for all pilgrims, regardless of travel mode. Register online or at authorized centers."
    },
    {
        id: 5,
        question: "Which mobile network provides the best service during Char Dham Yatra by helicopter?",
        answer: "BSNL typically offers the widest coverage along the Yatra route, though Jio and Airtel may work in some locations."
    },
    {
        id: 6,
        question: "Do you provide VIP darshan tickets in the Char Dham Yatra package?",
        answer: "Most helicopter yatra packages include VIP darshan tickets. Always confirm these inclusions with your provider."
    }
];

const KedarnathFAQ = () => {
    const [openId, setOpenId] = useState(null);
    const toggle = id => setOpenId(openId === id ? null : id);

    return (
        <section className="faq-bg">
            <div className="faq-glass">
                <h2 className="faq-title">Frequently Asked Questions</h2>
                <div className="faq-list">
                    {faqData.map(({ id, question, answer }, idx) => (
                        <div key={id} className="faq-block">
                            <button
                                className={`faq-question${openId === id ? " open" : ""}`}
                                onClick={() => toggle(id)}
                                aria-expanded={openId === id}
                                aria-controls={`faq-answer-${id}`}
                                type="button"
                            >
                                <span className="faq-question-text">{question}</span>
                                <span
                                    className="faq-icon"
                                    style={{
                                        transform: openId === id ? "rotate(90deg)" : "rotate(0deg)"
                                    }}
                                >
                  <svg width="18" height="18" viewBox="0 0 20 20">
                    <polyline
                        points="6 8 10 12 14 8"
                        fill="none"
                        stroke="#2c3e50"
                        strokeWidth="2.1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                  </svg>
                </span>
                            </button>
                            <div
                                className={`faq-answer${openId === id ? " visible" : ""}`}
                                id={`faq-answer-${id}`}
                                aria-hidden={openId !== id}
                            >
                                <p>{answer}</p>
                            </div>
                            {idx !== faqData.length - 1 && <div className="faq-divider" aria-hidden="true" />}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default KedarnathFAQ;
