import React from 'react';
import './ourServices.css';

const OurServices = () => {
    const cards = [
        {
            id: 1,
            icon: '🕉️',
            title: 'Explore Temples',
            description: 'DhamMahima is dedicated to exploring the divine glory (Mahima) of sacred pilgrimage sites (Dham). Our mission is to share the spiritual essence, history, and significance of these holy abodes.',
            color: 'saffron',
            link: '/explore-temples'
        },
        {
            id: 2,
            icon: '🏛️',
            title: 'Festival Calendar',
            description: "India's Dhams hold timeless wisdom and divine energy. DhamMahima serves as a digital guide, offering stories, travel insights, and devotional content to deepen your spiritual connection.",
            color: 'lotus',
            link: '/festival-calendar'
        },
        {
            id: 3,
            icon: '🪔',
            title: 'Trip Planner',
            description: "The name 'DhamMahima' combines 'Dham' (sacred site) and 'Mahima' (divine glory). It reflects our commitment to unveiling the spiritual power and miracles of holy places.",
            color: 'divine',
            link: '/trip-planner'
        },
        {
            id: 4,
            icon: '🙏',
            title: 'Multimedia Hub',
            description: "Whether you seek blessings or wish to plan a pilgrimage, DhamMahima is your trusted resource for authentic and inspiring content about India's sacred geography.",
            color: 'devotion',
            link: '/multimedia-hub'
        }
    ];

    return (
        <>
            <div className="spiritual-background"></div>
            <div className="why-choose-container">
                <div className="spiritual-overlay"></div>
                <div className="header-section">
                    <div className="om-symbol">ॐ</div>
                    <h1 className="main-title">
                        Our Enlightning <span className="highlight">Services</span>?
                    </h1>
                    <p className="subtitle">We have many reasons, but here are the most divine ones</p>
                    <div className="divider-line"></div>
                </div>

                <div className="cards-grid">
                    {cards.map((card) => (
                        <div key={card.id} className={`card ${card.color}`}>
                            <div className={`icon-circle ${card.color}-circle`}>
                                <span className="icon">{card.icon}</span>
                                <div className="icon-glow"></div>
                            </div>
                            <h3 className="card-title">{card.title}</h3>
                            <p className="card-description">{card.description}</p>
                            <a
                                href={card.link}
                                className={`feature-btn ${card.color}-btn`}
                            >
                                {`Discover More About ${card.title}`}
                            </a>
                            <div className="card-blessing">🪷</div>
                        </div>
                    ))}
                </div>

                <div className="bottom-mantra">
                    <span className="sanskrit-text">सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः</span>
                </div>
            </div>
        </>
    );
};

export default OurServices;
