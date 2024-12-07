import React, { useState } from "react";

function GymRegistration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    age: "",
    gender: "",
    membershipType: "",
    experienceLevel: "",
    gymLocation: "",
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-300 via-green-400 to-blue-500 dark:bg-gray-800 text-gray-700 text-base font-semibold dark:text-white py-10 md:py-20">
      <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 md:p-8 w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6">
          Gym Registration Form
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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-green-300 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
            />
          </div>

          {/* Email */}
          <div className="form-group">
            <label className="block mb-1 text-gray-700 dark:text-gray-200">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-green-300 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
            />
          </div>

          {/* Mobile Number */}
          <div className="form-group">
            <label className="block mb-1 text-gray-700 dark:text-gray-200">Mobile Number:</label>
            <input
              type="tel"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-green-300 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-green-300 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-green-300 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
            >
              <option value="" disabled>Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Membership Type */}
          <div className="form-group">
            <label className="block mb-1 text-gray-700 dark:text-gray-200">Membership Type:</label>
            <select
              name="membershipType"
              value={formData.membershipType}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-green-300 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
            >
              <option value="" disabled>Select Membership Type</option>
              <option value="monthly">Monthly</option>
              <option value="quarterly">Quarterly</option>
              <option value="yearly">Yearly</option>
            </select>
          </div>

          {/* Experience Level */}
          <div className="form-group">
            <label className="block mb-1 text-gray-700 dark:text-gray-200">Experience Level:</label>
            <select
              name="experienceLevel"
              value={formData.experienceLevel}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-green-300 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
            >
              <option value="" disabled>Select Experience Level</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>

          {/* Gym Location */}
          <div className="form-group">
            <label className="block mb-1 text-gray-700 dark:text-gray-200">Preferred Gym Location:</label>
            <input
              type="text"
              name="gymLocation"
              value={formData.gymLocation}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-green-300 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-green-300 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-green-300 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
            />
          </div>

          {/* Submit Button */}
          <div className="form-group">
            <button
              type="submit"
              className="w-full py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default GymRegistration;
