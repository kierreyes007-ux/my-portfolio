function Footer() {
  return (
    <footer className="border-t border-black/10 bg-[#f5f5f3] px-6 py-8 text-neutral-950 transition-colors duration-500 dark:border-white/10 dark:bg-[#0a0a0a] dark:text-white sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-bold tracking-tight">KIER<span className="text-blue-600">.</span></p>
            <p className="mt-1 text-xs uppercase tracking-[0.16em] text-neutral-400 dark:text-neutral-500">
              Frontend Developer
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
            <a
              href="#home"
              className="text-neutral-500 transition-colors duration-300 hover:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-400"
            >
              Home
            </a>

            <a
              href="#about"
              className="text-neutral-500 transition-colors duration-300 hover:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-400"
            >
              About
            </a>

            <a
              href="#projects"
              className="text-neutral-500 transition-colors duration-300 hover:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-400"
            >
              Work
            </a>

            <a
              href="#skills"
              className="text-neutral-500 transition-colors duration-300 hover:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-400"
            >
              Stack
            </a>

            <a
              href="#contact"
              className="text-neutral-500 transition-colors duration-300 hover:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-400"
            >
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-5 text-sm">
            <a
              href="https://github.com/kierreyes007-ux/my-portfolio"
              target="_blank"
              rel="noreferrer"
              className="text-neutral-500 transition-colors duration-300 hover:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-400"
            >
              GitHub
            </a>

            <a
              href="mailto:kierreyes007@gmail.com"
              className="text-neutral-500 transition-colors duration-300 hover:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-400"
            >
              Email
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-black/10 pt-5 text-xs text-neutral-400 dark:border-white/10 dark:text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Kier Reyes. All rights reserved.
          </p>

          <p className="uppercase tracking-[0.16em]">
            Manila, Philippines
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;