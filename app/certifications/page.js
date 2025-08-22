"use client";
import React from "react";
import { motion } from "framer-motion";
import CertifCard from "../components/CertifCard";

const Certifications = () => {
  return (
    <motion.div
      className="h-full overflow-y-scroll"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ delay: 0.5, duration: 1 }}
    >
      <div id="projects" className="">
        <div class="flex flex-col md:mx-40 gap-12 justify-center items-center my-6">
<CertifCard />
        </div>
      </div>
    </motion.div>
  );
};

export default Certifications;
