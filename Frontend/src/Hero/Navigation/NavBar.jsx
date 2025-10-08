import React, { useState } from 'react'
import './Navbar.scss'


const NavBar = () => {

  const [activeLink, setActiveLink] = useState('register');

  return (
    <div>
        <div className="navbar">
            <div className="logo">
                <h1>Micro-Mentor</h1>
            </div>

             <nav>
                <a 
                  href="#register"
                  className={activeLink === 'register' ? 'nav-link active' : 'nav-link'}
                  onClick={() => setActiveLink('register')}
                >
                  Register
                </a>
                
                <a 
                  href="#login"
                  className={activeLink === 'login' ? 'nav-link active' : 'nav-link'}
                  onClick={() => setActiveLink('login')}
                >
                  <i className="fa-solid fa-arrow-right-to-bracket"></i> Login
                </a>
             </nav>

        </div>
    </div>
  )
}

export default NavBar