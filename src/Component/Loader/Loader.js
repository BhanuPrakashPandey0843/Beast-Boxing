import React from "react";
import logo from "../Footer/logo.png"; // Ensure the path is correct

const Loader = () => {
  return (
    <div
      className="w-full h-screen flex flex-col justify-center items-center bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white"
      style={{ overflow: "hidden" }}
    >
      {/* Rotating and Pulsating Logo Animation */}
      <img
        src={logo}
        alt="Logo"
        className="h-36 w-auto md:h-48 animate-logo"
      />

      {/* Company Name Animation */}
      <h1 className="text-4xl md:text-5xl font-extrabold mt-6 animate-fade-in">
        Beast Boxing
      </h1>

      {/* Loading Dots Animation */}
      <div className="mt-8 flex space-x-2">
        <div className="w-4 h-4 rounded-full bg-teal-500 animate-bounce delay-100 transform hover:scale-125"></div>
        <div className="w-4 h-4 rounded-full bg-teal-500 animate-bounce delay-200 transform hover:scale-125"></div>
        <div className="w-4 h-4 rounded-full bg-teal-500 animate-bounce delay-300 transform hover:scale-125"></div>
      </div>

      {/* Inline Styling for Animations */}
      <style>
        {`
          /* Logo Animation */
          .animate-logo {
            animation: rotate-and-pulse 3s infinite, zoom-in 1.5s ease-out forwards;
          }

          /* Rotate and Pulse Keyframe */
          @keyframes rotate-and-pulse {
            0% {
              transform: rotate(0deg) scale(1);
            }
            50% {
              transform: rotate(180deg) scale(1.1);
            }
            100% {
              transform: rotate(360deg) scale(1);
            }
          }

          /* Zoom-in Keyframe */
          @keyframes zoom-in {
            from {
              transform: scale(0.5);
              opacity: 0;
            }
            to {
              transform: scale(1);
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Loader;
