import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Home from "../home/Home";
import Tasks from "../tasks/tasks";
import Goal from "../goal/Goal";
import Badge from "../badge/Badge";
import './Sidebar.scss'

const Sidebar = () => {
  // a helper function to apply classes conditionaly
  const getNavLinkClass = ({ isActive }) => {
    return isActive ? "sidebar__link sidebar__link--active" : "sidebar__link";
  };

  return (
    <aside className="sidebar">
      <div className="sidebar__brand">
        <h2>Micro Mentor</h2>
      </div>

      {/* element: The navigation link container */}
      <nav className="sidebar__nav">
        <NavLink className={getNavLinkClass} to="/home">
          Home
        </NavLink>
        <NavLink className={getNavLinkClass} to="/tasks">
          Tasks
        </NavLink>
        <NavLink className={getNavLinkClass} to="/goal">
          Goal
        </NavLink>
        <NavLink className={getNavLinkClass} to={"/progress"}>
          Progress
        </NavLink>
        <NavLink className={getNavLinkClass} to="/badge">
          Badge
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
