import React from 'react';
import './Overview.css'; // Import the CSS file for styling

const Overview = () => {
  return (
    <div className="overview-container">
      <div className="profile-header">
        <img
          src="https://via.placeholder.com/150" // Replace with the actual profile image URL
          alt="Champion Profile"
          className="profile-image"
        />
        <div className="profile-info">
          <h1 className="champ-name">Champion Name</h1>
          <p className="champ-title">World-Class Athlete</p>
          <p className="champ-description">
            A brief description of the champion, highlighting their achievements, specialties, and notable events.
          </p>
        </div>
      </div>

      <div className="cards-container">
        <div className="card">
          <h3 className="card-title">Achievements</h3>
          <p className="card-content">Details about major achievements...</p>
        </div>
        <div className="card">
          <h3 className="card-title">Stats</h3>
          <p className="card-content">Important statistics and metrics...</p>
        </div>
        <div className="card">
          <h3 className="card-title">Recent Competitions</h3>
          <p className="card-content">Information about recent competitions...</p>
        </div>
        <div className="card">
          <h3 className="card-title">Upcoming Events</h3>
          <p className="card-content">Details about upcoming events and appearances...</p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
