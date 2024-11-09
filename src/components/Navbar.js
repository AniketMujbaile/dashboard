import React from 'react';
import { 
  Home,
  BarChart2, 
  PieChart,
  Settings,
  Clock,
  Users,
  Menu
} from 'lucide-react';

const Navbar = () => {
  return (
    <div className="fixed left-0 top-0 h-full w-16 bg-[#1a237e] flex flex-col items-center py-4">
      {/* Logo */}
      <div className="mb-8">
        <div className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center">
          <span className="text-white text-lg font-bold">a</span>
        </div>
      </div>

      {/* Navigation Items */}
      <nav className="flex flex-col items-center space-y-6">
        {/* <NavItem icon={<LayoutDashboard size={20} />} active /> */}
        <NavItem icon={<Home size={20} />} />
        <NavItem icon={<BarChart2 size={20} />} />
        <NavItem icon={<PieChart size={20} />} />
        <NavItem icon={<Menu size={20} />} />
        <NavItem icon={<Clock size={20} />} />
        <NavItem icon={<Users size={20} />} />
      </nav>

      {/* Bottom Items */}
      <div className="mt-auto flex flex-col items-center space-y-4">
        <NavItem icon={<Settings size={20} />} />
        {/* Profile Avatar */}
        <div className="w-8 h-8 rounded-full overflow-hidden mt-4">
          <img
            src="/api/placeholder/32/32"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

const NavItem = ({ icon, active }) => {
  return (
    <button
      className={`w-8 h-8 flex items-center justify-center rounded-lg transition-colors duration-200 ${
        active 
          ? 'bg-white text-[#1a237e]' 
          : 'text-gray-400 hover:text-white hover:bg-blue-800'
      }`}
    >
      {icon}
    </button>
  );
};

export default Navbar;