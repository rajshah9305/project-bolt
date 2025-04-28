import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Users, 
  ShoppingBag, 
  DollarSign,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import Card from '../components/common/Card';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend
} from 'recharts';

const salesData = [
  { month: 'Jan', sales: 4000, customers: 2400 },
  { month: 'Feb', sales: 3000, customers: 1398 },
  { month: 'Mar', sales: 2000, customers: 9800 },
  { month: 'Apr', sales: 2780, customers: 3908 },
  { month: 'May', sales: 1890, customers: 4800 },
  { month: 'Jun', sales: 2390, customers: 3800 },
  { month: 'Jul', sales: 3490, customers: 4300 }
];

const categoryData = [
  { name: 'Running', value: 4000 },
  { name: 'Basketball', value: 3000 },
  { name: 'Lifestyle', value: 2000 },
  { name: 'Training', value: 2780 },
  { name: 'Soccer', value: 1890 }
];

const Analytics: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <div>
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">Analytics</h1>
        <p className="text-zinc-500 dark:text-zinc-400 mt-1">Track your business performance and growth.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div className="p-2 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg">
              <TrendingUp className="text-emerald-500" size={20} />
            </div>
            <span className="flex items-center text-sm font-medium text-emerald-500">
              +12.5%
              <ArrowUpRight size={14} className="ml-1" />
            </span>
          </div>
          <div className="mt-4">
            <p className="text-sm text-zinc-500 dark:text-zinc-400">Total Sales</p>
            <p className="text-2xl font-bold text-zinc-900 dark:text-white mt-1">$48,294</p>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div className="p-2 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
              <Users className="text-indigo-500" size={20} />
            </div>
            <span className="flex items-center text-sm font-medium text-emerald-500">
              +8.2%
              <ArrowUpRight size={14} className="ml-1" />
            </span>
          </div>
          <div className="mt-4">
            <p className="text-sm text-zinc-500 dark:text-zinc-400">Total Customers</p>
            <p className="text-2xl font-bold text-zinc-900 dark:text-white mt-1">2,845</p>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div className="p-2 bg-rose-50 dark:bg-rose-900/20 rounded-lg">
              <ShoppingBag className="text-rose-500" size={20} />
            </div>
            <span className="flex items-center text-sm font-medium text-rose-500">
              -2.4%
              <ArrowDownRight size={14} className="ml-1" />
            </span>
          </div>
          <div className="mt-4">
            <p className="text-sm text-zinc-500 dark:text-zinc-400">Orders</p>
            <p className="text-2xl font-bold text-zinc-900 dark:text-white mt-1">1,247</p>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div className="p-2 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
              <DollarSign className="text-amber-500" size={20} />
            </div>
            <span className="flex items-center text-sm font-medium text-emerald-500">
              +5.8%
              <ArrowUpRight size={14} className="ml-1" />
            </span>
          </div>
          <div className="mt-4">
            <p className="text-sm text-zinc-500 dark:text-zinc-400">Average Order Value</p>
            <p className="text-2xl font-bold text-zinc-900 dark:text-white mt-1">$248</p>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-6">Sales Overview</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={salesData}>
                <defs>
                  <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.1} />
                <XAxis dataKey="month" stroke="#6B7280" />
                <YAxis stroke="#6B7280" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1F2937',
                    border: 'none',
                    borderRadius: '8px',
                    color: '#F9FAFB'
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="sales"
                  stroke="#6366f1"
                  fillOpacity={1}
                  fill="url(#salesGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-6">Sales by Category</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={categoryData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.1} />
                <XAxis dataKey="name" stroke="#6B7280" />
                <YAxis stroke="#6B7280" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1F2937',
                    border: 'none',
                    borderRadius: '8px',
                    color: '#F9FAFB'
                  }}
                />
                <Bar dataKey="value" fill="#6366f1" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </motion.div>
  );
};

export default Analytics;