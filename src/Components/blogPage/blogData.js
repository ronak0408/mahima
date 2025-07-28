import kedarnath1 from '../../../../blog/blogpage/src/assets/1.jpeg';
import kedarnath2 from '../../../../blog/blogpage/src/assets/2.jpeg';
import badrinath1 from '../../../../blog/blogpage/src/assets/bdr1.jpeg';
import badrinath2 from '../../../../blog/blogpage/src/assets/bdr2.jpeg';
import somnath1 from '../../../../blog/blogpage/src/assets/sm1.jpg';
import somnath2 from '../../../../blog/blogpage/src/assets/sm2.jpg';
import kashi1 from '../../../../blog/blogpage/src/assets/kv1.png';
import kashi2 from '../../../../blog/blogpage/src/assets/kv2.jpg';
import meenakshi1 from '../../../../blog/blogpage/src/assets/mn1.jpg';
import meenakshi2 from '../../../../blog/blogpage/src/assets/mn2.jpg';

export const blogData = [
    {
        id: 1,
        title: "Kedarnath: The Abode of the Absolute",
        shortDescription: "Perched high in the Garhwal Himalayas, the ancient Kedarnath Temple is a profound symbol of faith, resilience, and spiritual energy, drawing pilgrims to its sacred stones and breathtaking vistas.",
        images: [kedarnath1, kedarnath2],
        info: {
            deity: "Lord Shiva",
            location: "Kedarnath, Uttarakhand",
            bestTime: "May to October",
            ticketPrice: "Free Entry",
            timing: "6:00 AM - 8:00 PM",
        },
        fullDescription: [
            { category: "Historical Significance", content: "Rooted in the epic Mahabharata, legend holds that the Pandavas, seeking absolution from Lord Shiva, built the original temple. The current stone structure has miraculously withstood centuries of harsh weather." },
            { category: "Architectural Marvel", content: "Constructed from massive, interlocking stone slabs without mortar, the temple's robust design is a testament to ancient engineering. Its sanctum houses a conical rock formation, worshipped as the Sadashiva form of Lord Shiva." },
            { category: "The Visitor Experience", content: "The journey to Kedarnath is a pilgrimage in itself, involving a trek through stunning Himalayan landscapes. The serene atmosphere creates a deeply immersive and tranquil spiritual experience." }
        ]
    },
    // --- New Temple Data Starts Here ---
    {
        id: 2,
        title: "Badrinath Temple: Abode of Vishnu",
        shortDescription: "Nestled between the Nar and Narayana mountain ranges, Badrinath is a vibrant shrine dedicated to Lord Vishnu, forming a key part of the Char Dham pilgrimage.",
        images: [badrinath1, badrinath2],
        info: {
            deity: "Lord Vishnu",
            location: "Badrinath, Uttarakhand",
            bestTime: "May to June & Sep to Oct",
            ticketPrice: "Free Entry",
            timing: "4:30 AM - 9:00 PM",
        },
        fullDescription: [
            { category: "Spiritual Importance", content: "Badrinath is revered as one of the 108 Divya Desams, holy shrines for Vaishnavites. The temple's vibrant facade and the presence of the Tapt Kund hot spring make it a unique spiritual hub." },
            { category: "Mythological Roots", content: "The area is rich in mythology, believed to be the place where Lord Vishnu performed austerity. The temple is said to have been re-established by Adi Shankaracharya in the 8th century." }
        ]
    },
    {
        id: 3,
        title: "Somnath Temple: The Eternal Shrine",
        shortDescription: "Located on the western coast of Gujarat, the Somnath Temple is the first among the twelve Jyotirlinga shrines of Shiva, symbolizing eternal faith and resilience through history.",
        images: [somnath1, somnath2],
        info: {
            deity: "Lord Shiva",
            location: "Prabhas Patan, Gujarat",
            bestTime: "October to March",
            ticketPrice: "Free Entry",
            timing: "6:00 AM - 10:00 PM",
        },
        fullDescription: [
            { category: "Historical Resilience", content: "The Somnath Temple has been destroyed and rebuilt several times throughout history, standing today as a powerful testament to India's cultural and spiritual endurance. Its seaside location adds to its majestic aura." },
            { category: "Architectural Grandeur", content: "Built in the Chalukya style of architecture, the temple's intricate carvings, silver doors, and impressive spire showcase remarkable craftsmanship. The evening sound-and-light show narrates its dramatic history." }
        ]
    },
    {
        id: 4,
        title: "Kashi Vishwanath: Heart of Varanasi",
        shortDescription: "Situated on the western bank of the holy river Ganga in Varanasi, the Kashi Vishwanath Temple is one of the most sacred and revered temples dedicated to Lord Shiva.",
        images: [kashi1, kashi2],
        info: {
            deity: "Lord Shiva",
            location: "Varanasi, Uttar Pradesh",
            bestTime: "October to March",
            ticketPrice: "Free Entry",
            timing: "3:00 AM - 11:00 PM",
        },
        fullDescription: [
            { category: "Spiritual Epicenter", content: "Kashi is considered the city of Lord Shiva, and a visit to this temple is believed to lead one on the path to liberation (moksha). The temple complex buzzes with a constant stream of devotees from around the world." },
            { category: "Cultural Significance", content: "The temple's gold-plated dome gleams over the ancient city's ghats. Its history is intertwined with the very essence of Sanatana Dharma, making it a pivotal center for rituals, philosophy, and learning." }
        ]
    },
    {
        id: 5,
        title: "Meenakshi Amman Temple: Divine Union",
        shortDescription: "Located in the heart of Madurai, Tamil Nadu, the Meenakshi Temple is a spectacular complex dedicated to Goddess Meenakshi (a form of Parvati) and her consort, Sundareswarar (a form of Shiva).",
        images: [meenakshi1, meenakshi2],
        info: {
            deity: "Goddess Meenakshi & Lord Sundareswarar",
            location: "Madurai, Tamil Nadu",
            bestTime: "October to March",
            ticketPrice: "Free Entry (Special Darshan extra)",
            timing: "5:00 AM - 12:30 PM & 4:00 PM - 10:00 PM",
        },
        fullDescription: [
            { category: "Dravidian Architecture", content: "The temple is a masterpiece of Dravidian architecture, famed for its 14 towering gopurams (gateway towers) covered in thousands of vibrant stone figures of gods, goddesses, and demons." },
            { category: "A Living Temple", content: "Unlike many historical monuments, the Meenakshi Temple is a bustling center of active worship and culture. The Hall of a Thousand Pillars and the sacred temple tank are architectural and spiritual highlights within the complex." }
        ]
    }
];