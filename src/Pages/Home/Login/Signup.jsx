import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("guest");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);

  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    if (!isOtpVerified) {
      alert("Please verify your OTP");
      return;
    }
    console.log({ name, email, password, role });
    // Handle signup logic here
    if (role === "guest") navigate("/guest-dashboard");
    if (role === "coach") navigate("/coach-dashboard");
    if (role === "champ") navigate("/champ-dashboard");
  };

  const handleSendOtp = () => {
    // Simulate sending OTP here (e.g., API call)
    setIsOtpSent(true);
    alert("OTP sent to your email");
  };

  const handleVerifyOtp = () => {
    // Simulate OTP verification here (e.g., API call)
    if (otp === "123456") { // Replace with actual OTP validation logic
      setIsOtpVerified(true);
      alert("OTP verified successfully");
    } else {
      alert("Invalid OTP, please try again");
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-no-repeat bg-cover bg-center backdrop-blur-lg p-4 sm:p-6 "
      style={{
        backgroundImage: `url('https://png.pngtree.com/thumb_back/fh260/background/20230625/pngtree-minimalist-cartoon-search-bar-element-in-3d-illustration-on-light-blue-image_3677201.jpg')`,
      }}
    >
      <div className="flex flex-col sm:flex-row w-full max-w-lg sm:max-w-4xl bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        {/* Left Side - Image */}
        <div
          className="hidden sm:block sm:w-1/2 bg-cover bg-center my-9"
          style={{
            backgroundImage: `url('https://cdni.iconscout.com/illustration/premium/thumb/sign-up-illustration-download-in-svg-png-gif-file-formats--account-login-miscellaneous-pack-illustrations-5230178.png')`,
          }}
        ></div>

        {/* Right Side - Signup Form */}
        <div className="w-full sm:w-1/2 p-6 sm:p-8 bg-cyan-500">
          <h2 className="text-2xl font-bold mb-6 text-center text-black dark:text-white">
            Create Your Account
          </h2>

          {/* Signup Form */}
          <form onSubmit={handleSignup}>
            <div className="mb-4">
              <label
                className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 border rounded-lg shadow-sm dark:bg-gray-700 dark:text-white"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
  <label
    className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
    htmlFor="email"
  >
    Email
  </label>
  <div className="flex">
    <input
      type="email"
      id="email"
      className="flex-grow px-3 py-2 border rounded-l-lg shadow-sm dark:bg-gray-700 dark:text-white"
      placeholder="Enter your email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
    {email && (
      <button
        type="button"
        onClick={handleSendOtp}
        className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-700 transition duration-300"
      >
        Send OTP
      </button>
    )}
  </div>
</div>



            {isOtpSent && (
              <div className="mb-4">
                <label
                  className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
                  htmlFor="otp"
                >
                  OTP
                </label>
                <input
                  type="text"
                  id="otp"
                  className="w-full px-3 py-2 border rounded-lg shadow-sm dark:bg-gray-700 dark:text-white"
                  placeholder="Enter the OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
                <button
                  type="button"
                  onClick={handleVerifyOtp}
                  className="mt-2 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-700 transition duration-300"
                >
                  Verify OTP
                </button>
              </div>
            )}

            <div className="mb-4">
              <label
                className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 border rounded-lg shadow-sm dark:bg-gray-700 dark:text-white"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="w-full px-3 py-2 border rounded-lg shadow-sm dark:bg-gray-700 dark:text-white"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            {/* Role Selection */}
            <div className="mb-6">
              <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                Role
              </label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg shadow-sm dark:bg-gray-700 dark:text-white"
              >
                <option value="guest">Guest</option>
                <option value="coach">Coach</option>
                <option value="champ">Champ</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Sign Up
            </button>
          </form>

          {/* Links */}
          <div className="mt-6 text-center">
            <span className="text-sm dark:text-gray-300 text-gray-800">
              Already have an account?
            </span>
            <a
              href="/login"
              className="text-sm text-blue-700 hover:underline ml-1"
            >
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
