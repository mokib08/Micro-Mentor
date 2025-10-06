import React from 'react'
import headerImage1 from '../../assets/image/header-img-1.jpg'
import headerImage2 from '../../assets/image/header-img-2.jpg'
import headerImage3 from '../../assets/image/header-img-3.jpg'
import headerImage4 from '../../assets/image/header-img-4.jpg'
import Graduation from '../../assets/image/Graduation.png'
import './header.scss'


const Header = () => {
  return (
    <>
      <div className='Header-main' >
        <div className='Header-left' >
          <h1>Achieve Your Learning Goals with Micro-Mentor Platform</h1>
          <p>Stay consistent, track progress, and reach your goals with AI-powered micro-goals & weekly reviews.</p>
          <div className='header-bottom'>
            <button>Get Start</button>
            <div className='review-img'>
              <img src={headerImage1} alt="" />
              <img src={headerImage2} alt="" />
              <img src={headerImage3} alt="" />
              <img src={headerImage4} alt="" />

              <span>25k+</span>
            </div>
          </div>
        </div>
        <div className='header-right'>
          <div className="right-img">
            <img src={Graduation} alt="" />
          </div>
        </div>
      </div>


    </>
  )
}

export default Header