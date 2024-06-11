import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Logo from "..//Assets/logo.png";

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className='flex max-w-auto font-bold px-4 text-white bg-[#000000] relative'>
            <img className='h-[50px]' src={Logo} alt="Logo" />

            <h1 className='w-full text-3xl font-bold text-[#00df9a]'> </h1>
            <ul className='hidden tracking-wide md:flex font-londrina'>
                <li className='p-4 hover:text-[#f7bb7e] cursor-pointer'>
                    <ScrollLink to="about" smooth={true} duration={500}>ABOUT&nbsp;ME</ScrollLink>
                </li>
                <li className='p-4 hover:text-[#f7bb7e] cursor-pointer'>
                    <ScrollLink to="service" smooth={true} duration={500}>SERVICE</ScrollLink>
                </li>
                <li className='p-4 hover:text-[#f7bb7e] cursor-pointer'>
                    <ScrollLink to="education" smooth={true} duration={500}>EDUCATION</ScrollLink>
                </li>
                <li className='p-4 hover:text-[#f7bb7e] cursor-pointer'>
                    <ScrollLink to="skills" smooth={true} duration={500}>SKILLS</ScrollLink>
                </li>
                <li className='p-4 hover:text-[#f7bb7e] cursor-pointer'>
                    <ScrollLink to="project" smooth={true} duration={500}>PROJECT</ScrollLink>
                </li>
                <li className='p-4 hover:text-[#f7bb7e] cursor-pointer'>
                    <ScrollLink to="contact" smooth={true} duration={500}>CONTACT</ScrollLink>
                </li>
            </ul>
            <div onClick={handleNav} className='block mt-4 md:hidden'>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
            <div className={nav ? 'fixed left-0 top-0 w-[40%] h-full border-r border-r-gray-900 bg-[#000000] ease-in-out duration-500 z-50' : 'fixed left-[-100%] z-50'}>
                <img className='h-[60px] m-8 items-center' src={Logo} alt="Logo" />
                <ul className='ml-4 tracking-wide uppercase font-londrina'>

                    <li className='p-4 border-b border-black hover:text-[#f7bb7e] cursor-pointer'>
                        <ScrollLink to="about" smooth={true} duration={500} onClick={handleNav}>ABOUT ME</ScrollLink>
                    </li>
                    <li className='p-4 border-b border-black hover:text-[#f7bb7e] cursor-pointer'>
                        <ScrollLink to="service" smooth={true} duration={500} onClick={handleNav}>SERVICE</ScrollLink>
                    </li>
                    <li className='p-4 border-b border-black hover:text-[#f7bb7e] cursor-pointer'>
                        <ScrollLink to="education" smooth={true} duration={500} onClick={handleNav}>EDUCATION</ScrollLink>
                    </li>
                    <li className='p-4 border-b border-black hover:text-[#f7bb7e] cursor-pointer'>
                        <ScrollLink to="skills" smooth={true} duration={500} onClick={handleNav}>SKILLS</ScrollLink>
                    </li>
                    <li className='p-4 border-b border-black hover:text-[#f7bb7e] cursor-pointer'>
                        <ScrollLink to="project" smooth={true} duration={500} onClick={handleNav}>PROJECT</ScrollLink>
                    </li>
                    <li className='p-4 border-b border-black hover:text-[#f7bb7e] cursor-pointer'>
                        <ScrollLink to="contact" smooth={true} duration={500} onClick={handleNav}>CONTACT</ScrollLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
