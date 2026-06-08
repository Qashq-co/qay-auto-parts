import React from 'react';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      title: "Fast & Reliable Delivery",
      desc: "We dispatch orders quickly so your vehicle is back on the road without unnecessary delays. Most UK orders arrive within 1–3 working days.",
      badge: "🚚"
    },
    {
      title: "1000+ Parts in Stock",
      desc: "From obscure engine codes to high-demand components, our catalogue covers virtually every make and model on UK roads.",
      badge: "🎯",
      highlighted: true
    },
    {
      title: "Genuine Quality Guaranteed",
      desc: "Every part we stock whether genuine OEM or premium aftermarket is rigorously sourced from trusted global brands.",
      badge: "🛡️"
    }
  ];

  return (
    <section className="py-20 bg-brand-lightBg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="text-center space-y-2">
          <p className="text-brand-orange font-bold tracking-widest text-xs uppercase">OUR BENEFITS</p>
          <h2 className="text-3xl sm:text-4xl font-black text-brand-navy uppercase tracking-tight">Why Choose QAY Auto Parts</h2>
        </div>

        {/* 3-Column Balanced Card Deck inspired by image_972b8b.png */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((item, idx) => (
            <div 
              key={idx} 
              className={`rounded-2xl p-8 border transition-all duration-300 relative flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-md ${
                item.highlighted 
                  ? 'bg-brand-orange text-white border-brand-orange' 
                  : 'bg-white text-brand-darkText border-gray-200'
              }`}
            >
              <div className="space-y-4 relative z-10">
                <h3 className={`text-xl font-black uppercase tracking-wide ${item.highlighted ? 'text-white' : 'text-brand-navy'}`}>
                  {item.title}
                </h3>
                <p className={`text-sm leading-relaxed ${item.highlighted ? 'text-orange-50' : 'text-gray-500'}`}>
                  {item.desc}
                </p>
              </div>

              <div className="mt-8 flex justify-between items-center relative z-10">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold shadow-sm ${item.highlighted ? 'bg-white' : 'bg-brand-lightBg'}`}>
                  {item.badge}
                </div>
                <span className={`text-xs font-bold uppercase tracking-wider ${item.highlighted ? 'text-white' : 'text-brand-orange'}`}>
                  View Details ➔
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};