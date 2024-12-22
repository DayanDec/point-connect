import React from 'react';
import { Team } from './components/Team';
import { Mission } from './components/Mission';

export function About() {
  return (
    <main className="pt-20">
      <Mission />
      <Team />
    </main>
  );
}