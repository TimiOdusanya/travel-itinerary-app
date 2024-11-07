// contexts/ItineraryContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";

// Define types based on your API data structure
export type ItineraryItem = {
  id: string;
  name: string;
  category: "flights" | "hotels" | "activities";
  // Add other properties as required by each type
};

type ItineraryContextType = {
  itineraries: Record<"flights" | "hotels" | "activities", ItineraryItem[]>;
  addItem: (item: ItineraryItem) => void;
};

const ItineraryContext = createContext<ItineraryContextType | undefined>(
  undefined
);

export const ItineraryProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [itineraries, setItineraries] = useState({
    flights: [],
    hotels: [],
    activities: [],
  });

  const addItem = (item: ItineraryItem) => {
    setItineraries((prev) => ({
      ...prev,
      [item.category]: [...prev[item.category], item],
    }));
  };

  return (
    <ItineraryContext.Provider value={{ itineraries, addItem }}>
      {children}
    </ItineraryContext.Provider>
  );
};

export const useItinerary = () => {
  const context = useContext(ItineraryContext);
  if (!context)
    throw new Error("useItinerary must be used within ItineraryProvider");
  return context;
};
