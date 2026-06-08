import React from 'react';

interface HeroProps {
  setCurrentPage: (page: 'home' | 'about' | 'products' | 'contact') => void;
}

export const Hero: React.FC<HeroProps> = ({ setCurrentPage }) => {
  // B2B Automotive background video loop (or high-res fallback poster image)
  const heroVideoUrl = 'https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83d61%2F696ecc1f3ff5304a4fb2789b_Hero-video%20%281%29_mp4.mp4';

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-brand-navy text-white" id="home">
      
      {/* Background Media Shell[cite: 7] */}
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <video
          className="w-full h-full object-cover scale-105"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src={heroVideoUrl} type="video/mp4" />
        </video>
        {/* Layer Mask Overlay[cite: 7] */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1D3A]/95 via-[#0B1D3A]/80 to-transparent"></div>
      </div>

      {/* Content Container Shell[cite: 7] */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="max-w-3xl space-y-6">
          <p className="text-brand-orange font-bold tracking-widest text-xs uppercase bg-orange-500/10 inline-block px-3 py-1 rounded border border-brand-orange/20">
            Premium Component Distribution
          </p>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight uppercase">
            Building Smarter Fleets Through Precision <span className="text-brand-orange">Engineering</span>
          </h1>

          <p className="text-gray-300 text-lg sm:text-xl font-light max-w-2xl leading-relaxed">
            We supply high-demand replacement components with disciplined quality assurance, dependable trade fulfillment, and practical part-matching strategies.
          </p>

          <div className="pt-4">
            <button 
              className="bg-brand-orange text-white font-bold px-8 py-4 rounded shadow-lg shadow-orange-600/30 hover:bg-opacity-95 transition-all uppercase tracking-wider text-sm"
              onClick={() => setCurrentPage('products')}
            >
              Explore Components Catalogue
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};