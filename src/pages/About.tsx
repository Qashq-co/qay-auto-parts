import React from 'react';

export const About: React.FC = () => {
  const coreValues = [
    {
      title: "OEM-Spec Precision",
      desc: "We don't deal in approximations. Every component in our catalog undergoes rigorous geometric verification to ensure it matches exact factory dimensions and tolerances.",
      icon: (
        <svg className="w-5 h-5 stroke-brand-orange" fill="none" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.827m11.379-8.16l1.15-.827M8.14 21.27l.707-1.03m6.304-9.19l.707-1.03M12 3v1.5m0 15V21m-3.077-8.457l-.513-1.41m5.13-14.095l-.513-1.41M6.215 18.894l-.827-1.15m8.16-11.379l-.827-1.15m-1.03-1.836l-1.03.707m-9.19 6.304l-1.03.707M12 12v.01" />
        </svg>
      )
    },
    {
      title: "Supply Chain Velocity",
      desc: "Minimizing vehicle downtime is critical for workshops and fleet operators. Our strategic UK logistics partnerships ensure swift distribution and accurate delivery windows.",
      icon: (
        <svg className="w-5 h-5 stroke-brand-orange" fill="none" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.6-5.84a14.954 14.954 0 0 1 5.84-2.58m1.76-1.76l-.86.86M21 3v2.58" />
        </svg>
      )
    },
    {
      title: "Technical Expertise",
      desc: "We speak the language of professional technicians. From identifying obscure engine codes to checking individual gasket profiles, our desk provides expert component support.",
      icon: (
        <svg className="w-5 h-5 stroke-brand-orange" fill="none" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.67 2.67 0 0021 17.25l-5.83-5.83m-3.75 3.75a4.87 4.87 0 01-6.84-6.84 4.87 4.87 0 016.84 6.84zm0 0l6-6M13.75 5.67l1.23-1.23a1.5 1.5 0 012.12 0l1.24 1.24a1.5 1.5 0 010 2.12l-1.24 1.23" />
        </svg>
      )
    }
  ];

  const milestones = [
    { year: "15K+", label: "Components Managed" },
    { year: "100%", label: "Batch Inspected" },
    { year: "24/48h", label: "Standard UK Dispatch" },
    { year: "Tier-1", label: "Global Brand Sourcing" }
  ];

  return (
    <main className="bg-white min-h-screen text-gray-800">
      
      {/* 1. HERO BANNER: Industrial High-Contrast Page Header */}
      <section className="relative bg-[#071426] py-24 sm:py-32 text-white overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:20px_30px]" aria-hidden="true" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-orange/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4 text-center">
          <p className="text-brand-orange font-black tracking-widest text-[11px] uppercase bg-orange-500/10 inline-block px-3 py-1 rounded border border-brand-orange/20 shadow-sm">
            Company Overview
          </p>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight uppercase leading-none">
            ENGINEERED TO <span className="text-brand-orange">REBUILD</span>
          </h1>
          <p className="text-gray-400 text-sm sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
            QAY Auto Parts Ltd is a specialist supplier of engine rebuild and replacement components for the UK automotive trade, serving passenger and commercial vehicle networks.
          </p>
        </div>
      </section>


      {/* 2. CORE NARRATIVE: Strategic Mission & Trade Profile */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Side: Editorial Layout Statement */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <span className="text-brand-orange text-xs font-black uppercase tracking-wider block">OUR REPUTATION</span>
            <h2 className="text-2xl sm:text-4xl font-black text-brand-navy uppercase tracking-tight leading-tight">
              Setting the Standard in Engine Parts Distribution
            </h2>
          </div>
          
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            At QAY Auto Parts Ltd, we specialise in engine rebuild and replacement parts — pistons, crankshafts, cylinder heads, gaskets, bearings, timing chains, camshafts, and more. Every component in our catalog is sourced exclusively from certified global manufacturers and tier-1 production lines, ensuring precise OEM specifications.
          </p>

          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            Our comprehensive approach features precision search filters that allow trade clients to source components seamlessly by internal engine code, brand framework, or part numbers. This eliminates catalog ambiguity and prevents incorrect order fulfillments.
          </p>

          {/* Blockquote Embed */}
          <div className="border-l-4 border-brand-orange bg-gray-50 p-5 rounded-r-xl space-y-2">
            <p className="text-xs sm:text-sm text-brand-navy font-bold tracking-wide">
              "Whether dispatching high-demand timing kits or obscure internal block components, our focus is absolute accuracy and structural integrity."
            </p>
            <span className="text-[10px] text-gray-400 uppercase font-bold block">— Operations Directorate, QAY Auto Parts</span>
          </div>
        </div>

        {/* Right Side: Visual Info-Graphic Box Grid */}
        <div className="lg:col-span-5 bg-gray-50 border border-gray-200/60 rounded-2xl p-6 sm:p-8 space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/[0.02] rounded-full blur-xl pointer-events-none" />
          
          <h3 className="text-brand-navy font-black text-sm uppercase tracking-wider border-b border-gray-200 pb-3">
            Quality Control Framework
          </h3>

          <ul className="space-y-4">
            {[
              { title: "Material Verification", desc: "Rigorous testing protocols for high-tensile strength and thermal properties." },
              { title: "Batch Certification", desc: "Every inventory lot tracked and verified before entering UK storage cells." },
              { title: "Exact Fit Validation", desc: "Components cross-referenced with live factory blueprints." }
            ].map((item, idx) => (
              <li key={idx} className="flex gap-3 items-start">
                <div className="mt-1 w-5 h-5 rounded-md bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 flex-shrink-0">
                  <svg className="w-3 h-3 text-emerald-600" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-black text-brand-navy uppercase tracking-tight">{item.title}</h4>
                  <p className="text-xs text-gray-500 mt-0.5 leading-normal">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>


      {/* 3. METRIC COUNTERS: Operational Infrastructure Scale */}
      <section className="bg-brand-lightBg py-16 border-y border-gray-200/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {milestones.map((item, idx) => (
            <div key={idx} className="space-y-1 group">
              <p className="text-3xl sm:text-5xl font-black text-brand-navy tracking-tight group-hover:text-brand-orange transition-colors duration-300">
                {item.year}
              </p>
              <p className="text-[10px] sm:text-xs font-extrabold text-gray-400 uppercase tracking-wider">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>


      {/* 4. VALUE PILLARS: Professional Performance Guarantees */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center space-y-3">
          <span className="text-brand-orange text-xs font-black uppercase tracking-wider block">OPERATIONAL ETHOS</span>
          <h2 className="text-2xl sm:text-4xl font-black text-brand-navy uppercase tracking-tight">
            How We Support Your Operations
          </h2>
          <div className="w-12 h-1 bg-brand-orange mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coreValues.map((value, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-gray-200/70 p-6 lg:p-8 rounded-2xl space-y-4 flex flex-col justify-between transition-all duration-300 hover:border-brand-orange/30 hover:shadow-[0_20px_40px_rgba(11,29,58,0.03)] group"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center transition-colors duration-300 group-hover:bg-orange-50 group-hover:border-orange-100 shadow-sm">
                  {value.icon}
                </div>
                <h3 className="text-lg font-black uppercase tracking-wide text-brand-navy group-hover:text-brand-orange transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-normal">
                  {value.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* 5. CALL TO ACTION (CTA): Professional Quote Gateway */}
      <section className="bg-[#071426] text-white relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(#EA580C_1px,transparent_1px)] opacity-[0.03] [background-size:20px_20px]" aria-hidden="true" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center relative z-10 space-y-6">
          <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight leading-tight">
            Looking for a Specific OEM Component or Brand?
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Get in touch with our specialist desk. Provide your vehicle specification or active part reference identifier for an immediate trade availability report.
          </p>
          <div className="pt-2">
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 bg-brand-orange text-white text-xs sm:text-sm font-black uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-md shadow-orange-500/10 hover:bg-orange-600 hover:-translate-y-0.5 transition-all duration-300 ease-out"
            >
              <span>Connect with Support</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

    </main>
  );
};