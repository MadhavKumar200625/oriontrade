import Link from 'next/link';
import categories from '@/data/categories.json';

export const metadata = {
  title: 'Essential Oils Products | Orion Trade',
  description: 'Explore our premium collection of essential oils. From floral and citrus to herbal and spice & wood oils. Premium quality oils sourced from across India.',
  keywords: 'essential oils, floral oils, citrus oils, herbal oils, spice oils, wood oils, aromatherapy, natural oils',
  openGraph: {
    title: 'Essential Oils Products | Orion Trade',
    description: 'Explore our premium collection of essential oils sourced from across India.',
    type: 'website',
  },
};

export default function ProductsPage() {
  return (
    <>
      {/* Hero Section - Premium */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#10281e] via-[#164b35] to-[#0d1a13]">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-72 h-72 bg-[#164b35] rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#58705f] rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-block">
              <span className="inline-block bg-[#eef7ee] text-[#164b35] px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest">
                Premium Essential Oils
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Nature's Pure
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#eef7ee] to-[#a8c8b6]">
                Essence
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-[#c9d8cf] max-w-2xl mx-auto leading-relaxed">
              Discover premium essential oils crafted with nature's finest botanicals. Perfect for aromatherapy, wellness, and cosmetic formulations.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link
                href="#categories"
                className="inline-block bg-[#eef7ee] hover:bg-white text-[#10281e] font-bold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-[#eef7ee]/50 text-lg"
              >
                Explore Now
              </Link>
              <Link
                href="#categories"
                className="inline-block bg-transparent hover:bg-[#164b35] text-[#eef7ee] font-bold px-8 py-4 rounded-full border-2 border-[#eef7ee] transition-all duration-300 text-lg"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce text-[#a8c8b6]">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#164b35]">4</div>
              <p className="text-[#58705f] mt-2">Premium Categories</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#164b35]">8+</div>
              <p className="text-[#58705f] mt-2">Pure Products</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#164b35]">100%</div>
              <p className="text-[#58705f] mt-2">Natural Ingredients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-24 bg-[#f8faf5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#10281e] mb-6">
              Explore Our Collections
            </h2>
            <p className="text-xl text-[#58705f] max-w-2xl mx-auto">
              Each category represents a unique aromatic journey with distinctive therapeutic benefits and applications.
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <Link key={category.id} href={`/products/${category.slug}`}>
                <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer h-80">
                  {/* Background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#164b35]/10 to-[#10281e]/10 group-hover:from-[#164b35]/20 group-hover:to-[#10281e]/20 transition-all duration-500"></div>

                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-center items-center p-8 text-center">
                    {/* Icon */}
                    <div className="text-8xl mb-6 group-hover:scale-125 transition-transform duration-500">
                      {category.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-3xl font-bold text-[#164b35] mb-3 group-hover:text-[#10281e] transition-colors">
                      {category.name}
                    </h3>

                    {/* Description */}
                    <p className="text-[#58705f] mb-6 group-hover:text-[#263b2f] transition-colors">
                      {category.description}
                    </p>

                    {/* Stats */}
                    <div className="flex gap-6 text-sm font-semibold">
                      <div className="text-[#164b35]">{category.products.length} Products</div>
                      <div className="text-[#164b35]">{category.faq.length} FAQs</div>
                    </div>

                    {/* Arrow */}
                    <div className="absolute bottom-6 right-6 text-[#164b35] group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-[#10281e] text-center mb-16">
            Why Choose Orion Trade?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: '🌿',
                title: 'Premium Quality',
                desc: 'Sourced from the finest regions of India with stringent quality controls',
              },
              {
                icon: '🔬',
                title: 'Traditional Methods',
                desc: 'Time-honored extraction techniques to preserve therapeutic properties',
              },
              {
                icon: '✨',
                title: 'Pure & Natural',
                desc: '100% natural ingredients with no additives or fillers',
              },
              {
                icon: '🌍',
                title: 'Sustainable Sourcing',
                desc: 'Ethically sourced from sustainable farms across India',
              },
              {
                icon: '🎯',
                title: 'Versatile Applications',
                desc: 'Perfect for aromatherapy, cosmetics, and wellness products',
              },
              {
                icon: '🤝',
                title: 'Expert Support',
                desc: 'Dedicated team ready to help with your specific needs',
              },
            ].map((item, idx) => (
              <div key={idx} className="text-center group hover:bg-[#f8faf5] p-8 rounded-xl transition-all duration-300">
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-[#164b35] mb-3">
                  {item.title}
                </h3>
                <p className="text-[#58705f]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#164b35] to-[#10281e] relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-x-12"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Experience Pure Essence?
          </h2>
          <p className="text-xl text-[#c9d8cf] mb-10">
            Browse our collection and find the perfect oil for your needs. Whether for personal use or bulk orders, we have you covered.
          </p>
          <Link
            href="#categories"
            className="inline-block bg-[#eef7ee] hover:bg-white text-[#10281e] font-bold px-10 py-4 rounded-full transition-all duration-300 hover:shadow-2xl text-lg"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Essential Oils Products',
            description: 'Premium collection of essential oils from Orion Trade',
            url: 'https://oriontrade.com/products',
            mainEntity: {
              '@type': 'ItemList',
              itemListElement: categories.map((cat, idx) => ({
                '@type': 'ListItem',
                position: idx + 1,
                name: cat.name,
                url: `https://oriontrade.com/products/${cat.slug}`,
              })),
            },
          }),
        }}
      />
    </>
  );
}
