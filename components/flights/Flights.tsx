// "use client";

// import { useState } from "react";
// import SearchBar from "@/components/SearchBar";
// import ItinerarySection from "@/components/ItinerarySection";

// const Home = () => {
//   const [hotels, setHotels] = useState<any[]>([]);
//   const [flights, setFlights] = useState<any[]>([]);
//   const [activities, setActivities] = useState<any[]>([]);

//   const addItemToItinerary = (item: any) => {
//     if (item.type === "hotel") {
//       setHotels((prev) => [...prev, item]);
//     } else if (item.type === "flight") {
//       setFlights((prev) => [...prev, item]);
//     } else {
//       setActivities((prev) => [...prev, item]);
//     }
//   };

//   const removeItem = (id: string, type: string) => {
//     if (type === "hotel") {
//       setHotels((prev) => prev.filter((item) => item.id !== id));
//     } else if (type === "flight") {
//       setFlights((prev) => prev.filter((item) => item.id !== id));
//     } else {
//       setActivities((prev) => prev.filter((item) => item.id !== id));
//     }
//   };

//   return (
//     <div>
//       <nav className="bg-gray-800 p-4 text-white">
//         <SearchBar addItemToItinerary={addItemToItinerary} />
//       </nav>

//       <div className="max-w-screen-lg mx-auto mt-8">
//         <ItinerarySection
//           title="Hotels"
//           items={hotels}
//           removeItem={(id) => removeItem(id, "hotel")}
//         />
//         <ItinerarySection
//           title="Flights"
//           items={flights}
//           removeItem={(id) => removeItem(id, "flight")}
//         />
//         <ItinerarySection
//           title="Activities"
//           items={activities}
//           removeItem={(id) => removeItem(id, "activity")}
//         />
//       </div>
//     </div>
//   );
// };

// export default Home;

import Link from "next/link";
import React from "react";
import FlightCard from "./FlightCard";
import EmptyStateCard from "../EmptyStateCard";
import { PiAirplaneInFlightBold } from "react-icons/pi";

const Flights = () => {
  const flightsData = 0;

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

      {flightsData > 0 ? (
        <FlightCard />
      ) : (
        <EmptyStateCard
          emptyImage={"/images/EmptyFlight.svg"}
          emptyLink={"/flights"}
          emptyButton={"Add Flight"}
        />
      )}
    </div>
  );
};

export default Flights;
