import React from "react";

type Props = {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  className?: string;
  placeholder?: string;
  padding?: string;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
};

const FormInput = ({
  input,
  setInput,
  className,
  placeholder,
  padding = "p-3",
  onFocus,
  onBlur,
}: Props) => {
  const changeInput = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setInput(value);
  };
  return (
    <input
      value={input}
      onChange={changeInput}
      className={`${padding} outline-2 outline-offset-2 outline-orange-600 rounded${
        className && " " + className
      }`}
      placeholder={placeholder}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
};

export default FormInput;
