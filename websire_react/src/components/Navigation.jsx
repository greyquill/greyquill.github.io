import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="my-12">
      <h2 className="text-2xl font-tektur text-gray-800 text-center mb-6">Explore More</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link to="/about-us" className="bg-white hover:bg-blue-50 transition-colors duration-300 p-6 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-tektur text-blue-600 mb-2">About Us</h3>
          <p className="text-gray-600">Meet our team of industry veterans and learn about our approach</p>
        </Link>
        <Link to="/overall-process" className="bg-white hover:bg-blue-50 transition-colors duration-300 p-6 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-tektur text-blue-600 mb-2">Our Process</h3>
          <p className="text-gray-600">A summary of our approach to turning business challenges into effective solutions</p>
        </Link>
        <a href="https://calendly.com/greyquill/30min" target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-blue-50 transition-colors duration-300 p-6 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-tektur text-blue-600 mb-2">Get Started</h3>
          <p className="text-gray-600">Schedule your free discovery call and consultation</p>
        </a>
      </div>
    </nav>
  );
};

export default Navigation;