// Type definitions for the application

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'manager';
  avatarUrl?: string;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  stock: number;
  imageUrl: string;
  popularity: number;
  category: string;
  createdAt: string;
  updatedAt: string;
}

export interface Order {
  id: string;
  customerId: string;
  customerName: string;
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  items: OrderItem[];
  createdAt: string;
  updatedAt: string;
}

export interface OrderItem {
  id: string;
  productId: string;
  productName: string;
  quantity: number;
  price: number;
}

export interface SalesData {
  period: string;
  value: number;
}

export interface InventoryLevel {
  period: string;
  value: number;
}

export interface Activity {
  id: string;
  type: 'order' | 'inventory' | 'user' | 'system';
  message: string;
  timestamp: string;
  isRead: boolean;
}