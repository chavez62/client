import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-primary text-white shadow-lg font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold hover:text-gray-300 transition duration-300">
              My Blog
            </Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link
              to="/create"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-purple-800 transition duration-300"
            >
              Create Post
            </Link>
            <Link
              to="/"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-purple-800 transition duration-300"
            >
              Posts
            </Link>
          </div>
          <div className="md:hidden">
            <button className="text-white hover:text-gray-400 focus:outline-none focus:text-gray-400">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
