import React from 'react'
import Pic from '../components/MobileSide/Pic'
import Hero from '../components/MobileSide/Hero'

const  HomeMobile = () => {
  return (
    <div id="home" className="flex justify-center items-center">
      <div className="flex">
        <div className="flex flex-col">
          {/* Right Side */}
          <div className="text-white">
            <Pic />
          </div>
          {/* Left Side */}
          <div className="text-white">
            <Hero />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeMobile