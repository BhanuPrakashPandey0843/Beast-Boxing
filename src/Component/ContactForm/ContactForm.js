import React from 'react';

const ContactForm = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    
    formData.append("access_key", "7a282ada-7399-4bba-8ba9-c67e3db33b05");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        alert("Message sent successfully!");
        event.target.reset(); 
      } else {
        alert("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("An error occurred. Please try again later.");
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-black to-gray-800 flex items-center justify-center p-8">
      <div className="w-full max-w-2xl bg-gray-900 p-10 rounded-lg shadow-lg">
        <h2 className="text-5xl font-bold text-center mb-8 text-white">
          Join <span className="text-teal-500">Beast Boxing</span>
        </h2>

        <form className="space-y-6" onSubmit={onSubmit}>
          {/* Name */}
          <div>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300 placeholder-gray-400"
            />
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-4 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300 placeholder-gray-400"
            />
          </div>

          {/* Phone Number */}
          <div>
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full p-4 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300 placeholder-gray-400"
            />
          </div>

          {/* Membership Type */}
          <div>
            <p className="text-white mb-2">Select Membership Type</p>
            <select
              className="w-full p-4 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300"
            >
              <option>Monthly Membership</option>
              <option>Annual Membership</option>
              <option>Trial Session</option>
            </select>
          </div>

          {/* Preferred Training */}
          <div>
            <p className="text-white mb-2">Preferred Training Type</p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="boxing" className="form-checkbox h-5 w-5 text-red-500" />
                <label htmlFor="boxing" className="text-white">Boxing</label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="strength" className="form-checkbox h-5 w-5 text-red-500" />
                <label htmlFor="strength" className="text-white">Strength Training</label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="cardio" className="form-checkbox h-5 w-5 text-red-500" />
                <label htmlFor="cardio" className="text-white">Cardio</label>
              </div>
            </div>
          </div>

          {/* Availability */}
          <div>
            <input
              type="text"
              placeholder="Your Availability (e.g., Weekends, Evenings)"
              className="w-full p-4 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300 placeholder-gray-400"
            />
          </div>

          {/* Training Goals */}
          <div>
            <textarea
              rows="4"
              placeholder="What are your training goals? (e.g., Weight Loss, Competition, Fitness)"
              className="w-full p-4 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300 placeholder-gray-400"
            ></textarea>
          </div>

          {/* Budget */}
          <div>
            <input
              type="text"
              placeholder="What is your budget for training?"
              className="w-full p-4 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300 placeholder-gray-400"
            />
          </div>

          {/* Submit button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full p-4 bg-red-500 text-white font-semibold rounded-lg shadow-lg hover:bg-red-600 hover:shadow-xl transition duration-300 transform hover:-translate-y-1 focus:outline-none"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;