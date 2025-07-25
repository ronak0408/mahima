import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative text-white w-full overflow-hidden min-h-[600px]">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url('https://nonprod-media.webdunia.com/public_html/_media/en/img/article/2021-05/24/full/1621850451-679.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Content Grid */}
      <div className="relative z-10 px-6 md:px-16 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-sm">
        {/* Brand + Social */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Dham Mahima</h2>
          <h3 className="text-xl font-bold mb-4">Follow us</h3>
          <div className="flex flex-wrap gap-4 text-2xl">
            <a href="#" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f hover:text-yellow-500"></i>
            </a>
            <a href="#" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-x-twitter hover:text-yellow-500"></i>
            </a>
            <a href="#" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram hover:text-yellow-500"></i>
            </a>
            <a href="#" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube hover:text-yellow-500"></i>
            </a>
            <a href="#" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in hover:text-yellow-500"></i>
            </a>
            <a href="#" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp hover:text-yellow-500"></i>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-yellow-500">Quick Links</h3>
          <ul className="space-y-2 font-semibold">
            <li><a href="#" className="hover:underline hover:text-yellow-400">Home</a></li>
            <li><a href="/dhams" className="hover:underline hover:text-yellow-400">Dhams</a></li>
            <li><a href="/famous" className="hover:underline hover:text-yellow-400">Famous</a></li>
            {/* <li><a href="#" className="hover:underline hover:text-yellow-400">Pilgrimage Guides</a></li> */}
            <li><a href="/about" className="hover:underline hover:text-yellow-400">About</a></li>
            <li><a href="#" className="hover:underline hover:text-yellow-400">FAQs</a></li>
            <li><a href="/blogs" className="hover:underline hover:text-yellow-400">Dham Mahima Blogs</a></li>
          </ul>
        </div>

        {/* Connect With Us */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-yellow-500">Connect With Us</h3>
          <ul className="space-y-2 font-semibold">
            <li><a href="#" className="hover:underline hover:text-yellow-400">Email Us</a></li>
            <li><a href="#" className="hover:underline hover:text-yellow-400">Whatsapp Updates</a></li>
            <li><a href="#" className="hover:underline hover:text-yellow-400">YouTube</a></li>
            <li><a href="#" className="hover:underline hover:text-yellow-400">Instagram</a></li>
            <li><a href="#" className="hover:underline hover:text-yellow-400">Facebook</a></li>
            <li><a href="#" className="hover:underline hover:text-yellow-400">Twitter (X)</a></li>
          </ul>
        </div>

        {/* Donations */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-yellow-500">Support & Donations</h3>
          <ul className="space-y-2 font-semibold">
            <li><a href="#" className="hover:underline hover:text-yellow-400">Sponsor a Puja</a></li>
            <li><a href="#" className="hover:underline hover:text-yellow-400">Offer Flowers to Temples</a></li>
            <li><a href="#" className="hover:underline hover:text-yellow-400">Help Preserve Sacred Places</a></li>
          </ul>
        </div>
      </div>

      {/* Shloka */}
      <div className="relative text-center text-yellow-500 text-xl md:text-2xl font-semibold px-6 md:px-20 leading-relaxed z-10">
        <p>
          यत्र यत्र रघुनाथकीर्तनं तत्र तत्र कृतमस्तकांजलिम् ।<br />
          बाष्पवारि परिपूर्ण लोचनं मारुतिं नमत राक्षसांतकम् ।।
        </p>
        <p className="mt-2 text-base  italic ">
          (Wherever the praises of Lord Rama are sung, Hanuman is present with bowed head and tear-filled eyes. Salutations to him!)
        </p>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-white/50  text-sm text-center py-4 px-4 mt-10">
        <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-4 space-y-2 sm:space-y-0">
           <Link to="/termsOfUse" className="hover:underline">Terms of Use</Link>
          <span className="hidden sm:inline">|</span>
         <Link to="/privacyPolicy" className="hover:underline">Privacy Policy</Link>
          <span className="hidden sm:inline">|</span>
          <a href="#" className="hover:underline">Contact Us</a>
        </div>
        <p className="mt-2 text-xs">© Dham Mahima, Vedantra AI</p>
      </div>

      {/* Vertical Button */}
      {/* <div className="fixed right-3 top-1/2 z-20 ">
        <button className="bg-red-600 text-white px-3 py-2 font-bold text-l tracking-wider transform rotate-90 origin-right hover:bg-red-700">
          Book Your Travel
        </button>
      </div> */}
    </footer>
  );
}
