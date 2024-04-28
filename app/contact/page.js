"use client";
import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
} from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
  const colors = ["#14e81e", "#00ea8d", "#017ed5", "#b53dff", "#8d00c4"];
  const color = useMotionValue(colors[0]);
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

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
          Swal.fire({
            title: "SUCCESS",
            text: "Message sent successfully!",
            icon: "success",
          });
          form.current.reset();
        },
        (error) => {
          console.log(error);
          Swal.fire({
            title: "ERROR",
            text: "Something went wrong!",
            icon: "error",
          });
        }
      );
  };

  useEffect(() => {
    animate(color, colors, {
      ease: "easeInOut",
      repeat: Infinity,
      duration: 10,
      repeatType: "mirror",
    });
  }, []);
  return (
    <motion.div
      className="h-full overflow-y-scroll"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ delay:0.5,duration: 1 }}
    >
      <section className="">
        <div
          className="container flex flex-col md:flex-row lg:max-w-5xl w-full px-5 py-16 xl:py-4  mx-auto section"
          id="contact-form"
        >
          <div className="md:w-1/3 w-full">
            <h1 className="text-2xl sm:text-4xl font-bold title-font mb-3">
              Contact Me
            </h1>
            <p className="leading-relaxed text-xl ">
              Feel free to reach out to me! Whether you have a question,
              feedback, or a collaboration proposal, I'd love to hear from you.
              <br />
              <br />
              You can also email me at
              <a
                href="mailto:mouad.elmaslouhi.24@gmail.com"
                className="font-semibold text-sm border-b-2 border-green-400"
              >
                {" "}
                mouad.elmaslouhi.24@gmail.com
              </a>
            </p>
            <p className="leading-relaxed text-xl  mt-6">
              Connect with me on social media:
            </p>
            <span className="inline-flex mt-6 justify-center sm:justify-start">
              <a
                className="text-gray-500 hover:"
                target="_blank"
                href="https://github.com/MOOUUAAD"
              >
                <FaGithub
                  size={24}
                  className="hover:scale-105 duration-150 hover:fill-zinc-500"
                />
              </a>
              <a
                className="ml-3 text-gray-500 hover:"
                href="https://www.linkedin.com/in/mouad-el-maslouhi-438038295/"
                target="_blank"
              >
                <FaLinkedin
                  size={24}
                  className="hover:scale-105 duration-150 hover:fill-blue-800"
                />
              </a>
            </span>
          </div>
          <div className="md:w-2/3 w-full mt-6 md:mt-0 md:pl-28">
            <h1 className="text-2xl sm:text-4xl font-bold title-font mb-3">
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
                    name="user_name"
                    required
                    className="w-full text-black bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none  py-1 px-1 leading-8 transition-colors duration-200 ease-in-out "
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
                    id="user_email"
                    name="user_email"
                    required
                    className="w-full text-black bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none  py-1 px-1 leading-8 transition-colors duration-200 ease-in-out "
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
                    className="w-full text-black bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none  py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out "
                  ></textarea>
                </div>
              </div>

              <div className="p-2 w-full">
                <motion.button
                  style={{ boxShadow }}
                  type="submit"
                  className="flex text-white  px-12 py-2 text-xl transition duration-200 font-bold border-0 focus:outline-none hover:bg-transparent rounded-full shadow-lg mx-0 flex-col text-center"
                >
                  Send Message
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
