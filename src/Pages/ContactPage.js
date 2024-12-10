import React from 'react'
import Navbar from '../Component/Navbar/Navbar';
import AboutHero from '../Component/AboutHero/AboutHero';
import HowItWorks from '../Component/HowItWorks/HowItWorks';
import ContactForm from '../Component/ContactForm/ContactForm';
import Newsletter from '../Component/Newsletter/Newsletter' ;
import Footer  from '../Component/Footer/Footer';
const ContactPage = () => {
  return (
    <div>
      <Navbar />
       <AboutHero />
       <HowItWorks/>
       <ContactForm/>
       <Newsletter/>
       <Footer />
    </div>
  )
}

export default ContactPage
