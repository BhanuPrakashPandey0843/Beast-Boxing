import React from 'react';

const GallaryHero = () => {
  return (
   
   <div>
      <section className="relative h-[75vh] flex flex-col items-center justify-center text-center text-white overflow-hidden">
        <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
          <video
            className="min-w-full min-h-full absolute object-cover"
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
            type="video/mp4"
            autoPlay
            muted
            loop
          ></video>
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        </div>
        <div className="video-content space-y-4 z-20 relative p-4">
          <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl transition-transform duration-500 transform hover:scale-105">
            Full Hero Video
          </h1>
          <h3 className="font-light text-3xl md:text-4xl lg:text-5xl transition-transform duration-500 transform hover:scale-105">
            Beast Boxing
          </h3>
          <a
            href="/contact"
            className="mt-4 inline-block bg-white text-black font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-gray-200 transition-all duration-300"
          >
           Contact Us
          </a>
        </div>
      </section>

      <style jsx>{`
        .video-docker video {
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      `}</style>
    </div>
  );
};

export default GallaryHero;
