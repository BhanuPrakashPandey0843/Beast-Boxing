import React from 'react';

const HowItWorks = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-24 px-4 sm:px-6 lg:px-16">
      {/* Title Section */}
      <h2 className="text-center text-5xl font-extrabold text-gray-800 mb-16">
        How does it <span className="text-teal-500">work?</span>
      </h2>

      {/* Steps Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Step 1 */}
        <div className="flex flex-col items-center bg-white shadow-xl rounded-lg p-8 transform transition-transform duration-300 hover:scale-105">
          <div className="w-16 h-16 flex items-center justify-center bg-teal-500 text-white rounded-full mb-6 shadow-md">
            {/* Icon for step 1 */}
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
                d="M3 7v10a4 4 0 004 4h10a4 4 0 004-4V7a4 4 0 00-4-4H7a4 4 0 00-4 4z"
              ></path>
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">Fill In The Form</h3>
          <p className="text-center text-gray-600">
            Tell us about your situation and what kind of help you're looking for.
          </p>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center bg-white shadow-xl rounded-lg p-8 transform transition-transform duration-300 hover:scale-105">
          <div className="w-16 h-16 flex items-center justify-center bg-teal-500 text-white rounded-full mb-6 shadow-md">
            {/* Icon for step 2 */}
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
                d="M19 10l-7 7-7-7"
              ></path>
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">We'll Match You</h3>
          <p className="text-center text-gray-600">
            We’ll match you with the best person in our team to support you.
          </p>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center bg-white shadow-xl rounded-lg p-8 transform transition-transform duration-300 hover:scale-105">
          <div className="w-16 h-16 flex items-center justify-center bg-teal-500 text-white rounded-full mb-6 shadow-md">
            {/* Icon for step 3 */}
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
                d="M9 12l2 2 4-4"
              ></path>
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">Watch Your Success</h3>
          <p className="text-center text-gray-600">
            Watch your academic performance skyrocket with regular sessions.
          </p>
        </div>

      </div>
    </div>
  );
};

export default HowItWorks;
