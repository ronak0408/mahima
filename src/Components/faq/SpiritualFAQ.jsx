import React, { useState } from "react";
import "./SpiritualFAQ.css";

const faqData = [
    {
        id: 3,
        question: "Which places are included in Char Dham Yatra?",
        answer:
            "The Char Dham Yatra in Uttarakhand includes four sacred sites: Yamunotri, Gangotri, Kedarnath, and Badrinath. Each of these is devoted to different deities and is located in the Garhwal Himalayas."
    },
    {
        id: 4,
        question: "How many days does it take to do Char Dham Yatra by helicopter?",
        answer:
            "The Char Dham Yatra by helicopter is typically completed in 4 to 5 days, providing a swift yet spiritually rewarding journey."
    },
    {
        id: 5,
        question: "What is the approximate cost of the Char Dham Yatra package by helicopter?",
        answer:
            "The cost generally ranges between ₹1,70,000 and ₹2,50,000 per person, depending on the operator, facilities, and season."
    },
    {
        id: 6,
        question: "Is registration mandatory for Char Dham Yatra?",
        answer:
            "Yes. Every pilgrim must register, whether undertaking the yatra by road or helicopter. Registration is available online and at official counters."
    },
    {
        id: 7,
        question: "Which mobile network provides the best service during Char Dham Yatra by helicopter?",
        answer:
            "BSNL typically has the best coverage in the high-altitude regions, though service may be patchy at times. Jio and Airtel work in some towns."
    },
    {
        id: 8,
        question: "Do you provide VIP darshan tickets in the Char Dham Yatra package?",
        answer:
            "Most helicopter packages include VIP darshan tickets, allowing for faster temple entry. Always confirm with your tour provider."
    }
];

const KedarnathFAQ = () => {
    const [openId, setOpenId] = useState(null);

    const toggle = id => setOpenId(openId === id ? null : id);

    return (
        <section className="kedarnath-faq-glass" aria-label="Frequently Asked Questions">
            <div className="kedarnath-faq-inner">
                <h2 className="kedarnath-faq-heading">Frequently Asked Questions</h2>
                <div className="kedarnath-faq-list">
                    {faqData.map(({ id, question, answer }, idx) => (
                        <div key={id}>
                            <button
                                className={`faq-question-btn${openId === id ? " open" : ""}`}
                                onClick={() => toggle(id)}
                                aria-expanded={openId === id}
                                aria-controls={`faq-answer-${id}`}
                            >
                                {question}
                            </button>
                            <div
                                className={`faq-answer${openId === id ? " visible" : ""}`}
                                id={`faq-answer-${id}`}
                                aria-hidden={openId !== id}
                                style={{ transitionDelay: openId === id ? "30ms" : "0ms" }}
                            >
                                <p>{answer}</p>
                            </div>
                            {/* Divider below each Q except last */}
                            {idx !== faqData.length - 1 && <hr className="faq-divider" />}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default KedarnathFAQ;
