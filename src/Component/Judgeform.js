import React from 'react'

const Judgeform = () => {
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
    <div>
       {/* Form 2: Referee/Judge */}
       <h2 className="text-4xl font-bold text-center mb-8 text-white">
          Join Our <span className="text-teal-400">Referees & Judges Team</span>
        </h2>
        <p className="text-white text-center mb-6">
          Be a part of our judging panel or referee team to officiate at Beast Boxing Promotion events.
        </p>
        
        <form className="space-y-6" onSubmit={onSubmit}>
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
              <option>Referee</option>
              <option>Judge</option>
              <option>Both</option>
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
              placeholder="Boxing Organizations Affiliated With (if any)"
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
            <p className="text-gray-400 mt-2">Upload License Copy</p>
          </div>
          <div>
            <textarea
              placeholder="Why do you want to join the Beast Boxing Referee & Judges Team?"
              required
              className="w-full p-4 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 placeholder-gray-400"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="w-full p-4 bg-teal-400 text-white font-semibold rounded-lg shadow-lg hover:bg-teal-500 hover:shadow-xl transition duration-300 transform hover:-translate-y-1 focus:outline-none"
            >
              Submit Application
            </button>
          </div>
    
        </form>
      </div>
    
  )
}

export default Judgeform