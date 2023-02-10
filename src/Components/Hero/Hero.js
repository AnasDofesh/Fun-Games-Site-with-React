import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero-main'>
       <div className='hero-text'>
        <h6 className='hero-subtitle'>Welcome to Cyborg</h6>
        <h4 className='hero-title'><em>Browse</em> our popular games here</h4>

        <div className='main-button'>
          <a href='#'>Browse Now</a> 
        </div>

       </div>
    </div>
  )
}

export default Hero