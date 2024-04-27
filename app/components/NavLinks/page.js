"use client";

import React from "react";
import Link from "next/link";

const NavLinks = ({ link }) => {
  // const pathName= usePathname()

  return (
    <Link
      href={link.url}
      className={`hover:bg-black hover:text-white duration-150 px-4 py-2 rounded-full ${
        false && "bg-black text-white"
      }`}
    >
      {link.title}
    </Link>
  );
};

export default NavLinks;
