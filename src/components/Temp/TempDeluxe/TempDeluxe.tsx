import { useAppSelector } from "../../../hooks/hooks";
import { Weather } from "../../../ts/types/Weather";
import Icon from "../../Icon/Icon";

type Props = {
  weather: Weather;
  showIcon?: boolean;
};

const TempDeluxe = ({ weather, showIcon = false }: Props) => {
  const { units } = useAppSelector((state) => state.units);
  return (
    <div className="w-fit flex">
      {showIcon ? (
        <div>
          <Icon
            icon={weather?.current?.weather[0].icon ?? ""}
            description={
              weather?.current?.weather[0].description ?? "Error loading icon"
            }
          />
        </div>
      ) : null}
      <div className="relative w-fit h-fit">
        <p className="text-7xl font-semibold">
          {weather?.current?.temp.toFixed(0)}°
        </p>
        <p className="text-neutral-600 text-xl font-semibold absolute bottom-0 right-3">
          {units === "imperial" ? "F" : "C"}
        </p>
      </div>
    </div>
  );
};

export default TempDeluxe;
