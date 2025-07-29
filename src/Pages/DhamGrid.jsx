import React, { useState } from "react";

export default function DhamGrid() {
  const jyotirlingas = [
    "Somnath", "Mallikarjuna", "Mahakaleshwar", "Omkareshwar",
    "Kedarnath", "Bhimasankar", "Kashi Vishwanath", "Trimbakeshwar",
    "Vaidyanath", "Rameshwaram", "Grishneshwar"
  ];

  const shaktiPeethas1 = [
    "Jwala/Siddhida", "Dakshina Kali", "Kalmadhav", "Khamakya", "Devgrah/Kankleshwar",
    "Sravani", "Chamudeshwari/Jaya Durga", "Vimla/Kritteshwari", "Kumari Shakti",
    "Bhramri", "Shakti Dakshayani", "Gayatri Manibandh"
  ];

  const shaktiPeethas2 = [
    "Mahamayi", "Phullara", "Bahula", "Mahishmardini", "Avanti, Bairavparvat Ujjain",
    "Aparna", "Gandaki Chandi", "Bhramari", "Hinglaj", "Jayanti", "Jeshoreshwari",
    "Nagapooshan Amman Temple", "Mahashira"
  ];

  const shaktiPeethas3 = [
    "Uma at Mithila", "Nandini or Nandikeshwari", "Sarvashail/Rakini", "Mahishasuramardini",
    "Narmada/Shondesh", "Bhramaramba/Srisundari", "Maha Lakshmi", "Narayani",
    "Sugandha Shakti Peeth", "Tripura Sundari", "Mangal Chand", "Vishalakshi",
    "Kapalini of Vibhas"
  ];

  const charDham = ["Badrinath", "Dwarka", "Puri", "Rameswaram"];
  const otherSites = ["Amarnath Cave", "Golden Temple", "Tirupati Balaji", "Ajmer Sharif Dargah"];

  const Section = ({ title, items, index, openIndex, setOpenIndex }) => {
    const isOpen = openIndex === index;
    const toggle = () => setOpenIndex(isOpen ? null : index);

    return (
      <div className="border-b sm:border-none">
        <div
          className="flex justify-between items-center py-2 cursor-pointer sm:cursor-default sm:py-0"
          onClick={toggle}
        >
          <h2 className="font-bold text-base sm:text-lg text-white">{title}</h2>
          <span className="sm:hidden text-white text-xl">{isOpen ? "−" : "+"}</span>
        </div>
        <ul
          className={`${isOpen ? "block" : "hidden"} sm:block space-y-1 sm:space-y-2 text-white text-sm pl-4 mt-1 sm:mt-2`}
        >
          {items.map((item, idx) => (
            <li key={idx} className="hover:text-amber-200 cursor-pointer">{item}</li>
          ))}
        </ul>
      </div>
    );
  };

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://akm-img-a-in.tosshub.com/indiatoday/images/story/202504/kedarnath-dham-file-photo-pti-020423702-16x9.jpg?VersionId=JWU4gZjId3CuwcAduHLPQO_X5F_klamK&size=690:388')",
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/35"></div>

      {/* Content */}
      <div className="relative z-10 w-full p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 text-white">
          <Section title="Jyotirlingas (12)" items={jyotirlingas} index={0} openIndex={openIndex} setOpenIndex={setOpenIndex} />
          <Section title="Shakti Peethas (Part 1)" items={shaktiPeethas1} index={1} openIndex={openIndex} setOpenIndex={setOpenIndex} />
          <Section title="Shakti Peethas (Part 2)" items={shaktiPeethas2} index={2} openIndex={openIndex} setOpenIndex={setOpenIndex} />
          <Section title="Shakti Peethas (Part 3)" items={shaktiPeethas3} index={3} openIndex={openIndex} setOpenIndex={setOpenIndex} />
          <div>
            <Section title="Char Dham (4)" items={charDham} index={4} openIndex={openIndex} setOpenIndex={setOpenIndex} />
            <div className="mt-4 sm:mt-6">
              <Section title="Other Notable Sites" items={otherSites} index={5} openIndex={openIndex} setOpenIndex={setOpenIndex} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
