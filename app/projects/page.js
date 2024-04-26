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
        <h1 className="font-bold text-4xl py-3 text-center">My Work</h1>
        <div class="flex flex-wrap md:mx-40 justify-center mt-10">
          <ProjectCard
            title="Health Chatbot"
            description="first project"
            image="/images/Health-ChatBot.png"
            link="https://associaionnia.vercel.app/"
          />

          <ProjectCard
            title="Movies Recommendation"
            description="second project"
            image="/images/Movies-Recommendations.png"
            git="https://github.com/MOOUUAAD/Movies-Recommendations-website/blob/main/README.md"
          />

          <ProjectCard
            title="Mercedes-AMG Landing Page"
            description="third project"
            image="/images/Mercedes-AMG.png"
            git="https://github.com/MOOUUAAD/Mercedes-AMG/blob/main/README.md"
          />

          <ProjectCard
            title="World Cup 2030 Tickets Reservation"
            description="forth project"
            image="/images/1.png"
            git="https://github.com/MOOUUAAD/World-Cup-2030-tickets-reservation/blob/main/README.md"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
