import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const sections = [
  {
    title: "Vedas",
    items: [
      { name: "Rigveda", link: "/rigveda" },
      { name: "Samaveda", link: "/samaveda" },
      { name: "Yajurveda", link: "/yajurveda" },
      { name: "Atharvaveda", link: "/atharvaveda" },
    ],
  },
  {
    title: "Itihasas",
    items: [
      { name: "Ramayana", link: "/ramayana" },
      { name: "Mahabharata", link: "/mahabharata" },
      { name: "Bhagavad Gita", link: "/gita" },
    ],
  },
  {
    title: "Upanishads",
    items: [
      { name: "Isha Upanishad", link: "/isha-upanishad" },
      { name: "Kena Upanishad", link: "/kena-upanishad" },
      { name: "Mundaka Upanishad", link: "/mundaka-upanishad" },
      { name: "Mandukya Upanishad", link: "/mandukya-upanishad" },
      { name: "Chandogya Upanishad", link: "/chandogya-upanishad" },
      { name: "Brihadaranyaka Upanishad", link: "/brihadaranyaka-upanishad" },
      { name: "Taittiriya Upanishad", link: "/taittiriya-upanishad" },
      { name: "Aitareya Upanishad", link: "/aitareya-upanishad" },
    ],
  },
  {
    title: "Smritis",
    items: [
      { name: "Manusmriti", link: "/manusmriti" },
      { name: "Yajnavalkya Smriti", link: "/yajnavalkya-smriti" },
      { name: "Narada Smriti", link: "/narada-smriti" },
      { name: "Parashara Smriti", link: "/parashara-smriti" },
    ],
  },
  {
    title: "Puranas",
    items: [
      { name: "Bhagavata Purana", link: "/bhagavata-purana" },
      { name: "Vishnu Purana", link: "/vishnu-purana" },
      { name: "Shiva Purana", link: "/shiva-purana" },
      { name: "Markandeya Purana", link: "/markandeya-purana" },
      { name: "Brahma Purana", link: "/brahma-purana" },
      { name: "Skanda Purana", link: "/skanda-purana" },
      { name: "Padma Purana", link: "/padma-purana" },
      { name: "Narada Purana", link: "/narada-purana" },
    ],
  },
  {
    title: "Granths",
    items: [
      { name: "Guru Granth Sahib", link: "/guru-granth-sahib" },
      { name: "Ramcharitmanas", link: "/ramcharitmanas" },
      { name: "Hanuman Chalisa", link: "/hanuman-chalisa" },
      { name: "Ashtavakra Gita", link: "/ashtavakra-gita" },
      { name: "Shankar Bhashya (Commentaries)", link: "/shankar-bhashya" },
    ],
  },
];

export default function Books() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="relative flex flex-col min-h-screen text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://www.chardham-pilgrimage-tour.com/assets/images/top-tourist-places-enroute-kedarnath-dham.webp" // Replace with your image path
          alt="Hinduism Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10">
        <Navbar />

        {/* Hero */}
        <section className="pt-20 pb-8 text-center px-4">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Hinduism Sacred Books
          </h1>
          <p className="mt-2 text-lg md:text-xl font-medium">
            Vedas • Upanishads • Puranas • Smritis • Granths
          </p>
        </section>

        {/* Content */}
        <section className="flex-1 max-w-7xl mx-auto w-full px-4 md:px-6 pb-10">
          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-10">
            {sections.map((section, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 shadow-lg hover:shadow-2xl transition">
                <h2 className="text-xl font-bold mb-3 border-b border-yellow-300 pb-2">
                  {section.title}
                </h2>
                <ul className="space-y-2">
                  {section.items.map((item, i) => (
                    <li key={i}>
                      <Link
                        to={item.link}
                        className="text-base hover:text-yellow-300 transition-colors duration-200"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Mobile Accordion */}
          <div className="md:hidden space-y-4">
            {sections.map((section, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl shadow-md">
                <button
                  onClick={() => toggleSection(idx)}
                  className="w-full flex justify-between items-center p-4 text-lg font-semibold"
                >
                  {section.title}
                  {openIndex === idx ? <FaMinus /> : <FaPlus />}
                </button>
                {openIndex === idx && (
                  <ul className="px-4 pb-3 space-y-2">
                    {section.items.map((item, i) => (
                      <li key={i}>
                        <Link
                          to={item.link}
                          className="text-base hover:text-yellow-300 transition"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <Outlet />
        </section>
      </div>
    </main>
  );
}
