import React, { useState, useEffect } from 'react';
import {
  HiHome,
  HiUserGroup,
  HiClipboardList,
  HiFlag,
  HiPhone,
  HiX,
} from 'react-icons/hi';

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
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 top-0 left-0 transition-all duration-500 ${
        isScrolled
          ? 'bg-gray-900 bg-opacity-90 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src="logo.png"
            alt="Logo"
            className="h-12 w-12 mr-4 transition-transform duration-500 hover:scale-125"
          />
          <h1 className="text-2xl md:text-4xl font-bold text-white tracking-wide">
            Beast Boxing
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium text-white">
          {[
            { href: '/home', label: 'Home', icon: HiHome },
            { href: '/about', label: 'About Us', icon: HiUserGroup },
            { href: '/team', label: 'Our Team', icon: HiClipboardList },
            { href: '/gallery', label: 'Gallery', icon: HiFlag },
            { href: '/career', label: 'Career', icon: HiFlag },
          ].map((item) => (
            <li
              key={item.href}
              className="group hover:scale-105 transition-transform duration-300"
            >
              <a
                href={item.href}
                className="flex items-center space-x-2 hover:text-teal-400 transition-colors duration-300"
              >
                <item.icon className="text-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="group-hover:underline">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Contact Button */}
        <a
          href="/contact"
          className="hidden md:block bg-gradient-to-r from-pink-500 to-yellow-500 px-6 py-2 rounded-full text-lg text-white font-semibold shadow-lg transition-transform duration-300 hover:scale-110"
          aria-label="Contact Us"
        >
          Contact Us
        </a>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-white transition-transform duration-300 hover:scale-125"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-8 h-8"
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

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed top-0 right-0 w-64 bg-gradient-to-b from-gray-800 to-black h-full transition-transform transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } duration-500 ease-in-out shadow-2xl`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h2 className="text-xl font-bold text-white">Menu</h2>
          <button onClick={closeMenu} aria-label="Close Menu">
            <HiX className="w-8 h-8 text-white hover:text-red-500 transition-colors duration-300" />
          </button>
        </div>
        <ul className="space-y-6 text-lg font-medium p-8 text-white">
          {[
            { href: '/home', label: 'Home', icon: HiHome },
            { href: '/about', label: 'About Us', icon: HiUserGroup },
            { href: '/team', label: 'Our Team', icon: HiClipboardList },
            { href: '/gallery', label: 'Gallery', icon: HiFlag },
            { href: '/career', label: 'Career', icon: HiFlag },
            { href: '/contact', label: 'Contact Us', icon: HiPhone },
          ].map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="flex items-center hover:text-teal-500 transition-colors duration-300"
                onClick={closeMenu}
              >
                <item.icon className="mr-2" /> {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
