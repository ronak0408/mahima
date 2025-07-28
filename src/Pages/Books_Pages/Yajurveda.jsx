import React from "react";
import { FaAmazon, FaMoneyBillWave } from "react-icons/fa";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

export default function Yajurveda() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-white text-gray-800 py-10 px-4 sm:px-6 md:px-20 mt-15">
        {/* Main Book Card */}
        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-10 p-6 sm:p-8 md:p-12">
          {/* Book Cover */}
          <div className="flex justify-center items-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKFm9lSbDAUvFzD5yLo9kKM9i5Ekd8QappfQ&s"
              alt="Yajurveda Book"
              className="rounded-xl shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md object-contain"
            />
          </div>

          {/* Book Info */}
          <div className="space-y-4 sm:space-y-6">
            <h1 className="text-3xl sm:text-4xl font-bold text-yellow-800">Yajurveda</h1>
            <p className="text-sm text-gray-500">
              Translated by <span className="font-semibold">Devi Chand</span>
            </p>

            <p className="text-gray-700 leading-relaxed text-justify text-sm sm:text-base">
              The Yajurveda is primarily a compilation of ritual offering formulas that were said by a priest while an individual performed ritual actions such as those before the yajna fire. It contains the liturgy (mantras) needed to perform the sacrifices of the Vedic religion.
              The text is divided into two major branches: the *Shukla (White)* and the *Krishna (Black)* Yajurveda, each with multiple recensions.
            </p>

            {/* Book Meta */}
            <ul className="text-gray-600 space-y-1 text-sm">
              <li><strong>Genre:</strong> Vedic Ritual / Liturgy</li>
              <li><strong>Language:</strong> Sanskrit / Hindi / English</li>
              <li><strong>Pages:</strong> ~400</li>
              <li><strong>Publisher:</strong> Vijay Goel Publications</li>
              <li className="flex items-center gap-2 text-base font-semibold text-green-700">
                <FaMoneyBillWave /> ₹379.00
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
            src="https://static.langimg.com/photo/imgsize-253295,msid-91363347/navbharat-times.jpg"
            alt="Maharishi Yajnavalkya"
            className="rounded-full w-32 h-32 sm:w-40 sm:h-40 object-cover border-4 border-yellow-400"
          />
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Maharishi Yajnavalkya</h2>
            <p className="text-gray-700 mt-2 text-sm sm:text-base">
              Maharishi Yajnavalkya was a revered Vedic sage and is traditionally credited with significant portions of the *Shukla Yajurveda*.
              His profound insight into ritual practices and philosophical inquiries made him one of the greatest rishis of Vedic India.
            </p>
            <p className="text-gray-700 mt-4 text-sm sm:text-base">
              He is also featured prominently in the *Brihadaranyaka Upanishad* for his spiritual debates and teachings on the Self (Atman).
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
