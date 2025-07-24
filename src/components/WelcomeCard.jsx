import React from 'react'
import '../styles/WelcomeCard.css'
import SmokeEffect from './SmokeEffect'

const WelcomeCard = () => {
  return (
    <div className="welcome-card">
      <div className="welcome-card-background">
        <img 
          className="mercedes-image" 
          src="https://api.builder.io/api/v1/image/assets/TEMP/f4f5176ff0cbb655779449a952c6c3b3b50501f6?width=1532" 
          alt=""
        />
        <img 
          className="background-texture" 
          src="https://api.builder.io/api/v1/image/assets/TEMP/a9fc7a75f8f67b90923fda05e2479a10ab7de50f?width=2008" 
          alt="" 
        />
        <SmokeEffect />
      </div>
      
      <div className="welcome-content">
        <div className="welcome-title">
          <span className="meet-text">MEET DARK</span>
          <span className="water-text">WATER</span>
        </div>
        <div className="welcome-greeting">Nice to see you, Randy Thomas!</div>
        
        <div className="turn-on-link">
          <span className="link-text">Turn on your car</span>
          <svg className="arrow-icon" width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.80469 2.84619L10.4609 6.50244L6.80469 10.1587" stroke="white" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9.95312 6.50269H2.53906" stroke="white" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default WelcomeCard
