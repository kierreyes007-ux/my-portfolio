function Contact() {
  return (
    <section className="min-h-screen w-full bg-[#f7f7f5] px-4 pb-20 pt-10 text-neutral-950 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 border-b border-neutral-200 pb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
            Support
          </p>

          <h1 className="mt-2 text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
            Contact Us
          </h1>

          <p className="mt-3 max-w-xl text-sm leading-relaxed text-neutral-500 sm:text-base">
            Have a question about our products? Get in touch and we'll be happy
            to help.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
              Get in touch
            </p>

            <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
              We'd love to hear from you.
            </h2>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-neutral-500">
              Whether you have a question about a product, an order, or
              anything else, feel free to reach out.
            </p>

            <div className="mt-8 border-t border-neutral-200">
              <div className="border-b border-neutral-200 py-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-400">
                  Email
                </p>
                <p className="mt-2 text-sm font-medium">
                  kierreyes007@gmail.com
                </p>
              </div>

              <div className="border-b border-neutral-200 py-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-400">
                  Phone
                </p>
                <p className="mt-2 text-sm font-medium">
                  09771703256
                </p>
              </div>

              <div className="py-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-400">
                  Location
                </p>
                <p className="mt-2 text-sm font-medium">
                  Manila, Philippines
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
              Message
            </p>

            <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
              Send us a message.
            </h2>

            <div className="mt-8 space-y-4">
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-neutral-500">
                  Name
                </label>

                <input
                  className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm outline-none transition-all duration-300 placeholder:text-neutral-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/10"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-neutral-500">
                  Email
                </label>

                <input
                  className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm outline-none transition-all duration-300 placeholder:text-neutral-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/10"
                  placeholder="Your Email"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-neutral-500">
                  Message
                </label>

                <textarea
                  className="h-32 w-full resize-none rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm outline-none transition-all duration-300 placeholder:text-neutral-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/10"
                  placeholder="Your Message"
                />
              </div>

              <button className="w-full rounded-full bg-neutral-950 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-600 hover:shadow-lg">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;