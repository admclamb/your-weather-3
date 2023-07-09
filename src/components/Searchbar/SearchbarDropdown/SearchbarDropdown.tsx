import React, { useState } from "react";
import Browser from "../../../api/Browser";
import ErroHandler from "../../../errors/ErrorHandler";
import ErrorAlertFixed from "../../../errors/ErrorAlertFixed/ErrorAlertFixed";
import { useAppDispatch } from "../../../hooks/hooks";
import OpenWeather from "../../../api/OpenWeather";
import { addLocation } from "../../../slices/locationSlice";
import { useNavigate } from "react-router-dom";
type Props = {
  isDropdownOpen: boolean;
  setIsDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SearchbarDropdown = ({ isDropdownOpen, setIsDropdownOpen }: Props) => {
  const [error, setError] = useState<{ message: string } | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const useCurrentLocation = async () => {
    try {
      setError(null);
      setIsLoading(true);
      const coordinates = await Browser.getCoordinates();
      if (
        (coordinates.lat !== 0 && !coordinates.lat) ||
        (coordinates.lon !== 0 && !coordinates.lon)
      ) {
        throw new Error("Error getting coordinates");
      }
      const response = await OpenWeather.getLocationByCoords(
        coordinates.lat,
        coordinates.lon
      );
      console.log("RESPONSE: ", response);
      if (response.data) {
        dispatch(addLocation(response.data[0]));
        navigate("/weather");
      }
    } catch (error) {
      setError(ErroHandler.handle(error));
    } finally {
      setIsLoading(false);
      setIsDropdownOpen(false);
    }
  };
  return (
    isDropdownOpen && (
      <>
        <ErrorAlertFixed error={error} setError={setError} showClose={true} />
        <ul className="absolute top-full w-full border-t-orange-600 border-t-2">
          <li>
            <button
              className="text-neutral-700 p-3 bg-white w-full text-left rounded-b focus:outline outline-2 outline-offset-2 outline-orange-600"
              onFocus={() => setIsDropdownOpen(true)}
              onClick={useCurrentLocation}
            >
              <i className="fa-solid fa-location-arrow text-orange-600 pr-3"></i>
              {error
                ? "Error using your current location"
                : isLoading
                ? "Loading..."
                : "Use your current location"}
            </button>
          </li>
        </ul>
      </>
    )
  );
};

export default SearchbarDropdown;
