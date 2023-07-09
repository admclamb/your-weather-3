import { useState, useEffect } from "react";
import Container from "../../components/Container/Container";
import Searchbar from "../../components/Searchbar/Searchbar";
import { Location } from "../../ts/types/Location";
import Storage from "../../utils/Storage";

const Home = () => {
  const [recentSearches, setRecentSearches] = useState<Location[]>([]);

  useEffect(() => {
    const foundSearches = Storage.local.get<Location[]>("recent-locations");
    if (foundSearches?.length) {
      setRecentSearches(foundSearches);
    }
  }, []);

  console.log("RECENT: ", recentSearches);

  return (
    <>
      <section className="h-[40vh] bg-black px-3 py-12 text-white">
        <Container className="mx-auto flex flex-col gap-3">
          <div className="w-full md:max-w-[50%]">
            <h3 className="text-xl font-semibold mb-2">Search Your City</h3>
            <Searchbar className="drop-shadow" />
          </div>

          {recentSearches.length ? (
            <div>
              <p>Recent Locations</p>
              <ul></ul>
            </div>
          ) : null}
        </Container>
      </section>
    </>
  );
};

export default Home;
