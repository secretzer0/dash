import React from 'react'
import Background from './Background'
import Breadcrumb from './Breadcrumb'
import ProfileElements from './ProfileElements'
import ContentCards from './ContentCards'
import ProjectCard from './ProjectCard'
import PlatformSettings from './PlatformSettings'
import FooterMenu from './FooterMenu'
import '../styles/Dashboard.css'

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Background />
      <div className="dashboard-container">
        <Breadcrumb />
        <ProfileElements />
        <ContentCards />
        <div className="dashboard-bottom-section">
          <PlatformSettings />
          <ProjectCard />
        </div>
      </div>
      <FooterMenu />
    </div>
  )
}

export default Dashboard
