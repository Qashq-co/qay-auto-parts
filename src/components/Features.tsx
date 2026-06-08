import React from 'react';

const coreFeatures = [
  { title: 'Qualified Technicians', description: 'Deep domain understanding across modern commercial and passenger parts specifications.' },
  { title: 'Integrated Supply', description: 'Both mechanical hardware and custom component tracing resources aligned together.' },
  { title: 'Reliability & Traceability', description: 'Batch control tracking, transparent pricing structures, and accurate delivery sheets.' },
  { title: 'Long-Term Partnership', description: 'Strict focus on maintaining part access continuity for commercial operations.' },
];

export const Features: React.FC = () => {
  // Slicing identical arrays exactly like Features.js[cite: 2]
  const leftFeatures = coreFeatures.slice(0, 2);
  const rightFeatures = coreFeatures.slice(2);

  return (
    <section className="py-24 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <div className="text-center space-y-2">
          <p className="text-brand-orange font-bold tracking-widest text-xs uppercase">WHY CHOOSE QAY</p>
          <h2 className="text-3xl sm:text-4xl font-black text-brand-navy uppercase tracking-tight">Why Supply Chains Partner With QAY</h2>
          <div className="h-1 w-20 bg-brand-orange mx-auto rounded-full mt-3"></div>
        </div>

        {/* 3-Column Center Balanced Blueprint[cite: 2] */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Feature Column[cite: 2] */}
          <ul className="lg:col-span-4 space-y-6">
            {leftFeatures.map((feat, index) => (
              <li key={index} className="bg-brand-lightBg border border-gray-200/80 p-6 rounded-xl shadow-sm hover:border-brand-orange/40 transition-all">
                <article className="space-y-3">
                  <div className="w-10 h-10 rounded bg-brand-navy text-brand-orange font-bold flex items-center justify-center shadow-sm">
                    ✓
                  </div>
                  <h3 className="text-lg font-bold text-brand-navy uppercase tracking-wide">{feat.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{feat.description}</p>
                </article>
              </li>
            ))}
          </ul>

          {/* Central Technical Banner Display[cite: 2] */}
          <figure className="lg:col-span-4 bg-brand-navy p-6 rounded-2xl shadow-xl flex items-center justify-center min-h-[340px] border-b-4 border-brand-orange relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#FF6B00_1px,transparent_1px)] opacity-10 [background-size:12px_12px]"></div>
            <div className="text-center space-y-4 relative z-10">
              <span className="text-5xl">📦</span>
              <h4 className="text-white font-black text-2xl tracking-tight uppercase">QAY GENUINE PARTS</h4>
              <p className="text-gray-400 text-xs px-4">Strictly batch-verified and logged under international distribution standards.</p>
            </div>
          </figure>

          {/* Right Feature Column[cite: 2] */}
          <ul className="lg:col-span-4 space-y-6">
            {rightFeatures.map((feat, index) => (
              <li key={index} className="bg-brand-lightBg border border-gray-200/80 p-6 rounded-xl shadow-sm hover:border-brand-orange/40 transition-all">
                <article className="space-y-3">
                  <div className="w-10 h-10 rounded bg-brand-navy text-brand-orange font-bold flex items-center justify-center shadow-sm">
                    ✓
                  </div>
                  <h3 className="text-lg font-bold text-brand-navy uppercase tracking-wide">{feat.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{feat.description}</p>
                </article>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </section>
  );
};