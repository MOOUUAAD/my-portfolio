"use client";

import Image from "next/image";
import hero from "/public/images/hero3.png";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className=" h-full flex flex-col justify-start lg:flex-row lg:justify-start lg:items-center px-6 md:px-12 lg:px-16 xl:px-20">
        <div className="h-1/2 relative lg:h-full lg:w-1/2 flex justify-center items-center z-0">
          <Image src={hero} alt="" className=" object-contain" fill />
        </div>

        <div className="h-1/2 gap-8 flex flex-col justify-start lg:justify-center lg:h-full lg:w-1/2 text-black">
          <div className="mx-auto max-w-xl ltr:sm:text-left rtl:sm:text-right">
            <span className="font-semibold">Hi, my name is</span>
            <h2 className="text-4xl font-bold mb-2  md:text-6xl">MOUAD</h2>

            <p className="text-lg font-semibold my-6">
              Step into my digital playground! As a frontend developer, I have a
              passion for crafting visually stunning and user-friendly digital
              experiences. Let's collaborate to create something extraordinary
              together!
            </p>

            <div className="mt-8">
              <Link
                href="/about"
                className="inline-block rounded bg-[#000000] px-12 py-3 text-sm text-white transition hover:bg-transparent hover:bg-blue-300 hover:text-black duration-200 font-bold "
              >
                Know more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
