import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Globe, Shield, Zap, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: 'Mobile-First Design',
    description: 'Optimized for seamless mobile scanning and interaction.',
    color: 'from-blue-500/20 to-green-500/20'
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: 'Global Reach',
    description: 'Connect with customers worldwide through universal QR technology.',
    color: 'from-purple-500/20 to-pink-500/20'
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security for all your QR code needs.',
    color: 'from-orange-500/20 to-red-500/20'
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: 'Instant Analytics',
    description: 'Real-time insights into customer engagement and behavior.',
    color: 'from-green-500/20 to-teal-500/20'
  }
];

export function Features() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.1),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(16,185,129,0.1),transparent)] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-title"
          >
            Why Choose Point Connect?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto text-lg"
          >
            We provide cutting-edge QR solutions that help businesses create meaningful connections with their audience.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="card group"
            >
              <div className={`mb-6 p-4 rounded-xl bg-gradient-to-br ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-deep-black">{feature.icon}</div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-deep-black">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <a href="#" className="inline-flex items-center text-electric-blue hover:text-blue-600 transition-colors">
                Learn more
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}