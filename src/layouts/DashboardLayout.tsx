import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/navigation/Sidebar';
import TopBar from '../components/navigation/TopBar';

const DashboardLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white">
      <Sidebar />
      
      <div className="md:ml-64 min-h-screen flex flex-col">
        <TopBar />
        
        <main className="flex-1 px-4 py-4 md:px-8 md:py-6 pb-20 mt-16 md:mt-0">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;