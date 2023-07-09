import { Coordinates } from "../ts/types/Coordinates";

const getCoordinates = (): Promise<Coordinates> => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (response) => {
        resolve({
          lon: response.coords.longitude,
          lat: response.coords.latitude,
        });
      },
      (err) => {
        reject(err);
      }
    );
  });
};

const Browser = {
  getCoordinates,
};

Object.freeze(Browser);
export default Browser;
