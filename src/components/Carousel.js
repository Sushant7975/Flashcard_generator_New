import React, { useState } from 'react';
import { FaGreaterThan } from "react-icons/fa6";

const Carousel = ({ terms }) => {
  const [currentTermIndex, setCurrentTermIndex] = useState(0);

  const handleNext = () => {
    setCurrentTermIndex((prevIndex) => (prevIndex === terms.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setCurrentTermIndex((prevIndex) => (prevIndex === 0 ? terms.length - 1 : prevIndex - 1));
  };

  if (!terms || terms.length === 0) {
    return <div>No terms available</div>;
  }

  return (
    <div className="w-[100%] bg-pink-50 mt-5 ">
      <div className="flex">
        <div className='flex flex-col shadow-lg  w-1/4'>
        {terms.map((term, index) => (
          <div className='flex h-full flex-col ml-2 '>
          <div
            key={index}
            
            onClick={() => setCurrentTermIndex(index)}
          >
             {currentTermIndex === index ? <FaGreaterThan /> : null} {term.title} 
          </div>
          </div>
        ))}
        </div>
        <div className=' shadow-xl w-[90%]  ml-5'>
          <div className='h-full w-[100%] ' >
            <p>{terms[currentTermIndex].definition}</p>
            
          </div>
          <div className='flex p-2 m-4'>
             <button className='  m-4' onClick={handlePrev}>&#60;</button>
            <p>{currentTermIndex +1} / {terms.length}</p>
            <button className='  m-4' onClick={handleNext}>&#62;</button>
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default Carousel;
