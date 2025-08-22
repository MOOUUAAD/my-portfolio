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
        <div class="flex md:mx-10 gap-10 my-6">
          <FeatureCard
            logoImage="https://web-assets.bcg.com/dims4/default/de4522a/2147483647/strip/true/crop/843x474+0+183/resize/1200x675!/format/webp/quality/90/?url=http%3A%2F%2Fboston-consulting-group-brightspot.s3.amazonaws.com%2Fc7%2F61%2F278ef73b486fa33e88de8ef2491c%2Fsource-homepage-thumbnail.jpg"
            title="BCG"
            subtitle="BCG Digital Transformation"
            hoverColor="#147B58	"
            onCredentialsClick={() =>
              window.open("https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/SKZxezskWgmFjRvj9/cT6tMKSaMryk6PGaF_SKZxezskWgmFjRvj9_78ii8yWqSBSdo6bLf_1754767893106_completion_certificate.pdf", "_blank")
            }
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Certifications;
