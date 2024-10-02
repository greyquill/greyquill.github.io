import React from 'react';

function Footer() {
  return (
    <footer className="flex justify-between items-center py-6 mt-8 text-gray-500">
      <div>
        © {new Date().getFullYear()} Greyquill
      </div>
      <div className="space-x-6">
        <a href="https://www.greyquill.io/news" target="_blank" rel="noopener noreferrer" className="hover:underline">News</a>
        <a href="https://www.greyquill.io/policies" target="_blank" rel="noopener noreferrer" className="hover:underline">Policies</a>
        <a href="https://www.greyquill.io/support" target="_blank" rel="noopener noreferrer" className="hover:underline">Support</a>
      </div>
    </footer>
  );
}

export default Footer;