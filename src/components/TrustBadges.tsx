import React from 'react';

export const TrustBadges: React.FC = () => {
  return (
    <section className="bg-brand-navy text-white py-8 border-b-4 border-brand-orange">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          
          {/* Warranty Badge */}
          <div className="flex items-center justify-center space-x-3 text-center sm:text-left">
            <div className="flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-brand-orange">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m7.2-10.2A9.975 9.975 0 005.6 5.6m12.8 12.8A9.975 9.975 0 015.6 18.4m12.8-12.8L5.6 18.4" />
              </svg>
            </div>
            <div>
              <p className="font-bold text-sm uppercase tracking-wide">1-Year Replacement</p>
              <p className="text-xs text-gray-400">Warranty on all parts</p>
            </div>
          </div>

          {/* Fast Dispatch Badge */}
          <div className="flex items-center justify-center space-x-3 text-center sm:text-left">
            <div className="flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-brand-orange">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <p className="font-bold text-sm uppercase tracking-wide">Fast Dispatch</p>
              <p className="text-xs text-gray-400">Next-day delivery available</p>
            </div>
          </div>

          {/* Quality Guarantee Badge */}
          <div className="flex items-center justify-center space-x-3 text-center sm:text-left">
            <div className="flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-brand-orange">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="font-bold text-sm uppercase tracking-wide">Quality Tested</p>
              <p className="text-xs text-gray-400">100% QA inspected</p>
            </div>
          </div>

          {/* UK-Based Badge */}
          <div className="flex items-center justify-center space-x-3 text-center sm:text-left">
            <div className="flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-brand-orange">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="font-bold text-sm uppercase tracking-wide">UK-Based</p>
              <p className="text-xs text-gray-400">Dedicated support team</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
