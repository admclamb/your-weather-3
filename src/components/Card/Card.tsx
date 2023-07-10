import React from "react";

type Props = {
  className?: string;
  padding?: string;
  borderRadius?: string;
  border?: string;
  children?: React.ReactNode;
  backgroundColor?: string;
};

const Card = ({
  className = "",
  padding = "p-3",
  borderRadius = "rounded",
  border = "border",
  children,
  backgroundColor = "bg-white",
}: Props) => {
  return (
    <article
      className={`${padding} ${borderRadius} ${border} ${backgroundColor} ${
        className ? className : ""
      }`}
    >
      {children}
    </article>
  );
};

export default Card;
