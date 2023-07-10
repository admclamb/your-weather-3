import dayjs from "dayjs";
import { useAppSelector } from "../../../hooks/hooks";
import Card from "../../Card/Card";
import SkeletonWidget from "../../Skeleton/SkeletonWidget/SkeletonWidget";
import ButtonClear from "../../Button/ButtonClear/ButtonClear";
import TempDeluxe from "../../Temp/TempDeluxe/TempDeluxe";

const WidgetCurrent = () => {
  const { weather } = useAppSelector((state) => state.weather);
  const { units } = useAppSelector((state) => state.units);
  return weather?.current ? (
    <Card>
      <div>
        <div className="flex">
          <div className="flex-1">
            <h3 className="uppercase font-semibold text-sm">Current Weather</h3>
            <p className="text-sm text-neutral-700 font-semibold">
              {dayjs(new Date()).format("h:mmA")}
            </p>
            <div>
              <TempDeluxe weather={weather} showIcon />
            </div>
          </div>
          <ul className="flex-1 hidden lg:block">
            <li className="w-full border-b py-2 flex justify-between items-center">
              <span>Wind Gust</span>
              <span className="font-semibold">
                {Array.isArray(weather?.hourly) && weather?.hourly[0].wind_gust}{" "}
                {units === "imperial" ? "MPH" : ""}
              </span>
            </li>
            <li className="w-full border-b py-2 flex justify-between items-center">
              <span>Humidity</span>
              <span className="font-semibold">
                {weather?.current?.humidity}
              </span>
            </li>
            <li className="w-full border-b py-2 flex justify-between items-center">
              <span>UVI</span>
              <span className="font-semibold">{weather?.current?.uvi}</span>
            </li>
            <li className="w-full py-2 flex justify-between items-center">
              <span>Rain</span>
              <span className="font-semibold">
                {Array.isArray(weather?.hourly) && weather?.hourly[0].pop * 100}
                %
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <p className="capitalize">{weather?.current?.weather[0].description}</p>
        <ButtonClear>
          MORE DETAILS<i className="ml-2 fa-solid fa-arrow-right"></i>
        </ButtonClear>
      </div>
    </Card>
  ) : (
    <SkeletonWidget />
  );
};

export default WidgetCurrent;
