import React, { useState, useEffect } from 'react';
import { HiHome, HiUserGroup, HiClipboardList, HiFlag, HiPhone, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-20 top-0 left-0 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-lg border-b border-gradient-to-r from-teal-500 to-gold-400 shadow-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto p-4 flex justify-between items-center mt-2">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src="logo.png"
            alt="Logo"
            className="h-14 w-14 mr-3 transition-transform duration-300 hover:scale-110 hover:drop-shadow-lg"
          />
          <h1 className="text-3xl font-bold text-white tracking-wide">Beast Boxing</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium text-white">
          <li>
            <a
              href="/home"
              className="hover:text-gold-400 transition-colors duration-300 hover:scale-110"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="hover:text-gold-400 transition-colors duration-300 hover:scale-110"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="/team"
              className="hover:text-gold-400 transition-colors duration-300 hover:scale-110"
            >
              Our Team
            </a>
          </li>
          <li>
            <a
              href="/gallary"
              className="hover:text-gold-400 transition-colors duration-300 hover:scale-110"
            >
              Gallery
            </a>
          </li>
          <li>
            <a
              href="/carrer"
              className="hover:text-gold-400 transition-colors duration-300 hover:scale-110"
            >
              Career
            </a>
          </li>
        </ul>

        {/* Desktop Dashboard Button */}
        <a
  href="/contact"
  className="hidden md:block bg-gradient-to-r from-teal-500 to-gold-400 px-6 py-2 rounded-full text-lg text-white transition-transform duration-300 hover:scale-110 shadow-lg hover:shadow-gold-400/50 transform -translate-x-1"
  aria-label="Contact Us"
>
  Contact Us
</a>

        {/* Hamburger Icon */}
        <div className="md:hidden" onClick={toggleMenu}>
          <button>
            <svg
              className="w-8 h-8 text-white transition-transform duration-300 hover:scale-110"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed top-0 right-0 w-64 bg-black h-full transition-transform transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } duration-300 ease-in-out shadow-lg`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h2 className="text-lg font-bold text-white">Menu</h2>
          <button onClick={closeMenu}>
            <HiX className="w-8 h-8 text-white" />
          </button>
        </div>
        <ul className="space-y-6 text-lg font-medium p-8 text-white">
          <li>
            <a
              href="/home"
              className="flex items-center hover:text-gold-400 transition-colors duration-300"
              onClick={closeMenu}
            >
              <HiHome className="mr-2" /> Home
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="flex items-center hover:text-gold-400 transition-colors duration-300"
              onClick={closeMenu}
            >
              <HiUserGroup className="mr-2" /> About Us
            </a>
          </li>
          <li>
            <a 
              href="/team"
              className="flex items-center hover:text-gold-400 transition-colors duration-300"
              onClick={closeMenu}
            >
              <HiClipboardList className="mr-2" /> Our Team
            </a>
          </li>
          <li>
            <a
              href="/gallary"
              className="flex items-center hover:text-gold-400 transition-colors duration-300"
              onClick={closeMenu}
            >
              <HiFlag className="mr-2" /> Gallery
            </a>
          </li>
          <li>
            <a
              href="/carrer"
              className="flex items-center hover:text-gold-400 transition-colors duration-300"
              onClick={closeMenu}
            >
              <HiFlag className="mr-2" /> Career
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="flex items-center hover:text-gold-400 transition-colors duration-300"
              onClick={closeMenu}
            >
              <HiPhone className="mr-2" /> Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
