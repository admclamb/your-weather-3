import { useState } from "react";
import FormInput from "../Form/FormInput/FormInput";
import ButtonClear from "../Button/ButtonClear/ButtonClear";

type Props = {
  className?: string;
};

const Searchbar = ({ className = "" }: Props) => {
  const [input, setInput] = useState<string>("");
  const submitSearch = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log("SUBMITTTING");
  };
  return (
    <form
      onSubmit={submitSearch}
      className={`relative text-black${className && " " + className}`}
    >
      <FormInput
        input={input}
        setInput={setInput}
        className="w-full"
        placeholder="Search..."
      />
      <ButtonClear
        type="submit"
        className="absolute right-2 top-1/2 -translate-y-1/2"
      >
        <i className="fa-solid fa-magnifying-glass"></i>
      </ButtonClear>
    </form>
  );
};

export default Searchbar;
