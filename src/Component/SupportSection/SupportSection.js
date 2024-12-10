import React from 'react';
import image from './image.png';
import vision from './vision.png';
import mission from './mission.png';
import about from './about.png';


const SupportSection = () => {
  return (
    <section className="bg-gray-50 py-24 px-4 lg:px-24 mt-40">
      <div className="text-center mb-12 animate-fade-in">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Our Aim and Aspirations <span className="text-teal-500">Aspirations.</span>
        </h2>
        <p className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
          Shaping the Future of Boxing <span className="text-teal-500"> Excellence, <br /> Empowerment</span> Through Training and Opportunity.
        </p>
        <p className="text-gray-600 mt-6 text-sm md:text-base lg:text-lg">
          But where do you get it from? There’s so many people out there, so who do you choose?
          That’s the eternal problem that many students and parents face over the course of the academic journey.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-10">
        {/* Card 1 */}
        <div className="bg-white p-8 shadow-lg rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex flex-col items-start space-y-6 w-full animate-fade-in-up">
        <img src={image} alt="Live Classes" className="h-16 w-16 transform transition-transform duration-500 hover:rotate-12" />

          <div className="text-left">
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 animate-fade-in-up-delay">
            Aim
            </h3>
            <p className="text-gray-600 mb-6 animate-fade-in-up-delay">
            Beast Boxing is driven to uplift the sport by providing platforms for talented professional boxers to shine on a national and international level. Our aim is to create not just world-class athletes but also a path for them to achieve financial success through their craft. We ensure that our fighters are trained rigorously, compete in top-tier tournaments, and have the opportunity to earn lucrative incomes through their performances.

            </p>
            <button className="block py-2 px-6 bg-transparent text-teal-500 border border-teal-500 rounded-full hover:bg-teal-500 hover:text-white transition-colors duration-300 hover:shadow-lg hover:shadow-teal-500/50 animate-pulse-on-hover">
              Read more
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-8 shadow-lg rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex flex-col items-start space-y-6 w-full animate-fade-in-up">
        <img src={vision} alt="Live Classes" className="h-16 w-16 transform transition-transform duration-500 hover:rotate-12" />

          <div className="text-left">
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 animate-fade-in-up-delay">
            Vision 
            </h3>
            <p className="text-gray-600 mb-6 animate-fade-in-up-delay">
            Beast Boxing envisions itself as a key player in professional boxing, where not only the athletes but also the sport itself grows in popularity and prestige. By nurturing talent from the grassroots to the professional level, we aim to establish a network where athletes are consistently provided with the best opportunities to succeed financially and professionally. Our vision is to see the boxers we train competing and excelling in the world’s biggest arenas.

            </p>
            <button className="block py-2 px-6 bg-transparent text-teal-500 border border-teal-500 rounded-full hover:bg-teal-500 hover:text-white transition-colors duration-300 hover:shadow-lg">
            Read more
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-8 shadow-lg rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex flex-col items-start space-y-6 w-full animate-fade-in-up">
        <img src={about} alt="Live Classes" className="h-16 w-16 transform transition-transform duration-500 hover:rotate-12" />

          <div className="text-left">
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 animate-fade-in-up-delay">
            About Us
            </h3>
            <p className="text-gray-600 mb-6 animate-fade-in-up-delay">
            As a professional boxing promotion under Abhi's Boxing Laboratory LLP, Beast Boxing is dedicated to creating the best opportunities for professional boxers. Through our extensive training programs, we prepare athletes to compete in prestigious tournaments, where they can showcase their skills and earn substantial incomes.  
           
            </p>
            <button className="block py-2 px-6 bg-transparent text-teal-500 border border-teal-500 rounded-full hover:bg-teal-500 hover:text-white transition-colors duration-300 hover:shadow-lg">
            Read more
            </button>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white p-8 shadow-lg rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex flex-col items-start space-y-6 w-full animate-fade-in-up">
        <img src={mission} alt="Live Classes" className="h-16 w-16 transform transition-transform duration-500 hover:rotate-12" />
          <div className="text-left">
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 animate-fade-in-up-delay">
            Our mission
            </h3>
            <p className="text-gray-600 mb-6 animate-fade-in-up-delay">
            Our mission is to ensure that professional boxers receive the best training, guidance, and exposure, enabling them to excel in the sport and build successful careers. We work closely with sponsors, trainers, and boxing organizations to create a roadmap for our athletes that leads not only to victory but also to financial independence. Beast Boxing is committed to pushing the boundaries of what’s possible in the world of boxing, turning raw talent into global superstars.
            </p>
            <button className="block py-2 px-6 bg-transparent text-teal-500 border border-teal-500 rounded-full hover:bg-teal-500 hover:text-white transition-colors duration-300 hover:shadow-lg">
              Read more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
