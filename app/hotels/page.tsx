"use client";

import HotelCard from "@/components/hotels/HotelCard";
import EmptyStateCard from "@/components/EmptyStateCard";
import React, {useEffect, useState} from "react";
import { PiWarehouseBold } from "react-icons/pi";
import { searchNewHotels } from "@/app/api/bookingAPI";
import { Hotel } from "@/constants/interface";
import Loader from "@/components/Loader";

const Home = () => {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const data = await searchNewHotels();
        setHotels(data);
      } catch (error) {
        console.error("Failed to fetch hotels:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchHotels();
  }, []);


  if (loading) return <Loader />

  return (
    <div className="min-h-screen p-6 pb-20 gap-16 bg-white rounded">
      <div className="mb-8">
        <h1 className="font-semibold text-xl text-gray-200 mb-1">
          Hotel Itineraries
        </h1>
        <h6 className="font-normal text-base text-gray-100">
          All bookings for hotel are here
        </h6>
      </div>

      <div className="bg-gray-300 p-4 rounded">
        <div className="flexBetween">
          <div className="flex gap-2 items-end">
            <PiWarehouseBold size={22} color={"#fff"} />
            <span className="white-subheading"> Hotels</span>
          </div>
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
    </div>
  );
};

export default Home;
