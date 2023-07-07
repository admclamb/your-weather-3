import LogoIcon from "./LogoIcon/LogoIcon";
import { Link } from "react-router-dom";

type Props = {
  onClick?: (arg0: any) => void;
};

const Logo = ({ onClick }: Props) => {
  if (onClick !== undefined) {
    return (
      <Link
        to="/"
        className=" focus:outline outline-2 outline-offset-2 outline-orange-600 rounded"
        onClick={onClick}
      >
        <h1 className="text-xl">
          <LogoIcon />
          <span className="text-lg ml-2">Weatherly</span>
        </h1>
      </Link>
    );
  }
  return (
    <Link
      to="/"
      className=" focus:outline outline-2 outline-offset-2 outline-orange-600 rounded"
    >
      <h1 className="text-xl">
        <LogoIcon />
        <span className="text-lg ml-2">Weatherly</span>
      </h1>
    </Link>
  );
};

export default Logo;
