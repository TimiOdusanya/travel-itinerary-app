import AllSection from "@/components/AllSection";
import Card from "@/components/Card";
import Hero from "@/components/Hero";
import { cardData } from "@/constants";
import Image from "next/image";
import { searchNewActivities, searchNewFlight, searchNewHotels } from "./api/bookingAPI";
import ItinerarySection from "@/components/ItinerarySection";

export default async function Home() {
  // const activities = await searchNewFlight();
  // console.log(activities)
  return (
    <div className="min-h-screen p-6 pb-20 gap-16 bg-white rounded">
      <Hero />
      
      <div className="flex flex-wrap gap-1 my-4">
        {cardData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>

      <AllSection />

      {/* <ItinerarySection /> */}
    </div>
  );
}
