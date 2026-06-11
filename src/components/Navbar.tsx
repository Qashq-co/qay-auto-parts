import React, { useState, useEffect } from 'react';
import { qayLogo2 } from '../assets/images';

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: 'home' | 'products' | 'about' | 'contact') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHeaderActive, setIsHeaderActive] = useState(false);

  // Dynamic Contact Extraction via Environment Utilities
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_PHONE || "923232242603";
  const emailAddress = import.meta.env.VITE_SUPPORT_EMAIL || "contact.qashq@gmail.com";
  
  const defaultMessage = encodeURIComponent("Hello QAY Auto Parts Team, I would like to inquire about a business quote.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;
  const mailtoUrl = `mailto:${emailAddress}?subject=Business%20Inquiry%20-%20QAY%20Auto%20Parts`;

  const toggleNav = () => setIsOpen(!isOpen);
  const closeNav = () => setIsOpen(false);

  // Monitors the page scroll depth to shrink/activate header backgrounds smoothly
  useEffect(() => {
    const handleScroll = () => setIsHeaderActive(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Products & Categories' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact & Quotes' },
  ] as const;

  return (
    <>
      {/* Dimmed Background Overlay Shield for Mobile Drawers */}
      <div 
        className={`fixed inset-0 bg-black/60 z-[40] transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeNav}
      />

      <nav 
        className={`sticky top-0 z-50 text-white w-full border-b transition-all duration-300 ${
          isHeaderActive 
            ? 'bg-brand-navy/95 backdrop-blur-md shadow-xl py-2 border-orange-600/20' 
            : 'bg-brand-navy py-4 border-orange-600/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Left Section: Logo & Brand Wordmark Combination */}
            <div 
              className="flex-shrink-0 flex items-center gap-3 cursor-pointer group" 
              onClick={() => { setCurrentPage('home'); closeNav(); }}
            >
              <img 
                src={qayLogo2} 
                alt="QAY Auto Parts Logo" 
                className="h-11 w-11 object-contain rounded-md transition-transform duration-300 group-hover:scale-105" 
              />
              <span className="text-xl md:text-2xl font-black tracking-tight text-white transition-colors duration-200">
                QAY <span className="text-brand-orange">AUTO PARTS</span>
              </span>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-semibold tracking-wide transition-all duration-200 uppercase relative ${
                    currentPage === item.id 
                      ? 'text-brand-orange after:content-[""] after:absolute after:w-full after:h-0.5 after:bg-brand-orange after:bottom-0 after:left-0' 
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Right Section: Core Desktop CTA Actions */}
            <div className="hidden md:flex items-center gap-3">
              <a 
                href={whatsappUrl}
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-[#22B3B3] hover:bg-[#1da1a1] text-white rounded-full text-sm font-bold tracking-wide transition-all duration-300 ease-out hover:-translate-y-0.5 shadow-lg shadow-cyan-950/20 active:translate-y-0"
              >
                {/* Visual arrow identifier matching image_2c161b.png */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-3.5 h-3.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
                <span>Let's Talk Business</span>
              </a>
            </div>

            {/* Mobile Hamburger Menu Toggle Trigger */}
            <div className="flex items-center gap-2 md:hidden">
              {/* Quick-action Mobile WhatsApp Link Icon */}
              <a 
                href={whatsappUrl}
                target="_blank" 
                rel="noreferrer"
                className="p-2.5 bg-brand-orange rounded-full text-white hover:bg-brand-orange transition-colors shadow-md"
                aria-label="Quick WhatsApp Quote"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 448 512">
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                </svg>
              </a>

              <button
                onClick={toggleNav}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-slate-800 focus:outline-none"
                aria-expanded={isOpen}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Full Slide-out Drawer Panel */}
        <div 
          className={`fixed top-0 right-0 h-full w-[280px] max-w-sm bg-brand-navy shadow-2xl z-[50] p-6 transform transition-transform duration-300 ease-in-out border-l border-white/5 md:hidden ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Top of Mobile Menu */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <span className="text-lg font-black tracking-tight text-white">
              QAY <span className="text-brand-orange">MENU</span>
            </span>
            <button 
              onClick={closeNav}
              className="text-gray-400 hover:text-white p-1"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation Links inside Mobile Drawer */}
          <div className="mt-6 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id as any}
                onClick={() => {
                  setCurrentPage(item.id);
                  closeNav();
                }}
                className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  currentPage === item.id 
                    ? 'bg-brand-orange text-white font-bold' 
                    : 'text-gray-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Footer Contact Action Blocks within Mobile Drawer */}
          <div className="absolute bottom-8 left-6 right-6 space-y-3">
            <a 
              href={mailtoUrl}
              onClick={closeNav}
              className="flex items-center justify-center gap-2 w-full py-3 border border-white/20 rounded-lg text-sm font-medium hover:bg-white/5 transition-colors"
            >
              <span>Email Support</span>
            </a>
            <a 
              href={whatsappUrl}
              target="_blank" 
              rel="noreferrer"
              onClick={closeNav}
              className="flex items-center justify-center gap-2 w-full py-3 bg-[#22B3B3] rounded-full text-sm font-bold shadow-lg transition-all transform active:scale-95"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-3.5 h-3.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
              <span>Let's Talk Business</span>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};