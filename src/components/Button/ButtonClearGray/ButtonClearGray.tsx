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
  type?: string;
};

const ButtonClearGray = ({
  link = "",
  onClick,
  children,
  className = "",
  role = "button",
  width,
  padding,
  id,
}: Props) => {
  return (
    <Button
      link={link}
      onClick={onClick}
      role={role}
      padding={padding}
      className={`bg-inherit hover:bg-neutral-600 active:bg-neutral-500 ${width} rounded duration-200 ease-out focus:outline outline-2 outline-offset-2 outline-orange-600 ${
        className && " " + className
      }`}
      id={id}
    >
      {children}
    </Button>
  );
};

export default ButtonClearGray;
