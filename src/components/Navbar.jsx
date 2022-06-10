import React, {useState} from 'react'
import Logo from '../assets/Logo/UAC.png'
import { CgMenuRound } from "react-icons/cg";

const Navbar = () => {
    const [nav,setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[60px] flex justify-center items-center px-4 border-y-4 border-white bg-[#021377] text-white z-10'>

        

        <div className='flex flex-col-3 justify-center items-center font-bold'>

            {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden scale-150 z-11'>
                {!nav ? <CgMenuRound /> : <CgMenuRound />}
            </div>

            {/* Menu Desktop */}
            <ul className='hidden md:flex justify-between'>
                <li className='px-4 hover:border-x-4 duration-200'>Home</li>
                <li className='px-4 hover:border-x-4 duration-200'>News</li>
                <li className='px-4 hover:border-x-4 duration-200'>Destinations</li>
            </ul>
            <div className='w-full md:flex mt-20 hover:scale-110 duration-200'>
                <img src={Logo} alt="Logo Image" style={{width: '175px'}} />
            </div>
            <ul className='hidden md:flex justify-between'>
                <li className='px-4 hover:border-x-4 duration-200'>Fleet</li>
                <li className='px-4 hover:border-x-4 duration-200'>Contact</li>
                <li className='px-4 hover:border-x-4 duration-200'>Info</li>
            </ul>

            

            {/* Menu Mobile */}

        </div>
    </div>
  )
}

export default Navbar