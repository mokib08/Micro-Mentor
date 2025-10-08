import { Routes, Route } from 'react-router-dom'
import React from 'react'
import Home from './pages/home/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Hero from './Hero/Hero'

const AppRoutes = () => {
  return (
      
          <Routes>
              <Route path='/' element={<Hero />} />
              <Route path='/register' element={<Register/>} />
              <Route path='/login' element={<Login/> } />
        </Routes>
   
  )
}

export default AppRoutes