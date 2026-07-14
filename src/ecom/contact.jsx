function Contact() {

    return (
        <div className="w-full min-h-screen bg-gray-100 py-15 px-5">

            <div className="max-w-4xl mx-auto">

                <h1 className="text-4xl font-bold text-center mb-8">
                    Contact Us
                </h1>


                <div className="grid md:grid-cols-2 gap-8">


                    {/* Contact Information */}
                    <div className="bg-white rounded-2xl shadow-md p-6">

                        <h2 className="text-2xl font-bold mb-4">
                            Get in Touch
                        </h2>

                        <p className="mb-3">
                            Have questions about our products?
                            Feel free to contact us.
                        </p>

                        <p className="mb-2">
                            📧 Email: kierreyes007@gmail.com
                        </p>

                        <p className="mb-2">
                            📞 Phone: 09771703256
                        </p>

                        <p>
                            📍 Location: Manila, Philippines
                        </p>

                    </div>



                    {/* Contact Form */}
                    <div className="bg-white rounded-2xl shadow-md p-6">

                        <h2 className="text-2xl font-bold mb-4">
                            Send Message
                        </h2>


                        <input
                            className="
                            w-full
                            border
                            rounded-lg
                            p-3
                            mb-3
                            "
                            placeholder="Your Name"
                        />


                        <input
                            className="
                            w-full
                            border
                            rounded-lg
                            p-3
                            mb-3
                            "
                            placeholder="Your Email"
                        />


                        <textarea
                            className="
                            w-full
                            border
                            rounded-lg
                            p-3
                            h-32
                            mb-3
                            "
                            placeholder="Your Message"
                        />


                        <button
                            className="
                            bg-black
                            text-white
                            px-5
                            py-2
                            rounded-full
                            hover:bg-gray-700
                            transition
                            "
                        >
                            Send
                        </button>


                    </div>


                </div>

            </div>

        </div>
    )
}

export default Contact;