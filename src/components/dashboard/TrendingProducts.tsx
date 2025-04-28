import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, ExternalLink } from 'lucide-react';
import Card from '../common/Card';

interface Product {
  id: string;
  name: string;
  image: string;
  brand: string;
  price: number;
  popularity: number;
}

const products: Product[] = [
  {
    id: '1',
    name: 'Air Jordan 1 Retro High',
    image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    brand: 'Nike',
    price: 170,
    popularity: 98
  },
  {
    id: '2',
    name: 'Yeezy Boost 350 V2',
    image: 'https://images.pexels.com/photos/1456705/pexels-photo-1456705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    brand: 'Adidas',
    price: 220,
    popularity: 95
  },
  {
    id: '3',
    name: 'New Balance 550',
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    brand: 'New Balance',
    price: 110,
    popularity: 92
  },
  {
    id: '4',
    name: 'Dunk Low Retro',
    image: 'https://images.pexels.com/photos/2048548/pexels-photo-2048548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    brand: 'Nike',
    price: 100,
    popularity: 91
  }
];

const TrendingProducts: React.FC = () => {
  return (
    <Card className="h-full">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <TrendingUp className="text-indigo-500" size={20} />
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">Trending Products</h3>
          </div>
          <button className="text-xs text-indigo-500 hover:text-indigo-600 flex items-center gap-1 transition-colors">
            <span>View All</span>
            <ExternalLink size={14} />
          </button>
        </div>
        
        <div className="space-y-4">
          {products.map((product, index) => (
            <motion.div 
              key={product.id}
              className="flex items-center gap-4 p-3 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors cursor-pointer"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="object-cover w-full h-full"
                />
              </div>
              
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-zinc-900 dark:text-white truncate">{product.name}</p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">{product.brand}</p>
              </div>
              
              <div className="text-right">
                <p className="text-sm font-semibold text-zinc-900 dark:text-white">${product.price}</p>
                <div className="flex items-center justify-end gap-1 text-xs">
                  <span className="text-emerald-500 font-medium">{product.popularity}%</span>
                  <span className="text-zinc-400">pop</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default TrendingProducts;