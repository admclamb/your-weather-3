import { useState, useEffect } from "react";
import { AirPollution } from "../../../ts/types/AirPollution";
import { useAppSelector } from "../../../hooks/hooks";
import { AxiosError } from "axios";
import OpenWeatherError from "../../../ts/types/OpenWeatherError";
import ErroHandler from "../../../errors/ErrorHandler";
import OpenWeather from "../../../api/OpenWeather";
import Card from "../../Card/Card";
import SkeletonWidget from "../../Skeleton/SkeletonWidget/SkeletonWidget";

const WidgetAirQuality = () => {
  const [airPollution, setAirPollution] = useState<AirPollution | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<{ message: string } | null>(null);
  const [isInfoOpen, setIsInfoOpen] = useState<boolean>(false);

  console.log(isLoading);
  const { location } = useAppSelector((state) => state.location);

  const qualities: any = {
    1: { description: "Good", color: "text-green-700" },
    2: { description: "Fair", color: "text-cyan-700" },
    3: { description: "Poor", color: "text-yellow-700" },
    4: { description: "Very Poor", color: "text-red-700" },
  };
  let quality: {
    description: string;
    color: string;
  } | null = null;
  if (airPollution) {
    quality = qualities[airPollution?.main?.aqi];
  }

  const toggleInfo = () => {
    setIsInfoOpen((curr: boolean) => !curr);
  };

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(false);
        setError(null);
        setAirPollution(null);
        if (!location?.lat || !location?.lon) {
          throw new Error("No location has been provided");
        }
        const response = await OpenWeather.getAirPollution(
          location.lat,
          location.lon
        );
        if (response && response.data) {
          setAirPollution(response.data.list[0]);
        }
      } catch (err) {
        if (error?.message) {
          setError(error);
        } else {
          const axiosError = error as AxiosError<OpenWeatherError>;
          setError(ErroHandler.handleApiResponse(axiosError));
        }
      } finally {
        setIsLoading(false);
      }
    })();
  }, [location.name]);

  console.log(isLoading);

  return airPollution ? (
    <Card>
      <h3 className="uppercase font-semibold text-sm">Air Quality</h3>
      <div className="py-4">
        <p className="text-center">Today's Air quality is</p>
        <p className={`text-center text-2xl font-semibold ${quality?.color}`}>
          {quality?.description}
        </p>
      </div>
      <div>
        <ul
          className={`grid grid-cols-2 gap-x-5 duration-200 ease-in ${
            isInfoOpen ? "h-fit" : "hidden h-0"
          }`}
        >
          <li className="font-semibold border-b py-3 flex">
            CO{" "}
            <span className="font-normal ml-auto">
              {airPollution.components.co}
            </span>
          </li>
          <li className="font-semibold border-b py-3 flex">
            O3{" "}
            <span className="font-normal ml-auto">
              {airPollution.components.o3}
            </span>
          </li>
          <li className="font-semibold border-b py-3 flex">
            NO2{" "}
            <span className="font-normal ml-auto">
              {airPollution.components.no2}
            </span>
          </li>
          <li className="font-semibold border-b py-3 flex">
            SO2{" "}
            <span className="font-normal border-b ml-auto">
              {airPollution.components.so2}
            </span>
          </li>
        </ul>
        <div className="flex">
          <button
            className={`ml-auto p-2 duration-200 ease-out ${
              isInfoOpen ? "rotate-180" : "rotate-0"
            }`}
            onClick={toggleInfo}
          >
            <i className="fa-solid fa-chevron-up"></i>
          </button>
        </div>
      </div>
    </Card>
  ) : (
    <SkeletonWidget />
  );
};

export default WidgetAirQuality;
