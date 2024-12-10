import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion

const HeroSection = () => {
  // Animation variants
  const headingVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const videoVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-[80vh] pt-20"
      style={{ backgroundImage: "url('https://th.bing.com/th/id/OIP.UwEFPMcy6AH84PgEHqSNuAHaEo?rs=1&pid=ImgDetMain')" }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white flex flex-col justify-center items-center h-full">
        {/* Main Heading with animation */}
        <motion.h1
          className="text-4xl md:text-5xl lg:text-[5rem] font-extrabold"
          initial="hidden"
          animate="visible"
          variants={headingVariants}
          transition={{ duration: 0.5 }}
        >
          Championing Fighters, Building Legends  <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500 text-[3rem] md:text-[4rem] lg:text-[5rem]">
          Worldwide.
          </span>
        </motion.h1>

        {/* Paragraph with animation */}
        <motion.p
          className="mt-2 text-gray-300 text-base md:text-lg"
          initial="hidden"
          animate="visible"
          variants={paragraphVariants}
          transition={{ duration: 0.5, delay: 0.3 }} // Delay for staggered effect
        >
          Unleash Your Power, Fight Hard.
        </motion.p>

        {/* CTA Button with animation */}
        <div className="mt-6">
          <motion.a
            href="/contact"
            className="bg-teal-500 px-6 py-2 text-md font-semibold rounded-full hover:bg-teal-600 transition-all duration-300"
            initial="hidden"
            animate="visible"
            variants={buttonVariants}
            transition={{ duration: 0.5, delay: 0.6 }} // Delay for staggered effect
            aria-label="Contact Us"
            whileHover={{ scale: 1.05, rotate: 3 }} // Added scale and rotate effect on hover
          >
            Contact Us
          </motion.a>
        </div>

        {/* Embedded Video Section with animation */}
        <motion.div
          className="mt-8 relative w-full max-w-4xl"
          initial="hidden"
          animate="visible"
          variants={videoVariants}
          transition={{ duration: 0.5, delay: 0.9 }} // Delay for staggered effect
        >
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/puHFeOPpxqk"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-xl shadow-lg aspect-video absolute left-1/2 transform -translate-x-1/2"
            style={{ top: "-20%", borderRadius: "30px" }} // Adjusted to position video upward
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
