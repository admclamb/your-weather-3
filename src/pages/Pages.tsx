import { Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "./Home/Home";
import NotFound from "./NotFound/NotFound";
import Search from "./Search/Search";
import Weather from "./Weather/Weather";

const Pages = () => {
  return (
    <Layout>
      <Routes>
        <Route index element={<Home />} />
        <Route path="search-locations" element={<Search />} />
        <Route path="weather" element={<Weather />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

export default Pages;
