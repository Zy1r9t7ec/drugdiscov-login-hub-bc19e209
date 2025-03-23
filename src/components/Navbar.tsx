
import React from 'react';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  return (
    <nav className="w-full bg-drugdiscov-grey py-4 px-6 md:px-12 flex items-center justify-between animate-fade-in">
      <div className="flex items-center">
        <h1 className="text-white text-xl md:text-2xl font-semibold">
          <span className="text-drugdiscov-blue">Drug</span>Discov
        </h1>
      </div>
      
      <div className="flex items-center space-x-6">
        <a 
          href="#" 
          className="text-white hover:text-drugdiscov-blue transition-colors duration-300 text-sm md:text-base hidden sm:inline-block"
        >
          Sign up
        </a>
        <a 
          href="#" 
          className={cn(
            "px-4 py-2 rounded-md transition-all duration-300",
            "bg-drugdiscov-blue text-white font-medium",
            "hover:bg-opacity-90 hover:shadow-lg",
            "text-sm md:text-base"
          )}
        >
          Login
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
