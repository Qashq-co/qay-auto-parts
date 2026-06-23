import React from 'react';

interface Category {
  id: string;
  name: string;
  description: string;
  count: number;
  image: string;
}

interface CategoryCardProps {
  cat: Category;
  onClick: () => void;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ cat, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-white border border-gray-200/80 rounded-2xl p-3 sm:p-4 text-center flex flex-col justify-between items-center cursor-pointer group relative overflow-hidden transition-all duration-500 ease-out hover:border-brand-orange/40 hover:shadow-[0_20px_40px_rgba(234,88,12,0.08)] hover:-translate-y-1.5 active:translate-y-0"
    >
      {/* Top Neon Color Expansion Accent Band */}
      <div className="absolute top-0 inset-x-0 h-[3px] bg-brand-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-center" />

      {/* Category Image Wrapper with High-Contrast Background Isolation */}
      <div className="w-full aspect-square sm:aspect-video rounded-xl bg-slate-50 p-2 overflow-hidden mb-3 border border-gray-100 relative shadow-inner flex items-center justify-center">
        {/* Subtle interior pattern to frame isolated parts professionally */}
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:8px_8px]" />
        
        <img 
          src={cat.image} 
          alt={cat.name}
          loading="lazy"
          // Swapped 'object-cover' to 'object-contain' to ensure 100% of the part is visible
          className="max-w-full max-h-full object-contain transform group-hover:scale-105 transition-transform duration-500 ease-out relative z-10"
        />
        
        {/* CSS-Free Tailwind Metallic Glare Shimmer Swipe */}
        <div className="absolute inset-0 transform -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-1000 ease-out pointer-events-none z-20" />
      </div>
      
      {/* Text Layout Information */}
      <div className="space-y-2 w-full flex-grow flex flex-col justify-between relative z-10">
        <div>
          <h3 className="text-[11px] sm:text-xs md:text-sm font-black text-brand-navy group-hover:text-brand-orange transition-colors duration-300 uppercase tracking-tight min-h-[36px] sm:min-h-[40px] flex items-center justify-center px-0.5 leading-tight">
            {cat.name}
          </h3>
          <p className="text-[10px] font-normal text-gray-500 px-1 py-1 line-clamp-2 group-hover:text-gray-700 transition-colors leading-normal">
            {cat.description}
          </p>
          <p className="text-[9px] sm:text-[10px] font-bold text-gray-400 bg-gray-50 group-hover:bg-brand-orange/10 group-hover:text-brand-orange inline-block px-2.5 sm:px-3 py-0.5 rounded-full transition-all duration-300 uppercase tracking-wider mt-1">
            {cat.count} Components
          </p>
        </div>

        {/* Interaction Link - Glides upward smoothly on hover */}
        <div className="pt-1 flex items-center justify-center gap-1 text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-gray-400 opacity-0 group-hover:opacity-100 group-hover:text-brand-orange transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <span>Sourcing Map</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={3} 
            stroke="currentColor" 
            className="w-3 h-3 transform group-hover:translate-x-1 transition-transform duration-300"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
          </svg>
        </div>
      </div>
    </div>
  );
};