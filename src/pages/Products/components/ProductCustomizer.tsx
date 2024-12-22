import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Palette, Sliders, QrCode, Check } from 'lucide-react';

const colorOptions = ['#1E90FF', '#FF4500', '#10B981', '#8B5CF6', '#EC4899'];
const styleOptions = ['Classic', 'Rounded', 'Dots', 'Modern'];

export function ProductCustomizer() {
  const [selectedColor, setSelectedColor] = useState(colorOptions[0]);
  const [selectedStyle, setSelectedStyle] = useState(styleOptions[0]);

  return (
    <section className="py-20 bg-soft-gray">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Customize Your QR Code</h2>
            <p className="text-gray-600 text-lg">
              Create a unique QR code that matches your brand identity
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Palette className="h-6 w-6 mr-2 text-electric-blue" />
                  Choose Color
                </h3>
                <div className="flex space-x-4">
                  {colorOptions.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-10 h-10 rounded-full transition-transform hover:scale-110 ${
                        selectedColor === color ? 'ring-2 ring-offset-2 ring-electric-blue' : ''
                      }`}
                      style={{ backgroundColor: color }}
                    >
                      {selectedColor === color && (
                        <Check className="h-6 w-6 text-white mx-auto" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Sliders className="h-6 w-6 mr-2 text-electric-blue" />
                  Choose Style
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {styleOptions.map((style) => (
                    <button
                      key={style}
                      onClick={() => setSelectedStyle(style)}
                      className={`px-4 py-2 rounded-lg transition-all ${
                        selectedStyle === style
                          ? 'bg-electric-blue text-white'
                          : 'bg-white hover:bg-gray-100'
                      }`}
                    >
                      {style}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                <QrCode
                  className="w-48 h-48"
                  style={{ color: selectedColor }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}