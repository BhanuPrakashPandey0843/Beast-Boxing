import React from 'react'

import Navbar from '../Component/Navbar/Navbar';
import SupportSection from '../Component/SupportSection/SupportSection'
import TeamSection from '../Component/TeamSection/TeamSection';
import Testimonial from '../Component/Testimonial/Testimonial'
import HeroSection from '../Component/Landinghero/Herosection';
import Faq from '../Component/FAQ/Faq';
import ContactUs from '../Component/Contactus/Contactus'
import Newsletter from '../Component/Newsletter/Newsletter'
import Footer  from '../Component/Footer/Footer';
const Homepage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <SupportSection />
      <TeamSection />
      <Testimonial />
      <Faq />
      
      <ContactUs />
      <Newsletter/>
      <Footer />
    </div>
  )
}

export default Homepage
