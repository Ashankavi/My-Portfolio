import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import invoiceImage from '../Assets/Ashxms.jpg'; // Example image

const Project = () => {
    const cards = [
        {
            id: 1,
            title: "Invoice System",
            description: "Manage your invoices efficiently.Manage your invoices efficiently.Manage your invoices efficiently.Manage your invoices efficiently.",
            image: invoiceImage,
            link1: "https://dribbble.com/shanuk05",
            link2: "/more-info",
            category: "Web Development"
        },

        {
            id: 2,
            title: "Web Development",
            description: "Build robust web applications.",
            image: invoiceImage,
            link1: "/web-development",
            link2: "/more-info",
            category: "Web Development"
        },
        {
            id: 3,
            title: "Custom Software",
            description: "Tailor-made software solutions.",
            image: invoiceImage,
            link1: "/custom-software",
            link2: "/more-info",
            category: "Web Development"
        },

        {
          id: 4,
          title: "Mobile App",
          description: "Develop cutting-edge mobile applications.",
          image: invoiceImage,
          link1: "/mobile-app",
          link2: "/more-info",
          category: "UI/UX Design"
      },
      {
        id: 5,
        title: "Mobile App",
        description: "Develop cutting-edge mobile applications.",
        image: invoiceImage,
        link1: "/mobile-app",
        link2: "/more-info",
        category: "UI/UX Design"
    },
    {
      id: 6,
      title: "Mobile App",
      description: "Develop cutting-edge mobile applications.",
      image: invoiceImage,
      link1: "/mobile-app",
      link2: "/more-info",
      category: "UI/UX Design"
  },
        // Add more cards with respective categories
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState('Web Development'); // Default category

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? filteredCards.length - 1 : prevIndex - 1
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === filteredCards.length - 1 ? 0 : prevIndex + 1
        );
    };

    const filteredCards = cards.filter(card => card.category === selectedCategory);

    return (
        <div className="relative w-full pt-8 text-center bg-red-500">
            <h1 className='uppercase font-bold text-[50px]'>Project</h1>

            {/* Category selection */}
            <h1 className='uppercase font-bold text-[25px]'>
                <span
                    className={`hover:text-yellow-500 cursor-pointer ${selectedCategory === 'Web Development' ? 'text-yellow-500' : ''}`}
                    onClick={() => { setSelectedCategory('Web Development'); setCurrentIndex(0); }}
                >
                    Web Development
                </span>
                {' | '}
                <span
                    className={`hover:text-yellow-500 cursor-pointer ${selectedCategory === 'UI/UX Design' ? 'text-yellow-500' : ''}`}
                    onClick={() => { setSelectedCategory('UI/UX Design'); setCurrentIndex(0); }}
                >
                    UI/UX Design
                </span>
            </h1>

            <div className="flex overflow-hidden">
                {filteredCards.map((card, index) => (
                    <div
                        key={card.id}
                        className={`w-full md:w-1/3 p-4 flex-shrink-0 transition-transform duration-600 ease-in-out ${
                            index === currentIndex ? 'transform translate-x-0' : 'transform translate-x-full'
                        }`}
                        style={{ transform: `translateX(-${currentIndex * 100 / 3}%)` }}
                    >
                        <div className="overflow-hidden text-white bg-[#28193f] rounded-[30px]">
                            <img src={card.image} alt={card.title} className="object-cover rounded-[50px] flex p-8 flex-grow w-[700px] h-[350px] overflow-hidden" />
                            <h2 className="pl-8 mt-2 text-xl font-bold uppercase">{card.title}</h2>
                            <p className="px-8 py-2 pl-8">{card.description}</p>
                            <div className="flex justify-center gap-8 p-8 mt-2 font-bold uppercase">
                                <a href={card.link1} className="py-2 text-black bg-yellow-500 rounded px-7 btn btn-primary">Figma</a>
                                <a href={card.link2} className="py-2 text-black bg-yellow-500 rounded px-7 btn btn-secondary">Github</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center gap-8 pb-8 mt-4">
                <FaChevronLeft
                    onClick={prevSlide}
                    className="text-3xl cursor-pointer hover:text-yellow-500"
                />
                <FaChevronRight
                    onClick={nextSlide}
                    className="text-3xl cursor-pointer hover:text-yellow-500"
                />
            </div>
        </div>
    );
};

export default Project;
