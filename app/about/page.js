"use client";
import React from "react";
import { motion } from "framer-motion";
import Education from "../components/Education/page";

const About = () => {
  return (
    <motion.div
      className="h-full overflow-y-scroll"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
        <div className="p-8 sm:p-8 md:p-12 lg:p-16 xl:p-20">

          <div className="mb-8">
            <h1 className="font-bold text-2xl py-4">ABOUT ME</h1>
            <p className="my-4 md:my-8 font-semibold">
              Driven by a passion for elegant design and clean code, I've spent
              this year perfecting my craft in the realm of frontend
              development. Armed with a toolkit that includes HTML, CSS,
              JavaScript, React Js, Next Js.... I specialize in transforming
              concepts into captivating user interfaces that leave a lasting
              impression.
            </p>
            <p className="my-4 font-semibold">
              From responsive layouts that adapt flawlessly to any screen size,
              to fluid animations that breathe life into static pages, each
              project showcases my commitment to pushing the boundaries of
              what's possible on the web.
            </p>
          </div>

          <div className="my-8">
            <h2 className="font-bold text-2xl py-4">TOOLS:</h2>
            <div align="center">
              <img src="https://skillicons.dev/icons?i=next,react,tailwind,bootstrap,html,css,javascript" />
              <br />
              <img src="https://skillicons.dev/icons?i=nodejs,typescript,firebase,c,mysql,git,github" />
            </div>
          </div>

          <div className="my-14">
            <h1 className="font-bold text-2xl py-4">EDUCATION</h1>
            <Education/>
          </div>
        </div>

    </motion.div>
  );
};

export default About;
