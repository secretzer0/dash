import React from 'react'
import WelcomeCard from './WelcomeCard'
import CarInformation from './CarInformation'
import ProfileInformation from './ProfileInformation'
import '../styles/ContentCards.css'

const ContentCards = () => {
  return (
    <div className="content-cards">
      <WelcomeCard />
      <ProfileInformation />
      <CarInformation />
    </div>
  )
}

export default ContentCards
