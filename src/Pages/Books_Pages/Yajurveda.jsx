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
              src="https://gurukul99.com/wp-content/uploads/2021/06/yajurved-in-hindi.png"
              alt="Yajurveda Book"
              className="rounded-xl h-130 shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md object-cover"
            />
          </div>

          {/* Book Info */}
          <div className="space-y-4 sm:space-y-6">
            <h1 className="text-3xl sm:text-4xl font-bold text-yellow-800">Yajurveda</h1>
            <p className="text-sm text-gray-500">
              Translated by <span className="font-semibold">Devi Chand</span>
            </p>

            <p className="text-gray-700 leading-relaxed text-justify text-sm sm:text-base">
             The Yajurveda is the third of the four Vedas and serves as a practical guide for performing Vedic rituals and sacrifices. Unlike the Rigveda, which focuses on hymns, or the Samaveda, which emphasizes chants, the Yajurveda is primarily in prose and provides precise instructions for conducting yajnas (sacrificial ceremonies). It is divided into two major branches: the Shukla (White) Yajurveda, which has a clear separation of verses and explanations, and the Krishna (Black) Yajurveda, where the verses and commentary are mixed. Rich in mantras and ritual procedures, the Yajurveda played a vital role in the duties of Vedic priests and continues to influence Hindu worship practices today.
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
             Maharishi Vajasaneya, also known as Vajasaneyi or Yajnavalkya, was a revered sage in ancient India and is best known for his association with the Shukla Yajurveda (White Yajurveda), also called the Vajasaneyi Samhita—named after him. He was a profound philosopher, spiritual teacher, and a central figure in several Upanishads, especially the Brihadaranyaka Upanishad, where he is portrayed as a master of metaphysical knowledge and deep spiritual insight.
            </p>
            <p className="text-gray-700 mt-4 text-sm sm:text-base">
             Yajnavalkya was known for his sharp intellect and fearless debates with other sages and scholars. His teachings emphasized the nature of the Self (Atman), the importance of inner realization, and detachment from material desires as the path to liberation (moksha). He also introduced significant ideas about ethics, dharma, and the imperishable nature of the soul, which became foundational concepts in later Hindu philosophy.
             <br /><br />
             Maharishi Yajnavalkya is remembered not only for his contributions to the Vedas but also for his visionary insights that shaped the core of Vedantic thought.
            </p>
          </div>
          
        </div>
      </div>
         {/* Rating & Reviews Section */}
        <div className="max-w-6xl mx-auto mt-12 sm:mt-16 bg-white rounded-3xl shadow-md p-6 sm:p-8 md:p-12 space-y-8">
          {/* Rating */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Overall Rating</h2>
            <div className="flex items-center gap-2 text-yellow-500 text-lg sm:text-xl">
              {[...Array(4)].map((_, i) => (
                <span key={i}>★</span>
              ))}
              <span>☆</span>
              <span className="text-gray-700 text-sm sm:text-base ml-2">(4.5 out of 5)</span>
            </div>
          </div>

          {/* Reviews */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">Reviews</h2>

            <div className="border-b border-gray-200 pb-4 mb-4">
              <p className="font-semibold text-gray-800">Ananya Sharma</p>
              <div className="text-yellow-500 text-sm">★★★★☆</div>
              <p className="text-gray-700 text-sm sm:text-base mt-1">
                A beautiful and thoughtful translation of the Rigveda. Swami Tejomayananda's work is both spiritual and practical.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-4 mb-4">
              <p className="font-semibold text-gray-800">Ravi Deshmukh</p>
              <div className="text-yellow-500 text-sm">★★★★★</div>
              <p className="text-gray-700 text-sm sm:text-base mt-1">
                The book provides deep insights into ancient wisdom with clear commentary. Highly recommend for anyone interested in Vedic texts.
              </p>
            </div>

            <div>
              <p className="font-semibold text-gray-800">Meena Iyer</p>
              <div className="text-yellow-500 text-sm">★★★★☆</div>
              <p className="text-gray-700 text-sm sm:text-base mt-1">
                A bit dense in some places, but overall a powerful and enlightening read.
              </p>
            </div>
          </div>

          {/* Review Submission Form */}
          <div className="mt-10 border-t pt-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Leave a Review</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
                <select
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                >
                  <option value="">Select rating</option>
                  <option value="5">★★★★★ (5)</option>
                  <option value="4">★★★★☆ (4)</option>
                  <option value="3">★★★☆☆ (3)</option>
                  <option value="2">★★☆☆☆ (2)</option>
                  <option value="1">★☆☆☆☆ (1)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Review</label>
                <textarea
                  rows="4"
                  placeholder="Share your thoughts about the book..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-2 rounded-lg transition"
                >
                  Submit Review
                </button>
              </div>
            </form>
          </div>
        </div>
      <Footer />
    </>
  );
}
