import React, { useState, useEffect, useRef } from 'react';
import IMG3 from '../Assets/Hero/Me4.jpg';
import IMG4 from '../Assets/Hero/Me2.jpg';
import IMG5 from '../Assets/Hero/Me45.jpg';
import CV from '../Assets/About/MyCV.pdf';

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const textRef = useRef(null);

  const slides = [
    {
      title: "About Me",
      description: "My academic journey has been both rigorous and rewarding. I recently completed my Higher National Diploma in Computing (General) from IDM Nations Campus, complemented by a Diploma in Information Technology from ESOFT Metro Campus. These programs have solidified my knowledge in key web development technologies, including HTML, CSS, Tailwind CSS, React, and JavaScript.",
      details: "With extensive experience in Figma and Adobe Photoshop, I create visually appealing and user-friendly interfaces."
    },
    {
      title: "My Details",
      description: "I’m a creative Front-End Web Developer & UI UX Designer, I look forward to improving my skills at every turn.",
      age: "Age : 23",
      nationality: "Nationality : Sri Lanka",
      address: "Address : No 300, Citrus Junction, Narawala, Poddala",
      email: "Email : uhashankavi@gmail.com",
      language: "Language : English, Sinhala",
    }
  ];

  const images = [IMG3, IMG4, IMG5];

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => {
      clearInterval(imageInterval);
    };
  }, [images.length]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div id='about' className="w-full h-full bg-black">
      <div className="grid h-auto max-w-full mx-auto md:h-screen md:grid-cols-2">
        <div className="relative w-full h-[50vh] md:h-auto">
          <img className="object-cover w-full h-full" src={images[currentImage]} alt="About" />
        </div>
        <div ref={textRef} className="flex flex-col justify-start p-2 overflow-y-auto tracking-wide text-white md:p-10 font-londrina">
          <h1 className="text-4xl md:text-8xl hover:text-[#f7bb7e]">{slides[currentSlide].title}</h1>
          <div>
            <p className="mt-2 text-lg md:text-2xl">{slides[currentSlide].description}</p>
            {slides[currentSlide].details && <p className="mt-2 text-md md:text-xl">{slides[currentSlide].details}</p>}
            {slides[currentSlide].age && <p className="mt-2 ml-4 text-md md:text-xl">{slides[currentSlide].age}</p>}
            {slides[currentSlide].nationality && <p className="mt-2 ml-4 text-md md:text-xl">{slides[currentSlide].nationality}</p>}
            {slides[currentSlide].address && <p className="mt-2 ml-4 text-md md:text-xl">{slides[currentSlide].address}</p>}
            {slides[currentSlide].email && <p className="mt-2 ml-4 text-md md:text-xl">{slides[currentSlide].email}</p>}
            {slides[currentSlide].language && <p className="mt-2 ml-4 text-md md:text-xl">{slides[currentSlide].language}</p>}
          </div>
          <div className='py-8 '>
            {currentSlide === 0 && (
              <a href={CV} download className="py-4 px-8 text-xl text-white border-[1px] border-white hover:border-[#f7bb7e] hover:bg-[#ffffff] hover:text-[#000000] rounded">Download CV</a>
            )}
          </div>
          <div className="flex items-end justify-between mt-2">
            <button onClick={prevSlide} className="mr-4 text-4xl hover:text-[#f7bb7e]">{'<'}</button>
            <button onClick={nextSlide} className="text-4xl hover:text-[#f7bb7e]">{'>'}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
