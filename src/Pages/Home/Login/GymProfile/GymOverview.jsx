import React from "react";

const GymOverview = () => {
  // Sample data for demonstration
  const userInfo = {
    name: "John Doe",
    membershipType: "Premium",
    joinDate: "January 15, 2023",
    goals: [
      "Increase muscle mass",
      "Improve cardiovascular fitness",
      "Achieve a balanced diet"
    ],
    achievements: [
      "Completed 50 personal training sessions",
      "Ran a 5K marathon",
      "Lost 10 kg"
    ],
  };

  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Overview</h2>
      
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">General Information</h3>
        <p className="text-gray-600 dark:text-gray-400">
          <strong>Name:</strong> {userInfo.name}
        </p>
        <p className="text-gray-600 dark:text-gray-400">
          <strong>Membership Type:</strong> {userInfo.membershipType}
        </p>
        <p className="text-gray-600 dark:text-gray-400">
          <strong>Join Date:</strong> {userInfo.joinDate}
        </p>
      </div>
      
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Goals</h3>
        <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
          {userInfo.goals.map((goal, index) => (
            <li key={index}>{goal}</li>
          ))}
        </ul>
      </div>
      
      <div>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Achievements</h3>
        <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
          {userInfo.achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GymOverview;

