import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Marketing Director',
    company: 'TechCorp',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    content: 'Point Connect transformed how we engage with our customers. The QR solutions are innovative and incredibly easy to implement.'
  },
  {
    name: 'David Chen',
    role: 'CEO',
    company: 'Retail Solutions',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    content: 'The analytics and insights we get from Point Connect have been invaluable for our business strategy.'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Brand Manager',
    company: 'Creative Studios',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=150&q=80',
    content: 'Outstanding service and support. The custom QR codes perfectly match our brand identity.'
  }
];

export function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-deep-black to-gray-900 text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.2),transparent)] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Discover how Point Connect helps businesses achieve their goals
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 h-full">
                <Quote className="h-8 w-8 text-electric-blue mb-4" />
                <p className="text-gray-300 mb-6">{testimonial.content}</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role} at {testimonial.company}</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}