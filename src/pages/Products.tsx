import React, { useState } from 'react';
import { CATEGORIES, PARTS_ITEMS, type PartItem } from '../assets/data/partsData';

interface ProductsProps {
  selectedCategory: string;
  setSelectedCategory: (catId: string) => void;
}

export const Products: React.FC<ProductsProps> = ({ selectedCategory, setSelectedCategory }) => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const currentCategoryName = CATEGORIES.find(c => c.id === selectedCategory)?.name || 'All Categories';

  // Filter products by both sidebar category and search bar
  const filteredProducts = PARTS_ITEMS.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || item.sku.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Pre-fills a WhatsApp message containing the exact chosen product information
  const handleWhatsAppInquiry = (item: PartItem) => {
    const phoneNumber = "923232242603"; // Replace with your real WhatsApp Business Number
    const message = `Hello QAY Auto Parts Team, I would like to inquire about stock availability and pricing for the following component:\n\n• Part Name: ${item.name}\n• Category: ${item.category.toUpperCase()}\n• Reference SKU: ${item.sku}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="bg-brand-lightBg min-h-screen">
      
      {/* Category Header Banner inspired by image_972027.jpg */}
      <div className="bg-brand-navy text-white py-12 text-center border-b-4 border-brand-orange">
        <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight">{currentCategoryName}</h1>
        <p className="text-gray-400 text-xs sm:text-sm mt-2 tracking-widest uppercase">Engine Rebuild Components Catalogue</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Left Column Sidebar (Category Select) inspired by image_972027.jpg */}
          <aside className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="text-brand-navy font-black text-sm uppercase tracking-wider mb-4 border-b border-gray-100 pb-2">
                Engine Parts Categories
              </h3>
              
              <ul className="space-y-1">
                <li>
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`w-full flex justify-between items-center px-3 py-2.5 rounded-lg text-xs font-bold uppercase transition-all ${
                      selectedCategory === 'all' ? 'bg-brand-orange text-white' : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <span>📁 All Collections</span>
                  </button>
                </li>
                {CATEGORIES.map((cat) => (
                  <li key={cat.id}>
                    <button
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`w-full flex justify-between items-center px-3 py-2.5 rounded-lg text-xs font-bold uppercase transition-all ${
                        selectedCategory === cat.id ? 'bg-brand-navy text-white border-l-4 border-brand-orange' : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <span className="truncate flex items-center gap-2">
                        <img src={cat.image} alt={cat.name} className="w-4 h-4 rounded object-cover" />
                        <span className="truncate">{cat.name}</span>
                      </span>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full ${selectedCategory === cat.id ? 'bg-brand-orange text-white' : 'bg-gray-100 text-gray-500'}`}>
                        {cat.count}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Right Column Grid (Product Results) inspired by image_972027.jpg */}
          <section className="lg:col-span-3 space-y-6">
            
            {/* Search and Metadata Controls */}
            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col sm:flex-row justify-between items-center gap-4">
              <input 
                type="text" 
                placeholder="Search by keyword or factory reference SKU number..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full sm:max-w-md px-4 py-2 text-xs border border-gray-200 rounded-lg focus:outline-none focus:border-brand-orange"
              />
              <p className="text-gray-400 text-xs font-bold tracking-wide uppercase">
                Showing {filteredProducts.length} Results
              </p>
            </div>

            {/* Inventory Grid View */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <article key={product.id} className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between overflow-hidden group">
                    <div className="p-4 space-y-4">
                      <figure className="aspect-square w-full rounded-lg bg-gray-50 overflow-hidden relative">
                        <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                        <span className="absolute top-2 left-2 bg-brand-navy text-white text-[9px] font-black uppercase px-2 py-0.5 rounded">
                          {product.fitment}
                        </span>
                      </figure>
                      
                      <div className="space-y-1">
                        <p className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">SKU: {product.sku}</p>
                        <h4 className="text-sm font-black text-brand-navy line-clamp-2 min-h-[40px] group-hover:text-brand-orange transition-colors">
                          {product.name}
                        </h4>
                      </div>
                    </div>

                    <div className="px-4 pb-4 pt-2 border-t border-gray-50 space-y-3 bg-gray-50/50">
                      {/* Interactive Custom WhatsApp Conversion Switch instead of traditional Add to Cart */}
                      <button
                        onClick={() => handleWhatsAppInquiry(product)}
                        className="w-full bg-brand-orange hover:bg-brand-orange text-white font-bold text-xs uppercase py-2.5 rounded-lg flex items-center justify-center gap-2 tracking-wide shadow-sm transition-colors"
                      >
                        <span className="text-sm">💬</span> Check Trade Stock & Pricing
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
                <p className="text-gray-400 font-bold uppercase text-sm">No specific stock files found matching your parameters.</p>
                <p className="text-xs text-gray-400 mt-1">Please try modifying your search keywords or contact our trade desk directly.</p>
              </div>
            )}
          </section>

        </div>
      </div>
    </div>
  );
};