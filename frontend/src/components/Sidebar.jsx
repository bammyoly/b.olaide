import React from 'react';

const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-0 h-screen w-20 md:w-64 bg-gray-950/90 backdrop-blur-xl border-r border-gray-800 flex flex-col justify-between py-10 z-50 transition-all duration-300">
      <div className="flex flex-col items-center md:items-start px-0 md:px-8">
        <div className="mb-16 text-center md:text-left w-full">
          <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600 tracking-tighter block md:hidden">
            B_
          </span>
          <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600 tracking-tighter hidden md:block">
            Bamidele.
          </span>
          <p className="text-gray-500 text-xs mt-2 hidden md:block uppercase tracking-widest font-semibold">
            Engineer / AI
          </p>
        </div>

        <nav className="flex flex-col space-y-6 w-full items-center md:items-start">
          <a href="#home" className="text-gray-400 hover:text-green-400 transition-colors text-sm font-medium tracking-wide">Home</a>
          <a href="#experience" className="text-gray-400 hover:text-green-400 transition-colors text-sm font-medium tracking-wide">Experience</a>
          <a href="#works" className="text-gray-400 hover:text-green-400 transition-colors text-sm font-medium tracking-wide">Selected Works</a>
          <a href="#services" className="text-gray-400 hover:text-green-400 transition-colors text-sm font-medium tracking-wide">Services</a>
          <a href="#content" className="text-gray-400 hover:text-green-400 transition-colors text-sm font-medium tracking-wide">Content</a>
        </nav>
      </div>

      <div className="px-0 md:px-8 flex flex-col items-center md:items-start">
        <a href="#contact" className="w-12 h-12 md:w-full flex items-center justify-center py-3 border border-green-500/30 text-green-400 rounded-lg hover:bg-green-500 hover:text-gray-900 transition-all shadow-[0_0_15px_rgba(34,197,94,0.1)]">
          <span className="hidden md:block font-bold">Get in Touch</span>
          <svg className="w-5 h-5 md:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;