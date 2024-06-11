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
import Windows11 from '../Assets/Project/Web/windows.jpg';



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

    { src: MainPortfolio, name: 'Personal Portfolio', description: 'My website will be all about showcasing my skills and accomplishments.',
    frontend:'Frontend: React JS, Tailwind CSS, JavaScript',design:'', 
    figmaLink: 'https://dribbble.com/shots/24333111-My-Personal-Portfolio', githubLink: 'https://github.com/Ashankavi/My-Portfolio' },

    { src: Windows11, name: 'Windows 11 Theam Personal Portfolio', 
    description: 'A Windows 11 themed portfolio using React.js, Tailwind CSS, and JavaScript, featuring draggable folders with React RND, React Perfect Scrollbar, and React Icons.',
    frontend:'Frontend: React JS, Tailwind CSS, JavaScript',design:'',
     figmaLink: 'https://dribbble.com/shots/24333056-Windows-11-Theam-Personal-Portfolio', githubLink: 'https://github.com/Ashankavi/Windows11-Portfolio' },

    { src: Photographer, name: 'Photographer Portfolio', description: 'The project has a vintage-themed UI using React JS and Tailwind CSS, with About, Services, About Studio, and Contact pages.',
    frontend:'Frontend: React JS, Tailwind CSS, JavaScript',design:'Design: Figma , Photoshop',
     figmaLink: 'https://dribbble.com/shots/24119877-Photographer-Portfolio-Web-Design', githubLink: 'https://github.com/Ashankavi/photographer-portfolio' },

    { src: NehaStore, name: 'Fashion Store Landing Page', 
    description: 'The project has a newspaper-themed UI with featuring Home, About, Trending Products, Purchase Products and Contact pages.',
    frontend:'Frontend: HTML, CSS, JavaScript, JavaScript',design:'Design: Figma , Photoshop',
     figmaLink: 'https://dribbble.com/shots/24280422-Fashion-Landing-Page', githubLink: 'https://github.com/Ashankavi/frontend-internship-test' },

    { src: BeastPolio, name: 'Personal Portfolio 2', description: 'My website will be all about showcasing my skills and accomplishments.',
    frontend:'Frontend: React JS, Tailwind CSS, JavaScript',design:'Design: Figma , Photoshop',
     figmaLink: 'https://dribbble.com/shots/23930662-Front-End-Developer-Portfolio', githubLink: 'https://github.com/Ashankavi/My-Main-Portfolio' },

    { src: LandingPage, name: 'Business Landing Page 1', 
    description: 'I created a React app that displays user data from the JSONPlaceholder API, includes a search bar for filtering by name, and uses CSS-in-JS for styling.',
    frontend:'Frontend: React JS, Tailwind CSS, JavaScript',design:'', 
    figmaLink: 'https://dribbble.com/shots/24333653-Racing-Team-Landing-Page', githubLink: 'https://github.com/Ashankavi/feature-landing-page' },

    { src: BusinessLanding, name: 'Business Landing Page 2', 
    description: 'Discover our React.js and Tailwind CSS powered business landing page. Sleek design, seamless experience. Elevate your online presence today.',
    frontend:'Frontend: React JS, Tailwind CSS, JavaScript',
    design:'', figmaLink: 'https://dribbble.com/shots/24333726-Business-Landing-Website', githubLink: 'https://github.com/Ashankavi/business-react-site' },

  ];

  const uiUxImages = [
    
    { src: Photographer, name: 'Photographer Portfolio', 
    description: 'The project has a vintage-themed UI using React JS and Tailwind CSS, with About, Services, About Studio, and Contact pages.',
    frontend:'Frontend: React JS, Tailwind CSS, JavaScript',design:'Design: Figma , Photoshop',
     figmaLink: 'https://dribbble.com/shots/24119877-Photographer-Portfolio-Web-Design', githubLink: 'https://github.com/Ashankavi/photographer-portfolio' },

     { src: NehaStore, name: 'Fashion Store Landing Page', 
     description: 'The project has a newspaper-themed UI with featuring Home, About, Trending Products, Purchase Products and Contact pages.',
     frontend:'Frontend: HTML, CSS, JavaScript, JavaScript',design:'Design: Figma , Photoshop',
      figmaLink: 'https://dribbble.com/shots/24280422-Fashion-Landing-Page', githubLink: 'https://github.com/Ashankavi/frontend-internship-test' },

    { src: Coffee, name: 'Coffee Shop App', 
        description: 'This is a Coffee Shop App Ui. Hope you guys will like it. Let me know your thoughts on that. ', 
        frontend:'Design: Figma , Photoshop',design:'', 
        figmaLink: 'https://dribbble.com/shots/24037173-Coffee-Shop-App-UI', githubLink: 'https://github.com/Ashankavi' },

        { src: BeastPolio, name: 'Personal Portfolio 2',
         description: 'My website will be all about showcasing my skills and accomplishments.',
        frontend:'Frontend: React JS, Tailwind CSS, JavaScript',design:'Design: Figma , Photoshop',
         figmaLink: 'https://dribbble.com/shots/23930662-Front-End-Developer-Portfolio', githubLink: 'https://github.com/Ashankavi/My-Main-Portfolio' },

    { src: Cinema, name: 'Movie Landing Page',
         description: 'Designed a stunning movie website in Figma, highlighting UI/UX expertise and creativity in design elements.', 
        frontend:'Design: Figma , Photoshop',design:'', 
        figmaLink: 'https://dribbble.com/shots/23870600-Movie-Web-Site-UI-Design', githubLink: 'https://github.com/Ashankavi' },

    { src: HappyToon, name: 'Webtoon Landing Page', 
        description: 'This is a Web Toon Landing Website Ui. Hope you guys will like it. Let me know your thoughts on that.',
        frontend:'Design: Figma , Photoshop',design:'', 
        figmaLink: 'https://dribbble.com/shots/24333264-Web-Toon-Landing-Website', githubLink: 'https://github.com/Ashankavi' },

        { src: HFS, name: 'Organization Landing Page', 
        description: 'This is a hand For Smile Organization Landing Website . Hope you guys will like it. Let me know your thoughts on that.',    
        frontend:'Frontend: React JS, Tailwind CSS, JavaScript', design:'Design: Figma , Photoshop', 
        figmaLink: 'https://www.figma.com/design/nhgBRw3zhXZAFOl5x7id7x/HFS?t=Ch0Arxzx5IR7Abuk-1', githubLink: 'https://github.com/Ashankavi' },

    { src: FashionApp, name: 'Fashion Store App', 
        description: 'This is a Clothing Store App UI Design. Developed a fashion store mobile app with login, ordering, payment options, settings, and a user-friendly cart.', 
        frontend:'Design: Figma , Photoshop',design:'', 
        figmaLink: 'https://dribbble.com/shots/24037313-Clothing-Store-App-UI-Design', githubLink: 'https://github.com/Ashankavi' },

  ];

  const images = selectedCategory === 'Web Development' ? webDevelopmentImages : uiUxImages;

  const scrollLeft = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const scrollRight = () => {
    setStartIndex((prevIndex) => Math.min(prevIndex + 1, images.length - (isMobile ? 1 : 3)));
  };

  return (
    <div id='project' className="relative items-center justify-center w-full h-full p-10 text-center bg-center bg-cover bg-[#0c0c0c]">
      <div className="p-8 text-6xl text-white md:text-8xl font-londrina hover:text-[#f7bb7e]">
        Projects
      </div>
      <div className="flex justify-center mt-4 space-x-4 font-londrina">
        <button
          onClick={() => { setSelectedCategory('Web Development'); setStartIndex(0); }}
          className={`text-3xl uppercase ${selectedCategory === 'Web Development' ? 'text-[#8750F7]' : 'text-white'}`}
        >
          Web Development
        </button>
        <span className="text-3xl text-white uppercase">|</span>
        <button
          onClick={() => { setSelectedCategory('UI/UX Design'); setStartIndex(0); }}
          className={`text-3xl uppercase  ${selectedCategory === 'UI/UX Design' ? 'text-[#f7bb7e]' : 'text-white'}`}
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
          <div className="flex justify-center w-full overflow-hidden font-londrina">
            {images.slice(startIndex, startIndex + (isMobile ? 1 : 3)).map((image, index) => (
              <div key={index} className="relative flex-none w-64 mx-2 md:w-[450px]">
                <img className="w-full h-auto transition-transform duration-500 transform hover:scale-110" src={image.src} alt={image.name} />
                <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300 bg-black bg-opacity-50 opacity-0 hover:opacity-100">
                  <h3 className="text-lg px-2 text-[#ffffff] tracking-wider uppercase sm:text-4xl md:text-4xl">{image.name}</h3>
                  <p className="mb-4 px-8 md:text-[22px] tracking-normal text-white sm:text-2sm">{image.description}</p>
                  <p className="mb-2 md:text-[20px] tracking-normal text-[#f7f3ff] sm:text-2sm">{image.frontend}</p>
                  <p className="mb-4 md:text-[20px]  tracking-normal text-[#ffffff] sm:text-[5px]">{image.design}</p>

                  <div className="flex space-x-4">
                    <a href={image.figmaLink} target="_blank" rel="noopener noreferrer" className=" uppercase px-6 py-2 mt-4 mr-4 text-black hover:bg-[#4fe07f] hover:text-[#ffffff] bg-white  rounded">Design</a>
                    <a href={image.githubLink} target="_blank" rel="noopener noreferrer" className=" uppercase px-6 py-2  mt-4 mr-4 text-black hover:bg-[#ee6d6d] hover:text-[#ffffff] bg-white rounded">GitHub</a>
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
