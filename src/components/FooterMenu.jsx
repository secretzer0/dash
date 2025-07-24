import React from 'react'
import '../styles/FooterMenu.css'

const FooterMenu = () => {
  return (
    <div className="footer-menu">
      <div className="footer-copyright">
        <span>© 2025, OverSiteAI, LLC</span>
      </div>
      <div className="footer-menu-links">
        <div className="menu-link">Marketplace</div>
        <div className="menu-link">Blog</div>
        <div className="menu-link">License</div>
      </div>
    </div>
  )
}

export default FooterMenu
