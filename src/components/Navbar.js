import React, { useState } from 'react';
import { Home, BarChart2, PieChart, Settings, Clock, Users, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Mobile Menu Button - Only visible on small screens */}
      <button 
        onClick={toggleMobileMenu}
        className="lg:hidden fixed top-6 left-4 z-50 p-2 rounded-lg bg-blue-900 text-white"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Desktop Sidebar */}
      <div className="hidden lg:flex fixed left-0 top-0 h-full w-16 bg-blue-900 flex-col items-center py-4 shadow-lg">
        {/* Logo */}
        <div className="mb-8">
          <div className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center">
            <span className="text-white text-lg font-bold">a</span>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="flex flex-col items-center space-y-6">
          <NavItem icon={<Home size={20} />} />
          <NavItem icon={<BarChart2 size={20} />} />
          <NavItem icon={<PieChart size={20} />} />
          <NavItem icon={<Clock size={20} />} />
          <NavItem icon={<Users size={20} />} />
        </nav>

        {/* Bottom Items */}
        <div className="mt-auto flex flex-col items-center space-y-4">
          <NavItem icon={<Settings size={20} />} />
          <div className="w-8 h-8 rounded-full overflow-hidden mt-4">
            <img src="/api/placeholder/32/32" alt="Profile" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Mobile Menu - Full screen overlay */}
      <div className={`lg:hidden fixed inset-0 bg-blue-900 z-40 transform transition-transform duration-300 ease-in-out ${
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex flex-col h-full pt-16 px-4">
          {/* Logo */}
          <div className="flex items-center justify-center mb-8">
            <div className="w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center">
              <span className="text-white text-xl font-bold">a</span>
            </div>
          </div>

          {/* Mobile Navigation Items */}
          <nav className="flex flex-col space-y-4">
            <MobileNavItem icon={<Home size={24} />} label="Home" />
            <MobileNavItem icon={<BarChart2 size={24} />} label="Analytics" />
            <MobileNavItem icon={<PieChart size={24} />} label="Charts" />
            <MobileNavItem icon={<Clock size={24} />} label="Timeline" />
            <MobileNavItem icon={<Users size={24} />} label="Users" />
          </nav>

          {/* Mobile Bottom Items */}
          <div className="mt-auto mb-8">
            <MobileNavItem icon={<Settings size={24} />} label="Settings" />
            <div className="flex items-center space-x-3 mt-4 p-2">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img src="/api/placeholder/40/40" alt="Profile" className="w-full h-full object-cover" />
              </div>
              <span className="text-white">Aniket</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const NavItem = ({ icon, active }) => {
  return (
    <button
      className={`w-8 h-8 flex items-center justify-center rounded-lg transition-colors duration-200 ${
        active ? 'bg-white text-blue-900' : 'text-gray-300 hover:text-white hover:bg-blue-800'
      }`}
    >
      {icon}
    </button>
  );
};

const MobileNavItem = ({ icon, label }) => {
  return (
    <button className="flex items-center space-x-3 w-full p-3 rounded-lg text-gray-300 hover:bg-blue-800 hover:text-white transition-colors duration-200">
      {icon}
      <span className="text-lg">{label}</span>
    </button>
  );
};

export default Navbar;

 