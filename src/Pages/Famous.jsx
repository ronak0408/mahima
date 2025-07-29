import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import Navbar from "../Components/Navbar";

const sections = [
  {
    title: "North India",
    items: [
      "Varanasi", "Chitrakoot Dham", "Mathura Vrindavan", "Haridwar",
      "Vaishno Devi", "Kathmandu", "Gangtok", "Mount Kailash",
    ],
  },
  {
    title: "South India",
    items: [
      "Madurai", "Chennai", "Kanchipuram", "Tirupati",
      "Kanyakumari", "Kollur", "Chengannur", "Srisailam",
    ],
  },
  {
    title: "East India",
    items: ["Kolkata", "Guwahati", "Puri", "Bhubaneswar", "Jaipur", "Imphal", "Gangtok"],
  },
  {
    title: "West India",
    items: ["Kolhapur", "Mumbai", "Pune", "Ahmedabad", "Dwarka", "Mount Abu", "Udaipur"],
  },
  {
    title: "Global Northern Regions",
    items: ["Kyoto", "Athens", "Reykjavik", "Cusco"],
  },
  {
    title: "Global Southern Regions",
    items: ["Cusco", "Bali", "Mexico City", "Cape Town", "Sydney"],
  },
  {
    title: "Global Eastern Regions",
    items: ["Kyoto", "Bali", "Kathmandu", "Hanoi", "Seoul", "Manila"],
  },
  {
    title: "Global Western Regions",
    items: ["Athens", "Rome", "Paris", "London", "Mexico City", "Cusco"],
  },
];

export default function Famous() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="relative flex flex-col min-h-screen">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 "
        style={{
          backgroundImage: `url('https://akm-img-a-in.tosshub.com/indiatoday/images/story/202504/kedarnath-dham-file-photo-pti-020423702-16x9.jpg?VersionId=JWU4gZjId3CuwcAduHLPQO_X5F_klamK&size=690:388')`
          
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45 z-0"></div>

      {/* Content with z-10 */}
      <div className="relative z-10">
        <Navbar />

        {/* HERO SECTION */}
        <section className="text-yellow-400 pt-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-3xl font-bold">
              Most Visited Places City Wise
            </h1>
          </div>
        </section>

        {/* CONTENT */}
        <section className="text-white flex-1 py-8">
          <div className="max-w-7xl mx-auto px-4">
            {/* Desktop Grid */}
            <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
              {sections.map((section, idx) => (
                <div key={idx}>
                  <h2 className="text-3xl font-semibold mb-2">{section.title}</h2>
                  <ul className="space-y-0.5 text-sm">
                    {section.items.map((item, i) => (
                      <li key={i} className="hover:text-yellow-300 cursor-pointer">{item}</li>
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
                        <li key={i} className="hover:text-yellow-300 cursor-pointer">{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
