
import React from 'react';

import IMG3 from '../Assets/Hero/Me4.jpg';

const Education = () => {
  return (
    <div className="p-4 mx-auto bg-cover" style={{backgroundImage: `url(${IMG3})`}}>
            <div className=''>
            <h2 className="p-8 font-londrina text-6xl md:text-8xl  text-white transform  hover:text-[#f7bb7e]">Education</h2>
            </div>
      <div className="flex flex-col justify-between gap-2 md:flex-row">
        <div className="w-full p-4 text-white md:w-1/2 ">

          <div className="p-8 mb-6 bg-black rounded-2xl hover:bg-gradient-to-r from-[#382753] to-[#170c2b] font-sans font-bold">
            <h3 className="text-2xl font-bold text-[#8750f7] uppercase">2022 Present</h3>
            <p className="text-3xl uppercase">Bsc (Hons). in Computing</p>
            <p className="text-xl font-semibold">IDM Nation Campus</p>
            <p>Successfull Complete</p>
          </div>

          <div className="p-8 mb-6 bg-black rounded-2xl hover:bg-gradient-to-r from-[#382753] to-[#170c2b] font-sans font-bold">
            <h3 className="text-2xl font-bold text-[#8750f7] uppercase">2021 Present</h3>
            <p className="text-3xl uppercase">Diploma in IT (DITEC)</p>
            <p className="text-xl font-semibold">ESOFT Metro Campus</p>
            <p>Successfull Complete</p>
          </div>

          <div className="p-8 mb-6 bg-black rounded-2xl hover:bg-gradient-to-r from-[#382753] to-[#170c2b] font-sans font-bold">
            <h3 className="text-2xl font-bold text-[#8750f7] uppercase">2014 Present</h3>
            <p className="text-3xl uppercase">IDM E-Kids (Explore Kids) L05</p>
            <p className="text-xl font-semibold">IDM Nation Campus</p>
            <p>Successfull Complete</p>
          </div>

        </div>

        <div className="w-full p-4 text-white md:w-1/2 ">

        <div className="p-8 mb-6 bg-black rounded-2xl hover:bg-gradient-to-r from-[#382753] to-[#170c2b] font-sans font-bold">
            <h3 className="text-2xl font-bold text-[#8750f7] uppercase">2022 Present</h3>
            <p className="text-3xl uppercase">G.C.E. Advanced Leve</p>
            <p className="text-xl font-semibold">Vidyaloka College</p>
            <p>Galle</p>
          </div>

          <div className="p-8 mb-6 bg-black rounded-2xl hover:bg-gradient-to-r from-[#382753] to-[#170c2b] font-sans font-bold">
            <h3 className="text-2xl font-bold text-[#8750f7] uppercase">2017 Present</h3>
            <p className="text-3xl uppercase">G.C.E. Ordinary Level (2017)</p>
            <p className="text-xl font-semibold">Vidyaloka College</p>
            <p>Galle</p>
          </div>

          <div className="p-8 mb-6 bg-black rounded-2xl hover:bg-gradient-to-r from-[#382753] to-[#170c2b] font-sans font-bold">
            <h3 className="text-2xl font-bold text-[#8750f7] uppercase">Self Learning Platforms</h3>
            <p className="text-3xl uppercase">W3School , TailwindCSS, React</p>
            <p className="text-xl font-semibold"></p>
            <p></p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Education;

