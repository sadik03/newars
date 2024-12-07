import './champProfile.css';
import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Container from "../../../Components/Container/Container";
import SectionHeader from "../../../Components/SectionHeader/SectionHeader";

const ChampProfile = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="dark:bg-gray-700 bg-[#68a9d3] pb-10  lg:pb-20">
      <SectionHeader heading={"Champ Profile"} />
      <Container>
        <div className="text-center">
          <p className="dark:text-white text-slate-700 mb-6">
            Welcome to your profile. Use the tabs below to navigate through your information and settings.
          </p>
        </div>

        <div className="flex justify-center mb-6 text-white">
          <div className="tabs">
            <Link
              to="overview"
              className={`tab ${activeTab === "overview" ? "active" : ""}`}
              onClick={() => handleTabClick("overview")}
            >
              Overview
            </Link>
            <Link
              to="training"
              className={`tab ${activeTab === "training" ? "active" : ""}`}
              onClick={() => handleTabClick("training")}
            >
              Training
            </Link>
            <Link
              to="feedback"
              className={`tab ${activeTab === "feedback" ? "active" : ""}`}
              onClick={() => handleTabClick("feedback")}
            >
              Feedback
            </Link>

            <Link
              to="setting"
              className={`tab ${activeTab === "setting" ? "active" : ""}`}
              onClick={() => handleTabClick("setting")}
            >
          Setting
            </Link>

          </div>
        </div>

        <Outlet />
      </Container>
    </div>
  );
};

export default ChampProfile;
