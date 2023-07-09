import { useState } from "react";
import FormInput from "../Form/FormInput/FormInput";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import SearchbarDropdown from "./SearchbarDropdown/SearchbarDropdown";

type Props = {
  className?: string;
};

const Searchbar = ({ className = "" }: Props) => {
  const [input, setInput] = useState<string>("");
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const submitSearch = async (event: React.FormEvent) => {
    event.preventDefault();
    setInput("");
    navigate("search-locations", { state: { search: input } });
  };
  return (
    <div>
      <form
        onSubmit={submitSearch}
        className={`relative text-black${className && " " + className}`}
      >
        <FormInput
          input={input}
          setInput={setInput}
          className={`w-full ${isDropdownOpen ? "rounded-t" : "rounded"}`}
          placeholder="Search..."
          padding="p-2.5 pr-12"
          onFocus={() => setIsDropdownOpen(true)}
          onBlur={() => setIsDropdownOpen(false)}
        />
        <Button
          type="submit"
          className="absolute right-0 top-1/2 -translate-y-1/2"
        >
          <i className="fa-solid fa-magnifying-glass"></i>
        </Button>
      </form>
      <SearchbarDropdown
        isDropdownOpen={isDropdownOpen}
        setIsDropdownOpen={setIsDropdownOpen}
      />
    </div>
  );
};

export default Searchbar;
