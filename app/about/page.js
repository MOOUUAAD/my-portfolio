"use client";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div>
        <div className="p-4 sm:p-8 md:p-12 lg:p-16 l:p-20">
          <div>

          </div>
          <div>

          </div>
          <div>

          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
