import React from "react";
import LogoIcon from "./LogoIcon/LogoIcon";
import { Link } from "react-router-dom";

type Props = {};

const Logo = (props: Props) => {
  return (
    <Link to="/">
      <h1 className="text-xl">
        <LogoIcon />
        <span className="text-lg ml-2">Weatherly</span>
      </h1>
    </Link>
  );
};

export default Logo;
