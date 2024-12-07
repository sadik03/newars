import React from "react";
import './workout.css';
const WorkoutPlan = () => {
  // Sample workout plan data
  const workoutPlan = [
    {
      day: "Monday",
      exercises: [
        { name: "Push-ups", sets: 3, reps: 15 },
        { name: "Squats", sets: 3, reps: 20 },
        { name: "Plank", sets: 3, duration: "60 seconds" },
      ],
    },
    {
      day: "Tuesday",
      exercises: [
        { name: "Running", duration: "30 minutes" },
        { name: "Burpees", sets: 3, reps: 10 },
      ],
    },
    {
      day: "Wednesday",
      exercises: [
        { name: "Dumbbell Bench Press", sets: 3, reps: 12 },
        { name: "Deadlifts", sets: 3, reps: 10 },
      ],
    },
    // Add more days and exercises as needed
  ];

  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white text-center">Workout Plan</h2>

      {workoutPlan.map((dayPlan, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{dayPlan.day}</h3>
          <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
            {dayPlan.exercises.map((exercise, idx) => (
              <li key={idx} className="mb-2">
                <strong>{exercise.name}</strong>: {exercise.sets ? `${exercise.sets} sets x ${exercise.reps} reps` : exercise.duration}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default WorkoutPlan;
