import Link from "next/link";
import products from "@/data/products.json";

const links = [
  { label: "About Us", href: "/about-us" },
  { label: "Products", href: "/products" },
  { label: "Packaging", href: "/packaging" },
  { label: "Shipping", href: "/shipping" },
  { label: "Contact Us", href: "/contact-us" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#dfe8de] bg-[#10281e] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <Link href="/" className="text-xl font-semibold tracking-[0.08em] uppercase">
            Orion Trade
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-6 text-[#c9d8cf]">
            Dummy business information for a static essential oils showcase website.
            Real company details, certifications, and email integration can be added later.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-[#a8c8b6]">
            Pages
          </h2>
          <div className="mt-4 grid gap-2 text-sm text-[#e5eee8]">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-[#a8c8b6]">
            Product Categories
          </h2>
          <div className="mt-4 grid gap-2 text-sm text-[#e5eee8]">
            {products.map((category) => (
              <Link key={category.slug} href={`/products#${category.slug}`} className="hover:text-white">
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-4 text-center text-xs text-[#a8c8b6]">
        Copyright 2026 Orion Trade Natural Oils. All rights reserved.
      </div>
    </footer>
  );
}
