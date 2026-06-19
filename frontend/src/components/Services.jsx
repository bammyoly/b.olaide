import React from 'react';

const servicesList = [
  {
    num: '01',
    title: 'Confidential Smart Contract Development',
    desc: 'Design and develop blockchain applications with encrypted state and private computation, enabling secure and compliant on-chain experiences.'
  },
  {
    num: '02',
    title: 'Web Application Development',
    desc: 'Cutome web applications designed to automate workflows, improve efficiency, and support business growth through ecure and scalable techology'
  },
  {
    num: '03',
    title: 'Blockchain & dApp Development',
    desc: 'Decentralized application and blockchain olutions that enhance transparency, security, and user ownership while enabling innovative digital experience'
  },
  {
    num: '04',
    title: 'API & System Integration',
    desc: 'Connect your tools, platforms, and services to a unified ecosystem that improves data flow, reduces manual work and increases productivity.'
  },
  {
    num: '05',
    title: 'Business Process Automation',
    desc: 'Transform repititive and time-consuming operations into efficient automated workflows that save time and reduce operational costs.'
  }
];

const Services = () => {
  return (
    <section id="skills" className="py-24 bg-gray-950 px-4 sm:px-8 lg:px-16 border-t border-gray-800/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-16 tracking-tight text-center md:text-left">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Services</span>
        </h2>

        <div className="flex flex-col border-t border-gray-800">
          {servicesList.map((service, index) => (
            <div key={index} className="group flex flex-col md:flex-row items-start md:items-center py-10 border-b border-gray-800 hover:border-green-500/50 transition-colors duration-300">
              <div className="text-5xl font-light text-gray-800 group-hover:text-green-500/30 transition-colors duration-300 md:w-32 mb-4 md:mb-0">
                {service.num}
              </div>
              <div className="flex-1 md:pr-12">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.desc}
                </p>
              </div>
              <div className="hidden md:flex w-12 h-12 rounded-full border border-gray-700 items-center justify-center group-hover:bg-green-500 group-hover:border-transparent transition-all duration-300 transform group-hover:-rotate-45">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;