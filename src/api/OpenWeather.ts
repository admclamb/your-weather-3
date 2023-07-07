import { parseLocation } from "../utils/parseLocation";
import Api from "./Api";
const API_KEY = import.meta.env.VITE_OW_KEY ?? "";
const getLocationByName = async (location: string) => {
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

const OpenWeather = {
  getLocationByName,
};

Object.freeze(OpenWeather);
export default OpenWeather;
