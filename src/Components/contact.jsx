function Contact() {
  return (
    <section
      id="contact"
      className="w-full min-h-screen px-6 py-20 flex items-center justify-center bg-gray-100"
    >
      <div className="max-w-3xl w-full text-center">

        <h2 className="text-4xl font-bold mb-4">
          Contact Me
        </h2>

        <p className="text-gray-600 mb-10">
          Feel free to reach out if you have any questions or want to work together.
        </p>

        
        <div className="space-y-4 text-lg">

          <p>
            📧 Email:{" "}
            <a
              href="mailto:kierreyes007@gmail.com"
              className="text-blue-600 hover:underline"
            >
              kierreyes007@gmail.com
            </a>
          </p>

          <p>
            💻 GitHub:{" "}
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline"
            >
              github.com/yourusername
            </a>
          </p>

        </div>

     
        <div className="mt-10 flex justify-center gap-6">

          <a
            href="mailto:kierreyes007@gmail.com"
            className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition"
          >
            Send Email
          </a>

          <a
            href="#projects"
            className="border border-black px-6 py-3 rounded-md hover:bg-black hover:text-white transition"
          >
            View Projects
          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;