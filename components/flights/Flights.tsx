"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import FlightCard from "./FlightCard";
import EmptyStateCard from "../EmptyStateCard";
import { PiAirplaneInFlightBold } from "react-icons/pi";
import { FlightData } from "@/constants/interface";

const Flights = () => {
  const [flights, setFlights] = useState<FlightData[]>([]);

  useEffect(() => {
    const addedFlights = JSON.parse(
      localStorage.getItem("addedFlights") || "[]"
    );
    setFlights(addedFlights);
  }, []);

  const handleToggleFlight = (flight: FlightData) => {
    const addedFlights = JSON.parse(
      localStorage.getItem("addedFlights") || "[]"
    );

    const isFlightInList = addedFlights.some(
      (f: FlightData) => f.name === flight.name
    );

    let updatedFlights;
    if (isFlightInList) {
      updatedFlights = addedFlights.filter(
        (f: FlightData) => f.name !== flight.name
      );
    } else {
      updatedFlights = [...addedFlights, flight];
    }

    localStorage.setItem("addedFlights", JSON.stringify(updatedFlights));
    setFlights(updatedFlights);
  };

  return (
    <div className="bg-gray-25 p-4 rounded">
      <div className="flexBetween">
        <div className="flex gap-2 items-end">
          <PiAirplaneInFlightBold size={22} />
          <span className="subheading"> Flights</span>
        </div>
        <Link href={"/flights"}>
          <button className="w-[153px] h-[46px] rounded-md px-6 py-3 text-center font-medium bg-white text-blue-300 text-xs">
            Add Flights
          </button>
        </Link>
      </div>

      {flights.length > 0 ? (
        flights.map((flight, index) => (
          <FlightCard
            key={index}
            cardImage={flight.logoUrl}
            cardTitle={flight.name}
            currency={flight.minPrice.currencyCode}
            totalPrice={flight.minPrice.units}
            isAdded={flights.some((f) => f.name === flight.name)}
            onToggleFlight={() => handleToggleFlight(flight)}
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
  );
};

export default Flights;
