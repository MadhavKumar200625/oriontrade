export const metadata = {
  title: "Contact Us | Orion Trade Natural Oils",
  description: "Dummy contact page for essential oil enquiries.",
};

export default function ContactUsPage() {
  return (
    <div className="bg-[#f8faf5]">
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#2d6d4d]">
            Contact Us
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-[#10281e] sm:text-5xl">
            Send an essential oil enquiry.
          </h1>
          <p className="mt-6 text-lg leading-8 text-[#52685a]">
            This contact page uses dummy information for now. Email integration and
            real enquiry handling can be connected later.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 pb-16 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <aside className="rounded-lg bg-[#164b35] p-8 text-white">
          <h2 className="text-2xl font-semibold">Dummy Business Details</h2>
          <div className="mt-6 grid gap-5 text-sm leading-6 text-[#e5eee8]">
            <p>
              <span className="block font-semibold text-white">Email</span>
              info@example.com
            </p>
            <p>
              <span className="block font-semibold text-white">Phone</span>
              +91 98765 43210
            </p>
            <p>
              <span className="block font-semibold text-white">Address</span>
              123 Natural Oils Market, Mumbai, Maharashtra, India
            </p>
            <p>
              <span className="block font-semibold text-white">Hours</span>
              Monday to Saturday, 10:00 AM to 6:00 PM
            </p>
          </div>
        </aside>

        <form className="rounded-lg border border-[#dfe8de] bg-white p-6 shadow-sm sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold text-[#10281e]">
              Name
              <input
                className="rounded-md border border-[#dfe8de] px-4 py-3 font-normal outline-none transition focus:border-[#2d6d4d]"
                type="text"
                name="name"
                placeholder="Your name"
              />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-[#10281e]">
              Email
              <input
                className="rounded-md border border-[#dfe8de] px-4 py-3 font-normal outline-none transition focus:border-[#2d6d4d]"
                type="email"
                name="email"
                placeholder="you@example.com"
              />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-[#10281e] sm:col-span-2">
              Product Interest
              <input
                className="rounded-md border border-[#dfe8de] px-4 py-3 font-normal outline-none transition focus:border-[#2d6d4d]"
                type="text"
                name="product"
                placeholder="Lavender oil, peppermint oil, bulk enquiry..."
              />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-[#10281e] sm:col-span-2">
              Message
              <textarea
                className="min-h-36 rounded-md border border-[#dfe8de] px-4 py-3 font-normal outline-none transition focus:border-[#2d6d4d]"
                name="message"
                placeholder="Share quantity, packaging, and delivery requirements."
              />
            </label>
          </div>
          <button
            type="button"
            className="mt-6 rounded-full bg-[#164b35] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#10281e]"
          >
            Dummy Submit Button
          </button>
          <p className="mt-3 text-sm text-[#5f7467]">
            This form is static right now and does not send email.
          </p>
        </form>
      </section>
    </div>
  );
}
