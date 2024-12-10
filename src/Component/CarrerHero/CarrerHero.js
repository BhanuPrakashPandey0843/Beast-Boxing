import React from 'react';
import { useNavigate } from 'react-router-dom';

import referee from './referee.png';
import boxing from './boxing.png';
import redcard from './red-card.png';

const CarrerHero = () => {
  const navigate = useNavigate();  // Hook for navigation

  return (
    <div className="bg-gradient-to-b from-gray-900 via-black to-gray-900 min-h-screen text-white py-16 px-4">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 mb-6">
          <span className="text-white">Join</span> Us
        </h1>
        <p className="text-lg md:text-xl mt-2 font-light max-w-xl mx-auto leading-relaxed">
          Supporting you across your educational journey and pushing you to new limits.
        </p>
        <p className="text-md md:text-lg font-light mt-2">These are the best mentors on the planet.</p>
      </div>

      {/* Cards Section */}
      <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-3 px-4">
        {/* Card 1 */}
        <div className="transition-transform transform hover:scale-105 duration-300 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white border-opacity-40 hover:bg-opacity-30">
          <div className="flex justify-center mb-6">
            {/* Image Placeholder */}
            <img src={referee} alt="Referee" className="w-36 h-36 rounded-full" />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-center text-teal-300">REFEREE</h3>
          <p className="text-sm text-gray-200 text-center mb-4">
            General • Biology • Chemistry • Physics • Math
          </p>
          <p className="text-sm text-gray-300 text-center mb-6">
            Learn everything from foundational subjects with expert guidance.
          </p>
          <div className="flex justify-center">
            <button
              className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-blue-500 hover:to-teal-500 text-white py-3 px-6 rounded-full shadow-md transform transition-all duration-300"
              onClick={() => navigate('/judge')}
            >
              Apply Now
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="transition-transform transform hover:scale-105 duration-300 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white border-opacity-40 hover:bg-opacity-30">
          <div className="flex justify-center mb-6">
            {/* Image Placeholder */}
            <img src={boxing} alt="Boxer" className="w-36 h-36 rounded-full" />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-center text-teal-300">PRO BOXER</h3>
          <p className="text-sm text-gray-200 text-center mb-4">
            General • Biology • Chemistry • Physics • Math
          </p>
          <p className="text-sm text-gray-300 text-center mb-6">
            Dive deep into advanced topics with personalized learning paths.
          </p>
          <div className="flex justify-center">
            <button
              className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-blue-500 hover:to-teal-500 text-white py-3 px-6 rounded-full shadow-md transform transition-all duration-300"
              onClick={() => navigate('/boxing')}
            >
              Apply Now
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="transition-transform transform hover:scale-105 duration-300 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white border-opacity-40 hover:bg-opacity-30">
          <div className="flex justify-center mb-6">
            {/* Image Placeholder */}
            <img src={redcard} alt="Judge" className="w-36 h-36 rounded-full" />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-center text-teal-300">JUDGE</h3>
          <p className="text-sm text-gray-200 text-center mb-4">
            General • Biology • Chemistry • Physics • Math
          </p>
          <p className="text-sm text-gray-300 text-center mb-6">
            Unlock your potential with our top productivity tools and tips.
          </p>
          <div className="flex justify-center">
            <button
              className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-blue-500 hover:to-teal-500 text-white py-3 px-6 rounded-full shadow-md transform transition-all duration-300"
              onClick={() => navigate('/judge')}
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarrerHero;
