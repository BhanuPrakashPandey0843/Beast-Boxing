import React, { useState, useEffect } from 'react';

const HierForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission (e.g., sending data to a server)
    setIsSubmitted(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 300); // Delays popup removal for fade-out effect
  };

  useEffect(() => {
    if (isSubmitted) {
      setShowPopup(true); // Delays popup display to create fade-in effect
    }
  }, [isSubmitted]);

  const weightCategories = [
    // Men's Professional Boxing Weight Categories
    { label: "Minimumweight (Strawweight)", value: "Minimumweight (Strawweight) - Up to 48 kg" },
    { label: "Light Flyweight", value: "Light Flyweight - Up to 49 kg" },
    { label: "Flyweight", value: "Flyweight - Up to 51 kg" },
    { label: "Super Flyweight (Jr. Bantamweight)", value: "Super Flyweight (Jr. Bantamweight) - Up to 52 kg" },
    { label: "Bantamweight", value: "Bantamweight - Up to 54 kg" },
    { label: "Super Bantamweight (Jr. Featherweight)", value: "Super Bantamweight (Jr. Featherweight) - Up to 55 kg" },
    { label: "Featherweight", value: "Featherweight - Up to 57 kg" },
    { label: "Super Featherweight (Jr. Lightweight)", value: "Super Featherweight (Jr. Lightweight) - Up to 59 kg" },
    { label: "Lightweight", value: "Lightweight - Up to 61 kg" },
    { label: "Super Lightweight (Jr. Welterweight)", value: "Super Lightweight (Jr. Welterweight) - Up to 64 kg" },
    { label: "Welterweight", value: "Welterweight - Up to 67 kg" },
    { label: "Super Welterweight (Jr. Middleweight/Light Middleweight)", value: "Super Welterweight (Jr. Middleweight/Light Middleweight) - Up to 70 kg" },
    { label: "Middleweight", value: "Middleweight - Up to 73 kg" },
    { label: "Super Middleweight", value: "Super Middleweight - Up to 76 kg" },
    { label: "Light Heavyweight", value: "Light Heavyweight - Up to 79 kg" },
    { label: "Cruiserweight", value: "Cruiserweight - Up to 91 kg" },
    { label: "Heavyweight", value: "Heavyweight - Over 91 kg" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-800 via-black to-gray-900 flex items-center justify-center p-8">
      <div className="w-full max-w-3xl bg-gray-900 p-10 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
        <h2 className="text-4xl font-bold text-center mb-8 text-white">
          Join Us as a <span className="text-teal-400">Pro Boxer</span>
        </h2>
        <p className="text-white text-center mb-6">
          Are you a professional boxer looking for new opportunities? Sign up to be a part of our prestigious boxing events with Beast Boxing Promotion.
        </p>

        <form className="space-y-6 mb-10" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Full Name"
              required
              className="w-full p-4 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 placeholder-gray-400"
            />
          </div>
          <div>
            <input
              type="date"
              required
              className="w-full p-4 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Contact Number"
              required
              className="w-full p-4 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 placeholder-gray-400"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email Address"
              required
              className="w-full p-4 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 placeholder-gray-400"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Boxing Record (e.g., 20-2-0-15)"
              required
              className="w-full p-4 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 placeholder-gray-400"
            />
          </div>
          <div>
            <select
              required
              className="w-full p-4 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
            >
              <option value="" disabled>Select Weight Category</option>
              {weightCategories.map((category, index) => (
                <option key={index} value={category.value}>{category.label}</option>
              ))}
            </select>
          </div>
          <div>
            <input
              type="text"
              placeholder="Link to Fight Videos (optional)"
              className="w-full p-4 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 placeholder-gray-400"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Training Gym/Academy"
              required
              className="w-full p-4 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 placeholder-gray-400"
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="Years of Experience in Professional Boxing"
              required
              className="w-full p-4 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 placeholder-gray-400"
            />
          </div>
          <div>
            <textarea
              placeholder="Why do you want to join Beast Boxing Promotion?"
              required
              className="w-full p-4 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 placeholder-gray-400"
            ></textarea>
          </div>
          <div>
            <input
              type="file"
              required
              accept=".jpg,.png"
              className="w-full p-4 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
            <p className="text-gray-400 mt-2">Upload Recent Photos (Full-body & Headshot)</p>
          </div>
          <button
            type="submit"
            className="w-full py-4 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transform hover:scale-105 transition duration-200"
          >
            Submit Application
          </button>
        </form>

        {/* Popup Modal */}
        {isSubmitted && (
          <div className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300 ${showPopup ? 'opacity-100' : 'opacity-0'}`}>
            <div className={`bg-white p-8 rounded-lg shadow-lg text-center transform transition-transform duration-500 ${showPopup ? 'scale-100' : 'scale-75'}`}>
              <h2 className="text-2xl font-bold mb-4 text-teal-600">Thank You!</h2>
              <p>Your application has been submitted successfully.</p>
              <button
                onClick={handleClosePopup}
                className="mt-6 px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition duration-200 transform hover:scale-105"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HierForm;
