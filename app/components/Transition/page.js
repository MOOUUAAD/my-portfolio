"use client";
import React from "react";
import NavBar from "../NavBar/page";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import { usePathname } from "next/navigation";

const Transition = ({ children }) => {
  const pathName = usePathname();
  return (
    <AnimatePresence mode="wait">
      <div
        key={pathName}
        className="h-screen w-screen bg-gradient-to-b from-blue-100 to-purple-300"
      >
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-b-[100px] z-[100]"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <motion.div
          className=" fixed top-0 right-0 left-0 bottom-0 m-auto text-black bg-white font-bold w-full text-center h-20 flex justify-center items-center text-4xl  z-[110]"
          initial={{ opacity:1 }}
          animate={{ opacity:0 }}
          exit={{ opacity:0 }}
          transition={{duration:"0.8",ease:"easeOut"}}
        >{pathName=='/'?"HOME":pathName.toUpperCase().substring(1)}</motion.div>
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-[90]"
          initial={{ height: "140vh" }}
          animate={{ height: "0vh" }}
          transition={{ delay: 0.5 }}
        />
        <div className="h-24">
          <NavBar />
        </div>
        <div className="h-[calc(100vh-96px)]">{children}</div>
      </div>
    </AnimatePresence>
  );
};

export default Transition;
