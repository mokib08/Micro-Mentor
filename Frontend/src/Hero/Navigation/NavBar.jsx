import React, { useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("register");

  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <h1>Micro-Mentor</h1>
        </div>

        <nav>
          <Link
            to="/register"
            className={
              activeLink === "register" ? "nav-link active" : "nav-link"
            }
          >
            Register
          </Link>

          <Link
            to={"/login"}
            className={activeLink === "login" ? "nav-link active" : "nav-link"}
          >
            <i className="fa-solid fa-arrow-right-to-bracket"></i> Login
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
