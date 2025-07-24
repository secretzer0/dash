import React, { useState, useEffect, useRef } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import { SparkLineChart } from '@mui/x-charts/SparkLineChart'
import 'react-circular-progressbar/dist/styles.css'
import '../styles/CarInformation.css'

// Custom hook for animated number counting
const useAnimatedNumber = (value, duration = 1000) => {
  const [displayValue, setDisplayValue] = useState(value)
  const previousValue = useRef(value)
  
  useEffect(() => {
    const startValue = previousValue.current
    const endValue = value
    const startTime = Date.now()
    
    const updateNumber = () => {
      const now = Date.now()
      const progress = Math.min((now - startTime) / duration, 1)
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      
      const currentValue = startValue + (endValue - startValue) * easeOutQuart
      setDisplayValue(Math.round(currentValue))
      
      if (progress < 1) {
        requestAnimationFrame(updateNumber)
      } else {
        previousValue.current = endValue
      }
    }
    
    requestAnimationFrame(updateNumber)
  }, [value, duration])
  
  return displayValue
}

const CarInformation = () => {
  const [batteryLevel, setBatteryLevel] = useState(68)
  const [efficiencyData, setEfficiencyData] = useState([20, 25, 22, 28, 30, 35, 32, 38, 40, 35])
  const [efficiencyValue, setEfficiencyValue] = useState(20)
  const [batteryHealth, setBatteryHealth] = useState(76)
  const [consumption, setConsumption] = useState(163)
  const [weeklyDistance, setWeeklyDistance] = useState(1342)
  const [weeklyData, setWeeklyData] = useState([30, 35, 33, 40, 38, 42, 45, 43, 48, 46])
  
  // Use animated values for display
  const animatedBatteryLevel = useAnimatedNumber(batteryLevel, 1500)
  const animatedEfficiency = useAnimatedNumber(efficiencyValue, 1500)
  const animatedBatteryHealth = useAnimatedNumber(batteryHealth, 1500)
  const animatedConsumption = useAnimatedNumber(consumption, 1500)
  const animatedWeeklyDistance = useAnimatedNumber(weeklyDistance, 1500)

  // Continuous wave animation for sparklines
  useEffect(() => {
    let animationFrame
    let time = 0
    let lastProjectedUpdate = Date.now()
    let nextProjectedInterval = 2000 + Math.random() * 3000 // Random interval 2-5 seconds
    
    const updateData = () => {
      time += 0.005 // Slower increment for gentler animation
      const now = Date.now()
      
      // Battery level is the primary driver - slowly cycles between charging and discharging
      const batteryWave = Math.sin(time * 0.15) * 30 + 55 // Oscillates between 25% and 85%
      const currentBatteryLevel = Math.round(Math.max(20, Math.min(100, batteryWave)))
      setBatteryLevel(currentBatteryLevel)
      
      // Battery health is linked to battery level - decreases as battery level gets lower
      const healthImpact = (100 - currentBatteryLevel) * 0.15 // Lower battery = worse health
      const baseHealth = 85 - healthImpact
      const healthWave = Math.sin(time * 0.1) * 3 + baseHealth
      setBatteryHealth(Math.round(Math.max(70, Math.min(100, healthWave))))
      
      // Create smooth wave patterns for efficiency data (independent) - 69% faster
      setEfficiencyData(prev => {
        return prev.map((_, idx) => {
          // Create a smooth sine wave with some randomness
          const baseWave = Math.sin((time * 1.69 + idx * 0.507)) * 10 + 25
          const noise = Math.sin(time * 1.352 + idx) * 2
          return Math.max(0, Math.min(50, baseWave + noise))
        })
      })
      
      // Update efficiency value much slower
      setEfficiencyValue(prev => {
        const newVal = Math.round(Math.sin(time * 0.05) * 12)  // 10x slower
        return newVal
      })
      
      // Create different wave pattern for weekly data (like efficiency but different values) - 69% faster
      setWeeklyData(prev => {
        return prev.map((_, idx) => {
          // Create a smooth wave pattern with different parameters than efficiency
          const baseWave = Math.sin((time * 1.352 + idx * 0.676)) * 12 + 38
          const noise = Math.sin(time * 2.028 + idx * 0.5) * 3
          return Math.max(20, Math.min(60, baseWave + noise))
        })
      })
      
      // Update other metrics independently with smooth transitions
      setConsumption(prev => {
        const wave = Math.sin(time * 0.18) * 15 + 170
        return Math.round(Math.max(140, Math.min(200, wave)))
      })
      
      // Update projected distance only at random intervals (2-5 seconds)
      if (lastProjectedUpdate === 0 || now - lastProjectedUpdate >= nextProjectedInterval) {
        lastProjectedUpdate = now
        nextProjectedInterval = 2000 + Math.random() * 3000 // Set next random interval
        
        setWeeklyDistance(prev => {
          // Random change between -0.15 and +0.15 km (converted to meters for precision)
          const changeInMeters = (Math.random() * 300) - 150 // -150 to +150 meters
          const newValue = prev + changeInMeters
          return Math.round(Math.max(1000, Math.min(2000, newValue)))
        })
      }
      
      animationFrame = requestAnimationFrame(updateData)
    }
    
    animationFrame = requestAnimationFrame(updateData)
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [])
  return (
    <div className="car-information">
      <div className="car-information-background"></div>

      <div className="car-header">
        <div className="car-title">Car Informations</div>
        <div className="car-subtitle">Hello, Mark Johnson! Your Car is ready.</div>
      </div>

      <div className="current-load-section">
        <div className="current-load-circle">
          <svg className="background-circle" width="171" height="171" viewBox="0 0 171 171" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.9" filter="url(#filter0_i_1702_9723)">
              <circle cx="85.5" cy="85.5" r="85.5" fill="url(#paint0_linear_1702_9723)"/>
            </g>
            <defs>
              <filter id="filter0_i_1702_9723" x="-120" y="-120" width="411" height="411" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dx="-12" dy="-17"/>
                <feGaussianBlur stdDeviation="9"/>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.0423632 0 0 0 0 0.055077 0 0 0 0 0.179036 0 0 0 0.74 0"/>
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1702_9723"/>
              </filter>
              <linearGradient id="paint0_linear_1702_9723" x1="239.068" y1="186.357" x2="46.8211" y2="7.77872" gradientUnits="userSpaceOnUse">
                <stop stopColor="#060B28" stopOpacity="0.7"/>
                <stop offset="0.506311" stopColor="#080D25" stopOpacity="0.71216"/>
                <stop offset="1" stopColor="#0A0E23" stopOpacity="0.35"/>
              </linearGradient>
            </defs>
          </svg>

          <div className="progress-ring">
            <svg style={{ position: 'absolute', width: 0, height: 0 }}>
              <defs>
                <linearGradient id="batteryGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#05CD99" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#05CD99" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#05CD99" stopOpacity="1" />
                </linearGradient>
              </defs>
            </svg>
            <CircularProgressbar
              value={batteryLevel * 0.917} // Scale to 330 degrees (330/360 = 0.917)
              strokeWidth={12}
              styles={buildStyles({
                rotation: 0.542, // Start at 195 degrees (195/360 = 0.542)
                pathTransitionDuration: 2,
                pathColor: `url(#batteryGradient)`,
                trailColor: 'transparent',
                strokeLinecap: 'round',
              })}
            />
          </div>

          <div className="score-content">
            <svg className="bolt-icon" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_1702_9728)">
                <path d="M13.7508 26.25H12.5008L13.7508 17.5H8.42578C8.42578 17.5 13.0258 9.425 16.2508 3.75H17.5008L16.2508 12.5H21.6008L13.7508 26.25Z" fill="#09AD8F"/>
              </g>
              <defs>
                <clipPath id="clip0_1702_9728">
                  <rect width="30" height="30" fill="white"/>
                </clipPath>
              </defs>
            </svg>
            <div className="score-percentage">{animatedBatteryLevel}%</div>
            <div className="score-label">Current load</div>
          </div>
        </div>

        <div className="time-info">
          <div className="time-value">0h 58 min</div>
          <div className="time-label">Time to full charge</div>
        </div>
      </div>

      <div className="metrics-grid">
        <div className="metric-card battery-health">
          <div className="metric-content">
            <div className="metric-label">Battery Health</div>
            <div className="metric-value">{animatedBatteryHealth}%</div>
          </div>
          <div className="metric-icon">
            <div className="icon-background"></div>
            <svg className="car-icon" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_1702_9762)">
                <path d="M22.0733 2.34496C21.84 1.65663 21.1867 1.16663 20.4167 1.16663H7.58333C6.81333 1.16663 6.17167 1.65663 5.92667 2.34496L3.5 9.33329V18.6666C3.5 19.3083 4.025 19.8333 4.66667 19.8333H5.83333C6.475 19.8333 7 19.3083 7 18.6666V17.5H21V18.6666C21 19.3083 21.525 19.8333 22.1667 19.8333H23.3333C23.975 19.8333 24.5 19.3083 24.5 18.6666V9.33329L22.0733 2.34496ZM7.99167 3.49996H19.9967L21.2567 7.12829H6.73167L7.99167 3.49996ZM22.1667 15.1666H5.83333V9.33329H22.1667V15.1666Z" fill="white"/>
                <path d="M8.75 13.9999C9.7165 13.9999 10.5 13.2164 10.5 12.2499C10.5 11.2834 9.7165 10.4999 8.75 10.4999C7.7835 10.4999 7 11.2834 7 12.2499C7 13.2164 7.7835 13.9999 8.75 13.9999Z" fill="white"/>
                <path d="M19.25 13.9999C20.2165 13.9999 21 13.2164 21 12.2499C21 11.2834 20.2165 10.4999 19.25 10.4999C18.2835 10.4999 17.5 11.2834 17.5 12.2499C17.5 13.2164 18.2835 13.9999 19.25 13.9999Z" fill="white"/>
                <path d="M8.16602 23.3333H12.8327V21L19.8327 24.5H15.166V26.8333L8.16602 23.3333Z" fill="white"/>
              </g>
              <defs>
                <clipPath id="clip0_1702_9762">
                  <rect width="28" height="28" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>

        <div className="metric-card efficiency">
          <div className="metric-content">
            <div className="metric-label">Efficiency</div>
            <div className="metric-value">{animatedEfficiency > 0 ? '+' : ''}{animatedEfficiency}%</div>
          </div>
          <div className="efficiency-chart">
            <SparkLineChart
              data={efficiencyData}
              height={52}
              width={85}
              colors={['#01B574']}
              curve="smooth"
              area
              showHighlight
              showTooltip
              sx={{
                '.MuiAreaElement-root': {
                  fill: 'url(#efficiencyGradient)',
                  fillOpacity: 0.3,
                },
                '.MuiLineElement-root': {
                  strokeWidth: 2,
                },
              }}
            >
              <defs>
                <linearGradient id="efficiencyGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#01B574" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#01B574" stopOpacity="0" />
                </linearGradient>
              </defs>
            </SparkLineChart>
          </div>
        </div>

        <div className="metric-card consumption">
          <div className="metric-content">
            <div className="metric-label">Consumption</div>
            <div className="metric-value">{animatedConsumption}W/km</div>
          </div>
          <div className="metric-icon">
            <div className="icon-background"></div>
            <svg className="lightning-icon" width="18" height="24" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.8 -3.14722e-07L10.8 9.6L18 9.6L7.2 24L7.2 14.4L1.2779e-06 14.4L10.8 -3.14722e-07Z" fill="white"/>
            </svg>
          </div>
        </div>

        <div className="metric-card this-week">
          <div className="metric-content">
            <div className="metric-label">Projected</div>
            <div className="metric-value">{(animatedWeeklyDistance / 1000).toFixed(3)}km</div>
          </div>
          <div className="week-chart">
            <SparkLineChart
              data={weeklyData}
              height={52}
              width={85}
              colors={['#582CFF']}
              curve="smooth"
              area
              showHighlight
              showTooltip
              sx={{
                '.MuiAreaElement-root': {
                  fill: 'url(#projectedGradient)',
                  fillOpacity: 0.3,
                },
                '.MuiLineElement-root': {
                  strokeWidth: 2,
                },
              }}
            >
              <defs>
                <linearGradient id="projectedGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#582CFF" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#582CFF" stopOpacity="0" />
                </linearGradient>
              </defs>
            </SparkLineChart>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CarInformation
