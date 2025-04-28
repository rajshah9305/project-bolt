import React from 'react';
import { motion } from 'framer-motion';
import { Clock, CheckCircle, ShoppingCart, AlertTriangle, RefreshCw } from 'lucide-react';
import Card from '../common/Card';

interface Activity {
  id: string;
  action: string;
  target: string;
  time: string;
  status: 'success' | 'warning' | 'info' | 'pending';
}

const activities: Activity[] = [
  {
    id: '1',
    action: 'New order received',
    target: 'Air Jordan 4 "Thunder"',
    time: '2 minutes ago',
    status: 'success'
  },
  {
    id: '2',
    action: 'Inventory updated',
    target: 'Yeezy Boost 350',
    time: '45 minutes ago',
    status: 'info'
  },
  {
    id: '3',
    action: 'Low stock alert',
    target: 'Nike Dunk Low',
    time: '1 hour ago',
    status: 'warning'
  },
  {
    id: '4',
    action: 'Price check pending',
    target: 'New Balance 550',
    time: '3 hours ago',
    status: 'pending'
  },
  {
    id: '5',
    action: 'Restock completed',
    target: 'Adidas Forum Low',
    time: '5 hours ago',
    status: 'success'
  }
];

const statusIcons = {
  success: <CheckCircle size={16} className="text-emerald-500" />,
  warning: <AlertTriangle size={16} className="text-amber-500" />,
  info: <ShoppingCart size={16} className="text-indigo-500" />,
  pending: <RefreshCw size={16} className="text-zinc-400" />
};

const RecentActivity: React.FC = () => {
  return (
    <Card className="h-full">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-6">
          <Clock className="text-indigo-500" size={20} />
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">Recent Activity</h3>
        </div>
        
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <motion.div 
              key={activity.id}
              className="flex gap-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="mt-0.5">
                {statusIcons[activity.status]}
              </div>
              
              <div className="flex-1">
                <p className="text-sm text-zinc-900 dark:text-white">
                  <span className="font-medium">{activity.action}</span>
                  <span className="text-zinc-600 dark:text-zinc-400"> • {activity.target}</span>
                </p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">{activity.time}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default RecentActivity;