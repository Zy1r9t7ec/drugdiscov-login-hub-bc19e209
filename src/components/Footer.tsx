
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-drugdiscov-grey py-6 px-6 md:px-12 animate-fade-in" style={{ animationDelay: '600ms' }}>
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-drugdiscov-blue rounded-full animate-pulse"></div>
          <p className="text-white text-center text-sm md:text-base font-medium">
            Relied on by 10,000+ researchers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
