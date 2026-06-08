import React from 'react';
import { CATEGORIES } from '../assets/data/partsData';
import { CategoryCard } from './CategoryCard'; // Import the new component

interface FeaturedCategoriesProps {
  setCurrentPage: (page: 'home' | 'about' | 'products' | 'contact') => void;
  setSelectedCategory: (catId: string) => void;
}

export const FeaturedCategories: React.FC<FeaturedCategoriesProps> = ({ setCurrentPage, setSelectedCategory }) => {
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="categories">
      {/* Background Grid Pattern Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" aria-hidden="true" />
      
      {/* Background Soft Ambient Light Filters */}
      <div className="absolute -top-40 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-40 w-96 h-96 bg-[#0B1D3A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        
        {/* Header Layout */}
        <div className="text-center space-y-3">
          <p className="text-brand-orange font-extrabold tracking-widest text-[11px] uppercase bg-orange-500/5 inline-block px-3 py-1 rounded border border-brand-orange/15 shadow-sm">
            B2B Spares Distribution
          </p>
          <h2 className="text-3xl sm:text-5xl font-black text-brand-navy tracking-tight uppercase">
            FEATURED <span className="text-brand-orange">CATEGORIES</span>
          </h2>
          <div className="w-16 h-1 bg-brand-orange mx-auto rounded-full mt-3 shadow-sm"></div>
        </div>

        {/* 5-Column High-Contrast Grid Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 sm:gap-6">
          {CATEGORIES.map((cat) => (
            <CategoryCard
              key={cat.id}
              cat={cat}
              onClick={() => {
                setSelectedCategory(cat.id);
                setCurrentPage('products');
              }}
            />
          ))}
        </div>

      </div>
    </section>
  );
};