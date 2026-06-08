import React from 'react';

interface Category {
  id: string;
  name: string;
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
      className="bg-white border border-gray-200/80 rounded-2xl p-4 text-center flex flex-col justify-between items-center cursor-pointer group relative overflow-hidden transition-all duration-500 ease-out hover:border-brand-orange/40 hover:shadow-[0_20px_40px_rgba(234,88,12,0.08)] hover:-translate-y-2 hover:scale-[1.02]"
    >
      {/* Top Neon Color Expansion Accent Band */}
      <div className="absolute top-0 inset-x-0 h-[3px] bg-brand-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-center" />

      {/* Category Image Wrapper with Shimmer Animation */}
      <div className="w-full aspect-video rounded-xl bg-gray-100 overflow-hidden mb-4 border border-gray-200/40 relative shadow-sm">
        <img 
          src={cat.image} 
          alt={cat.name}
          loading="lazy"
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out brightness-[0.95] group-hover:brightness-100"
        />
        
        {/* Subtle Bottom Shadow Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60 pointer-events-none" />
        
        {/* CSS-Free Tailwind Metallic Glare Shimmer Swipe */}
        <div className="absolute inset-0 transform -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 ease-out pointer-events-none" />
      </div>
      
      {/* Text Layout Information */}
      <div className="space-y-3 w-full flex-grow flex flex-col justify-between relative z-10">
        <div>
          <h3 className="text-xs sm:text-sm font-black text-brand-navy group-hover:text-brand-orange transition-colors duration-300 uppercase tracking-tight min-h-[40px] flex items-center justify-center px-1">
            {cat.name}
          </h3>
          <p className="text-[10px] font-bold text-gray-400 bg-gray-100 group-hover:bg-orange-500/10 group-hover:text-brand-orange inline-block px-3 py-0.5 rounded-full transition-all duration-300 uppercase tracking-wider mt-1 group-hover:scale-105">
            {cat.count} Components
          </p>
        </div>

        {/* Interaction Link - Glides upward smoothly on hover */}
        <div className="pt-2 flex items-center justify-center gap-1.5 text-[11px] font-extrabold uppercase tracking-wider text-gray-400 opacity-0 group-hover:opacity-100 group-hover:text-brand-orange transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
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