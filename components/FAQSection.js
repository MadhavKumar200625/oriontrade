'use client';

import { useState } from 'react';

export default function FAQSection({ faqs, categoryName }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#10281e] mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-[#58705f]">
            Everything you need to know about {categoryName}
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group border-2 border-[#dfe8de] rounded-xl overflow-hidden hover:border-[#164b35] transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full px-8 py-6 flex items-center justify-between bg-gradient-to-r from-[#f8faf5] to-white hover:from-[#eef7ee] hover:to-[#f8faf5] transition-all duration-300"
              >
                <h3 className="font-bold text-[#164b35] text-left text-lg group-hover:text-[#10281e] transition-colors">
                  {faq.question}
                </h3>
                <span
                  className={`text-3xl text-[#164b35] transition-all duration-300 flex-shrink-0 ml-4 ${
                    openIndex === index ? 'rotate-45 text-[#10281e]' : ''
                  }`}
                >
                  +
                </span>
              </button>

              {openIndex === index && (
                <div className="px-8 py-6 bg-gradient-to-b from-white to-[#f8faf5] border-t-2 border-[#dfe8de] animate-in fade-in slide-in-from-top-2 duration-300">
                  <p className="text-[#263b2f] leading-relaxed text-base">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer text */}
        <div className="mt-16 text-center p-8 bg-[#f8faf5] rounded-xl border border-[#dfe8de]">
          <p className="text-[#58705f]">
            Still have questions? <span className="font-bold text-[#164b35]">Contact our team</span> for more information.
          </p>
        </div>
      </div>
    </section>
  );
}
