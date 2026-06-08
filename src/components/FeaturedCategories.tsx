import React from 'react';
import { CATEGORIES } from '../assets/data/partsData';

interface FeaturedCategoriesProps {
  setCurrentPage: (page: 'home' | 'about' | 'products' | 'contact') => void;
  setSelectedCategory: (catId: string) => void;
}

export const FeaturedCategories: React.FC<FeaturedCategoriesProps> = ({ setCurrentPage, setSelectedCategory }) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="text-center space-y-2">
          <p className="text-brand-orange font-bold tracking-widest text-xs uppercase">SHOP BY CATEGORY</p>
          <h2 className="text-3xl sm:text-4xl font-black text-brand-navy tracking-tight uppercase">
            FEATURED <span className="text-brand-orange italic">CATEGORIES</span>
          </h2>
          <div className="w-12 h-1 bg-brand-orange mx-auto rounded-full mt-2"></div>
        </div>

        {/* 5-Column Clean Response Matrix inspired by image_9720bf.jpg */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id);
                setCurrentPage('products');
              }}
              className="bg-white border border-gray-200/80 rounded-xl p-5 text-center flex flex-col justify-between items-center transition-all duration-300 hover:border-brand-orange hover:shadow-lg hover:-translate-y-1 cursor-pointer group"
            >
              <div className="w-16 h-16 rounded-xl bg-brand-lightBg flex items-center justify-center text-3xl mb-4 group-hover:bg-orange-50 transition-colors">
                {cat.icon}
              </div>
              
              <div className="space-y-1">
                <h3 className="text-xs font-black text-brand-navy group-hover:text-brand-orange transition-colors uppercase tracking-tight min-h-[32px] flex items-center justify-center">
                  {cat.name}
                </h3>
                <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
                  {cat.count} Products
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};