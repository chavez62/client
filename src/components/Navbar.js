import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-primary text-white shadow-lg font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">My Blog</h1>
          </div>
          <div className="hidden md:flex space-x-4">
            <a
              href="#create"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-purple-800 transition duration-300"
            >
              Create Post
            </a>
            <a
              href="#posts"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-purple-800 transition duration-300"
            >
              Posts
            </a>
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
