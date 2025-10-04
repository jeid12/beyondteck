import React from "react";

// You can use react-icons for the social icons
import { FaInstagram, FaTwitter, FaLinkedin, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#331B03] w-full pt-16 pb-0">
      {/* Newsletter Section */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-[#7A4707] rounded-xl flex flex-col md:flex-row items-center justify-between py-16 px-8 md:px-16 mb-8">
          <h2 className="text-white text-4xl md:text-5xl font-serif mb-8 md:mb-0">
            Subscribe Newsletters
          </h2>
          <form className="flex w-full max-w-xl md:w-auto">
            <input
              type="email"
              placeholder="Enter an email"
              className="flex-1 px-6 py-4 rounded-l-md text-xl font-serif outline-none"
              style={{ border: "none" }}
            />
            <button
              type="submit"
              className="bg-[#F7921D] hover:bg-orange-600 text-white text-2xl font-serif px-8 py-4 rounded-r-md border-2 border-white border-l-0 transition-all"
            >
              Subscribe Now
            </button>
          </form>
        </div>
        {/* Links and social icons */}
        <div className="flex flex-col md:flex-row items-center justify-between text-white py-6">
          <div className="flex space-x-16 mb-6 md:mb-0">
            <a href="#" className="text-2xl font-serif hover:underline">About Us</a>
            <a href="#" className="text-2xl font-serif hover:underline">Service</a>
            <a href="#" className="text-2xl font-serif hover:underline">Portfolio</a>
            <a href="#" className="text-2xl font-serif hover:underline">Blog</a>
          </div>
          <div className="flex space-x-8 text-3xl">
            <a href="#" aria-label="Instagram" className="hover:text-[#F7921D]"><FaInstagram /></a>
            <a href="#" aria-label="Twitter" className="hover:text-[#F7921D]"><FaTwitter /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-[#F7921D]"><FaLinkedin /></a>
            <a href="#" aria-label="TikTok" className="hover:text-[#F7921D]"><FaTiktok /></a>
          </div>
        </div>
      </div>
      {/* White curved separator */}
      <div className="relative w-full h-24 overflow-hidden">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 left-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 100 Q720 180 1440 100 V120 H0 V100 Z"
            fill="#fff"
          />
        </svg>
      </div>
      {/* Bottom logo and copyright */}
      <div className="bg-white pt-8 pb-4 flex flex-col items-center">
        <div className="font-serif font-bold text-3xl md:text-4xl flex items-center mb-4">
          <span>BEY</span>
          <span className="text-[#F7921D] mx-1">OND</span>
          <span>TECH</span>
        </div>
        <p className="text-lg text-gray-700 font-serif">
          © Copyright {new Date().getFullYear()}, All Rights Reserved by BeyondTech
        </p>
      </div>
    </footer>
  );
}
