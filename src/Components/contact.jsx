function Contact() {
  return (
    <section
  id="contact"
  className="w-full min-h-screen px-6 py-20 flex items-center justify-center bg-gray-100"
>
  <div className="max-w-3xl w-full text-center"
  data-aos="fade-right"
  data-aos-duration="800">

    <h2
      className="text-4xl font-bold mb-4"
     
    >
      Contact Me
    </h2>

    <p
      className="text-gray-600 mb-10"
      data-aos="fade-right"
      data-aos-duration="800"
    >
      Feel free to reach out if you have any questions or want to work together.
    </p>

    <div className="space-y-4 text-lg">

      <p
       data-aos="fade-right"
      data-aos-duration="800"
      >
        <i className="fa-solid fa-phone"></i>{" "}
        Contact:{" "}
        <a className="text-blue-600 hover:underline">
          09771703256
        </a>
      </p>

      <p
       data-aos="fade-right"
      data-aos-duration="800"
      >
        <i className="fa-brands fa-facebook-messenger"></i>{" "}
        Facebook:{" "}
        <a
          href="https://www.facebook.com/reyeskier12"
          target="_blank"
          className="text-blue-600 hover:underline"
        >
          Kier Reyes
        </a>
      </p>

      <p
       data-aos="fade-right"
      data-aos-duration="800"
      >
        📧 Email:{" "}
        <a
          href="mailto:kierreyes007@gmail.com"
          className="text-blue-600 hover:underline"
        >
          kierreyes007@gmail.com
        </a>
      </p>

      <p
       data-aos="fade-right"
      data-aos-duration="800"
      >
        💻 GitHub:{" "}
        <a
          href="https://github.com/kierreyes007-ux"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 hover:underline"
        >
          https://github.com/kierreyes007-ux
        </a>
      </p>

    </div>

    <div
      className="mt-10 flex justify-center gap-6"
      data-aos="fade-right"
      data-aos-duration="800"
    >
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