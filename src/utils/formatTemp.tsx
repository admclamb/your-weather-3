import { useAppSelector } from "../hooks/hooks";

type Props = {
  temp: number;
  fontSize?: string;
  unitSize?: string;
  fixTemp?: boolean;
};

export const FormatTemp = ({
  temp,
  fontSize = "text-lg",
  unitSize = "text-lg",
  fixTemp = false,
}: Props) => {
  const { units } = useAppSelector((state) => state.units);
  return (
    <span className={`${fontSize}`}>
      {fixTemp ? temp.toFixed(0) : temp}°
      <span className={`${unitSize}`}>{units === "imperial" ? "F" : "C"}</span>
    </span>
  );
};

export default FormatTemp;
