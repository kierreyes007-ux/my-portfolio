
import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun, ArrowUpRight } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Work", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Stack", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  const closeMenu = () => setOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 sm:px-6">
      <nav
        className={`mx-auto max-w-7xl transition-all duration-500 ${
          scrolled
            ? "rounded-2xl border border-black/10 bg-white/80 shadow-lg shadow-black/5 backdrop-blur-xl dark:border-white/10 dark:bg-neutral-950/80 dark:shadow-black/20"
            : "border border-transparent bg-transparent"
        }`}
      >
        <div className="flex h-16 items-center justify-between px-4 sm:px-6">
          
          {/* Logo */}
          <a
            href="#home"
            onClick={closeMenu}
            className="group flex items-center gap-3"
          >
            <span className="text-lg font-bold tracking-tight text-neutral-950 dark:text-white">
              KIER
            </span>

            <span className="hidden h-1 w-1 rounded-full bg-blue-600 sm:block" />

            <span className="hidden text-xs font-medium tracking-[0.18em] text-neutral-500 sm:block dark:text-neutral-400">
              DEVELOPER
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-sm font-medium text-neutral-600 transition-colors duration-300 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden items-center gap-3 md:flex">
            <button
              onClick={() => setDark(!dark)}
              aria-label="Toggle dark mode"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-neutral-700 transition-all duration-300 hover:border-black/20 hover:bg-neutral-100 dark:border-white/10 dark:text-neutral-300 dark:hover:border-white/20 dark:hover:bg-white/10"
            >
              {dark ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>

            <a
              href="/Reyes_Resume.pdf"
              download="Reyes_Resume.pdf"
              className="group flex items-center gap-2 rounded-full bg-neutral-950 px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-blue-600 dark:bg-white dark:text-neutral-950 dark:hover:bg-blue-500 dark:hover:text-white"
            >
              Resume
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setDark(!dark)}
              aria-label="Toggle dark mode"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-neutral-700 dark:border-white/10 dark:text-neutral-300"
            >
              {dark ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>

            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-neutral-900 dark:border-white/10 dark:text-white"
            >
              {open ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            open ? "max-h-96 pb-4" : "max-h-0"
          }`}
        >
          <div className="border-t border-black/10 px-4 pt-3 dark:border-white/10">
            <div className="flex flex-col">
              {links.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="flex items-center justify-between border-b border-black/5 py-4 text-sm font-medium text-neutral-700 transition-colors hover:text-blue-600 dark:border-white/5 dark:text-neutral-300 dark:hover:text-blue-400"
                >
                  <span>0{index + 1}</span>
                  <span>{link.label}</span>
                </a>
              ))}

              <a
                href="/Reyes_Resume.pdf"
                download="Reyes_Resume.pdf"
                onClick={closeMenu}
                className="mt-4 flex items-center justify-center gap-2 rounded-full bg-neutral-950 px-5 py-3 text-sm font-medium text-white dark:bg-white dark:text-neutral-950"
              >
                Download Resume
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

