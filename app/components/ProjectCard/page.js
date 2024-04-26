"use client"

import { FaGithub, FaLink } from "react-icons/fa";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
} from "framer-motion";
import { useEffect } from "react";

const ProjectCard = ({ title, description, image, git, link }) => {
  const colors = ["#14e81e", "#00ea8d", "#017ed5", "#b53dff", "#8d00c4"];
  const color = useMotionValue(colors[0]);
  const border = useMotionTemplate`0.5px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;
  useEffect(() => {
    animate(color, colors, {
      ease: "easeInOut",
      repeat: Infinity,
      duration: 10,
      repeatType: "mirror",
    });
  }, [])
  return (

    <motion.div style={{boxShadow}} class="relative w-2/3 md:w-[35%] m-6 mt-6 flex flex-col rounded-xl text-surface shadow-secondary-1 dark:bg-surface-dark text-black z-40">
      <div className="h-1/2 w-full overflow-hidden relative group">
        <div className=" hidden md:flex w-full justify-center gap-4 absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 opacity-0 group-hover:opacity-100 z-10 duration-200">

          <a
            target="_blank"
            href={git}
            className=""
          >
            <FaGithub size={40} className="" />
          </a>
          <a
            target="_blank"
            href={link}
            className=""
          >
            <FaLink size={40} className="" />
          </a>
        </div>

        <img
          class="h-full w-full group-hover:scale-[104%] group-hover:brightness-[50%] duration-300"
          src={image}
          alt=""
        />
      </div>
      <div class="md:p-6 p-4 h-1/2 bg-black">
        <h5 class="mb-2 md:text-xl font-bold leading-tight text-center ">
          {title}
        </h5>
        <p class="mb-4 text-sm ">{description}</p>
      </div>
      <a href={git} className="md:hidden">
        <FaGithub
          size={24}
          className="absolute bottom-0 right-0 m-4 group-hover:opacity-100 z-10 duration-200"
        />
      </a>
    </motion.div>
  );
};

export default ProjectCard;
