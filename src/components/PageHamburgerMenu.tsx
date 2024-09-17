'use client';
import { useState } from 'react';

export function PageHamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const onMenuClicked = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="relative">
      <button
        id="hamburger"
        type="button"
        onClick={onMenuClicked}
        className="flex items-center space-x-2 rounded-full bg-gray-100 px-4 py-2 shadow-sm"
      >
        <span className="font-semibold text-gray-600">Menu</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-6 text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      <div id="menu" style={{ zIndex: 10000 }} className={`absolute right-0 mt-2 w-48 rounded-lg bg-white py-2 shadow-lg ${isOpen ? '' : 'hidden'}`}>
        <a href="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Log In</a>
        <a href="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Sign Up</a>
        <hr />
        <a href="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Host a Home</a>
        <a href="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Host an Experience</a>
        <a href="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Help</a>
      </div>
    </div>
  );
}
