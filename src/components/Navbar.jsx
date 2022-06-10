import React, {useState} from 'react'
import Logo from '../assets/Logo/UAC.png'
import { CgMenuRound, CgCloseO } from "react-icons/cg";
import {Link} from 'react-scroll'

const Navbar = () => {
    const [nav,setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[60px] flex justify-center items-center px-4 border-y-4 border-white bg-[#021377] text-white z-10'>
        <div className='flex flex-col-3 justify-center items-center font-bold'>

            {/* Menu Desktop */}
            <ul className='hidden md:flex justify-between'>
                <li className='px-4 hover:border-x-4 duration-200'>
                    <Link to="hero" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='px-4 hover:border-x-4 duration-200'>
                    <Link to="news" smooth={true} duration={500}>
                        News
                    </Link>
                </li>
                <li className='px-4 hover:border-x-4 duration-200'>
                    <Link to="destinations" smooth={true} duration={500}>
                        Destinations
                    </Link>
                </li>
            </ul>

            <div className={!nav ? 'w-full md:flex mt-20 hover:scale-110 duration-200' : 'hidden'}>
                <img src={Logo} alt="Logo Image" style={{width: '175px'}} />
            </div>

            <ul className='hidden md:flex justify-between'>
                <li className='px-4 hover:border-x-4 duration-200'>
                    <Link to="fleet" smooth={true} duration={500}>
                        Fleet
                    </Link>
                </li>
                <li className='px-4 hover:border-x-4 duration-200'>
                    <Link to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
                <li className='px-4 hover:border-x-4 duration-200'>
                    <Link to="info" smooth={true} duration={500}>
                        Info
                    </Link>
                </li>
            </ul>

            {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden absolute right-2 scale-150 z-12'>
                {!nav ? <CgMenuRound /> : <CgCloseO />}
            </div>

            {/* Menu Mobile */}
            <ul className={!nav ? 'hidden' : 'absolute right-0 w-[75%] h-[500px] mt-[110.5%] bg-[#021377] border-l-4 border-b-4 border-white text-white justify-center items-center'}>
                <li className='py-6 text-2xl'>
                    <Link to="hero" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='py-6 text-2xl'>
                    <Link to="news" smooth={true} duration={500}>
                        News
                    </Link>
                </li>
                <li className='py-6 text-2xl'>
                    <Link to="destinations" smooth={true} duration={500}>
                        Destinations
                    </Link>
                </li>
                <li className='py-6 text-2xl'>
                    <Link to="fleet" smooth={true} duration={500}>
                        Fleet
                    </Link>
                </li>
                <li className='py-6 text-2xl'>
                    <Link to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
                <li className='py-6 text-2xl'>
                    <Link to="info" smooth={true} duration={500}>
                        Info
                    </Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar