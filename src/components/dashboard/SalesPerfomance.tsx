import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, TrendingUp, ArrowRight } from 'lucide-react';
import Card from '../common/Card';

const GRADIENT_COLORS = [
  "rgba(99, 102, 241, 0.5)",   // Indigo
  "rgba(79, 70, 229, 0.4)",    // Slightly darker indigo
  "rgba(67, 56, 202, 0.3)",    // Even darker indigo
  "rgba(55, 48, 163, 0.2)",    // Darkest indigo
  "rgba(49, 46, 129, 0.1)",    // Very dark indigo
  "rgba(30, 27, 75, 0.05)"     // Almost black indigo
];

const chartData = [
  { month: 'Jan', value: 30 },
  { month: 'Feb', value: 40 },
  { month: 'Mar', value: 45 },
  { month: 'Apr', value: 35 },
  { month: 'May', value: 55 },
  { month: 'Jun', value: 60 },
  { month: 'Jul', value: 75 },
  { month: 'Aug', value: 80 },
  { month: 'Sep', value: 90 },
  { month: 'Oct', value: 100 },
  { month: 'Nov', value: 110 },
  { month: 'Dec', value: 120 }
];

const SalesPerformance: React.FC = () => {
  // Normalize values to fit chart height (0-100%)
  const maxValue = Math.max(...chartData.map(d => d.value));
  const normalizedData = chartData.map(item => ({
    ...item,
    normValue: (item.value / maxValue) * 100
  }));
  
  // Create SVG path for the area chart
  const createPath = () => {
    const width = 100 / (normalizedData.length - 1);
    
    let path = `M 0,${100 - normalizedData[0].normValue} `;
    
    normalizedData.forEach((item, index) => {
      if (index > 0) {
        path += `L ${index * width},${100 - item.normValue} `;
      }
    });
    
    // Complete the area by drawing to the bottom right, then bottom left, then back to start
    path += `L ${100},${100} L 0,${100} Z`;
    
    return path;
  };
  
  return (
    <Card className="h-full">
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <DollarSign className="text-indigo-500" size={20} />
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">Sales Performance</h3>
          </div>
          <div className="flex items-center gap-1 text-indigo-500 text-xs font-medium cursor-pointer hover:text-indigo-600 transition-colors">
            <span>Annual Report</span>
            <ArrowRight size={14} />
          </div>
        </div>
        
        <div className="flex items-end gap-8 mb-6">
          <div>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm">Total Revenue</p>
            <motion.p 
              className="text-2xl font-bold text-zinc-900 dark:text-white" 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              $1,284,320
            </motion.p>
            <div className="flex items-center mt-1">
              <TrendingUp size={14} className="text-emerald-500 mr-1" />
              <span className="text-xs font-medium text-emerald-500">+12.5%</span>
              <span className="text-xs text-zinc-500 dark:text-zinc-400 ml-1">vs last year</span>
            </div>
          </div>
          
          <div>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm">Average Order</p>
            <motion.p 
              className="text-2xl font-bold text-zinc-900 dark:text-white"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              $248
            </motion.p>
            <div className="flex items-center mt-1">
              <TrendingUp size={14} className="text-emerald-500 mr-1" />
              <span className="text-xs font-medium text-emerald-500">+5.8%</span>
              <span className="text-xs text-zinc-500 dark:text-zinc-400 ml-1">vs last month</span>
            </div>
          </div>
        </div>
        
        {/* Chart area */}
        <div className="relative h-64 mt-8 overflow-hidden">
          <div className="absolute bottom-0 left-0 right-0 flex justify-between z-10 text-xs text-zinc-500 dark:text-zinc-400">
            {normalizedData.filter((_, i) => i % 2 === 0).map(item => (
              <div key={item.month} className="text-center">
                <span>{item.month}</span>
              </div>
            ))}
          </div>
          
          <motion.div 
            className="absolute inset-0 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
              {/* Create the gradient fill */}
              <defs>
                <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  {GRADIENT_COLORS.map((color, index) => (
                    <stop 
                      key={index}
                      offset={`${index * (100 / GRADIENT_COLORS.length)}%`} 
                      stopColor={color} 
                    />
                  ))}
                </linearGradient>
              </defs>
              
              {/* Draw the area */}
              <motion.path
                d={createPath()}
                fill="url(#areaGradient)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              
              {/* Draw the line on top */}
              <motion.path
                d={`M 0,${100 - normalizedData[0].normValue} ${normalizedData.map((item, index) => 
                  `L ${index * (100 / (normalizedData.length - 1))},${100 - item.normValue}`).join(' ')}`}
                fill="none"
                stroke="#6366f1"
                strokeWidth="1.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            </svg>
          </motion.div>
        </div>
      </div>
    </Card>
  );
};

export default SalesPerformance;