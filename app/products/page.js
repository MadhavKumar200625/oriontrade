import products from "@/data/products.json";

export const metadata = {
  title: "Our Products | Orion Trade Natural Oils",
  description: "Dummy essential oil categories and products for a static showcase website.",
};

export default function ProductsPage() {
  return (
    <div className="bg-[#f8faf5]">
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#2d6d4d]">
            Our Products
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-[#10281e] sm:text-5xl">
            Dummy essential oil catalogue for the static website.
          </h1>
          <p className="mt-6 text-lg leading-8 text-[#52685a]">
            These categories and products are placeholder entries stored in
            <span className="font-semibold"> data/products.json</span>. Replace names,
            specifications, origins, and pack sizes with real information later.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-8">
          {products.map((category) => (
            <article
              key={category.slug}
              id={category.slug}
              className="scroll-mt-32 rounded-lg border border-[#dfe8de] bg-white p-6 shadow-sm sm:p-8"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#2d6d4d]">
                    Category
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-[#10281e]">
                    {category.name}
                  </h2>
                </div>
                <p className="max-w-2xl text-sm leading-6 text-[#5f7467]">
                  {category.description}
                </p>
              </div>

              <div className="mt-6 grid gap-5 lg:grid-cols-2">
                {category.products.map((product) => (
                  <div key={product.name} className="rounded-lg bg-[#f8faf5] p-5">
                    <h3 className="text-lg font-semibold text-[#164b35]">{product.name}</h3>
                    <p className="mt-1 text-sm italic text-[#5f7467]">
                      {product.botanicalName}
                    </p>
                    <dl className="mt-4 grid gap-3 text-sm text-[#52685a]">
                      <div>
                        <dt className="font-semibold text-[#10281e]">Origin</dt>
                        <dd>{product.origin}</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-[#10281e]">Aroma Notes</dt>
                        <dd>{product.notes}</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-[#10281e]">Common Uses</dt>
                        <dd>{product.uses.join(", ")}</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-[#10281e]">Dummy Pack Sizes</dt>
                        <dd>{product.packSizes.join(", ")}</dd>
                      </div>
                    </dl>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
