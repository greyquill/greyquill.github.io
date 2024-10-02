import React from 'react';
import bannerImage from '../assets/banner-pic.jpeg';

function Banner() {
  return (
    <div className="flex flex-col md:flex-row items-center">
      <div className="md:w-1/2">
        <h1 className="text-4xl md:text-5xl font-bold text-[#0B4F88] text-center justify-center">
          Digital Solutions and Outcomes <br />
          <span className="border-b border-[#0B4F88]">Simplified</span>
        </h1>
      </div>
      <div className="md:w-1/2 mt-4 md:mt-0">
        <img src={bannerImage} alt="Digital Solutions and Outcomes - Simplified" className="w-full" />
      </div>
    </div>
  );
}

export default Banner;