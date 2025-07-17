import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-8xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-cyan-500">eLEARNING</div>
        <nav className="hidden md:flex gap-6 font-medium text-gray-700">
          <a href="#" className="hover:text-cyan-500">HOME</a>
          <a href="#" className="hover:text-cyan-500">ABOUT</a>
          <a href="#" className="hover:text-cyan-500">COURSES</a>
          <a href="#" className="hover:text-cyan-500">PAGES</a>
          <a href="#" className="hover:text-cyan-500">CONTACT</a>
        </nav>
        <button className="bg-cyan-500 text-white px-4 py-2 rounded hover:bg-cyan-600 transition">
          Join Now
        </button>
      </div>
    </header>
  );
};

export default Header;