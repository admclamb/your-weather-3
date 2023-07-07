import React from "react";
import { Link } from "react-router-dom";

type Props = {
  link?: string;
  onClick?: (arg: any) => any;
  children?: React.ReactNode;
  className?: string;
  role?: string;
  width?: string;
  padding?: string;
  id?: string;
  type?: "button" | "submit" | "reset" | undefined;
};

const Button = ({
  link = "",
  onClick,
  children,
  className = "",
  role = "button",
  padding = "px-3 py-2",
  id,
  type = "button",
}: Props) => {
  const parentClass = className;
  if (link) {
    if (onClick !== undefined) {
      return (
        <Link
          className={`${parentClass} ${padding}`}
          to={link}
          id={id}
          onClick={onClick}
        >
          {children}
        </Link>
      );
    }
    return (
      <Link className={`${parentClass} ${padding}`} to={link} id={id}>
        {children}
      </Link>
    );
  } else {
    if (onClick !== undefined) {
      return (
        <button
          onClick={onClick}
          className={`${parentClass} ${padding} outline-2 outline-offset-2 outline-orange-600`}
          role={role}
          id={id}
          type={type}
        >
          {children}
        </button>
      );
    } else {
      return (
        <button
          className={`${parentClass} ${padding} outline-2 outline-offset-2 outline-orange-600`}
          role={role}
          id={id}
          type={type}
        >
          {children}
        </button>
      );
    }
  }
};

export default Button;
