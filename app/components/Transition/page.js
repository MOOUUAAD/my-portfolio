"use client";
import React, { useEffect } from "react";
import NavBar from "../NavBar/page";
import {
  motion,
  AnimatePresence,
  useMotionTemplate,
  useMotionValue,
  animate,
} from "framer-motion";
import { usePathname } from "next/navigation";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Transition = ({ children }) => {
  const pathName = usePathname();
  const colors = ["#14e81e", "#00ea8d", "#017ed5", "#b53dff", "#8d00c4"];
  const color = useMotionValue(colors[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(150% 150% at 50% 115%, #000000 40%, ${color})`;
  useEffect(() => {
    animate(color, colors, {
      ease: "easeInOut",
      repeat: Infinity,
      duration: 10,
      repeatType: "mirror",
    });
  }, []);
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathName}
        className="h-screen w-screen "
        style={{ backgroundImage }}
      >
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-b-[100px] z-20"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <motion.div
          className=" fixed top-0 right-0 left-0 bottom-0 m-auto text-black bg-white font-bold w-full text-center h-20 flex justify-center items-center text-4xl z-30"
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transitionEnd: {
              display: "none",
            },
          }}
          transition={{ duration: "0.8", ease: "easeOut" }}
        >
          {pathName == "/" ? "HOME" : pathName.toUpperCase().substring(1)}
        </motion.div>
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-20"
          initial={{ height: "140vh" }}
          animate={{ height: "0vh" }}
          transition={{ delay: 0.5 }}
        />
        <div className="h-24">
          <NavBar />
        </div>
        <div className="relative z-10 h-[calc(100vh-96px)]">{children}</div>
        <div className="absolute inset-0 z-0">
          <Canvas>
            <Stars radius={50} count={4000} factor={2} fade speed={1.5} />
          </Canvas>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Transition;
