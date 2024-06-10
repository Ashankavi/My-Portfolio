import React, { useState, useEffect } from 'react';
// Importing images
import Sky from '../Assets/sky3.jpg';

import NehaStore from '../Assets/Project/UiUX/NehaStore1.jpg';
import Coffee from '../Assets/Project/UiUX/CoffeeApp.jpg';
import BeastPolio from '../Assets/Project/UiUX/BeastPolio.jpg';
import Cinema from '../Assets/Project/UiUX/CinamaHouse.jpg';
import HappyToon from '../Assets/Project/UiUX/HappyToon.jpg';
import HFS from '../Assets/Project/UiUX/HFS.jpg';
import FashionApp from '../Assets/Project/UiUX/FashionApp.jpg';
import Photographer from '../Assets/Project/UiUX/Photographer.jpg';

import MainPortfolio from '../Assets/Project/Web/MainPolio.jpg';
import LandingPage from '../Assets/Project/Web/LandingPage.jpg';
import BusinessLanding from '../Assets/Project/Web/BusinessLanding.jpg';


const Project = () => {
  const [selectedCategory, setSelectedCategory] = useState('Web Development');
  const [startIndex, setStartIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Check on initial render
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const webDevelopmentImages = [
    { src: MainPortfolio, name: 'UI/UX Design Project 4', description: 'This is the fourth UI/UX design project', figmaLink: '#', githubLink: '#' },
    { src: Photographer, name: 'UI/UX Design Project 1', description: 'This is the first UI/UX design project', figmaLink: '#', githubLink: '#' },
    { src: NehaStore, name: 'UI/UX Design Project 3', description: 'This is the third UI/UX design project', figmaLink: '#', githubLink: '#' },
    { src: BeastPolio, name: 'Web Development Project 4', description: 'This is the fourth web development project', figmaLink: '#', githubLink: '#' },
    { src: LandingPage, name: 'Web Development Project 5', description: 'This is the fifth web development project', figmaLink: '#', githubLink: '#' },
    { src: BusinessLanding, name: 'Web Development Project 6', description: 'This is the sixth web development project', figmaLink: '#', githubLink: '#' },
  ];

  const uiUxImages = [
    { src: Photographer, name: 'UI/UX Design Project 4', description: 'This is the fourth UI/UX design project', figmaLink: '#', githubLink: '#' },
    { src: NehaStore, name: 'UI/UX Design Project 1', description: 'This is the first UI/UX design project', figmaLink: '#', githubLink: '#' },
    { src: Coffee, name: 'UI/UX Design Project 2', description: 'This is the second UI/UX design project', figmaLink: '#', githubLink: '#' },
    { src: BeastPolio, name: 'UI/UX Design Project 3', description: 'This is the third UI/UX design project', figmaLink: '#', githubLink: '#' },
    { src: Cinema, name: 'UI/UX Design Project 1', description: 'This is the first UI/UX design project', figmaLink: '#', githubLink: '#' },
    { src: HappyToon, name: 'UI/UX Design Project 4', description: 'This is the fourth UI/UX design project', figmaLink: '#', githubLink: '#' },
    { src: HFS, name: 'UI/UX Design Project 4', description: 'This is the fourth UI/UX design project', figmaLink: '#', githubLink: '#' },
    { src: FashionApp, name: 'UI/UX Design Project 4', description: 'This is the fourth UI/UX design project', figmaLink: '#', githubLink: '#' },
  ];

  const images = selectedCategory === 'Web Development' ? webDevelopmentImages : uiUxImages;

  const scrollLeft = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const scrollRight = () => {
    setStartIndex((prevIndex) => Math.min(prevIndex + 1, images.length - (isMobile ? 1 : 3)));
  };

  return (
    <div className="relative items-center justify-center w-full h-full p-10 text-center bg-center bg-cover" style={{ backgroundImage: `url(${Sky})` }}>
      <div className="p-8 text-6xl text-white md:text-8xl font-londrina">
        Projects
      </div>
      <div className="flex justify-center mt-4 space-x-4 font-londrina">
        <button
          onClick={() => { setSelectedCategory('Web Development'); setStartIndex(0); }}
          className={`text-3xl uppercase ${selectedCategory === 'Web Development' ? 'text-[#f7bb7e]' : 'text-white'}`}
        >
          Web Development
        </button>
        <span className="text-3xl text-white uppercase">|</span>
        <button
          onClick={() => { setSelectedCategory('UI/UX Design'); setStartIndex(0); }}
          className={`text-3xl  ${selectedCategory === 'UI/UX Design' ? 'text-[#f7bb7e]' : 'text-white'}`}
        >
          UI/UX Design
        </button>
      </div>

      <div className="relative mt-8 md:mt-16">
        <div className="flex items-center justify-center">
          <button
            className={`absolute z-10 text transform -translate-y-1/2 left-2 md:left-4 top-1/2 ${startIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={scrollLeft}
            disabled={startIndex === 0}
          >
            <span className="text-2xl md:text-5xl font-londrina hover:text-[#f7bb7e] text-white">{'<'}</span>
          </button>
          <div className="flex justify-center w-full overflow-hidden">
            {images.slice(startIndex, startIndex + (isMobile ? 1 : 3)).map((image, index) => (
              <div key={index} className="relative flex-none w-64 mx-2 md:w-[500px]">
                <img className="w-full h-auto transition-transform duration-500 transform hover:scale-110" src={image.src} alt={image.name} />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white transition-opacity duration-300 bg-black bg-opacity-50 opacity-0 hover:opacity-100">
                  <h3 className="text-lg font-bold md:text-2xl">{image.name}</h3>
                  <p className="mb-4 text-sm">{image.description}</p>

                  <div className="flex space-x-4">
                    <a href={image.figmaLink} target="_blank" rel="noopener noreferrer" className="px-6 py-2 mt-4 mr-4 text-black hover:bg-[#f7bb7e] bg-white  rounded">Figma</a>
                    <a href={image.githubLink} target="_blank" rel="noopener noreferrer" className="px-6 py-2  mt-4 mr-4 text-black hover:bg-[#f7bb7e] bg-white rounded">GitHub</a>
                  </div>

                </div>
              </div>
            ))}
          </div>
          <button
            className={`absolute z-10 transform -translate-y-1/2 right-2 md:right-4 top-1/2 ${startIndex + (isMobile ? 1 : 3) >= images.length ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={scrollRight}
            disabled={startIndex + (isMobile ? 1 : 3) >= images.length}
          >
            <span className=" font-londrina text-2xl md:text-5xl hover:text-[#f7bb7e] text-white">{'>'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
