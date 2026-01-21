import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-100 text-black text-center py-6 px-4" role="contentinfo">
      <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-4">
        <span>© {new Date().getFullYear()} Greyquill Software</span>
        <nav aria-label="Footer navigation" className="space-x-6">
          <Link to="/about-us" className="hover:underline hover:text-[#0B4F88]">About</Link>
          <Link to="/news" className="hover:underline hover:text-[#0B4F88]">News</Link>
          <Link to="/policies" className="hover:underline hover:text-[#0B4F88]">Policies</Link>
          <Link to="/support" className="hover:underline hover:text-[#0B4F88]">Support</Link>
          <Link to="/contact" className="hover:underline hover:text-[#0B4F88]">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;