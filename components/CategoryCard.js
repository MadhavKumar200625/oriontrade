'use client';

import Link from 'next/link';

export default function CategoryCard({ category }) {
  return (
    <Link href={`/products/${category.slug}`}>
      <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer h-80 border border-[#dfe8de] hover:border-[#164b35]">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#164b35]/10 to-[#10281e]/10 group-hover:from-[#164b35]/20 group-hover:to-[#10281e]/20 transition-all duration-500"></div>

        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500">
          <div className="absolute top-10 right-10 w-20 h-20 bg-[#164b35] rounded-full blur-2xl"></div>
        </div>

        {/* Content */}
        <div className="relative h-full flex flex-col justify-center items-center p-8 text-center z-10">
          {/* Icon */}
          <div className="text-8xl mb-6 group-hover:scale-125 group-hover:-rotate-12 transition-all duration-500">
            {category.icon}
          </div>

          {/* Title */}
          <h3 className="text-3xl font-bold text-[#164b35] mb-3 group-hover:text-[#10281e] transition-colors duration-300">
            {category.name}
          </h3>

          {/* Description */}
          <p className="text-sm text-[#58705f] mb-6 group-hover:text-[#263b2f] transition-colors duration-300 line-clamp-2">
            {category.description}
          </p>

          {/* Stats */}
          <div className="flex gap-8 text-sm font-semibold">
            <div className="text-[#164b35]">
              <div className="text-2xl font-bold">{category.products.length}</div>
              <div className="text-xs text-[#58705f]">Products</div>
            </div>
            <div className="text-[#164b35]">
              <div className="text-2xl font-bold">{category.faq.length}</div>
              <div className="text-xs text-[#58705f]">FAQs</div>
            </div>
          </div>

          {/* Arrow indicator */}
          <div className="absolute bottom-6 right-6 text-[#164b35] group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
