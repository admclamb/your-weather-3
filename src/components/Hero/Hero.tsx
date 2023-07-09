import { useEffect, useState } from "react";
import Container from "../Container/Container";
import Searchbar from "../Searchbar/Searchbar";
import Storage from "../../utils/Storage";
import heroBackgroundImg from "./northern-lights.jpg";
const Hero = () => {
  const [recentSearches, setRecentSearches] = useState<Location[]>([]);

  useEffect(() => {
    const foundSearches = Storage.local.get<Location[]>("recent-locations");
    if (foundSearches?.length) {
      setRecentSearches(foundSearches);
    }
  }, []);
  return (
    <section
      className="h-[60vh] bg-black px-3 py-12 text-white"
      style={{
        background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${heroBackgroundImg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
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
  );
};

export default Hero;
