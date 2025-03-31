import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-100 text-black text-center py-6 px-4">
      <div className="flex justify-between items-center mb-4">
        <span>© {new Date().getFullYear()} Greyquill</span>
        <div className="space-x-6">
          <Link to="/news" className="hover:underline">News</Link>
          <Link to="/policies" className="hover:underline">Policies</Link>
          <Link to="/support" className="hover:underline">Support</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;