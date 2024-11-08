"use client";

import { NavLinks, NavRight } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React,  { useState }from "react";
import { BsChevronDown } from "react-icons/bs";
import SearchBar from "./SearchBar";
import { Activity, FlightData, Hotel } from "@/constants/interface";

const Navbar = () => {
  const [addedActivities, setAddedActivities] = useState<Activity[]>([]);
  const [addedFlights, setAddedFlights] = useState<FlightData[]>([]);
  const [addedHotels, setAddedHotels] = useState<Hotel[]>([]);


  const [flights, setFlights] = useState<FlightData[]>([]);
  const [activities, setActivities] = useState<Activity[]>([]);
  const [hotels, setHotels] = useState<Hotel[]>([]);


  const handleFlightAddRemove = (flight: FlightData) => {
    const flightIndex = flights.findIndex(
      (f) => f.iataCode === flight.iataCode
    );
    if (flightIndex === -1) {
      setFlights([...flights, flight]);
    } else {
      setFlights(flights.filter((f) => f.iataCode !== flight.iataCode));
    }
  };

  const handleActivityAddRemove = (activity: Activity) => {
    const activityIndex = activities.findIndex((a) => a.id === activity.id);
    if (activityIndex === -1) {
      setActivities([...activities, activity]);
    } else {
      setActivities(activities.filter((a) => a.id !== activity.id));
    }
  };

  const handleHotelAddRemove = (hotel: Hotel) => {
    const hotelIndex = hotels.findIndex((h) => h.hotel_id === hotel.hotel_id);
    if (hotelIndex === -1) {
      setHotels([...hotels, hotel]);
    } else {
      setHotels(hotels.filter((h) => h.hotel_id !== hotel.hotel_id)); 
    }
  };

  return (
    <nav className="navbar text-small">
      <div className="flexBetween">
        <div className="flex gap-6">
          <Link href="/">
            <Image src="/images/logo.svg" width={54} height={54} alt="logo" />
          </Link>
          <SearchBar
            onActivityAddRemove={handleActivityAddRemove}
            onFlightAddRemove={handleFlightAddRemove}
            onHotelAddRemove={handleHotelAddRemove}
          />
        </div>

        <ul className="xl:flex text-xs gap-5">
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.key}>
              <div className="flex flex-col items-center gap-2">
                <Image src={link.icon} width={22} height={22} alt={link.key} />
                {link.text}
              </div>
            </Link>
          ))}
          <div className="divider"></div>
          <button className="bg-blue-300 h-10 w-24 py-2 px-4 rounded-md text-white ">
            Subscribe
          </button>
          {NavRight.map((link) => (
            <Link href={link.href} key={link.key}>
              <div className="flex flex-col items-center gap-2">
                <Image src={link.icon} width={22} height={22} alt={link.key} />
                {link.text}
              </div>
            </Link>
          ))}
          <Image src="/images/Person.svg" width={42} height={42} alt="logo" />
          <BsChevronDown size={20} />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;