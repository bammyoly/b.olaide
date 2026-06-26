import React from 'react';

const projects = [
  {
    title: 'Bursa',
    description: 'A confidential payment protocol for institutions deployed on the Arbitrum Sepolia testnet. Utilizes FHENIX Encryption protocol to ensure private, secure fee transactions.',
    tags: ['Web3', 'React', 'Solidity', 'Smart Contracts'],
    link: 'https://bursa-v1-ten.vercel.app/'
  },
  {
    title: 'Paycript',
    description: 'Payment/payroll app that allows employers/users send single and multiple private payments powered by Zama FHE.',
    tags: ['NodeJS', 'Zama FHE', 'ExpressJS', 'Payroll', 'Privacy', 'React', 'Hardhat'],
    link: 'https://paycrypt.vercel.app/'
  },
  {
    title: 'PrivyPad',
    description: 'PrivyPad is a contest arena that allows users to host and participate in private, trustless competitions where votes are encrypted, results are verifiable, and rewards are distributed on-chain without exposing individual voting choices.',
    tags: ['Solidity', 'Zama FHE', 'Privacy', 'React', 'Hardhat'],
    link: 'https://privy-pad.vercel.app/'
  },
  {
    title: 'Syntax',
    description: 'A cutting-edge payment and messaging application leveraging Fhenix Protocol encryption for complete end-to-end user privacy.',
    tags: ['Fhenix Protocol', 'Messaging', 'Privacy', 'React'],
    link: '#'
  },
  {
    title: 'ZeroRemit',
    description: 'A privacy-first payment protocol built on Ethereum for merchants who want modern checkout tooling without giving up transaction privacy.',
    tags: ['React', 'ExpressJS', 'Prisma', 'Reown AppKit', 'Solidity', 'Tailwind'],
    link: '#'
  },
  {
    title: 'Secure Pay',
    description: 'On-chain confidential payroll system built on Arbitrum Sepolia using Fhenix CoFHE. Employee balances and salary amounts are never exposed on-chain.',
    tags: ['React', 'Auth', 'Hardhat', 'ExpressJS', 'Hardhat', 'FHENix', 'Web3'],
    link: 'https://securepay-v2-mu.vercel.app/'
  }
];

const Portfolio = () => {
  return (
    <section id="works" className="py-24 bg-gray-950 relative border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Selected <span className="text-green-500">Works</span>
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative bg-gray-900 rounded-xl p-8 border border-gray-800 hover:border-green-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.1)]"
            >
              {/* Subtle top-right glow on hover */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 rounded-full blur-3xl group-hover:bg-green-500/20 transition-all duration-500"></div>
              
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex} 
                    className="px-3 py-1 text-xs font-medium text-green-400 bg-green-400/10 rounded-full border border-green-400/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <a 
                href={project.link} 
                target={project.link !== '#' ? '_blank' : undefined}
                rel={project.link !== '#' ? 'noopener noreferrer' : undefined}
                className="inline-flex items-center text-sm font-semibold text-white group-hover:text-green-400 transition-colors"
              >
                View Project 
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;