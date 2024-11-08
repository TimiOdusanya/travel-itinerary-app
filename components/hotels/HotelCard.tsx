import React from 'react'
import Image from "next/image";
import { IoIosClose } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { PiBedFill, PiCalendarBlank, PiClock, PiPlusBold, PiSwimmingPoolBold, PiWineBold } from "react-icons/pi";
import { truncateText } from "../../utils/truncateText";
import { HotelCardProps } from "@/constants/interface";

const HotelCard = ({
  cardImage,
  cardTitle,
  address,
  currency,
  excludedPrice,
  grossPrice,
  reviewScore,
  reviewCount,
  checkInDate,
  checkOutDate,
  isAdded = false,
  onToggle = () => {},
}: HotelCardProps & { isAdded?: boolean; onToggle?: () => void }) => {
  return (
    <div className="w-[100%] h-[260px] flex rounded overflow-hidden my-4">
      <div className="w-[97%] bg-white p-4 flex gap-4">
        <div className="card-img">
          <img src={cardImage} alt="empty_image" className="card-img" />
        </div>

        <div className="flex flex-col gap-4 w-[100%]">
          <div className="flex justify-between py-3">
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-semibold m-0">{cardTitle}</h3>
              <div className="text-sm max-w-[400px]">
                <span>Mumbai, India</span>
              </div>
              <div className="flex gap-4 font-medium">
                <div className="flexSubCenter text-blue-300 text-sm">
                  <IoLocationOutline size={16} />
                  <span>Directions</span>
                </div>
                <div className="flexSubCenter text-gray-100 text-sm">
                  <FaStar size={16} color={"#F4B93E"} />
                  <span>{reviewScore}</span>
                  <span>({reviewCount})</span>
                </div>
                <div className="flexSubCenter text-gray-100 text-sm">
                  <PiBedFill size={16} color={"#344054"} />
                  <span>King size room</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1 items-end">
              <div>
                <span className="text-xl ml-2">{currency}</span>
                <span className="text-xl font-semibold ml-2">
                  {excludedPrice.toFixed(2)}
                </span>
              </div>
              <span className="text-[12px] ml-4">
                Total Price: {grossPrice.toFixed(2)}
              </span>
              <span className="text-[12px] ml-4">
                1 room x 10 nights incl. taxes
              </span>
            </div>
          </div>
          <div className="card-divider" />
          <div className="flex justify-between py-2">
            <div className="flex gap-4 text-gray-100 text-sm font-medium">
              <span>Facilities: </span>
              <span className="flexCenter gap-1">
                <PiSwimmingPoolBold size={16} /> Pool
              </span>
              <span className="flexCenter gap-1">
                <PiWineBold size={16} /> Bar
              </span>
            </div>
            <div className="flexCenter gap-4 text-gray-100 text-sm font-medium">
              <span className="flexCenter gap-1">
                <PiCalendarBlank size={16} />
                Check In: {checkInDate}
              </span>
              <span className="flexCenter gap-1">
                <PiCalendarBlank size={16} />
                Check Out: {checkOutDate}
              </span>
            </div>
          </div>
          <div className="card-divider" />

          <div className="flex justify-between text-sm font-medium text-blue-300">
            <div className="flex gap-4">
              <span>Hotel Details </span>
              <span>Price Details</span>
            </div>
            <span>Edit Details</span>
          </div>
        </div>
      </div>

      <div
        className={`w-[3%] flexCenter cursor-pointer ${
          isAdded ? "bg-red-50" : "bg-green-50"
        }`}
        onClick={onToggle}
      >
        {isAdded ? (
          <IoIosClose size={32} color={"#9E0A05"} />
        ) : (
          <PiPlusBold size={20} color={"#0A9E05"} />
        )}
      </div>
    </div>
  );
};

export default HotelCard;