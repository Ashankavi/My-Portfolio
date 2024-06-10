
import React from 'react';

import IMG3 from '../Assets/Hero/Me4.jpg';

const Education = () => {
  return (
    <div className="container p-4 mx-auto bg-cover" style={{backgroundImage: `url(${IMG3})`}}>
        <h1 className='py-2 text-3xl md:text-5xl text-white sm:text-4xl hover:text-[#f7bb7e]'>Hello, I'm</h1>

      <div className="flex flex-col justify-between gap-2 md:flex-row">
        <div className="w-full p-4 text-white md:w-1/2 ">
            <div className=''>
            <h2 className="mb-4 text-xl font-bold">EDUCATION</h2>
            </div>

          <div className="p-8 mb-6 bg-black rounded-2xl hover:bg-[#190f2c]">
            <h3 className="text-lg font-semibold ">2005-2007</h3>
            <p className="font-semibold text-md">NY UNIVERSITY</p>
            <p className="italic text-md">GRAPHIC DESIGN</p>
            <p>Poin dui orci, pretium eget fringilla sit amet, luctus a nisl. Praesent tristique scelerisque sapien at aliquet.</p>
          </div>

          <div className="p-8 mb-6 bg-black rounded-2xl">
            <h3 className="text-lg font-semibold">2007-2008</h3>
            <p className="font-semibold text-md">NY UNIVERSITY</p>
            <p className="italic text-md">WEB DESIGN</p>
            <p>Poin dui orci, pretium eget fringilla sit amet, luctus a nisl. Praesent tristique scelerisque sapien at aliquet.</p>
          </div>

          <div className="p-8 mb-6 bg-black rounded-2xl">
            <h3 className="text-lg font-semibold">2009-2010</h3>
            <p className="font-semibold text-md">NY UNIVERSITY</p>
            <p className="italic text-md">WEB DEVELOPMENT</p>
            <p>Poin dui orci, pretium eget fringilla sit amet, luctus a nisl. Praesent tristique scelerisque sapien at aliquet.</p>
          </div>
        </div>

        <div className="w-full p-4 text-white md:w-1/2">
          <h2 className="mb-4 text-xl font-bold">EXPERIENCE</h2>

          <div className="p-8 mb-6 bg-black rounded-2xl">
            <h3 className="text-lg font-semibold">2007-2010</h3>
            <p className="font-semibold text-md">ENTER AD</p>
            <p className="italic text-md">GRAPHIC DESIGNER</p>
            <p>Poin dui orci, pretium eget fringilla sit amet, luctus a nisl. Praesent tristique scelerisque sapien at aliquet.</p>
          </div>

          <div className="p-8 mb-6 bg-black rounded-2xl">
            <h3 className="text-lg font-semibold">2011-2013</h3>
            <p className="font-semibold text-md">UNIHOST2U INC.</p>
            <p className="italic text-md">SENIOR DESIGNER</p>
            <p>Poin dui orci, pretium eget fringilla sit amet, luctus a nisl. Praesent tristique scelerisque sapien at aliquet.</p>
          </div>

          <div className="p-8 mb-6 bg-black rounded-2xl">
            <h3 className="text-lg font-semibold">2013-2014</h3>
            <p className="font-semibold text-md">EYELINE ANIMATION</p>
            <p className="italic text-md">GRAPHIC DESIGNER</p>
            <p>Poin dui orci, pretium eget fringilla sit amet, luctus a nisl. Praesent tristique scelerisque sapien at aliquet.</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Education;

