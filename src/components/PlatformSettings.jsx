import React, { useState } from 'react'
import { Switch, styled } from '@mui/material'
import '../styles/PlatformSettings.css'

const PlatformSettings = () => {
  // Custom styled MUI Switch
  const CustomSwitch = styled(Switch)(({ theme }) => ({
    width: 36,
    height: 19,
    padding: 0,
    marginRight: '20px',
    display: 'flex',
    '&:active': {
      '& .MuiSwitch-thumb': {
        width: 7.5,
      },
      '& .MuiSwitch-switchBase.Mui-checked': {
        transform: 'translateX(18px)',
      },
    },
    '& .MuiSwitch-switchBase': {
      padding: 1.5,
      '&.Mui-checked': {
        transform: 'translateX(17px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: '#0075FF',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      width: 13.5,
      height: 13.5,
      borderRadius: 6.75,
      transition: theme.transitions.create(['width'], {
        duration: 200,
      }),
    },
    '& .MuiSwitch-track': {
      borderRadius: 9.25,
      opacity: 1,
      backgroundColor: '#1B1F3D',
      boxSizing: 'border-box',
    },
  }))

  // State for all toggles
  const [settings, setSettings] = useState({
    emailFollows: true,
    emailAnswers: false,
    emailMentions: true,
    newLaunches: false,
    monthlyUpdates: false,
    newsletter: true,
    weeklyMails: true,
  })

  const handleToggle = (setting) => {
    setSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }))
  }

  return (
    <div className="platform-settings">
      <div className="platform-settings-background"></div>
      
      <div className="platform-settings-title">Platform Settings</div>
      
      <div className="settings-list">
        <div className="settings-section">
          <div className="section-label">ACCOUNT</div>
          
          <div className="setting-item">
            <CustomSwitch 
              checked={settings.emailFollows}
              onChange={() => handleToggle('emailFollows')}
            />
            <span className={`setting-text ${settings.emailFollows ? 'active' : ''}`}>
              New followers
            </span>
          </div>
          
          <div className="setting-item">
            <CustomSwitch 
              checked={settings.emailAnswers}
              onChange={() => handleToggle('emailAnswers')}
            />
            <span className={`setting-text ${settings.emailAnswers ? 'active' : ''}`}>
              Reply notifications
            </span>
          </div>
          
          <div className="setting-item">
            <CustomSwitch 
              checked={settings.emailMentions}
              onChange={() => handleToggle('emailMentions')}
            />
            <span className={`setting-text ${settings.emailMentions ? 'active' : ''}`}>
              Mentions
            </span>
          </div>
        </div>

        <div className="settings-section">
          <div className="section-label">APPLICATION</div>
          
          <div className="setting-item">
            <CustomSwitch 
              checked={settings.newLaunches}
              onChange={() => handleToggle('newLaunches')}
            />
            <span className={`setting-text ${settings.newLaunches ? 'active' : ''}`}>
              Product launches
            </span>
          </div>
          
          <div className="setting-item">
            <CustomSwitch 
              checked={settings.monthlyUpdates}
              onChange={() => handleToggle('monthlyUpdates')}
            />
            <span className={`setting-text ${settings.monthlyUpdates ? 'active' : ''}`}>
              Monthly digest
            </span>
          </div>
          
          <div className="setting-item">
            <CustomSwitch 
              checked={settings.newsletter}
              onChange={() => handleToggle('newsletter')}
            />
            <span className={`setting-text ${settings.newsletter ? 'active' : ''}`}>
              Newsletter
            </span>
          </div>
          
          <div className="setting-item">
            <CustomSwitch 
              checked={settings.weeklyMails}
              onChange={() => handleToggle('weeklyMails')}
            />
            <span className={`setting-text ${settings.weeklyMails ? 'active' : ''}`}>
              Weekly summary
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlatformSettings
