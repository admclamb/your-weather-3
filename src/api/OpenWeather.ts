import { AxiosResponse } from "axios";
import { parseLocation } from "../utils/parseLocation";
import Api from "./Api";
import { Weather } from "../ts/types/Weather";
import { Location } from "../ts/types/Location";
import { AirPollution } from "../ts/types/AirPollution";
const API_KEY = import.meta.env.VITE_OW_KEY ?? "";
const API_LOCATION_LIMIT = import.meta.env.VITE_LOCATION_LIMIT ?? "";

const getLocationByName = async (
  location: string
): Promise<AxiosResponse<Location[]> | void> => {
  const {
    city = "",
    stateCode = "",
    countryCode = "",
  } = parseLocation(location);
  return await Api.get("/geo/1.0/direct", {
    params: {
      q: `${city}${stateCode && `,${stateCode}`}${
        countryCode && `,${countryCode}`
      }`,
      appid: API_KEY,
    },
  });
};

const getLocationByCoords = async (lat: number, lon: number) => {
  return await Api.get("geo/1.0/reverse", {
    params: {
      lat,
      lon,
      limit: API_LOCATION_LIMIT,
      appid: API_KEY,
    },
  });
};

const getWeather = async (
  lat: number,
  lon: number,
  units: string
): Promise<AxiosResponse<Weather> | null> => {
  return await Api.get<Weather>("/data/3.0/onecall", {
    params: {
      lat,
      lon,
      limit: API_LOCATION_LIMIT,
      units,
      appid: API_KEY,
    },
  });
};

const getAirPollution = async (
  lat: number,
  lon: number
): Promise<AxiosResponse<any | null>> => {
  return await Api.get<AirPollution>("data/2.5/air_pollution", {
    params: {
      lat,
      lon,
      appid: API_KEY,
    },
  });
};

const OpenWeather = {
  getLocationByName,
  getWeather,
  getLocationByCoords,
  getAirPollution,
};

Object.freeze(OpenWeather);
export default OpenWeather;
