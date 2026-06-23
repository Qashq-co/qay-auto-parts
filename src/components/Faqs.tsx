import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string | React.ReactNode;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-800 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left py-2 font-semibold text-white hover:text-brand-orange transition-colors duration-200"
      >
        <span className="text-base md:text-lg tracking-wide">{question}</span>
        <span className="text-xl font-bold text-brand-orange ml-4">
          {isOpen ? '−' : '+'}
        </span>
      </button>
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="text-sm md:text-base text-gray-400 leading-relaxed pb-2">
          {answer}
        </div>
      </div>
    </div>
  );
};

export const FAQ: React.FC = () => {
  const faqData = [
    {
      question: "Are your engine parts suitable for both passenger and commercial vehicles?",
      answer: "Yes. We specialize in supplying high-performance engine rebuild components for a broad catalog of passenger cars, vans, and heavy-duty commercial vehicles across the UK."
    },
    {
      question: "How do I ensure I am ordering the exact correct component for my vehicle?",
      answer: (
        <span>
          The most secure method is by matching your original equipment manufacturer number. If you are unsure, simply drop our team a message via email at <strong className="text-brand-orange">sales@qayautoparts.co.uk</strong> or call/WhatsApp us directly at <strong className="text-white">+44 7398467535</strong> with your UK vehicle registration mark (VRM) or chassis number, and our parts specialists will verify fitment for you.
        </span>
      )
    },
    {
      question: "What items do you stock for minor and major engine rebuild overhauls?",
      answer: "Our inventory covers critical internal engine parts including high-durability pistons, structural crankshafts, premium complete cylinder heads, multi-layer steel gaskets, specialized engine bearings (conrod/main), and total valvetrain kits."
    },
    {
      question: "What type of warranty coverage comes standard with your vehicle parts?",
      answer: "All architectural engine rebuild and replacement parts purchased through Qay Auto Parts Ltd carry our robust 1-Year Replacement Warranty for absolute peace of mind regarding structural and manufacturing integrity."
    },
    {
      question: "How long does dispatch and delivery take within the UK?",
      answer: "We offer rapid fulfillment pipelines. Most standard orders are processed with immediate fast dispatch options. Tracking information is provided directly as soon as the courier captures your package."
    },
    {
      question: "Can I request a direct, custom item quote for an out-of-stock component?",
      answer: "Absolutely. If you are tackling a rare vehicle build or require a highly niche configuration not explicitly indexed on our main browser components page, reach out via our Request a Quote system with your part details and we will source it."
    }
  ];

  return (
    <section className="bg-brand-navy py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
            Frequently Asked <span className="text-brand-orange">Questions</span>
          </h2>
          <div className="h-1 w-20 bg-brand-orange mx-auto mb-4"></div>
          <p className="text-sm md:text-base text-gray-400 max-w-xl mx-auto">
            Find answers to common questions regarding engine rebuild logistics, component compatibility verification, and warranty structures.
          </p>
        </div>

        {/* Accordion Wrapper */}
        <div className="bg-slate-900/40 rounded-xl p-6 md:p-8 border border-slate-800 shadow-xl">
          {faqData.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        {/* Bottom CTA Element */}
        <div className="text-center mt-10 p-6 bg-slate-900/20 border border-slate-800/60 rounded-xl max-w-2xl mx-auto">
          <p className="text-sm text-gray-400">
            Still have a question regarding a specific OEM component or commercial quote?
          </p>
          <p className="text-sm text-white font-semibold mt-2">
            Speak to a Parts Specialist: <span className="text-brand-orange">+44 7398 467535</span>
          </p>
        </div>
      </div>
    </section>
  );
};