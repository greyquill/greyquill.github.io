import React from 'react';
import logo from '../assets/CompanyLogo.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="flex justify-between items-center py-4 border-b border-gray-300">
      <div>
        <img src={logo} alt="Greyquill Software" className="h-8" />
      </div>
      <div>
        <Link to="/login" className="text-blue-800 hover:underline">Customer Login</Link>
      </div>
    </header>
  );
}

export default Header;