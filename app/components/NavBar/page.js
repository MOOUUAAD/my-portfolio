"use client";
import { animate, delay, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import logo from "/public/images/logo.png";
import React, { useState } from "react";
import { TfiMenu } from "react-icons/tfi";
import { IoMdClose } from "react-icons/io";
import NavLinks from "../NavLinks/page";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/projects", title: "Projects" },
  { url: "/contact", title: "Contact" },
];

const varNav = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      when: "afterChildren",
      staggerDirection: -1,
    },
  },
};

const varLink = {
  visible: { opacity: 1, y: -40 },
  hidden: { opacity: 0, y: 10 },
};

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-full flex justify-between items-center px-8 md:px-12 lg:px-16 xl:px-20">
      <div className="z-10">
        <Link href="/">
          <Image src={logo} alt="logo" width={100} height={100} />
        </Link>
      </div>

      <div className="hidden md:flex justify-center gap-10 font-semibold z-10">
        {links.map((link, index) => (
          <NavLinks key={index} link={link} />
        ))}
      </div>

      <div className="md:hidden">
        <button
          className="relative z-50 px-4"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? (
            <IoMdClose className="  fill-white" size={26} />
          ) : (
            <TfiMenu className="  fill-black" size={26} />
          )}
        </button>

        {open && (
          <motion.div
            className="absolute h-screen w-screen bg-black text-white top-0 left-0 text-semibold flex flex-col justify-center items-center gap-8 text-4xl z-40"
            initial="hidden"
            animate={open ? "visible" : "hidden"}
            variants={varNav}
          >
            {links.map((link) => (
              <Link href={link.url} onClick={() => setOpen((prev) => !prev)}>
                <motion.li variants={varLink} className="text-white list-none">
                  {link.title.toUpperCase()}
                </motion.li>
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
