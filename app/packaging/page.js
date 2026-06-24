export const metadata = {
  title: "Packaging | Orion Trade Natural Oils",
  description: "Dummy packaging information for essential oil products.",
};

export default function PackagingPage() {
  const options = [
    ["Retail Bottles", "Amber glass bottles with dropper caps in 10 ml, 30 ml, and 50 ml dummy sizes."],
    ["Sample Packs", "Small trial packs for fragrance evaluation, testing, and initial enquiries."],
    ["Bulk Supply", "Aluminium cans, HDPE containers, and drums can be listed here once finalized."],
  ];

  return (
    <div className="bg-[#f8faf5]">
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#2d6d4d]">
            Packaging
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-[#10281e] sm:text-5xl">
            Flexible packaging information for retail and bulk oil orders.
          </h1>
          <p className="mt-6 text-lg leading-8 text-[#52685a]">
            This is dummy packaging content. Add actual bottle types, cap options,
            label requirements, MOQ, and private-label details when they are ready.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
          {options.map(([title, description]) => (
            <div key={title} className="rounded-lg border border-[#dfe8de] bg-[#f8faf5] p-6">
              <h2 className="text-xl font-semibold text-[#164b35]">{title}</h2>
              <p className="mt-4 text-sm leading-6 text-[#5f7467]">{description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
