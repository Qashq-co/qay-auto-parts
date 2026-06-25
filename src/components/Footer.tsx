import React from 'react';

interface FooterProps {
  setCurrentPage: (page: 'home' | 'about' | 'products' | 'contact' | 'privacy' | 'shipping' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  return (
    <footer className="bg-brand-navy text-gray-300 pt-12 pb-6 border-t-4 border-brand-orange">
      {/* 5-Column Grid Matrix Setup for Desktop layouts */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        
        {/* About Column (Spans 2 columns on large viewports for readability) */}
        <div className="space-y-4 lg:col-span-2">
          <h3 className="text-white font-bold text-lg tracking-wide">QAY AUTO PARTS LTD</h3>
          <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
            Specialists in engine rebuild and replacement parts for passenger and commercial vehicles across the UK. Supplying pistons, crankshafts, cylinder heads, gaskets, bearings and more. Quality assured with fast dispatch.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-bold text-lg tracking-wide mb-4">Quick Navigation</h3>
          <ul className="space-y-2 text-sm">
            <li><button onClick={() => setCurrentPage('home')} className="hover:text-brand-orange transition-colors text-left">Home Page</button></li>
            <li><button onClick={() => setCurrentPage('about')} className="hover:text-brand-orange transition-colors text-left">About Our Quality</button></li>
            <li><button onClick={() => setCurrentPage('products')} className="hover:text-brand-orange transition-colors text-left">Browse Components</button></li>
            <li><button onClick={() => setCurrentPage('contact')} className="hover:text-brand-orange transition-colors text-left">Request a Quote</button></li>
          </ul>
        </div>

        {/* Brand New Legal Policies Section */}
        <div>
          <h3 className="text-white font-bold text-lg tracking-wide mb-4">Legal Policies</h3>
          <ul className="space-y-2 text-sm">
            <li><button onClick={() => setCurrentPage('terms')} className="hover:text-brand-orange transition-colors text-left">Terms & Conditions</button></li>
            <li><button onClick={() => setCurrentPage('privacy')} className="hover:text-brand-orange transition-colors text-left">Privacy Policy</button></li>
            <li><button onClick={() => setCurrentPage('shipping')} className="hover:text-brand-orange transition-colors text-left">Shipping & Returns</button></li>
          </ul>
        </div>

        {/* Direct Contact & Address */}
        <div>
          <h3 className="text-white font-bold text-lg tracking-wide mb-4">Get In Touch</h3>
          <div className="space-y-1 text-sm text-gray-400 mb-4">
            <p className="text-white font-bold text-base">📞 +44 7378201055</p>
            <p className="text-brand-orange text-sm font-medium">✉️ sales@qayautoparts.co.uk</p>
          </div>
          
          <h4 className="text-white font-semibold text-sm tracking-wide mb-1">Registered Office</h4>
          <p className="text-sm text-gray-400 leading-relaxed text-left">
            20 Wenlock Road,<br />
            London, United Kingdom<br />
            <span className="text-white font-medium">{`Postcode: N1 7GU`}</span>
          </p>
        </div>
      </div>

      {/* Bottom Copyright & Legal Line */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-6 border-t border-slate-800 text-center text-xs text-gray-500 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="text-center sm:text-left">
          <p>&copy; {new Date().getFullYear()} Qay Auto Parts Ltd.</p>
          <p className="text-slate-600 mt-0.5">Company Registration No: 16921659</p>
        </div>
        <p className="tracking-wide text-center sm:text-right">✓ 1-Year Replacement Warranty | Engine Rebuild & Replacement Parts</p>
      </div>
    </footer>
  );
};