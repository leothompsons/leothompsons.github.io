import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900">Leoard</h1>
            <span className="ml-2 text-sm text-gray-600">Luxury Brands from HK</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-700 hover:text-gray-900 transition-colors duration-200">Services</a>
            <a href="#steps" className="text-gray-700 hover:text-gray-900 transition-colors duration-200">How It Works</a>
            <a href="#testimonials" className="text-gray-700 hover:text-gray-900 transition-colors duration-200">Reviews</a>
            <a href="#contact" className="text-gray-700 hover:text-gray-900 transition-colors duration-200">Contact</a>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-3">
              <a href="#services" className="text-gray-700 hover:text-gray-900 transition-colors duration-200">Services</a>
              <a href="#steps" className="text-gray-700 hover:text-gray-900 transition-colors duration-200">How It Works</a>
              <a href="#testimonials" className="text-gray-700 hover:text-gray-900 transition-colors duration-200">Reviews</a>
              <a href="#contact" className="text-gray-700 hover:text-gray-900 transition-colors duration-200">Contact</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;