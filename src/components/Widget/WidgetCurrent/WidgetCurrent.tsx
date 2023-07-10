import { useAppSelector } from "../../../hooks/hooks";
import Card from "../../Card/Card";
import SkeletonWidget from "../../Skeleton/SkeletonWidget/SkeletonWidget";

const WidgetCurrent = () => {
  const { weather } = useAppSelector((state) => state.weather);
  return weather?.current ? <Card></Card> : <SkeletonWidget />;
};

export default WidgetCurrent;
