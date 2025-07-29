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
  className="rounded-2xl h-150 shadow-2xl w-full max-w-lg md:max-w-xl object-cover"
/>
          </div>

          {/* Book Info */}
          <div className="space-y-4 sm:space-y-6">
            <h1 className="text-3xl sm:text-4xl font-bold text-yellow-800">Atharvaveda</h1>
            <p className="text-sm text-gray-500">
              Translated by <span className="font-semibold">Maurice Bloomfield</span>
            </p>

            <p className="text-gray-700 leading-relaxed text-justify text-sm sm:text-base">
             The Atharvaveda is the fourth and final Veda in the collection of ancient Hindu scriptures, following the Rigveda, Samaveda, and Yajurveda. Unlike the other three, which primarily focus on rituals, hymns, and chants to deities, the Atharvaveda delves into the practical aspects of human life.

It contains a wide range of hymns, spells, incantations, and philosophical reflections addressing everyday concerns—such as health, love, longevity, protection from evil forces, and even political success. The Atharvaveda is a blend of spirituality and science, often considered the earliest record of Indian medicine and healing practices, including references to herbs and natural remedies.

<br />
Composed in Vedic Sanskrit, it has around 730 hymns with over 6,000 mantras. It is attributed to sages like Atharvan and Angiras, from whom it takes its name. <br /> <br />

The Atharvaveda reveals a deep understanding of human psychology, social harmony, and the power of words, and it remains a rich source of spiritual and practical wisdom in Hindu tradition.
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
             Rishi Angiras is one of the most revered sages in Vedic tradition, often regarded as one of the Saptarishis (Seven Great Sages) and a prominent seer of the Atharvaveda. He is believed to have received divine knowledge directly from the gods and passed it down through sacred hymns.


            </p>
            <p className="text-gray-700 mt-4 text-sm sm:text-base">
             Angiras is known for his deep wisdom, spiritual discipline, and mastery over sacred fire rituals (yajnas). His teachings emphasize purity, truth, healing, and the power of sound and speech (mantras). Many hymns in the Rigveda and Atharvaveda are attributed to him and his lineage.

He is also considered a bridge between the divine and earthly realms, guiding kings and seekers alike on the path of righteousness and self-realization. In some traditions, he is also linked with cosmic order (ṛta) and is said to have played a vital role in shaping early Hindu philosophy.
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
