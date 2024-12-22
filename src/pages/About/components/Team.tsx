import React from 'react';
import { SectionTitle } from '../../../components/ui/SectionTitle';
import { TeamMember } from './TeamMember';

const team = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Michael Chen',
    role: 'CTO',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Head of Design',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80'
  }
];

export function Team() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="Our Team" 
          subtitle="Meet the experts behind Point Connect"
        />
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <TeamMember key={index} {...member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}