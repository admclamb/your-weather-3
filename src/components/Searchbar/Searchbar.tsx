import { useState } from "react";
import FormInput from "../Form/FormInput/FormInput";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import SearchbarDropdown from "./SearchbarDropdown/SearchbarDropdown";
import OutsideAlerter from "../../utils/OutsideAlerter";

type Props = {
  className?: string;
};

const Searchbar = ({ className = "" }: Props) => {
  const [input, setInput] = useState<string>("");
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const submitSearch = async (event: React.FormEvent) => {
    event.preventDefault();
    if (input.length) {
      setInput("");
      navigate("search-locations", { state: { search: input } });
    }
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };
  return (
    <OutsideAlerter className="relative" executable={closeDropdown}>
      <form
        onSubmit={submitSearch}
        className={`relative text-black${className && " " + className}`}
      >
        <Button
          type="submit"
          className="absolute left-0 top-1/2 -translate-y-1/2"
        >
          <i className="fa-solid fa-magnifying-glass"></i>
        </Button>
        <FormInput
          input={input}
          setInput={setInput}
          className="w-full"
          borderRadius={isDropdownOpen ? "rounded-t" : "rounded"}
          placeholder="Search..."
          padding="p-2.5 pl-10"
          onFocus={() => setIsDropdownOpen(true)}
          hideOutline={true}
        />
      </form>
      <SearchbarDropdown
        isDropdownOpen={isDropdownOpen}
        setIsDropdownOpen={setIsDropdownOpen}
      />
    </OutsideAlerter>
  );
};

export default Searchbar;
