import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-white to-soft-gray">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Connect With Your Audience Through
              <span className="text-electric-blue block mt-2">Smart QR Solutions</span>
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Transform your business with personalized QR codes that bridge the gap between physical and digital experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center group"
              >
                Discover More 
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary flex items-center group"
              >
                Book a Demo
                <Sparkles className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              </motion.button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80"
                alt="QR Code Scanning"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-electric-blue/10 rounded-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}