import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    name: "Bhanu Prakash Pandey",
  
    image: require("./Bhanu.jpg"),
    text: "Beast Boxing is a true game changer in the world of boxing promotions! What sets them apart is their focus on the well-being and financial success of their athletes. It’s not just about winning fights; they take a holistic approach, offering top-notch training, sponsorship opportunities, and even financial literacy to help boxers build sustainable careers. As a fan, it's refreshing to see a company genuinely invested in the long-term success of its fighters both inside and outside the ring. Beast Boxing is paving the way for the future of the sport. Highly recommend!",
  },
  {
    name: "Aman Kumar",
    
    image: "https://randomuser.me/api/portraits/men/31.jpg",
    text: "I've been following Beast Boxing for a while now, and I'm really impressed with how they prioritize the development of their athletes. The training programs are elite, and the financial guidance they offer is unmatched in the industry. It's clear that Beast Boxing cares about more than just the next match – they help fighters build careers that can last well beyond their time in the ring. The only reason I didn't give five stars is that I think they could expand their reach and offer more grassroots programs to young fighters. Otherwise, fantastic company that’s changing the game!",
  },
  {
    name: "Abishek",
    
    image: "https://randomuser.me/api/portraits/men/33.jpg",
    text: "Beast Boxing is doing something incredible for the sport of boxing. Their commitment to developing athletes holistically—offering not only elite training but also mentorship in branding, financial planning, and career development—is exactly what the industry needs. As a boxer myself, I can truly appreciate their forward-thinking approach. They aren’t just about getting you into big matches; they’re about ensuring long-term success. I’ve seen firsthand how they’ve helped fighters become financially independent and well-rounded individuals. Beast Boxing is the future of boxing, and I can’t wait to see how they continue to innovate!",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col justify-center items-center py-12">
      <h2 className="text-lg md:text-xl text-center font-semibold text-gray-400 tracking-wider uppercase mb-2">
        Testimonials
      </h2>
      <h1 className="text-3xl md:text-5xl text-center font-bold mb-6">
        Here’s what past <span className="text-teal-500">students</span> have to say.
      </h1>

      <div className="relative flex justify-center items-center">
        {/* Left Arrow */}
        <button
          onClick={prevTestimonial}
          className="absolute left-0 rounded-full p-2 bg-black text-white shadow-lg hover:bg-gray-800 transition duration-300 ease-in-out"
          aria-label="Previous testimonial"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Testimonial Card */}
        <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 flex flex-col justify-between items-center text-center transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl h-72 md:h-80">
          <img
            className="w-20 h-20 rounded-full border-4 border-teal-500 shadow-lg mb-4"
            src={testimonials[currentIndex].image}
            alt={`${testimonials[currentIndex].name}'s profile`}
          />
          <p className="text-gray-700 mb-4 flex-grow text-lg md:text-xl">{testimonials[currentIndex].text}</p>
          <h3 className="font-semibold text-lg text-gray-800">{testimonials[currentIndex].name}</h3>
          <span className="text-teal-500">{testimonials[currentIndex].school}</span>
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextTestimonial}
          className="absolute right-0 rounded-full p-2 bg-black text-white shadow-lg hover:bg-gray-800 transition duration-300 ease-in-out"
          aria-label="Next testimonial"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dots for Carousel */}
      
    </div>
  );
};

export default Testimonial;
