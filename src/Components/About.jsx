import React, { useState } from 'react';
import IMG3 from '../Assets/About/Me4.jpg';
import CV from '../Assets/About/MyCV.pdf'; // Assuming the CV file is in this path

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "About Me",
      description: "My academic journey has been both rigorous and rewarding. I recently completed my Higher National Diploma in Computing (General) from IDM Nations Campus, complemented by a Diploma in Information Technology from ESOFT Metro Campus. These programs have solidified my knowledge in key web development technologies, including HTML, CSS, Tailwind CSS, React, and JavaScript.",
      details: "With extensive experience in Figma and Adobe Photoshop, I combine my technical skills with a keen eye for design, enabling me to create visually appealing and user-friendly interfaces."
    },
    {
      title: "My Details",
      description: "I’m creative Front-End Web Developer & UI UX Designer, I look forward to improving my skills at every turn.",
      age: "Age : 23",
      nationality: "Nationality : Sri Lanka",
      address: "Address : No 300, Citrus Junction, Narawala, Poddala",
      email: "Email : uhashankavi@gmail.com",
      language: "Language : Engilsh, Sinhala",
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="w-full h-full pb-[50px] bg-black">
      <div className="grid h-auto max-w-full mx-auto md:h-screen md:grid-cols-2">
        <div className="w-full h-64 md:h-full">
          <img className="object-cover w-full h-full" src={IMG3} alt="About" />
        </div>
        <div className="flex flex-col justify-center p-6 tracking-wide text-white md:p-10 font-londrina">
          <h1 className="text-4xl md:text-8xl hover:text-[#f7bb7e]">{slides[currentSlide].title}</h1>
          <div
            style={{ height: '300px', overflow: 'hidden' }} // Fixed height for the text container
          >
            <p className="mt-2 text-lg md:text-2xl">{slides[currentSlide].description}</p>
            <p className="mt-2 text-md md:text-xl">{slides[currentSlide].details}</p>
            <p className="mt-2 ml-4 text-md md:text-xl">{slides[currentSlide].age}</p>
            <p className="mt-2 ml-4 text-md md:text-xl">{slides[currentSlide].nationality}</p>
            <p className="mt-2 ml-4 text-md md:text-xl">{slides[currentSlide].address}</p>
            <p className="mt-2 ml-4 text-md md:text-xl">{slides[currentSlide].email}</p>
            <p className="mt-2 ml-4 text-md md:text-xl">{slides[currentSlide].language}</p>
          </div>
          <div className='py-4 md:py-8'>
            {currentSlide === 0 && (
              <a href={CV} download className="p-2 mt-4 mr-4 text-black hover:bg-[#f7bb7e] bg-white rounded">Download CV</a>
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
