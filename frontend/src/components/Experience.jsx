import React, { useState, useEffect, useRef } from 'react';

const experiences = [
  {
    role: 'Web3 Developer',
    company: 'Freelance',
    date: 'Present',
    desc: 'Developing a confidential school payment protocol on the Arbitrum Sepolia testnet, ensuring private fee transactions via FHE.'
  },
  {
    role: 'Wordpress Developer',
    company: 'Boosted Advisors',
    date: '2025',
    desc: 'Architecting end-to-end encrypted messaging and global payment applications utilizing Fhenix Protocol encryption.'
  },
  {
    role: 'Laravel Developer',
    company: 'Sprinble',
    date: '2023',
    desc: 'Crafting responsive, high-performance user interfaces bridging the gap between mechanical engineering logic and front-end design.'
  },
  {
    role: 'Frontend Tutor',
    company: 'Piforte',
    date: '2019',
    desc: 'Directing and optimizing educational content focused on historical narratives and self-development psychology.'
  }
];

// Sub-component to manage individual scroll detection
const ExperienceItem = ({ exp, index }) => {
  const [isActive, setIsActive] = useState(false);
  const itemRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Activates when the element is comfortably positioned in the viewing window
        if (entry.isIntersecting) {
          setIsActive(true);
        } else {
          // Removes highlight if scrolled out of view (optional: remove else statement if you want them to stay lit permanently once scrolled past)
          setIsActive(false); 
        }
      },
      {
        // Adjusts the tracking frame (triggers when item hits roughly 30% from the bottom up to the top)
        rootMargin: '-15% 0px -30% 0px',
        threshold: 0.2,
      }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) observer.unobserve(itemRef.current);
    };
  }, []);

  return (
    <div 
      ref={itemRef} 
      className="mb-12 ml-10 relative transition-all duration-500"
    >
      {/* Dynamic Timeline Dot based on Scroll Activation */}
      <span 
        className={`absolute -left-[49px] top-1.5 w-5 h-5 rounded-full border-4 border-gray-950 transition-all duration-500 shadow-[0_0_0_2px_rgba(31,41,55,1)] ${
          isActive 
            ? 'bg-green-500 scale-125 shadow-[0_0_15px_rgba(34,197,94,0.7)]' 
            : 'bg-gray-700 scale-100'
        }`}
      ></span>
      
      {/* Experience Content Card */}
      <div className="flex flex-col md:flex-row md:items-baseline mb-2">
        <h3 className={`text-xl font-bold transition-colors duration-500 ${isActive ? 'text-white' : 'text-gray-400'}`}>
          {exp.role}
        </h3>
        <span className={`font-medium text-sm md:ml-4 transition-colors duration-500 ${isActive ? 'text-green-400' : 'text-green-700'}`}>
          {exp.company}
        </span>
      </div>
      
      <div className="mb-4">
        <span className={`inline-block px-3 py-1 bg-gray-900 border text-xs font-semibold rounded-full transition-colors duration-500 ${
          isActive ? 'border-green-500/30 text-green-400' : 'border-gray-800 text-gray-500'
        }`}>
          {exp.date}
        </span>
      </div>
      
      <p className={`leading-relaxed max-w-2xl transition-colors duration-500 ${isActive ? 'text-gray-300' : 'text-gray-500'}`}>
        {exp.desc}
      </p>
    </div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-gray-950 px-4 sm:px-8 lg:px-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-16 tracking-tight text-center md:text-left">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Experience</span>
        </h2>

        {/* Vertical Timeline Main Line */}
        <div className="relative border-l border-gray-800 ml-3 md:ml-4">
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;