"use client";
import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard/page";

const Projects = () => {
  return (
    <motion.div
      className="h-full overflow-y-scroll"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div id="projects" className="">
        <div class="flex flex-col md:mx-40 gap-12 justify-center items-center my-6">
          <ProjectCard
            title="Association NIA"
            description="Responsive website for association NIA with a landing page and a health chatbot page"
            image="/images/1.png"
            git="https://github.com/MOOUUAAD/Health-Chatbot-NIA"
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
            description="Simple responsive landing page clone for Mercedes-AMG"
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

export default Projects;
