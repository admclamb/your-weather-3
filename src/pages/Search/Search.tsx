import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Container from "../../components/Container/Container";
import OpenWeather from "../../api/OpenWeather";
import { ErrorType } from "../../ts/types/Error";
import { Location } from "../../ts/types/Location";
const Search = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [results, setResults] = useState<Location[]>([]);
  const [error, setError] = useState<{ message: string } | null>(null);
  const { state } = useLocation();
  const navigate = useNavigate();
  if (!state.search) {
    navigate("/", {
      state: { error: { message: "No search results have been provided" } },
    });
  }
  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        setError(null);
        setResults([]);
        const response = await OpenWeather.getLocationByName(state.search);
        if (response.data) {
          setResults(response.data);
        }
      } catch (err: ErrorType) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [state.search]);

  const selectLocation = () => {};
  return (
    <Container className="mx-auto py-3 flex flex-col gap-3">
      <p>
        Search results for <b>"{state.search}"</b>
      </p>
      <ul className="border-t">
        {results.map((result) => {
          return (
            <li key={result.name + result.state}>
              <button className="p-3 border-b w-full text-left hover:bg-neutral-100 duration-200 ease-out">
                {`${result.name},${result.state && ` ${result.state},`} ${
                  result.country
                }`}
              </button>
            </li>
          );
        })}
      </ul>
    </Container>
  );
};

export default Search;
