import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion"; // Import Framer Motion for animations

const MembershipPayment = () => {
  const location = useLocation();
  const { membershipType, admissionfee, price } = location.state || {}; // Get membershipType, admissionfee, and price from state

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle payment submission logic here
    console.log("Payment submitted:", formData);
  };

  return (
    <div className="min-h-screen dark:bg-gray-700 bg-[#68a9d3] w-full flex items-center justify-center">
      {/* Outer container with flexbox for layout */}
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-5xl p-6 space-y-6 lg:space-y-0 lg:space-x-10">
        {/* Left side - Membership details */}
        <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg shadow-lg p-6 lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold mb-6">Complete Your Membership Payment</h1>
            {membershipType && (
              <p className="text-lg mb-6">
                You have selected the <strong>{membershipType}</strong> membership.
              </p>
            )}
            {admissionfee && (
              <p className="text-lg mb-6">
                Admission Fee: <strong>₹{admissionfee}</strong>
              </p>
            )}
            {price && (
              <p className="text-lg mb-6">
                Monthly Price: <strong>₹{price}</strong>
              </p>
            )}
          </motion.div>
        </div>

        {/* Right side - Payment form */}
        <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg shadow-lg p-6 lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.form
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <div>
                <label className="block mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                />
              </div>
              <div>
                <label className="block mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Display Admission Fee and Monthly Price in the same row */}
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label className="block mb-2">Admission Fee</label>
                  <input
                    type="text"
                    value={`₹${admissionfee}`}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 bg-gray-100"
                    readOnly
                  />
                </div>
                <div className="w-1/2">
                  <label className="block mb-2">Monthly Price</label>
                  <input
                    type="text"
                    value={`₹${price}`}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 bg-gray-100"
                    readOnly
                  />
                </div>
              </div>

              {/* Payment Details */}
              <div>
                <label className="block mb-2">Card Number</label>
                <input
                  type="text"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                />
              </div>
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label className="block mb-2">Expiration Date</label>
                  <input
                    type="text"
                    name="expirationDate"
                    value={formData.expirationDate}
                    onChange={handleChange}
                    placeholder="MM/YY"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                    required
                  />
                </div>
                <div className="w-1/2">
                  <label className="block mb-2">CVV</label>
                  <input
                    type="text"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                    required
                  />
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-amber-500 text-white py-2 rounded-lg mt-4 hover:bg-amber-600 transition"
                type="submit"
              >
                Pay Now
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MembershipPayment;
