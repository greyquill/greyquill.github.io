import React from 'react';

function Navigation() {
  const links = ["Services", "Case Studies", "About Us"];

  return (
    <nav className="mt-12">
      <ul className="flex justify-center space-x-8">
        {links.map((link, index) => (
          <li key={index}>
            <button className="text-gray-600 hover:text-gray-900 hover:font-semibold">{link}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;