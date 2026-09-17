import {
  ArrowUpRight,
  Mail,
  Phone,
  MessageCircle,
  ExternalLink,
} from "lucide-react";

function Contact() {
  const contacts = [
    {
      label: "Email",
      value: "kierreyes007@gmail.com",
      href: "mailto:kierreyes007@gmail.com",
      icon: Mail,
    },
    {
      label: "Phone",
      value: "09771703256",
      href: "tel:09771703256",
      icon: Phone,
    },
    {
      label: "GitHub",
      value: "kierreyes007-ux",
      href: "https://github.com/kierreyes007-ux",
      icon: ExternalLink,
    },
    {
      label: "Facebook",
      value: "Kier Reyes",
      href: "https://www.facebook.com/reyeskier12",
      icon: MessageCircle,
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#f5f5f3] px-6 py-28 text-neutral-950 transition-colors duration-500 dark:bg-[#0a0a0a] dark:text-white sm:px-10 lg:px-16"
    >
      <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-blue-600/5 blur-3xl dark:bg-blue-500/10" />

      <div className="relative mx-auto max-w-7xl">
        <div
          data-aos="fade-up"
          data-aos-duration="700"
          className="flex items-center gap-4"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-600">
            04 — Contact
          </span>

          <span className="h-px flex-1 bg-black/10 dark:bg-white/10" />
        </div>

        <div className="mt-20 grid gap-16 lg:grid-cols-[1.25fr_0.75fr] lg:gap-24">
          <div>
            <p
              data-aos="fade-up"
              data-aos-duration="700"
              className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500"
            >
              Have an opportunity?
            </p>

            <h2
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="800"
              className="mt-5 text-[clamp(4rem,9vw,8.5rem)] font-bold leading-[0.8] tracking-[-0.07em]"
            >
              Let's
              <br />
              <span className="text-blue-600">talk.</span>
            </h2>

            <p
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="800"
              className="mt-10 max-w-xl text-base leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-lg"
            >
              I'm currently open to entry-level web development opportunities,
              collaborations, and projects where I can contribute while
              continuing to grow as a developer.
            </p>

            <a
              href="mailto:kierreyes007@gmail.com"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="800"
              className="group mt-10 inline-flex items-center gap-4 border-b-2 border-neutral-950 pb-3 text-lg font-semibold transition-colors duration-300 hover:border-blue-600 hover:text-blue-600 dark:border-white dark:hover:border-blue-500 dark:hover:text-blue-400"
            >
              kierreyes007@gmail.com

              <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>
          </div>

          <div
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="900"
            className="self-end"
          >
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400 dark:text-neutral-500">
              Get in touch
            </p>

            <div className="border-t border-black/10 dark:border-white/10">
              {contacts.map((contact) => {
                const Icon = contact.icon;

                return (
                  <a
                    key={contact.label}
                    href={contact.href}
                    target={
                      contact.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      contact.href.startsWith("http") ? "noreferrer" : undefined
                    }
                    className="group flex items-center justify-between border-b border-black/10 py-5 transition-all duration-300 hover:px-2 dark:border-white/10"
                  >
                    <div className="flex items-center gap-4">
                      <Icon className="h-4 w-4 text-neutral-400 transition-colors duration-300 group-hover:text-blue-600 dark:text-neutral-500 dark:group-hover:text-blue-400" />

                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-400 dark:text-neutral-500">
                          {contact.label}
                        </p>

                        <p className="mt-1 text-sm font-medium">
                          {contact.value}
                        </p>
                      </div>
                    </div>

                    <ArrowUpRight className="h-4 w-4 text-neutral-400 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-600 dark:text-neutral-500 dark:group-hover:text-blue-400" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="800"
          className="mt-24 flex flex-col gap-4 border-t border-black/10 pt-6 dark:border-white/10 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="text-xs uppercase tracking-[0.18em] text-neutral-400 dark:text-neutral-500">
            Manila, Philippines
          </p>

          <a
            href="#home"
            className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] transition-colors hover:text-blue-600 dark:hover:text-blue-400"
          >
            Back to top
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;