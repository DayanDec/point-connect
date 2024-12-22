import React from 'react';
import { Hero } from '../components/home/Hero';
import { Features } from '../components/home/Features';
import { Testimonials } from '../components/home/Testimonials';

export function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Features />
      <Testimonials />
    </main>
  );
}