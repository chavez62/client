import React from "react";

const Navbar = () => {
  return (
    // Navbar.js
    <nav className="bg-primary text-white shadow-lg font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">My Blog</h1>
          </div>
          <div>
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;