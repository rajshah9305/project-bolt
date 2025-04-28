import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Plus, 
  Filter,
  ArrowUpDown,
  MoreVertical,
  Edit2,
  Trash2,
  Eye
} from 'lucide-react';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  stock: number;
  status: 'In Stock' | 'Low Stock' | 'Out of Stock';
}

const products: Product[] = [
  {
    id: '1',
    name: 'Nike Air Jordan 1 Retro High',
    brand: 'Nike',
    category: 'Basketball',
    price: 170,
    stock: 45,
    status: 'In Stock'
  },
  {
    id: '2',
    name: 'Adidas Yeezy Boost 350 V2',
    brand: 'Adidas',
    category: 'Lifestyle',
    price: 220,
    stock: 8,
    status: 'Low Stock'
  },
  {
    id: '3',
    name: 'New Balance 550',
    brand: 'New Balance',
    category: 'Lifestyle',
    price: 110,
    stock: 0,
    status: 'Out of Stock'
  },
  {
    id: '4',
    name: 'Nike Dunk Low Retro',
    brand: 'Nike',
    category: 'Skateboarding',
    price: 100,
    stock: 32,
    status: 'In Stock'
  },
  {
    id: '5',
    name: 'Air Jordan 4 Retro',
    brand: 'Nike',
    category: 'Basketball',
    price: 190,
    stock: 15,
    status: 'In Stock'
  }
];

const Products: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Stock':
        return 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400';
      case 'Low Stock':
        return 'bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400';
      case 'Out of Stock':
        return 'bg-rose-50 text-rose-600 dark:bg-rose-900/20 dark:text-rose-400';
      default:
        return 'bg-zinc-50 text-zinc-600 dark:bg-zinc-900/20 dark:text-zinc-400';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">Products</h1>
          <p className="text-zinc-500 dark:text-zinc-400 mt-1">Manage your product inventory and catalog.</p>
        </div>
        <Button
          variant="primary"
          size="md"
          icon={<Plus size={18} />}
        >
          Add Product
        </Button>
      </div>

      <Card>
        <div className="p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400" size={18} />
              <input
                type="text"
                placeholder="Search products..."
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
                      Product
                      <ArrowUpDown size={14} />
                    </div>
                  </th>
                  <th className="text-left py-3 px-4">
                    <div className="flex items-center gap-2 text-sm font-medium text-zinc-500 dark:text-zinc-400">
                      Brand
                      <ArrowUpDown size={14} />
                    </div>
                  </th>
                  <th className="text-left py-3 px-4">
                    <div className="flex items-center gap-2 text-sm font-medium text-zinc-500 dark:text-zinc-400">
                      Category
                      <ArrowUpDown size={14} />
                    </div>
                  </th>
                  <th className="text-left py-3 px-4">
                    <div className="flex items-center gap-2 text-sm font-medium text-zinc-500 dark:text-zinc-400">
                      Price
                      <ArrowUpDown size={14} />
                    </div>
                  </th>
                  <th className="text-left py-3 px-4">
                    <div className="flex items-center gap-2 text-sm font-medium text-zinc-500 dark:text-zinc-400">
                      Stock
                      <ArrowUpDown size={14} />
                    </div>
                  </th>
                  <th className="text-left py-3 px-4">
                    <div className="flex items-center gap-2 text-sm font-medium text-zinc-500 dark:text-zinc-400">
                      Status
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
                {filteredProducts.map((product) => (
                  <tr
                    key={product.id}
                    className="border-b border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800/50"
                  >
                    <td className="py-3 px-4">
                      <div className="text-sm font-medium text-zinc-900 dark:text-white">
                        {product.name}
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="text-sm text-zinc-600 dark:text-zinc-400">
                        {product.brand}
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="text-sm text-zinc-600 dark:text-zinc-400">
                        {product.category}
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="text-sm font-medium text-zinc-900 dark:text-white">
                        ${product.price}
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="text-sm text-zinc-600 dark:text-zinc-400">
                        {product.stock}
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(product.status)}`}>
                        {product.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-1 text-zinc-500 hover:text-zinc-900 dark:hover:text-white">
                          <Eye size={16} />
                        </button>
                        <button className="p-1 text-zinc-500 hover:text-zinc-900 dark:hover:text-white">
                          <Edit2 size={16} />
                        </button>
                        <button className="p-1 text-zinc-500 hover:text-rose-500">
                          <Trash2 size={16} />
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

export default Products;