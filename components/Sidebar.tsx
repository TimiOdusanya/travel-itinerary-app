import React from 'react'
import { NavLinks, SideBarMenu } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { PiCaretUpDown } from "react-icons/pi";


const Sidebar = () => {
  return (
    <nav className="sidebar">
      <div>
        <ul className="xl:flex flex-col text-small gap-7 p-4">
          {SideBarMenu.map((link) => (
            <Link href={link.href} key={link.key}>
              <div className="flex items-center gap-2">
                <Image src={link.icon} width={22} height={22} alt={link.key} />
                {link.text}
              </div>
            </Link>
          ))}
        </ul>
        <div className="flexCenter w-[220px] h-[72px] rounded-md py-3 gap-1 bg-gray-25 mt-12 text-xs">
          <div className="h-10 w-10 p-4 rounded flexCenter bg-blue-300 text-white">
            <span>Go</span>
          </div>
          <span className="text-xs text-gray-100 mr-3">Personal Account</span>
          <PiCaretUpDown size={26} />
        </div>
      </div>
    </nav>
  );
}

export default Sidebar