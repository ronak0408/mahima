import React from "react";
import { FaAmazon, FaMoneyBillWave } from "react-icons/fa";
// import { SiFlipkart } from "react-icons/si"; // ✅ Flipkart Icon
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

export default function Atharvaveda() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-white text-gray-800 py-10 px-4 sm:px-6 md:px-20 mt-15">
        {/* Main Book Card */}
        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-10 p-6 sm:p-8 md:p-12">
          {/* Book Cover */}
          <div className="flex justify-center items-center">
            <img
              src="https://www.poojn.in/wp-content/uploads/2025/04/Accessing-the-Atharva-Veda-Today-A-Practical-Guide.jpeg.jpg"
              alt="Atharvaveda Book"
              className="rounded-xl shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md object-contain"
            />
          </div>

          {/* Book Info */}
          <div className="space-y-4 sm:space-y-6">
            <h1 className="text-3xl sm:text-4xl font-bold text-yellow-800">Atharvaveda</h1>
            <p className="text-sm text-gray-500">
              Translated by <span className="font-semibold">Maurice Bloomfield</span>
            </p>

            <p className="text-gray-700 leading-relaxed text-justify text-sm sm:text-base">
              The Atharvaveda is a collection of hymns, charms, spells, and incantations, reflecting the daily life, health, and concerns of Vedic people. Unlike the other Vedas which are focused on rituals, the Atharvaveda includes topics like medicine, healing, peace, and social norms.
              It offers valuable insight into ancient Indian society and is often referred to as the "Veda of Magical Formulas".
            </p>

            {/* Book Meta */}
            <ul className="text-gray-600 space-y-1 text-sm">
              <li><strong>Genre:</strong> Vedic Hymns / Healing / Magic</li>
              <li><strong>Language:</strong> Sanskrit / Hindi / English</li>
              <li><strong>Pages:</strong> ~320</li>
              <li><strong>Publisher:</strong> Chaukhamba Sanskrit Pratishthan</li>
              <li className="flex items-center gap-2 text-base font-semibold text-green-700">
                <FaMoneyBillWave /> ₹349.00
              </li>
            </ul>

            {/* Purchase Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg font-medium transition"
              >
                <FaAmazon /> Buy on Amazon
              </a>
              <a
  href="#"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition"
>
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaLCnM46W8KLhgeBNB7arWH644X_hYmNfmJw&s"
    alt="Flipkart"
    className="h-6 w-auto"
  />
  Buy on Flipkart
</a>
            </div>
          </div>
        </div>

        {/* Author Section */}
        <div className="max-w-6xl mx-auto mt-12 sm:mt-16 bg-white rounded-3xl shadow-md p-6 sm:p-8 md:p-12 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-10">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2GQOK4-1_zOVutXO-hOZDEbth539qqeC09fDLHgGIg_vncdqKtYWz69rQ7NWxXDAl3V8&usqp=CAU"
            alt="Rishi Angiras"
            className="rounded-full w-32 h-32 sm:w-40 sm:h-40 object-cover border-4 border-yellow-400"
          />
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Rishi Angiras</h2>
            <p className="text-gray-700 mt-2 text-sm sm:text-base">
              Rishi Angiras is traditionally regarded as one of the authors and seers of the Atharvaveda. He was a sage of great wisdom and spiritual power, known for his knowledge of divine spells and fire rituals.
            </p>
            <p className="text-gray-700 mt-4 text-sm sm:text-base">
              His contributions to Vedic literature emphasize healing, protection, and peace. The Atharvaveda reflects his deep connection to practical and mystical aspects of life.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
