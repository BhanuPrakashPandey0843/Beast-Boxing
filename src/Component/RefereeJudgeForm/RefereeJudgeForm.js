import React, { useState, useEffect } from 'react';

const RefereeJudgeForm = () => {
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

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-800 via-black to-gray-900 flex items-center justify-center p-8">
      <div className="w-full max-w-3xl bg-gray-900 p-10 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
        <h2 className="text-4xl font-bold text-center mb-8 text-white">
          Join Our <span className="text-teal-400">Referees & Judges Team</span>
        </h2>
        <p className="text-white text-center mb-6">
          Be a part of our judging panel or referee team to officiate at Beast Boxing Promotion events. Fill in the form below, and our team will review your application.
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
            <select
              required
              className="w-full p-4 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
            >
              <option value="" disabled>Select Role Applying For</option>
              <option value="Referee">Referee</option>
              <option value="Judge">Judge</option>
              <option value="Both">Both</option>
            </select>
          </div>
          <div>
            <input
              type="number"
              placeholder="Years of Experience in Officiating"
              required
              className="w-full p-4 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 placeholder-gray-400"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Boxing Organizations Affiliated With (optional)"
              className="w-full p-4 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 placeholder-gray-400"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="License Number"
              required
              className="w-full p-4 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 placeholder-gray-400"
            />
          </div>
          <div>
            <input
              type="file"
              required
              accept=".pdf,.jpg,.png"
              className="w-full p-4 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
            <p className="text-gray-400 mt-2">Upload License Copy (.pdf, .jpg, .png)</p>
          </div>
          <div>
            <textarea
              placeholder="Why do you want to join the Beast Boxing Referee & Judges Team?"
              required
              className="w-full p-4 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 placeholder-gray-400"
            ></textarea>
          </div>
          <div>
            <input
              type="text"
              placeholder="Link to Past Officiating Videos (optional)"
              className="w-full p-4 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 placeholder-gray-400"
            />
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
              <p>Thank you for your application. Our team will review your details and get back to you shortly.</p>
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

export default RefereeJudgeForm;
