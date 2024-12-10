import React from 'react'
import Navbar from '../Component/Navbar/Navbar';


import ImageGallery from '../Component/ImageGallery/ImageGallery';
import Newsletter from '../Component/Newsletter/Newsletter'
import Footer  from '../Component/Footer/Footer';
const GallaryPage = () => {
  return (
    <div>
      <Navbar />
      
      <ImageGallery />
      < Newsletter />
      
      <Footer />
    </div>
  )
}

export default GallaryPage
