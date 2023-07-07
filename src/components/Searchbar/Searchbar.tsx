import { useState } from "react";
import FormInput from "../Form/FormInput/FormInput";
import ButtonClear from "../Button/ButtonClear/ButtonClear";

type Props = {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  className?: string;
};

const Searchbar = ({ setSearch, className = "" }: Props) => {
  const [input, setInput] = useState<string>("");
  const submitSearch = () => {
    setSearch(input);
  };
  return (
    <form
      onSubmit={submitSearch}
      className={`relative${className && " " + className}`}
    >
      <FormInput input={input} setInput={setInput} className="w-full" />
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
