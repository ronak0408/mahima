import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import Navbar from "../Components/Navbar";

const sections = [
  {
    title: "North India",
    items: [
      "Himachal Pradesh",
      "Uttarakhand",
      "Jammu & Kashmir",
      "Rajasthan",
      "Punjab",
      "Uttar Pradesh",
      "Delhi",
    ],
  },
  {
    title: "South India",
    items: [
      "Kerala",
      "Karnataka",
      "Tamil Nadu",
      "Andhra Pradesh",
      "Telangana",
      "Puducherry (Pondicherry)",
    ],
  },
  {
    title: "East India",
    items: [
      "West Bengal",
      "Odisha",
      "Jharkhand",
      "Bihar",
      "Sikkim",
      "Andaman and Nicobar Islands",
    ],
  },
  {
    title: "West India",
    items: [
      "Maharashtra",
      "Goa",
      "Gujarat",
      "Rajasthan (Western Region)",
      "Madhya Pradesh (Western Region)",
    ],
  },
];


export default function Trekking() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />

      {/* HERO SECTION */}
      <section className="bg-orange-500 text-yellow-400 pt-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-3xl font-bold">
            Most Visited Places City Wise
          </h1>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-orange-500 text-white flex-1">
        <div className="max-w-7xl mx-auto px-4">
          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6 py-8">
            {sections.map((section, idx) => (
              <div key={idx}>
                <h2 className="text-lg font-semibold mb-2">{section.title}</h2>
                <ul className="space-y-0.5 text-sm">
                  {section.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Mobile Accordion */}
          <div className="md:hidden space-y-2">
            {sections.map((section, idx) => (
              <div key={idx} className="border-b border-white">
                <button
                  onClick={() => toggleSection(idx)}
                  className="w-full flex justify-between items-center p-3 text-left font-semibold"
                >
                  {section.title}
                  {openIndex === idx ? <FaMinus /> : <FaPlus />}
                </button>
                {openIndex === idx && (
                  <ul className="px-3 pb-2 text-sm space-y-0.5">
                    {section.items.map((item, i) => (
                      <li key={i}>{item}</li>
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
