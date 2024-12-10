import React from 'react';

// Images for job roles (replace with actual paths)
import RefereeImage from './boxing.png';
import JudgeImage from './boxing.png';
import ProBoxerImage from './boxing.png';

const Jobroles = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-24 px-4 sm:px-6 lg:px-16">
      {/* Title Section */}
      <h2 className="text-center text-5xl font-extrabold text-gray-800 mb-16">
        Join <span className="text-teal-500">Beast Boxing</span> Team
      </h2>

      {/* Job Roles Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Role 1: Referee */}
        <div className="flex flex-col items-center bg-white shadow-xl rounded-lg p-8 transform transition-transform duration-300 hover:scale-105">
          <img src={RefereeImage} alt="Referee" className="w-32 h-32 mb-6 shadow-md rounded-full object-cover" />
          <h3 className="text-xl font-bold text-gray-800 mb-4">Referee</h3>
          <p className="text-center text-gray-600 mb-4">
            As a referee, you ensure fairness in the ring while prioritizing the safety of all participants.
          </p>
          <h4 className="text-teal-500 font-bold mb-2">Benefits:</h4>
          <ul className="list-disc list-inside text-gray-600">
            <li>Competitive salary with performance bonuses.</li>
            <li>Comprehensive training on the latest boxing rules and techniques.</li>
            <li>Opportunity to travel to international boxing events.</li>
            <li>Health and wellness benefits, including gym access.</li>
          </ul>
        </div>

        {/* Role 2: Judge */}
        <div className="flex flex-col items-center bg-white shadow-xl rounded-lg p-8 transform transition-transform duration-300 hover:scale-105">
          <img src={JudgeImage} alt="Judge" className="w-32 h-32 mb-6 shadow-md rounded-full object-cover" />
          <h3 className="text-xl font-bold text-gray-800 mb-4">Judge</h3>
          <p className="text-center text-gray-600 mb-4">
            As a judge, you will be responsible for ensuring the best boxer is crowned the winner through accurate scoring.
          </p>
          <h4 className="text-teal-500 font-bold mb-2">Benefits:</h4>
          <ul className="list-disc list-inside text-gray-600">
            <li>Lucrative salary with additional incentives.</li>
            <li>Access to exclusive boxing events.</li>
            <li>Opportunities to work alongside seasoned professionals in the boxing industry.</li>
            <li>Flexible working hours and remote opportunities for international bouts.</li>
          </ul>
        </div>

        {/* Role 3: Pro Boxer */}
        <div className="flex flex-col items-center bg-white shadow-xl rounded-lg p-8 transform transition-transform duration-300 hover:scale-105">
          <img src={ProBoxerImage} alt="Pro Boxer" className="w-32 h-32 mb-6 shadow-md rounded-full object-cover" />
          <h3 className="text-xl font-bold text-gray-800 mb-4">Pro Boxer</h3>
          <p className="text-center text-gray-600 mb-4">
            As a pro boxer, you will showcase your skills in the ring, with the opportunity to rise to the top of the boxing world.
          </p>
          <h4 className="text-teal-500 font-bold mb-2">Benefits:</h4>
          <ul className="list-disc list-inside text-gray-600">
            <li>High-paying contracts with sponsorship opportunities.</li>
            <li>Custom training programs with renowned coaches.</li>
            <li>Access to world-class facilities and medical support.</li>
            <li>Media exposure and promotional opportunities.</li>
            <li>Career growth with potential for international matches.</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Jobroles;
