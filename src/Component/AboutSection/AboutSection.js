import React, { useEffect } from 'react';
import MissionGif from './Mission.gif';
import VisionGif from './Vision.gif';
import AboutGif from './About.gif';

const AboutSection = () => {
  // Function to handle Intersection Observer for fade-in animations
  const handleIntersectionObserver = () => {
    const sections = document.querySelectorAll('.fade-in-section');
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 } // Trigger fade-in when 20% of the element is in view
    );
    sections.forEach(section => observer.observe(section));
  };

  // Initialize Intersection Observer on mount
  useEffect(() => {
    handleIntersectionObserver();
  }, []);

  return (
    <section className="relative py-16 bg-gradient-to-r from-gray-100 to-gray-50 w-full">
      <div className="max-w-full mx-auto px-6 lg:px-12 space-y-16">
        
        {/* About Us Section */}
        <div className="flex flex-col md:flex-row items-center gap-12 p-10 bg-white rounded-xl shadow-lg fade-in-section w-full">
          <div className="md:w-1/2 flex justify-center">
            <img
              src={AboutGif}
              alt="About Us"
              className="max-w-xs h-auto rounded-lg shadow-lg hover:scale-105 transform transition duration-500"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-extrabold text-teal-600 mb-4">About Us</h2>
            <p className="text-lg leading-relaxed text-gray-600">
              As a professional boxing promotion under Abhi's Boxing Laboratory LLP, Beast Boxing is dedicated to creating the best opportunities for professional boxers. Through our extensive training programs, we prepare athletes to compete in prestigious tournaments, where they can showcase their skills and earn substantial incomes.  
              Our mission is to ensure that professional boxers receive the best training, guidance, and exposure, enabling them to excel in the sport and build successful careers.
            </p>
          </div>
        </div>

        {/* Our Mission Section */}
        <div className="p-10 bg-gray-100 rounded-xl shadow-lg fade-in-section w-full">
        
          <h2 className="text-4xl font-extrabold text-teal-600 mb-4">Our Mission</h2>
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="md:w-1/2 flex justify-center">
              <img
                src={MissionGif}
                alt="Mission"
                className="max-w-xs h-auto rounded-lg shadow-lg hover:scale-105 transform transition duration-500"
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-lg leading-relaxed text-gray-600">
              Beast Boxing is driven to uplift the sport by providing platforms for talented professional boxers to shine on a national and international level. Our aim is to create not just world-class athletes but also a path for them to achieve financial success through their craft. We ensure that our fighters are trained rigorously, compete in top-tier tournaments, and have the opportunity to earn lucrative incomes through their performances.

              </p>
            </div>
          </div>
        </div>

        {/* Our Vision Section */}
        <div className="flex flex-col md:flex-row items-center gap-12 p-10 bg-white rounded-xl shadow-lg fade-in-section w-full">
          <div className="md:w-1/2 flex justify-center">
            <img
              src={VisionGif}
              alt="Vision"
              className="max-w-xs h-auto rounded-lg shadow-lg hover:scale-105 transform transition duration-500"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-extrabold text-teal-600 mb-4">Our Vision</h2>
            <p className="text-lg leading-relaxed text-gray-600">
              Beast Boxing envisions itself as a key player in professional boxing, where not only the athletes but also the sport itself grows in popularity and prestige. By nurturing talent from the grassroots to the professional level, we aim to establish a network where athletes are consistently provided with the best opportunities to succeed.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
