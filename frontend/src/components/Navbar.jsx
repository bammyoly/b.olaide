import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-gray-900/80 backdrop-blur-md border-b border-green-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600 tracking-tighter">
              B. Olaide
            </span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#works" className="text-gray-300 hover:text-green-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">Works</a>
              <a href="#experience" className="text-gray-300 hover:text-green-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">Experience</a>
              <a href="#skills" className="text-gray-300 hover:text-green-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">Skills</a>
              <a href="#contact" className="border border-green-500 text-green-400 hover:bg-green-500 hover:text-gray-900 transition-all px-4 py-2 rounded-md text-sm font-medium shadow-[0_0_10px_rgba(34,197,94,0.2)] hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]">
                Connect
              </a>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-green-400 hover:text-white hover:bg-gray-800 focus:outline-none"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 border-b border-green-500/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#works" className="text-gray-300 hover:text-green-400 block px-3 py-2 rounded-md text-base font-medium">Works</a>
            <a href="#experience" className="text-gray-300 hover:text-green-400 block px-3 py-2 rounded-md text-base font-medium">Experience</a>
            <a href="#skills" className="text-gray-300 hover:text-green-400 block px-3 py-2 rounded-md text-base font-medium">Skills</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;