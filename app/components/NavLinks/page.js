"use client";

import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/projects", title: "Projects" },
  { url: "/contact", title: "Contact" },
];

const NavLinks = () => {
  const pathName = usePathname();

  console.log("pathName", pathName);
  console.log("links", links);

  return links.map((link) => (
    <Link
      href={link.url}
      className={`hover:bg-black hover:text-white duration-150 px-4 py-2 rounded-full ${
        pathName == link.url && "bg-black text-white"
      }`}
    >
      {link.title}
    </Link>
  ));
};

export default NavLinks;
