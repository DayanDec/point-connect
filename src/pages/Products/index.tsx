import React from 'react';
import { ProductHero } from './components/ProductHero';
import { ProductGallery } from './components/ProductGallery';
import { ProductCustomizer } from './components/ProductCustomizer';

export function Products() {
  return (
    <main className="overflow-hidden">
      <ProductHero />
      <ProductGallery />
      <ProductCustomizer />
    </main>
  );
}