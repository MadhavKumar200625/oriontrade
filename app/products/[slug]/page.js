import Link from 'next/link';
import { notFound } from 'next/navigation';
import FAQSection from '@/components/FAQSection';
import categories from '@/data/categories.json';

export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({ params }) {
  const category = categories.find((cat) => cat.slug === params.slug);
  if (!category) return { title: 'Not Found' };

  return {
    title: `${category.name} | Orion Trade`,
    description: category.longDescription,
    keywords: `${category.name.toLowerCase()}, essential oils, aromatherapy`,
  };
}

export default async function CategoryPage({ params }) {
  params = await params
  const category = categories.find((cat) => cat.slug === params.slug);
  if (!category) notFound();

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-[#f8faf5] border-b border-[#dfe8de] sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/products" className="text-[#164b35] hover:text-[#10281e]">
              Products
            </Link>
            <span className="text-[#a8c8b6]">/</span>
            <span className="text-[#58705f] font-medium">{category.name}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#164b35] to-[#0d1a13] py-20">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-br from-[#164b35]/50 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-9xl mb-8 animate-bounce">{category.icon}</div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {category.name}
          </h1>
          <p className="text-xl md:text-2xl text-[#c9d8cf] max-w-2xl mx-auto leading-relaxed">
            {category.longDescription}
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[#10281e] mb-16 text-center">
            Our {category.name} Collection
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {category.products.map((product) => (
              <Link key={product.id} href={`/products/${category.slug}/${product.id}`}>
                <div className="group bg-gradient-to-br from-white to-[#f8faf5] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer h-full border border-[#dfe8de] hover:border-[#164b35]">
                  {/* Top accent bar */}
                  <div className="h-2 bg-gradient-to-r from-[#164b35] to-[#10281e] group-hover:h-3 transition-all"></div>

                  {/* Content */}
                  <div className="p-8">
                    {/* Header */}
                    <div className="mb-6">
                      <h3 className="text-3xl font-bold text-[#164b35] group-hover:text-[#10281e] transition-colors mb-2">
                        {product.name}
                      </h3>
                      <p className="text-sm italic text-[#58705f]">
                        {product.botanicalName}
                      </p>
                    </div>

                    {/* Origin badge */}
                    <div className="inline-block bg-[#eef7ee] text-[#164b35] px-4 py-2 rounded-full text-sm font-semibold mb-6">
                      📍 {product.origin}
                    </div>

                    {/* Aroma Profile */}
                    <div className="mb-6 pb-6 border-b border-[#dfe8de]">
                      <p className="text-xs uppercase tracking-widest text-[#58705f] font-bold mb-2">
                        Aroma Profile
                      </p>
                      <p className="text-[#263b2f] leading-relaxed">
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
                            className="border border-[#dfe8de] text-[#164b35] px-4 py-2 rounded-lg text-sm font-medium group-hover:bg-[#164b35] group-hover:text-white transition-all"
                          >
                            {size}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action */}
                    <div className="flex items-center justify-between pt-6 border-t border-[#dfe8de]">
                      <span className="text-sm font-semibold text-[#58705f] group-hover:text-[#164b35] transition-colors">
                        View Details
                      </span>
                      <span className="text-2xl text-[#164b35] group-hover:translate-x-2 transition-transform">
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={category.faq} categoryName={category.name} />

      {/* Related Categories */}
      <section className="py-24 bg-[#f8faf5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[#10281e] mb-16 text-center">
            Explore Other Collections
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories
              .filter((cat) => cat.slug !== category.slug)
              .map((relatedCategory) => (
                <Link key={relatedCategory.id} href={`/products/${relatedCategory.slug}`}>
                  <div className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-[#dfe8de] hover:border-[#164b35] text-center cursor-pointer">
                    <div className="text-6xl mb-4 group-hover:scale-125 transition-transform">
                      {relatedCategory.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-[#164b35] mb-2 group-hover:text-[#10281e]">
                      {relatedCategory.name}
                    </h3>
                    <p className="text-sm text-[#58705f]">
                      {relatedCategory.products.length} Products
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-[#164b35] to-[#10281e]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Interested in Bulk Orders?
          </h2>
          <p className="text-xl text-[#c9d8cf] mb-10">
            Contact our sales team for custom quotes and wholesale pricing.
          </p>
          <Link
            href="/contact-us"
            className="inline-block bg-[#eef7ee] hover:bg-white text-[#10281e] font-bold px-10 py-4 rounded-full transition-all duration-300 hover:shadow-2xl text-lg"
          >
            Contact Sales
          </Link>
        </div>
      </section>
    </>
  );
}
