import React, { useState } from 'react';
// Importing images

import Sky from '../Assets/sky3.jpg';
import WebDesign from '../Assets/Services/WebDesign.jpg';
import graphicDesign from '../Assets/Services/GraphicDesign.jpg';
import UIUX from '../Assets/Services/UIUX.jpg';

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    { src: UIUX, name: 'UI/UX Design', description: 'Elevate your digital presence with our expert UI/UX design service. We create captivating interfaces that engage users and drive results. Lets redefine user experiences together.' },
    { src: WebDesign, name: 'WEB DEVELOPMENT', description: 'Our web development service utilizes React JS, Tailwind CSS, HTML, CSS, and JavaScript to build modern, responsive, and interactive websites tailored to your needs.' },
    { src: graphicDesign, name: 'GRAPHIC DESIGN', description: 'Transform your vision into reality with our graphic design service. Using Photoshop and Illustrator, we create captivating flyers, logos, tickets, banners, and more to elevate your brands presence.' },
  ];

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div id='service' className="relative items-center justify-center w-full h-full tracking-wider text-center uppercase bg-cover font-londrina " style={{backgroundImage: `url(${Sky})`}}>
      <div className="pt-8 text-6xl text-white transform md:text-8xl font-londrina hover:text-[#f7bb7e]">
        Services
      </div>
      
      <div className="grid mt-16 md:grid-cols-3"> 
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative overflow-hidden ${
              index === currentIndex ? 'block' : 'hidden'
            } md:block`}
          >
            <img className="w-full mx-auto uppercase transition-transform duration-500 transform hover:scale-110 " src={image.src} alt={image.name} />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white transition-opacity duration-300 bg-black bg-opacity-50 opacity-0 hover:opacity-100">
              <h3 className="text-5xl  hover:text-[#f7bb7e]">{image.name}</h3>
              <p className="p-8 mt-4 text-xl">{image.description}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        className="absolute left-0 pl-2 transform -translate-y-1/2 font-londrina top-1/2 md:hidden"
        onClick={handlePrevClick}
      >
        <span className="text-4xl hover:text-[#f7bb7e] text-white">{'<'}</span>
      </button>
      <button
        className="absolute right-0 pr-2 transform -translate-y-1/2 font-londrina top-1/2 md:hidden"
        onClick={handleNextClick}
      >
        <span className="text-4xl hover:text-[#f7bb7e] text-white">{'>'}</span>
      </button>
    </div>
  );
};

export default Services;
