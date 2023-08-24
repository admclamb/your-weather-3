import Container from "../../components/Container/Container";
import NavbarWeather from "../../components/Navbar/NavbarWeather/NavbarWeather";
import { Outlet } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { useEffect, useState } from "react";
import { addWeather, removeWeather } from "../../slices/weatherSlice";
import OpenWeather from "../../api/OpenWeather";
import ErroHandler from "../../errors/ErrorHandler";
import { AxiosError } from "axios";
import OpenWeatherError from "../../ts/types/OpenWeatherError";

const Weather = () => {
  const { location } = useAppSelector((state) => state.location);
  const { units } = useAppSelector((state) => state.units);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<{ message: string } | null>(null);
  const dispatch = useAppDispatch();
  console.log(isLoading);
  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        setError(null);
        if (!location?.lat || !location?.lon) {
          throw new Error("No location has been provided");
        }
        dispatch(removeWeather());
        const response = await OpenWeather.getWeather(
          location.lat,
          location.lon,
          units
        );
        if (response && response.data) {
          dispatch(addWeather(response.data));
        }
      } catch (err) {
        if (error?.message) {
          setError(error);
        } else {
          const axiosError = error as AxiosError<OpenWeatherError>;
          setError(ErroHandler.handleApiResponse(axiosError));
        }
      }
    })();
  }, [location.name, units]);

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
