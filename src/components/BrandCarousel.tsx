import React from 'react';
import { BRANDS_DATA } from '../assets/data/brandsData';

export const BrandCarousel: React.FC = () => {
  // We duplicate the list array once in the markup container 
  // to achieve a perfect, gapless infinite loop illusion.
  const doubleBrands = [...BRANDS_DATA, ...BRANDS_DATA];

  return (
    <section className="bg-brand-navy py-16 overflow-hidden border-t border-b border-orange-600/10">
      
      {/* 1. INJECTED ANIMATION RUNTIME: Guarantees automatic playback without tailwind.config tweaks */}
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

      {/* Heading Block */}
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

      {/* Main Carousel Viewport Wrapper */}
      <div className="relative w-full flex items-center overflow-x-hidden py-6 bg-white/5 backdrop-blur-sm shadow-inner group">
        
        {/* Left Masking Gradient Overlay for Premium Fade Effect */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-brand-navy to-transparent z-10 pointer-events-none" />
        
        {/* Infinite Scrolling Track (Using our self-contained class engine) */}
        <div className="js-auto-marquee-track flex items-center gap-12 md:gap-16">
          {doubleBrands.map((brand, index) => (
            <div 
              key={`${brand.id}-${index}`}
              className="flex flex-col items-center justify-center w-28 md:w-36 h-20 md:h-24 px-4 py-2 transition-all duration-300 filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transform hover:scale-110 group/item"
              title={`${brand.name} Parts`}
            >
              <img 
                src={brand.logoUrl} 
                alt={`${brand.name} HD Logo`} 
                className="max-w-full max-h-[55px] object-contain drop-shadow-[0_4px_12px_rgba(255,255,255,0.15)]"
                loading="lazy"
              />
              
              {/* Updated: Always Visible & Pure Crisp White Label */}
              <span className="text-[11px] uppercase tracking-wider text-white font-extrabold mt-3 text-center transition-colors duration-200">
                {brand.name}
              </span>
            </div>
          ))}
        </div>

        {/* Right Masking Gradient Overlay for Premium Fade Effect */}
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-brand-navy to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
};