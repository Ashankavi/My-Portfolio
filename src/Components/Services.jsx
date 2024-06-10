import React, { useState } from 'react';
// Importing images
import IMG1 from '../Assets/Hero/Me2.jpg';
import IMG2 from '../Assets/Hero/Me3.jpg';
import IMG3 from '../Assets/Hero/Me4.jpg';

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    { src: IMG1, name: 'UI/UX Design', description: 'This is the first image' },
    { src: IMG2, name: 'WEB DESING', description: 'This is the second image' },
    { src: IMG3, name: 'GRAPHIC DESIGN', description: 'This is the third image' },
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
    <div className="relative items-center justify-center w-full h-full text-center bg-cover" style={{backgroundImage: `url(${IMG3})`}}>
      <div className="pt-8 text-6xl text-white transform md:text-8xl font-londrina">
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
            <img className="w-full mx-auto transition-transform duration-500 transform hover:scale-110" src={image.src} alt={image.name} />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white transition-opacity duration-300 bg-black bg-opacity-50 opacity-0 hover:opacity-100">
              <h3 className="text-4xl font-bold">{image.name}</h3>
              <p className="text-sm">{image.description}</p>
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
