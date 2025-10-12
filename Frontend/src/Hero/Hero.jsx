import React from "react";
import NavBar from './Navigation/NavBar'
import './hero.scss'
import Header from './header/Header'
import ChooseUs from './ChooseUs/ChooseUs'
import HowItsWork from './chooseUs/HowItsWork'
import Dashboard from './dashbord/Dashboard'
import Review from './review/Review'
import Footer from "../pages/footer/Footer";

const Hero = () => {
  return (
    <div className="hero-main">
      <div className="hero-wrapper">
          <NavBar />
          <Header />
          <ChooseUs />
          <HowItsWork />
          <Dashboard />
          <Review />
      </div>
      
      <Footer />
    </div>
  );
};

export default Hero;
