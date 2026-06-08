import React from 'react';

interface AboutProps {
  setCurrentPage: (page: 'home' | 'about' | 'products' | 'contact') => void;
}

export const About: React.FC<AboutProps> = ({ setCurrentPage }) => {
  return (
    <section className="py-24 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Symmetric Responsive Grid[cite: 1] */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Context Left Column[cite: 1] */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-brand-orange font-black tracking-widest text-xs uppercase">ABOUT US</p>

            <h2 className="text-3xl sm:text-4xl font-black text-brand-navy uppercase tracking-tight">
              About QAY Auto Parts Ltd
            </h2>

            <p className="text-xl text-gray-700 font-medium leading-relaxed">
              Qay Auto Parts combines rigorous engineering standards, strict compliance verification, and direct trade logistics to help operations move with more safety, speed, and absolute control.
            </p>

            <p className="text-gray-500 leading-relaxed">
              We focus on practical, real-world outcomes: dependable component tracking, compliant safety criteria, and digital inventory structures that make tracking components easier for maintenance teams and automotive distributors alike.
            </p>

            <div className="pt-2">
              <button 
                onClick={() => setCurrentPage('contact')} 
                className="inline-block border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white font-bold px-6 py-3 rounded transition-all uppercase tracking-wide text-sm"
              >
                Get in Touch
              </button>
            </div>
          </div>

          {/* Achievement Grid Right Column[cite: 1] */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4" aria-label="QAY highlights">
            {[
              { value: '15k+', label: 'Certified Parts Lines' },
              { value: '6+', label: 'Core Supply Divisions' },
              { value: '24/7', label: 'Trade Desk Support' },
              { value: 'OEM', label: 'Delivery Commitment' }
            ].map((stat, index) => (
              <article key={index} className="bg-brand-lightBg border border-gray-100 p-6 rounded-xl text-center shadow-sm hover:border-brand-orange/30 transition-all">
                <p className="text-3xl sm:text-4xl font-black text-brand-navy">{stat.value}</p>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mt-2">{stat.label}</p>
              </article>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};