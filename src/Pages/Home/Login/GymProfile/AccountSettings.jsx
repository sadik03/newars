import React from "react";
import { useNavigate } from "react-router-dom";

const AccountSettings = () => {
  const navigate = useNavigate(); // Hook to programmatically navigate

  const handleLogout = () => {
    // Clear user authentication data
    localStorage.removeItem("authToken"); // Or remove other authentication data
    // Redirect to home page
    navigate("/");
  };

  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-lg mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white text-center">Account Settings</h2>
      
      {/* Add your form fields here */}
      <form>
        {/* Example form fields */}
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 dark:text-gray-300">Username</label>
          <input
            type="text"
            id="username"
            className="mt-1 p-2 border border-gray-300 dark:border-gray-600 rounded-md w-full"
            placeholder="Enter your username"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 dark:text-gray-300">Email Address</label>
          <input
            type="email"
            id="email"
            className="mt-1 p-2 border border-gray-300 dark:border-gray-600 rounded-md w-full"
            placeholder="Enter your email"
          />
        </div>

        {/* Add more form fields as needed */}
      </form>
      <button
        type="button"
        
        className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 mt-6"
      >
      Update
      </button>
      <button
        type="button"
        onClick={handleLogout}
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-red-600 mt-6"
      >
        Logout
      </button>
    </div>
  );
};

export default AccountSettings;
