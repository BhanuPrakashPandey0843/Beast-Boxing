import React from 'react';
import './HeroSection.css';

import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import image5 from '../../assets/images/image1.jpg';
import image2 from '../../assets/images/image2.jpg';
import image3 from '../../assets/images/image3.jpg';
import image4 from '../../assets/images/slide1.png';
import image1 from '../../assets/images/slide2.png';


const HeroSection = () => {
  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
<section
  className="relative bg-cover bg-center bg-no-repeat h-[150vh] pt-[150px]" // Adjusted padding-top
  style={{
    backgroundImage: "url('https://th.bing.com/th/id/OIP.UwEFPMcy6AH84PgEHqSNuAHaEo?rs=1&pid=ImgDetMain')",
  }}
>

      {/* Background overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white flex flex-col justify-center items-center h-full">
        {/* Main Heading */}
        <motion.h1
          className="text-4xl md:text-5xl lg:text-[5rem] font-extrabold"
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 0.6 }}
        >
          Championing Fighters, Building Legends <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500">
            Worldwide.
          </span>
        </motion.h1>

        {/* Subheading Paragraph */}
        <motion.p
          className="mt-4 text-gray-300 text-base md:text-lg"
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Unleash Your Power, Fight Hard.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          className="mt-8"
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a
            href="/contact"
            className="bg-teal-500 px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:bg-teal-600 transition-all duration-300"
            aria-label="Contact Us"
          >
            Contact Us
          </a>
        </motion.div>

        {/* Image Carousel */}
        <motion.div
          className="mt-12 relative w-full max-w-4xl glow-animation"
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            className="rounded-xl shadow-2xl"
          >
            {[image1, image2, image3, image4, image5].map((src, index) => (
              <SwiperSlide key={index}>
                <img
                  src={src || 'https://via.placeholder.com/400x400?text=Image+Missing'}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-[400px] object-cover rounded-xl"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
