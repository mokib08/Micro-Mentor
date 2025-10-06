import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <div className='footer-main'>
        <div className="footer">
            <h1>Ready to Start Your Learning Journey?</h1>
            <p>Join Micro-Mentor today and achieve your goals step by step!</p>
            <a href="/register"><i className="fa-solid fa-arrow-right-to-bracket"></i> Sing Up Free </a>
        </div>

        <div className="copyRight">
          <span>&copy; 2025 Micro-Mentor. All Rights Reserved.</span>
        </div>
    </div>
  )
}

export default Footer