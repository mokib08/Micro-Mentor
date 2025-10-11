import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Tasks from "../pages/tasks/tasks";
import Goal from "../pages/goal/Goal";
import Badge from "../pages/badge/Badge";

import Hero from "../Hero/Hero";
import Register from "../components/register/Register";
import Login from "../components/login/Login";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Hero/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path='login' element={<Login />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/goal" element={<Goal />} />
        <Route path="/badge" element={<Badge />} />
        {/* <Route path='/tasks' element={<Tasks />} /> */}
      </Routes>
    </div>
  );
};

export default MainRoutes;
