"use client";

import { NavLinks, NavRight } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
import SearchBar from "./SearchBar";

const Navbar = () => {


  return (
    <nav className="navbar text-small">
      <div className="flexBetween">
        <div className="flex gap-6">
          <Link href="/">
            <Image src="/images/logo.svg" width={54} height={54} alt="logo" />
          </Link>
          <SearchBar />
        </div>

        <ul className="xl:flex text-xs gap-5">
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.key}>
              <div className="flex flex-col items-center gap-2">
                <Image src={link.icon} width={22} height={22} alt={link.key} />
                {link.text}
              </div>
            </Link>
          ))}
          <div className="divider"></div>
          <button className="bg-blue-300 h-10 w-24 py-2 px-4 rounded-md text-white ">
            Subscribe
          </button>
          {NavRight.map((link) => (
            <Link href={link.href} key={link.key}>
              <div className="flex flex-col items-center gap-2">
                <Image src={link.icon} width={22} height={22} alt={link.key} />
                {link.text}
              </div>
            </Link>
          ))}
          <Image src="/images/Person.svg" width={42} height={42} alt="logo" />
          <BsChevronDown size={20} />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;