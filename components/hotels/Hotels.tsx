import Link from "next/link";
import React from "react";
import HotelCard from "./HotelCard";
import EmptyStateCard from "../EmptyStateCard";
import { PiWarehouseBold } from "react-icons/pi";

const Hotels = () => {
  const flightsData = 0;

  return (
    <div className="bg-gray-300 p-4 rounded">
      <div className="flexBetween">
        <div className="flex gap-2 items-end">
          <PiWarehouseBold size={22} color={"#fff"} />
          <span className="white-subheading"> Hotels</span>
        </div>
        <Link href={"/hotels"}>
          <button className="w-[153px] h-[46px] rounded-md px-6 py-3 text-center font-medium bg-white text-gray-300 text-xs">
            Add Hotels
          </button>
        </Link>
      </div>

      {flightsData > 0 ? (
        // <HotelCard />
        <></>
      ) : (
        <EmptyStateCard
          emptyImage={"/images/EmptyHotel.svg"}
          emptyLink={"/hotels"}
          emptyButton={"Add Hotel"}
        />
      )}
    </div>
  );
};

export default Hotels;
