import React from "react";

const DietPlan = () => {
  const dietPlanData = [
    { meal: "Breakfast", items: "Oatmeal, Fruit" },
    { meal: "Lunch", items: "Chicken Salad" },
    { meal: "Dinner", items: "Grilled Fish, Vegetables" },
    { meal: "Snacks", items: "Nuts, Yogurt" },
  ];

  const dietVideos = [
    { title: "Healthy Breakfast Ideas", img: "https://images.services.kitchenstories.io/gxInWDQniM21aQiVgvnXmDrMnvo=/3840x0/filters:quality(85)/images.kitchenstories.io/communityImages/f4604e05f6a9eaca99afddd69e849005_c02485d4-0841-4de6-b152-69deb38693f2.jpg" },
    { title: "Lunch Recipes for a Diet", img: "https://media.self.com/photos/5ea1ac5927bb4e00087e0632/1:1/w_1066,h_1066,c_limit/mango-black-bean-salad.jpg" },
    { title: "Nutritious Dinner Options", img: "https://hips.hearstapps.com/hmg-prod/images/seared-salmon-roasted-cauliflower-1585240952.jpg" },
    { title: "Snack Ideas", img: "https://cdn.shopify.com/s/files/1/0569/3279/4461/files/Healthy_Snacks_for_Kids.webp?v=1707908601" }
  ];

  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white text-center">Diet Plan</h2>
      
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">Daily Meals</h3>
        <ul>
          {dietPlanData.map((item, index) => (
            <li key={index} className="mb-2">
              <span className="font-semibold">{item.meal}:</span> {item.items}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">Video Guides</h3>
        <div className="flex overflow-x-auto space-x-4 scrollbar-hide">
          {dietVideos.map((video, index) => (
            <div key={index} className="flex-shrink-0 w-64">
              <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">{video.title}</h4>
              <div className="relative pb-9/16 overflow-hidden">
                {video.src ? (
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={video.src}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <img
                    className="w-full h-auto"
                    src={video.img}
                    alt={video.title}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">Additional Information</h3>
        <p className="text-gray-600 dark:text-gray-400">
          A balanced diet is crucial for maintaining overall health and fitness. Ensure that your meals include a variety of nutrients, such as proteins, carbohydrates, and healthy fats. It's also important to stay hydrated and consult with a nutritionist for personalized advice.
        </p>
      </div>
    </div>
  );
};

export default DietPlan;
