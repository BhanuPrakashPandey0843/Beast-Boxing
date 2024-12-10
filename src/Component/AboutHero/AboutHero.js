import React from 'react';
import { motion } from 'framer-motion';

const AboutHero = () => {
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

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-screen flex flex-col justify-center items-center"
      style={{ backgroundImage: "url('https://th.bing.com/th/id/OIP.UwEFPMcy6AH84PgEHqSNuAHaEo?rs=1&pid=ImgDetMain')" }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content inside the hero section */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white flex flex-col justify-center items-center h-full mt-16">
        {/* Main Heading with animation */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] font-extrabold"
          initial="hidden"
          animate="visible"
          variants={headingVariants}
          transition={{ duration: 0.5 }}
        >
          Looking for more individualized support <br />
          along your <span className="text-teal-400">academic journey?</span>
        </motion.h1>

        {/* Paragraph with animation */}
        <motion.p
          className="mt-4 text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl sm:max-w-3xl lg:max-w-4xl"
          initial="hidden"
          animate="visible"
          variants={paragraphVariants}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          You just came to the right place. Sometimes, you just need that helping hand to guide you through the process.
        </motion.p>

        {/* CTA Button with animation */}
        <motion.a
          href="/about"
          className="mt-6 bg-teal-500 px-6 py-3 text-base sm:text-lg font-semibold rounded-full hover:bg-teal-600 transition-all duration-300"
          initial="hidden"
          animate="visible"
          variants={buttonVariants}
          transition={{ duration: 0.5, delay: 0.6 }}
          aria-label="Learn More"
          whileHover={{ scale: 1.05 }}
        >
          About Us
        </motion.a>
      </div>

      {/* White container adjusted to overlap half the image and half below */}
      <motion.div
        className="relative w-full px-4 lg:px-8"
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        <div
          className="bg-white p-6 sm:p-8 lg:p-10 rounded-xl shadow-lg absolute left-1/2 transform -translate-x-1/2 max-w-md sm:max-w-lg lg:max-w-4xl"
          style={{ 
            top: "80%", 
            marginTop: "-80px",
            borderRadius: "30px", 
          }}
        >
          <p className="text-gray-800 text-center text-base sm:text-lg md:text-xl">
            If you or your child would like a regular, long-term arrangement for academic support with one of our team, then keep reading!
          </p>
        </div>
      </motion.div>

      {/* Adding extra margin on mobile to avoid overlap */}
      <div className="h-32 sm:h-40 md:h-48 lg:h-56"></div> {/* Spacer to prevent overlap */}
    </section>
  );
};

export default AboutHero;
