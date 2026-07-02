function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white py-6 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

       
        <p className="text-sm text-gray-300">
          © {new Date().getFullYear()} Kier. All rights reserved.
        </p>

       
        <div className="flex gap-6 text-sm">
          <a href="#home" className="hover:text-white text-gray-400">
            Home
          </a>
          <a href="#projects" className="hover:text-white text-gray-400">
            Projects
          </a>
          <a href="#contact" className="hover:text-white text-gray-400">
            Contact
          </a>
        </div>

        
        <div className="flex gap-4 text-sm">
          <a
            href="https://github.com/kierreyes007-ux/my-portfolio"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-white"
          >
            GitHub
          </a>

          <a
            href="mailto:kierreyes007@gmail.com"
            className="text-gray-400 hover:text-white"
          >
            Email
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;