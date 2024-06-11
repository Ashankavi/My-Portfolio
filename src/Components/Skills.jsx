import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import figma from '../Assets/Skills/figma_icon.png';
import CSharp from '../Assets/Skills/csharp_icon.png';
import ReactJS from '../Assets/Skills/react_icon.png';
import HTML from '../Assets/Skills/html_icon.png';
import CSS from '../Assets/Skills/css_icon.png';
import JS from '../Assets/Skills/js_icon.png';
import tailwind from '../Assets/Skills/tailwind_icon.png';
import PS from '../Assets/Skills/photoshop_icon.png';
import Java from '../Assets/Skills/java_icon.png';

import Commu from '../Assets/Skills/1.png';
import Self from '../Assets/Skills/2.png';
import Speed from '../Assets/Skills/3.png';
import teamW from '../Assets/Skills/4.png';


const skillsData1 = [
  { img: Java, name: 'Java' },
  { img: CSharp, name: 'C#' },
  { img: ReactJS, name: 'React JS' },
  { img: HTML, name: 'HTML' },
  { img: CSS, name: 'CSS' },
  { img: JS, name: 'JavaScript' },
  { img: tailwind, name: 'Tailwind CSS' },
  { img: PS, name: 'Photoshop' },
  { img: figma, name: 'Figma' },
];

const skillsData2 = [
  { img: Commu, name: 'Communication' },
  { img: Self, name: 'Time Management' },
  { img: Speed, name: 'Self Motivation' },
  { img: teamW, name: 'Team Work' },
];

const sliderSettings1 = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const sliderSettings2 = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const Skills = () => {
  return (
    <div id='skills' className="py-20 text-white bg-[#000000] overflow-x-hidden">
      <h2 className="mb-10 text-6xl text-center text-white font-londrina md:text-8xl hover:text-[#f7bb7e]">My Skills</h2>
      
      <h3 className="py-8 mt-10 mb-4 text-2xl font-bold text-center uppercase hover:text-[#8750f7]">Professional Skills</h3>
      <div className="container px-4 mx-auto">
        <Slider {...sliderSettings1}>
          {skillsData1.map((skill, index) => (
            <div key={index} className="p-4 text-center">
              <img src={skill.img} alt={skill.name} className="h-[80px] mx-auto mb-4 w-[80px]" />
              <p className="text-xl text-[#8750f7] font-londrina hover:text-[#ffffff]">{skill.name}</p>
            </div>
          ))}
        </Slider>
      </div>

      <h3 className="py-8 mt-10 mb-4 text-2xl font-bold text-center uppercase hover:text-[#8750f7]">Personal Skills</h3>
      <div className="container px-4 mx-auto">
        <Slider {...sliderSettings2}>
          {skillsData2.map((skill, index) => (
            <div key={index} className="p-4 text-center">
              <img src={skill.img} alt={skill.name} className="h-[90px] mx-auto mb-4 w-[90px]" />
              <p className="text-xl text-[#8750f7] font-londrina hover:text-[#ffffff]">{skill.name}</p>
            </div>
          ))}
        </Slider>
      </div>

      {/* Custom styles for slider dots and arrows */}

      <style jsx>{`
        .slick-dots li button:before {
          font-size: 10px; /* Change dots size */
          color: white; /* Change dots color */
        }
        .slick-dots li.slick-active button:before {
          color: white; /* Change active dot color to white */
        }
        .slick-prev, .slick-next {
          padding: 50px; /* Add padding to arrow buttons */

        }
      `}</style>
    </div>
  );
};

export default Skills;
