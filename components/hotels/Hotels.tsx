"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import HotelCard from "./HotelCard";
import EmptyStateCard from "../EmptyStateCard";
import { PiWarehouseBold } from "react-icons/pi";
import { Hotel } from "@/constants/interface";

const Hotels = () => {
  const [hotels, setHotels] = useState<Hotel[]>([]);

  useEffect(() => {
    const addedHotels = JSON.parse(localStorage.getItem("addedHotels") || "[]");
    setHotels(addedHotels);
  }, []);

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

      {hotels.length > 0 ? (
        hotels.map((hotel) => (
          <HotelCard
            key={hotel.hotel_id}
            cardImage={hotel.property.photoUrls[0]}
            cardTitle={hotel.property.name}
            address={hotel.property.countryCode}
            currency={hotel.property.priceBreakdown.grossPrice.currency}
            excludedPrice={hotel.property.priceBreakdown.excludedPrice.value}
            grossPrice={hotel.property.priceBreakdown.grossPrice.value}
            reviewScore={hotel.property.reviewScore}
            reviewCount={hotel.property.reviewCount}
            checkInDate={hotel.property.checkinDate}
            checkOutDate={hotel.property.checkoutDate}
          />
        ))
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
