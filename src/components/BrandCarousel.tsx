import React from 'react';
import { BRANDS_DATA } from '../assets/data/brandsData';

export const BrandCarousel: React.FC = () => {
  const doubleBrands = [...BRANDS_DATA, ...BRANDS_DATA];

  return (
    <section className="bg-brand-navy py-16 overflow-hidden border-t border-b border-orange-600/10">
      
      <style>{`
        @keyframes inlineMarquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .js-auto-marquee-track {
          display: flex;
          width: max-content;
          animation: inlineMarquee 35s linear infinite !important;
        }
        .js-auto-marquee-track:hover {
          animation-play-state: paused !important;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="text-center md:text-left">
          <span className="text-brand-orange uppercase text-xs font-black tracking-widest block mb-2">
            Premium Fleet Coverage
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight uppercase">
            Compatible <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Brands We Serve</span>
          </h2>
          <p className="mt-2 text-sm text-gray-400 max-w-xl">
            We provide genuine and aftermarket high-grade auto parts engineered for leading global manufacturers.
          </p>
        </div>
      </div>

      {/* Main Carousel Viewport - Now with solid white background */}
      <div className="relative w-full flex items-center overflow-x-hidden py-8 bg-white">
        
        <div className="js-auto-marquee-track flex items-center gap-12 md:gap-20">
          {doubleBrands.map((brand, index) => (
            <div 
              key={`${brand.id}-${index}`}
              // Removed grayscale/opacity filters; added hover scale effect for interaction
              className="flex flex-col items-center justify-center w-32 md:w-40 h-20 md:h-24 px-4 py-2 transition-transform duration-300 hover:scale-110 cursor-pointer"
              title={`${brand.name} Parts`}
            >
              <img 
                src={brand.logoUrl} 
                alt={`${brand.name} Logo`} 
                // Removed drop-shadows that created blur; using standard object-contain
                className="max-w-full max-h-[60px] w-auto h-auto object-contain"
                loading="lazy"
              />
              
              {/* Text set to dark navy to contrast against the new white background */}
              <span className="text-[10px] md:text-[11px] uppercase tracking-wider text-brand-navy font-black mt-4 text-center">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};