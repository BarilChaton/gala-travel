import React from 'react'
import videoBg from '../assets/Vids/space.mp4'

const Hero = () => {
  return (
    <div class="scrollbar-hide" className='w-full h-[100vh]'>
        <video className='w-full h-full fixed object-cover' src={videoBg} autoPlay loop muted />
    </div>
  )
}

export default Hero