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

        <div class="flex flex-col md:flex-row justify-center items-center md:justify-start gap-8 md:mx-10 my-6">
          <FeatureCard
            logoImage="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/BCG_Corporate_Logo.jpg/600px-BCG_Corporate_Logo.jpg?20181127202412"
            title="BCG Digital Transformation"
            hoverColor="#147B58"
            onCredentialsClick={() =>
              window.open(
                "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/SKZxezskWgmFjRvj9/cT6tMKSaMryk6PGaF_SKZxezskWgmFjRvj9_78ii8yWqSBSdo6bLf_1754767893106_completion_certificate.pdf",
                "_blank"
              )
            }
          />
          <FeatureCard
            logoImage="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/BCG_Corporate_Logo.jpg/600px-BCG_Corporate_Logo.jpg?20181127202412"
            title="BCG Strategy Consulting"
            hoverColor="#147B58"
            onCredentialsClick={() =>
              window.open(
                "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/SKZxezskWgmFjRvj9/ntTvo6ru6Tq3A2JPq_SKZxezskWgmFjRvj9_78ii8yWqSBSdo6bLf_1753899324321_completion_certificate.pdf",
                "_blank"
              )
            }
          />
        </div>
    </motion.div>
  );
};

export default Certifications;
