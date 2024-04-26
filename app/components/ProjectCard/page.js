"use client";

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
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;
  useEffect(() => {
    animate(color, colors, {
      ease: "easeInOut",
      repeat: Infinity,
      duration: 10,
      repeatType: "mirror",
    });
  }, []);
  return (
    <motion.div
      style={{ boxShadow }}
      class="relative w-2/3 h-90 m-6 flex flex-col rounded-lg text-surface shadow-secondary-1 text-black z-40"
    >
      <div className="md:h-[60%] h-1/2 w-full overflow-hidden relative group">
        <div className=" hidden md:flex w-full justify-center gap-4 absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 opacity-0 group-hover:opacity-100 z-10 duration-200">
          <a target="_blank" href={git} className="">
            <FaGithub size={40} className="" />
          </a>
          <a target="_blank" href={link} className="">
            <FaLink size={40} className="" />
          </a>
        </div>

        <img
          class="h-full w-full md:group-hover:scale-[104%] md:group-hover:brightness-[30%] duration-300"
          src={image}
          alt=""
        />
      </div>
      <div class="h-1/2 md:p-6 p-4 md:h-[40%] bg-black">
        <h5 class="mb-2 md:text-xl font-bold leading-tight text-center ">
          {title}
        </h5>
        <p class="mb-4 text-sm ">{description}</p>
        <div className="flex">
          <a href={git} className="md:hidden ">
            <FaGithub size={24} className=" m-4 " />
          </a>
          <a target="_blank" href={link} className="">
            <FaLink size={24} className=" m-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
