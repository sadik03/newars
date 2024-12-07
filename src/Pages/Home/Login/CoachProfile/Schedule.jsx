import React from "react";
import './Schedule.css'; // Import the CSS file for responsive styling

const Schedule = () => {
  const scheduleData = [
    { day: "Monday", time: "10:00 AM - 12:00 PM", activity: "Personal Training" },
    { day: "Tuesday", time: "1:00 PM - 3:00 PM", activity: "Team Training" },
    { day: "Wednesday", time: "9:00 AM - 11:00 AM", activity: "Individual Coaching" },
    { day: "Thursday", time: "2:00 PM - 4:00 PM", activity: "Fitness Class" },
    { day: "Friday", time: "10:00 AM - 12:00 PM", activity: "Open Gym" },
  ];

  return (
    <div className="schedule-container p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Schedule</h2>
      <div className="schedule-table-wrapper">
        <table className="schedule-table min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Day</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Time</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Activity</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
            {scheduleData.map((item, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">{item.day}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{item.time}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{item.activity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Schedule;
