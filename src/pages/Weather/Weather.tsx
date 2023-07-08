import { useSelector } from "react-redux";
import Container from "../../components/Container/Container";
import NavbarWeather from "../../components/Navbar/NavbarWeather/NavbarWeather";
import { Outlet } from "react-router-dom";

const Weather = () => {
  const { weather } = useSelector((state) => state.weather);
  const { location } = useSelector((state) => state.location);
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
