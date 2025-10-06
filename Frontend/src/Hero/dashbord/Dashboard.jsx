import React from "react";
import screenShort from "../../assets/image/learnly.png";
import "./Dashboard.scss";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dash-container">
        <div className="dash-content">
          <h1>Your Learning Dashboard</h1>
          <p>
            Track your goals, view weekly reports, manage micro-goals, and see
            all progress in one clean dashboard.
          </p>
          <div className="desh-list">
            <li>
              <i className="ri-check-fill"></i> Personalized goals
            </li>
            <li>
              <i className="ri-check-fill"></i> Progress bar & badges
            </li>
            <li>
              <i className="ri-check-fill"></i> Weekly AI summaries
            </li>
          </div>
        </div>
        <div className="dash-image">
          <img src={screenShort} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
