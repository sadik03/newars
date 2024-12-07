import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Container from "../../../../Components/Container/Container";
import SectionHeader from "../../../../Components/SectionHeader/SectionHeader";
import './GymProfile.css'; // Ensure to create this CSS file for custom styling

const GymProfile = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="dark:bg-gray-700 bg-[#68a9d3] pb-10 lg:pb-20">
      <SectionHeader heading={"Gym Member Profile"} />
      <Container>
        <div className="text-center">
          <p className="dark:text-white text-slate-700 mb-6">
            Welcome to your gym profile. Use the tabs below to navigate through your information and settings.
          </p>
        </div>

        <div className="flex justify-center mb-6">
          <div className="tabs">
            <Link
              to="overview"
              className={`tab ${activeTab === "overview" ? "active" : ""}`}
              onClick={() => handleTabClick("overview")}
            >
              Overview
            </Link>
            <Link
              to="workout-plan"
              className={`tab ${activeTab === "workout-plan" ? "active" : ""}`}
              onClick={() => handleTabClick("workout-plan")}
            >
              Workout Plan
            </Link>
            <Link
              to="diet-plan"
              className={`tab ${activeTab === "diet-plan" ? "active" : ""}`}
              onClick={() => handleTabClick("diet-plan")}
            >
              Diet Plan
            </Link>
            <Link
              to="performance"
              className={`tab ${activeTab === "performance" ? "active" : ""}`}
              onClick={() => handleTabClick("performance")}
            >
              Performance
            </Link>



            <Link
              to="setting"
              className={`tab ${activeTab === "setting" ? "active" : ""}`}
              onClick={() => handleTabClick("setting")}
            >
             Account Setting
            </Link>
          </div>
        </div>

        <Outlet />
      </Container>
    </div>
  );
};

export default GymProfile;
