import React from "react";
import { FaAmazon, FaMoneyBillWave } from "react-icons/fa";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

export default function Rigveda2() {
  return (
    <>
    <Navbar></Navbar>
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-white text-gray-800 py-10 px-4 sm:px-6 md:px-20 mt-15">
      {/* Main Book Card */}
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-10 p-6 sm:p-8 md:p-12">
        {/* Book Cover */}
        <div className="flex justify-center items-center">
          <img
            src="https://ebnw.net/wp-content/uploads/2017/01/Rig-Veda.jpg"
            alt="Rigveda Book"
            className="rounded-xl shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md object-contain"
          />
        </div>

        {/* Book Info */}
        <div className="space-y-4 sm:space-y-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-yellow-800">Rigveda</h1>
          <p className="text-sm text-gray-500">
            Translated by <span className="font-semibold">Swami Tejomayananda</span>
          </p>

          <p className="text-gray-700 leading-relaxed text-justify text-sm sm:text-base">
            The Rigveda is one of the oldest known scriptures of humankind, composed in ancient Sanskrit. It consists of hymns dedicated
            to various deities and reflects the spiritual and philosophical thought of early Vedic society.
            It is considered foundational to the development of Hinduism and Indian culture.
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
            A highly respected spiritual teacher and disciple of Swami Chinmayananda, Swami Tejomayananda has translated and explained
            the Rigveda in a way that resonates with modern seekers. His teachings reflect clarity, devotion, and deep insight into Vedic knowledge.
          </p>
          <p className="text-gray-700 mt-4 text-sm sm:text-base">
            He has authored over 100 books and continues to inspire thousands globally through his Vedantic discourses.
          </p>
        </div>
      </div>

      {/* Footer */}
     
    </div>
     <Footer></Footer>
    </>
    
  );
}
