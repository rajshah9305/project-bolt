import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpIcon, ArrowDownIcon } from 'lucide-react';
import Card from '../common/Card';

interface StatCardProps {
  title: string;
  value: string | number;
  change?: number;
  icon: React.ReactNode;
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({ 
  title, 
  value, 
  change, 
  icon,
  className = '' 
}) => {
  const isPositive = change !== undefined ? change >= 0 : undefined;
  
  // Determine color based on change direction
  const changeColor = isPositive ? 'text-emerald-500' : 'text-rose-500';
  const arrowIcon = isPositive ? <ArrowUpIcon size={14} /> : <ArrowDownIcon size={14} />;
  
  return (
    <Card className={`p-6 ${className}`}>
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">{title}</p>
          <motion.h3 
            className="mt-2 text-2xl font-bold text-zinc-900 dark:text-white"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {value}
          </motion.h3>
          
          {change !== undefined && (
            <motion.div 
              className={`mt-2 flex items-center ${changeColor}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="flex items-center text-xs font-medium">
                {arrowIcon}
                <span className="ml-1">{Math.abs(change)}%</span>
              </span>
              <span className="ml-2 text-xs text-zinc-500 dark:text-zinc-400">vs last month</span>
            </motion.div>
          )}
        </div>
        
        <div className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400">
          {icon}
        </div>
      </div>
    </Card>
  );
};

export default StatCard;