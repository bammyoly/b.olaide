import React, { useState, useEffect } from 'react';

const Hero = () => {
  // Typing effect arrays (AI removed, generalized blockchain added)
  const words = [
    "digital experiences.",
    "apps people love.",
    "robust full-stack systems.",
    "decentralized applications."
  ];

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  // Typewriter core animation loop
  useEffect(() => {
    if (subIndex === words[index].length + 1 && !isDeleting) {
      const timeout = setTimeout(() => setIsDeleting(true), 2200);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, isDeleting ? 40 : 80);

    return () => clearTimeout(timeout);
  }, [subIndex, index, isDeleting]);

  // Cursor blinking animation
  useEffect(() => {
    const blinkTimeout = setTimeout(() => setBlink((prev) => !prev), 500);
    return () => clearTimeout(blinkTimeout);
  }, [blink]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-start overflow-hidden bg-gray-950">
      
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-green-600/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-emerald-900/40 rounded-full blur-[120px] animate-[pulse_6s_ease-in-out_infinite]"></div>
        <div className="absolute top-[40%] left-[30%] w-64 h-64 bg-green-400/10 rounded-full blur-[80px] animate-[bounce_8s_ease-in-out_infinite]"></div>
        
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      {/* Main Content Container - Appended Left */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start text-left w-full">

        <h2 className="text-2xl md:text-3xl font-medium text-gray-400 max-w-3xl mb-2">
          Hi there, I'm a
        </h2>
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-500 to-green-600">FullStack Developer</span>
        </h1>
        
        {/* Continuous Typing Effect */}
        <h2 className="text-2xl md:text-3xl font-medium text-gray-400 max-w-3xl mb-2">
          <span>I build&nbsp;</span>
          <span className="text-2xl md:text-3xl font-medium text-gray-400 max-w-3xl mb-2">
            {words[index].substring(0, subIndex)}
            <span className={`inline-block w-[3px] h-6 md:h-8 ml-1 bg-green-400 align-middle ${blink ? 'opacity-100' : 'opacity-0'}`}></span>
          </span>
        </h2>
        
        {/* Updated Accurate Bio */}
        <p className="text-base md:text-lg text-gray-400 mb-10 max-w-2xl leading-relaxed font-normal">
          With a solid engineering background and extensive experience across both frontend and backend technologies, I build scalable, high-performance web applications. Leveraging React, Node.js, Laravel, and Solidity, I focus on constructing fluid user interfaces, secure server-side logic, and reliable blockchain integrations.
        </p>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a href="#works" className="px-8 py-4 bg-green-500 text-gray-950 rounded-lg font-bold hover:bg-green-400 transition-all shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:shadow-[0_0_25px_rgba(34,197,94,0.5)] transform hover:-translate-y-1 text-center">
            See My Works
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;