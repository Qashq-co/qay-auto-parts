import React from 'react';

export const FactsBanner: React.FC = () => {
  return (
    <section className="relative bg-brand-navy text-white overflow-hidden">
      {/* Visual Overlay Shaders inspired by image_9724c2.png */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-brand-orange/20 mix-blend-multiply"></div>
      <div className="absolute inset-0 bg-[radial-gradient(#FF6B00_1px,transparent_1px)] opacity-5 [background-size:16px_16px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        <div className="lg:col-span-5 space-y-2">
          <p className="text-brand-orange font-bold tracking-widest text-xs uppercase">FUN FACTS</p>
          <h3 className="text-3xl font-black uppercase tracking-tight leading-tight">
            Quality Parts. Fast Delivery. <br />
            <span className="text-brand-orange">Unbeatable Value.</span>
          </h3>
        </div>

        {/* Dynamic Metric Layout Blocks inspired by image_9724c2.png */}
        <div className="lg:col-span-7 grid grid-cols-3 gap-4 text-center">
          {[
            { metric: '15,000+', label: 'Parts Stocked', icon: '🚗' },
            { metric: '25+', label: 'Trusted Brands', icon: '🏢' },
            { metric: '100k+', label: 'Happy Clients', icon: '👍' }
          ].map((fact, index) => (
            <div key={index} className="bg-slate-900/40 border border-slate-800 p-4 rounded-xl flex flex-col justify-center items-center backdrop-blur-sm">
              <div className="w-10 h-10 rounded-full bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center text-lg mb-2">
                {fact.icon}
              </div>
              <p className="text-lg sm:text-2xl font-black text-white tracking-tight">{fact.metric}</p>
              <p className="text-[10px] font-bold uppercase text-gray-400 tracking-wider mt-1">{fact.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};