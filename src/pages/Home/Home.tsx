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

  console.log(recentSearches);

  return (
    <>
      <section className="h-[40vh] bg-neutral-500 py-12 text-white">
        <Container className="mx-auto flex flex-col gap-3">
          <div className="max-w-[50%]">
            <Searchbar className="drop-shadow" />
          </div>

          <div>
            <p>Recent Locations</p>
            <ul></ul>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Home;
