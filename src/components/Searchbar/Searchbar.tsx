import { useState } from "react";
import FormInput from "../Form/FormInput/FormInput";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

type Props = {
  className?: string;
};

const Searchbar = ({ className = "" }: Props) => {
  const [input, setInput] = useState<string>("");
  const navigate = useNavigate();

  const submitSearch = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log("SUBMITTTING");
    navigate("search-locations", { state: { search: input } });
  };
  return (
    <form
      onSubmit={submitSearch}
      className={`relative text-black${className && " " + className}`}
    >
      <FormInput
        input={input}
        setInput={setInput}
        className="w-full pr-12"
        placeholder="Search..."
        padding="py-1.5 pl-2 pr-12"
      />
      <Button
        type="submit"
        className="absolute right-0 top-1/2 -translate-y-1/2"
      >
        <i className="fa-solid fa-magnifying-glass"></i>
      </Button>
    </form>
  );
};

export default Searchbar;
