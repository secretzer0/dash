import React from 'react'
import '../styles/Background.css'

const Background = () => {
  return (
    <div className="background">
      <div className="gradient-layer-1"></div>
      <div className="gradient-layer-2"></div>
      <img 
        className="background-blur-image" 
        src="https://api.builder.io/api/v1/image/assets/TEMP/9ed21e60a6697145c59eba57f8679b8e10bc04ad?width=5052" 
        alt=""
      />
    </div>
  )
}

export default Background
