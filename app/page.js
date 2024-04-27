"use client";

import Image from "next/image";
import hero from "/public/images/hero3.png";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
} from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Home() {
  const pathName = usePathname()
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
  }, [pathName]);
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className=" h-full flex flex-col justify-start lg:flex-row lg:justify-start lg:items-center px-6 md:px-12 lg:px-16 xl:px-20">
        <div className="h-1/2 relative lg:h-full lg:w-1/2 flex justify-center items-center">
          <Image src={hero} alt="hero" width="auto" height="auto" className=" object-contain "/>
        </div>

        <div className="h-1/2 gap-8 flex flex-col justify-start lg:justify-center lg:h-full lg:w-1/2 text-black">
          <div className="mx-auto max-w-xl ltr:sm:text-left rtl:sm:text-right">
            <span className="font-semibold">Hi, my name is</span>
            <h2 className="text-4xl font-bold mb-2  md:text-6xl">MOUAD</h2>
            <span className="text-lg font-semibold my-6">
              Step into my digital playground!
            </span>
            <p className="">
              As a frontend developer, I have a passion for crafting visually
              stunning and user-friendly digital experiences. Let's collaborate
              to create something extraordinary together!
            </p>

            <div className="mt-8 flex relative z-10">
              <motion.button
                style={{ boxShadow, border }}
                className={`inline-block rounded-full px-6 py-3 bg-black transition duration-200 font-bold cursor-pointer`}
              >
                <Link href="/about" className="relative top-0 z-10">
                  Know more
                </Link>
              </motion.button>
              
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
