"use client";
import { animate, motion } from "framer-motion"
import Image from "next/image";
import Link from "next/link";
import logo from "/public/images/logo22.png";
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

const varLinks = {animate}

const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="h-full flex justify-between items-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 z-50">
      <div className="">
        <Link href="/">
          <Image src={logo} alt="logo" width={140} height={140} />
        </Link>
      </div>

      <div className="hidden md:flex justify-center gap-10 font-semibold">
        {links.map(link=><NavLinks link={link}/>)}
      </div>

      <div className="md:hidden ">
        <button className="z-50 relative" onClick={() => setOpen((prev)=>!prev)}>
          {open?<IoMdClose className="w-32 fill-white"/>:<TfiMenu className="w-32"/>}
        </button>

        {open && (
          <div className="absolute h-screen w-screen bg-black text-white top-0 left-0 text-semibold flex flex-col justify-center items-center gap-8 text-4xl z-40">
            {links.map((link) => (
              <Link href={link.url} onClick={() => setOpen((prev)=>!prev)}>{link.title.toUpperCase()}</Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
