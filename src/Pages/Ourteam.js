import React from 'react'
import Navbar from '../Component/Navbar/Navbar';
import TeamBut from '../Component/TeamBut/TeamBut';
import OurTeam from '../Component/OurTeam/OurTeam';

import Newsletter from '../Component/Newsletter/Newsletter';
import Footer  from '../Component/Footer/Footer';
const Homepage = () => {
  return (
    <div>
       <Navbar />
       <OurTeam />
       <TeamBut/>
       <Newsletter/>
       <Footer />
    </div>
  )
}

export default Homepage
