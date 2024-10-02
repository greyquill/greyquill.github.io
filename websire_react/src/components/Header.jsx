import React from 'react';
import logo from '../assets/CompanyLogo.png';

function Header() {
  return (
    <header className="flex justify-between items-center py-4 border-b border-gray-300">
      <div>
        <img src={logo} alt="Greyquill Software" className="h-8" />
      </div>
      <div>
        <a href="http://localhost:3004/login" className="text-blue-800 hover:underline">Customer Login</a>
      </div>
    </header>
  );
}

export default Header;