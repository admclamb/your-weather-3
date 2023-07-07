import React from "react";

type Props = {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  className?: string;
  placeholder?: string;
};

const FormInput = ({ input, setInput, className, placeholder }: Props) => {
  const changeInput = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setInput(value);
  };
  return (
    <input
      value={input}
      onChange={changeInput}
      className={`py-1 px-3 rounded${className && " " + className}`}
      placeholder={placeholder}
    />
  );
};

export default FormInput;
