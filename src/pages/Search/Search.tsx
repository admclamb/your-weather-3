import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import OpenWeather from "../../api/OpenWeather";
import { Location } from "../../ts/types/Location";
import { addLocation } from "../../slices/locationSlice";
import Container from "../../components/Container/Container";
import ErroHandler from "../../errors/ErrorHandler";
import ErrorAlertFixed from "../../errors/ErrorAlertFixed/ErrorAlertFixed";
import { useAppDispatch } from "../../hooks/hooks";
const Search = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [results, setResults] = useState<Location[]>([]);
  const [error, setError] = useState<{ message: string } | null>(null);
  const { state } = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
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
      } catch (err: any) {
        console.error(err);
        setError(ErroHandler.handleApiResponse(err));
      } finally {
        setIsLoading(false);
      }
    })();
  }, [state.search]);

  const selectLocation = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLButtonElement;
    const index = parseInt(target.id);
    dispatch(addLocation(results[index]));
    navigate("/weather");
  };
  console.log(results);
  return (
    <Container className="mx-auto flex flex-col gap-0">
      <ErrorAlertFixed error={error} setError={setError} />
      <div className="p-3">
        <p>
          Showing <b>{results.length && results.length}</b> locations for{" "}
          <b>"{state.search}"</b>
        </p>
        {!results.length && (
          <p className="text-sm mt-1 text-neutral-600">
            To better refine your search results, use commas inbetween city and
            state, and fully spell out states.
          </p>
        )}
      </div>

      <ul className="border-t">
        {isLoading ? (
          <li className="p-3 border-b w-full text-left">
            <p className="font-semibold">Loading...</p>
          </li>
        ) : error ? (
          <li className="p-3 border-b w-full text-left">
            <p className="font-semibold">Error finding location.</p>
          </li>
        ) : results.length ? (
          results.map((result, index) => {
            return (
              <li key={result.name + result.state}>
                <button
                  className="p-3 border-b w-full text-left hover:bg-neutral-100 duration-200 ease-out"
                  data-index={index}
                  onClick={selectLocation}
                >
                  {`${result.name},${result.state && ` ${result.state},`} ${
                    result.country
                  }`}
                </button>
              </li>
            );
          })
        ) : (
          <li className="p-3 border-b w-full text-left">
            <p className="font-semibold">No locations found.</p>
          </li>
        )}
      </ul>
    </Container>
  );
};

export default Search;
