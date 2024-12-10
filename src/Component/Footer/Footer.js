import React from 'react';
import logo from '../Footer/logo.png'; // Ensure the path is correct
import { FaLinkedin, FaInstagram, FaGoogle, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Contact Section */}
          <div className="flex flex-col items-start text-left mb-8 md:mb-0">
            <a href="/contact" className="mb-4">
              <img src={logo} alt="Logo" className="h-24 md:h-36 w-auto" />
            </a>
            <p className="text-gray-400 text-base leading-relaxed mb-6">
              Ready to elevate your boxing promotion to the next level? Let's connect!
            </p>
            <a
              href="mailto:abhisboxinglaboratory@gmail.com"
              className="py-3 px-6 bg-teal-500 text-black rounded-full shadow-lg text-sm font-semibold transition-all duration-300 hover:bg-teal-600 hover:scale-105"
              aria-label="Contact Us"
            >
              Contact Us
            </a>
          </div>

          {/* Pages Section */}
          <div className="flex flex-col items-start text-left">
            <h4 className="text-lg font-semibold mb-4 text-teal-500">Pages</h4>
            <ul className="space-y-2">
              <li><a href="/home" className="text-gray-300 text-sm hover:text-teal-400">Home</a></li>
              <li><a href="/about" className="text-gray-300 text-sm hover:text-teal-400">About</a></li>
              <li><a href="/team" className="text-gray-300 text-sm hover:text-teal-400">Our Team</a></li>
              <li><a href="/career" className="text-gray-300 text-sm hover:text-teal-400">Career</a></li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="flex flex-col items-start text-left">
            <h4 className="text-lg font-semibold mb-4 text-teal-500">Contact Us</h4>
            <ul className="space-y-2">
              <li><a href="https://www.linkedin.com/in/beast-boxing-9911aa336/" className="text-gray-300 text-sm hover:text-teal-400">LinkedIn</a></li>
              <li><a href="https://www.instagram.com/" className="text-gray-300 text-sm hover:text-teal-400">Instagram</a></li>
              <li><a href="https://facebook.com/" className="text-gray-300 text-sm hover:text-teal-400">Facebook</a></li>
              <li><a href="mailto:beastboxingofficial@gmail.com" className="text-gray-300 text-sm hover:text-teal-400">Gmail</a></li>
            </ul>
          </div>

          {/* Services Section */}
          <div className="flex flex-col items-start text-left">
            <h4 className="text-lg font-semibold mb-4 text-teal-500">What We Do</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 text-sm hover:text-teal-400">Organize Events</a></li>
              <li><a href="/" className="text-gray-300 text-sm hover:text-teal-400">Train Students</a></li>
              <li><a href="/" className="text-gray-300 text-sm hover:text-teal-400">Marketing</a></li>
              <li><a href="/" className="text-gray-300 text-sm hover:text-teal-400">User Guide</a></li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="flex flex-col items-start text-left">
            <h4 className="text-lg font-semibold mb-4 text-teal-500">Follow Us</h4>
            <div className="flex space-x-4 mt-2">
              <a
                href="https://www.linkedin.com/in/beast-boxing-9911aa336/"
                className="w-10 h-10 rounded-full bg-gray-800 flex justify-center items-center hover:bg-teal-500 hover:scale-105 transition duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-white text-lg" />
              </a>
              <a
                href="https://www.instagram.com/"
                className="w-10 h-10 rounded-full bg-gray-800 flex justify-center items-center hover:bg-teal-500 hover:scale-105 transition duration-300"
                aria-label="Instagram"
              >
                <FaInstagram className="text-white text-lg" />
              </a>
              <a
                href="mailto:beastboxingofficial@gmail.com"
                className="w-10 h-10 rounded-full bg-gray-800 flex justify-center items-center hover:bg-teal-500 hover:scale-105 transition duration-300"
                aria-label="Gmail"
              >
                <FaGoogle className="text-white text-lg" />
              </a>
              <a
                href="https://wa.me/919356514284?text=Hello!%20I'm%20interested%20in%20your%20services"
                className="w-10 h-10 rounded-full bg-gray-800 flex justify-center items-center hover:bg-teal-500 hover:scale-105 transition duration-300"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="text-white text-lg" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-12 border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <span className="text-sm text-gray-500">
              © <a href="https://www.linkedin.com/in/beast-boxing-9911aa336/" className="text-teal-500 hover:text-teal-400">Beast Boxing</a> 2024, All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
