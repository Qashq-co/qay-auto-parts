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
            Premium suppliers of certified, high-end commercial and passenger vehicle components across the UK. Engineered for performance and longevity.
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

        {/* Direct Contact */}
        <div>
          <h3 className="text-white font-bold text-lg tracking-wide mb-4">Get In Touch</h3>
          <p className="text-sm text-gray-400">Have an OEM part number or inquiry?</p>
          <div className="mt-3 space-y-1">
            <p className="text-white font-bold text-base">📞 +92 3232242603</p>
            <p className="text-brand-orange text-sm font-medium">✉️ info@qayautoparts.co.uk</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-6 border-t border-slate-800 text-center text-xs text-gray-500 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p>&copy; {new Date().getFullYear()} Qay Auto Parts Ltd. Company registered in England & Wales.</p>
        <p className="tracking-wide">High Quality Replacement Parts</p>
      </div>
    </footer>
  );
};