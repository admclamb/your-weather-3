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
      <ul className="absolute top-full w-full border-t-orange-600 border-t-2">
        <li>
          <button
            className="text-neutral-700 p-3 bg-white w-full text-left rounded-b"
            onFocus={() => setIsDropdownOpen(true)}
            onClick={useCurrentLocation}
          >
            <i className="fa-solid fa-location-arrow text-orange-600 pr-3"></i>
            Use your current location
          </button>
        </li>
      </ul>
    )
  );
};

export default SearchbarDropdown;
