import Image from "next/image";
import React from "react";
import { HiOutlineArrowRight } from "react-icons/hi";
import { PiCalendarBlankLight, PiUserPlusBold, PiDotsThreeBold } from "react-icons/pi";

const Hero = () => {
  return (
    <div className="flex flex-col gap-4">
      <img src="images/banner.svg" alt="banner" />
      <div className="flex justify-between items-start">
        <div>
          <div className="inline-flex items-center gap-1 px-2 py-1 text-sm bg-brown-50 text-brown-100 font-medium mb-2">
            <PiCalendarBlankLight size={16} /> <span>21 March 2024</span>
            <HiOutlineArrowRight size={16} /> <span>21 April 2024</span>
          </div>
          <h1 className="font-semibold text-2xl mb-2">Bahamas Family Trip</h1>
          <h6 className="font-medium text-base text-gray-100">
            New York, United States of America | Solo Trip
          </h6>
        </div>
        <div className="flex gap-2 items-center">
          <button className="flexCenter px-2 py-1 text-sm bg-blue-50 text-blue-300 font-medium w-40 h-10">
            <PiUserPlusBold size={16} />
          </button>
          <PiDotsThreeBold size={24} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
