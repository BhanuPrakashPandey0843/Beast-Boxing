import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProjectGallery = () => {
  // Settings for react-slick slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // For tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640, // For mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full py-12">
      <h2 className="text-center text-2xl font-semibold text-gray-800">Our Project Gallery</h2>
      <p className="text-center text-gray-600 mt-2 mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
      </p>

      <Slider {...settings} className="px-4">
        <div className="p-4">
          <img
            src="https://www.hdwallpaper.nu/wp-content/uploads/2017/06/boxing-22.jpg" 
            alt="Gallery 1"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="p-4">
          <img
            src="https://www.fullcontactway.com/wp-content/uploads/2017/08/boxing-match.jpg"
            alt="Gallery 2"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="p-4">
          <img
            src="https://i.pinimg.com/originals/ca/43/71/ca4371d2341c5b64a5babe2704cb7fc3.jpg"
            alt="Gallery 3"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="p-4">
          <img
            src="https://i.pinimg.com/originals/ca/43/71/ca4371d2341c5b64a5babe2704cb7fc3.jpg"
            alt="Gallery 4"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
        </div>
      </Slider>
    </div>
  );
};

export default ProjectGallery;
