import React from 'react';

interface ServicesProps {
  setCurrentPage: (page: 'home' | 'about' | 'products' | 'contact') => void;
}

export const Services: React.FC<ServicesProps> = ({ setCurrentPage }) => {
  const categories = [
    { title: "Braking Layouts", icon: "square-outline", image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=600&q=80" },
    { title: "Suspension Elements", icon: "git-branch-outline", image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=600&q=80" },
    { title: "Engine Components", icon: "construct-outline", image: "https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&w=600&q=80" },
    { title: "Transmission Modules", icon: "sync-outline", image: "https://images.unsplash.com/photo-1506015391300-4802dc74de2e?auto=format&fit=crop&w=600&q=80" },
  ];

  return (
    <section className="py-24 bg-brand-lightBg" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="space-y-2">
          <p className="text-brand-orange font-bold tracking-widest text-xs uppercase">OUR PORTFOLIOS</p>
          <h2 className="text-3xl sm:text-4xl font-black text-brand-navy uppercase tracking-tight">Engineered Component Lines</h2>
        </div>

        {/* Cinematic Card Layout[cite: 8] */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <article key={index} className="relative group h-80 rounded-xl overflow-hidden shadow-md cursor-pointer" onClick={() => setCurrentPage('products')}>
              {/* Media Element Layer[cite: 8] */}
              <figure className="absolute inset-0 w-full h-full transition-transform duration-500 group-hover:scale-110">
                <img src={cat.image} alt={cat.title} className="w-full h-full object-cover" loading="lazy" />
              </figure>
              {/* Transparent Gradient Shader[cite: 8] */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 group-hover:via-black/50 transition-all"></div>
              
              {/* Content Box Overlay[cite: 8] */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white z-10">
                <div className="w-10 h-10 rounded bg-brand-orange flex items-center justify-center font-bold text-xl mb-3 shadow">
                  ⚙️
                </div>
                <h3 className="text-xl font-bold uppercase tracking-wide">{cat.title}</h3>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center pt-4">
          <button 
            className="inline-flex items-center gap-2 font-bold text-brand-navy hover:text-brand-orange transition-colors uppercase tracking-wider text-sm"
            onClick={() => setCurrentPage('products')}
          >
            <span>View More Component Classifications</span>
            <span className="text-lg">➔</span>
          </button>
        </div>
      </div>
    </section>
  );
};