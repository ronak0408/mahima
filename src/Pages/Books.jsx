import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";

const sections = [
  {
    title: "Vedas",
    items: ["Rigveda", "Samaveda", "Yajurveda", "Atharvaveda"],
  },
  {
    title: "Upavedas",
    items: ["Ayurveda", "Dhanurveda", "Gandharvaveda", "Arthashastra"],
  },
  {
    title: "Upanishads",
    items: [
      "Isha Upanishad",
      "Kena Upanishad",
      "Katha Upanishad",
      "Prashna Upanishad",
      "Mundaka Upanishad",
      "Mandukya Upanishad",
      "Taittiriya Upanishad",
      "Aitareya Upanishad",
      "Chandogya Upanishad",
      "Brihadaranyaka Upanishad",
      "Shvetashvatara Upanishad",
    ],
  },
  {
    title: "Smritis",
    items: [
      "Manusmriti",
      "Yajnavalkya Smriti",
      "Narada Smriti",
      "Parashara Smriti",
    ],
  },
  {
    title: "Puranas",
    items: [
      "Vishnu Purana",
      "Shiva Purana",
      "Bhagavata Purana",
      "Brahma Purana",
      "Padma Purana",
      "Vayu Purana",
      "Linga Purana",
      "Narada Purana",
      "Garuda Purana",
      "Skanda Purana",
      "Agni Purana",
      "Kurma Purana",
      "Matsya Purana",
      "Varaha Purana",
      "Brahmanda Purana",
      "Markandeya Purana",
      "Bhavishya Purana",
      "Brahmavaivarta Purana",
    ],
  },
  {
    title: "Itihasas",
    items: ["Ramayana", "Mahabharata (Bhagavad Gita included)"],
  },
  {
    title: "Other Granths",
    items: [
      "Yoga Sutras of Patanjali",
      "Brahma Sutras",
      "Dharma Shastras",
      "Tantras",
      "Agamas",
    ],
  },
];

export default function Books() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500">
      <Navbar />

      {/* HERO SECTION */}
      <section className="pt-20 pb-10 text-yellow-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-[0_3px_3px_rgba(0,0,0,0.4)]">
            Hinduism Sacred Books
          </h1>
          <p className="mt-2 text-lg md:text-xl text-yellow-100">
            Vedas • Upanishads • Puranas • Smritis • Granths
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="flex-1 text-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6 py-10">
            {sections.map((section, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-5 hover:bg-white/20 transition duration-300 hover:scale-105"
              >
                <h2 className="text-xl font-semibold mb-3 border-b border-yellow-300 pb-2">
                  {section.title}
                </h2>
                <ul className="space-y-1 text-sm text-yellow-100">
                  {section.items.map((item, i) => (
                    <li
                      key={i}
                      className="transition duration-300 hover:scale-105 hover:text-yellow-300"
                    >
                      <Link to={`/${item.replace(/\s+/g, "-").toLowerCase()}`}>
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Mobile Accordion */}
          <div className="md:hidden space-y-3 pb-8">
            {sections.map((section, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform"
              >
                <button
                  onClick={() => toggleSection(idx)}
                  className="w-full flex justify-between items-center p-4 font-semibold text-lg text-yellow-200"
                >
                  {section.title}
                  {openIndex === idx ? <FaMinus /> : <FaPlus />}
                </button>
                {openIndex === idx && (
                  <ul className="px-4 pb-3 text-sm space-y-1 text-yellow-100">
                    {section.items.map((item, i) => (
                      <li
                        key={i}
                        className="transition duration-300 hover:scale-105 hover:text-yellow-300"
                      >
                        <Link to={`/${item.replace(/\s+/g, "-").toLowerCase()}`}>
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
