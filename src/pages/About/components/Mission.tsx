import React from 'react';
import { motion } from 'framer-motion';
import { Target, Heart, Users } from 'lucide-react';

export function Mission() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl font-bold mb-6">Our Mission</h1>
          <p className="text-xl text-gray-600 mb-12">
            To revolutionize how businesses connect with their audience through innovative QR solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            {
              icon: <Target className="h-8 w-8" />,
              title: 'Vision',
              description: 'To be the leading provider of smart QR solutions globally'
            },
            {
              icon: <Heart className="h-8 w-8" />,
              title: 'Values',
              description: 'Innovation, reliability, and customer success drive everything we do'
            },
            {
              icon: <Users className="h-8 w-8" />,
              title: 'Community',
              description: 'Building lasting connections between businesses and their customers'
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6"
            >
              <div className="mb-4 inline-block text-black">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}