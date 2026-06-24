export const metadata = {
  title: "Shipping | Orion Trade Natural Oils",
  description: "Dummy shipping and dispatch information for essential oil products.",
};

export default function ShippingPage() {
  return (
    <div className="bg-[#f8faf5]">
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#2d6d4d]">
            Shipping
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-[#10281e] sm:text-5xl">
            Dummy shipping details for domestic and export enquiries.
          </h1>
          <p className="mt-6 text-lg leading-8 text-[#52685a]">
            Shipping content can later include service areas, dispatch timelines,
            courier partners, documentation, export handling, and payment terms.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            ["Order Review", "Product details, pack sizes, and shipping address are confirmed before dispatch."],
            ["Secure Packing", "Bottles and bulk packs are sealed and packed to reduce leakage risk in transit."],
            ["Dispatch Support", "Tracking details and dummy documentation notes can be shown in this section."],
          ].map(([title, description], index) => (
            <div key={title} className="rounded-lg border border-[#dfe8de] bg-white p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#164b35] text-sm font-semibold text-white">
                {index + 1}
              </span>
              <h2 className="mt-5 text-xl font-semibold text-[#10281e]">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-[#5f7467]">{description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
