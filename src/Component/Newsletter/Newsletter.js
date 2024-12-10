import React from 'react'; 
import newsletter from './newsletter.png';

function Newsletter() {
  return (
    <div className="flex justify-center items-center h-screen bg-green-100">
      <div className="w-full h-full flex flex-col justify-center items-center px-8 text-center rounded-2xl shadow-xl transition-transform transform hover:scale-105">
        <div className="flex flex-col items-center">
          <img
            src={newsletter}
            alt="Email Icon" 
            className="w-32 h-32 mb-6 transition-transform transform hover:scale-110" // Adjust size with hover effect
          />
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4">Join Our Community!</h2>
          <p className="text-gray-700 mb-8 text-lg leading-relaxed">
            
Join our community at Beast Boxing and be part of a movement that empowers athletes to reach their full potential and achieve success in the world of professional boxing.
          </p>
          <div className="w-full max-w-md flex mx-auto">
            <input
              type="email"
              placeholder="📧 Your email address"
              className="flex-grow px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-teal-400 transition duration-300"
            />
            <button className="bg-teal-500 text-white px-6 py-3 rounded-r-lg hover:bg-teal-600 transition duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
