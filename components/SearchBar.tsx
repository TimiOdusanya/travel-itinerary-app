import { useState, useEffect, useRef } from "react";
import { FlightData } from "@/constants/interface";
import {
  searchNewFlight,
  searchNewActivities,
  searchNewHotels,
} from "@/app/api/bookingAPI";
import { PiPlus, PiMinus } from "react-icons/pi";
import FilterOptions from "./FilterOptions";
import { Activity, Hotel } from "@/constants/interface";

const SearchBar = ({
  onFlightAddRemove,
  onActivityAddRemove,
  onHotelAddRemove,
}: {
  onFlightAddRemove: (flight: FlightData) => void;
  onActivityAddRemove: (activity: Activity) => void;
  onHotelAddRemove: (hotel: Hotel) => void;
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [flightsData, setFlightsData] = useState<FlightData[]>([]);
  const [activitiesData, setActivitiesData] = useState<Activity[]>([]);
  const [hotelsData, setHotelsData] = useState<Hotel[]>([]);
  const [filteredResults, setFilteredResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [addedFlights, setAddedFlights] = useState<FlightData[]>([]);
  const [addedActivities, setAddedActivities] = useState<Activity[]>([]);
  const [addedHotels, setAddedHotels] = useState<Hotel[]>([]);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      const flightData = await searchNewFlight();
      const activityData = await searchNewActivities();
      const hotelData = await searchNewHotels();
      setFlightsData(flightData);
      setActivitiesData(activityData);
      setHotelsData(hotelData);
      setLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const storedFlights = JSON.parse(
      localStorage.getItem("addedFlights") || "[]"
    );
    const storedActivities = JSON.parse(
      localStorage.getItem("addedActivities") || "[]"
    );
    const storedHotels = JSON.parse(
      localStorage.getItem("addedHotels") || "[]"
    );
    setAddedFlights(storedFlights);
    setAddedActivities(storedActivities);
    setAddedHotels(storedHotels);
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchTerm(query);

    const flightResults = flightsData.filter((flight) => {
      const { name, iataCode, minPrice } = flight;
      return (
        name.toLowerCase().includes(query.toLowerCase()) ||
        iataCode.toLowerCase().includes(query.toLowerCase()) ||
        minPrice.currencyCode.toLowerCase().includes(query.toLowerCase()) ||
        minPrice.units.toString().includes(query)
      );
    });

    const activityResults = activitiesData.filter((activity) => {
      const { name, primaryPhoto, shortDescription, representativePrice } =
        activity;
      return (
        name.toLowerCase().includes(query.toLowerCase()) ||
        shortDescription.toLowerCase().includes(query.toLowerCase()) ||
        representativePrice.currency
          .toLowerCase()
          .includes(query.toLowerCase()) ||
        representativePrice.chargeAmount.toString().includes(query)
      );
    });

    const hotelResults = hotelsData.filter((hotel) => {
      const { property } = hotel;
      return (
        property.name.toLowerCase().includes(query.toLowerCase()) ||
        property.countryCode.toLowerCase().includes(query.toLowerCase()) ||
        property.priceBreakdown.excludedPrice.currency
          .toLowerCase()
          .includes(query.toLowerCase()) ||
        property.priceBreakdown.grossPrice.currency
          .toLowerCase()
          .includes(query.toLowerCase()) ||
        property.priceBreakdown.excludedPrice.value
          .toString()
          .includes(query) ||
        property.priceBreakdown.grossPrice.value.toString().includes(query)
      );
    });

    setFilteredResults([...flightResults, ...activityResults, ...hotelResults]);
    setDropdownVisible(
      [...flightResults, ...activityResults, ...hotelResults].length > 0
    );
  };

  const handleAddRemove = (
    item: any,
    type: "flight" | "activity" | "hotel"
  ) => {
    let addedItems: any[] = [];
    if (type === "flight") {
      addedItems = JSON.parse(localStorage.getItem("addedFlights") || "[]");
      const index = addedItems.findIndex((i) => i.iataCode === item.iataCode);
      if (index === -1) {
        addedItems.push(item);
      } else {
        addedItems.splice(index, 1);
      }
      localStorage.setItem("addedFlights", JSON.stringify(addedItems));
      setAddedFlights(addedItems);
      onFlightAddRemove(item);
    } else if (type === "activity") {
      addedItems = JSON.parse(localStorage.getItem("addedActivities") || "[]");
      const index = addedItems.findIndex((i) => i.id === item.id);
      if (index === -1) {
        addedItems.push(item);
      } else {
        addedItems.splice(index, 1);
      }
      localStorage.setItem("addedActivities", JSON.stringify(addedItems));
      setAddedActivities(addedItems);
      onActivityAddRemove(item);
    } else if (type === "hotel") {
      addedItems = JSON.parse(localStorage.getItem("addedHotels") || "[]");
      const index = addedItems.findIndex((i) => i.hotel_id === item.hotel_id);
      if (index === -1) {
        addedItems.push(item);
      } else {
        addedItems.splice(index, 1);
      }
      localStorage.setItem("addedHotels", JSON.stringify(addedItems));
      setAddedHotels(addedItems);
      onHotelAddRemove(item);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full max-w-md mx-auto">
      <input
        type="text"
        placeholder="🔍 Search"
        className="w-[370px] px-4 py-3 border-none rounded-md bg-gray-25 font-extralight text-[13px] focus:outline-none focus:ring-1 focus:ring-blue-300"
        onChange={handleSearch}
        value={searchTerm}
      />
      {!loading && filteredResults.length > 0 && dropdownVisible && (
        <div
          ref={dropdownRef}
          className="absolute top-full left-0 w-full mt-1 bg-white border-none rounded shadow-lg max-h-[500px] overflow-y-auto"
        >
          <FilterOptions />
          <div className="p-4">
            {filteredResults.map((item: any) => {
              if ("iataCode" in item) {
                return (
                  <div
                    key={item.iataCode}
                    className="flex items-center justify-between mb-3 py-2"
                  >
                    <div>
                      <img
                        src={item.logoUrl}
                        alt={item.name}
                        className="w-8 h-8 mr-2"
                      />
                      <span>{item.name}</span>
                    </div>
                    <div className="flex flex-col gap-2 items-end">
                      <div>
                        <span className="font-extralight">
                          {item.minPrice.currencyCode}{" "}
                        </span>
                        <span>{item.minPrice.units}</span>
                      </div>
                      <button
                        className={`py-1 text-white text-[10px] rounded-md flexCenter gap-1 ${
                          addedFlights.some((f) => f.iataCode === item.iataCode)
                            ? "bg-red-500 px-2"
                            : "bg-blue-500 px-5"
                        }`}
                        onClick={() => handleAddRemove(item, "flight")}
                      >
                        {addedFlights.some(
                          (f) => f.iataCode === item.iataCode
                        ) ? (
                          <PiMinus size={12} />
                        ) : (
                          <PiPlus size={12} />
                        )}
                        {addedFlights.some((f) => f.iataCode === item.iataCode)
                          ? "Remove"
                          : "Add"}
                      </button>
                    </div>
                  </div>
                );
              }

              if ("id" in item) {
                return (
                  <div
                    key={item.id}
                    className="flex items-center justify-between mb-3 py-2"
                  >
                    <div>
                      <img
                        src={item.primaryPhoto?.small}
                        alt={item.name}
                        className="w-10 h-10 mr-2 rounded"
                      />
                      <span>{item.name}</span>
                    </div>
                    <div className="flex flex-col gap-2 items-end">
                      <div>
                        <span className="font-extralight">
                          {item.representativePrice.currency}{" "}
                        </span>
                        <span>{item.representativePrice.chargeAmount}</span>
                      </div>
                      <button
                        className={`py-1 text-white text-[10px] rounded-md flexCenter gap-1 ${
                          addedActivities.some((a) => a.id === item.id)
                            ? "bg-red-500 px-2"
                            : "bg-blue-500 px-5"
                        }`}
                        onClick={() => handleAddRemove(item, "activity")}
                      >
                        {addedActivities.some((a) => a.id === item.id) ? (
                          <PiMinus size={12} />
                        ) : (
                          <PiPlus size={12} />
                        )}
                        {addedActivities.some((a) => a.id === item.id)
                          ? "Remove"
                          : "Add"}
                      </button>
                    </div>
                  </div>
                );
              }

              if ("hotel_id" in item) {
                return (
                  <div
                    key={item.hotel_id}
                    className="flex items-center justify-between mb-3 py-2"
                  >
                    <div>
                      <img
                        src={item.property.photoUrls[0]}
                        alt={item.property.name}
                        className="w-8 h-8 mr-2"
                      />
                      <span>{item.property.name}</span>
                    </div>
                    <div className="flex flex-col gap-2 items-end">
                      <div>
                        <span className="font-extralight">
                          {item.property.priceBreakdown.grossPrice.currency}{" "}
                        </span>
                        <span>
                          {item.property.priceBreakdown.grossPrice.value}
                        </span>
                      </div>
                      <button
                        className={`py-1 text-white text-[10px] rounded-md flexCenter gap-1 ${
                          addedHotels.some((h) => h.hotel_id === item.hotel_id)
                            ? "bg-red-500 px-2"
                            : "bg-blue-500 px-5"
                        }`}
                        onClick={() => handleAddRemove(item, "hotel")}
                      >
                        {addedHotels.some(
                          (h) => h.hotel_id === item.hotel_id
                        ) ? (
                          <PiMinus size={12} />
                        ) : (
                          <PiPlus size={12} />
                        )}
                        {addedHotels.some((h) => h.hotel_id === item.hotel_id)
                          ? "Remove"
                          : "Add"}
                      </button>
                    </div>
                  </div>
                );
              }

              return null;
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
