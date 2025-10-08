import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Tasks from "../pages/tasks/tasks";
import Goal from "../pages/goal/Goal";
import Badge from "../pages/badge/Badge";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Hero from "../Hero/Hero";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Hero/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path='login' element={<Login/>} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/goal" element={<Goal />} />
        <Route path="/badge" element={<Badge />} />
        {/* <Route path='/tasks' element={<Tasks />} /> */}
      </Routes>
    </div>
  );
};

export default MainRoutes;
