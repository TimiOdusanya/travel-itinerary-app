import { Activity, Hotel } from "@/constants/interface";
import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = "booking-com15.p.rapidapi.com";

if (!API_KEY) {
  throw new Error("API_KEY is missing in the environment variables.");
}


export const searchNewActivities = async (): Promise<Activity[]> => {
  const headers = {
    "x-rapidapi-key": API_KEY,
    "x-rapidapi-host": BASE_URL,
  };

  const response = await fetch(
    "https://booking-com15.p.rapidapi.com/api/v1/attraction/searchAttractions?id=eyJ1ZmkiOi0yMDkyMTc0fQ%3D%3D&sortBy=trending&page=1&currency_code=INR&languagecode=en-us",
    {
      headers: headers,
    }
  );

  const result = await response.json();

  const data = result.data.products;

  // console.log("dataaaa", data);

  return data;
};


export const searchNewHotels = async () : Promise<Hotel[]> => {
  const headers = {
    "x-rapidapi-key": API_KEY,
    "x-rapidapi-host": BASE_URL,
  };

  const response = await fetch(
    "https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels?dest_id=-2092174&search_type=CITY&arrival_date=2024-11-08&departure_date=2024-12-12&adults=1&children_age=0%2C17&room_qty=1&page_number=1&units=metric&temperature_unit=c&languagecode=en-us&currency_code=AED",
    {
      headers: headers,
    }
  );

  
  const result = await response.json();

  const data = result.data.hotels;

  // console.log("dataaaa", data);

  return data;
};


export const searchNewFlight = async () => {
  const headers = {
    "x-rapidapi-key": API_KEY,
    "x-rapidapi-host": BASE_URL,
  };

  const response = await fetch(
    "https://booking-com15.p.rapidapi.com/api/v1/flights/searchFlights?fromId=BOM.AIRPORT&toId=DEL.AIRPORT&departDate=2024-11-08&pageNo=1&adults=1&children=0%2C17&sort=BEST&cabinClass=ECONOMY&currency_code=AED",
    {
      headers: headers,
    }
  );

  const result = await response.json();


  const data = result.data.aggregation.airlines;

  // console.log("dataaaa", data);

  return data;
};