import Container from "../../components/Container/Container";
import NavbarWeather from "../../components/Navbar/NavbarWeather/NavbarWeather";
import { Outlet } from "react-router-dom";
import { useAppSelector } from "../../hooks/hooks";

const Weather = () => {
  const { weather } = useAppSelector((state) => state.weather);
  const { location } = useAppSelector((state) => state.location);
  console.log("WEATHER: ", weather, location);
  return (
    <>
      <Container className="mx-auto">
        <NavbarWeather />
        <Outlet />
      </Container>
    </>
  );
};

export default Weather;
