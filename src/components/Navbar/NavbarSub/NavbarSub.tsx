import { useAppSelector } from "../../../hooks/hooks";
import { toInitials } from "../../../utils/toInitials";
import Container from "../../Container/Container";
import Temp from "../../Temp/Temp";

const NavbarSub = () => {
  const { location } = useAppSelector((state) => state.location);
  const { weather } = useAppSelector((state) => state.weather);
  console.log("LOCATION: ", location, weather);
  return location?.name ? (
    <div className="bg-neutral-800 text-white p-3">
      <Container className="mx-auto">
        <p className="text-sm">
          {location.name}, {location?.state ? toInitials(location.state) : ""}{" "}
          {weather?.current?.temp ? (
            <Temp
              temp={weather?.current?.temp}
              fontSize="text-sm"
              unitSize="text-sm"
              fixTemp
            />
          ) : (
            ""
          )}
        </p>
      </Container>
    </div>
  ) : null;
};

export default NavbarSub;
