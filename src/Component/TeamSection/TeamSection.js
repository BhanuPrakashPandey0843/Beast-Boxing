import React, { useState, useEffect } from 'react';

const TeamMemberCard = ({ member }) => (
  <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden group transform hover:scale-105 transition-transform duration-300 relative">
    <div className="w-full h-60 sm:h-72 lg:h-80 relative">
      <img
        src={member.image}
        alt={member.name}
        className="object-cover object-center w-full h-full group-hover:scale-105 transition-transform duration-300"
        onError={(e) => {
          e.target.onerror = null; 
          e.target.src = 'https://via.placeholder.com/300x300'; 
        }}
      />
    </div>
    <div className="p-6">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-xl font-semibold">{member.name}</h3>
        <a 
          href={member.linkedIn} 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-transparent border border-white text-white rounded-full py-1 px-3 transition duration-300 hover:bg-teal-500 hover:text-white"
        >
          LinkedIn
        </a>
      </div>
      <p className="text-teal-500 mb-2">{member.role}</p>
      <p className="text-gray-400">{member.description}</p>
    </div>
  </div>
);

const TeamSection = () => {
  
  const teamMembers = [
    { 
      name: 'Mr. Abhilash', 
      role: 'Owner', 
      image: 'https://th.bing.com/th/id/OIP.eXWcaYbEtO2uuexHM8sAwwHaHa?pid=ImgDet&rs=1',
      linkedIn: 'https://www.linkedin.com/in/bhanu-prakash-pandey',
      description: 'As the owner, Mr. Abhilash oversees the overall vision and strategy of the team, ensuring all operations are running smoothly.' 
    },
    { 
      name: 'Ioana Schwalger', 
      role: 'World PBC President', 
      image: require('../../assets/images/image11.jpg'),  
      linkedIn: 'https://www.linkedin.com/in/tabish-ahmad',
      description: 'Ioana Schwalger, as the World PBC President, leads international initiatives and advocates for the team on a global scale.' 
    },
    { 
      name: 'Arden Fatu', 
      role: 'Winner National Amateur Boxing', 
      image: require('../../assets/images/Untitled.png'),  
      linkedIn: 'https://www.linkedin.com/in/hamza-bin-majid',
      description: 'Arden Fatu is a champion boxer who inspires the team with his discipline and drive, pushing others to excel in their respective fields.' 
    },
    { 
      name: 'John Glozier', 
      role: 'Supervisor PCB', 
      image: require('../../assets/images/Capture.JPG'),
      linkedIn: 'https://www.linkedin.com/in/anant-dandotiya',
      description: 'John Glozier supervises the team’s PCB projects, ensuring technical precision and quality in all designs and solutions.' 
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleMembers, setVisibleMembers] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      setVisibleMembers(window.innerWidth < 640 ? 1 : 4);
    };
    
    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial value

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((currentIndex - 1 + teamMembers.length) % teamMembers.length);
  };

  const goToNext = () => {
    setCurrentIndex((currentIndex + 1) % teamMembers.length);
  };

  return (
    <section className="bg-black text-white py-16 px-4 lg:px-24 relative">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
        <div className="text-center sm:text-left mb-6 sm:mb-0">
          <h3 className="text-teal-500 font-bold text-lg uppercase">Our Team</h3>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            Who’s <span className="text-teal-500">behind</span> all this?
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto sm:mx-0">
            We’re a team of university students across the country with years of tutoring experience, helping students achieve top grades.
          </p>
        </div>
        {/* View All Team Button */}
        <div className="flex items-center justify-center sm:justify-start">
          <button 
            className="p-3 border border-white rounded-full bg-teal-500 hover:bg-teal-400 transition duration-300"
            onClick={() => window.location.href = '/ourteam'}
          >
            View All Team
          </button>
        </div>
      </div>

      {/* Team Cards with Navigation */}
      <div className="relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.slice(currentIndex, currentIndex + visibleMembers).map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>

        {/* Navigation Buttons (now visible on all views) */}
        <div className="flex justify-center mt-6">
          <button
            onClick={goToPrevious}
            className="mx-2 p-3 border border-white rounded-full bg-transparent hover:bg-gray-800 transition duration-300"
          >
            &#8592;
          </button>
          <button
            onClick={goToNext}
            className="mx-2 p-3 border border-white rounded-full bg-transparent hover:bg-gray-800 transition duration-300"
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
