import React, {useState} from  'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

import Logo from "..//Assets/logo 2.png"

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }
  return (
    <div className='flex max-w-auto  font-bold px-4 text-white bg-[#000000]'>
        <img className='h-[50px]' src={Logo} /> 

        <h1 className='w-full text-3xl font-bold text-[#00df9a]'> </h1>
        <ul className='hidden tracking-wide md:flex font-londrina'>
            <li className='p-4'>ABOUT&nbsp;ME</li>
            <li className='p-4'>SERVICE</li>
            <li className='p-4'>EDUCATION</li>
            <li className='p-4'>SKILLS</li>
            <li className='p-4'>PROJECT</li>
            <li className='p-4'>CONTACT</li>
        </ul>
        <div onClick={handleNav} className='block mt-4 md:hidden'>
            {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
            
        </div>
        <div className={nav ? 'fixed left-0 top-0 w-[30%] h-full border-r border-r-gray-900 bg-[#72e2ff] ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <img className='h-[60px] m-8' src={Logo} /> 
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'> </h1>

            <ul className='p-4 tracking-wide uppercase font-londrina'>
            <li className='p-4 border-b border-black'>ABOUT ME</li>
            <li className='p-4 border-b border-black'>SERVICE</li>
            <li className='p-4 border-b border-black'>EDUCATION</li>
            <li className='p-4 border-b border-black'>SKILLS</li>
            <li className='p-4 border-b border-black'>PROJECT</li>
            <li className='p-4 border-b border-black'>CONTACT</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar