import React from 'react';

export const FactsBanner: React.FC = () => {
  const stats = [
    { 
      metric: '15,000+', 
      label: 'Components Stocked', 
      // Spark Plug / Piston Blueprint Line Icon
      icon: (
        <svg className="w-5 h-5 stroke-brand-orange" fill="none" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      )
    },
    { 
      metric: '25+', 
      label: 'Trusted Tier-1 Brands', 
      // Verified Network Node / Logistics Icon
      icon: (
        <svg className="w-5 h-5 stroke-brand-orange" fill="none" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21h10.5V3.75c0-.621-.504-1.125-1.125-1.125h-8.25C7.254 2.625 6.75 3.126 6.75 3.75V21Z" />
        </svg>
      )
    },
    { 
      metric: '100k+', 
      label: 'Fulfilled Deliveries', 
      // Globally Endorsed Shield Icon
      icon: (
        <svg className="w-5 h-5 stroke-brand-orange" fill="none" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
        </svg>
      )
    }
  ];

  return (
    <section className="relative bg-[#071426] text-white overflow-hidden border-y border-white/5">
      
      {/* Visual Overlay Shaders & Depth Masks */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#071426] via-[#0B1D3A]/95 to-brand-orange/5 mix-blend-initial" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(#EA580C_1px,transparent_1px)] opacity-[0.03] [background-size:20px_20px]" aria-hidden="true" />
      
      {/* Fine Ambient Color Spill Line */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Descriptive Grid Anchoring Block */}
        <div className="lg:col-span-5 space-y-3">
          <p className="text-brand-orange font-black tracking-widest text-[11px] uppercase bg-orange-500/10 inline-block px-3 py-1 rounded border border-brand-orange/20 shadow-sm">
            Operational Scale
          </p>
          <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tight leading-[1.15] text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-200">
            Precision Logistics. <br className="hidden sm:inline" />
            <span className="text-brand-orange">Uncompromising Quality.</span>
          </h3>
          <p className="text-gray-400 text-sm max-w-sm font-normal leading-relaxed pt-1">
            Empowering workshops and fleet operations globally with strict catalog accuracy and trade-grade assurance metrics.
          </p>
        </div>

        {/* Right Dynamic Metric Layout Cards */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-5">
          {stats.map((fact, index) => (
            <div 
              key={index} 
              className="bg-white/[0.02] border border-white/10 p-6 rounded-2xl flex flex-col justify-center items-center text-center backdrop-blur-md relative overflow-hidden group transition-all duration-300 hover:border-brand-orange/30 hover:bg-white/[0.04] hover:-translate-y-1"
            >
              {/* Invisible background accent highlight ring that expands on hover */}
              <div className="absolute -right-6 -bottom-6 w-16 h-16 bg-brand-orange/5 rounded-full blur-xl pointer-events-none group-hover:scale-150 transition-transform duration-500" />
              
              {/* Sleek SVG Vector Frame Container */}
              <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:bg-brand-orange/10 group-hover:border-brand-orange/30 mb-4 shadow-sm group-hover:scale-105">
                {fact.icon}
              </div>
              
              {/* Quantitative Data Value Metric */}
              <p className="text-2xl sm:text-3xl font-black text-white tracking-tight group-hover:text-brand-orange transition-colors duration-300">
                {fact.metric}
              </p>
              
              {/* Explanatory Data Sublabel */}
              <p className="text-[10px] font-extrabold uppercase text-gray-400 group-hover:text-gray-300 tracking-wider mt-1.5 leading-snug max-w-[120px]">
                {fact.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};