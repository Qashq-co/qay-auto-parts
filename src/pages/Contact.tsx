import React, { useState } from 'react';

export const Contact: React.FC = () => {
  // Toggle state: 'general' | 'quote'
  const [formType, setFormType] = useState<'general' | 'quote'>('quote');
  
  // Form input states
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    companyName: '',
    vrmVin: '',
    engineCode: '',
    partDescription: '',
    urgency: 'routine'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle your form submission logistics here (e.g., API call to backend)
    console.log(`Submitting ${formType} request:`, formData);
    alert('Thank you for your request. Our trade desk will contact you shortly with availability and pricing.');
  };

  return (
    <main className="bg-white min-h-screen text-gray-800">
      
      {/* 1. HERO HEADER */}
      <section className="relative bg-[#071426] py-20 text-white overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:20px_30px]" aria-hidden="true" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4 text-center">
          <p className="text-brand-orange font-black tracking-widest text-[11px] uppercase bg-orange-500/10 inline-block px-3 py-1 rounded border border-brand-orange/20 shadow-sm">
            Engine Parts Support
          </p>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight uppercase">
            REQUEST ENGINE <span className="text-brand-orange">COMPONENTS</span>
          </h1>
          <p className="text-gray-400 text-xs sm:text-sm max-w-xl mx-auto font-normal leading-relaxed">
            Submit an engine part inquiry, check live UK warehouse stock availability, or open a trade account for bulk engine rebuild projects.
          </p>
        </div>
      </section>

      {/* 2. CORE WORKSPACE: Info & Interactive Form */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Direct Contact Channels & Logistics info */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-3">
            <span className="text-brand-orange text-xs font-black uppercase tracking-wider block">DIRECT CHANNELS</span>
            <h2 className="text-2xl sm:text-3xl font-black text-brand-navy uppercase tracking-tight">
              Skip the Queue, Call the Desk
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              For immediate parts verification or time-critical fleet groundings, contact our technicians directly.
            </p>
          </div>

          <div className="space-y-4">
            {/* Phone Card */}
            <div className="flex items-center gap-4 bg-gray-50 border border-gray-200/60 p-4 rounded-xl">
              <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-brand-orange flex-shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-1.514 2.018a14.977 14.977 0 0 1-6.505-6.505l2.017-1.514c.362-.272.528-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.75Z" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] text-gray-400 font-black uppercase tracking-wider">Urgent Phone Support</p>
                <p className="text-base font-black text-brand-navy mt-0.5">+44 7398467535</p>
              </div>
            </div>

            {/* Email Card */}
            <div className="flex items-center gap-4 bg-gray-50 border border-gray-200/60 p-4 rounded-xl">
              <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-brand-orange flex-shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H4.5a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] text-gray-400 font-black uppercase tracking-wider">Digital Procurement</p>
                <p className="text-base font-black text-brand-navy mt-0.5">sales@qayautoparts.co.uk</p>
              </div>
            </div>
          </div>

          <div className="bg-brand-navy text-white p-6 rounded-2xl space-y-4 relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-brand-orange/10 rounded-full blur-xl pointer-events-none" />
            <h4 className="font-black text-xs uppercase tracking-wider text-brand-orange">Trade Commitment</h4>
            <p className="text-xs text-gray-300 leading-relaxed">
              Quotes submitted during standard operations are processed within <strong>1–2 business hours</strong> by an experienced parts technician equipped with access to global microfiche platforms.
            </p>
          </div>
        </div>

        {/* Right Column: Unified Form Grid Block */}
        <div className="lg:col-span-7 bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
          
          {/* Segmented Controller Toggle Switch */}
          <div className="flex bg-gray-50 border-b border-gray-200 p-2">
            <button
              type="button"
              onClick={() => setFormType('quote')}
              className={`flex-1 py-3 text-center text-xs font-black uppercase tracking-wider rounded-xl transition-all duration-300 ${
                formType === 'quote' 
                  ? 'bg-brand-navy text-white shadow-sm' 
                  : 'text-gray-500 hover:text-brand-navy'
              }`}
            >
              🛠️ Request Parts Quote
            </button>
            <button
              type="button"
              onClick={() => setFormType('general')}
              className={`flex-1 py-3 text-center text-xs font-black uppercase tracking-wider rounded-xl transition-all duration-300 ${
                formType === 'general' 
                  ? 'bg-brand-navy text-white shadow-sm' 
                  : 'text-gray-500 hover:text-brand-navy'
              }`}
            >
              ✉️ General Inquiry
            </button>
          </div>

          {/* Form Block Container */}
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
            
            {/* Row 1: Core Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[11px] font-extrabold uppercase text-gray-500 tracking-wider">Full Name *</label>
                <input 
                  type="text" required name="name" value={formData.name} onChange={handleInputChange}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-orange focus:bg-white transition-all"
                  placeholder="e.g. John Doe"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[11px] font-extrabold uppercase text-gray-500 tracking-wider">Email Address *</label>
                <input 
                  type="email" required name="email" value={formData.email} onChange={handleInputChange}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-orange focus:bg-white transition-all"
                  placeholder="name@workshop.co.uk"
                />
              </div>
            </div>

            {/* Row 2: Secondary Metadata */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[11px] font-extrabold uppercase text-gray-500 tracking-wider">Phone / WhatsApp *</label>
                <input 
                  type="tel" required name="phone" value={formData.phone} onChange={handleInputChange}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-orange focus:bg-white transition-all"
                  placeholder="e.g. +44 7123 456789"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[11px] font-extrabold uppercase text-gray-500 tracking-wider">Company / Workshop Name</label>
                <input 
                  type="text" name="companyName" value={formData.companyName} onChange={handleInputChange}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-orange focus:bg-white transition-all"
                  placeholder="Optional"
                />
              </div>
            </div>

            {/* CONDITIONAL AREA: Technical Component Tracing Blocks */}
            {formType === 'quote' && (
              <div className="p-5 bg-orange-500/5 border border-brand-orange/10 rounded-2xl space-y-4 animate-fadeIn">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-extrabold uppercase text-brand-navy tracking-wider flex items-center gap-1">
                      <span>UK Reg Plate / VIN *</span>
                    </label>
                    <input 
                      type="text" required={formType === 'quote'} name="vrmVin" value={formData.vrmVin} onChange={handleInputChange}
                      className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-mono uppercase tracking-widest focus:outline-none focus:border-brand-orange transition-all"
                      placeholder="e.g. AB12 CDE"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-extrabold uppercase text-brand-navy tracking-wider">Engine Code (If Known)</label>
                    <input 
                      type="text" name="engineCode" value={formData.engineCode} onChange={handleInputChange}
                      className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-mono uppercase focus:outline-none focus:border-brand-orange transition-all"
                      placeholder="e.g. N47D20A"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-extrabold uppercase text-brand-navy tracking-wider">Operational Dispatch Priority</label>
                  <select
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-orange transition-all font-medium"
                  >
                    <option value="routine">Standard Sourcing Inquiry (Routine Stocking)</option>
                    <option value="urgent">Vehicle Off Road (VOR) - High Priority Dispatch</option>
                  </select>
                </div>
              </div>
            )}

            {/* Description Text Field */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-extrabold uppercase text-gray-500 tracking-wider">
                {formType === 'quote' ? 'Requested Components Details *' : 'Inquiry Message Details *'}
              </label>
              <textarea 
                required rows={4} name="partDescription" value={formData.partDescription} onChange={handleInputChange}
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-orange focus:bg-white transition-all resize-none"
                placeholder={formType === 'quote' ? 'List out explicit parts or OEM references (e.g., Timing belt kit, Front brake discs, Crankshaft pulley)...' : 'Type your message details here...'}
              />
            </div>

            {/* Submission Action Button */}
            <button
              type="submit"
              className="w-full bg-brand-orange hover:bg-orange-600 text-white font-black uppercase tracking-wider py-4 rounded-xl text-xs sm:text-sm shadow-md shadow-orange-500/10 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              {formType === 'quote' ? 'Transmit Quote Request ➔' : 'Send Inquiry Message ➔'}
            </button>

          </form>
        </div>

      </section>
    </main>
  );
};