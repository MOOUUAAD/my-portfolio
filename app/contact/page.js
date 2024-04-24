"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";


const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setSuccess(false);
    setError(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset()
        },
        (error) => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      classNameName="h-full overflow-y-scroll"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <section className="">
        <div
          className="container flex flex-col md:flex-row lg:max-w-5xl w-full px-5 py-16 xl:py-4  mx-auto section"
          id="contact-form"
        >
          <div className="md:w-1/3 w-full">
            <h1 className="text-4xl3 sm:text-4xl font-bold title-font mb-3">
              Contact Me
            </h1>
            <p className="leading-relaxed text-xl ">
              We're here to assist you! If you have any questions or need
              assistance, please feel free to reach out to us.
              <br />
              <br />
              You can also email me at
              <a
                href="mailto:mouad.elmaslouhi.2003@gmail.com"
                className="font-semibold text-sm border-b-4 border-green-400"
              >
                {" "}
                mouad.elmaslouhi.2003@gmail.com
              </a>
            </p>
            <p className="leading-relaxed text-xl  mt-6">
              Connect with me on social media:
            </p>
            <span className="inline-flex mt-6 justify-center sm:justify-start">
              <a
                className="text-gray-500 hover:"
                target="_blank"
                href="https://twitter.com/example"
              >
                <FaGithub
                  size={24}
                  classNameName="hover:scale-105 duration-150 hover:fill-zinc-500"
                />
              </a>
              <a
                className="ml-3 text-gray-500 hover:"
                href="https://www.instagram.com/example/"
                target="_blank"
              >
                <FaLinkedin
                  size={24}
                  classNameName="hover:scale-105 duration-150 hover:fill-blue-800"
                />
              </a>
            </span>
          </div>
          <div className="md:w-2/3 w-full mt-6 md:mt-0 md:pl-28">
            <h1 className="text-4xl3 sm:text-4xl font-bold title-font mb-3">
              Contact Form
            </h1>
            <form
              action="send-contact.php"
              method="post"
              id="submit-contact-form"
              ref={form}
              onSubmit={sendEmail}
            >
              <div className="p-2 w-full">
                <div className="relative">
                  <label for="name" className="leading-7 py-4 text-lg ">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="user_name"
                    name="name"
                    required
                    className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none  py-1 px-1 leading-8 transition-colors duration-200 ease-in-out "
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label for="email" className="leading-7 py-4 text-lg ">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    required
                    className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none  py-1 px-1 leading-8 transition-colors duration-200 ease-in-out "
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label for="message" className="leading-7 py-2 text-lg ">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="user_message"
                    required
                    className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none  py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out "
                  ></textarea>
                </div>
              </div>
              {success && (
                <p className="text-green-500">
                  Message sent message sent successfully!
                </p>
              )}
              {error && <p className="text-red-500">Something went wrong!</p>}

              <div className="p-2 w-full">
                <button
                  type="submit"
                  className="flex text-white bg-black  px-12 py-2 text-xl transition  hover:text-black duration-200 font-bold border-0 focus:outline-none hover:bg-transparent rounded shadow-lg mx-0 flex-col text-center"
                >
                  Send Message ✉
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
