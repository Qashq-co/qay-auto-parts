import React from 'react';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      author: "James R.",
      location: "Manchester",
      text: "Ordered a crankshaft on Monday, arrived by Wednesday. Perfect fit and better priced than anywhere else I checked. Smooth experience from start to finish."
    },
    {
      author: "Adeel K.",
      location: "Bradford",
      text: "The range of timing kits and gaskets is genuinely impressive. Couldn’t find OEM-spec alternatives at these prices anywhere online. My go-to for engine parts now."
    },
    {
      author: "Richard T.",
      location: "London",
      text: "Searching by engine code made it so easy to find exactly what I needed. Site is well-organised and the Shop by Brand feature is a brilliant touch."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="text-center space-y-2">
          <p className="text-brand-orange font-bold tracking-widest text-xs uppercase">OUR CUSTOMERS</p>
          <h2 className="text-3xl sm:text-4xl font-black text-brand-navy uppercase tracking-tight">
            What They’re Saying About QAY
          </h2>
        </div>

        {/* 3-Column Quote Architecture inspired by image_972427.png */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <div key={idx} className="bg-brand-lightBg rounded-xl p-6 border border-gray-100 flex flex-col justify-between relative group hover:border-brand-orange/30 transition-all">
              
              <div className="space-y-4">
                <span className="text-4xl text-brand-orange/20 font-serif block h-4">“</span>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed italic relative z-10 px-2">
                  {rev.text}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200/60 px-2">
                <p className="font-black text-xs text-brand-navy uppercase tracking-wide">{rev.author}</p>
                <p className="text-[10px] text-gray-400 font-semibold uppercase">{rev.location} • Verified Buyer</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};