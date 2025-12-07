import React from 'react'
import video2 from "../assets/video1.mp4"
import video1 from "../assets/video1.mp4"

const HeroSection = () => {
  return (
    <div className="flex flex-col- items-center mt-6 lg:mt-20">
        <h1 className=" text-center text-4xl sm-text-6xl lg:text-7xl mx-auto  tracking wide">
            VirtualR Build tools    
            <span className='bg-linear-to-r from-orange-500 to-red-800 text-transparent bg-clip-text'>
             {" "}
             for developers
            </span>
        </h1>
    </div>
  )
}

export default HeroSection
