"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const About = () => {
  const toolsRef = useRef();
  const toolsInView = useInView(toolsRef, { amount: 0.5 });

  const educationRef = useRef();
  const educationInView = useInView(educationRef, { amount: 0.5 });

  return (
    <motion.div
      className="h-full overflow-y-scroll overflow-x-hidden"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ delay: 0.5, duration: 1 }}
    >
      <div className="p-12 lg:p-20 xl:p-28 xl:pb-3 pt-20 flex flex-col justify-between gap-40 ">
        <div className="mb-8">
          <h1 className="font-bold text-4xl py-4 text-center">ABOUT ME</h1>
          <p className="my-4 md:my-8 font-semibold">
          Driven by a passion for elegant design, clean code, and scalable cloud solutions, I've spent this year sharpening my full-stack development skills while expanding into cloud technologies. With a strong foundation in Tailwind CSS, JavaScript, React.js, Next.js, and Node.js — and hands-on experience deploying full-stack applications using AWS — I specialize in transforming ideas into seamless, responsive, and visually engaging user experiences backed by robust cloud infrastructures.
          </p>
          <p className="my-4 font-semibold">
          From crafting intuitive user interfaces to building secure and scalable backends, each project reflects my commitment to innovation, performance, and impactful design — both in the interface and behind the scenes.
          </p>
        </div>

        <div className="my-8" ref={toolsRef}>
          <motion.h2
            className="font-bold text-4xl py-4 text-center"
            initial={{ x: "-130%" }}
            animate={toolsInView ? { x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            TOOLS:
          </motion.h2>
          <motion.div
            align="center"
            className="my-4 md:my-8"
            initial={{ x: "-130%" }}
            animate={toolsInView ? { x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <img src="https://skillicons.dev/icons?i=aws,next,react,tailwind,bootstrap,html,css,javascript,figma" />
            <br />
            <img src="https://skillicons.dev/icons?i=vite,typescript,nodejs,firebase,c,mysql,git,github" />
          </motion.div>
        </div>

        <div className="my-14" ref={educationRef}>
          <motion.h1
            className="font-bold text-4xl py-4 text-center"
            initial={{ x: "-130%" }}
            animate={educationInView ? { x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            EDUCATION
          </motion.h1>
          <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical my-4 md:my-8">
            <li>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <motion.div
                className="timeline-start md:text-end mb-10"
                initial={{ y: "140%" }}
                animate={educationInView ? { y: 0 } : {}}
                transition={{ delay: 0.35 }}
              >
                <time className="font-mono italic">2021</time>
                <div className="text-lg font-black">
                  Baccalaureat Sciences Maths
                </div>
                Lycee Abi Abbas Sebti - Tanger
              </motion.div>
              <hr />
            </li>

            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <motion.div
                className="timeline-end mb-10"
                initial={{ y: "140%" }}
                animate={educationInView ? { y: 0 } : {}}
                transition={{ delay: 0.45 }}
              >
                <time className="font-mono italic">2022-2023</time>
                <div className="text-lg font-black">MPSI/MP</div>
                CPGE Moulay Al-Hassan - Tanger
              </motion.div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <motion.div
                className="timeline-start md:text-end mb-10"
                initial={{ y: "140%" }}
                animate={educationInView ? { y: 0 } : {}}
                transition={{ delay: 0.55 }}
              >
                <time className="font-mono italic">2023-2026</time>
                <div className="text-lg font-black">
                  Computer science and Digitalisation
                </div>
                Ecole Mohammadia d'Ingenieurs - Rabat
              </motion.div>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
