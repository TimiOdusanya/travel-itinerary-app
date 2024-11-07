"use client";

import React, { useEffect, useState } from "react";
import FlightCard from "@/components/flights/FlightCard";
import EmptyStateCard from "@/components/EmptyStateCard";
import { PiAirplaneInFlightBold } from "react-icons/pi";
import { FlightCardProps, FlightData } from "@/constants/interface";
import { searchNewFlight } from "../api/bookingAPI";
import Loader from "@/components/Loader";

const Home = () => {
  const [flightsData, setFlightsData] = useState<FlightCardProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const result: FlightData[] = await searchNewFlight();

        // Map API data to FlightCardProps
        const mappedData = result.map((flight) => ({
          cardImage: flight.logoUrl,
          cardTitle: flight.name,
          currency: flight.minPrice.currencyCode,
          totalPrice: `${flight.minPrice.units}.${flight.minPrice.nanos
            .toString()
            .slice(0, 2)}`, // Format price
        }));

        setFlightsData(mappedData);
      } catch (error) {
        console.error("Error fetching flights:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFlights();
  }, []);


 if (isLoading) return <Loader />;
  return (
    <div className="min-h-screen p-6 pb-20 gap-16 bg-white rounded">
      <div className="mb-8">
        <h1 className="font-semibold text-xl text-gray-200 mb-1">
          Flight Itineraries
        </h1>
        <h6 className="font-normal text-base text-gray-100">
          All Flights bookings are shown here
        </h6>
      </div>

      <div className="bg-gray-25 p-4 rounded">
        <div className="flexBetween">
          <div className="flex gap-2 items-end">
            <PiAirplaneInFlightBold size={22} />
            <span className="subheading"> Flights</span>
          </div>
        </div>

        {flightsData.length > 0 ? (
          flightsData.map((flight, index) => (
            <FlightCard
              key={index}
              cardImage={flight.cardImage}
              cardTitle={flight.cardTitle}
              currency={flight.currency}
              totalPrice={flight.totalPrice}
            />
          ))
        ) : (
          <EmptyStateCard
            emptyImage="/images/EmptyFlight.svg"
            emptyLink="/flights"
            emptyButton="Add Flight"
          />
        )}
      </div>
    </div>
  );
};

export default Home;
