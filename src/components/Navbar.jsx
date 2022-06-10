import React from 'react'
import Logo from '../assets/Logo/UAC.png'

const Navbar = () => {
  return (
    <div className='fixed w-full h-[60px] flex justify-center items-center px-4 border-y-4 border-white bg-[#021377] text-white z-10'>
        
        <div className='flex flex-col-3 justify-center items-center font-bold'>
            <ul className='flex justify-between'>
                <li className='px-4 hover:border-x-4 duration-200'>Home</li>
                <li className='px-4 hover:border-x-4 duration-200'>News</li>
                <li className='px-4 hover:border-x-4 duration-200'>Destinations</li>
            </ul>
            <div className='w-full flex mt-20 hover:scale-110 duration-200'>
                <img src={Logo} alt="Logo Image" style={{width: '175px'}} />
            </div>
            <ul className='flex justify-between'>
                <li className='px-4 hover:border-x-4 duration-200'>Fleet</li>
                <li className='px-4 hover:border-x-4 duration-200'>Contact</li>
                <li className='px-4 hover:border-x-4 duration-200'>Info</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar