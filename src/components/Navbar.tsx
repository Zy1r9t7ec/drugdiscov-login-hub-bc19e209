
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useToast } from "@/hooks/use-toast";
import { Link } from 'react-router-dom';
import { 
  Home, 
  Folder, 
  Flask, 
  BarChart2, 
  Settings,
  LogOut,
  User,
  ChevronDown
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar: React.FC = () => {
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  
  // Mock user data - in a real app, this would come from authentication
  const userName = "Dr. Smith";
  const userInitials = "DS";

  const handleLogout = () => {
    // Mock logout function
    console.log('User logged out');
    toast({
      title: "Success",
      description: "Logged out successfully!",
    });
    // In a real app with Firebase: auth.signOut() and redirect to /
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-800 to-black shadow-md animate-fadeIn">
      <div className="flex items-center">
        <Link to="/dashboard" className="text-2xl font-bold text-logo-blue mr-8">
          DrugDiscov
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/dashboard" className="text-white hover:text-blue-400 text-sm font-medium flex items-center gap-2">
            <Home size={16} />
            Dashboard
          </Link>
          <Link to="/projects" className="text-white hover:text-blue-400 text-sm font-medium flex items-center gap-2">
            <Folder size={16} />
            Projects
          </Link>
          <Link to="/molecule-generator" className="text-white hover:text-blue-400 text-sm font-medium flex items-center gap-2">
            <Flask size={16} />
            Molecule Generator
          </Link>
          <Link to="/analytics" className="text-white hover:text-blue-400 text-sm font-medium flex items-center gap-2">
            <BarChart2 size={16} />
            Analytics
          </Link>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="ghost" 
              className="flex items-center gap-2 text-white hover:bg-gray-700 rounded-full"
              aria-label="User profile"
            >
              <div className="bg-blue-500 text-white w-8 h-8 flex items-center justify-center rounded-full font-medium">
                {userInitials}
              </div>
              <span className="hidden md:inline">{userName}</span>
              <ChevronDown size={16} className="hidden md:inline" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 bg-gray-800 border border-gray-600 text-white">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-gray-700" />
            <DropdownMenuItem className="hover:bg-gray-700 cursor-pointer">
              <Link to="/profile" className="flex items-center gap-2 w-full">
                <User size={16} />
                Profile
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-gray-700 cursor-pointer">
              <Link to="/settings" className="flex items-center gap-2 w-full">
                <Settings size={16} />
                Settings
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-gray-700" />
            <DropdownMenuItem 
              className="hover:bg-gray-700 text-red-400 cursor-pointer"
              onClick={handleLogout}
            >
              <div className="flex items-center gap-2 w-full">
                <LogOut size={16} />
                Logout
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
