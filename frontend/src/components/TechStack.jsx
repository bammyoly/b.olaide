import React from 'react';
import ZamaIcon from '../assets/zama.svg';

const technologies = [
  { name: 'React', icon: 'react' },
  { name: 'Vue.js', icon: 'vuedotjs' },
  { name: 'Typescript', icon: 'typescript' },
  { name: 'Node.js', icon: 'nodedotjs' },
  { name: 'Laravel', icon: 'laravel' },
  { name: 'AWS', icon: 'amazonaws' },
  { name: 'Python', icon: 'python' },
  { name: 'Solidity', icon: 'solidity' },
  { name: 'ExpressJS', icon: 'express' },
  { name: 'GraphQL', icon: 'graphql' },
  { name: 'Docker', icon: 'docker' },
  { name: 'MySQL', icon: 'mysql' },
  { name: 'Tailwind CSS', icon: 'tailwindcss' },
  { name: 'Zama', icon: ZamaIcon, isCustom: true },
  { name: 'MongoDB', icon: 'mongodb' },
];

const TechStack = () => {
  return (
    <section id="stack" className="relative py-24 bg-gray-950 overflow-hidden border-t border-gray-800/50">
      
      {/* Self-contained CSS for animations */}
      <style>
        {`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          .animate-fade-in-up {
            animation: fadeInUp 0.6s ease-out forwards;
            opacity: 0;
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
        `}
      </style>

      {/* Background Glow Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-green-900/30 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[10%] right-[15%] w-96 h-96 bg-emerald-950/40 rounded-full blur-[150px] animate-[pulse_5s_ease-in-out_infinite]"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-500 to-green-600">Technologies</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Frameworks and technologies i leverage to build confidential, secure and high performance solutions
          </p>
          <div className="mt-6 w-24 h-1 bg-green-500 mx-auto rounded-full shadow-[0_0_15px_rgba(34,197,94,0.6)]"></div>
        </div>

        {/* The Centered Flex Grid */}
        <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
          {technologies.map((tech, index) => (
            <div 
              key={index} 
              className="animate-fade-in-up group relative w-36 sm:w-40 flex flex-col items-center justify-center p-6 rounded-2xl bg-gray-900/40 border border-gray-800 backdrop-blur-sm transition-all duration-300 ease-out 
                         hover:border-green-500/60 hover:bg-gray-900/80 hover:shadow-[0_15px_30px_-10px_rgba(34,197,94,0.2)]"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Subtle green glow behind the icon on hover */}
              <div className="absolute inset-0 rounded-2xl bg-green-500/0 group-hover:bg-green-500/10 transition-colors duration-300 blur-lg"></div>
              
              {/* Floating logo wrapper - continuous animation */}
              <div 
                className="animate-float relative z-10 w-14 h-14 mb-5 flex items-center justify-center"
                style={{ animationDelay: `${(index % 4) * 0.5}s` }}
              >
                <img 
                  src={tech.isCustom ? tech.icon : `https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/${tech.icon}.svg`} 
                  alt={`${tech.name} logo`}
                  /* The filter utilities now apply cleanly and uniformly across all objects */
                  className="w-full h-full object-contain filter invert brightness-0 opacity-80 group-hover:opacity-100 group-hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.8)] transition-all duration-300 ease-in-out"
                />
              </div>
              
              <h3 className="relative z-10 text-sm font-semibold text-gray-300 group-hover:text-green-400 transition-colors duration-300 tracking-wide text-center">
                {tech.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;