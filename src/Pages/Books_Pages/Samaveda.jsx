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
             The Samaveda is the third of the four Vedas in Hindu tradition, after the Rigveda and Yajurveda. It is often called the “Veda of Chants” because it consists mainly of melodic hymns meant to be sung rather than read or recited. Its name comes from the word "sāman", meaning melody or song.
             <br /><br />

While most of its verses are taken directly from the Rigveda, the Samaveda rearranges them and adds musical notations, turning them into chants used during yajnas (Vedic rituals). It is the foundation of Indian classical music and the first known attempt to structure spiritual knowledge in musical form.
<br />
The Samaveda played a vital role in ritual worship and temple traditions, helping priests (called udgātṛs) chant with precise rhythm and tone. It emphasizes the power of sound and vibration in connecting with the divine and maintaining cosmic harmony.
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
           Maharishi Atri is one of the Saptarishis (seven great sages) in Hindu tradition and a revered figure in Vedic literature. He is the author of several hymns in the Rigveda and is celebrated for his deep spiritual insight, austerity, and devotion.

Atri Rishi was the mind-born son of Brahma, the creator, and his name means “the one without enmity.” His wife, Anusuya, is renowned for her purity and virtue, and together they symbolize the ideal of dharmic living. Their son, Dattatreya, is considered an incarnation of the Trimurti — Brahma, Vishnu, and Shiva — and is worshipped as a divine sage.
            </p>
            <p className="text-gray-700 mt-4 text-sm sm:text-base">
              Maharishi Atri’s contributions to Vedic science, cosmology, and ethics are significant, and his life exemplifies self-discipline, meditation, and divine realization. He is also honored in many Puranas and epics for his role in guiding kings, gods, and other sages.
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
