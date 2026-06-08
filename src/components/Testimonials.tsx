import React from 'react';
import {reviews} from '../assets/data/reviewData';
export const Testimonials: React.FC = () => {
 

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="testimonials">
      {/* Background Subtle Industrial Alignments */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:14px_24px]" aria-hidden="true" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        
        {/* Professional Header Block */}
        <div className="text-center space-y-3">
          <p className="text-brand-orange font-black tracking-widest text-[11px] uppercase bg-orange-500/5 inline-block px-3 py-1 rounded border border-brand-orange/15 shadow-sm">
            TRUSTED PARTNER NETWORK
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-brand-navy uppercase tracking-tight">
            WHAT THE TRADE SAYS ABOUT <span className="text-brand-orange">QAY</span>
          </h2>
          <div className="w-16 h-1 bg-brand-orange mx-auto rounded-full mt-3 shadow-sm"></div>
        </div>

        {/* 3-Column Quote Architecture Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((rev, idx) => (
            <div 
              key={idx} 
              className="bg-gray-50/50 border border-gray-200/60 rounded-2xl p-6 lg:p-8 flex flex-col justify-between relative group hover:bg-white hover:border-brand-orange/30 hover:shadow-[0_20px_40px_rgba(11,29,58,0.05)] transition-all duration-400 ease-out"
            >
              
              <div className="space-y-5">
                {/* Header Rating Row & Industrial Quote SVG */}
                <div className="flex justify-between items-center w-full">
                  {/* Precise 5-Star Metric Vector Grid */}
                  <div className="flex items-center gap-0.5 text-brand-orange">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Minimal High-End Geometric Quote Graphic */}
                  <svg className="w-8 h-8 text-brand-orange/15 transform group-hover:rotate-6 transition-transform duration-300" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H6c0-2.2 1.8-4 4-4V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-8c0-2.2 1.8-4 4-4V8z" />
                  </svg>
                </div>

                {/* Clean, Non-Italicized Typography Block */}
                <p className="text-sm text-gray-600 leading-relaxed font-normal tracking-wide relative z-10">
                  "{rev.text}"
                </p>
              </div>

              {/* Card Footer Meta Information Row */}
              <div className="mt-8 pt-5 border-t border-gray-200/80 flex justify-between items-center w-full">
                <div>
                  <p className="font-black text-xs text-brand-navy uppercase tracking-wider">
                    {rev.author}
                  </p>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-0.5">
                    {rev.location}, UK
                  </p>
                </div>

                {/* Micro Verified Account Status Badge */}
                <div className="flex items-center gap-1 bg-emerald-500/10 border border-emerald-500/15 px-2.5 py-0.5 rounded-full">
                  <svg className="w-3 h-3 text-emerald-600" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  <span className="text-[9px] font-black uppercase text-emerald-700 tracking-wider">
                    Verified
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};