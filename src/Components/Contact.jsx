// src/components/Contact.js
import React from 'react';

import Sky1 from '../Assets/Contact/sky2.jpg';

const Contact = () => {
  return (
    <div id='contact' className="flex flex-col p-6 text-white bg-center bg-cover md:flex-row bg-[#000000]">
      <div className="p-4 md:w-1/2">
        
      <h2 className=" font-londrina text-6xl md:text-8xl  text-white transform  hover:text-[#f7bb7e]">Contact</h2>
        <div className="mb-4 ">
          <h3 className="text-xl font-semibold">Chat to us</h3>
          <p>I am here for you ! : <a href="mailto:ashankaviuh@gmail.com" className="text-blue-400">ashankaviuh@gmail.com</a></p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Address</h3>
          <p>Come and say hello. No 300, Citrus Junction, Narawala, Poddala</p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Call us</h3>
          <p>Mon-Fri from 8am to 5pm. +94 775 655 031</p>
        </div>
        <div>
          <iframe
            title="office location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093714!2d144.95373631531078!3d-37.81627974202144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727b0f632aaf1!2sEnvato%20Pty%20Ltd!5e0!3m2!1sen!2sau!4v1630933656787!5m2!1sen!2sau"
            className="w-full h-64 border-[1px] border-white p-2"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className="p-4 hover:bg-gradient-to-r from-[#382753] to-[#170c2b] bg-black   rounded-xl md:w-1/2">
        <h2 className="mb-4 text-3xl font-bold">Got Ideas? I have got the skills. Let's team up.</h2>
        <p className="mb-4">Tell me more about yourself and what you have got in mind.</p>
        <form>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium" htmlFor="name">First Name</label>
            <input
              type="text"
              id="name"
              className="w-full p-2 bg-black border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Name *"
            />
          </div>
          <div className="mb-4 ">
            <label className="block mb-2 text-sm font-medium" htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-2 bg-black border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Email *"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium" htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              className="w-full p-2 bg-black border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Subject *"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium" htmlFor="message">Your Message</label>
            <textarea
              id="message"
              className="w-full p-2 bg-black border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Your message *"
              rows="4"
            ></textarea>
          </div>
          <button type="submit" className="w-full py-2 font-bold text-white  bg-black border border-white rounded-md hover:text-[#000000] hover:bg-[#ffffff]">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
