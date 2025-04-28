import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hoverEffect = false,
  onClick
}) => {
  const baseStyles = "bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden";
  const hoverStyles = hoverEffect 
    ? "transition-all duration-300 hover:shadow-lg dark:hover:shadow-zinc-900/20 hover:-translate-y-1" 
    : "";
  
  return (
    <motion.div 
      className={`${baseStyles} ${hoverStyles} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        type: "spring", 
        stiffness: 260, 
        damping: 20 
      }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

export default Card;