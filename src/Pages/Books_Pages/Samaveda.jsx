import React from "react";
import { FaAmazon, FaMoneyBillWave } from "react-icons/fa";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

export default function Samaveda() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-white text-gray-800 py-10 px-4 sm:px-6 md:px-20 mt-15">
        {/* Main Book Card */}
        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-10 p-6 sm:p-8 md:p-12">
          {/* Book Cover */}
          <div className="flex justify-center items-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA8WiuvmLgsetsSW9hlClskboHyd7sELQJ5g&s"
              alt="Samaveda Book"
              className="rounded-xl shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md object-contain"
            />
          </div>

          {/* Book Info */}
          <div className="space-y-4 sm:space-y-6">
            <h1 className="text-3xl sm:text-4xl font-bold text-yellow-800">Samaveda</h1>
            <p className="text-sm text-gray-500">
              Translated by <span className="font-semibold">Ralph T. H. Griffith</span>
            </p>

            <p className="text-gray-700 leading-relaxed text-justify text-sm sm:text-base">
              The Samaveda is a collection of melodies and chants, primarily used during religious rituals by the priests of ancient India.
              It is the Veda of melodies and chants, and most of its verses are taken directly from the Rigveda but rearranged for musical rendering.
              It emphasizes the power of sound and rhythm in Vedic ceremonies.
            </p>

            {/* Book Meta */}
            <ul className="text-gray-600 space-y-1 text-sm">
              <li><strong>Genre:</strong> Vedic Hymns / Chanting</li>
              <li><strong>Language:</strong> Sanskrit / Hindi / English</li>
              <li><strong>Pages:</strong> ~280</li>
              <li><strong>Publisher:</strong> Motilal Banarsidass</li>
              <li className="flex items-center gap-2 text-base font-semibold text-green-700">
                <FaMoneyBillWave /> ₹299.00
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
                className="inline-flex justify-center items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/1/16/Flipkart_logo.png"
                  alt="Flipkart"
                  className="h-5 w-auto"
                />
                Buy on Flipkart
              </a>
            </div>
          </div>
        </div>

        {/* Author Section */}
        <div className="max-w-6xl mx-auto mt-12 sm:mt-16 bg-white rounded-3xl shadow-md p-6 sm:p-8 md:p-12 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-10">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2hgh1v2mLDWKtKvDm8HpM3E2_eZXH9EBuXdtWD3GaVRmc3olrZZmPphqkwhfQBx-Jk2A&usqp=CAU"
            alt="Maharishi Vyasa"
            className="rounded-full w-32 h-32 sm:w-40 sm:h-40 object-cover border-4 border-yellow-400"
          />
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Maharishi Atri</h2>
            <p className="text-gray-700 mt-2 text-sm sm:text-base">
              Maharishi Atri, the legendary sage, is credited with compiling the Samaveda from ancient oral traditions.
              His organization and classification of Vedic hymns laid the foundation for ritualistic chanting that became central to Vedic worship.
            </p>
            <p className="text-gray-700 mt-4 text-sm sm:text-base">
              The Samaveda highlights his deep understanding of music and spirituality and remains a cornerstone of India’s rich musical heritage.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
