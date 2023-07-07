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

const ButtonWhite = ({
  link = "",
  onClick,
  children,
  className = "",
  role = "button",
  width = "min-w-[4rem]",
  padding,
}: Props) => {
  return (
    <Button
      link={link}
      onClick={onClick}
      role={role}
      padding={padding}
      className={`bg-white hover:bg-gray-100 active:bg-gray-200 ${width} duration-200 ease-out focus:outline outline-2 outline-offset-2 outline-orange-600${
        className && " " + className
      }`}
    >
      {children}
    </Button>
  );
};

export default ButtonWhite;
