"use client";
import React from "react";
import { motion } from "framer-motion";
import FeatureCard from "../components/CertifCard";

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
          <FeatureCard
            logoImage="https://example.com/logo.png"
            title="BCG X"
            subtitle="Certif for data analysis"
            hoverColor="#147B58	"
            onCredentialsClick={() =>
              window.open("https://credentials-link.com", "_blank")
            }
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Certifications;
