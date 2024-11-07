"use client";

import React, { useEffect, useState } from "react";

interface MinPrice {
  currencyCode: string;
  units: number;
  nanos: number;
}

interface Airline {
  name: string;
  logoUrl: string;
  iataCode: string;
  count: number;
  minPrice: MinPrice;
}

const ItinerarySection = () => {
  const [airlines, setAirlines] = useState<Airline[]>([]);
  const [selectedItems, setSelectedItems] = useState<Airline[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch flight data
  const fetchAirlines = async () => {
    const url =
      "https://booking-com15.p.rapidapi.com/api/v1/flights/searchFlights?fromId=BOM.AIRPORT&toId=DEL.AIRPORT&departDate=2024-11-09&pageNo=1&adults=1&children=0%2C17&sort=BEST&cabinClass=ECONOMY&currency_code=AED";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "b01a73d4dcmsh4e32185f6e394e9p1e78cdjsn03da286e666b",
        "x-rapidapi-host": "booking-com15.p.rapidapi.com",
      },
    };

    try {
      setLoading(true);
      setError(null);

      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const result = await response.json();
      // Extract airlines data from result
      setAirlines(result.data.aggregation.airlines || []);
    } catch (error) {
      setError("Failed to fetch airlines");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Handle search functionality
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  // Add item to selectedItems
  const handleAddItem = (airline: Airline) => {
    setSelectedItems((prevItems) => [...prevItems, airline]);
  };

  // Filter airlines based on search query
  const filteredAirlines = airlines.filter(
    (airline) =>
      airline.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      airline.iataCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
      airline.minPrice.currencyCode
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      airline.minPrice.units.toString().includes(searchQuery)
  );

  useEffect(() => {
    fetchAirlines(); // Fetch airlines when component mounts
  }, []);

  return (
    <div>
      <h1>Flight Search</h1>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search airlines..."
        value={searchQuery}
        onChange={handleSearch}
        className="p-2 border border-gray-300 rounded"
      />

      {/* Loading and Error Handling */}
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {/* Search Results */}
      <div>
        {filteredAirlines.length === 0 ? (
          <p>No airlines found</p>
        ) : (
          <ul>
            {filteredAirlines.map((airline, index) => (
              <li
                key={index}
                className="border-b py-2 flex items-center justify-between"
              >
                <div>
                  <img
                    src={airline.logoUrl}
                    alt={airline.name}
                    className="w-10 h-10 mr-4"
                  />
                  <p>
                    <strong>{airline.name}</strong> ({airline.iataCode})
                  </p>
                  <p>
                    {airline.minPrice.currencyCode} {airline.minPrice.units}
                  </p>
                </div>
                <button
                  onClick={() => handleAddItem(airline)}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Add Item
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Display Selected Items */}
      <div>
        <h2>Selected Airlines</h2>
        {selectedItems.length === 0 ? (
          <p>No airlines added.</p>
        ) : (
          <ul>
            {selectedItems.map((airline, index) => (
              <li key={index} className="py-2">
                <p>
                  {airline.name} ({airline.iataCode})
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ItinerarySection;
