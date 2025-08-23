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
      <div class="flex flex-col md:flex-row justify-center items-center md:justify-between md:flex-wrap gap-8 md:mx-10 my-6">
        <FeatureCard
          logoImage="https://s3.amazonaws.com/beamstart/2020/Oct/15/cca01b71d1a4670d46d1e2bd4774ea71.png"
          title="AWS Knowledge: Architecting"
          hoverColor="#FF9900"
          onCredentialsClick={() =>
            window.open(
              "https://www.credly.com/badges/2faaa741-4079-454d-be9c-b91366a91090/linked_in_profile",
              "_blank"
            )
          }
        />
        <FeatureCard
          logoImage="data:image/png;base64,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"
          title="Meta Front-End Developer"
          hoverColor="#0081FB	"
          onCredentialsClick={() =>
            window.open(
              "https://www.credly.com/badges/d471435e-28a7-4437-98de-e82ed2e04462/public_url",
              "_blank"
            )
          }
        />

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

        <FeatureCard
          logoImage="https://wallpapers.com/images/hd/google-g-logo-on-black-fza03id05dmw3jap.jpg"
          title="Google UX Design Professional"
          hoverColor="#EA4335"
          onCredentialsClick={() =>
            window.open(
              "https://www.credly.com/badges/6e3aa9d1-2b3a-4af2-a592-86cc416298c2/public_url",
              "_blank"
            )
          }
        />
        <FeatureCard
          logoImage="https://arcx.io/img/seo/arcxog.jpg"
          title="CYBER THREAT INTELLIGENCE 101"
          hoverColor="#0c0c1c"
          onCredentialsClick={() =>
            window.open(
              "https://www.credly.com/badges/6e3aa9d1-2b3a-4af2-a592-86cc416298c2/public_urlhttps://members.arcx.io/courses/foundation-threat-intelligence-analyst/aa87ed52-f9ae-4086-b9e9-17296e6c4a1d",
              "_blank"
            )
          }
        />
      </div>
    </motion.div>
  );
};

export default Certifications;
