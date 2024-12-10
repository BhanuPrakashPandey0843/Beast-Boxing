import React from 'react';
import { FaInstagram } from 'react-icons/fa';

const Contactus = () => {
  return (
    <div className="my-16">
      <div className="grid lg:grid-cols-2 gap-10 p-8 mx-auto w-full bg-white shadow-xl rounded-xl text-[#333] font-[sans-serif]">
        {/* Left Section - Contact Info */}
        <div className="space-y-6 px-6 md:px-10">
          <h2 className="text-lg md:text-xl font-semibold text-teal-500 tracking-wider uppercase">
            Contact Us
          </h2>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight text-gray-800">
            Got a Question? <br />
            <span className="text-teal-500 md:text-3xl font-bold">Hit us up.</span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
          For any inquiries or opportunities, contact Beast Boxing to join us in shaping the future of boxing and empowering athletes to achieve success both in and out of the ring.
          </p>

          {/* Email Section */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Email</h2>
            <ul className="flex items-center space-x-4">
              <div className="bg-gray-100 h-12 w-12 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="#007bff" viewBox="0 0 479.058 479.058">
                  <path d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z" />
                </svg>
              </div>
              <a href="mailto:beastboxingofficial@gmail.com" target="_blank" rel="noopener noreferrer" className="text-lg text-[#007bff] hover:underline hover:text-blue-600">
                <strong>Email Us</strong>
              </a>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Follow Us</h2>
            <ul className="flex space-x-4">
              <li className="bg-gray-100 h-12 w-12 rounded-full flex items-center justify-center hover:bg-gray-200">
                <a href="#!" aria-label="Facebook">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="#007bff" viewBox="0 0 24 24">
                    <path d="M6.812 13.937H9.33v9.312c0 .414.335.75.75.75l4.007.001a.75.75 0 0 0 .75-.75v-9.312h2.387a.75.75 0 0 0 .744-.657l.498-4a.75.75 0 0 0-.744-.843h-2.885c.113-2.471-.435-3.202 1.172-3.202 1.088-.13 2.804.421 2.804-.75V.909a.75.75 0 0 0-.648-.743A26.926 26.926 0 0 0 15.071 0c-7.01 0-5.567 7.772-5.74 8.437H6.812a.75.75 0 0 0-.75.75v4c0 .414.336.75.75.75zm.75-3.999h2.518a.75.75 0 0 0 .75-.75V6.037c0-2.883 1.545-4.536 4.24-4.536.878 0 1.686.043 2.242.087v2.149c-.402.205-3.976-.884-3.976 2.697v2.755c0 .414.336.75.75.75h2.786l-.312 2.5h-2.474a.75.75 0 0 0-.75.75V22.5h-2.505v-9.312a.75.75 0 0 0-.75-.75H7.562z" />
                  </svg>
                </a>
              </li>
              <li className="bg-gray-100 h-12 w-12 rounded-full flex items-center justify-center hover:bg-gray-200">
                <a href="#!" aria-label="Instagram">
                  <FaInstagram size={24} color="#007bff" />
                </a>
              </li>
              <li className="bg-gray-100 h-12 w-12 rounded-full flex items-center justify-center hover:bg-gray-200">
                <a href="#!" aria-label="Twitter">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="#007bff" viewBox="0 0 24 24">
                    <path d="M23.149 4.562a9.424 9.424 0 0 1-2.675.735A4.776 4.776 0 0 0 22.479 3c-.925.547-1.95.947-3.042 1.157a4.77 4.77 0 0 0-8.123 4.349 13.544 13.544 0 0 1-9.844-4.978 4.77 4.77 0 0 0 1.473 6.356 4.712 4.712 0 0 1-2.163-.597v.059c0 2.297 1.636 4.226 3.81 4.667-.397.108-.818.164-1.249.164-.305 0-.601-.029-.895-.085a4.77 4.77 0 0 0 4.446 3.305A9.54 9.54 0 0 1 1 19.54a13.426 13.426 0 0 0 7.29 2.143c8.765 0 13.568-7.258 13.568-13.547 0-.206 0-.412-.015-.616A9.66 9.66 0 0 0 23.149 4.56z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="flex flex-col justify-center px-8 md:px-10">
          <h2 className="text-lg md:text-xl font-semibold text-teal-500 tracking-wider uppercase">
            Send a Message
          </h2>
          <form className="space-y-6 mt-4">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 rounded-md p-4 w-full focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 rounded-md p-4 w-full focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="border border-gray-300 rounded-md p-4 w-full focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
            <button
              type="submit"
              className="bg-teal-500 text-white font-semibold rounded-md py-2 hover:bg-teal-600 transition duration-300 w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
