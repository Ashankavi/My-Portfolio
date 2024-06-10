import React, { useState } from 'react';
import IMG3 from '../Assets/About/Me4.jpg';
import CV from '../Assets/About/MyCV.pdf'; // Assuming the CV file is in this path

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "About Me",
      description: "My academic journey has been both rigorous and rewarding. I recently completed my Higher National Diploma in Computing (General) from IDM Nations Campus, complemented by a Diploma in Information Technology from ESOFT Metro Campus. These programs have solidified my knowledge in key web development technologies, including HTML, CSS, Tailwind CSS, React, and JavaScript.",
      details: "Ashan is known for his expertise in web development and graphic design. He has worked on numerous projects, delivering high-quality results."
    },
    {
      title: "Another Text",
      description: "This is another brief description for the second slide.",
      details: "This section provides additional information about Ashan's achievements and skills in the industry."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="w-full h-full bg-black">
      <div className="grid h-auto max-w-full mx-auto md:h-screen md:grid-cols-2">
        <div className="w-full h-64 md:h-full">
          <img className="object-cover w-full h-full" src={IMG3} alt="About" />
        </div>
        <div className="flex flex-col justify-center p-6 tracking-wide text-white md:p-10 font-londrina">
          <h1 className="text-4xl md:text-8xl">{slides[currentSlide].title}</h1>
          <p className="mt-2 text-lg md:text-2xl">{slides[currentSlide].description}</p>
          <p className="mt-2 text-md md:text-xl">{slides[currentSlide].details}</p>
          <div className='py-4 md:py-8'>
            {currentSlide === 0 && (
              <a href={CV} download className="p-2 mt-4 mr-4 text-white bg-blue-500 rounded">Download CV</a>
            )}
          </div>
          <div className="flex items-end justify-between mt-4">
            <button onClick={prevSlide} className="mr-4 text-2xl">{'<'}</button>
            <button onClick={nextSlide} className="text-2xl">{'>'}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
