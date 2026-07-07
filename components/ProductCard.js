'use client';

import { useState } from 'react';
import Link from 'next/link';
import InquiryModal from './InquiryModal';

export default function ProductCard({ product, categorySlug, showModal = true }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const productUrl = `/products/${categorySlug}/${product.id}`;

  return (
    <>
      <div className="group bg-gradient-to-br from-white to-[#f8faf5] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-[#dfe8de] hover:border-[#164b35] h-full flex flex-col">
        {/* Top accent bar */}
        <div className="h-2 bg-gradient-to-r from-[#164b35] to-[#10281e] group-hover:h-3 transition-all"></div>

        {/* Content */}
        <div className="p-8 flex-1 flex flex-col">
          {/* Header */}
          <Link href={productUrl} className="mb-6">
            <h3 className="text-2xl font-bold text-[#164b35] group-hover:text-[#10281e] transition-colors mb-2">
              {product.name}
            </h3>
            <p className="text-sm italic text-[#58705f]">
              {product.botanicalName}
            </p>
          </Link>

          {/* Origin badge */}
          <div className="inline-block bg-[#eef7ee] text-[#164b35] px-4 py-2 rounded-full text-sm font-semibold mb-6 w-fit">
            📍 {product.origin}
          </div>

          {/* Aroma Profile */}
          <div className="mb-6 pb-6 border-b border-[#dfe8de]">
            <p className="text-xs uppercase tracking-widest text-[#58705f] font-bold mb-2">
              Aroma Profile
            </p>
            <p className="text-[#263b2f] leading-relaxed text-sm">
              {product.notes}
            </p>
          </div>

          {/* Uses */}
          <div className="mb-6">
            <p className="text-xs uppercase tracking-widest text-[#58705f] font-bold mb-3">
              Common Uses
            </p>
            <div className="flex flex-wrap gap-2">
              {product.uses.map((use, idx) => (
                <span
                  key={idx}
                  className="bg-[#eef7ee] text-[#164b35] px-3 py-1 rounded-full text-xs font-medium"
                >
                  {use}
                </span>
              ))}
            </div>
          </div>

          {/* Pack Sizes */}
          <div className="mb-8">
            <p className="text-xs uppercase tracking-widest text-[#58705f] font-bold mb-3">
              Available Sizes
            </p>
            <div className="flex flex-wrap gap-2">
              {product.packSizes.map((size, idx) => (
                <span
                  key={idx}
                  className="border border-[#dfe8de] text-[#164b35] px-3 py-1 rounded-lg text-xs font-medium group-hover:bg-[#164b35] group-hover:text-white transition-all"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-6 border-t border-[#dfe8de] mt-auto">
            <Link
              href={productUrl}
              className="flex-1 text-center bg-[#164b35] hover:bg-[#10281e] text-white font-bold py-3 px-4 rounded-lg transition-all"
            >
              View Details
            </Link>
            <button
              onClick={() => showModal && setIsModalOpen(true)}
              className="flex-1 border-2 border-[#164b35] text-[#164b35] hover:bg-[#164b35] hover:text-white font-bold py-3 px-4 rounded-lg transition-all"
            >
              Inquire
            </button>
          </div>
        </div>
      </div>

      {/* Inquiry Modal */}
      {showModal && (
        <InquiryModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          productName={product.name}
        />
      )}
    </>
  );
}
