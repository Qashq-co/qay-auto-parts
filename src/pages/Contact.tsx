import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

export const Contact: React.FC = () => {
  // Toggle state: 'general' | 'quote'
  const [formType, setFormType] = useState<'general' | 'quote'>('quote');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 1. Format the data body transparently for your email template context variables
    const templateParams = {
      form_type: formType.toUpperCase(),
      from_name: formData.name,
      reply_to: formData.email,
      phone_number: formData.phone,
      company_name: formData.companyName || 'Not Provided',
      vrm_vin: formType === 'quote' ? formData.vrmVin : 'N/A',
      engine_code: formType === 'quote' ? (formData.engineCode || 'Not Provided') : 'N/A',
      urgency_level: formType === 'quote' ? formData.urgency.toUpperCase() : 'GENERAL',
      message_details: formData.partDescription,
      target_sales_desk: 'sales@qayautoparts.co.uk'
    };

    try {
      // 2. Transmit payload directly via public emailjs gateway endpoint
      // Replace placeholders with your exact dashboard keys from emailjs.com
      await emailjs.send(
        'service_yd9iqsa',     // Email service provider id
        'template_4znagmm',    // Email template structure variable id
        templateParams,
        'lEkxTX0wpvVQW8Yjl'      // Account API Key identifier
      );

      alert('Thank you! Your request has been transmitted successfully to our trade desk.');
      
      // Reset variables on successful execution profile
      setFormData({
        name: '',
        email: '',
        phone: '',
        companyName: '',
        vrmVin: '',
        engineCode: '',
        partDescription: '',
        urgency: 'routine'
      });
    } catch (error) {
      console.error('Email transmission fallback exception:', error);
      alert('Transmission interrupted. Please forward details directly to sales@qayautoparts.co.uk instead.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-white min-h-screen text-gray-800">
      
      {/* 1. HERO HEADER */}
      <section className="relative bg-[#071426] py-20 text-white overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:20px_30px]" aria-hidden="true" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4 text-center">
          <p className="text-brand-orange font-black tracking-widest text-[11px] uppercase bg-orange-500/10 inline-block px-3 py-1 rounded border border-brand-orange/20 shadow-sm">
            QAY Auto Parts Ltd — Corporate Trade Desk
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
        
        {/* Left Column: Direct Contact Channels & Legal Metadata */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-3">
            <span className="text-brand-orange text-xs font-black uppercase tracking-wider block">DIRECT CHANNELS</span>
            <h2 className="text-2xl sm:text-3xl font-black text-brand-navy uppercase tracking-tight">
              Skip the Queue, Call the Desk
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              For immediate parts verification or time-critical fleet groundings, contact our corporate logistics facility handlers directly.
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

          {/* Statutory Registration Sub-Card Information */}
          <div className="bg-[#071426] text-white p-5 rounded-2xl border border-slate-800 space-y-3">
            <h4 className="font-black text-xs uppercase tracking-wider text-brand-orange">Entity Registration Details</h4>
            <div className="text-[11px] text-slate-300 space-y-1.5 leading-relaxed font-mono">
              <p><span className="text-slate-400 font-sans">Company Number:</span> 16921659</p>
              <p><span className="text-slate-400 font-sans">Office Location:</span> 20 Wenlock Road, London, United Kingdom, N1 7GU</p>
            </div>
          </div>
        </div>

        {/* Right Column: Unified Form Grid Block */}
        <div className="lg:col-span-7 bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
          
          {/* Segmented Controller Toggle Switch */}
          <div className="flex bg-gray-50 border-b border-gray-200 p-2">
            <button
              type="button"
              disabled={isSubmitting}
              onClick={() => setFormType('quote')}
              className={`flex-1 py-3 text-center text-xs font-black uppercase tracking-wider rounded-xl transition-all duration-300 ${
                formType === 'quote' 
                  ? 'bg-brand-navy text-white shadow-sm' 
                  : 'text-gray-500 hover:text-brand-navy'
              } disabled:opacity-50`}
            >
              🛠️ Request Parts Quote
            </button>
            <button
              type="button"
              disabled={isSubmitting}
              onClick={() => setFormType('general')}
              className={`flex-1 py-3 text-center text-xs font-black uppercase tracking-wider rounded-xl transition-all duration-300 ${
                formType === 'general' 
                  ? 'bg-brand-navy text-white shadow-sm' 
                  : 'text-gray-500 hover:text-brand-navy'
              } disabled:opacity-50`}
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
                  type="text" required name="name" value={formData.name} onChange={handleInputChange} disabled={isSubmitting}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-orange focus:bg-white transition-all disabled:opacity-60"
                  placeholder="e.g. John Doe"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[11px] font-extrabold uppercase text-gray-500 tracking-wider">Email Address *</label>
                <input 
                  type="email" required name="email" value={formData.email} onChange={handleInputChange} disabled={isSubmitting}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-orange focus:bg-white transition-all disabled:opacity-60"
                  placeholder="name@workshop.co.uk"
                />
              </div>
            </div>

            {/* Row 2: Secondary Metadata */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[11px] font-extrabold uppercase text-gray-500 tracking-wider">Phone / WhatsApp *</label>
                <input 
                  type="tel" required name="phone" value={formData.phone} onChange={handleInputChange} disabled={isSubmitting}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-orange focus:bg-white transition-all disabled:opacity-60"
                  placeholder="e.g. +44 7123 456789"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[11px] font-extrabold uppercase text-gray-500 tracking-wider">Company / Workshop Name</label>
                <input 
                  type="text" name="companyName" value={formData.companyName} onChange={handleInputChange} disabled={isSubmitting}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-orange focus:bg-white transition-all disabled:opacity-60"
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
                      type="text" required={formType === 'quote'} name="vrmVin" value={formData.vrmVin} onChange={handleInputChange} disabled={isSubmitting}
                      className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-mono uppercase tracking-widest focus:outline-none focus:border-brand-orange transition-all disabled:opacity-60"
                      placeholder="e.g. AB12 CDE"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-extrabold uppercase text-brand-navy tracking-wider">Engine Code (If Known)</label>
                    <input 
                      type="text" name="engineCode" value={formData.engineCode} onChange={handleInputChange} disabled={isSubmitting}
                      className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-mono uppercase focus:outline-none focus:border-brand-orange transition-all disabled:opacity-60"
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
                    disabled={isSubmitting}
                    className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-orange transition-all font-medium disabled:opacity-60"
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
                required rows={4} name="partDescription" value={formData.partDescription} onChange={handleInputChange} disabled={isSubmitting}
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-orange focus:bg-white transition-all resize-none disabled:opacity-60"
                placeholder={formType === 'quote' ? 'List out explicit parts or OEM references (e.g., Timing belt kit, Cylinder Head gasket, Pistons)...' : 'Type your message details here...'}
              />
            </div>

            {/* Submission Action Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-brand-orange hover:bg-orange-600 disabled:bg-gray-400 text-white font-black uppercase tracking-wider py-4 rounded-xl text-xs sm:text-sm shadow-md shadow-orange-500/10 transition-all duration-300 transform hover:-translate-y-0.5 disabled:transform-none"
            >
              {isSubmitting ? 'Transmitting Data...' : formType === 'quote' ? 'Transmit Quote Request ➔' : 'Send Inquiry Message ➔'}
            </button>

          </form>
        </div>

      </section>
    </main>
  );
};