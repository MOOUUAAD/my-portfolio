"use client"

import Image from "next/image";
import hero from "/public/images/hero.png";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div className="h-full" initial={{y:'-200vh'}}
    animate={{y:'0%'}}
    transition={{duration:1}}
    >
      <div className=" h-full flex flex-col lg:flex-row lg:justify-start lg:items-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="h-1/2 relative lg:h-full lg:w-1/2 flex justify-center items-center z-0">
          <Image src={hero} alt="" className=" object-contain" fill />
        </div>

        <div className="h-1/2 gap-8 flex flex-col justify-center lg:h-full lg:w-1/2">
          <div className="mx-auto max-w-xl ltr:sm:text-left rtl:sm:text-right">
            <span className="font-semibold">Hi, my name is</span>
            <h2 className="text-4xl font-bold mb-2  md:text-6xl">MOUAD</h2>

            <p className="text-xl font-semibold my-6">
              Step into my digital playground! As a frontend developer, I have a
              passion for crafting visually stunning and user-friendly digital
              experiences. Let's collaborate to create something extraordinary
              together!
            </p>

            <div className="mt-8">
              <a
                href=""
                className="inline-block rounded bg-[#c4bbf0] px-12 py-3 text-sm font-medium text-[#363b4e] transition hover:bg-gray-100 duration-100 "
              >
                Know more
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
