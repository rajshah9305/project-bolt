import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Package } from 'lucide-react';
import Card from '../common/Card';

interface ChartBarProps {
  label: string;
  value: number;
  color: string;
  maxValue: number;
}

const ChartBar: React.FC<ChartBarProps> = ({ label, value, color, maxValue }) => {
  const percentage = (value / maxValue) * 100;
  
  return (
    <div className="flex flex-col">
      <div className="flex-1 h-[150px] flex items-end">
        <motion.div 
          className={`w-12 rounded-t-md ${color}`}
          initial={{ height: 0 }}
          animate={{ height: `${percentage}%` }}
          transition={{ 
            duration: 0.8, 
            ease: [0.34, 1.56, 0.64, 1],
            delay: 0.3
          }}
        />
      </div>
      <div className="text-center mt-2">
        <span className="text-xs font-medium text-zinc-600 dark:text-zinc-400">{label}</span>
      </div>
    </div>
  );
};

const inventoryData = [
  { label: 'Jan', value: 65 },
  { label: 'Feb', value: 85 },
  { label: 'Mar', value: 110 },
  { label: 'Apr', value: 95 },
  { label: 'May', value: 120 },
  { label: 'Jun', value: 140 },
  { label: 'Jul', value: 160 }
];

const InventoryChart: React.FC = () => {
  const maxValue = Math.max(...inventoryData.map(item => item.value));
  
  return (
    <Card className="h-full">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Package className="text-indigo-500" size={20} />
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">Inventory Levels</h3>
          </div>
          <div className="flex items-center gap-2">
            <button className="text-xs bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors">
              3M
            </button>
            <button className="text-xs bg-indigo-50 dark:bg-indigo-900/30 px-2 py-1 rounded text-indigo-600 dark:text-indigo-400 font-medium">
              6M
            </button>
            <button className="text-xs bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors">
              1Y
            </button>
          </div>
        </div>
        
        <div className="flex justify-between items-end gap-2 pt-8">
          {inventoryData.map((item, index) => (
            <ChartBar 
              key={item.label}
              label={item.label}
              value={item.value}
              maxValue={maxValue}
              color={index % 2 === 0 ? 'bg-indigo-500' : 'bg-indigo-300 dark:bg-indigo-600'}
            />
          ))}
        </div>
        
        <div className="mt-6 pt-6 border-t border-zinc-100 dark:border-zinc-800">
          <div className="flex justify-between">
            <div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">Total Products</p>
              <p className="text-lg font-semibold text-zinc-900 dark:text-white mt-1">1,245</p>
            </div>
            <div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">Low Stock</p>
              <p className="text-lg font-semibold text-rose-500 mt-1">42</p>
            </div>
            <div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">Out of Stock</p>
              <p className="text-lg font-semibold text-amber-500 mt-1">12</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default InventoryChart;