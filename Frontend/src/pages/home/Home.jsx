import React from "react";
import Tasks from "../tasks/tasks";
import Sidebar from "../sidebar/sidebar";

const Home = () => {
  return (
    <div>
      <div className="container">
        <div className="sidebar">
          <Sidebar />
        </div>

        <div className="center-div">
          <main>
            <h2>Welcome champ</h2>
            <div>
              <div>
                <h3>Total Goals</h3>
                <p>15</p>
              </div>
              <div>
                <h3>Completed</h3>
                <p>8</p>
              </div>
              <div>
                <h3>Streak</h3>
                <p>5 days</p>
              </div>
            </div>
          </main>
        </div>
        <div className="right-side-div"></div>
      </div>
    </div>
  );
};

export default Home;
