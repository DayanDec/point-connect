import React from 'react';
import { motion } from 'framer-motion';
import { QrCode, Palette, BarChart3, ArrowRight } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Dynamic QR Codes',
    description: 'Create editable QR codes that can be updated anytime without reprinting',
    features: ['Real-time updates', 'URL redirection', 'Multiple formats'],
    icon: <QrCode className="h-8 w-8" />,
    color: 'from-blue-500/20 to-green-500/20'
  },
  {
    id: 2,
    name: 'Branded QR Codes',
    description: 'Custom designed QR codes that perfectly match your brand identity',
    features: ['Logo integration', 'Custom colors', 'Design templates'],
    icon: <Palette className="h-8 w-8" />,
    color: 'from-purple-500/20 to-pink-500/20'
  },
  {
    id: 3,
    name: 'Analytics QR Codes',
    description: 'Track scans and gather valuable insights about your audience',
    features: ['Scan statistics', 'User demographics', 'Location data'],
    icon: <BarChart3 className="h-8 w-8" />,
    color: 'from-orange-500/20 to-red-500/20'
  }
];

export function ProductGallery() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="card h-full flex flex-col">
                <div className={`mb-6 p-4 rounded-xl bg-gradient-to-br ${product.color} group-hover:scale-110 transition-transform duration-300`}>
                  {product.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{product.name}</h3>
                <p className="text-gray-600 mb-6">{product.description}</p>
                <ul className="space-y-3 mb-6 flex-grow">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-electric-blue mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="btn-secondary w-full mt-auto group-hover:bg-electric-blue group-hover:text-white group-hover:border-electric-blue">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 inline-block group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}