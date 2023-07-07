import React from "react";

type Props = {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  className?: string;
};

const FormInput = ({ input, setInput, className }: Props) => {
  const changeInput = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setInput(value);
  };
  return <input value={input} onChange={changeInput} className={className} />;
};

export default FormInput;
