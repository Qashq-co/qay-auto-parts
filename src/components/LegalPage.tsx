import React from 'react';

interface LegalPageProps {
  policyType: 'privacy' | 'shipping' | 'terms';
}

export const LegalPage: React.FC<LegalPageProps> = ({ policyType }) => {
  
  // Quick utility to allow users to print or save the legal document as a PDF
  const handlePrint = () => {
    window.print();
  };

  // 1. Privacy Policy Structural Matrix
  const renderPrivacy = () => (
    <div className="space-y-10 animate-fadeIn">
      {/* Formal Document Header */}
      <header>
        <div className="flex items-center gap-3 mb-4">
          <div className="h-[2px] w-8 bg-brand-orange"></div>
          <span className="text-brand-orange font-bold tracking-widest text-[10px] uppercase">Corporate Legal Policy</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-brand-navy uppercase tracking-tight mb-6">
          Privacy Policy
        </h1>
        
        {/* Document Control Metadata Bar */}
        <div className="flex flex-wrap gap-x-8 gap-y-3 py-4 border-y border-gray-200/80 text-[10px] font-bold text-gray-500 uppercase tracking-widest bg-gray-50/50 px-2">
          <span><strong className="text-brand-navy">Doc ID:</strong> QAY-PRV-2026</span>
          <span><strong className="text-brand-navy">Effective Date:</strong> June 2026</span>
          <span><strong className="text-brand-navy">Status:</strong> Active / Enforced</span>
        </div>
      </header>

      <div className="space-y-8 text-slate-700 leading-loose text-sm max-w-4xl">
        <p className="text-base font-medium text-brand-navy">
          At Qay Auto Parts Ltd, we protect your personal data with the same precision engineering standards we apply to our automotive inventory. 
        </p>
        <p>
          This disclosure outlines our strict compliance protocols regarding data acquisition, commercial storage systems, and processing frameworks under the UK General Data Protection Regulation (UK GDPR) and Data Protection Act 2018.
        </p>
        
        {/* Formal Legal Callout Block */}
        <div className="border-l-4 border-brand-orange bg-orange-50/30 p-6 sm:p-8 my-8">
          <h3 className="text-sm font-black text-brand-navy uppercase tracking-widest mb-4">
            1.0 Core Information Architecture
          </h3>
          <ul className="space-y-3 text-slate-600 list-disc pl-4 marker:text-brand-orange">
            <li><strong className="text-brand-navy font-bold">Identity Details:</strong> Individual name, trading titles, email coordinates (sales@qayautoparts.co.uk), and verified contact links (+44 7378201055).</li>
            <li><strong className="text-brand-navy font-bold">Logistics Vectors:</strong> Verified commercial workshop endpoints, personal residential lines, and itemized transaction invoices.</li>
            <li><strong className="text-brand-navy font-bold">Fitment Profiles:</strong> Engine block stamps, registration tags, and sizing attributes submitted to secure target components.</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-black text-brand-navy uppercase tracking-widest border-b border-gray-200 pb-2">2.0 Operational Processing Objectives</h3>
          <p>
            Data processing operations are strictly deployed to execute supply-chain distributions, finalize secure payment paths via specialized banking hubs, manage trade account queries, or administer our standard 1-Year Replacement Warranty system.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-black text-brand-navy uppercase tracking-widest border-b border-gray-200 pb-2">3.0 Data Retention Boundaries</h3>
          <p>
            We never distribute or lease consumer records to third-party marketing brokers. Data records are exclusively shared with recognized freight partners (e.g., DHL, DPD) to fulfill logistical transactions.
          </p>
        </div>
      </div>
    </div>
  );

  // 2. Shipping & Returns Structural Matrix
  const renderShipping = () => (
    <div className="space-y-10 animate-fadeIn">
      <header>
        <div className="flex items-center gap-3 mb-4">
          <div className="h-[2px] w-8 bg-brand-orange"></div>
          <span className="text-brand-orange font-bold tracking-widest text-[10px] uppercase">Fulfillment & Logistics</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-brand-navy uppercase tracking-tight mb-6">
          Shipping & Returns
        </h1>
        
        <div className="flex flex-wrap gap-x-8 gap-y-3 py-4 border-y border-gray-200/80 text-[10px] font-bold text-gray-500 uppercase tracking-widest bg-gray-50/50 px-2">
          <span><strong className="text-brand-navy">Doc ID:</strong> QAY-SHP-2026</span>
          <span><strong className="text-brand-navy">Coverage:</strong> United Kingdom</span>
          <span><strong className="text-brand-navy">Status:</strong> Active / Enforced</span>
        </div>
      </header>

      <div className="space-y-8 text-slate-700 leading-loose text-sm max-w-4xl">
        <p className="text-base font-medium text-brand-navy">
          Precision engine components require secure, optimized logistics handlers to prevent damage during transit. 
        </p>
        
        <div className="space-y-4">
          <h3 className="text-sm font-black text-brand-navy uppercase tracking-widest border-b border-gray-200 pb-2">1.0 National Courier Networks</h3>
          <p>
            All stock items, including pistons, crankshafts, cylinder heads, and premium gaskets, are securely packaged and routed via top-tier UK tracked transport configurations. Orders cleared before our standard midday cutoff shift enter courier pipelines on the same working day.
          </p>
        </div>

        {/* SLA Grid Style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-8">
          <div className="border border-gray-200 p-6 bg-white space-y-3 border-t-4 border-t-brand-navy">
            <h4 className="font-black text-brand-navy text-xs uppercase tracking-widest">A. Delivery Inspection Window</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              External container fractures or transit damage must be documented and filed with our logistics team within <span className="font-bold text-brand-orange">2 working days</span> of courier delivery.
            </p>
          </div>
          <div className="border border-gray-200 p-6 bg-white space-y-3 border-t-4 border-t-brand-navy">
            <h4 className="font-black text-brand-navy text-xs uppercase tracking-widest">B. Shortage / Variance Auditing</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Part variations, component design anomalies, or quantity shortfalls must be officially brought to our attention within <span className="font-bold text-brand-orange">4 working days</span>.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-black text-brand-navy uppercase tracking-widest border-b border-gray-200 pb-2">2.0 Return Authorization Matrix</h3>
          <p>
            Clean, uninstalled, and undamaged components can be processed for returns within our designated standard return timeline, provided they carry an official return authorization slip issued by our service team. 
          </p>
          <div className="border-l-4 border-red-600 bg-red-50/50 p-5 mt-4 text-xs text-slate-700 leading-relaxed">
            <strong className="text-red-700 text-sm block mb-1 uppercase tracking-widest font-black">Critical Workshop Notice</strong> 
            Components that have been installed in a vehicle, tested in a workshop, or modified are not eligible for standard returns or store credit. Any functional defects must be handled through our official technical assessment process under our 1-Year Replacement Warranty.
          </div>
        </div>
      </div>
    </div>
  );

  // 3. Terms & Conditions Structural Matrix
  const renderTerms = () => (
    <div className="space-y-10 animate-fadeIn">
      <header>
        <div className="flex items-center gap-3 mb-4">
          <div className="h-[2px] w-8 bg-brand-orange"></div>
          <span className="text-brand-orange font-bold tracking-widest text-[10px] uppercase">Commercial Terms of Sale</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-brand-navy uppercase tracking-tight mb-6">
          Terms & Conditions
        </h1>
        
        <div className="flex flex-wrap gap-x-8 gap-y-3 py-4 border-y border-gray-200/80 text-[10px] font-bold text-gray-500 uppercase tracking-widest bg-gray-50/50 px-2">
          <span><strong className="text-brand-navy">Doc ID:</strong> QAY-TCS-2026</span>
          <span><strong className="text-brand-navy">Entity:</strong> Qay Auto Parts Ltd</span>
          <span><strong className="text-brand-navy">Status:</strong> Active / Enforced</span>
        </div>
      </header>

      <div className="space-y-8 text-slate-700 leading-loose text-sm max-w-4xl">
        <div className="space-y-4">
          <h3 className="text-sm font-black text-brand-navy uppercase tracking-widest border-b border-gray-200 pb-2">1.0 Legal Boundaries</h3>
          <p>
            These Terms & Conditions dictate commercial sales paths and automated system invoices handled by <span className="font-bold text-brand-navy">Qay Auto Parts Ltd</span> (Company Registration No: 16921659; Registered Office: 20 Wenlock Road, London, N1 7GU) via our corporate domain.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-black text-brand-navy uppercase tracking-widest border-b border-gray-200 pb-2">2.0 Technical Verification Responsibilities</h3>
          <p>
            Internal combustion engine rebuilding requires professional, certified precision mechanics. The buying party holds total accountability for:
          </p>
          <ul className="list-disc pl-4 marker:text-brand-orange space-y-2 text-slate-600 my-4">
            <li>Cross-referencing dimensions, tolerances, and design specifications prior to assembly.</li>
            <li>Ensuring component configuration matches factory technical data sheets.</li>
            <li>We accept no responsibility for components damaged by improper tool selection, incorrect installation methods, or general workshop installation errors.</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-black text-brand-navy uppercase tracking-widest border-b border-gray-200 pb-2">3.0 1-Year Replacement Warranty</h3>
          <p>
            All premium parts are covered by our standard 1-Year Replacement Warranty, which protects against verified manufacturing faults. To file a claim, you must submit full proof of purchase, a formal engine diagnostic report from a certified mechanic, and clear, detailed photos of the component issue.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-black text-brand-navy uppercase tracking-widest border-b border-gray-200 pb-2">4.0 Limitation of Consequential Damages</h3>
          <p>
            We provide specialist parts strictly to machine shops, engineering hubs, and commercial trade networks. Qay Auto Parts Ltd is explicitly not liable for any secondary or consequential costs, including but not limited to:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-xs font-bold text-brand-navy uppercase tracking-wider bg-slate-50 p-6 border border-gray-200 mt-4">
            <div className="flex items-center gap-3"><span className="text-brand-orange">✕</span> <span className="text-slate-600">Workshop Labor / Teardown Fees</span></div>
            <div className="flex items-center gap-3"><span className="text-brand-orange">✕</span> <span className="text-slate-600">Vehicle Recovery / Towing Costs</span></div>
            <div className="flex items-center gap-3"><span className="text-brand-orange">✕</span> <span className="text-slate-600">Machine Shop Labor Bills</span></div>
            <div className="flex items-center gap-3"><span className="text-brand-orange">✕</span> <span className="text-slate-600">Business Interruption Losses</span></div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-12 sm:py-20 bg-brand-lightBg relative overflow-hidden min-h-screen selection:bg-brand-orange selection:text-white">
      {/* Very Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30" aria-hidden="true" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 print:max-w-none print:px-0">
        
        {/* Main Clean Letterhead Card Container */}
        <div className="bg-white p-8 sm:p-16 border-t-[6px] border-t-brand-navy shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative print:shadow-none print:border-none print:p-0">
          
          {/* Print Utility Button (Hidden when actually printing) */}
          <button 
            onClick={handlePrint}
            className="absolute top-8 right-8 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-brand-orange transition-colors print:hidden group"
            title="Print or Save as PDF"
          >
            <svg className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.724.092m6.524-4.31a5.25 5.25 0 0 1 5.25 5.25v2.25a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V15a5.25 5.25 0 0 1 5.25-5.25h3.75m-3.75 0V5.625c0-.621.504-1.125 1.125-1.125h9.75c.621 0 1.125.504 1.125 1.125v6.188m-11.25 8.25h12.75" />
            </svg>
            <span className="hidden sm:inline">Print / PDF</span>
          </button>

          {/* Dynamic Core Text Render */}
          {policyType === 'privacy' && renderPrivacy()}
          {policyType === 'shipping' && renderShipping()}
          {policyType === 'terms' && renderTerms()}

          {/* Official End of Document Marker */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
              <div>
                <p className="text-[10px] font-black text-brand-navy uppercase tracking-widest mb-1">Corporate Contact Information</p>
                <p className="text-xs text-slate-500 max-w-sm leading-relaxed">
                  For formal inquiries regarding these terms, contact our administrative desk via email or phone.
                </p>
              </div>
              <div className="text-left sm:text-right border-l-2 sm:border-l-0 sm:border-r-2 border-brand-orange pl-4 sm:pl-0 sm:pr-4">
                <p className="text-sm font-black text-brand-navy">sales@qayautoparts.co.uk</p>
                <p className="text-xs font-bold text-slate-500 mt-1">+44 7378201055</p>
              </div>
            </div>
            <div className="text-center mt-12">
              <span className="inline-block w-1.5 h-1.5 bg-brand-orange rounded-full"></span>
              <span className="inline-block w-1.5 h-1.5 bg-brand-navy rounded-full mx-1"></span>
              <span className="inline-block w-1.5 h-1.5 bg-brand-orange rounded-full"></span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};