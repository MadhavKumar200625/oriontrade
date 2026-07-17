import Link from "next/link";
import products from "@/data/products.json";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Packaging", href: "/packaging" },
  { label: "Shipping", href: "/shipping" },
  { label: "Contact Us", href: "/contact-us" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#dfe8de] bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <Link href="/" className="flex items-center gap-3 w-fit" aria-label="Orion Trade home">
          <img
            src="/logo.png"
            alt="Orion Trade"
            width={160}
            height={60}
            className="h-10 w-auto sm:h-12 md:h-14"
          />
          <div>
            <span className="block text-lg font-semibold tracking-[0.08em] text-[#164b35] uppercase">
              Orion Trade
            </span>
            <span className="block text-xs text-[#58705f]">Natural essential oils</span>
          </div>
        </Link>

        <nav className="flex flex-wrap items-center gap-2 text-sm font-medium text-[#263b2f]">
          <Link className="rounded-full px-3 py-2 transition hover:bg-[#eef7ee]" href="/">
            Home
          </Link>
          <Link className="rounded-full px-3 py-2 transition hover:bg-[#eef7ee]" href="/about-us">
            About Us
          </Link>

          <div className="group relative">
            <Link
              className="inline-flex rounded-full px-3 py-2 transition hover:bg-[#eef7ee]"
              href="/products"
            >
              Our Products
            </Link>
            <div className="invisible absolute left-0 top-full w-72 translate-y-2 rounded-lg border border-[#dfe8de] bg-white p-2 opacity-0 shadow-xl shadow-[#164b35]/10 transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
              {products.map((category) => (
                <Link
                  key={category.slug}
                  href={`/products#${category.slug}`}
                  className="block rounded-md px-3 py-2 hover:bg-[#eef7ee]"
                >
                  <span className="block font-semibold text-[#164b35]">{category.name}</span>
                  <span className="line-clamp-2 text-xs font-normal text-[#58705f]">
                    {category.description}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {navItems.slice(2).map((item) => (
            <Link
              key={item.href}
              className="rounded-full px-3 py-2 transition hover:bg-[#eef7ee]"
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
