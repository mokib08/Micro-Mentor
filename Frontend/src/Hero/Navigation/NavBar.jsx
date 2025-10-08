import React, { useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("register");

  return (
    <div>
<<<<<<< HEAD
      <div className="navbar">
        <div className="logo">
          <h1>Micro-Mentor</h1>
=======
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

>>>>>>> b07717d7b88f8bb3610113cbbfe6992d26d263d7
        </div>

        <nav>
          <Link
            to='/register'
            className={
              activeLink === "register" ? "nav-link active" : "nav-link"
            }
            onClick={() => setActiveLink("register")}
          >
            Register
          </Link>

          <Link
            to={"/login"}
            className={activeLink === "login" ? "nav-link active" : "nav-link"}
            onClick={() => setActiveLink("login")}
          >
            <i className="fa-solid fa-arrow-right-to-bracket"></i> Login
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
