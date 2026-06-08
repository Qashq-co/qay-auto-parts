import React from 'react';
import { PillarCard } from './PillarCard';
import {pillars} from '../assets/data/pillarsData'

export const WhyChooseUs: React.FC = () => {

  return (
    <section className="py-24 bg-brand-lightBg relative overflow-hidden" id="benefits">
      {/* Background Industrial Accent Matrix Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808007_1px,transparent_1px),linear-gradient(to_bottom,#80808007_1px,transparent_1px)] bg-[size:14px_24px]" aria-hidden="true" />

      {/* Subtle Radial Ambient Shadows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        
        {/* Headings Layout */}
        <div className="text-center space-y-3">
          <p className="text-brand-orange font-extrabold tracking-widest text-[11px] uppercase bg-orange-500/5 inline-block px-3 py-1 rounded border border-brand-orange/15 shadow-sm">
            OUR BENEFITS
          </p>
          <h2 className="text-3xl sm:text-5xl font-black text-brand-navy uppercase tracking-tight">
            Why Choose <span className="text-brand-orange">QAY Auto Parts</span>
          </h2>
          <div className="w-16 h-1 bg-brand-orange mx-auto rounded-full mt-3 shadow-sm"></div>
        </div>

        {/* 3-Column Balanced Popout Card Deck */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
          {pillars.map((item, idx) => (
            <PillarCard 
              key={idx} 
              item={item} 
              index={idx} 
            />
          ))}
        </div>

      </div>
    </section>
  );
};