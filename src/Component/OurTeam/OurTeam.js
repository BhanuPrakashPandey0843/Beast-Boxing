import React, { useState } from 'react';
// Import images
import HussnainKhan from '../../assets/images/lona.jpg';
import HafsahQamar from '../../assets/images/John Glozier.jpg';
import AmanSabih from '../../assets/images/Capture.JPG';
// import AliAbrar from './assets/images/ali_abrar.jpg';
// import BurakAyan from './assets/images/burak_ayan.jpg';
// import TabishAhmed from './assets/images/tabish_ahmed.jpg';

const initialTeamMembers = [
  { name: 'Ioana  Schwalger', role: 'World PBC President', image: HussnainKhan, tag: 'Beast Boxing ' },
  { name: 'Arden Fatu ', role: 'Winner National Amateur Boxing', image: HafsahQamar, tag: 'Beast Boxing ' },
  { name: 'John Glozier', role: 'Supervisor PCB', image: AmanSabih, tag: 'Beast Boxing ' },
];

const additionalTeamMembers = [];

const OurTeam = () => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 via-black to-gray-900 min-h-screen text-white py-16 px-4">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 mb-4">
          <span className="text-white">Our</span> Team
        </h1>
        <p className="text-md md:text-lg mt-2 font-light max-w-xl mx-auto">
          Supporting you across your educational journey and pushing you to new limits.
        </p>
        <p className="text-md md:text-lg font-light">These are the best mentors on the planet.</p>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {initialTeamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-700 relative overflow-hidden duration-300"
          >
            <div className="w-full h-64 rounded-lg overflow-hidden mb-4 bg-gray-700 flex items-center justify-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-2xl font-semibold text-teal-400">{member.name}</h3>
              <p className="text-gray-300 text-base mb-2">{member.role}</p>
              <span className="bg-teal-400 text-black px-3 py-1 rounded-full text-xs absolute top-4 right-4">
                {member.tag}
              </span>
            </div>
          </div>
        ))}
        {showMore &&
          additionalTeamMembers.map((member, index) => (
            <div
              key={index + initialTeamMembers.length}
              className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-700 relative overflow-hidden duration-300"
            >
              <div className="w-full h-64 rounded-lg overflow-hidden mb-4 bg-gray-700 flex items-center justify-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-2xl font-semibold text-teal-400">{member.name}</h3>
                <p className="text-gray-300 text-base mb-2">{member.role}</p>
                <span className="bg-teal-400 text-black px-3 py-1 rounded-full text-xs absolute top-4 right-4">
                  {member.tag}
                </span>
              </div>
            </div>
          ))}
      </div>

      {/* View All Button */}
      <div className="flex justify-center mt-10">
        <button
          onClick={handleShowMore}
          className="px-8 py-3 md:px-10 md:py-4 bg-gradient-to-r from-teal-400 to-blue-500 text-black rounded-full text-lg transition-transform transform hover:scale-110 hover:shadow-lg duration-300"
        >
          {showMore ? 'Show Less' : 'View ALL'}
        </button>
      </div>
    </div>
  );
};

export default OurTeam;
