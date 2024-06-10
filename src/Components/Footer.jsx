import React from 'react';
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram, FaGithub, FaBehance, FaDribbble } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative p-6 text-white bg-black">
      <div className="container mx-auto text-center">
        <div className="flex flex-row justify-center gap-2 text-xl text-white ">
            
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#f7bb7e]">
            <FaTwitter />
          </a>
          <a href="https://web.facebook.com/profile.php?id=100012056560141" target="_blank" rel="noopener noreferrer" className="hover:text-[#f7bb7e]">
            <FaFacebook />
          </a>
          <a href="https://www.linkedin.com/in/ashan-kavindu/" target="_blank" rel="noopener noreferrer" className="hover:text-[#f7bb7e]">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/ashxn___/" target="_blank" rel="noopener noreferrer" className="hover:text-[#f7bb7e]">
            <FaInstagram />
          </a>
          <a href="https://github.com/Ashankavi" target="_blank" rel="noopener noreferrer" className="hover:text-[#f7bb7e]">
            <FaGithub />
          </a>
          <a href="https://www.behance.net/ashankavindu2?log_shim_removal=1" target="_blank" rel="noopener noreferrer" className="hover:text-[#f7bb7e]">
            <FaBehance />
          </a>
          <a href="https://dribbble.com/shanuk05" target="_blank" rel="noopener noreferrer" className="hover:text-[#f7bb7e]">
            <FaDribbble />
          </a>
        </div>
        <p className="mt-6 font-londrina">© 2024 AshanKavi. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
