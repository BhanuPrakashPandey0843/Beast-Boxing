import logo from "../Footer/logo.png"; // Ensure the path is correct

const Loader = () => {
  return (
    <div
      className="w-full h-screen flex flex-col justify-center items-center bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white"
      style={{ overflow: "hidden" }}
    >
      {/* Rotating Logo Animation */}
      <img
        src={logo}
        alt="Logo"
        className="h-36 w-auto md:h-48 animate-spin-slow"
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
    </div>
  );
};

export default Loader;
