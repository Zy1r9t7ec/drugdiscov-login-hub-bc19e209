
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Folder, Beaker, BarChart2, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';

const Sidebar: React.FC = () => {
  const location = useLocation();
  
  const navItems = [
    { icon: Home, label: 'Dashboard', path: '/dashboard' },
    { icon: Folder, label: 'Projects', path: '/projects' },
    { icon: Beaker, label: 'Molecule Generator', path: '/molecule-generator' },
    { icon: BarChart2, label: 'Analytics', path: '/analytics' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  return (
    <div className="w-64 bg-gray-900 min-h-screen flex flex-col py-6 px-4">
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={cn(
            "flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition-colors",
            location.pathname === item.path
              ? "bg-blue-900/50 text-blue-400"
              : "text-gray-300 hover:bg-gray-800 hover:text-white"
          )}
        >
          <item.icon size={20} />
          <span className="font-medium">{item.label}</span>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
