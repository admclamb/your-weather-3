import React from "react";
import Button from "../Button";

type Props = {
  link?: string;
  onClick: (arg: any) => any;
  children?: React.ReactNode;
  className?: string;
  role?: string;
  width?: string;
  padding?: string;
  id?: string;
  type?: "button" | "submit" | "reset" | undefined;
};

const ButtonPrimary = ({
  link = "",
  onClick,
  children,
  className = "",
  role = "button",
  width = "min-w-[4rem]",
  id,
  type,
}: Props) => {
  return (
    <Button
      link={link}
      onClick={onClick}
      role={role}
      className={`bg-red-600 hover:bg-red-700 active:bg-red-800 text-white rounded ${width} duration-200 ease-out focus:outline outline-2 outline-offset-2 outline-orange-600${
        className && " " + className
      }`}
      id={id}
      type={type}
    >
      {children}
    </Button>
  );
};

export default ButtonPrimary;
