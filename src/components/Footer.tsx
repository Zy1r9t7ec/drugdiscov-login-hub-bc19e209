
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-drugdiscov-grey py-6 px-6 md:px-12 animate-fade-in" style={{ animationDelay: '600ms' }}>
      <div className="max-w-7xl mx-auto">
        <p className="text-white text-center text-sm md:text-base font-medium mb-4">
          Relied on by 10,000+ researchers
        </p>
        
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 md:gap-x-16">
          {['BioTech A', 'Pharma B', 'Lab C', 'Research D'].map((partner, index) => (
            <span 
              key={index} 
              className="text-white/80 text-xs md:text-sm hover:text-white transition-colors duration-300"
            >
              {partner}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
