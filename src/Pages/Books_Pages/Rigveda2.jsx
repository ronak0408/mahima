import React from "react";
import { FaAmazon, FaMoneyBillWave } from "react-icons/fa";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

export default function Rigveda2() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-white text-gray-800 py-10 px-4 sm:px-6 md:px-20 mt-15">
        {/* Main Book Card */}
        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-10 p-6 sm:p-8 md:p-12">
          {/* Book Cover */}
          <div className="flex justify-center items-center">
            <img
              src="https://ebnw.net/wp-content/uploads/2017/01/Rig-Veda.jpg"
              alt="Rigveda Book"
              className="rounded-xl shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md h-80 sm:h-96 object-cover"
            />
          </div>

          {/* Book Info */}
          <div className="space-y-4 sm:space-y-6">
            <h1 className="text-3xl sm:text-4xl font-bold text-yellow-800">Rigveda</h1>
            <p className="text-sm text-gray-500">
              Translated by <span className="font-semibold">Swami Tejomayananda</span>
            </p>

            <p className="text-gray-700 leading-relaxed text-justify text-sm sm:text-base">
              The Rigveda is believed to have originated around 1500 BCE, although some scholars suggest a broader range between 1200–1700 BCE. It was born during the period of the early Vedic civilization, which flourished along the Sindhu (Indus) and Saraswati river systems, in what is now parts of Northwest India and Pakistan. <br /> The Rigveda was not written down initially but was transmitted orally through generations by Vedic sages (rishis). This oral tradition, known as "śruti" (meaning "that which is heard"), is considered divine revelation, as the hymns were believed to be heard or received by sages in deep meditation rather than composed by them.
              <br /><br />
              The hymns of the Rigveda were composed in Vedic Sanskrit, 
              <br /><br />
              Thus, the Rigveda’s origin marks not only the beginning of Hindu religious thought but also the earliest record of Indian culture, society, and philosophical inquiry.
            </p>

            {/* Book Meta */}
            <ul className="text-gray-600 space-y-1 text-sm">
              <li><strong>Genre:</strong> Vedic Scripture / Hymns</li>
              <li><strong>Language:</strong> Sanskrit / Hindi / English</li>
              <li><strong>Pages:</strong> ~350</li>
              <li><strong>Publisher:</strong> Chinmaya Prakashan</li>
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
            src="https://s3.wasabisys.com/thevaisnava-offload/wp-media-folder-thevaisnava-online-magazine/wp-content/uploads/2022/06/Vyasadeva-and-Lord-Ganesh.png"
            alt="Author"
            className="rounded-full w-32 h-32 sm:w-40 sm:h-40 object-cover border-4 border-yellow-400"
          />
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Mahararishi Veda Vyasa</h2>
            <p className="text-gray-700 mt-2 text-sm sm:text-base">
              Maharishi Ved Vyasa, also known simply as Vyasa, is one of the most revered sages in Indian tradition and is considered a literary and spiritual giant. He is credited with compiling and organizing the Vedas, dividing them into four parts—Rigveda, Samaveda, Yajurveda, and Atharvaveda—to make them more accessible to humanity. Because of this monumental task, he earned the title "Ved Vyasa", meaning "the one who divided the Vedas."
            </p>
            <p className="text-gray-700 mt-4 text-sm sm:text-base">
              Maharishi Ved Vyasa’s contributions go beyond mere literary achievements. He was a spiritual visionary, whose works emphasize dharma (righteous living), bhakti (devotion), jnana (wisdom), and karma (right action). His legacy lives on in every Hindu household through texts like the Bhagavad Gita and the Puranas.
              <br />
              In recognition of his wisdom and divine insight, Guru Purnima is celebrated in his honor every year, where spiritual seekers pay tribute to their teachers and gurus, starting with Maharishi Ved Vyasa as the Adi Guru, the first and foremost teacher in the spiritual lineage.
            </p>
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
      </div>
      <Footer />
    </>
  );
}
