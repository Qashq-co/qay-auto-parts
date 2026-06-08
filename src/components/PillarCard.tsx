import React from 'react';

interface PillarItem {
  title: string;
  desc: string;
  highlighted?: boolean;
}

interface PillarCardProps {
  item: PillarItem;
  index: number;
}

export const PillarCard: React.FC<PillarCardProps> = ({ item, index }) => {
  // SVG Icon Selection based on the index position
  const renderIcon = () => {
    const strokeColor = item.highlighted ? "stroke-brand-orange" : "stroke-gray-600 group-hover:stroke-brand-orange";
    
    switch (index) {
      case 0: // Fast & Reliable Delivery (Truck)
        return (
          <svg className={`w-6 h-6 ${strokeColor} transition-colors duration-300`} fill="none" viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125a1.125 1.125 0 0 0 1.125-1.125V9.75M8.25 14.25h9.75m-9.75 0V5.625c0-.621.504-1.125 1.125-1.125H14.25m3.75 9.75V9.75m0 0a1.125 1.125 0 0 0-1.125-1.125H14.25m3.75 5.4V9.75m-3.75-4.125v3.375c0 .621.504 1.125 1.125 1.125h2.625M12 14.25v-3.75" />
          </svg>
        );
      case 1: // 1000+ Parts in Stock (Target / Dashboard Precision)
        return (
          <svg className={`w-6 h-6 ${strokeColor} transition-colors duration-300`} fill="none" viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        );
      case 2: // Genuine Quality Guaranteed (Shield Protection)
        return (
          <svg className={`w-6 h-6 ${strokeColor} transition-colors duration-300`} fill="none" viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div 
      className={`rounded-2xl p-8 border transition-all duration-500 ease-out relative flex flex-col justify-between overflow-hidden group ${
        item.highlighted 
          ? 'bg-brand-orange text-white border-brand-orange shadow-[0_20px_40px_rgba(234,88,12,0.15)] md:-translate-y-4 hover:-translate-y-5 hover:shadow-[0_25px_50px_rgba(234,88,12,0.25)]' 
          : 'bg-white text-brand-darkText border-gray-200/80 shadow-sm hover:border-brand-orange/30 hover:shadow-[0_20px_40px_rgba(11,29,58,0.04)] hover:-translate-y-1.5'
      }`}
    >
      {/* Light Reflection swipe for the non-highlighted components */}
      {!item.highlighted && (
        <div className="absolute inset-0 transform -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-gray-100/40 to-transparent transition-transform duration-1000 ease-out pointer-events-none" />
      )}

      {/* Decorative inner corner radial ring layout for highlighted emphasis */}
      {item.highlighted && (
        <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/10 rounded-full blur-xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />
      )}

      <div className="space-y-4 relative z-10">
        <h3 className={`text-xl font-black uppercase tracking-wide transition-colors duration-300 ${
          item.highlighted ? 'text-white' : 'text-brand-navy group-hover:text-brand-orange'
        }`}>
          {item.title}
        </h3>
        <p className={`text-sm leading-relaxed transition-colors duration-300 ${
          item.highlighted ? 'text-orange-50/90' : 'text-gray-500'
        }`}>
          {item.desc}
        </p>
      </div>

      <div className="mt-8 flex justify-between items-center relative z-10 w-full">
        {/* Dynamic Vector Wrapper Frame */}
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-sm border transition-all duration-300 group-hover:scale-110 ${
          item.highlighted 
            ? 'bg-white border-white/20' 
            : 'bg-gray-50 border-gray-100 group-hover:bg-orange-50 group-hover:border-orange-100'
        }`}>
          {renderIcon()}
        </div>

        {/* Micro Interaction Sourcing Map Action Link */}
        <span className={`text-xs font-black uppercase tracking-wider flex items-center gap-1.5 transition-all duration-300 ${
          item.highlighted ? 'text-white' : 'text-brand-orange'
        }`}>
          <span>View Details</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={3} 
            stroke="currentColor" 
            className="w-3.5 h-3.5 transform group-hover:translate-x-1.5 transition-transform duration-300"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </span>
      </div>
    </div>
  );
};