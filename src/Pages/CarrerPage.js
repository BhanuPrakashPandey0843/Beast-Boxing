import React from 'react'
import Navbar from '../Component/Navbar/Navbar';
import CarrerHero from '../Component/CarrerHero/CarrerHero';
import Jobroles from '../Component/Jobrole/Jobroles';
import TeamSection from '../Component/TeamSection/TeamSection';

import Newsletter from '../Component/Newsletter/Newsletter' ;
import Footer  from '../Component/Footer/Footer';
const CarrerPage = () => {
  return (
    <div>
      <Navbar />
      <CarrerHero />
      <Jobroles/>
      <TeamSection />
      <Newsletter />
     
      <Footer />
    </div>
  )
}

export default CarrerPage
