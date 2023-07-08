import { Link } from "react-router-dom";
import { useRoutePath } from "../../../hooks/useRoutePath";

const NavbarWeather = () => {
  const [pathname] = useRoutePath();
  console.log("PATH: ", pathname);
  return (
    <ul className="flex gap-3 border-b">
      <li>
        <Link
          to="/"
          className={`p-3 hover:border-orange-500 ${
            pathname === "/weather" ? "border-orange-500" : "border-transparent"
          } border-b-2 block`}
        >
          Today
        </Link>
      </li>
      <li>
        <Link
          to="hourly"
          className={`p-3 hover:border-orange-500 ${
            pathname === "/weather/hourly"
              ? "border-orange-500"
              : "border-transparent"
          } border-b-2 block`}
        >
          Hourly
        </Link>
      </li>
      <li>
        <Link
          to="daily"
          className={`p-3 hover:border-orange-500 ${
            pathname === "/weather/daily"
              ? "border-orange-500"
              : "border-transparent"
          } border-b-2 block`}
        >
          Daily
        </Link>
      </li>
    </ul>
  );
};

export default NavbarWeather;
