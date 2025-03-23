import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-900">
      <div className="text-2xl font-bold text-blue-500">
        DrugDiscov
      </div>
      <div className="flex items-center gap-3">
        <a href="#" className="text-white hover:text-blue-400">
          Sign up
        </a>
        <Button 
          className={cn(
            "bg-blue-500 text-white border border-blue-400/50",
            "hover:bg-blue-600 hover:shadow-glow",
            "transition-all duration-300"
          )}
        >
          Login
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
