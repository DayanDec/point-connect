import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 
                 hover:scale-[1.02] p-6 ${className}`}
    >
      {children}
    </motion.div>
  );
}