import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
    const [openItems, setOpenItems] = useState({});

    const faqData = [
        {
            id: 1,
            question: "What are the opening dates for Char Dham Yatra in 2025?"
        },
        {
            id: 2,
            question: "What is the best time to do Char Dham Yatra?"
        },
        {
            id: 3,
            question: "Which places are included in Char Dham Yatra?"
        },
        {
            id: 4,
            question: "How many days does it take to do Char Dham Yatra by helicopter?"
        },
        {
            id: 5,
            question: "What is the approximate cost of the Char Dham Yatra package by helicopter?"
        },
        {
            id: 6,
            question: "Is registration mandatory for Char Dham Yatra?"
        },
        {
            id: 7,
            question: "Which mobile network provides the best service during Char Dham Yatra by helicopter?"
        },
        {
            id: 8,
            question: "Do you provide VIP darshan tickets in the Char Dham Yatra package?"
        }
    ];

    const toggleItem = (id) => {
        setOpenItems(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    return (
        <div className="faq-container">
            <div className="faq-header">
                <h1 className="faq-title">Frequently Asked Questions. ?</h1>
                <p className="faq-subtitle">
                    Dham Mahatma is your ultimate guide to the Char Dham and other sacred pilgrimage sites in India.
                    Discover the spiritual significance, history, and beauty of these holy places.
                </p>
            </div>

            <div className="faq-list">
                {faqData.map((item) => (
                    <div key={item.id} className="faq-item">
                        <button
                            className="faq-question"
                            onClick={() => toggleItem(item.id)}
                            aria-expanded={openItems[item.id] || false}
                        >
                            <span className="plus-icon">+</span>
                            <span className="question-text">{item.question}</span>
                        </button>
                        {openItems[item.id] && (
                            <div className="faq-answer">
                                <p>Answer content for: {item.question}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
