import React from "react";

const Performance = () => {
  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white text-center">Performance Tracking</h2>

      {/* Progress Overview */}
      <div className="mb-8 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Progress Overview</h3>
        <p className="text-gray-600 dark:text-gray-400">
          Track your progress and performance metrics here. Analyze your workout data, monitor improvements, and set new fitness goals.
        </p>
      </div>
      
      {/* Weekly Progress */}
      <div className="mb-8 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Weekly Progress</h3>
        <div className="flex flex-col space-y-4">
          {[
            { label: "Strength Training", percentage: 75 },
            { label: "Cardio", percentage: 85 },
            { label: "Flexibility", percentage: 65 },
            { label: "Endurance", percentage: 80 },
          ].map((metric, index) => (
            <div key={index} className="flex items-center">
              <div className="w-1/3 text-gray-700 dark:text-gray-300">{metric.label}</div>
              <div className="w-2/3 bg-gray-200 dark:bg-gray-600 rounded-full h-2.5 relative">
                <div
                  className="bg-blue-500 h-full rounded-full"
                  style={{ width: `${metric.percentage}%` }}
                ></div>
              </div>
              <span className="ml-2 text-gray-900 dark:text-white">{metric.percentage}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Metrics */}
      <div p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md>
        <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Additional Metrics</h3>
        <ul className="space-y-4">
          {[
            { metric: "Total Workouts", value: 40 },
            { metric: "Average Heart Rate", value: "140 bpm" },
            { metric: "Calories Burned", value: "3000 kcal" },
          ].map((item, index) => (
            <li key={index} className="flex justify-between text-gray-600 dark:text-gray-400">
              <span>{item.metric}</span>
              <span className="font-semibold text-gray-900 dark:text-white">{item.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Performance;
