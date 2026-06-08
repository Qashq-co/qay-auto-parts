import React from 'react';

interface HeroProps {
  setCurrentPage: (page: 'home' | 'about' | 'products' | 'contact') => void;
}

export const Hero: React.FC<HeroProps> = ({ setCurrentPage }) => {
  // B2B Automotive background video loop
  const heroVideoUrl = '/hero.mp4'; 

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-brand-navy text-white" id="home">
      
      {/* Background Media Shell */}
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <video
          className="w-full h-full object-cover scale-105 filter brightness-95"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src={heroVideoUrl} type="video/mp4" />
        </video>
        
        {/* Advanced Layer Mask Overlays for Deep Visual Hierarchy */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1D3A]/95 via-[#0B1D3A]/75 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D3A] via-transparent to-transparent opacity-60"></div>
      </div>

      {/* Content Container Shell */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24 lg:py-32">
        <div className="max-w-4xl space-y-8">
          
          {/* Enhanced Badge with Backdrop Blur */}
          <div className="inline-block">
            <p className="text-brand-orange font-bold tracking-widest text-[11px] uppercase bg-orange-500/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-brand-orange/30 shadow-sm">
              ⚙️ Premium Component Distribution
            </p>
          </div>
          
          {/* Sleeker Typographic Scale & Heading Weight Balance */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] uppercase max-w-3xl">
            Building Smarter Fleets <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-300">Through Precision</span> <span className="text-brand-orange block sm:inline">Engineering</span>
          </h1>

          {/* Improved Body Text Legibility */}
          <p className="text-gray-300 text-lg sm:text-xl font-normal max-w-2xl leading-relaxed">
            We supply high-demand replacement components with disciplined quality assurance, dependable trade fulfillment, and practical part-matching strategies.
          </p>

          {/* Balanced B2B CTA Action Row */}
          <div className="pt-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <button 
              className="w-full sm:w-auto bg-brand-orange text-white font-bold px-8 py-4 rounded shadow-lg shadow-orange-600/20 hover:bg-orange-500 hover:shadow-orange-600/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 uppercase tracking-wider text-sm flex items-center justify-center gap-2 group"
              onClick={() => setCurrentPage('products')}
            >
              <span>Explore Components Catalogue</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
            
            <button 
              className="w-full sm:w-auto bg-white/5 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded border border-white/10 hover:bg-white/10 hover:border-white/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 uppercase tracking-wider text-sm flex items-center justify-center"
              onClick={() => setCurrentPage('contact')}
            >
              Get a Business Quote
            </button>
          </div>

          {/* Subtle B2B Trust Indicators / Stats Row */}
          <div className="pt-12 grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-xl border-t border-white/10 opacity-80">
            <div>
              <p className="text-2xl sm:text-3xl font-black text-brand-orange">100%</p>
              <p className="text-xs text-gray-400 uppercase tracking-wider mt-0.5">QA Inspected</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-black text-white">Global</p>
              <p className="text-xs text-gray-400 uppercase tracking-wider mt-0.5">Trade Fulfillment</p>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="text-2xl sm:text-3xl font-black text-white">Direct</p>
              <p className="text-xs text-gray-400 uppercase tracking-wider mt-0.5">Part-Matching Support</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};