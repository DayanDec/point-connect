import React from 'react';
import { motion } from 'framer-motion';
import { QrCode, Wand2 } from 'lucide-react';

export function ProductHero() {
  return (
    <section className="min-h-[70vh] flex items-center pt-20 bg-gradient-to-br from-white to-soft-gray relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.1),transparent)]" />
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl font-bold mb-6">
            Transform Your Business with
            <span className="text-electric-blue block mt-2">Smart QR Solutions</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Discover our range of innovative QR code solutions designed to enhance your customer engagement and streamline business operations.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary flex items-center group"
          >
            Start Creating
            <Wand2 className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}