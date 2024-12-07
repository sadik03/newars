import React, { useState } from "react";

function CoachRegistration() {
  const [formData, setFormData] = useState({
    name: "",
    mobileNumber: "",
    age: "",
    adharCardNo: "",
    photo: "",
    experience: "",
    college: "",
    sports: "",
    identificationMark: "",
    bloodGroup: "",
    address: "",
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
    // Handle form submission logic, such as sending the data to an API
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-300 via-blue-400 to-blue-500 dark:bg-gray-800 text-gray-700 text-base font-semibold dark:text-white py-10 md:py-20">
      <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 md:p-8 w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6">
          Coach Registration Form
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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
            />
          </div>

          {/* Aadhaar Card Number */}
          <div className="form-group">
            <label className="block mb-1 text-gray-700 dark:text-gray-200">Aadhaar Card Number:</label>
            <input
              type="text"
              name="adharCardNo"
              value={formData.adharCardNo}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
            />
          </div>

          {/* Photo */}
          <div className="form-group">
            <label className="block mb-1 text-gray-700 dark:text-gray-200">Photo:</label>
            <input
              type="file"
              name="photo"
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
            />
          </div>

          {/* Years of Experience */}
          <div className="form-group">
            <label className="block mb-1 text-gray-700 dark:text-gray-200">Years of Experience:</label>
            <input
              type="number"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
            />
          </div>

          {/* College Graduated From */}
          <div className="form-group">
            <label className="block mb-1 text-gray-700 dark:text-gray-200">College Graduated From:</label>
            <input
              type="text"
              name="college"
              value={formData.college}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
            />
          </div>

          {/* Sports Specialization */}
          <div className="form-group">
            <label className="block mb-1 text-gray-700 dark:text-gray-200">Sports Specialization:</label>
            <input
              type="text"
              name="sports"
              value={formData.sports}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
            />
          </div>

          {/* Identification Mark */}
          <div className="form-group">
            <label className="block mb-1 text-gray-700 dark:text-gray-200">Identification Mark:</label>
            <input
              type="text"
              name="identificationMark"
              value={formData.identificationMark}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
            />
          </div>

          {/* Blood Group */}
          <div className="form-group">
            <label className="block mb-1 text-gray-700 dark:text-gray-200">Blood Group:</label>
            <input
              type="text"
              name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
            />
          </div>

          {/* Address */}
          <div className="form-group">
            <label className="block mb-1 text-gray-700 dark:text-gray-200">Address:</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
            />
          </div>

          {/* Submit Button */}
          <div className="form-group">
            <button
              type="submit"
              className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CoachRegistration;
