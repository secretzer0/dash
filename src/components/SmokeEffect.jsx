import React, { useEffect, useRef } from 'react'

const SmokeEffect = () => {
  const canvasRef = useRef(null)
  
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const context = canvas.getContext('2d')
    
    // Set canvas size to match container
    const canvasWidth = 368
    const canvasHeight = 377
    canvas.width = canvasWidth
    canvas.height = canvasHeight
    
    // Create an array to store our particles
    const particles = []
    
    // The amount of particles to render
    const particleCount = 30
    
    // The maximum velocity in each direction
    const maxVelocity = 2
    
    // The target frames per second
    const targetFPS = 33
    
    // Create an image object (only need one instance)
    const imageObj = new Image()
    
    // Once the image has been downloaded then set the image on all of the particles
    imageObj.onload = function() {
      particles.forEach(function(particle) {
        particle.setImage(imageObj)
      })
    }
    
    // Once the callback is arranged then set the source of the image
    imageObj.src = "http://www.blog.jonnycornwell.com/wp-content/uploads/2012/07/Smoke10.png"
    
    // A function to create a particle object.
    function Particle(context) {
      // Set the initial x and y positions
      this.x = 0
      this.y = 0
      
      // Set the initial velocity
      this.xVelocity = 0
      this.yVelocity = 0
      
      // Set the radius
      this.radius = 5
      
      // Store the context which will be used to draw the particle
      this.context = context
      
      // The function to draw the particle on the canvas.
      this.draw = function() {
        // If an image is set draw it
        if(this.image){
          this.context.drawImage(this.image, this.x-128, this.y-128)
          // If the image is being rendered do not draw the circle so break out of the draw function
          return
        }
        // Draw the circle as before, with the addition of using the position and the radius from this object.
        this.context.beginPath()
        this.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false)
        this.context.fillStyle = "rgba(0, 255, 255, 1)"
        this.context.fill()
        this.context.closePath()
      }
      
      // Update the particle.
      this.update = function() {
        // Update the position of the particle with the addition of the velocity.
        this.x += this.xVelocity
        this.y += this.yVelocity
        
        // Check if has crossed the right edge
        if (this.x >= canvasWidth) {
          this.xVelocity = -this.xVelocity
          this.x = canvasWidth
        }
        // Check if has crossed the left edge
        else if (this.x <= 0) {
          this.xVelocity = -this.xVelocity
          this.x = 0
        }
        
        // Check if has crossed the bottom edge
        if (this.y >= canvasHeight) {
          this.yVelocity = -this.yVelocity
          this.y = canvasHeight
        }
        
        // Check if has crossed the top edge
        else if (this.y <= 0) {
          this.yVelocity = -this.yVelocity
          this.y = 0
        }
      }
      
      // A function to set the position of the particle.
      this.setPosition = function(x, y) {
        this.x = x
        this.y = y
      }
      
      // Function to set the velocity.
      this.setVelocity = function(x, y) {
        this.xVelocity = x
        this.yVelocity = y
      }
      
      this.setImage = function(image){
        this.image = image
      }
    }
    
    // A function to generate a random number between 2 values
    function generateRandom(min, max){
      return Math.random() * (max - min) + min
    }
    
    // Create the particles and set their initial positions and velocities
    for(var i=0; i < particleCount; ++i){
      var particle = new Particle(context)
      
      // Set the position to be inside the canvas bounds
      particle.setPosition(generateRandom(0, canvasWidth), generateRandom(0, canvasHeight))
      
      // Set the initial velocity to be either random and either negative or positive
      particle.setVelocity(generateRandom(-maxVelocity, maxVelocity), generateRandom(-maxVelocity, maxVelocity))
      particles.push(particle)
    }
    
    // The function to draw the scene
    function draw() {
      // Clear the drawing surface for transparency
      context.clearRect(0, 0, canvasWidth, canvasHeight)
      
      // Go through all of the particles and draw them.
      particles.forEach(function(particle) {
        particle.draw()
      })
    }
    
    // Update the scene
    function update() {
      particles.forEach(function(particle) {
        particle.update()
      })
    }
    
    // If the context is set then we can draw the scene
    if (context) {
      const interval = setInterval(function() {
        // Update the scene before drawing
        update()
        
        // Draw the scene
        draw()
      }, 1000 / targetFPS)
      
      // Cleanup
      return () => clearInterval(interval)
    }
  }, [])
  
  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '20px'
      }}
    />
  )
}

export default SmokeEffect