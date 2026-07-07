// 'use client';

// import { useState } from 'react';
import Link from 'next/link';
import InquiryModal from '@/components/InquiryModal';
import FAQSection from '@/components/FAQSection';
import categories from '@/data/categories.json';

export default async function ProductPage({ params }) {
  params = await params

  const category = categories.find((cat) => cat.slug === params.slug);
  const product = category?.products.find((p) => p.id === params.productId);
  // const [isModalOpen, setIsModalOpen] = useState(false);

  if (!category || !product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#10281e]">Product Not Found</h1>
          <Link href="/products" className="mt-6 inline-block text-[#164b35] hover:text-[#10281e]">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  // FAQ data for this product (we'll reuse category FAQs but make product-specific later)
  const productFAQs = [
    {
      question: `How is ${product.name} extracted?`,
      answer: 'Our essential oils are extracted using traditional steam distillation or cold-pressing methods to preserve the natural botanical essence and therapeutic properties.',
    },
    {
      question: `What are the best uses for ${product.name}?`,
      answer: `${product.name} is perfect for: ${product.uses.join(', ')}. It can be used in diffusers, massage blends, skincare formulations, or household products.`,
    },
    {
      question: `Which pack size is right for me?`,
      answer: 'Choose based on your usage frequency. Small sizes (10-30ml) are great for personal use and testing, while larger sizes (100ml+) are better for regular users or commercial applications.',
    },
    {
      question: `How should I store ${product.name}?`,
      answer: 'Store in a cool, dark place in dark glass bottles to protect from light and heat. Proper storage can extend shelf life up to 2-3 years.',
    },
    {
      question: 'Can I use this oil directly on skin?',
      answer: 'Essential oils are potent and should always be diluted with a carrier oil (coconut, jojoba, etc.) before applying to skin. Use a 1-2% dilution ratio.',
    },
  ];

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-[#f8faf5] border-b border-[#dfe8de] sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-sm">
          <div className="flex items-center gap-2">
            <Link href="/products" className="text-[#164b35] hover:text-[#10281e]">
              Products
            </Link>
            <span className="text-[#a8c8b6]">/</span>
            <Link href={`/products/${category.slug}`} className="text-[#164b35] hover:text-[#10281e]">
              {category.name}
            </Link>
            <span className="text-[#a8c8b6]">/</span>
            <span className="text-[#58705f] font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Hero */}
      <section className="py-16 bg-gradient-to-br from-[#f8faf5] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Image/Visual */}
            <div className="flex items-center justify-center">
              <div className="relative w-full h-96 bg-gradient-to-br from-[#eef7ee] to-[#164b35]/10 rounded-3xl flex items-center justify-center overflow-hidden group">
                {/* Background animation */}
                <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#164b35]/20 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 text-center px-8">
                  <div className="text-9xl mb-8">{category.icon}</div>
                  <h2 className="text-4xl font-bold text-[#164b35] mb-4">
                    {product.name}
                  </h2>
                  <p className="text-xl text-[#58705f] italic">
                    {product.botanicalName}
                  </p>
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="flex flex-col justify-center space-y-8">
              {/* Origin */}
              <div>
                <p className="text-sm uppercase tracking-widest text-[#58705f] font-bold mb-2">
                  Origin
                </p>
                <h3 className="text-2xl font-bold text-[#164b35]">
                  {product.origin}
                </h3>
              </div>

              {/* Aroma Profile */}
              <div className="bg-[#eef7ee] rounded-2xl p-8">
                <p className="text-sm uppercase tracking-widest text-[#58705f] font-bold mb-3">
                  Aroma Profile
                </p>
                <p className="text-lg text-[#263b2f] leading-relaxed">
                  {product.notes}
                </p>
              </div>

              {/* Uses */}
              <div>
                <p className="text-sm uppercase tracking-widest text-[#58705f] font-bold mb-4">
                  Common Uses
                </p>
                <div className="flex flex-wrap gap-3">
                  {product.uses.map((use, idx) => (
                    <span
                      key={idx}
                      className="bg-[#164b35] text-white px-6 py-2 rounded-full font-medium"
                    >
                      {use}
                    </span>
                  ))}
                </div>
              </div>

              {/* Pack Sizes */}
              <div>
                <p className="text-sm uppercase tracking-widest text-[#58705f] font-bold mb-4">
                  Available Pack Sizes
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {product.packSizes.map((size, idx) => (
                    <button
                      key={idx}
                      className="border-2 border-[#164b35] text-[#164b35] py-3 rounded-lg font-bold hover:bg-[#164b35] hover:text-white transition-all duration-300"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-8">
                <button
                  // onClick={() => setIsModalOpen(true)}
                  className="flex-1 bg-gradient-to-r from-[#164b35] to-[#10281e] text-white font-bold py-4 px-8 rounded-xl hover:shadow-lg transition-all duration-300 text-lg"
                >
                  Inquire Now
                </button>
                <Link
                  href={`/products/${category.slug}`}
                  className="flex-1 border-2 border-[#164b35] text-[#164b35] font-bold py-4 px-8 rounded-xl hover:bg-[#164b35] hover:text-white transition-all duration-300 text-center text-lg"
                >
                  View All {category.name}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Info Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: '✨',
                title: 'Pure & Natural',
                desc: '100% pure essential oil with no additives, fillers, or synthetic components.',
              },
              {
                icon: '🌍',
                title: 'Sustainable Sourcing',
                desc: 'Ethically sourced from sustainable farms to ensure quality and environmental responsibility.',
              },
              {
                icon: '🔬',
                title: 'Premium Quality',
                desc: 'Rigorously tested and quality assured to meet the highest international standards.',
              },
            ].map((item, idx) => (
              <div key={idx} className="text-center p-8 hover:bg-[#f8faf5] rounded-2xl transition-all">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold text-[#164b35] mb-3">{item.title}</h3>
                <p className="text-[#58705f]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={productFAQs} categoryName={product.name} />

      {/* Related Products */}
      <section className="py-24 bg-[#f8faf5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[#10281e] mb-16 text-center">
            Related Products in {category.name}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {category.products
              .filter((p) => p.id !== product.id)
              .map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  href={`/products/${category.slug}/${relatedProduct.id}`}
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all cursor-pointer group border border-[#dfe8de] hover:border-[#164b35]">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-[#164b35] group-hover:text-[#10281e]">
                          {relatedProduct.name}
                        </h3>
                        <p className="text-sm italic text-[#58705f]">
                          {relatedProduct.botanicalName}
                        </p>
                      </div>
                      <span className="text-3xl">→</span>
                    </div>
                    <p className="text-[#58705f] mb-4">{relatedProduct.notes}</p>
                    <div className="flex flex-wrap gap-2">
                      {relatedProduct.uses.map((use, idx) => (
                        <span
                          key={idx}
                          className="bg-[#eef7ee] text-[#164b35] px-3 py-1 rounded-full text-xs"
                        >
                          {use}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Inquiry Modal */}
      {/* <InquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productName={product.name}
      /> */}
    </>
  );
}
