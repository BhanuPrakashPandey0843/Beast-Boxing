import React, { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    const script1 = document.createElement("script");
    script1.type = "module";
    script1.src =
      "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js";
    document.body.appendChild(script1);

    const script2 = document.createElement("script");
    script2.nomodule = true;
    script2.src = "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js";
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  const socialLinks = [
    { name: "logo-linkedin", link: "https://www.linkedin.com/in/beast-boxing-9911aa336/" },
    { name: "logo-instagram", link: "https://www.instagram.com/?hl=en" },
    { name: "logo-whatsapp", link: "https://wa.me/919356514284?text=Hello!%20I'm%20interested%20in%20your%20services" },
    { name: "person-circle-outline", link: "mailto:beastboxingofficial@gmail.com?subject=Inquiry&body=Hello,%20I'm%20interested%20in%20your%20boxing%20services." },
  ];

  return (
    <div
      className="w-full h-screen bg-no-repeat bg-cover bg-center flex flex-col justify-between"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/premium-photo/boxing-leather-red-gloves-floor-black-background-closeup-symbol-struggle-strength-confidence-victory_402815-257.jpg')",
      }}
    >
      <div className="w-[90%] mx-auto h-full flex flex-col lg:flex-row items-center justify-between py-10">
        <div className="lg:w-1/2 text-center lg:text-left">
          <div className="text-5xl lg:text-7xl text-white font-bold uppercase space-y-3 leading-tight tracking-wide">
            <h1 className="transform hover:scale-105 transition duration-300">
              Join the
            </h1>
            <h1 className="transform hover:scale-105 transition duration-300">
              Boxing
            </h1>
            <h1 className="bg-black/70 text-teal-400 rounded-sm px-2 py-1 shadow-lg transform hover:scale-105 transition duration-300 inline-block">
              Revolution
            </h1>
            <h1 className="transform hover:scale-105 transition duration-300">
              Today !
            </h1>
          </div>
          <div className="mt-8 flex flex-col items-center lg:items-start">
            <button className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-teal-400 rounded-full shadow-md group">
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white bg-teal-400 duration-300 -translate-x-full group-hover:translate-x-0 ease">
                <ion-icon
                  name="chevron-forward-outline"
                  className="text-white text-2xl"
                ></ion-icon>
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
                Join Now
              </span>
              <span className="relative invisible">Join Now</span>
            </button>
            <p className="text-md text-white bg-black/60 font-semibold mt-3 rounded-lg px-4 py-2 inline-block ">
              Elevate Your Boxing Journey Now!
            </p>
          </div>
        </div>
        <div className="lg:w-1/4 flex lg:flex-col lg:items-end lg:justify-center lg:mt-0 mt-8 lg:space-y-6 space-x-4 lg:space-x-0">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center w-12 h-12 lg:w-16 lg:h-16 bg-transparent rounded-full text-white hover:bg-teal-400 hover:text-black shadow-lg hover:shadow-2xl transition duration-300 ease-in-out cursor-pointer transform hover:scale-125 hover:rotate-12"
            >
              <ion-icon name={social.name}></ion-icon>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
