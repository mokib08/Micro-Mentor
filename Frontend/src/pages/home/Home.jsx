import React from "react";
import Tasks from "../tasks/tasks";
import Sidebar from "../sidebar/sidebar";
import './Home.scss';

const Home = () => {
  return (
    <div className="dashboard-layout">
      <Sidebar />

      {/* The main content area of the dashboard */}
      <main className="dashboard-layout__main">
        <header className="dashboard-header">
          <h2>Welcome Champ</h2>
        </header>

        {/* a grid to display key statics */}
        <div className="stats-grid">
          {/* Reusable block : A card for displaying a single stat */}
          <div className="stat-card">
            <h3 className="stat-card__label">Total Goals</h3>
            <p className="stat-card__value">15</p>
          </div>
          <div className="stat-card">
            <h3 className="stat-card__label">Completed</h3>
            <p className="stat-card__value">8</p>
          </div>
          <div className="stat-card">
            <h3 className="stat-card__label">Streak</h3>
            <p className="stat-card__value">5 days</p>
          </div>
        </div>
      </main>

      {/* an aside element for supplementary content (e.g., calendar, profile) */}
      <aside className="dashboard-layout__aside">
        {/* Content for the right side can be added here later */}
      </aside>
    </div>
  );
};

export default Home;
