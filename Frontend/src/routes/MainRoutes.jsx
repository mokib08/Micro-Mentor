import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import Tasks from '../pages/tasks/tasks'
import Goal from '../pages/goal/Goal'
import Badge from '../pages/badge/Badge'

const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/tasks' element={<Tasks />} />
            <Route path='/goal' element={<Goal />} />
            <Route path='/badge' element={<Badge />} />
            {/* <Route path='/tasks' element={<Tasks />} /> */}
        </Routes>
    </div>
  )
}

export default MainRoutes