import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white text-center p-4 mt-8 shadow-lg font-sans">
      <p>&copy; 2024 Dawg with a Blog. All rights reserved.</p>
      <div className="mt-2">
        <a href="#privacy" className="text-white hover:text-gray-400 mx-2">Privacy Policy</a>
        <a href="#terms" className="text-white hover:text-gray-400 mx-2">Terms of Service</a>
        <a href="#contact" className="text-white hover:text-gray-400 mx-2">Contact</a>
      </div>
    </footer>
  );
};

export default Footer;
