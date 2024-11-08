import React from "react";
import { IoIosClose } from "react-icons/io";
import {
  PiSuitcaseRolling,
  PiFilmSlateBold,
  PiForkKnifeBold,
  PiUsbBold,
  PiPlus,
  PiPlusBold,
} from "react-icons/pi";
import { FlightCardProps } from "@/constants/interface";

const FlightCard = ({
  cardImage,
  cardTitle,
  currency,
  totalPrice,
  isAdded = false,
  onToggleFlight = () => {},
}: FlightCardProps & { isAdded?: boolean; onToggleFlight?: () => void }) => {
  return (
    <div className="w-[100%] h-[260px] flex rounded overflow-hidden my-4">
      <div className="w-[97%] bg-white p-4 flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center justify-center gap-4">
            <img src={cardImage} className="w-9 h-9" alt={"flight_img"} />
            <div className="flex flex-col gap-1">
              <div className="text-xl font-semibold">
                <span>{cardTitle}</span>
              </div>
              <div className="flex gap-4 font-medium">
                <div className="flexSubCenter text-gray-100 text-sm">
                  <span>AA-829</span>
                </div>
                <div className="w-[70px] h-[30px] rounded-md px-1 py-1 flexCenter font-extralight text-white bg-blue-800 text-[9px]">
                  First Class
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-8 items-center">
            <div className="flex flex-col justify-end items-center">
              <span className="text-xl font-semibold">08:35</span>
              <span>Sun, 20 Aug</span>
            </div>
            <img
              src={"/images/time.svg"}
              className="h-[100px] w-[340px]"
              alt={"flight_img"}
            />
            <div className="flex flex-col justify-start items-center">
              <span className="text-xl font-semibold">21:00</span>
              <span>Sun, 22 Aug</span>
            </div>
          </div>
          <div>
            <span className="text-xl ml-2">{currency}</span>
            <span className="text-xl font-semibold ml-2">{totalPrice}</span>
          </div>
        </div>
        <div className="card-divider" />
        <div className="flex gap-4 text-gray-100 text-sm font-medium">
          <span>Facilities: </span>
          <div className="flexCenter gap-1">
            <PiSuitcaseRolling size={16} />
            <span>Baggage: 20kg, Cabin Baggage: 8kg</span>
          </div>
          <div className="flexCenter gap-1">
            <PiFilmSlateBold size={16} />
            <span>In Flight Entertainment</span>
          </div>
          <div className="flexCenter gap-1">
            <PiForkKnifeBold size={16} /> <span>In Flight meal</span>
          </div>
          <div className="flexCenter gap-1">
            <PiUsbBold size={16} />
            <span>USB Port </span>
          </div>
        </div>
        <div className="card-divider" />
        <div className="flex justify-between text-sm font-medium text-blue-300">
          <div className="flex gap-4">
            <span>Flight Details </span>
            <span>Price Details</span>
          </div>
          <span>Edit Details</span>
        </div>
      </div>

      <div
        className={`w-[3%] flexCenter cursor-pointer ${
          isAdded ? "bg-red-50" : "bg-green-50"
        }`}
        onClick={onToggleFlight}
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

export default FlightCard;
