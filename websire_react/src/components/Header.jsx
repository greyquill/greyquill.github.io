import React from 'react';
import logo from '../assets/CompanyLogo.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="flex justify-between items-center py-4 border-b border-gray-300" role="banner">
      <div>
        <Link to="/" aria-label="Greyquill Software - Home">
          <img src={logo} alt="Greyquill Software" className="h-8 w-auto" />
        </Link>
      </div>
      <nav aria-label="User navigation">
        <Link
          to="/login"
          className="text-[#0B4F88] hover:underline focus:outline-none focus:ring-2 focus:ring-[#0B4F88] focus:ring-offset-2 rounded px-2 py-1"
        >
          Customer Login
        </Link>
      </nav>
    </header>
  );
}

export default Header;