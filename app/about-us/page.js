import Link from "next/link";

export const metadata = {
  title: "About Us | Orion Trade Natural Oils",
  description: "Dummy about page for an essential oils business showcase website.",
};

export default function AboutUsPage() {
  return (
    <div className="bg-[#f8faf5]">
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#2d6d4d]">
            About Us
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-[#10281e] sm:text-5xl">
            A natural oils business built around purity, consistency, and service.
          </h1>
          <p className="mt-6 text-lg leading-8 text-[#52685a]">
            Orion Trade Natural Oils is placeholder business copy for a static website
            showcasing essential oils. This section can later be replaced with the
            company story, sourcing details, manufacturing process, and certifications.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-2xl font-semibold text-[#10281e]">Our Approach</h2>
            <p className="mt-4 leading-7 text-[#52685a]">
              We help customers explore essential oils for aromatherapy, natural
              fragrance, cosmetics, wellness formulations, and personal care products.
              Dummy business details can be updated once final product sourcing and
              compliance documents are ready.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {["Sourced with care", "Batch-focused supply", "Clean packaging", "Responsive support"].map(
              (item) => (
                <div key={item} className="rounded-lg border border-[#dfe8de] bg-[#f8faf5] p-5">
                  <h3 className="font-semibold text-[#164b35]">{item}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#5f7467]">
                    Placeholder text for the final brand promise and operating details.
                  </p>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="rounded-lg bg-[#164b35] p-8 text-white sm:p-10">
          <h2 className="text-2xl font-semibold">Ready to explore our oil range?</h2>
          <p className="mt-3 max-w-2xl text-[#dcebe2]">
            Browse the current dummy product categories or send an enquiry when contact
            integration is added later.
          </p>
          <Link
            href="/products"
            className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#164b35]"
          >
            View Products
          </Link>
        </div>
      </section>
    </div>
  );
}
