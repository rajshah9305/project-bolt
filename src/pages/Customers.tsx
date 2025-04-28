import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter,
  ArrowUpDown,
  MoreVertical,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  location: string;
  orders: number;
  spent: number;
  lastOrder: string;
}

const customers: Customer[] = [
  {
    id: '1',
    name: 'John Smith',
    email: 'john.smith@example.com',
    phone: '+1 (555) 123-4567',
    location: 'New York, USA',
    orders: 12,
    spent: 2840,
    lastOrder: '2024-02-15'
  },
  {
    id: '2',
    name: 'Emma Wilson',
    email: 'emma.wilson@example.com',
    phone: '+1 (555) 234-5678',
    location: 'Los Angeles, USA',
    orders: 8,
    spent: 1920,
    lastOrder: '2024-02-20'
  },
  {
    id: '3',
    name: 'Michael Brown',
    email: 'michael.brown@example.com',
    phone: '+1 (555) 345-6789',
    location: 'Chicago, USA',
    orders: 15,
    spent: 3650,
    lastOrder: '2024-02-18'
  },
  {
    id: '4',
    name: 'Sarah Davis',
    email: 'sarah.davis@example.com',
    phone: '+1 (555) 456-7890',
    location: 'Houston, USA',
    orders: 6,
    spent: 1480,
    lastOrder: '2024-02-22'
  },
  {
    id: '5',
    name: 'James Johnson',
    email: 'james.johnson@example.com',
    phone: '+1 (555) 567-8901',
    location: 'Miami, USA',
    orders: 10,
    spent: 2350,
    lastOrder: '2024-02-19'
  }
];

const Customers: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    customer.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <div>
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">Customers</h1>
        <p className="text-zinc-500 dark:text-zinc-400 mt-1">Manage and view customer information.</p>
      </div>

      <Card>
        <div className="p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400" size={18} />
              <input
                type="text"
                placeholder="Search customers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-sm bg-zinc-100 dark:bg-zinc-800 border-0 rounded-lg focus:ring-2 focus:ring-indigo-500 text-zinc-900 dark:text-white placeholder-zinc-500 dark:placeholder-zinc-400"
              />
            </div>
            <Button
              variant="outline"
              size="sm"
              icon={<Filter size={16} />}
            >
              Filters
            </Button>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-800">
                  <th className="text-left py-3 px-4">
                    <div className="flex items-center gap-2 text-sm font-medium text-zinc-500 dark:text-zinc-400">
                      Customer
                      <ArrowUpDown size={14} />
                    </div>
                  </th>
                  <th className="text-left py-3 px-4">
                    <div className="flex items-center gap-2 text-sm font-medium text-zinc-500 dark:text-zinc-400">
                      Contact
                    </div>
                  </th>
                  <th className="text-left py-3 px-4">
                    <div className="flex items-center gap-2 text-sm font-medium text-zinc-500 dark:text-zinc-400">
                      Location
                      <ArrowUpDown size={14} />
                    </div>
                  </th>
                  <th className="text-left py-3 px-4">
                    <div className="flex items-center gap-2 text-sm font-medium text-zinc-500 dark:text-zinc-400">
                      Orders
                      <ArrowUpDown size={14} />
                    </div>
                  </th>
                  <th className="text-left py-3 px-4">
                    <div className="flex items-center gap-2 text-sm font-medium text-zinc-500 dark:text-zinc-400">
                      Spent
                      <ArrowUpDown size={14} />
                    </div>
                  </th>
                  <th className="text-left py-3 px-4">
                    <div className="flex items-center gap-2 text-sm font-medium text-zinc-500 dark:text-zinc-400">
                      Last Order
                      <ArrowUpDown size={14} />
                    </div>
                  </th>
                  <th className="text-right py-3 px-4">
                    <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                      Actions
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredCustomers.map((customer) => (
                  <tr
                    key={customer.id}
                    className="border-b border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800/50"
                  >
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/20 flex items-center justify-center">
                          <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                            {customer.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-zinc-900 dark:text-white">
                            {customer.name}
                          </div>
                          <div className="text-xs text-zinc-500 dark:text-zinc-400">
                            Customer ID: {customer.id}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-1 text-sm text-zinc-600 dark:text-zinc-400">
                          <Mail size={14} />
                          {customer.email}
                        </div>
                        <div className="flex items-center gap-1 text-sm text-zinc-600 dark:text-zinc-400">
                          <Phone size={14} />
                          {customer.phone}
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-1 text-sm text-zinc-600 dark:text-zinc-400">
                        <MapPin size={14} />
                        {customer.location}
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="text-sm font-medium text-zinc-900 dark:text-white">
                        {customer.orders}
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="text-sm font-medium text-zinc-900 dark:text-white">
                        ${customer.spent}
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="text-sm text-zinc-600 dark:text-zinc-400">
                        {new Date(customer.lastOrder).toLocaleDateString()}
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center justify-end">
                        <button className="p-1 text-zinc-500 hover:text-zinc-900 dark:hover:text-white">
                          <MoreVertical size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default Customers;