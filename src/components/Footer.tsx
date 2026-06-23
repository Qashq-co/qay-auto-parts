import React from 'react';

interface FooterProps {
  setCurrentPage: (page: 'home' | 'about' | 'products' | 'contact') => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  return (
    <footer className="bg-brand-navy text-gray-300 pt-12 pb-6 border-t-4 border-brand-orange">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* About Column */}
        <div className="space-y-4">
          <h3 className="text-white font-bold text-lg tracking-wide">QAY AUTO PARTS LTD</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Specialists in engine rebuild and replacement parts for passenger and commercial vehicles across the UK. Supplying pistons, crankshafts, cylinder heads, gaskets, bearings and more. Quality assured with fast dispatch.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-bold text-lg tracking-wide mb-4">Quick Navigation</h3>
          <ul className="space-y-2 text-sm">
            <li><button onClick={() => setCurrentPage('home')} className="hover:text-brand-orange transition-colors">Home Page</button></li>
            <li><button onClick={() => setCurrentPage('about')} className="hover:text-brand-orange transition-colors">About Our Quality</button></li>
            <li><button onClick={() => setCurrentPage('products')} className="hover:text-brand-orange transition-colors">Browse Components</button></li>
            <li><button onClick={() => setCurrentPage('contact')} className="hover:text-brand-orange transition-colors">Request a Quote</button></li>
          </ul>
        </div>

        {/* Opening Hours */}
        <div>
          <h3 className="text-white font-bold text-lg tracking-wide mb-4">Business Hours</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Monday - Friday: <span className="text-white">8:30 AM - 5:30 PM</span></li>
            <li>Saturday: <span className="text-white">9:00 AM - 2:00 PM</span></li>
            <li>Sunday: <span className="text-brand-orange font-semibold">Closed</span></li>
          </ul>
        </div>

        {/* Direct Contact & Address */}
        <div>
          <h3 className="text-white font-bold text-lg tracking-wide mb-4">Get In Touch</h3>
          <div className="space-y-1 text-sm text-gray-400 mb-4">
            <p className="text-white font-bold text-base">📞 +44 7398467535</p>
            <p className="text-brand-orange text-sm font-medium">✉️ sales@qayautoparts.co.uk</p>
          </div>
          
          <h4 className="text-white font-semibold text-sm tracking-wide mb-1">Registered Office</h4>
          <p className="text-sm text-gray-400 leading-relaxed">
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
        <p className="tracking-wide">✓ 1-Year Replacement Warranty | Engine Rebuild & Replacement Parts</p>
      </div>
    </footer>
  );
};