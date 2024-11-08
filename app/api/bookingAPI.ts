import { flightData, hotelData, activitiesData } from "@/constants/data";
import { Activity, Hotel } from "@/constants/interface";
import axios from "axios";

const API_KEY = "75381c4b3dmshd55c48fccf5f60ep19523cjsn4aa5a2595ee3";
// const API_KEY = "";
const BASE_URL = "booking-com15.p.rapidapi.com";



export const searchNewActivities = async (): Promise<Activity[]> => {
  try {
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
    if (!response.ok) {
      throw new Error("API call failed");
    }

    const result = await response.json();
    const data = result.data.products;

    return data;
  } catch (error) {
    console.error("Error fetching activities:", error);
    // Rapid API has a limit of 20 API calls interactions (rate limit exceeded)
    return activitiesData;
  }
};



export const searchNewHotels = async (): Promise<Hotel[]> => {
  try {
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

    if (!response.ok) {
      throw new Error("API call failed");
    }

    const result = await response.json();
    const data = result.data.hotels;

    return data;
  } catch (error) {
    console.error("Error fetching hotels:", error);
    // Rapid API has a limit of 20 API calls interactions (rate limit exceeded)
    return hotelData;
  }
};


export const searchNewFlight = async (): Promise<any[]> => {
  try {
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


    if (!response.ok) {
      throw new Error("API call failed");
    }

    const result = await response.json();
    const data = result.data.aggregation.airlines;

    return data;
  } catch (error) {
    console.error("Error fetching flights:", error);
    // Rapid API has a limit of 20 API calls interactions (rate limit exceeded)
    return flightData;
  }
};