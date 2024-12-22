import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-12"
    >
      <h2 className="text-4xl font-bold mb-4">{title}</h2>
      {subtitle && <p className="text-gray-600 text-lg">{subtitle}</p>}
    </motion.div>
  );
}