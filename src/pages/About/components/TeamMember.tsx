import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../../../components/ui/Card';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  index: number;
}

export function TeamMember({ name, role, image, index }: TeamMemberProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="text-center">
        <img
          src={image}
          alt={name}
          className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
        />
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <p className="text-gray-600">{role}</p>
      </Card>
    </motion.div>
  );
}