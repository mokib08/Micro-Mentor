import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import Home from '../home/Home'
import Tasks from '../tasks/tasks'
import Goal from '../goal/Goal'
import Badge from '../badge/Badge'

const Sidebar = () => {
  return (
    <div>
        <div>
           <NavLink className={(e) => (e.isActive ? 'blue' : "")} to="/home">Home</NavLink>
           <NavLink className={(e) => (e.isActive ? 'blue' : "")} to="/tasks">Tasks</NavLink>
           <NavLink className={(e) => (e.isActive ? 'blue' : "")} to="/goal">Goal</NavLink>
           <NavLink className={(e) => (e.isActive ? 'blue' : "")} to="/badge">Badge</NavLink>
        </div>
    </div>
  )
}

export default Sidebar