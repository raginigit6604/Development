import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0b1437] text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Quick Link */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Link</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>› About Us</li>
            <li>› Contact Us</li>
            <li>› Privacy Policy</li>
            <li>› Terms & Condition</li>
            <li>› FAQs & Help</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt /> 123 Street, New York, USA
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt /> +012 345 67890
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope /> info@example.com
            </li>
          </ul>
          <div className="flex space-x-3 mt-4">
            <a href="#" className="bg-white text-[#0b1437] p-2 rounded-full">
              <FaTwitter />
            </a>
            <a href="#" className="bg-white text-[#0b1437] p-2 rounded-full">
              <FaFacebookF />
            </a>
            <a href="#" className="bg-white text-[#0b1437] p-2 rounded-full">
              <FaYoutube />
            </a>
            <a href="#" className="bg-white text-[#0b1437] p-2 rounded-full">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Gallery */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Gallery</h4>
          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <img
                key={num}
                src={`/img/${num}.jpg`}
                alt={`gallery${num}`}
                className="w-full h-16 object-cover rounded"
              />
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
          <p className="text-sm text-gray-300 mb-4">
            Dolor amet sit justo amet elitr clita ipsum elitr est.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="p-2 flex-grow rounded-l bg-white text-black text-sm outline-none"
            />
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 rounded-r text-sm">
              SignUp
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-sm text-gray-400 text-center">
        <p>
          © Your Site Name, All Right Reserved. Designed By{" "}
          <a href="#" className="text-cyan-400 hover:underline">
            HTML Codex
          </a>{" "}
          | Distributed By{" "}
          <a href="#" className="text-cyan-400 hover:underline">
            ThemeWagon
          </a>
        </p>
        <div className="flex justify-center space-x-6 mt-2">
          <a href="#" className="hover:text-white">
            Home
          </a>
          <a href="#" className="hover:text-white">
            Cookies
          </a>
          <a href="#" className="hover:text-white">
            Help
          </a>
          <a href="#" className="hover:text-white">
            FAQs
          </a>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 bg-cyan-500 hover:bg-cyan-600 text-white p-3 rounded"
      >
        ↑
      </button>
    </footer>
  );
};

export default Footer;
