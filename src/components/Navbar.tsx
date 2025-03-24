
import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useToast } from "@/hooks/use-toast";
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const { toast } = useToast();

  return (
    <nav className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-800 to-black shadow-md">
      <div className="text-2xl font-bold text-logo-blue">
        DrugDiscov
      </div>
      <div className="flex items-center gap-3">
        <Link to="/signup" className="text-white hover:text-blue-400 transition-colors">
          Sign up
        </Link>
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
