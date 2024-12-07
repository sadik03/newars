import React from "react";
import './Training.css'; // Import the CSS file for styling

const Training = () => {
  return (
    <div className="training-page">
      <h2>Training</h2>
      <p>Here you can find the details about the training schedule and videos.</p>

      <div className="video-container">
        <h3>Training Videos</h3>
        <div className="video-list">
          <div className="video-card">
            <img src="https://marketplace.canva.com/EAF7i-sRqcY/1/0/1600w/canva-blue-and-red-simple-sport-youtube-thumbnail-2WKDx94bJ4I.jpg" alt="Video 1" />
            <p>How to Improve Your Speed</p>
          </div>
          <div className="video-card">
            <img src="https://marketplace.canva.com/EAF7i-sRqcY/1/0/1600w/canva-blue-and-red-simple-sport-youtube-thumbnail-2WKDx94bJ4I.jpg" alt="Video 2" />
            <p>Strength Training Basics</p>
          </div>
          <div className="video-card">
            <img src="https://marketplace.canva.com/EAF7i-sRqcY/1/0/1600w/canva-blue-and-red-simple-sport-youtube-thumbnail-2WKDx94bJ4I.jpg" alt="Video 3" />
            <p>Flexibility and Mobility Routines</p>
          </div>
          <div className="video-card">
            <img src="https://marketplace.canva.com/EAF7i-sRqcY/1/0/1600w/canva-blue-and-red-simple-sport-youtube-thumbnail-2WKDx94bJ4I.jpg" alt="Video 4" />
            <p>Endurance Running Techniques</p>
          </div>
        </div>
      </div>

      <div className="session-container">
        <h3>Session Videos</h3>
        <div className="session-list">
          <div className="session-card">
            <img src="https://content.wepik.com/statics/13819746/preview-page0.jpg" alt="Session 1" />
            <p>Yoga for Flexibility</p>
          </div>
          <div className="session-card">
            <img src="https://content.wepik.com/statics/13819746/preview-page0.jpg" alt="Session 2" />
            <p>Weightlifting Basics</p>
          </div>
          <div className="session-card">
            <img src="https://content.wepik.com/statics/13819746/preview-page0.jpg" alt="Session 3" />
            <p>Endurance Training</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Training;
