import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Bell, 
  Calendar,
  ChevronDown,
  MessageSquare,
  User,
  Settings,
  LogOut
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import Button from '../common/Button';

const TopBar: React.FC = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const { toggleTheme } = useTheme();
  
  const notifications = [
    { id: 1, title: 'New order received', time: '2 min ago' },
    { id: 2, title: 'Inventory update completed', time: '1 hour ago' },
    { id: 3, title: 'Meeting with suppliers at 3PM', time: '3 hours ago' },
    { id: 4, title: 'Price alerts for 5 products', time: '5 hours ago' }
  ];
  
  const closeAllDropdowns = () => {
    setShowNotifications(false);
    setShowUserMenu(false);
  };
  
  return (
    <div className="h-16 flex items-center justify-between px-6 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 z-20 relative">
      <div className="flex items-center max-w-md w-full">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400" size={18} />
          <input
            type="text"
            placeholder="Search for products, orders..."
            className="w-full pl-10 pr-4 py-2 text-sm bg-zinc-100 dark:bg-zinc-800 border-0 rounded-lg focus:ring-2 focus:ring-indigo-500 text-zinc-900 dark:text-white placeholder-zinc-500 dark:placeholder-zinc-400"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <Button
          variant="outline"
          size="sm"
          className="hidden md:flex"
          icon={<Calendar size={16} />}
        >
          Today
        </Button>
        
        {/* Notifications Dropdown */}
        <div className="relative">
          <button 
            className="relative p-2 rounded-full text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800"
            onClick={() => {
              setShowUserMenu(false);
              setShowNotifications(!showNotifications);
            }}
          >
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-rose-500 rounded-full"></span>
          </button>
          
          <AnimatePresence>
            {showNotifications && (
              <>
                <motion.div
                  className="fixed inset-0 z-30"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={closeAllDropdowns}
                />
                <motion.div 
                  className="absolute right-0 w-80 mt-2 bg-white dark:bg-zinc-900 rounded-lg shadow-lg border border-zinc-200 dark:border-zinc-800 z-40"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="p-4 border-b border-zinc-200 dark:border-zinc-800">
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold text-zinc-900 dark:text-white">Notifications</h3>
                      <button className="text-xs text-indigo-500 hover:text-indigo-600">Mark all as read</button>
                    </div>
                  </div>
                  <div className="max-h-80 overflow-y-auto">
                    {notifications.map((notification) => (
                      <div 
                        key={notification.id} 
                        className="p-4 border-b border-zinc-100 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors"
                      >
                        <p className="text-sm font-medium text-zinc-900 dark:text-white">{notification.title}</p>
                        <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">{notification.time}</p>
                      </div>
                    ))}
                  </div>
                  <div className="p-3">
                    <button className="w-full text-center text-sm text-indigo-500 hover:text-indigo-600 py-2">
                      View all notifications
                    </button>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
        
        {/* User Dropdown */}
        <div className="relative">
          <button 
            className="flex items-center gap-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 p-1.5 rounded-lg"
            onClick={() => {
              setShowNotifications(false);
              setShowUserMenu(!showUserMenu);
            }}
          >
            <div className="relative w-8 h-8 rounded-full overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/6274712/pexels-photo-6274712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="User avatar" 
                className="object-cover w-full h-full"
              />
            </div>
            <div className="hidden md:block text-left">
              <p className="text-sm font-medium text-zinc-900 dark:text-white">Alex Chen</p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">Admin</p>
            </div>
            <ChevronDown size={16} className="text-zinc-400" />
          </button>
          
          <AnimatePresence>
            {showUserMenu && (
              <>
                <motion.div
                  className="fixed inset-0 z-30"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={closeAllDropdowns}
                />
                <motion.div 
                  className="absolute right-0 w-56 mt-2 bg-white dark:bg-zinc-900 rounded-lg shadow-lg border border-zinc-200 dark:border-zinc-800 z-40"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="p-4 border-b border-zinc-200 dark:border-zinc-800">
                    <p className="font-medium text-zinc-900 dark:text-white">Alex Chen</p>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">alex@solesight.com</p>
                  </div>
                  <div className="p-2">
                    <button className="flex w-full items-center gap-3 p-2 text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md transition-colors">
                      <User size={16} className="text-zinc-500" />
                      <span>Profile</span>
                    </button>
                    <button className="flex w-full items-center gap-3 p-2 text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md transition-colors">
                      <MessageSquare size={16} className="text-zinc-500" />
                      <span>Messages</span>
                    </button>
                    <button className="flex w-full items-center gap-3 p-2 text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md transition-colors">
                      <Settings size={16} className="text-zinc-500" />
                      <span>Settings</span>
                    </button>
                    <button 
                      className="flex w-full items-center gap-3 p-2 text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md transition-colors"
                      onClick={toggleTheme}
                    >
                      <span className="text-zinc-500">🌓</span>
                      <span>Toggle Theme</span>
                    </button>
                  </div>
                  <div className="p-2 border-t border-zinc-200 dark:border-zinc-800">
                    <button className="flex w-full items-center gap-3 p-2 text-sm text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-900/10 rounded-md transition-colors">
                      <LogOut size={16} />
                      <span>Log Out</span>
                    </button>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default TopBar;