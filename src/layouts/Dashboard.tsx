import React from 'react';
import { motion } from 'framer-motion';
import Sidebar from '../components/navigation/Sidebar';
import TopBar from '../components/navigation/TopBar';
import StatCard from '../components/dashboard/StatCard';
import TrendingProducts from '../components/dashboard/TrendingProducts';
import RecentActivity from '../components/dashboard/RecentActivity';
import SalesPerformance from '../components/dashboard/SalesPerfomance';
import InventoryChart from '../components/dashboard/InventoryChart';
import { Users, ShoppingBag, CreditCard, TrendingUp } from 'lucide-react';

const Dashboard: React.FC = () => {
  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      } 
    }
  };
  
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white">
      <Sidebar />
      
      <div className="md:ml-64 min-h-screen flex flex-col">
        <TopBar />
        
        <main className="flex-1 px-4 py-4 md:px-8 md:py-6 pb-20 mt-16 md:mt-0">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="flex flex-col gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="show"
            >
              <motion.div variants={itemVariants}>
                <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">Dashboard</h1>
                <p className="text-zinc-500 dark:text-zinc-400 mt-1">Welcome back, here's what's happening with your store.</p>
              </motion.div>
              
              {/* Stats Grid */}
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                variants={itemVariants}
              >
                <StatCard 
                  title="Total Customers" 
                  value="18,549" 
                  change={12.5} 
                  icon={<Users size={20} />} 
                />
                <StatCard 
                  title="Total Products" 
                  value="1,245" 
                  change={3.2} 
                  icon={<ShoppingBag size={20} />} 
                />
                <StatCard 
                  title="Total Orders" 
                  value="14,264" 
                  change={-2.4} 
                  icon={<CreditCard size={20} />} 
                />
                <StatCard 
                  title="Revenue" 
                  value="$1.28M" 
                  change={18.2} 
                  icon={<TrendingUp size={20} />} 
                />
              </motion.div>
              
              {/* Charts Row */}
              <motion.div 
                className="grid grid-cols-1 lg:grid-cols-3 gap-6"
                variants={itemVariants}
              >
                <div className="lg:col-span-2">
                  <SalesPerformance />
                </div>
                <div>
                  <TrendingProducts />
                </div>
              </motion.div>
              
              {/* Second Row */}
              <motion.div 
                className="grid grid-cols-1 lg:grid-cols-3 gap-6"
                variants={itemVariants}
              >
                <div className="lg:col-span-2">
                  <InventoryChart />
                </div>
                <div>
                  <RecentActivity />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;