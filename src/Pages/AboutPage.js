import React from 'react'
import Navbar from '../Component/Navbar/Navbar';
import Hero from '../Component/Hero/Hero'
import AboutSection from '../Component/AboutSection/AboutSection'
import OurTeam from '../Component/OurTeam/OurTeam';
import Newsletter from '../Component/Newsletter/Newsletter'
import Footer  from '../Component/Footer/Footer';
const AboutPage = () => {
  return (
    <div>
       <Navbar />
       <Hero/>
       <AboutSection />
       <OurTeam />
       <Newsletter />
       <Footer />
    </div>
  )
}

export default AboutPage
