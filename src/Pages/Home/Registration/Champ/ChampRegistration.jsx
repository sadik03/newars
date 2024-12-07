import React, { useState } from "react";

function ChampRegistration() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    event: "",
    performanceMetrics: "",
    coachName: "",
    clubName: "",
    contactNumber: "",
    photo: "",
    emergencyContact: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission logic, such as sending the data to an API
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-300 via-blue-400 to-red-500 dark:bg-gray-800 text-gray-700 text-base font-semibold dark:text-white py-10 md:py-20">
      <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 md:p-8 w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6">
          Champ Registration Form
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Name */}
          <div className="form-group">
            <label className="block mb-1 text-gray-700 dark:text-gray-200">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-yellow-300 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
            />
          </div>

          {/* Age */}
          <div className="form-group">
            <label className="block mb-1 text-gray-700 dark:text-gray-200">Age:</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-yellow-300 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
            />
          </div>

          {/* Gender */}
          <div className="form-group">
            <label className="block mb-1 text-gray-700 dark:text-gray-200">Gender:</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-yellow-300 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
            >
              <option value="" disabled>Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Event */}
          <div className="form-group">
            <label className="block mb-1 text-gray-700 dark:text-gray-200">Event:</label>
            <input
              type="text"
              name="event"
              value={formData.event}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-yellow-300 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
            />
          </div>

          {/* Performance Metrics */}
          <div className="form-group">
            <label className="block mb-1 text-gray-700 dark:text-gray-200">Performance Metrics:</label>
            <textarea
              name="performanceMetrics"
              value={formData.performanceMetrics}
              onChange={handleChange}
              placeholder="E.g. 100m sprint in 10.5 seconds"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-yellow-300 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
            ></textarea>
          </div>

          {/* Coach Name */}
          <div className="form-group">
            <label className="block mb-1 text-gray-700 dark:text-gray-200">Coach Name:</label>
            <input
              type="text"
              name="coachName"
              value={formData.coachName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-yellow-300 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
            />
          </div>

          {/* Club Name */}
          <div className="form-group">
            <label className="block mb-1 text-gray-700 dark:text-gray-200">Club Name:</label>
            <input
              type="text"
              name="clubName"
              value={formData.clubName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-yellow-300 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
            />
          </div>

          {/* Contact Number */}
          <div className="form-group">
            <label className="block mb-1 text-gray-700 dark:text-gray-200">Contact Number:</label>
            <input
              type="tel"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-yellow-300 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
            />
          </div>

          {/* Emergency Contact */}
          <div className="form-group">
            <label className="block mb-1 text-gray-700 dark:text-gray-200">Emergency Contact:</label>
            <input
              type="tel"
              name="emergencyContact"
              value={formData.emergencyContact}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-yellow-300 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
            />
          </div>

          {/* Photo */}
          <div className="form-group">
            <label className="block mb-1 text-gray-700 dark:text-gray-200">Upload Photo:</label>
            <input
              type="file"
              name="photo"
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-yellow-300 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
            />
          </div>

          {/* Submit Button */}
          <div className="form-group">
            <button
              type="submit"
              className="w-full py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition duration-300"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ChampRegistration;
