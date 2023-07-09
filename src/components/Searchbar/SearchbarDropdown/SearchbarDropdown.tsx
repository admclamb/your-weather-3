import React from "react";

type Props = {
  isDropdownOpen: boolean;
  setIsDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SearchbarDropdown = ({ isDropdownOpen, setIsDropdownOpen }: Props) => {
  const useCurrentLocation = () => {
    console.log("CLICKED");
    setIsDropdownOpen(false);
  };
  return (
    isDropdownOpen && (
      <ul className="absolute top-full">
        <li>
          <button
            className="text-neutral-700 p-3 bg-white w-full"
            onClick={useCurrentLocation}
          >
            <i className="fa-solid fa-location-arrow text-orange-600"></i>
            Use your current location
          </button>
        </li>
      </ul>
    )
  );
};

export default SearchbarDropdown;
