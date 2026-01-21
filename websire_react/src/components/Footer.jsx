import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-100 text-black text-center py-6 px-4" role="contentinfo">
      <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-4">
        <span>© {new Date().getFullYear()} Greyquill Software</span>
        <nav aria-label="Footer navigation" className="space-x-6">
          <Link to="/about-us" className="hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded">About</Link>
          <Link to="/news" className="hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded">News</Link>
          <Link to="/policies" className="hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded">Policies</Link>
          <Link to="/support" className="hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded">Support</Link>
          <Link to="/contact" className="hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;