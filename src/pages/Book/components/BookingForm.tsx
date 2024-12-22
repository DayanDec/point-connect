import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, Mail, User } from 'lucide-react';
import { Card } from '../../../components/ui/Card';
import { SectionTitle } from '../../../components/ui/SectionTitle';
import { FormInput } from './FormInput';

export function BookingForm() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <SectionTitle
            title="Book a Consultation"
            subtitle="Schedule a meeting with our experts to discuss your QR code needs"
          />

          <Card className="space-y-6">
            <FormInput
              label="Full Name"
              type="text"
              placeholder="John Doe"
              icon={<User className="h-5 w-5" />}
            />
            <FormInput
              label="Email"
              type="email"
              placeholder="john@example.com"
              icon={<Mail className="h-5 w-5" />}
            />

            <div className="grid md:grid-cols-2 gap-6">
              <FormInput
                label="Date"
                type="date"
                placeholder=""
                icon={<Calendar className="h-5 w-5" />}
              />
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Time
                </label>
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <select className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-electric-blue focus:border-transparent">
                    {['9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM', '4:00 PM'].map((time) => (
                      <option key={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full btn-primary"
            >
              Schedule Consultation
            </motion.button>
          </Card>
        </div>
      </div>
    </section>
  );
}