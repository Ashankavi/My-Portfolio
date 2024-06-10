import React, { useState, useEffect } from 'react';
// Importing images
import IMG1 from '../Assets/Hero/Me2.jpg';
import IMG2 from '../Assets/Hero/Me3.jpg';
import IMG3 from '../Assets/Hero/Me4.jpg';

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
    { src: IMG1, name: 'Web Development Project 1', description: 'This is the first web development project', figmaLink: '#', githubLink: '#' },
    { src: IMG2, name: 'Web Development Project 2', description: 'This is the second web development project', figmaLink: '#', githubLink: '#' },
    { src: IMG3, name: 'Web Development Project 3', description: 'This is the third web development project', figmaLink: '#', githubLink: '#' },
    { src: IMG1, name: 'Web Development Project 4', description: 'This is the fourth web development project', figmaLink: '#', githubLink: '#' },
    { src: IMG2, name: 'Web Development Project 5', description: 'This is the fifth web development project', figmaLink: '#', githubLink: '#' },
    { src: IMG3, name: 'Web Development Project 6', description: 'This is the sixth web development project', figmaLink: '#', githubLink: '#' },
  ];

  const uiUxImages = [
    { src: IMG3, name: 'UI/UX Design Project 1', description: 'This is the first UI/UX design project', figmaLink: '#', githubLink: '#' },
    { src: IMG1, name: 'UI/UX Design Project 2', description: 'This is the second UI/UX design project', figmaLink: '#', githubLink: '#' },
    { src: IMG1, name: 'UI/UX Design Project 3', description: 'This is the third UI/UX design project', figmaLink: '#', githubLink: '#' },
    { src: IMG3, name: 'UI/UX Design Project 1', description: 'This is the first UI/UX design project', figmaLink: '#', githubLink: '#' },
    { src: IMG1, name: 'UI/UX Design Project 4', description: 'This is the fourth UI/UX design project', figmaLink: '#', githubLink: '#' },
  ];

  const images = selectedCategory === 'Web Development' ? webDevelopmentImages : uiUxImages;

  const scrollLeft = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const scrollRight = () => {
    setStartIndex((prevIndex) => Math.min(prevIndex + 1, images.length - (isMobile ? 1 : 3)));
  };

  return (
    <div className="relative items-center justify-center w-full h-full p-10 text-center bg-cover" style={{ backgroundImage: `url(${IMG3})` }}>
      <div className="p-8 text-4xl text-white md:text-6xl font-londrina">
        Projects
      </div>
      <div className="flex justify-center mt-4 space-x-4">
        <button
          onClick={() => { setSelectedCategory('Web Development'); setStartIndex(0); }}
          className={`text-xl ${selectedCategory === 'Web Development' ? 'text-[#f7bb7e]' : 'text-white'}`}
        >
          Web Development
        </button>
        <span className="text-xl text-white">|</span>
        <button
          onClick={() => { setSelectedCategory('UI/UX Design'); setStartIndex(0); }}
          className={`text-xl ${selectedCategory === 'UI/UX Design' ? 'text-[#f7bb7e]' : 'text-white'}`}
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
