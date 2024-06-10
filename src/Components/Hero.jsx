import React from 'react';

import IMG1 from '../Assets/Hero/Me45.jpg';
import './Hero.css'; // Import the CSS file

const Hero = () => {
  return (
    <div className='hero-container'>
      <div className="w-full h-full bg-center bg-cover border-black hero-bg border-y-4" style={{backgroundImage: `url(${IMG1})`}}>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 mt-8'>
          <div>
            <div className='flex flex-col justify-center my-[107px] ml-10 tracking-wide text-white font-londrina'>
              <h1 className='py-2 text-3xl md:text-5xl sm:text-4xl'>Hello, I'm</h1>
              <h1 id="name" className='leading-none uppercase md:text-9xl sm:text-8xl text-7xl text-shadow'>Ashan <br />Kavindu</h1>  
              <h1 className='text-[30px] md:text-5xl sm:text-4xl pb-5'>Front-End-Developer</h1>
            </div>
          </div>
        </div>
        {/* Line elements */}
        <div className="moving-line line1"></div>
        <div className="moving-line line2"></div>
        <div className="moving-line line3"></div>
      </div>
    </div>
  );
}

export default Hero;
