// src/components/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <div className="flex flex-col p-6 text-white bg-black md:flex-row">
      <div className="p-4 md:w-1/2">
        <h2 className="mb-4 text-3xl font-bold">REACH OUT ME</h2>
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Chat to us</h3>
          <p>Our friendly team is there to help: <a href="mailto:help.info@domainname.com" className="text-blue-400">help.info@domainname.com</a></p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Visit us</h3>
          <p>Come say hello at our office HQ. Warnwe Park Streetperrine, FL 33157 New York City</p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Call us</h3>
          <p>Mon-Fri from 8am to 5pm. +01 (555) 000-0000</p>
        </div>
        <div>
          <iframe
            title="office location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093714!2d144.95373631531078!3d-37.81627974202144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727b0f632aaf1!2sEnvato%20Pty%20Ltd!5e0!3m2!1sen!2sau!4v1630933656787!5m2!1sen!2sau"
            className="w-full h-64 border-0"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className="p-4 bg-black border-[1px] border-white rounded-xl md:w-1/2">
        <h2 className="mb-4 text-3xl font-bold">Got Ideas? We have got the skills. Let's team up.</h2>
        <p className="mb-4">Tell us more about yourself and what you have got in mind.</p>
        <form>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium" htmlFor="name">First Name</label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Name *"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium" htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Email *"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium" htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Subject *"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium" htmlFor="message">Your Message</label>
            <textarea
              id="message"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Your message *"
              rows="4"
            ></textarea>
          </div>
          <button type="submit" className="w-full py-2 font-bold text-white bg-black rounded-md hover:bg-gray-800">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
