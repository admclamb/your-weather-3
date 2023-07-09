import { AxiosResponse } from "axios";
import { parseLocation } from "../utils/parseLocation";
import Api from "./Api";
import { Weather } from "../ts/types/Weather";
import { Location } from "../ts/types/Location";
const API_KEY = import.meta.env.VITE_OW_KEY ?? "";

const getLocationByName = async (
  location: string
): Promise<AxiosResponse<Location[]> | void> => {
  const {
    city = "",
    stateCode = "",
    countryCode = "",
  } = parseLocation(location);
  return Api.get(
    `/geo/1.0/${city && `direct?q=${city}`}${stateCode && `, ${stateCode}`}${
      countryCode && `, ${countryCode}`
    }&&appid=${API_KEY}`
  );
};

export const getWeather = async (
  lat: number,
  lon: number,
  units: string
): Promise<AxiosResponse<Weather> | void> => {
  return await Api.get<Weather>(
    `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=${units}&appid=${API_KEY}`
  ).catch((err) => console.log(err));
};

const OpenWeather = {
  getLocationByName,
};

Object.freeze(OpenWeather);
export default OpenWeather;
