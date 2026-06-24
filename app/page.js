import Image from "next/image";
import Link from "next/link";
import products from "@/data/products.json";

export default function Home() {
  return (
    <>
      <section className="relative isolate min-h-[680px] overflow-hidden">
        <Image
          src="/images/essential-oils-hero.png"
          alt="Amber essential oil bottles arranged with lavender, mint, citrus, and herbs"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1f17]/85 via-[#0b1f17]/55 to-transparent" />
        <div className="relative mx-auto flex min-h-[680px] max-w-7xl items-center px-5 py-20 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#b8dbc5]">
              Natural essential oils
            </p>
            <h1 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Pure oils for wellness, fragrance, and everyday formulations.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-[#edf6ef] sm:text-lg">
              Orion Trade showcases a curated range of essential oils for brands,
              formulators, wellness studios, and natural product makers.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/products"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#164b35] transition hover:bg-[#eef7ee]"
              >
                View Products
              </Link>
              <Link
                href="/contact-us"
                className="rounded-full border border-white/70 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#2d6d4d]">
              What we offer
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#10281e] sm:text-4xl">
              Essential oil categories for small batches and bulk supply.
            </h2>
          </div>
          <p className="text-base leading-7 text-[#52685a]">
            Use this dummy content as a starting point for the final business copy.
            The product list is stored in JSON so categories and product information
            can be expanded without changing the page structure.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {products.map((category) => (
            <Link
              key={category.slug}
              href={`/products#${category.slug}`}
              className="rounded-lg border border-[#dfe8de] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:shadow-[#164b35]/10"
            >
              <h3 className="text-lg font-semibold text-[#164b35]">{category.name}</h3>
              <p className="mt-3 text-sm leading-6 text-[#5f7467]">{category.description}</p>
              <p className="mt-5 text-sm font-semibold text-[#2d6d4d]">
                {category.products.length} dummy products
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
          {[
            ["Quality Focus", "Dummy quality checks for aroma, appearance, packaging, and batch records."],
            ["Flexible Packaging", "Retail bottles, sample packs, and bulk cans can be represented here."],
            ["Static Website Ready", "Email and inquiry handling can be integrated later when details are final."],
          ].map(([title, description]) => (
            <div key={title} className="border-l-2 border-[#2d6d4d] pl-5">
              <h3 className="text-lg font-semibold text-[#10281e]">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#5f7467]">{description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
