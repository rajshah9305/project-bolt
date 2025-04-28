import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import { 
  Home, 
  ShoppingBag, 
  BarChart2, 
  Users, 
  Settings, 
  HelpCircle, 
  LogOut,
  Menu,
  X
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  path: string;
  active?: boolean;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, path, active = false, onClick }) => {
  return (
    <motion.div
      className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-colors relative ${
        active 
          ? 'text-indigo-500 bg-indigo-50 dark:bg-indigo-900/20 font-medium' 
          : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800/50'
      }`}
      onClick={onClick}
      whileHover={{ x: 4 }}
      whileTap={{ scale: 0.98 }}
    >
      {active && (
        <motion.div
          layoutId="activeIndicator"
          className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-500 rounded-r-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        />
      )}
      <span>{icon}</span>
      <span>{label}</span>
    </motion.div>
  );
};

const Sidebar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  
  const navigationItems = [
    { icon: <Home size={20} />, label: 'Dashboard', path: '/dashboard' },
    { icon: <ShoppingBag size={20} />, label: 'Products', path: '/products' },
    { icon: <BarChart2 size={20} />, label: 'Analytics', path: '/analytics' },
    { icon: <Users size={20} />, label: 'Customers', path: '/customers' },
    { icon: <Settings size={20} />, label: 'Settings', path: '/settings' }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };
  
  return (
    <>
      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between px-4 z-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">SS</span>
          </div>
          <h1 className="text-lg font-bold text-zinc-900 dark:text-white">SoleSight</h1>
        </div>
        <button 
          onClick={toggleMobileMenu}
          className="p-2 rounded-lg text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              className="absolute top-16 left-0 bottom-0 w-64 bg-white dark:bg-zinc-900 shadow-xl"
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="py-6 px-4 space-y-1">
                {navigationItems.map((item) => (
                  <NavItem
                    key={item.label}
                    icon={item.icon}
                    label={item.label}
                    path={item.path}
                    active={location.pathname === item.path}
                    onClick={() => handleNavigation(item.path)}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Desktop Sidebar */}
      <div className="hidden md:flex flex-col w-64 fixed top-0 left-0 bottom-0 bg-white dark:bg-zinc-900 border-r border-zinc-200 dark:border-zinc-800 z-30">
        <div className="p-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">SS</span>
            </div>
            <h1 className="text-xl font-bold text-zinc-900 dark:text-white">SoleSight</h1>
          </div>
        </div>
        
        <nav className="flex-1 py-6 px-4 space-y-1">
          {navigationItems.map((item) => (
            <NavItem
              key={item.label}
              icon={item.icon}
              label={item.label}
              path={item.path}
              active={location.pathname === item.path}
              onClick={() => handleNavigation(item.path)}
            />
          ))}
        </nav>
        
        <div className="p-4 mt-auto border-t border-zinc-200 dark:border-zinc-800">
          <div className="flex justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8 rounded-full overflow-hidden bg-indigo-200">
                <img 
                  src="https://images.pexels.com/photos/6274712/pexels-photo-6274712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="User avatar" 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-zinc-900 dark:text-white">Alex Chen</span>
                <span className="text-xs text-zinc-500 dark:text-zinc-400">Admin</span>
              </div>
            </div>
            <button 
              onClick={toggleTheme} 
              className="p-1.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300"
            >
              {theme === 'dark' ? '🌞' : '🌙'}
            </button>
          </div>
          
          <div className="space-y-2">
            <button className="flex w-full items-center gap-3 px-3 py-2 text-sm text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md transition-colors">
              <HelpCircle size={18} />
              <span>Help & Support</span>
            </button>
            <button className="flex w-full items-center gap-3 px-3 py-2 text-sm text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-900/10 rounded-md transition-colors">
              <LogOut size={18} />
              <span>Log Out</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;