import React from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Services } from '../components/Services';
import { Features } from '../components/Features';

interface HomeProps {
  setCurrentPage: (page: 'home' | 'about' | 'products' | 'contact') => void;
}

export const Home: React.FC<HomeProps> = ({ setCurrentPage }) => {
  return (
    <main className="animate-fadeIn">
      <article>
        <Hero setCurrentPage={setCurrentPage} />
        <About setCurrentPage={setCurrentPage} />
        <Services setCurrentPage={setCurrentPage} />
        <Features />
      </article>
    </main>
  );
};