"use client";
import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

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
          <ProjectCard
            title="End-to-End CI/CD Pipeline on AWS"
            description="Automating the build, test, and deployment of a Java web application on the AWS ecosystem."
            image="/images/aws-devops.png"
            git="https://github.com/MOOUUAAD/aws-devops-web-project/blob/master/README.md"
            link=""
          />

          <ProjectCard
            title="Three-Tier Web App on AWS"
            description="A fully functional, scalable Three-Tier Web Application by integrating a variety of powerful AWS services"
            image="/images/3-tier-app.png"
            git="https://github.com/MOOUUAAD/aws-three-tier-app/blob/main/README.md"
            link=""
          />

          <ProjectCard
            title="Association NIA"
            description="Responsive website for association NIA with a landing page and a health chatbot page"
            image="/images/1.png"
            git="https://github.com/MOOUUAAD/Health-Chatbot-NIA/blob/main/README.md"
            link="https://associaionnia.vercel.app/"
          />

          <ProjectCard
            title="Movies Recommendation"
            description="Responsive website for movies recommendations"
            image="/images/Movies-Recommendations.png"
            git="https://github.com/MOOUUAAD/Movies-Recommendations-website/blob/main/README.md"
            link="https://movies-recommendations.vercel.app/"
          />

          <ProjectCard
            title="Mercedes-AMG"
            description="Responsive landing page clone for Mercedes-AMG"
            image="/images/Mercedes-AMG.png"
            git="https://github.com/MOOUUAAD/Mercedes-AMG/blob/main/README.md"
            link="https://mercedes-amg.vercel.app/"
          />

          <ProjectCard
            title="World Cup 2030"
            description="Web application for tickets reservation for World Cup Morocco 2030"
            image="/images/4.png"
            git="https://github.com/MOOUUAAD/World-Cup-2030-tickets-reservation/blob/main/README.md"
            link=""
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Certifications;
